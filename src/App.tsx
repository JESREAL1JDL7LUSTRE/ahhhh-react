import React from 'react';

const App = () => {
  return (
    <div id="container" className="bg-yellow-400 flex justify-center items-center h-screen flex-col">

      <h1 className="flex text-4xl font-bold">Hello</h1>

      <div id="parent" className="border-2 border-blue-800 p-2 size-2/3 flex bg-zinc-900 rounded-3xl shadow-xl mt-10 flex-col">

        {/* 1st row*/}
        <div id='groupdiv' className="flex flex-row size-full space-x-2 p-2">
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl justify-center flex font-semibold">wazzap</div>
        </div>
        {/* 2nd row*/}

        <div id='groupdiv' className="flex flex-row size-full space-x-2 p-2">
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center"> </div>
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center"> </div>
        </div>
        {/* 3rd row*/}

        <div id='groupdiv' className="flex flex-row size-full space-x-2 p-2">
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center"> </div>
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center"> </div>
          <div id="indiv-div" className="border border-red-600 size-full bg-white rounded-3xl text-center"> </div>
        </div>
        
      </div>
    
    </div>
  );
};

export default App