import React from 'react'
const Home = () => {
    return (
        <>
            <div className = "bg-gray-100 min-h-screen">
                <h1 className = "w-full flex justify-center items-center text-4xl p-6 font-bold text-slate-800">
                    {/* <marquee onMouseOver={() => document.querySelector('marquee').stop()} onMouseOut={() => document.querySelector('marquee').start()} scrollamount = "10" >
                        Welcome to the Student Dashboard
                    </marquee> */}
                
                    Welcome to the Student Dashboard.
                    
                </h1>
                <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                    <div className = "bg-white rounded-lg shadow-lg p-6 transition hover:scale-105">
                        <h2 className = "text-2xl font-bold">
                            Card
                        </h2>
                        <p className = "text-gray-700 p-1 text-lg">
                            Card Content will be displayed here. This is a placeholder for the card content. You can replace this with actual content later.
                        </p>
                    </div>
                    <div className = "bg-white rounded-lg shadow-lg p-6 transition hover:scale-[110%]">
                        <h2 className = "text-2xl font-bold">
                            Card
                        </h2>
                        <p className = "text-gray-700 p-1 text-lg">
                            Card Content will be displayed here. This is a placeholder for the card content. You can replace this with actual content later.
                        </p>
                    </div>
                    <div className = "bg-white rounded-lg shadow-lg p-6 transition hover:scale-105">
                        <h2 className = "text-2xl font-bold">
                            Card
                        </h2>
                        <p className = "text-gray-700 p-1 text-lg">
                            Card Content will be displayed here. This is a placeholder for the card content. You can replace this with actual content later.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;