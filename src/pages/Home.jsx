// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";
import { TickerConfig } from "../config/tickerConfig";
import { useState, useMemo } from "react";
import TickerItem from "../../components/custom-component/TickerItem";
import Team from "../../components/custom-component/Team";
import { Separator } from "../../components/ui/separator";
import ImageGrid from "../../components/custom-component/ImageGrid";
import Footer from "@/components/custom-component/Footer";
import Typewriter from "typewriter-effect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const [isPaused, setIsPaused] = useState(false);

  const tickerItems = useMemo(
    () =>
      TickerConfig.length
        ? TickerConfig.map((item) => <TickerItem key={item.id} item={item} />)
        : null,
    []
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="p-3 sm:p-5 min-h-screen w-full"
      >
        <section
          aria-label="Hero"
          className="flex items-center justify-center min-h-[60vh] pb-5"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="scroll-m-20 text-center text-2xl sm:text-4xl font-bold sm:font-extrabold tracking-tight text-balance">
              Welcome to
              <Typewriter
                options={{
                  strings: ["Our Home Page"],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </h1>
            <p className="text-sm sm:text-xl text-center mt-4">
              This is the home page of our application. Here you can find
              various services and information about us.
            </p>
          </div>
        </section>

        <Separator />

        <section aria-label="Ticker" className="my-10">
          {tickerItems ? (
            <Ticker
              duration={20}
              isPlaying={!isPaused}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {tickerItems}
            </Ticker>
          ) : (
            <p className="text-center text-sm text-muted-foreground">
              No ticker items to display.
            </p>
          )}
        </section>

        <Separator />

        <section id="imageGrid" aria-label="Gallery" className="my-10">
          <ImageGrid />
        </section>

        <Separator />

        <section id="team" aria-label="Team" className="my-10">
          <Team />
        </section>
      </motion.div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
