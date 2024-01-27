// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h2>About Page</h2>
      <Link to="/home">Go to Home</Link>
    </div>
  );
}

// Similarly, update other components (About.jsx, Contact.jsx) with navigation links.
