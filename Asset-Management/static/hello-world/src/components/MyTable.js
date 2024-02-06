import React, { useState } from 'react';
import { Table, Pagination, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyTable = ({ data }) => {
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
    setCurrentPage(1); // Reset to first page when searching
  };

  const filteredItems = currentItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
    <div>
      <h2 style={{ float: 'left' }}>Log Table</h2>
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
    <div>
     

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Message</th>
            <th>Date</th>

          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.message}</td>
              <td>{item.date}</td>

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
  </div>
    
  );
};

export default MyTable;
