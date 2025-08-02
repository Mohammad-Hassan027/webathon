import { useEffect, useRef, useContext, useState } from "react";
import { MyContext } from "../../src/context";
import Typewriter from "typewriter-effect";

const InitialLoader = () => {
  const { setIsLoading } = useContext(MyContext) || {};
  const [counter, setCounter] = useState(0);
  const rafRef = useRef(null);
  const startTimestampRef = useRef(null);
  const DURATION = 2000; 

  useEffect(() => {
    const animate = (timestamp) => {
      if (startTimestampRef.current === null) {
        startTimestampRef.current = timestamp;
      }
      const progress = Math.min(
        (timestamp - startTimestampRef.current) / DURATION,
        1
      );
      const value = Math.floor(progress * 100);
      setCounter(value);

      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(animate);
      } else {
        if (typeof setIsLoading === "function") {
          setIsLoading(false);
        }
      }
    };

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [setIsLoading]);

  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <div className="place-items-center text-center px-4">
        <div className="font-bold text-white mb-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-3xl sm:text-5xl text-yellow-200">
            <div aria-live="polite" className="flex items-baseline gap-1">
              <span className="mr-1">{counter}</span>
              <span>-100</span>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="sm:text-5xl text-3xl text-purple-400">
              YOUR WEB EXPERIENCE IS LOADING
            </h1>
            <div className="font-family-dancing-Script text-3xl sm:text-6xl text-yellow-200 mt-2">
              <Typewriter
                options={{
                  strings: ["NOW", "SOON", "VERY SOON"],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </div>
          </div>
        </div>
        <div className="scroll-m-20 text-xl font-semibold tracking-tight text-white animate-pulse text-center pt-2">
          Please wait! <br /> while loading
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
