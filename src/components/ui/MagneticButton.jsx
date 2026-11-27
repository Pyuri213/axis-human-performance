import { useRef, useState } from "react";

const MagneticButton = ({
  children,
  className = "",
  strength = 0.22,
  onClick,
  type = "button",
  ...props
}) => {
  const buttonRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    if (
      !buttonRef.current ||
      e.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const rect = buttonRef.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    setOffset({
      x: Math.max(-10, Math.min(10, relX * strength)),
      y: Math.max(-8, Math.min(8, relY * strength)),
    });
  };

  const handlePointerLeave = () => {
    if (offset.x !== 0 || offset.y !== 0) {
      setOffset({ x: 0, y: 0 });
    }
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
      className={`transition-[transform,filter,box-shadow] duration-200 ease-out active:scale-[0.97] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
