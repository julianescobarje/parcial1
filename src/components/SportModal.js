import { Modal, Button } from 'react-bootstrap';

function SportModal({ show, handleClose, imageUrl }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Imagen Detallada</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img 
          src={imageUrl} 
          alt="Imagen ampliada" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SportModal;
