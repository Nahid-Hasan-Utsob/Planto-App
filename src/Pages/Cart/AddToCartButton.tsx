import React, { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import styles from "./AddToCartButton.module.css";
import type { Product } from "../../hooks/types";
import type { RootState } from "../../redux/store";

interface AddToCartButtonProps {
  product?: Product;
}

type Timer = ReturnType<typeof setTimeout> | undefined;

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isAlreadyAdded = product
    ? cartItems.some((item) => item.id === product.id)
    : false;

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
    return () => clearTimers();
  }, [clearTimers]);

  // 🔹 যদি product না থাকে
  if (!product) {
    return (
      <div className={styles.container}>
        <button className={styles.btn} disabled>
          Add to cart
        </button>
      </div>
    );
  }

  const handleButtonClick = () => {
    if (isAlreadyAdded) return; // ✅ stop multiple add

    clearTimers();
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
      setIsTapisRoulant(true);
      if (objectAnimationRef.current)
        objectAnimationRef.current.style.animationPlayState = "running";
      if (tapisAnimationRef.current)
        tapisAnimationRef.current.style.animationPlayState = "running";

      timer.current = setTimeout(() => {
        setIsAdded(true);
        dispatch(addToCart(product));
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
      <button
        ref={buttonRef}
        className={`${buttonClasses} ${isAlreadyAdded ? styles.disabled : ""}`}
        onClick={handleButtonClick}
        disabled={isAlreadyAdded} // ✅ disable button if already added
      >
        <span>
          <div className={styles.caddie}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          {isAlreadyAdded ? "Added Product" : "Add to cart"}
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
          <div>${product.price}</div>
        </div>
        <div>
          <div>Canceled</div>
        </div>
      </button>
    </div>
  );
};

export default AddToCartButton;
