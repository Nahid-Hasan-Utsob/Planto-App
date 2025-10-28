import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './AddToCartButton.module.css';

// 💡 নতুন: Props টাইপ তৈরি করা হলো
interface AddToCartButtonProps {
  /** * যখন প্রোডাক্ট সফলভাবে কার্টে যোগ করার অ্যানিমেশন শেষ হবে, তখন এই ফাংশনটি কল হবে।
   * এই ফাংশনটি আপনার অ্যাপ্লিকেশন লজিকে (যেমন Redux, Context, বা API কল) প্রোডাক্ট যোগ করবে।
   */
  onAddToCart?: () => void;
}

type Timer = ReturnType<typeof setTimeout> | undefined;

// 💡 নতুন: Props হিসাবে onAddToCart গ্রহণ করা
const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => {
  const [isTapisRoulant, setIsTapisRoulant] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const objectAnimationRef = useRef<HTMLDivElement>(null);
  const tapisAnimationRef = useRef<HTMLDivElement>(null);
  
  const timer = useRef<Timer>(undefined);
  const timer2 = useRef<Timer>(undefined);

  const clearTimers = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    if (timer2.current) clearTimeout(timer2.current);
    timer.current = undefined;
    timer2.current = undefined;
  }, []);

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  const handleButtonClick = () => {
    clearTimers();
    
    // Cancel লজিক (পূর্বের মতোই)
    if (isTapisRoulant && !isAdded) {
      if (objectAnimationRef.current) objectAnimationRef.current.style.animationPlayState = 'paused';
      if (tapisAnimationRef.current) tapisAnimationRef.current.style.animationPlayState = 'paused';

      setIsCanceled(true);
      if (buttonRef.current) buttonRef.current.style.pointerEvents = 'none';

      timer.current = setTimeout(() => {
        if (buttonRef.current) buttonRef.current.style.pointerEvents = 'initial';
        setIsTapisRoulant(false);
        setIsCanceled(false);
      }, 1000);
    } 
    // Add to Cart লজিক
    else if (!isTapisRoulant) {
      setIsTapisRoulant(true);
      if (objectAnimationRef.current) objectAnimationRef.current.style.animationPlayState = 'running';
      if (tapisAnimationRef.current) tapisAnimationRef.current.style.animationPlayState = 'running';

      timer.current = setTimeout(() => {
        setIsAdded(true);
        // 💡 মূল পরিবর্তন: এখানে onAddToCart কল হবে
        // onAddToCart(); 
        
        if (buttonRef.current) buttonRef.current.style.pointerEvents = 'none';

        timer2.current = setTimeout(() => {
          setIsAdded(false);
          setIsTapisRoulant(false);
          if (buttonRef.current) buttonRef.current.style.pointerEvents = 'initial';
        }, 1600);
      }, 1400); // অ্যানিমেশন শুরু হওয়ার 1.4 সেকেন্ড পরে (যখন প্রোডাক্ট স্ক্যানিং শেষ হয়)
    }
  };

  const buttonClasses = [
    styles.btn,
    isTapisRoulant ? styles['tapis-roulant'] : '',
    isAdded ? styles.added : '',
    isCanceled ? styles.canceled : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.container}>
      <button 
        ref={buttonRef}
        className={buttonClasses} 
        onClick={handleButtonClick}
      >
        <span>
          <div className={styles.caddie}>
            {/* ... caddie HTML structure ... */}
            <div className={styles['caddie__top-support']}></div>
            <div className={styles.caddie__top}></div>
            <div className={styles['caddie__body']}></div>
            <div className={styles.caddie__trou}></div>
            <div className={styles.caddie__trou2}></div>
            <div className={styles['caddie__body-left']}></div>
            <div className={styles.caddie__roue}></div>
            <div className={styles.caddie__roue2}></div>
            <div className={styles.caddie__trou3}></div>
          </div>
          Add to cart
        </span>
        
        {/* div:nth-child(2) - Conveyor belt container */}
        <div>
          <div ref={tapisAnimationRef}>
            {Array.from({ length: 24 }).map((_, i) => <i key={i}></i>)}
          </div>
        </div>

        {/* div:nth-child(3) - Caisse (Scanner box) */}
        <div>
          <div></div>
          <div></div>
        </div>

        {/* div:nth-child(4) - Objet (Product item) */}
        <div>
          <div ref={objectAnimationRef}>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* div:nth-child(5) - notification succes */}
        <div>
          <div>$9.99</div>
        </div>

        {/* div:nth-child(6) - notification cancel */}
        <div>
          <div>Canceled</div>
        </div>
      </button>
    </div>
  );
};

export default AddToCartButton;