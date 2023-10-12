import React from "react";
import { AssoForms } from "../components/Forms/AssoForms";

function assoForm() {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img2">
      <h2 className="text-5xl font-bold"></h2>

      <div>
        <AssoForms/> 
      </div>
    </div>
  );
}
export default assoForm;