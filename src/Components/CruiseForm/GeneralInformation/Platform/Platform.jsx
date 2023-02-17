import Select from "react-select";
import TextInput from "../../../BaseComponents/TextInput/TextInput";
import TextArea from "../../../BaseComponents/TextArea/TextArea";
import styles from "../../../CruiseForm/CruiseForm.module.css";
import { useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Spinner from "../../../BaseComponents/Spinner/Spinner";
import StaticDataService from "../../../../api/StaticDataService";
const Platform = () => {
  const service = StaticDataService();
  const [platformCategories, setPlatformCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
  const { ...form } = useFormContext();

  const updatePlatformCategory = (category) => {
    console.log(category);
    setSelectedCategory(category);
    form.setValue("general.platform.category", category.value);
  };
  useEffect(() => {
    service
      .loadAllPlatformCategories()
      .then((res) => {
        const categories = Object.values(res.data)[0].map((category) => {
          if (!category.label) return;
          return {
            value: category,
            label: category.label,
          };
        });
        setPlatformCategories(categories);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {!isLoaded ? (
        <Spinner />
      ) : (
        <div className={`container ${styles["cruise-info"]}`}>
          <div className="row mb-5">
            <div className="col mt-1">
              <label className="pt-4">Platform Name*</label>
              <Select
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#007bffed",
                    primary: "black",
                  },
                })}
              />
            </div>
            <div className="col pt-3">
              <div className="d-flex">
                <div className="w-25 d-inline-block mr-3">
                  <TextInput label="Code" name="platformCode" />
                </div>
                <div className="w-75 d-inline-block">
                  <TextInput label="Name" name="platformName" />
                </div>
              </div>
            </div>
          </div>
          <div className="row-mb-7">
            <div className="col pl-0 mt-1">
              <label className="pt-4">Platform Category</label>
              <Select
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#007bffed",
                    primary: "black",
                  },
                })}
                options={platformCategories}
                onChange={updatePlatformCategory}
              />
            </div>
          </div>
          <div className="row mb-7">
            <div className="col-sm-6">
              <div className="pt-3">
                <Controller
                  control={form.control}
                  name="general.platform.category.code"
                  render={({ field }) => (
                    <TextInput
                      name="platformCategoryCode"
                      label="Code"
                      disabled={true}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="pt-3">
                <Controller
                  control={form.control}
                  name="general.platform.category.label"
                  render={({ field }) => (
                    <TextInput
                      name="platformCategoryName"
                      label="Name"
                      disabled={true}
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="row-mb-7">
            <div className="pt-3">
              <Controller
                control={form.control}
                name="general.platform.category.definition"
                render={({ field }) => (
                  <TextArea
                    name="platformCategoryDefinition"
                    label="Definition"
                    disabled={true}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Platform;
