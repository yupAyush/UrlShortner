import { useState } from 'react'
import './App.css'

function App() {
  
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  async function handler(e){
    e.preventDefault();

    if (url!=""){
      const response = await fetch("http://localhost:3000/submit",{
       method:"POST",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify({url:url})
      })

      const data = await response.json();
      setshorturl(data.shorturl);

    } 

    seturl("");

  }


  return (
    <div className='w-full h-screen bg-gradient-to-r from-black to-purple-950 flex flex-col min-h-screen justify-center items-center '>
      <div className="container">
            <span className="box">
              <h1 className='h12'>यूआरएल</h1>
           </span>
      </div>
     <form action="" className='flex flex-row gap-[10px]' >
      


     <div className='relative w-[400px] h-10 z-[-2px] group'>
      
      <input type="text" value={url} onChange={(e)=>seturl(e.target.value)} name='url' placeholder='Enter a url'
      id="input" className='w-100 h-11 bg-white  rounded-md backdrop-blur-2xl text-lg border-none p-20 outline-none placeholder-gray-700  m-1'
      required/> 
      
     </div>


      
      <button  class="relative inline-block rounded-2xl px-4 py-2 w-[100px] h-[44px] font-medium group " onClick={handler}>
         <span class="absolute inset-0 rounded-md w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-pink-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
         <span class="absolute inset-0 w-full h-full rounded-md bg-white border-2 border-none group-hover:bg-pink-500"></span>
         <span class="relative text-black group-hover:text-white">S h o r t e n</span>
      </button>
     

    
     </form>
     <h1 className='w-60 h-10 bg-white backdrop-blur-3xl rounded-md p-[10px] text-xl font-medium text-pink-500 mt-[30px] '>{shorturl}</h1>

    </div> 
     
     
  
     
    
        
   
  )
}

export default App
