 
 import React, { useState, useEffect } from 'react';
 import './leads.css';
 
 const Leads = () => {
   const [leadsData, setLeadsData] = useState([]); // State to hold leads data
   const [selectedLead, setSelectedLead] = useState(null);
   const [newLead, setNewLead] = useState({ name: '', email: '' }); // State for new lead input
 
   // Function to fetch data
   const fetchLeadsData = async () => {
     try {
       // Simulating an API call
       const response = await fetch('https://api.example.com/leads'); // Replace with your API URL
       const data = await response.json();
       setLeadsData(data); // Set the fetched data to state
     } catch (error) {
       console.error('Error fetching leads data:', error);
     }
   };
 
   // Fetch leads data when the component mounts
   useEffect(() => {
     fetchLeadsData();
   }, []);
 
   const openLeadDetails = (lead) => {
     setSelectedLead(lead);
   };
 
   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setNewLead((prevLead) => ({ ...prevLead, [name]: value })); // Update state with input values
   };
 
   const handleAddLead = (e) => {
     e.preventDefault(); // Prevent page refresh
     if (newLead.name && newLead.email) { // Check if input fields are not empty
       setLeadsData((prevLeads) => [
         ...prevLeads,
         { id: prevLeads.length + 1, ...newLead }, // Add new lead with a unique id
       ]);
       setNewLead({ name: '', email: '' }); // Reset input fields
     } else {
       alert("Please fill in both fields."); // Alert if fields are empty
     }
   };
 
   return (
     <div className="leads">
       <h1>Leads</h1>
 
       {/* Form to add a new lead */}
       <form onSubmit={handleAddLead} className="add-lead-form">
         <input
           type="text"
           name="name"
           placeholder="Lead Name"
           value={newLead.name}
           onChange={handleInputChange}
           required
         />
         <input
           type="email"
           name="email"
           placeholder="Lead Email"
           value={newLead.email}
           onChange={handleInputChange}
           required
         />
         <button type="submit">Add Lead</button>
       </form>
 
       <ul className="leads-list">
         {leadsData.map((lead) => (
           <li key={lead.id} className="lead-item" onClick={() => openLeadDetails(lead)}>
             {lead.name} - {lead.email}
           </li>
         ))}
       </ul>
       {selectedLead && (
         <div className="lead-details">
           <h2>Lead Details</h2>
           <p><strong>Name:</strong> {selectedLead.name}</p>
           <p><strong>Email:</strong> {selectedLead.email}</p>
         </div>
       )}
     </div>
   );
 };
 
 export default Leads;
 