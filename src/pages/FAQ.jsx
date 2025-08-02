import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const FAQ = () => {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        📚 FAQ
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full divide-y divide-gray-300 border rounded-md shadow-sm bg-white dark:bg-gray-900 dark:border-gray-700"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="py-4 px-6 text-lg font-medium hover:text-indigo-600">
            What is this website about?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
            <p>
              This is a demo website showcasing features and layout. No actual
              services are provided—yet.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="py-4 px-6 text-lg font-medium hover:text-indigo-600">
            Is my data safe?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
            <p>
              Absolutely! As long as you don't share your password with your
              cat. This is just dummy text, but you get the point.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="py-4 px-6 text-lg font-medium hover:text-indigo-600">
            Who can I contact for support?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
            <p>
              Try yelling into the void—or better, use our mock contact form on
              the "Contact Us" page.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="py-4 px-6 text-lg font-medium hover:text-indigo-600">
            Can I change my username later?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
            <p>
              In theory, yes. In practice, this feature might be added…
              eventually.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="py-4 px-6 text-lg font-medium hover:text-indigo-600">
            Do you use cookies?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
            <p>
              Yes, mostly chocolate chip. Also the kind that track things. It's
              a win-win!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="py-4 px-6 text-lg font-medium hover:text-indigo-600">
            Will there be new features?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
            <p>
              Definitely! As soon as our team finishes binge-watching cat videos
              and gets back to coding.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className="py-4 px-6 text-lg font-medium hover:text-indigo-600">
            Is there a mobile app?
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
            <p>
              Maybe someday! Right now, just enjoy tapping on this beautiful
              responsive design.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQ;
