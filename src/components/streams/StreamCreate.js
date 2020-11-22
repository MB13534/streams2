import React, { Component } from "react";
//Field is a react component, reduxForm is a function similar to connect
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(formProps);
    //the error messages are on the meta tag
    // console.log(meta);

    //short hand to send all of the .input from formProps.input into the <input> as props
    //destructred input out of formProps.input
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );

    // return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   ></input>
    // );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    //run this to see all the properties we have action to
    // console.log(this.props);

    return (
      //use Field when we want to show an input to the user
      //formProps send over to renderInput when Field calls it
      //when you add props to Field, it will by default add it to the props in renderInput
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

//everytime you change something in the input, redux-forms runs validate
//we can define this function
//the properties here (title, description) must match exactly in the Field properties, that is what it looks for
const validate = (formsValues) => {
  //if validate returns an empty array, then it is validated.
  const errors = {};
  if (!formsValues.title) {
    errors.title = "You must enter a title";
    //only run if the user did not input a title
  }
  if (!formsValues.description) {
    errors.description = "You must enter a description";
    //only run if the user did not input a title
  }
  return errors;
};

//reduxForm is very similar to connect, it takes a single object, it passes a ton of props to the ScreamCreate component
//validate is a function that we define, it goes in the object and is defined just above
export default reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);
