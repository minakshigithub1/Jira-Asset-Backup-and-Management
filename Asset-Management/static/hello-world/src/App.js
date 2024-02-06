


import React from 'react';
import MyTable from './components/MyTable';
import ActionTable from './components/ActionTable'; 
import ConnectionTable from './components/ConnectionTable'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button } from 'react-bootstrap';
import './styles/style.css';

const App = () => {
  const data = [
    { id: 1, name: 'John Doe', message: 'Server Problem',date:'01-01-2024' },
    { id: 2, name: 'Jane Smith', message: 'Removing rar file',date:'01-01-2024' },
    { id: 3, name: 'John Doe', message: 'Backup Successful',date:'01-01-2024' },
    { id: 4, name: 'Jane Smith', message: 'Waiting for approval',date:'01-01-2024' },
    { id: 5, name: 'John Doe', message: 'Data currupted ',date:'01-01-2024' },
    { id: 6, name: 'Jane Smith', message: 'Applied privacy policy',date:'01-01-2024' },
    { id: 7, name: 'John Doe', message: 'Service unavailable',date:'01-01-2024' },
    { id: 8, name: 'Jane Smith', message: 'Drive full',date:'01-01-2024' },
    { id: 9, name: 'John Doe', message: 'Temp files deleted',date:'01-01-2024' },
    { id: 10, name: 'Jane Smith', message: 'No admin acess',date:'01-01-2024' },
    { id: 11, name: 'John Doe', message: 'Unable to fetch ticket',date:'01-01-2024' },
    { id: 12, name: 'Jane Smith', message: 'Software problem',date:'01-01-2024' },
  ];

  const schemadata = [
    { id: 1, name: 'Customer', date: '15-01-2024' },
    { id: 2, name: 'Configuration Item', date: '21-02-2024' },
  ];

  return (
    <div className="App">
    <ConnectionTable className="mt-1"/>

     <Card className="mt-3">
        <Card.Body>
          <ActionTable data={schemadata}/>
        </Card.Body>
      </Card> 

      <Card className="mt-3">
        <Card.Body>
          <MyTable data={data} />
        </Card.Body>
      </Card>

        
     
    </div>
  );
};

export default App;
