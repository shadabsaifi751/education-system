
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/pageNotFound';
import Layout from './components/Layout';
import AssessmentPage from './pages/index';
import LibruaryPage from './pages/LibruaryPage';
// const Marketingform = lazy(() => import("../App/Marketing/Marketingform"));


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/my-library" element={<LibruaryPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
