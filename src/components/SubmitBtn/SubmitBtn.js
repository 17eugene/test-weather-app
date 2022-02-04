function SubmitBtn({ type, children, className, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={className} type={type}>
        {children}
      </button>
    </div>
  );
}

export default SubmitBtn;
