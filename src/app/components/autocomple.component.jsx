import { Component } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useParams } from "react-router-dom";
import { InjectProviders } from "../helpers/injectProviders";
import { CourseProvider } from "../store/providers/course.provider";

class AutocompleteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      input: "",
      options: [],
    };
  }
  componentDidMount() {}

  selectOption = (event) => {
    const { selectOption } = this.props;
    selectOption(event);
    this.setState({ input: "" });
  };

  changeInput = ({ target }) => {
    const { value: input } = target;
    this.setState({ input });
    this.handleAutocompleteKey(input);
  };

  handleAutocompleteKey = async (word) => {
    const { courseProvider, optionsDefaultBefore } = this.props;
    if (word) {
      const options = await courseProvider.curriculumAutocompleteNotCourses(
        4,
        word
      );
      if (options) {
        this.setState({
          options: [...options],
        });
      }
    }
  };

  render = () => {
    const { label, optionsDefaultBefore, placeholder } = this.props;
    const { options, input } = this.state;
    return (
      <>
        <Form.Group>
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Control
            type="text"
            placeholder={placeholder}
            onChange={this.changeInput}
            value={input}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() =>
              setTimeout(() => this.setState({ focus: false }), 150)
            }
          />
          <Dropdown.Menu show={this.state.focus && options.length > 0}>
            {[...optionsDefaultBefore, ...options].map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => this.selectOption(item.value)}
              >
                {item.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Form.Group>
      </>
    );
  };
}

export default InjectProviders(AutocompleteComponent, {
  courseProvider: new CourseProvider(),
});

AutocompleteComponent.defaultProps = {
  optionsDefaultBefore: [],
};
