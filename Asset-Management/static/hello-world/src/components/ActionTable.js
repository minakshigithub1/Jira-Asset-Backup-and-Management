// // ActionTable.js
// import React from 'react';
// import { Table, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ActionTable = ({ data }) => {
//   return (
//     <div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Sr. No</th>
//             <th>Name</th>
//             <th>Sync Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.date}</td>
//               <td>
//                 <Button variant="primary" className="mr-2">
//                   Backup
//                 </Button>
//                 <Button variant="success">Restore</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default ActionTable;

// ActionTable.js
// import React, { useState } from 'react';
// import { Table, Pagination, Form, Button } from 'react-bootstrap';

// const ActionTable = ({ data }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Search
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1); // Reset to the first page when searching
//   };

//   const filteredItems = currentItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <Form.Group controlId="search">
//         <Form.Control
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </Form.Group>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Sr. No</th>
//             <th>Name</th>
//             <th>Sync Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredItems.map((item, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.date}</td>
//               <td>
//                 <Button variant="primary" className="mr-2">
//                   Backup
//                 </Button>
//                 <Button variant="success">Restore</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Pagination>
//         {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
//           (item, index) => (
//             <Pagination.Item
//               key={index}
//               active={index + 1 === currentPage}
//               onClick={() => paginate(index + 1)}
//             >
//               {index + 1}
//             </Pagination.Item>
//           )
//         )}
//       </Pagination>
//     </div>
//   );
// };

// export default ActionTable;

// ActionTable.js
// import React, { useState } from 'react';
// import { Table, Pagination, Form, Button } from 'react-bootstrap';

// const ActionTable = ({ data }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Search
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1); // Reset to the first page when searching
//   };

//   const filteredItems = currentItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <Form.Group controlId="search">
//         <Form.Control
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </Form.Group>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Sync Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredItems.map((item, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.date}</td>

//               <td> 
//                 <Button variant="outline-info" className="mr-10" size="sm">Backup</Button>
//                 <Button variant="outline-secondary" size="sm">Restore</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Pagination>
//         {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
//           (item, index) => (
//             <Pagination.Item
//               key={index}
//               active={index + 1 === currentPage}
//               onClick={() => paginate(index + 1)}
//             >
//               {index + 1}
//             </Pagination.Item>
//           )
//         )}
//       </Pagination>
//     </div>
//   );
// };

// export default ActionTable;



// ActionTable.js
import React, { useState } from 'react';
import { Table, Pagination, Form, Button } from 'react-bootstrap';

const ActionTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredItems = currentItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>
          <h2 style={{ float: 'left' }}>Action Table</h2>
        </div>
        <div>
          <Form.Group controlId="search" style={{ float: 'right' }}>
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form.Group>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Sync Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>
              <Button variant="outline-info" className="mr-10" size="sm">Backup</Button>
              <Button variant="outline-secondary" size="sm">Restore</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ float: 'right' }}>
        <Pagination>
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
            (item, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
    </div>
  );
};

export default ActionTable;
