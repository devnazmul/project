import React, { useState } from "react";
import EditProfile from "../../components/ProfileComponents/EditProfile/EditProfile";
import ProfileInfo from "../../components/ProfileComponents/ProfileInfo/ProfileInfo";

export default function Profile() {
  const [isEdit, setIsEdit] = useState({ state: false, id: "" });

  return (
    <div className="relative text-black pl-10 py-5 border-l border-t border-white z-50 mr-56 my-5 ml-5 rounded-3xl profileDashboardContainerGlass h-[80vh]">
      {!isEdit.state ? <ProfileInfo setIsEdit={setIsEdit} /> : <EditProfile />}
    </div>
  );
}
