import Modal from "react-bootstrap/Modal";

const ChangePsw = (props) => {
  const handleClose = () => {
    props.setShowChangePsw(false);
  };

  
  return (
    <Modal show={props.showChangePsw} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> update your password</Modal.Title>
        <Modal.Body>
          <p>
            email: <input type="text" id="changePswEmail" name="ChangePswEmail" />
          </p>

          <p>
            <button> submit </button>
          </p>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
};

export default ChangePsw;
