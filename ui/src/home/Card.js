import React,{useState,useEffect} from "react";
import axios from "axios";


function Card(){
    let [data,setData] = useState([])
    let [onload,setOnload] = useState(false)
    const backendUrl = "http://127.0.0.1:8000/"
    useEffect(() => {
        if (!onload) {
          axios
            .get("http://127.0.0.1:8000/api/")
            .then((response) => {
              setData(response.data);
              setOnload(true);
            })
            .catch((error) => {
              alert(error);
            });
        }
      }, [data,onload]);    
    return(
        <>
        {data.map((item)=>(
            
            <div key={item.id} className="grid grid-cols-5 gap-8">

            <div className="m-9 ">
            <div className="w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img className="w-60 rounded-t-lg h-80" 
                    src={`${backendUrl}${item.image}`} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                    </a>
                    <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">Rating:-<span class="text-red-500">{item.rating}/<span class="text-lg">10</span></span></span>

                    </div>
                </div>
                <button type="button" className="mb-5 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Book Ticket</button>

                    </div>
                    </div>    
                </div> 
            ))}

        </>
    
    )

}
export default Card;
