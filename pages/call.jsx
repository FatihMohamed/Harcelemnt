import React from "react";
import {Call} from "../components/questions";


function call(){
return(
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <h2 className="text-5xl font-bold"></h2>
  
      <div>
        <Call
          heading="Contactez la police avec le 17"
          message="Si danger ou pour prévenir une aggression"
        />
      </div>
    </div>
  ) ;
}
export default call

