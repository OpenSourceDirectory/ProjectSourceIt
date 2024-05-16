// Potentially remove. Leave in for now.

import React, { useContext, useState } from 'react';
import { ThemeContext } from './page';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;
const ProblemPage = () => <div>ProblemPage</div>;

const NavigationOld: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const theme = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<ProblemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationOld;