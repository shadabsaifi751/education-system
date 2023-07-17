
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/pageNotFound';
import Layout from './components/Layout';
import AssessmentPage from './pages/AssessmentPage';
import Home from './pages/index';
import LibraryPage from './pages/LibraryPage';
import RoundStatusPage from './pages/RoundStatusPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/my-library" element={<LibraryPage />} />
        <Route path="/round-status" element={<RoundStatusPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
