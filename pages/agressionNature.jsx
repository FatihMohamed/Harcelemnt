import React from "react";
import {AgressionNature} from "../components/questions";

function AgressionNatures() {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <h2 className="text-5xl font-bold"></h2>

      <div>
        <AgressionNature
          heading="Quelle est la nature de l'acte concerné ?"
          message=""
        />
      </div>
    </div>
  );
}
export default AgressionNatures;