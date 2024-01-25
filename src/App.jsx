import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <>
      <Container>
        <h1>Lista de Empleados</h1>
      </Container>
      <Container>
        <EmpleadoList></EmpleadoList>
      </Container>

    </>
  );
}

export default App;
