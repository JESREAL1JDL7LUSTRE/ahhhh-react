
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Album from './Album';
import { useState } from "react"


const WholeScreen = () => {
  const [images, setImages] = useState([
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
  ]);

  // Function to swap images when the "Next" button is clicked
  const swapImages = (direction: "next" | "previous") => {
    if (direction === "next") {
      const updatedImages = [...images];
      updatedImages.push(updatedImages.shift() as string); // Shift first image and push it to the end
      setImages(updatedImages);
    } else if (direction === "previous") {
      const updatedImages = [...images];
      updatedImages.unshift(updatedImages.pop() as string); // Pop last image and unshift it to the front
      setImages(updatedImages);
    }
  };
  return (
    <div id="container" className="bg-yellow-400 flex justify-center items-center h-screen flex-col">
      <div className="flex justify-center items-center w-full h-full">
        {/* Left navigation button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 md:left-14 lg:left-30 xl:left-40 transition-all duration-500"
          onClick={() => swapImages("previous")}
        >
          <ChevronLeft />
        </Button>

        {/* Gallery Component */}
        <Album images={images} />

        {/* Right navigation button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 md:right-14 lg:right-30 xl:right-40 transition-all duration-500"
          onClick={() => swapImages("next")}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

export default WholeScreen
