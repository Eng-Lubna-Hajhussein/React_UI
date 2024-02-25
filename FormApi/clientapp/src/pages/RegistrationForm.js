import { useState } from "react";
import FormControl from "../components/FormControl";
import useForm from "../hooks/useForm";

const RegistrationForm = () => {
  const [formStates, setFormStates] = useState({
    fields: {
      fullName: "",
      dob: "",
      address: "",
      email: "",
      password: "",
    },
  });
  const {
    getCurrentFormValues,
    eventInputValue,
    eventDateValue,
    eventResetForm,
  } = useForm(formStates, setFormStates);

  return (
    <div className="center">
      <button onClick={eventResetForm}>clear form</button>
      <br />
      <br />
      <FormControl
        control="text"
        stateName="fullName"
        label="Full Name"
        formStates={formStates}
        onChangeHandler={eventInputValue}
      />
      <br />
      <br />
      <FormControl
        control="date"
        stateName="dob"
        label="Date Of Birth"
        formStates={formStates}
        onChangeHandler={eventDateValue}
      />
      <br />
      <br />
      <FormControl
        control="textarea"
        stateName="address"
        label="Address"
        formStates={formStates}
        onChangeHandler={eventInputValue}
      />
      <br />
      <br />
      <FormControl
        control="text"
        stateName="email"
        label="Email"
        formStates={formStates}
        onChangeHandler={eventInputValue}
      />
      <br />
      <br />
      <FormControl
        control="password"
        stateName="password"
        label="Password"
        formStates={formStates}
        onChangeHandler={eventInputValue}
      />
      <br />
      <br />
      <button onClick={getCurrentFormValues}>Submit Form</button>
    </div>
  );
};

export default RegistrationForm;
