import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "../../public/layaDuenias.png",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "../../public/astrydValles.png",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "../../public/shantellMeza.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "../../public/sergioOcampo.png",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "../../public/aresGimenez.png",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "../../public/martaPerez.png",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "../../public/ellenBalderas.png",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "../../public/cynthiaValentin.png",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "../../public/bernardJung.png",
    },
  ];

  return (
    <div>
      <ListGroup>
        {empleados.map((empleado) => (
          <EmpleadoRow
            key={empleado.id}
            nombreProps={empleado.fullName}
            tituloProps={empleado.title}
            departamentoProps={empleado.department}
            avatarProps={empleado.pic}
          ></EmpleadoRow>
        ))}
      </ListGroup>
    </div>
  );
};

export default EmpleadoList;
