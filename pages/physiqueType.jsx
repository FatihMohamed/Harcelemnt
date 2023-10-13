import React from "react";
import Physique from "../components/questions";

function physiqueType() {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <h2 className="text-5xl font-bold"></h2>

      <div>
        <Physique
          heading="Vous avez subi une agression physique"
          message="Choisissez le type d'agression physique"
        />
      </div>
    </div>
  );
}
export default physiqueType;
