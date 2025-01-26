import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Album from './Album';

const WholeScreen = () => {
  return (
    <div id="container" className="bg-yellow-400 flex justify-center items-center h-screen flex-col">
      <div className="flex justify-center items-center w-full h-full">
        {/* Left navigation button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 md:left-14 lg:left-30 xl:left-40 transition-all duration-500"
        >
          <ChevronLeft />
        </Button>

        {/* Gallery Component */}
        <Album />

        {/* Right navigation button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 md:right-14 lg:right-30 xl:right-40 transition-all duration-500"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

export default WholeScreen
