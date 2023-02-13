import styles from "./Table.module.css";
const TableList = (props) => {
  const { displayFields, displayRows, title, delimeter } = props;
  return (
    <>
      <div className={styles.selectedRows}>
        {displayRows.length === 0 ? (
          <>
            <div>No {title} selected</div>
          </>
        ) : (
          <ul className="list-group d-block list-group-flush">
            {displayRows
              .map((row) => row.values)
              .map((value) => (
                <li className="list-group-item">
                  {displayFields
                    .map((field) => value[`${field}`])
                    .join(delimeter ? delimeter : " - ")}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default TableList;
