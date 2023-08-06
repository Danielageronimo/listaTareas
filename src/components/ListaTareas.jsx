import { ListGroup } from "react-bootstrap";
import ItemsTarea from './ItemsTarea';

const ListaTareas = ({propsListaTareas}) => {

  return (
    <ListGroup>
      {
        propsListaTareas.map(()=>  <ItemsTarea></ItemsTarea>)
      }
    </ListGroup>
  );
};
  
export default ListaTareas;
  