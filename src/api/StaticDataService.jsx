import axios from "axios";

const StaticDataService = () => {
  const path = "http://localhost:8000/api";

  const getSeaScapeParameters = () => axios.get(`${path}/sea-scape-parameters`);

  const getInstruments = () => axios.get(`${path}/instruments`);

  const getPlatformCategories = () => axios.get(`${path}/platform-categories`);

  const getBioIndicators = () => axios.get(`${path}/bio-indicators`);

  const getCountries = () => axios.get(`${path}/countries`);

  return {
    loadAllSeaScapeParameters: getSeaScapeParameters,
    loadAllInstruments: getInstruments,
    loadAllPlatformCategories: getPlatformCategories,
    loadAllBioIndicators: getBioIndicators,
    loadAllCountries: getCountries,
  };
};
export default StaticDataService;
