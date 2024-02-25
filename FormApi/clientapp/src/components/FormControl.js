const FormControl = (
  {control,
  stateName,
  label,
  formStates,
  onChangeHandler}
) => {

  return (
    <div>
      <label style={{display:"block"}} htmlFor={stateName}>{label}:</label>
      {control === "textarea" ? (
        <textarea
          name={stateName}
          value={formStates.fields[stateName]}
          onChange={(e)=>onChangeHandler(stateName,e.target.value)}
        />
      ) : (
        <input
          type={control}
          name={stateName}
          value={formStates.fields[stateName]}
          onChange={(e)=>onChangeHandler(stateName,e.target.value)}
        />
      )}
    </div>
  );
};

export default FormControl;
