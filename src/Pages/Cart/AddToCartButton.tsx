import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./AddToCartButton.module.css";

interface AddToCartButtonProps {
  
  onAddToCart?: () => void;

}

type Timer = ReturnType<typeof setTimeout> | undefined;

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

    // Cancel logic
    if (isTapisRoulant && !isAdded) {
      if (objectAnimationRef.current)
        objectAnimationRef.current.style.animationPlayState = "paused";
      if (tapisAnimationRef.current)
        tapisAnimationRef.current.style.animationPlayState = "paused";

      setIsCanceled(true);
      if (buttonRef.current) buttonRef.current.style.pointerEvents = "none";

      timer.current = setTimeout(() => {
        if (buttonRef.current) buttonRef.current.style.pointerEvents = "initial";
        setIsTapisRoulant(false);
        setIsCanceled(false);
      }, 1000);
    } else if (!isTapisRoulant) {
      // Add to Cart logic
      setIsTapisRoulant(true);
      if (objectAnimationRef.current)
        objectAnimationRef.current.style.animationPlayState = "running";
      if (tapisAnimationRef.current)
        tapisAnimationRef.current.style.animationPlayState = "running";

      timer.current = setTimeout(() => {
        setIsAdded(true);
        // onAddToCart && onAddToCart();

        if (buttonRef.current) buttonRef.current.style.pointerEvents = "none";

        timer2.current = setTimeout(() => {
          setIsAdded(false);
          setIsTapisRoulant(false);
          if (buttonRef.current)
            buttonRef.current.style.pointerEvents = "initial";
        }, 1600);
      }, 1400);
    }
  };

  const buttonClasses = [
    styles.btn,
    isTapisRoulant ? styles["tapis-roulant"] : "",
    isAdded ? styles.added : "",
    isCanceled ? styles.canceled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.container}>
      <button ref={buttonRef} className={buttonClasses} onClick={handleButtonClick}>
        <span>
          <div className={styles.caddie}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          Add to cart
        </span>

        <div>
          <div ref={tapisAnimationRef}>
            {Array.from({ length: 24 }).map((_, i) => (
              <i key={i}></i>
            ))}
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>

        <div>
          <div ref={objectAnimationRef}>
            <div></div>
            <div></div>
          </div>
        </div>

        <div>
          <div>$9.99</div>
        </div>

        <div>
          <div>Canceled</div>
        </div>
      </button>
    </div>
  );
};

export default AddToCartButton;
