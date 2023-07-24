import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsPlusCircle } from 'react-icons/bs';

import EventForm from './ components/EventForm';
import EventList from './ components/EventList';
import EventDetails from './ components/EventDetails';
import axios from 'axios';

function App() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/events')
      .then(response => setEvents(response.data)) 
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const addEvent = event => {
    axios.post('http://localhost:3001/events', event)
      .then(response => {
        setEvents([...events, response.data]);
      })
      .catch(error => console.error('Error adding event:', error));
  };

  return (
    <Router>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <BsPlusCircle size={30} /> Event Scheduler
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Event List</Nav.Link>
              <Nav.Link as={Link} to="/event/add">
                <BsPlusCircle size={20} /> Add Event
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
        
          <Route path="/" element={<EventList events={events} />} />
        
          <Route path="/events/:id" element={<EventDetails events={events} />} />
        
          <Route path="/event/add" element={<EventForm addEvent={addEvent} />} />
        
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
