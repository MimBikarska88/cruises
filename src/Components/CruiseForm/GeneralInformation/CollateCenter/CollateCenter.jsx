import styles from "../../CruiseForm.module.css";
import { useState } from "react";
import names from "../GeneralInformation.constants";
import OrganizationList from "../OrganizationList/OrganizationList";
import TableList from "../../../BaseComponents/Table/TableList";
import Button from "../../../BaseComponents/Button/Button";
const CollateCenter = () => {
  const [visibleTable, setVisibleTable] = useState(true);
  const [visibleOrganizations, setVisibleOrganizations] = useState(false);
  const [organizations, setOrganizations] = useState([]);
  const [currentOrganization, setCurrentOrganization] = useState({
    code: "",
    currentIndex: 0,
    id: 0,
    name: "",
    phone: "",
    fax: "",
    deliveryPoint: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
    website: "",
  });
  const addOrganizationToTable = (organization) => {
    setVisibleTable(false);
    setVisibleOrganizations(true);
  };

  const closeOrganizationListWithoutSaving = () => {
    setVisibleTable(true);
    setVisibleOrganizations(false);
  };

  const CollateCenters = () => {
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-5">
              <h3 className="mb-30 ">Collate Centers *</h3>
              <TableList
                title="Organizations"
                displayRows={organizations}
                displayFields={["name"]}
              />
            </div>
            <div className="col-sm-1 m-2">
              <button
                onClick={() => addOrganizationToTable()}
                className={`${styles["small"]} nav-link btn btn-outline-dark m-2`}
                type="button"
                role="tab"
                aria-selected="true"
              >
                +
              </button>
            </div>
            <div className="col-sm-1 m-2">
              <button
                onClick={() => closeOrganizationListWithoutSaving()}
                className={`${styles["small"]} nav-link btn btn-outline-dark m-2`}
                type="button"
                role="tab"
                aria-selected="true"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {visibleOrganizations && (
        <OrganizationList
          closeList={closeOrganizationListWithoutSaving}
          currentOrganization={currentOrganization}
          setCurrentOrganization={setCurrentOrganization}
          Organizations={names}
          closeListCancel={closeOrganizationListWithoutSaving}
          closeListSave={addOrganizationToTable}
        ></OrganizationList>
      )}
      {visibleTable && <CollateCenters />}
    </>
  );
};
export default CollateCenter;
