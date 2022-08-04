import React, { Component } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormCourseComponent from "../../../components/form-course.common";
import { InjectProviders } from "../../../helpers/injectProviders";
import { CourseProvider } from "../../../store/providers/course.provider";

export class PagedCommonClass {
  page = 1;
  pages = 1;
  size = 10;
  total = 10;
  data = [];
}

class CurriculumPageClass extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: new PagedCommonClass(),
    };
  }
  componentDidMount() {
    this.getCurriculums();
  }

  getCurriculums = async () => {
    const { courseProvider } = this.props;
    this.setState({ isLoading: true });
    const response = await courseProvider.getCurriculums();
    let data = new PagedCommonClass();
    if (response) {
      data = { ...data, ...response };
    }
    this.setState({ data, isLoading: false });
  };
  render = () => {
    const { isLoading, data } = this.state;
    return (
      <div className="p-4 w-100">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="h3">Planes de estudio</div>
          <div>
            <FormCourseComponent
              label="Crear plan de estudios"
              okCreate={this.getCurriculums}
              isCurriculum={true}
              className="w-100"
            />
          </div>
        </div>
        {isLoading && (
          <div className="w-100 justify-content-center align-items-center py-3 d-flex">
            <Spinner
              as="span"
              animation="grow"
              size="lg"
              role="status"
              aria-hidden="true"
            />
          </div>
        )}
        {!isLoading && (
          <div className="col-12 py-3 d-flex flex-wrap">
            {data &&
              data.data.map((curriculum, index) => (
                <div className="p-1 col-md-4" key={index}>
                  {" "}
                  <Card>
                    <Card.Header>{curriculum.code}</Card.Header>
                    <Card.Body>
                      <Card.Title>{curriculum.name}</Card.Title>
                      <Card.Text>{curriculum.description}</Card.Text>
                      <Link
                        to={"/dashboard/curriculum/" + curriculum.id}
                        variant="primary"
                      >
                        Ver
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };
}

export default InjectProviders(CurriculumPageClass, {
  courseProvider: new CourseProvider(),
});
