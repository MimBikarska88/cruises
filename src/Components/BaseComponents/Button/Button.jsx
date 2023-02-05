const Button = ({ className, onClick, value }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-outline-dark rounded-0 ${className}`}
      type="button"
      aria-selected="true"
    >
      {value}
    </button>
  );
};
export default Button;
