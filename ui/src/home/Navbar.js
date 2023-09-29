import React from "react";


function Navbar () {
    return(
        <>

<nav className="shadow border-b border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><b className="text-red-500 ">Book</b>My<span className="text-purple-900">Ticket</span></span>
    </a>
    <div className="w-full md:block md:w-auto" id="navbar-default">
      <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
		<li className="">
            <input type="text" id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required/>
        </li>
        <li className=''>

        <img className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800" 
        src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="image description" width="50px"/>

        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}



export default Navbar;