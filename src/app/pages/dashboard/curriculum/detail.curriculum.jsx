import React, { Component, useState, useEffect } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AutocompleteComponent from "../../../components/autocomple.component";
import FormCourseComponent from "../../../components/form-course.common";
import { BoolConst, NumberConst, StringConst } from "../../../const/const";
import { InjectProviders } from "../../../helpers/injectProviders";
import { withParams } from "../../../helpers/params.router";
import { CurriculumItem } from "../../../models/curriculums";
import { CourseProvider } from "../../../store/providers/course.provider";



class DetailCurriculumPageClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      curriculum: new CurriculumItem(),
    };
  }
  componentDidMount() {
    this.searchDetailCurriculum();
  }

  searchDetailCurriculum = async () => {
    const { courseProvider, params, navigate } = this.props;
    this.setState({ isLoading: true });
    const curriculum = await courseProvider.getCurriculumByID(
      Number(params.id)
    );
    if (curriculum) {
      this.setState({ curriculum });
    } else {
      navigate("/dashboard/curriculum");
    }
    this.setState({ isLoading: false });
  };

  addChildrenCurriculum = async (event) => {
    const { courseProvider } = this.props;

    const response = await courseProvider.enrrollCourseIntoCurriculum(
      this.state.curriculum.id,
      event
    );
    if (response) {
      this.searchDetailCurriculum();
    }
  };

  render = () => {
    const { isLoading, data, curriculum } = this.state;
    return isLoading ? (
      <div className="w-100 justify-content-center align-items-center py-5 d-flex">
        <Spinner
          as="span"
          animation="grow"
          size="lg"
          role="status"
          aria-hidden="true"
        />
      </div>
    ) : (
      <div className="p-4 w-100">
        <div className="w-100 h2">
          {curriculum.code} - {curriculum.name}
        </div>
        <div className="w-100 h3">{curriculum.description}</div>
        <div className="w-100 h5">{curriculum.status.name}</div>
        <FormCourseComponent
          label="Agregar nueva materia"
          okCreate={this.searchDetailCurriculum}
          isCurriculum={false}
          classNameButton=" my-2"
          parentId={curriculum.id}
        />
        <AutocompleteComponent
          placeholder="Agregar materia existente"
          selectOption={this.addChildrenCurriculum}
        />
        {curriculum.children && curriculum.children.length > 0 && (
          <div className="d-flex flex-wrap w-100">
            {curriculum.children.map((child, index) => (
              <div key={index} className="col-md-4 p-2">
                <Card className="text-center ">
                  <Card.Header>
                    {child.code} - {child.name}
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{child.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    {child.status.name}
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
}

export default withParams(InjectProviders(DetailCurriculumPageClass, {
  courseProvider: new CourseProvider()
}));
