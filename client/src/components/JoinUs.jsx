import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const JoinUs = () => {

    const [selectedTopic,setSelectedTopic] = useState("")

    const selectTopic = (topic)=>{
        setSelectedTopic(topic)
        
    }
   
    

  return (
    <div className="w-full h-[40vh] flex justify-center items-center">
      <div className="w-[70%] h-full ">
        <div className="text-center text-[#212529] text-xl font-medium flex flex-col gap-4">
          <h2>JOIN TO ENTERTAINMENT!</h2>
          <p className="text-sm">
            Subscribe to our newsletter and don't miss the opportunities!
          </p>
        </div>
        <div className="text-center text-[#212529] pt-10 text-sm font-bold ">
          <p>Who are you shopping for?</p>
        </div>
        <div className="pt-5 flex items-center justify-center gap-12">
          <button onClick={()=>selectTopic("women")} className={`w-20 h-12 ${selectedTopic === "women" ? "bg-[#22242A] text-white font-bold" : "border-2 border-gray-400 text-black hover:border-2 hover:border-black"} `}>Women</button>
          <button onClick={()=>selectTopic("man")} className={`w-20 h-12 ${selectedTopic === "man" ? "bg-[#22242A] text-white font-bold" : "border-2 border-gray-400 text-black hover:border-2 hover:border-black"} `}>Man</button>
          
          <button onClick={()=>selectTopic("child")} className={`w-20 h-12 ${selectedTopic === "child" ? "bg-[#22242A] text-white font-bold" : "border-2 border-gray-400 text-black hover:border-2 hover:border-black"} `}>Child</button>
        </div>
        <div className="w-full flex justify-center pt-10 gap-10">
        <TextField id="outlined-basic" label="Enter your email" variant="outlined" />
        <button className="bg-[#22242A] text-white w-32 hover:bg-white hover:text-black ease-in-out duration-200 hover:border-2 border-black">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
