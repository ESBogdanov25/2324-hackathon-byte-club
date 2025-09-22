import React, { useState } from "react";
import axios from "axios";
import { Navbar, Footer } from "./";
import { aiDoctor } from '../assets';
import { symptomImage } from "../assets";

const Doctor = () => {

  const availableSpecialities = {
    "Gynecologist" : "1",
    "Gastroenterologist" : "3",
    "Dermatologist" : "4",
    "Dentist" : "7",
    "Vascular specialist" : "8",
    "Neurologist" : "10",
    "Nephrologist" : "11",
    "Orthopedist" : "12",
    "Ophthalomogist" : "13",
    "Internal diseases" : "16",
    "Ear Nose Throat" : "17",
    "Rheumatologist" : "44",

  }

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [response, setResponse] = useState("");

  const handleSymptomSelect = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const renderSuperDocLink = () => {
    const matchedSpecialities = [];
  
    for (const speciality in availableSpecialities) {
      if (response.toLowerCase().includes(speciality.toLowerCase())) {
        matchedSpecialities.push(speciality);
      }
    }
  
    if (matchedSpecialities.length > 0) {
      return (
        <div className="flex-row">
          {matchedSpecialities.map((speciality, index) => (
            <a
              key={index} // Add a unique key prop
              href={`https://superdoc.bg/lekari?specialty_id=${availableSpecialities[speciality]}&region_id=2&name=`}
              target="_blank"
              className="border-2 border-pink rounded-xl ml-5 bg-pink text-white hover:border-indigo-100 hover:bg-indigo-100 hover:text-secondary py-4 px-4 mx-0 my-0"
            >
              {speciality}
            </a>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };
  

  const handleSubmit = async () => {
    try {
      const prompt = `These are the possible specialities use only from these: 
      ${Object.keys(availableSpecialities).join(", ")}\n\nUser selected symptoms: 
      ${selectedSymptoms.join(", ")}\n\nDiagnose the possible sicknesses and provide
      maximum 2 additional symptoms for each diagnosis, doctor's speciality (for example neurologist, orthopedist etc.), 
      recommend treatmant ways but if doctor help is needed recommend
      doctor visiting a doctor. (You have 75 words and don't go for too
      much in details and don't use too complex terminologies. 
      The response should be in format: Possible sickness: {Sickness Name}:
      \n Symptoms: {Symptoms of the sickness} \n Treatment: {Treatment in 10 
      words maximum} \n Speciality: {Speciality of the sickness}). Give 2 possible sicknesses`; 
      
      const serverResponse = await axios.post("https://byteclub.azurewebsites.net/chat", {
        userPrompt: prompt,
      });
  
      setResponse(serverResponse.data.doctorResponse);
    } catch (error) {
      console.error("Error fetching response from server:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-20">
        <div>
          <h1 className="text-8xl whitespace-nowrap">AI-Self Doctor</h1>
          <p>Use cutting-edge technology to formulate a diagnosis based on your symptoms.</p>
        </div>
        <div>
          <img src={aiDoctor} alt="AI Self Doctor" className="w-[36em] h-[36em] ml-24" />
        </div>
      </div>

      <hr className="h-1" />

      <div className="flex justify-center items-center pb-[4em]">
        <div className="mr-20 leading-3 flex">
          <div className="mt-20">
            <img src={symptomImage} alt="AI Self Doctor" className="w-[32em] h-[32em] mx-32" />
          </div>
          <div className="mt-32 mx-8 whitespace-nowrap">
            <h2 className="text-4xl mb-6 pb-10">Select Symptoms:</h2>
            <div className="flex flex-col">
                <label className="ms-2 text-lg text-gray-900 leading-7">
                  <input 
                    className="cursor-pointer w-6 h-6 text-blue-600 bg-gray-100 mr-1 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    value="Fever"
                    onChange={() => handleSymptomSelect("Fever")}
                  />
                  Fever
                </label>
                <label className="ms-2 text-lg text-gray-900 leading-7">
                  <input
                    className="cursor-pointer w-6 h-6 text-blue-600 bg-gray-100 mr-1 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    value="Headache"
                    onChange={() => handleSymptomSelect("Headache")}
                  />
                  Headache
                </label>
                <label className="ms-2 text-lg text-gray-900 leading-7">
                  <input
                    className="cursor-pointer w-6 h-6 text-blue-600 bg-gray-100 mr-1 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    value="Temperature"
                    onChange={() => handleSymptomSelect("Temperature")}
                  />
                  Temperature
                </label>
                <label className="ms-2 text-lg text-gray-900 leading-7">
                  <input
                    className="cursor-pointer w-6 h-6 text-blue-600 bg-gray-100 mr-1 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    value="Neck Pain"
                    onChange={() => handleSymptomSelect("Neck Pain")}
                  />
                  Neck Pain
                </label>
              </div>

              <div className="flex flex-col">
                <label className="ms-2 text-lg text-gray-900 leading-7">
                  <input
                    className="cursor-pointer w-6 h-6 text-blue-600 bg-gray-100 mr-1 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    value="Stomach Cramps"
                    onChange={() => handleSymptomSelect("Stomach Cramps")}
                  />
                  Stomach Cramps
                </label>
                <label className="ms-2 text-lg text-gray-900 leading-7">
                  <input
                    className="cursor-pointer w-6 h-6 text-blue-600 bg-gray-100 mr-1 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    value="Leg pain"
                    onChange={() => handleSymptomSelect("Leg pain")}
                  />
                  Leg pain
                </label>
                <label className="ms-2 text-lg text-gray-900 leading-7">
                  <input
                    className="cursor-pointer w-6 h-6 text-blue-600 bg-gray-100 mr-1 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    value="Muscle Aches"
                    onChange={() => handleSymptomSelect("Muscle Aches")}
                  />
                  Muscle Aches
                </label>
                <label className="ms-2 text-lg text-gray-900 leading-7">
                  <input
                    className="cursor-pointer w-6 h-6 text-blue-600 bg-gray-100 mr-1 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    value="Sore Throat"
                    onChange={() => handleSymptomSelect("Sore Throat")}
                  />
                  Sore Throat
                </label>
              </div>
            <button onClick={handleSubmit} className="w-1/2 h-10 bg-pink text-white rounded-xl mt-6 hover:bg-indigo-100 hover:text-secondary">Get Diagnosis</button>
          </div>
        </div>
        {response && (
          <div className="pr-10">
            <h2 className="text-4xl pb-20">Doctor's Response:</h2>
            <p className="border-primary border-2 bg-primary overflow-y-auto leading-loose max-w-[40em] p-4"
              dangerouslySetInnerHTML={{
                __html: response.replace(/\\n/g, "<br />"),
              }}
            />

            <div className="mt-10 flex flex-row justify-center">
              {renderSuperDocLink()}
            </div>

          </div>
        )}
      </div>

      <Footer/>
    </>
  );
};

export default Doctor;