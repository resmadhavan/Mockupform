import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormMockup from './Pages/FormMockup';
import Preview from './Pages/Preview';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormMockup />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="*" element={<FormMockup />} />
    </Routes>
  );
}

export default App;

