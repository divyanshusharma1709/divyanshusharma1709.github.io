import React from "react";
import { useEffect } from "react";

function SpaceAdv() {
    useEffect(() => {
        window.location.href = "/space_adv/index.html"; // Redirect to the game page
      }, []);
      return null;
    }

export default SpaceAdv;