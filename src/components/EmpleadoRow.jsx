import { ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({nombreProps, tituloProps, departamentoProps, avatarProps}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex flex-row align-items-center">
        <EmpleadoAvatar avatarProps={avatarProps}></EmpleadoAvatar>
        <div>
          <h5>{nombreProps}</h5>
          <div className="d-flex flex-row">
            <div className="me-4">
              <p>{tituloProps}</p>
            </div>
            <div>
              <p>{departamentoProps}</p>
            </div>
          </div>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default EmpleadoRow;
