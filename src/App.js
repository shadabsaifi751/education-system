
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/pageNotFound';
import Layout from './components/Layout';
import Assessment from './pages/Assessment';
// const Marketingform = lazy(() => import("../App/Marketing/Marketingform"));


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/assessment" element={<Assessment />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
