
const App = () => {
  return (
    <div id="container" className="bg-yellow-400 flex justify-center items-center h-screen flex-col">

      <h1 className="flex text-4xl font-bold">Hello</h1>

      <div id="parent" className="border-2 border-blue-800 p-2 size-2/3 flex bg-zinc-900 rounded-3xl shadow-xl mt-10 flex-col md:gap-4 md:p-4">

        {/* 1st row*/}
        <div id='groupdiv' className="p-0.5 flex md:flex-row flex-col size-full">
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl flex justify-center">
            <h1 className=" text-md md:text-3xl xl:text-5xl font-semibold">Wazzap</h1></div>
        </div>
        {/* 2nd row*/}

        <div id='groupdiv' className="p-0.5 flex md:flex-row flex-col size-full gap-1 md:gap-4">
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[2] transition-all duration-1000 flex">
          <img className="size-full rounded-3xl object-cover flex" src="src\images\66cfbd9729ef6e5a4dddbc7f_aoraki-pastel-dawn-mt-cook-2.jpg" alt="placeholder" />
             </div>
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[2] transition-all duration-1000 flex"> 
            <img className="size-full rounded-3xl object-cover flex" src="src\images\360_F_537946399_TFWJZ0vNKRYS3EcQwPDiAVdOj3aAlzsV.jpg" alt="placeholder" />
          </div>
        </div>
        {/* 3rd row*/}

        <div id='groupdiv' className="p-0.5 flex md:flex-row flex-col size-full gap-1 md:gap-4">
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[2] transition-all duration-1000"> 
            <img className="size-full rounded-3xl object-cover " src="src\images\istockphoto-181865645-612x612.jpg" alt="placeholder" />
          </div>
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[2] transition-all duration-1000"> 
            <img className="size-full rounded-3xl object-cover " src="src\images\pexels-souvenirpixels-1619317.jpg" alt="placeholder" />
          </div>
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center flex-[1] hover:flex-[2] transition-all duration-1000"> 
            <img className="size-full rounded-3xl object-cover " src="src\images\the-best-place-to-focus-in-a-landscape.jpg" alt="placeholder" />
          </div>
        </div>
        
      </div>
    
    </div>
  );
};

export default App