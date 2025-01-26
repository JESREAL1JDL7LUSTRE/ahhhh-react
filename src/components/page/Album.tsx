
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Album = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center">
      <h1 className="flex text-4xl font-bold">Gallery</h1>

      <div
        id="parent"
        className="border-2 border-blue-800 p-2 w-2/3 flex bg-zinc-900 rounded-3xl shadow-xl mt-10 flex-col md:gap-4 md:p-4"
      >
        {/* 1st row */}
        <div className="p-0.5 flex flex-col w-full">
          <div
            className="border border-red-600 w-full h-full bg-white rounded-3xl flex justify-center items-center"
            contentEditable="true"
          >
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold hover:underline">Wazzap</h1>
          </div>
        </div>

        {/* 2nd row */}
        <div className="p-0.5 flex md:flex-row flex-col w-full h-64 gap-1 md:gap-4">
          <div className="relative border border-red-600 w-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000 flex">
            <img
              src="images/5.jpg"
              className="absolute inset-0 w-full h-full rounded-3xl object-fill"
              alt="Gallery Image 5"
            />
          </div>
          <div className="relative border border-red-600 w-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000 flex">
            <img
              src="images/1.jpg"
              className="absolute inset-0 w-full h-full rounded-3xl object-fill"
              alt="Gallery Image 1"
            />
          </div>
        </div>

        {/* 3rd row */}
        <div className="p-0.5 flex md:flex-row flex-col w-full h-56 gap-1 md:gap-4">
          <div className="relative border border-red-600 w-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000">
            <img
              src="images/2.jpg"
              className="absolute inset-0 w-full h-full rounded-3xl object-fill"
              alt="Gallery Image 2"
            />
          </div>
          <div className="relative border border-red-600 w-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000">
            <img
              src="images/3.jpg"
              className="absolute inset-0 w-full h-full rounded-3xl object-fill"
              alt="Gallery Image 3"
            />
          </div>
          <div className="relative border border-red-600 w-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000">
            <img
              src="images/4.jpg"
              className="absolute inset-0 w-full h-full rounded-3xl object-fill"
              alt="Gallery Image 4"
            />
          </div>
        </div>
      </div>

      {/* Add button */}
      <Button
        variant="outline"
        size="icon"
        className="mt-4"
        onClick={() => console.log("clicked")}
      >
        <Plus />
      </Button>
    </div>
  )
}

export default Album
