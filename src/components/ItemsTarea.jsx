import { ListGroup, Button } from "react-bootstrap";

const ItemsTarea = ({nombreTarea}) => {
  return (
      <ListGroup.Item className="d-flex justify-content-between">
        {nombreTarea} 
        <Button variant="danger">Borrar</Button>
      </ListGroup.Item>
    );
  };
  
  export default ItemsTarea;
  