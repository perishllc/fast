import React from "react";

import DarkModeSwitch from "./DarkModeSwitch";

export default function () {

  return (
    <nav className="flex <sm:flex-col sm:flex-row justify-between items-center font-mono">

      <DarkModeSwitch />

    </nav>
  );
}
