import styles from "./Center.module.css";
import Button from "../../../BaseComponents/Button/Button";
const Centers = (props) => {
  const { organizations, removeOrganization, title, openOrganizationsList } =
    props;
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h3 className="mb-30 ">{title}</h3>
            <div className={`${styles.organizationsFrame} d-block`}>
              {organizations.length === 0 ? (
                <h4 className="text-center m-2">No organizations selected</h4>
              ) : (
                <>
                  <ul className="list-group d-block list-group-flush">
                    {organizations.map((o) => (
                      <li className="list-group-item">
                        <i
                          className={`fa fa-trash mr-2 ${styles.trash}`}
                          onClick={() => removeOrganization(o)}
                        ></i>
                        {o.name}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="col">
            <Button value={"Add"} onClick={openOrganizationsList} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Centers;
