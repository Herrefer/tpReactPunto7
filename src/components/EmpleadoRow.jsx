import { ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
import "../empleadoRow.css"
const EmpleadoRow = ({nombreProps, tituloProps, departamentoProps, avatarProps}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex flex-row align-items-center">
        <EmpleadoAvatar avatarProps={avatarProps}></EmpleadoAvatar>
        <div>
          <h5>{nombreProps}</h5>
          <div className="d-flex flex-row">
            <div className="me-4">
              <p className="tituloStyle">{tituloProps}</p>
            </div>
            <div>
              <p className="departamentoStyle">{departamentoProps}</p>
            </div>
          </div>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default EmpleadoRow;
