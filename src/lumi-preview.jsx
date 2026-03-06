import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./lumi-preview.css";
import LumiArch from "/@fs/Users/juansouza/Downloads/lumi-architecture-infographic.jsx";

document.title = "LUMI Architecture";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LumiArch />
  </StrictMode>,
);
