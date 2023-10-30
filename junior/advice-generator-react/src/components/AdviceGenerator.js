import { useState, useEffect } from "react";
import Image from "next/image";
import icon from "../../public/images/icon-dice.svg";
import patternMobile from "../../public/images/pattern-divider-mobile.svg";

function AdviceGenerator() {
  const [data, setData] = useState({
    slip: {
      id: 71,
      advice:
        "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.adviceslip.com/advice`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const message = error ?? data.slip.advice;

  return (
    <div className="text-center relative rounded-2xl w-[540px] max-w-[90%] px-4 bg-dark-grayish-blue md:px-6 md:top-9 -translate-y-12">
      <h1 className="text-neon-green text-xs uppercase mb-6 mt-10 md:mt-12">
        Advice # {error ? "" : data.slip.id}
      </h1>
      <q className="text-light-cyan text-2xl font-extrabold md:text-3xl">
        {message}
      </q>
      <picture className="flex justify-center items-center mt-6 mb-16 md:mt-10 md:mb-14">
        <source
          media={`(min-width: 376px)`}
          srcSet="./images/pattern-divider-desktop.svg"
        />
        <Image src={patternMobile} alt="divider" className="w-full" />
      </picture>
      <button
        title="Get a new quote"
        onClick={() => fetchData()}
        disabled={loading}
        className="border-none rounded-full bg-neon-green absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 [@media(any-hover:hover){&:hover}]:shadow-3xl transition-all duration-200"
      >
        <Image src={icon} alt="icon" />
      </button>
    </div>
  );
}

export default AdviceGenerator;
