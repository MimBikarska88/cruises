import styles from "../../CruiseForm/CruiseForm.module.css";
const TextInput = ({
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
      <input
        type="text"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]} ${className}`}
      />
    </div>
  );
};
export default TextInput;
