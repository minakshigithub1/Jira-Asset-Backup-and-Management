import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4';
import DataTable from 'datatables.net-dt';
import './styles.css';

const DataTableComponent = () => {
  const tableRef1 = useRef();
  const tableRef2 = useRef();

  useEffect(() => {
    // Initialize DataTable for the first table
    $(tableRef1.current).DataTable({
      paging: true,
      searching: true,
      ordering: true,
      stripeClasses: ['bg-light', 'bg-white'],
      border: '1px solid #ddd',
      columnDefs: [
        { className: 'border-right', targets: [0, 1, 2] },
        { className: '', targets: '_all' },
      ],
    });

    // Initialize DataTable for the second table
    $(tableRef2.current).DataTable({
      paging: true,
      searching: true,
      ordering: true,
      stripeClasses: ['bg-light', 'bg-white'],
      border: '1px solid #ddd',
      columnDefs: [
        { className: 'border-right', targets: [0, 1, 2] },
        { className: '', targets: '_all' },
      ],
    });
  }, []);

  return (
    <div className="container mt-4">
      {/* First Table */}
      <h4>First Table</h4>
      <table className="table table-bordered" ref={tableRef1}>
        <thead className="thead-dark">
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows dynamically here */}
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Hello, World!</td>
            <td>2024-01-24</td>
          </tr>
          {/* Add more rows as needed */}
          {/* ... (other rows) ... */}
          <tr>
            <td>12</td>
            <td>Minakshee</td>
            <td>Hello, World!</td>
            <td>2024-01-24</td>
          </tr>
        </tbody>
      </table>

      {/* Second Table */}
      <h4>Second Table</h4>
      <table className="table table-bordered" ref={tableRef2}>
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Synch Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows dynamically here */}
          <tr>
            <td>John Doe</td>
            <td>2024-01-25</td>
            <td>Edit</td>
          </tr>
          {/* Add more rows as needed */}
          {/* ... (other rows) ... */}
          <tr>
            <td>Minakshee</td>
            <td>2024-01-26</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTableComponent;
