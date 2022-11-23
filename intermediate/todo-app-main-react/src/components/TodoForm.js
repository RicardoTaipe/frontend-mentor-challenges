import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";
import { useState, useEffect, useRef } from "react";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [theme, setTheme] = useState(iconSun);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const icon = document.documentElement.classList.contains("dark")
      ? iconSun
      : iconMoon;
    setTheme(icon);
  };

  return (
    <>
      <section className="flex items-center justify-between mb-8 md:mb-10 text-grayish-50">
        <h1 className="font-bold text-2xl tracking-[0.875rem] md:text-4xl">
          TODO
        </h1>
        <img
          src={theme}
          alt="theme mode"
          className="w-5"
          onClick={toggleTheme}
        />
      </section>
      <div className="bg-grayish-50 dark:bg-blueish-500 rounded-md flex items-center w-full overflow-hidden px-5 py-3.5 text-xs md:text-lg tracking-tight mb-4 md:mb-8 md:py-[18px]">
        <input
          type="checkbox"
          name=""
          ref={inputRef}
          value={input}
          className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0"
        />
        <input
          type=" text"
          className="flex-1 ml-3 focus:outline-none bg-inherit"
          placeholder="Create a new todo..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  );
}
