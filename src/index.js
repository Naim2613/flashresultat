import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Propos from "./routes/a_propos";
import Resultat from "./routes/resultat";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="a_propos" element={<Propos />} />
      <Route path="Resultat" element={<Resultat />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);