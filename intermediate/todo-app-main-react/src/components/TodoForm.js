import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const inputRef = useRef(null);
  const [theme, setTheme] = useState(iconSun);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const keyDownHandler = (event) => {
      event.preventDefault();
      if (event.key === 'Enter') {
        if (!input || /^\s*$/.test(input)) {
          return;
        }
        onSubmit({
          id: uuidv4(),
          description: input,
          completed: isCompleted,
        });
        setInput('');
        inputRef.current.blur();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [input, isCompleted, onSubmit]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const icon = document.documentElement.classList.contains('dark')
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
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
          value={input}
          className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0"
        />
        <input
          type="text"
          className="flex-1 ml-3 border-transparent focus:outline-none bg-inherit focus:border-transparent"
          placeholder="Create a new todo..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
          ref={inputRef}
        />
      </div>
    </>
  );
}
