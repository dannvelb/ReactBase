import React from "react";
import "../App.scss";
import "../assets/bootstrap.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeComponent from "./pages/home";
import { ProtectedRoute } from "./guards/auth.guard";
import AuthenticationPageClass from "./pages/auth";
import DashboardComponent from "./pages/dashboard";
import { connect } from "react-redux";
import { IS_USER_AUTH } from "./store/const";
import AdminPageClass from "./pages/dashboard/admin";
import CoordPageClass from "./pages/dashboard/coord";
import TeacherPageClass from "./pages/dashboard/teacher";
import StudentPageClass from "./pages/dashboard/student";
import CurriculumPageClass from "./pages/dashboard/curriculum";
import DetailCurriculumPageClass from "./pages/dashboard/curriculum/detail.curriculum";
import CoursePageClass from "./pages/dashboard/course";
import GroupPageClass from "./pages/dashboard/group";

const App = ({ isAuth }) => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              path="/auth"
              isAuth={isAuth}
              redirectPath="/dashboard"
            ></ProtectedRoute>
          }
        >
          <Route path="" element={<AuthenticationPageClass />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              isAuth={isAuth}
              path="/dashboard"
              redirectPath="/auth"
            ></ProtectedRoute>
          }
        >
          <Route path="" element={<DashboardComponent />} />
          <Route
            path="admin"
            element={<AdminPageClass  />}
          />
          <Route
            path="coord"
            element={<CoordPageClass />}
          />
          <Route
            path="teacher"
            element={<TeacherPageClass  />}
          />
          <Route
            path="student"
            element={<StudentPageClass  />}
          />
          <Route path="curriculum">
            <Route
              path=""
              element={
                <CurriculumPageClass  />
              }
            />
            <Route
              path=":id"
              element={
                <DetailCurriculumPageClass
                  
                />
              }
            />
          </Route>
          <Route path="courses">
            <Route
              path=""
              element={
                <CoursePageClass  />
              }
            />
          </Route>
          <Route path="group" element={<GroupPageClass />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default connect(
  (state) => ({ isAuth: state.session[IS_USER_AUTH] }),
  {}
)(App);
