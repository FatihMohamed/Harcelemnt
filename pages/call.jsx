import React from "react";
import {Call} from "../components/questions";


function call(){
return(
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <h2 className="text-5xl font-bold"></h2>
  
      <div>
        <Call
          heading="Cliquez pour contacter la police"
          message="Votre identité sera maintenue secrête tant que vous le souhatez"
        />
      </div>
    </div>
  ) ;
}
export default call

