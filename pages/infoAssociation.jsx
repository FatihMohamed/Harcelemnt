import React from "react";
import { SendInfos } from "../components/Forms/SendInfos";


function infoAssociation() {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img2">
      <h2 className="text-5xl font-bold"></h2>

      <div>
        <SendInfos/> 
      </div>
    </div>
  );
}
export default infoAssociation;