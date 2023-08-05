import { useState } from "react";
import { Formulario } from "./components/Formulario"
import Header from "./components/Header"
import { ListadoPaciente } from "./components/ListadoPaciente"

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente]= useState({});
  return (
   <div className="container mx-auto mt-10">
     <Header
       
     />
     <div className="mt-10 md:flex">
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPaciente
        pacientes={pacientes}
        setPaciente={setPaciente}
      ></ListadoPaciente>
     </div> 
   </div>
  )
}

export default App
