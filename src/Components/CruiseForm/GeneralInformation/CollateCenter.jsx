import styles from "../CruiseForm.module.css";
import { useState } from "react";
import names from "./GeneralInformation.constants";
import OrganizationList from "./OrganizationList";
const CollateCenter = () => {
  const [visibleTable, setVisibleTable] = useState(true);
  const [visibleOrganizations, setVisibleOrganizations] = useState(false);
  console.log(names);
  const [currentOrganization, setCurrentOrganization] = useState({
    code: "",
    currentIndex: 0,
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
  const addOrganizationToTable = () => {
    setVisibleTable(false);
    setVisibleOrganizations(true);
  };

  const closeOrganizationListWithoutSaving = () => {
    setVisibleTable(true);
    setVisibleOrganizations(false);
  };
  return (
    <>
      {visibleOrganizations && (
        <OrganizationList
          closeList={closeOrganizationListWithoutSaving}
          currentOrganization={currentOrganization}
          setCurrentOrganization={setCurrentOrganization}
          Organizations={names}
        ></OrganizationList>
      )}
      {visibleTable && (
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h3 className="mb-30 ">Collate Centers *</h3>
              <div
                className={`progress-table scrollbar scrollbar-near-moon ${styles["organizations"]} ${styles["organizations-info"]}`}
              >
                <div className="table-head">
                  <div className="serial p-2">#</div>
                  <div className="country">Organization Name</div>
                </div>
              </div>
            </div>
            <div className="col-sm-1">
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
            <div className="col-sm-1">
              <button
                onClick={() => console.log("clicked")}
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
      )}
    </>
  );
};
export default CollateCenter;
