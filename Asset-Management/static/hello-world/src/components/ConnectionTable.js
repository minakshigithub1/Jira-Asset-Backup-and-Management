// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function WithHeaderExample() {
//   return (
//     <Card>
//       <Card.Header>Assets Backup and Migration</Card.Header>
//       <Card.Body>
//         <Card.Title>Connection</Card.Title>
//         <Card.Text>
//           With supporting text below as a natural lead-in to additional content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default WithHeaderExample;

// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Gear } from 'react-bootstrap-icons'; // Import the Gear icon from react-bootstrap-icons
// import ListGroup from 'react-bootstrap/ListGroup';
// function WithHeaderExample() {
//   return (
//     <Card>
//       <Card.Header>
//         Assets Backup and Migration
//         <Button variant="outline-secondary" className="float-right">
//           <Gear size={20} /> {/* Display the Gear icon */}
//         </Button>
//       </Card.Header>
//       <Card.Body>
//         <Card.Title>Connection</Card.Title>
//         {/* <Card.Text>
//           With supporting text below as a natural lead-in to additional content.
//         </Card.Text> */}
//         <Card style={{ width: '18rem' }}>
//       <ListGroup variant="flush">
//         <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//       </ListGroup>
//     </Card>
//       </Card.Body>
//     </Card>
//   );
// }

// export default WithHeaderExample;

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { invoke } from '@forge/bridge';
import ReactSwitch from 'react-switch';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Gear } from 'react-bootstrap-icons'; 

function WithHeaderExample() {
    const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="card p-4 text-center" style={{ display: 'inline-block', width: '100%', marginBottom: '10px' }}>
      <h2 className="mt-4" style={{ marginLeft: '-1078px', marginBottom: '10px' }}>
        Connection
        <Button variant="outline-secondary" className="float-right" onClick={handleShow}>
          <Gear size={20} />
        Settings</Button>
      </h2>    
      
      <div className="card-body d-flex flex-column align-items-center">
    <table style={{ borderCollapse: 'separate', borderSpacing: '0', width: '100%', marginLeft: '-47px', backgroundColor:'white' }}>
    <tbody>
      <tr>
        <td className="text-center" style={{ border: '1px solid #dee2e6', padding: '10px', width: '100%' }}>
          <strong>STATUS:</strong>
          <span className="text-success">Connected/Disconnected</span>
          <i className="fas fa-check" style={{ marginLeft: '5px' }}></i>
          &nbsp;&nbsp;
  
  
          <span style={{ padding: '0 10px' }}></span>
  
          <strong>BACKUP DB:</strong>
          <span className="text-warning">TWINIT DB</span>
          <i className="fas fa-pen" style={{ marginLeft: '5px' }}></i>
          &nbsp;&nbsp;
  
     
          <span style={{ padding: '0 10px' }}></span>
  
          <strong>BACKUP DATE:</strong>
          <span >21/01/2024 </span>
          <i className="fas fa-pen" style={{ marginLeft: '5px' }}></i>
          &nbsp;&nbsp;
          <i className='fas fa-pen' style={{ marginLeft: '5px' }}></i>
        </td>
      </tr>
    </tbody>
  </table>
      </div>
      {/* Modal for Settings */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Connection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formURL">
              <Form.Label>URL</Form.Label>
              <Form.Control type="text" placeholder="Enter URL" />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter user name" />
            </Form.Group>
            <Form.Group controlId="formdb">
              <Form.Label>Database Name</Form.Label>
              <Form.Control type="text" placeholder="Enter database name" />
            </Form.Group>
            <Button variant="primary" type="submit"  style={{ marginTop: '10px', marginRight:'10px'}} >
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
 
  <div className="d-flex justify-content-between" style={{ marginTop: '-1px', width: '100%' }}>

<div style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #ddd', marginLeft:"-10px" }}>
  <div className="d-flex justify-content-between" style={{ padding: '20px', borderBottom: '1px solid #ddd', backgroundColor:'white' }}>
    <div style={{ width: '48%', paddingRight: '20px',borderRight:'1px solid #dddd' }}>
    <h3 className="mt-4" style={{ marginLeft: '-46px' }}>Schema Information</h3>
      <table style={{ borderCollapse: 'separate', borderSpacing: '0', border: 'none', width: '100%' ,marginLeft:'157px'}}>
        <thead>
          <tr>
            <th>Total Schema: 10</th>
          </tr>
          <tr>
            <th>Total Objects Type: 50</th>
          </tr>
          <tr>
            <th>Total Stored Objects: 200</th>
          </tr>
        </thead>
      </table>
    </div>

    <div style={{ width: '48%' }}>
      <h3 className="mt-4" style={{ marginLeft: '-83px' }}>Backup Information</h3>
      <table style={{ borderCollapse: 'separate', borderSpacing: '0', border: 'none', width: '100%',marginLeft:'155px' }}>
        <thead>
          <tr>
            <th>Last Backup: </th>
          </tr>
          <tr>
            <th>Total Backup Schema:</th>
          </tr>
          <tr>
            <th>Total Object Type: 200</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>
</div>

</div>
    
  );
}

export default WithHeaderExample;


