import React from 'react'
const Home = () => {
    return (
        <>
            <div className = "">
                <h1 className = "bg-white w-full flex justify-center items-center text-4xl p-6 font-bold text-slate-800">
                    {/* <marquee onMouseOver={() => document.querySelector('marquee').stop()} onMouseOut={() => document.querySelector('marquee').start()} scrollamount = "10" >
                        Welcome to the Student Dashboard
                    </marquee> */}
                
                    Welcome to the Student Dashboard.
                    
                </h1>
                <div className = "grid grid-cols-3 gap-2 p-4">
                    <div className = "rounded-3xl border border-gray-300 bg-white h-screen transition font-bold flex items-center justify-center shadow">
                        <div>
                             <img src = "/Attendance-Management-System.png" alt = "Attendance Icon" className = "h-full mx-auto border border-gray-300 shadow" />

                        </div>
                    </div>
                    <div className = "rounded-3xl border border-gray-300 bg-white h-screen transition font-bold flex items-center justify-center shadow">
                        <div>
                             <img src = "/Orange-Icon.png" alt = "Orange Icon" className = "h-full w-full border border-gray-300 shadow" />
                        </div>
                    </div>
                    <div className = "rounded-3xl border border-gray-300 bg-white h-screen font-bold transition flex items-center justify-center shadow">
                        <div>
                            This is Green
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;