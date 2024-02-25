const useForm = (formStates, setFormStates) => {

  const getCurrentFormValues = () => {
    alert(JSON.stringify(formStates.fields))
  };

  const eventInputValue = (stateName,value) => {
     setFormStates({...formStates,fields:{...formStates.fields,[stateName]:value}})
  };

  const eventDateValue = (stateName,value) => {
    setFormStates({...formStates,fields:{...formStates.fields,[stateName]:value}})
  }

  const eventResetForm = () => {
    setFormStates({...formStates,fields:{
        fullName: "",
        dob: "",
        address: "",
        email: "",
        password: "",
      }})
  }

  return {getCurrentFormValues,eventInputValue,eventDateValue,eventResetForm};
};

export default useForm;
