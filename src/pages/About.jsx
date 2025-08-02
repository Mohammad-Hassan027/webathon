// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AccordionDemo from "./../../components/custom-component/accrodion";

const About = () => {
  return (
    <motion.div
      className="px-3 py-5 sm:p-6 md:p-8 min-h-100vh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mb-10 p-5 bg-gray-300 rounded-lg shadow-md">
        <h2 className="scroll-m-20 text-3xl sm:text-4xl font-bold sm:font-extrabold tracking-tight text-balance py-3 px-2 sm:px-3">
          About Our Product
        </h2>
        <AccordionDemo />
      </div>

      <div className="mb-10 p-5 bg-yellow-300 rounded-lg shadow-md text-center">
        <h2 className="scroll-m-20 text-3xl sm:text-4xl font-bold sm:font-extrabold tracking-tight text-balance py-3 px-2 sm:px-3">
          About Us
        </h2>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight">
          We are dedicated to providing the best services and products to our
          customers. Our team is committed to excellence and innovation.
        </p>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight mt-4">
          Learn more about our offerings and policies through the sections
          below.
        </p>
      </div>
      <div className="mt-10 p-5 bg-blue-300 rounded-lg shadow-md text-center">
        <h2 className="scroll-m-20 text-3xl sm:text-4xl font-bold sm:font-extrabold tracking-tight text-balance py-3 px-2 sm:px-3">
          Our Mission
        </h2>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight pb-2">
          To deliver high-quality products and exceptional customer service,
          ensuring satisfaction and trust in every interaction.
        </p>
      </div>
      <div className="mt-10 p-5 bg-green-300 rounded-lg shadow-md text-center">
        <h2 className="scroll-m-20 text-3xl sm:text-4xl font-bold sm:font-extrabold tracking-tight text-balance py-3 px-2 sm:px-3">
          Our Vision
        </h2>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight pb-2">
          To be a leader in our industry, recognized for our commitment to
          quality, innovation, and customer satisfaction.
        </p>
      </div>
      <div
        className="mt-10 p-5 bg-red-300 rounded-lg shadow-md text-center"
        id="contactUs"
      >
        <h2 className="scroll-m-20 text-3xl sm:text-4xl font-bold sm:font-extrabold tracking-tight text-balance py-3 px-2 sm:px-3">
          Contact Us
        </h2>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight pb-2">
          For inquiries, please reach out to us at{" "}
          <a
            href="mailto:info@example.com"
            className="text-blue-600 hover:underline"
          >
            info@example.com
          </a>
        </p>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight pb-2">
          or call us at <span className="text-blue-600">+1 (123) 456-7890</span>
          .
        </p>
      </div>
      <div className="mt-10 p-5 bg-orange-300 rounded-lg shadow-md text-center">
        <h2 className="scroll-m-20 text-3xl sm:text-4xl font-bold sm:font-extrabold tracking-tight text-balance py-3 px-2 sm:px-3">
          FAQs
        </h2>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight pb-2">
          For frequently asked questions, please refer to our{" "}
          <a href="/faq" className="text-blue-600 hover:underline">
            FAQ page
          </a>
          .
        </p>
      </div>
      <div className="mt-10 p-5 bg-purple-300 rounded-lg shadow-md text-center">
        <h2 className="scroll-m-20 text-3xl sm:text-4xl font-bold sm:font-extrabold tracking-tight text-balance py-3 px-2 sm:px-3">
          Follow Us
        </h2>
        <p className="scroll-m-20 text-xl font-semibold tracking-tight pb-2">
          Stay updated with our latest news and offers by following us on{" "}
          <a
            href="https://twitter.com"
            className="text-blue-600 hover:underline"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
          , and{" "}
          <a
            href="https://instagram.com"
            className="text-blue-600 hover:underline"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </motion.div>
  );
};

export default About;
