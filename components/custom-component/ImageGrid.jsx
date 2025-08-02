import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck, faLock } from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useRef } from "react";
import { ImageGridConfig } from "./../../src/config/imageGridConfig";

export function CarouselPlugin() {
  const plugin = useRef(Autoplay({ delay: 1500 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="flex justify-center items-center"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent className={""}>
        {ImageGridConfig.map((product) => (
          <CarouselItem
            key={product.id}
            className={""}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-2">
              <picture className="flex place-content-center py-2">
                <img
                  className="object-cover h-65 w-65 sm:h-70 sm:w-70 md:w-100 md:h-100 pt-2"
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                />
              </picture>
              <div className="p-5 text-center">
                <h4 className="text-sm sm:text-xl text-gray-800 mb-2">
                  {product.title}
                </h4>
                <p className="text-sm sm:text-lg text-gray-800 mb-4">
                  {product.price}
                </p>
                <button className="bg-blue-500 text-white py-1 px-3 sm:py-2 sm:px-5 rounded-lg text-sm sm:text-lg transition-colors duration-300 hover:bg-blue-400">
                  Shop Now
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute inset-y-0 left-0 flex items-center px-2">
        <CarouselPrevious />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-2">
        <CarouselNext />
      </div>
    </Carousel>
  );
}

const ImageGrid = () => {
  return (
    <div className="font-sans bg-gray-100  w-full">
      <div className="flex justify-between gap-3 sm:gap-4 md:gap-5 mb-10 flex-wrap">
        <div className="flex-1 bg-white p-5 text-center rounded-lg shadow-md transform transition-transform duration-300 hover:translate-y-[-10px]">
          <FontAwesomeIcon icon={faStar} size="3x" className="text-blue-500" />
          <h3 className="pt-4 text-lg text-gray-800 mb-2">100% Quality</h3>
          <p className="text-sm text-gray-600">
            We provide the best quality as per your needs.
          </p>
        </div>
        <div className="flex-1 bg-white p-5 text-center rounded-lg shadow-md transform transition-transform duration-300 hover:translate-y-[-10px]">
          <FontAwesomeIcon icon={faTruck} size="3x" className="text-blue-500" />
          <h3 className="pt-4 text-lg text-gray-800 mb-2">Free Shipping</h3>
          <p className="text-sm text-gray-600">
            Two-day delivery on thousands of items.
          </p>
        </div>
        <div className="flex-1 bg-white p-5 text-center rounded-lg shadow-md transform transition-transform duration-300 hover:translate-y-[-10px]">
          <FontAwesomeIcon icon={faLock} size="3x" className="text-blue-500" />
          <h3 className="pt-4 text-lg text-gray-800 mb-2">
            100% Secure Payment
          </h3>
          <p className="text-sm text-gray-600">
            We ensure your transactions are safe.
          </p>
        </div>
      </div>
      <div className="p-11 w-full">
        <CarouselPlugin />
      </div>
    </div>
  );
};

export default ImageGrid;
