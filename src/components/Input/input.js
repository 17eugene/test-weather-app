function Input({ value, placeholder, inputChange, className }) {
  return (
    <input
      className={className}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={inputChange}
    />
  );
}

export default Input;
