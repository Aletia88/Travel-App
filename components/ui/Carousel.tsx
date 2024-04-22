import React, { useEffect, useRef, useState } from "react";
// import "./Carousel.css";

interface CarouselItemProps {
  width: string;
  children: React.ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swipe = useRef<{ x?: number; swiping?: boolean }>({ x: 0 });

  const updateIndex = (newIndex: number) => {
    if (newIndex >= React.Children.count(children) || newIndex < 0) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex, children]);

  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    swipe.current = { x: touch.clientX };
    // console.log("TOUCH >>>> START");
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.changedTouches && e.changedTouches.length) {
      swipe.current.swiping = true;
    }
    // console.log("TOUCH >>>> MOVE");
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if(swipe.current.x){

        const touch = e.changedTouches[0];
        const swipedLeft = touch.clientX - swipe.current.x > 0 ? true : false;
        const swipedRight = touch.clientX - swipe.current.x > 0 ? false : true;
        const absX = Math.abs(touch.clientX - swipe.current.x);
        if (swipe.current.swiping && absX > 50) {
          if (swipedLeft) {
            updateIndex(activeIndex - 1);
          } else if (swipedRight) {
            updateIndex(activeIndex + 1);
          }
        }
        swipe.current = {};
        // console.log("TOUCH >>>> END");
      };
    }

  return (
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement<CarouselItemProps>, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default Carousel;
