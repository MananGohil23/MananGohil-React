import React from 'react'
const Lectures = () => {
    return (
        <>
            <div className = "bg-gray-100 h-full flex">
                <div className = "bg-white w-[350px]shadow-lg rounded-lg p-6">
                    <h1 className = "text-4xl font-bold mb-6 text-slate-900 items-center flex justify-center">
                        Lectures
                    </h1>
                    <div className = "flex flex-col gap-4 transition">
                        <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                            <h2 className = "text-2xl font-medium">
                                1. Data Structures 
                            </h2>    
                        </div>
                        <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                            <h2 className = "text-2xl font-medium">
                                2. Algorithms 
                            </h2>    
                        </div>
                        <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                            <h2 className = "text-2xl font-medium">
                                3. JavaScript Fundamentals
                            </h2>    
                        </div>
                        <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                            <h2 className = "text-2xl font-medium">
                                4. Document Object Method (DOM)
                            </h2>    
                        </div>
                        <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                            <h2 className = "text-2xl font-medium">
                                5. React Basics
                            </h2>    
                        </div>
                        <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                            <h2 className = "text-2xl font-medium">
                                6. React Components
                            </h2>    
                        </div>
                        <div className = "bg-gray-200 rounded-lg shadow-md p-4 hover:scale-[110%] hover:bg-gray-300">
                            <h2 className = "text-2xl font-medium">
                                7. State and Props
                            </h2>    
                        </div>
                    </div>
                </div>
                <div className = "bg-black rounded-lg w-full">
                    <h1 className = "text-4xl font-bold text-white items-center flex justify-center">
                        Lectures coming soon...
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Lectures;