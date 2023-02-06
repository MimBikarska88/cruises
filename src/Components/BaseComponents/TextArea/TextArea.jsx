import styles from "../../CruiseForm/CruiseForm.module.css";
const TextArea = ({
  label,
  disabled = false,
  className = "",
  onChange,
  value,
  name,
}) => {
  return (
    <div className="mt-10">
      <label className={`d-inline-block ${styles.label}`} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={`single-textarea btn-outline-dark ${styles["single-input"]}  ${className}`}
        disabled={disabled}
        value={value}
        name={name}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
export default TextArea;
