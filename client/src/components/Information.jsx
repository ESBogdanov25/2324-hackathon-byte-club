import React, { useState } from 'react';

const Information = () => {
    const informationList = [
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "Diagnoses you",
        "Increases your mood"
    ];

    const [information, setInformation] = useState(informationList[0]);
    const [activeButton, setActiveButton] = useState(0);

    const toggleInformation = (index) => {
        setInformation(informationList[index]);
        setActiveButton(index);
    };

    return (
        <>
            <hr />
            <div className="flex flex-col md:flex-row-reverse mx-auto justify-center items-center gap-[6em] md:gap-x-[12rem] lg:gap-x-[20rem] pb-[8em] mt-32">
                <div className="flex flex-col ">
                    <button
                        onClick={() => toggleInformation(0)}
                        className={`border-2 rounded-t-lg w-[20rem] p-[1em] text-xl ${
                            activeButton === 0 ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100 hover:text-black'
                        }`}
                    >
                        Map
                    </button>
                    <button
                        onClick={() => toggleInformation(1)}
                        className={`border-2 w-[20rem] text-xl p-[1em] ${
                            activeButton === 1 ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100 hover:text-black'
                        }`}
                    >
                        AI Self Doctor
                    </button>
                    <button
                        onClick={() => toggleInformation(2)}
                        className={`border-2 rounded-b-lg w-[20rem] text-xl p-[1em] ${
                            activeButton === 2 ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-100 hover:text-black'
                        }`}
                    >
                        Mood Increasor
                    </button>
                </div>

                <div className="bg-white border-2 border-indigo-600 shadow-md rounded-lg justify-center items-center flex p-10 text-xl w-2/3 ss:w-1/3 ">
                    <p>{information}</p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Information;
