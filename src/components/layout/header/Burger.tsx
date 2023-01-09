import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close burger menu if clicked outside burger
  useEffect(() => {
    const handleClass = (e: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(e.target as HTMLDivElement)) setOpen(false)
    };

    document.addEventListener("mousedown", handleClass);
    return () => document.removeEventListener("mousedown", handleClass);
  }, []);

  return (
    <div className="Header-burger">
      <div
        className={open ? "burger-menu flex-col active" : "burger-menu flex-col"}
        onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="burger-menu-content" ref={menuRef}>
        <Link className="burger-menu-content-link" to={"/"}>home</Link>
        <Link className="burger-menu-content-link" to={"/browse/1"}>browse</Link>
        <Link className="burger-menu-content-link" to={"/contact"}>contact</Link>
      </div>
    </div>
  );
};

export default Burger;