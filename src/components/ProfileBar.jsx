import React from "react";

function ProfileBar({ children }) {
  return (
    <>
      <div className="w-full h-full text-black dark:text-white px-2 flex justify-center">
        {children}
      </div>
    </>
  );
}

export default ProfileBar;
