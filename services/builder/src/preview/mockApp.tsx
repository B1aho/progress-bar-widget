import { createRoot } from "react-dom/client";
import { MockScreen } from "./MockScreen";
import "../index.css";

createRoot(document.getElementById('mock-page')!).render(
  <MockScreen />
)