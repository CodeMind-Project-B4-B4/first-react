// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

// Similarly, update other components (About.jsx, Contact.jsx) with navigation links.
