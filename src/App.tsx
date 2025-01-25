import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";


const App = () => {
  return (
    <div id="container" className="bg-yellow-400 flex justify-center items-center h-screen flex-col">

      <div className="flex justify-center items-center size-full"> 
        <div>
        <Button variant="outline" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 md:left-14 lg:left-30 xl:left-40 transition-all duration-500">
            <ChevronLeft />
          </Button>
        </div>

        <div className="flex flex-col items-center size-full justify-center">
              <h1 className="flex text-4xl font-bold">Gallery</h1>
        
        <div id="parent" className="border-2 border-blue-800 p-2 size-2/3 flex bg-zinc-900 rounded-3xl shadow-xl mt-10 flex-col md:gap-4 md:p-4">
          {/* 1st row*/}
          <div id='groupdiv' className="p-0.5 flex flex-col w-full h-28">
            <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl flex justify-center items-center" contentEditable="true">
              <h1 id="Albums" className="text-3xl md:text-4xl xl:text-5xl font-semibold hover:underline">Wazzap</h1></div>
          </div>
          {/* 2nd row*/}
          <div id='groupdiv' className="p-0.5 flex md:flex-row flex-col size-full gap-1 md:gap-4">
            <div id="indiv-div" className="relative border border-red-600 size-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000 flex">
            <img src="images/5.png" className="absolute inset-0 size-full rounded-3xl object-fill" alt="image" />
            </div>
            <div id="indiv-div" className="relative border border-red-600 size-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000 flex">
              <img src="images/1.png" className="absolute inset-0 size-full rounded-3xl object-fill" alt="image" />
            </div>
          </div>
          {/* 3rd row*/}
          <div id='groupdiv' className="p-0.5 flex md:flex-row flex-col size-full gap-1 md:gap-4">
            <div id="indiv-div" className="relative border border-red-600 size-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000">
            <img src="images/2.png" className="absolute inset-0 size-full rounded-3xl object-fill" alt="image" />
            </div>
            <div id="indiv-div" className="relative border border-red-600 size-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000">
            <img src="images/3.png" className="absolute inset-0 size-full rounded-3xl object-fill" alt="image" />
            </div>
            <div id="indiv-div" className="relative border border-red-600 size-full rounded-3xl flex-[1] hover:flex-[2] transition-all duration-1000">
            <img src="images/4.png" className="absolute inset-0 size-full rounded-3xl object-fill" alt="image" />
            </div>
          </div>
        
        </div>
        <div>
          <Button variant="outline" size="icon" className="mt-4" onClick={() => console.log("clicked")}>
            <Plus />
          </Button>
        </div>
        </div>
        <div>
          <Button variant="outline" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 md:right-14 lg:right-30 xl:right-40 transition-all duration-500">
            <ChevronRight />
          </Button>
        </div>
      </div>
      

    </div>
    
  );
};

export default App