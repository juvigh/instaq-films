import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

import "./carousel.style.css";
import { Film } from "@/app/page";

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  items: any[];
  options?: CarouselOptions;
  orientation?: "horizontal" | "vertical";
  plugins?: CarouselPlugin;
  renderItem?: (item: Film, index: number) => React.ReactNode;
};

//

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      options,
      plugins,
      items,
      renderItem,
      ...props
    },
    ref
  ) => {
    const [carouselRef] = useEmblaCarousel(
      {
        ...options,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    return (
      <div className="embla" ref={carouselRef} {...props}>
        <div className="embla__container">
          {Array.isArray(items) &&
            items.map((item, index) => (
              <div className="embla__slide" id="card-item" key={index}>
                {renderItem ? renderItem(item, index) : item}
              </div>
            ))}
        </div>
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
