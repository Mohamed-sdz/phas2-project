 // src/components/EventDetails.js
 import React from 'react';
 import { useParams } from 'react-router-dom';
 import { Card } from 'react-bootstrap';
 
 function EventDetails({ events }) {
   const { id } = useParams();
   const eventId = parseInt(id);
   const event = events.find((event) => event.id === eventId);
 
   if (!event) {
     return <div>Event not found.</div>;
   }
 
   return (
     <div>
       <Card>
         <Card.Body>
           <Card.Title>{event.title}</Card.Title>
           <Card.Text>{event.description}</Card.Text>
         </Card.Body>
       </Card>
     </div>
   );
 }
 
 export default EventDetails;
 