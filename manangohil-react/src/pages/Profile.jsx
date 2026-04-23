import React from 'react'
const Profile = () => {
    return (
        <>
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
        </>
    );
};

export default Profile;