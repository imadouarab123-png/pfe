import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Agent from "./Agent";
import Finance from "./Finance"; 
import Cassier from "./cassier"; 
function App() {
  return (
    <Routes>
     
      <Route path="/" element={<Form />} />
      <Route path="/agent" element={<Agent />} />
     <Route path="/finance" element={<Finance/>} />
      <Route path="/cassier" element={<Cassier/>} />
     </Routes>
  );
}

export default App;
