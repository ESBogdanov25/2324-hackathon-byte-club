import React, { useEffect, useState } from 'react';
import { Navbar, Footer } from "./";

const MoodBoost = () => {
  const [actOfKindness, setActOfKindness] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Fetch a random act of kindness from the server
    getActOfKindness();
  }, []);

  const getActOfKindness = async () => {
    try {
      const response = await fetch('https://byteclub.azurewebsites.net/mood');
      const data = await response.json();
    
      // Check for server errors
      if (data.error) {
        console.error('Server error:', data.error);
      } else if (data.response && Array.isArray(data.response.choices) && data.response.choices.length > 0) {
        const assistantMessage = data.response.choices[0].message;
        const responseArray = assistantMessage.content.split('\n');
    
        if (responseArray.length > 0) {
          // Take the first element from the array
          setActOfKindness(responseArray[0]);
          setQuote(responseArray[1]);
        }
      } else {
        console.error('Unexpected response structure:', data);
      }
    } catch (error) {
      console.error('Error fetching random act of kindness:', error);
    }
  };
  
  

  return (
    <>
      <Navbar />

      <div className="w-full flex flex-col pt-[4em] items-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl p-[1.5em]  font-bold text-indigo-600">Act of Kindness:</h2>
        <p className="text-xl sm:text-2xl md:text-3xl italic m-[1.5em] xs:m-0 text-slate-900">{actOfKindness}</p>

        
        <h2 className="text-3xl sm:text-4xl md:text-6xl p-[1.5em] font-bold text-indigo-600">Quote:</h2>
        <p className="text-xl sm:text-2xl md:text-3xl italic pb-[3em] m-[1.5em] xs:m-0 text-slate-900">"{quote}"</p>
      </div>
    </>
  );
};

export default MoodBoost;
