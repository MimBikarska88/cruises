import styles from "./SimpleTable.module.css";
const SimpleTable = (props) => {
  const { headers, data = [] } = props;

  return (
    <>
      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            {headers.map((col) => (
              <th>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {row.map((cell) => {
                <td>{cell}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default SimpleTable;
