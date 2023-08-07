import { ListGroup } from "react-bootstrap";
import ItemsTarea from './ItemsTarea';

const ListaTareas = ({propsListaTareas, borrarTarea}) => {

  return (
    <ListGroup>
      {
        propsListaTareas.map((tarea,index)=>  <ItemsTarea key={index} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemsTarea>)
      }
    </ListGroup>
  );
};
  
export default ListaTareas;
  