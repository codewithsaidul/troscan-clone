"use client";


export default function Navbar () {
  return (
    <header className="mt-6 px-4">
       <nav className="bg-[#f8ede3] w-full  h-16 px-4 py-4 max-w-3xl mx-auto  rounded-xl flex justify-between">
        <h1 className="text-xl font-bold text-primary">Troscán</h1>

        <div>
          <ul>
            <li></li>
          </ul>
        </div>

        <div>
            <div>
             <button className="w-10 h-8 flex flex-col justify-center items-center gap-1 bg-primary rounded-md cursor-pointer">
              <span className="w-4 h-[1px] bg-white"></span>
              <span className="w-4 h-[1px] bg-white"></span>
             </button>
            </div>
        </div>
       </nav>
   </header>
  );
};
