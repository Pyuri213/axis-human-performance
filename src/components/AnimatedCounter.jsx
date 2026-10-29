import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedCounter = ({ value, className = "" }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const strVal = String(value);
    // Match optional prefix (+/-), number (int or float), and suffix (%, x, °, etc.)
    // Avoid animating fractions like "24/7"
    if (strVal.includes("/")) {
      el.textContent = strVal;
      return;
    }

    const match = strVal.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      el.textContent = strVal;
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const targetNum = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const counterObj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counterObj, {
        val: targetNum,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = `${prefix}${counterObj.val.toFixed(decimals)}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={elRef} className={className}>
      {value}
    </span>
  );
};

export default AnimatedCounter;
