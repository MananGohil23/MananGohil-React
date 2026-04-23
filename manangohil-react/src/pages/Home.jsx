import React from 'react'
const Home = () => {
    return (
        <>
            <div className = "">
                <h1 className = "bg-blue-300 w-full h-[30px] flex justify-center items-center text-xl p-6 font-bold">
                    <marquee onMouseOver={() => document.querySelector('marquee').stop()} onMouseOut={() => document.querySelector('marquee').start()} scrollamount = "10" >
                        Welcome to the Student Dashboard
                    </marquee>
                </h1>
                <div className = "grid grid-cols-3 gap-2 p-4">
                    <div className = "rounded-3xl border border-gray-300 bg-white h-screen font-bold flex items-center justify-center shadow">
                        <div>
                             This is Blue
                        </div>
                    </div>
                    <div className = "rounded-3xl border border-gray-300 bg-white h-screen font-bold flex items-center justify-center shadow">
                        <div>
                            This is Orange
                        </div>
                    </div>
                    <div className = "rounded-3xl border border-gray-300 bg-white h-screen font-bold flex items-center justify-center shadow">
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