import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { OrderList } from './pages/OrderList';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/ecommerce" element={<OrderList />} />
          <Route path="/projects" element={<OrderList />} />
          <Route path="/courses" element={<div className="p-8"><h1>Online Courses Page</h1></div>} />
          <Route path="/profile" element={<div className="p-8"><h1>User Profile Page</h1></div>} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;