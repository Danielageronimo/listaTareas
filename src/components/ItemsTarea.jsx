import { ListGroup, Button } from "react-bootstrap";

const ItemsTarea = ({nombreTarea, borrarTarea}) => {
  return (
      <ListGroup.Item className="d-flex justify-content-between">
        {nombreTarea} 
        <Button variant="danger" onClick={()=> borrarTarea(nombreTarea) }>Borrar</Button>
      </ListGroup.Item>
    );
  };
  
  export default ItemsTarea;
  