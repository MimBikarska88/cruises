import axios from "axios";

const StaticDataService = () => {
  const path = "http://localhost:8000/api";

  const getSeaScapeParameters = () => axios.get(`${path}/sea-scape-parameters`);

  const getInstruments = () => axios.get(`${path}/instruments`);

  const getPlatformCategories = () => axios.get(`${path}/platform-categories`);

  const getBioIndicators = () => axios.get(`${path}/bio-indicators`);

  return {
    loadAllSeaScapeParameters: getSeaScapeParameters,
    loadAllInstruments: getInstruments,
    loadAllPlatformCategories: getPlatformCategories,
    loadAllBioIndicators: getBioIndicators,
  };
};
export default StaticDataService;
