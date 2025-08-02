import { Routes, Route, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { MyContext } from "./context";

import Home from "./pages/Home";
import About from "./pages/About";
import InitialLoader from "../components/custom-component/InitialLoader";
import Navbar from "../components/custom-component/Navbar";
import PageWrapper from "../components/custom-component/PageWrapper";
import FAQ from "./pages/FAQ";

function App() {
  const location = useLocation();
  const { isLoading } = useContext(MyContext);

  if (isLoading && location.pathname === "/") return <InitialLoader />;

  return (
    <div className="overflow-x-hidden bg-accent min-h-screen w-screen flex flex-col">
      <Navbar />
      <div className="pb-24">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            className="min-h-[calc(100vh-0px)] flex-grow" // adjust if Navbar/footer affect height
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
