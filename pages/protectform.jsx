import React from "react";
import Danger from "../components/questions";

function protectform() {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <h2 className="text-5xl font-bold"></h2>

      <div>
        <Danger
          heading="Il y a t'il un danger imminent ?"
          message="Une agression est-elle sur le point de se produire"
        />
      </div>
    </div>
  );
}
export default protectform;
