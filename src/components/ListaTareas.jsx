import { ListGroup } from "react-bootstrap";
import ItemsTarea from './ItemsTarea';

const ListaTareas = ({propsListaTareas}) => {

  return (
    <ListGroup>
      {
        propsListaTareas.map((tarea,index)=>  <ItemsTarea key={index}></ItemsTarea>)
      }
    </ListGroup>
  );
};
  
export default ListaTareas;
  