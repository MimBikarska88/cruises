import axios from "axios";

const StaticDataService = () => {
  const path = "http://localhost:8000/api";

  const getSeaScapeParameters = () => axios.get(`${path}/sea-scape-parameters`);

  const getInstruments = () => axios.get(`${path}/instruments`);

  return {
    loadAllSeaScapeParameters: getSeaScapeParameters,
    loadAllInstruments: getInstruments,
  };
};
export default StaticDataService;
