import { useState } from "react";
import names from "../GeneralInformation.constants";
import OrganizationCenters from "../OrganizationCenter/OrganizationCenters";

const CollateCenter = () => {
  const [collateCenters, setCollateCenters] = useState([]);
  return (
    <>
      <OrganizationCenters
        organizations={collateCenters}
        setOrganizations={setCollateCenters}
        availableOrganizations={names}
      />
    </>
  );
};
export default CollateCenter;
