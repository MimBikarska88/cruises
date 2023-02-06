/**
 * External Dependencies.
 */
import { forwardRef } from "react";

/**
 * Internal Dependencies.
 */
import styles from "../../CruiseForm/CruiseForm.module.css";

const TextArea = forwardRef((props, ref) => {
  const {
    label,
    className = "",
    name,
    ...rest
  } = props;

  return (
    <div className="mt-10">
      <label className={`d-inline-block ${styles.label}`} htmlFor={name}>
        {label}
      </label>

      <textarea
        ref={ref}
        className={`single-textarea btn-outline-dark ${styles["single-input"]} ${className}`}
        name={name}
        {...rest}
      />
    </div>
  );
});

export default TextArea;
