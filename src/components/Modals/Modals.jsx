import Modal from 'react-bootstrap/Modal';
import styles from './Modals.module.css'

// eslint-disable-next-line react/prop-types
function Modals({handleClickClose}) {

  return (
    
      <Modal centered show={true} onHide={handleClickClose} >
        <Modal.Header closeButton>
          <Modal.Title>Invite</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className={styles.modalBody}>
            <input type="text" placeholder='Email, Coma Seperated'/>
            <button>Invite</button>
          </div>
          <div className={styles.locka}>
            <img src="../../images/lucide_lock.svg" alt="error" />
            <label>Only people invited to this test</label>
          </div>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button onClick={handleClickClose} variant="secondary">Close</Button> */}
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal>
  );
}

export default Modals;