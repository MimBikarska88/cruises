import styles from "../../CruiseForm/CruiseForm.module.css";
const Select = ({ title, data = [], className, onChange, name }) => {
  return (
    <>
      <div className="pt-3">
        <h4 className="mt-3 mb-1 text-left">{title}</h4>
        <select
          onChange={onChange}
          name={name}
          className={`btn-outline-dark rounded-0 custom-select single-input ${styles["single-input"]} ${styles["select"]} ${className}`}
        >
          {data.map((o, index) => (
            <option value={index} className={`${styles["option"]}`}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default Select;
