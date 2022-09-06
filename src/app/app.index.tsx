import React from "react";
import "../App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./guards/auth.guard";
import AuthenticationPageClass from "./pages/auth/auth.index";
import DashboardComponent from "./pages/dashboard";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute path="/" redirectPath="/dashboard"></ProtectedRoute>
          }
        >
          <Route path="" element={<AuthenticationPageClass />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute path="/dashboard" redirectPath="/"></ProtectedRoute>
          }
        >
          <Route path="" element={<DashboardComponent />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
