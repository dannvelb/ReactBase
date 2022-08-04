import { environment } from "./environment";

export const Endpoints = {
  auth: {
    base: `${environment.urlBase}/auth`,
    menu: `${environment.urlBase}/menus`,
  },
  cliente: {
    base: `${environment.urlBase}/cliente`,
  },
  admin: {
    base: `${environment.urlBase}/admin`,
  },
  teacher: {
    base: `${environment.urlBase}/teacher`,
  },
  student: {
    base: `${environment.urlBase}/student`,
  },
  coord: {
    base: `${environment.urlBase}/coord`,
  },
  courses: {
    course: `${environment.urlBase}/course`,
    enrollCourseIntoCurriculum: `${environment.urlBase}/curriculum/enroll/course`,
  },
  curriculum: {
    base: `${environment.urlBase}/curriculum`,
    autocompletNotCourses: `${environment.urlBase}/curriculum/autocomplete/course/not`,
    enrrollCourse:`${environment.urlBase}/curriculum/enroll/course`
  },
};

export const TokenExcludedEndpoints = ["/api/auth"];
