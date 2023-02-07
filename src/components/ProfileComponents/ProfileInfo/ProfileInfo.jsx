import React from "react";

export default function ProfileInfo({setIsEdit}) {
  return (
    <>
      <div className="flex justify-start items-start">
        <div className="h-[150px] w-[150px] rounded-full overflow-hidden object-cover">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="user profile"
          />
        </div>
        <div className="mt-5 ml-5">
          <h2 className="text-4xl font-semibold">Maheesh Dewmina</h2>
          <p className="text-xl">@dewmina</p>
        </div>
      </div>
      <div className="mt-5 px-10 grid grid-cols-2 gap-5">
        <span>
          Birthdate : <br /> 01 - 30 - 2001
        </span>
        <span>
          Phone : <br /> +91 76 300 2230
        </span>
        <span>
          Gender : <br /> Male
        </span>
        <span>
          Email : <br /> maheedew@gmail,com
        </span>
        <span> Kandy</span>
        <span>
          Address : <br /> 1/128 Riverside, Mawathura, Gampola
        </span>
      </div>
      <button  title={"edit profile"} onClick={()=>{setIsEdit({state:true,id:''})}} className="border-b border-dashed border-black text-black absolute bottom-7 right-10">
        Edit Profile
      </button>
    </>
  );
}
