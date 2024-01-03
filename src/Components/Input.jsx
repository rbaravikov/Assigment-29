const Input = ({inputValue, handleValueChange}) => {
    return (
      <input id="input" name="inputField" type="text" value={inputValue} placeholder="Write something here..." onChange={handleValueChange} />
    )
  }
  
  export default Input