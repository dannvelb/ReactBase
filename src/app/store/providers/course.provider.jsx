import { Endpoints } from "../endpoints";
import { CommonProvider } from "./common.provider";

export class CourseProvider extends CommonProvider {
  constructor() {
    super();
  }

  createCurriculum = async (course) => {
    try {
      const response = await this.HTTP_POST(
        `${Endpoints.curriculum.base}`,
        course
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  getCurriculums = async () => {
    try {
      return await this.HTTP_GET(`${Endpoints.curriculum.base}`);
    } catch (err) {
      return null;
    }
  };

  getCurriculumByID = async (id) => {
    try {
      const response = await this.HTTP_GET(
        `${Endpoints.curriculum.base}/${id}`
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  createCourse = async (course) => {
    try {
      const response = await this.HTTP_POST(
        `${Endpoints.courses.course}`,
        course
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  getCourses = async () => {
    try {
      const response = await this.HTTP_GET(`${Endpoints.courses.course}`);
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  getCoursesByID = async (id) => {
    try {
      const response = await this.HTTP_GET(`${Endpoints.courses.course}/${id}`);
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  curriculumAutocompleteNotCourses = async (id, word) => {
    try {
      const response = await this.HTTP_GET(
        `${Endpoints.curriculum.autocompletNotCourses}/${id}/${word}`
      );
      return response;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  enrrollCourseIntoCurriculum = async (parentId, childId) => {
    try {
      return await this.HTTP_PUT(`${Endpoints.curriculum.enrrollCourse}`, {
        parentId,
        childId,
      });
    } catch (err) {
      this.httpError(err);
      return null;
    }
  };
}
