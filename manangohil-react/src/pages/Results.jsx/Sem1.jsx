import React from 'react'
const Sem1 = () => {
    return (
        <>
        <div className = "bg-gray-200 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
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
        </>
    );
};

export default Sem1;