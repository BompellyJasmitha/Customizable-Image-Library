import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx"

let ele=createRoot(document.getElementById("root"))
ele.render(<>
        
          <App/>
        </>)