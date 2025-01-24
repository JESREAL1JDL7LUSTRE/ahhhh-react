
const App = () => {
  return (
    <div id="container" className="bg-yellow-400 flex justify-center items-center h-screen flex-col">

      <h1 className="flex text-4xl font-bold">Hello</h1>

      <div id="parent" className="border-2 border-blue-800 p-2 size-2/3 flex bg-zinc-900 rounded-3xl shadow-xl mt-10 flex-col sm:gap-2">

        {/* 1st row*/}
        <div id='groupdiv' className="flex md:flex-row flex-col size-full md:space-x-2 md:p-2">
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl flex justify-center">
            <h1 className=" text-md md:text-3xl xl:text-5xl font-semibold">hello</h1></div>
        </div>
        {/* 2nd row*/}

        <div id='groupdiv' className="flex md:flex-row flex-col size-full md:space-x-2 md:p-2 gap-1 ">
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[3] transition-all duration-1000"> </div>
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[3] transition-all duration-1000"> </div>
        </div>
        {/* 3rd row*/}

        <div id='groupdiv' className="flex md:flex-row flex-col size-full md:space-x-2 md:p-2 gap-1">
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[3] transition-all duration-1000"> </div>
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[3] transition-all duration-1000"> </div>
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[3] transition-all duration-1000"> </div>
        </div>
        
      </div>
    
    </div>
  );
};

export default App