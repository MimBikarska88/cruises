/**
 * External Dependencies.
 */
import { Controller, useFormContext } from "react-hook-form";

/**
 * Internal Dependencies.
 */
import styles from "../CruiseForm.module.css";
import TextInput from "../../BaseComponents/TextInput/TextInput";
import Select from "../../BaseComponents/Select/Select";
import TextArea from "../../BaseComponents/TextArea/TextArea";

const Cruise = () => {
  const form = useFormContext();

  return (
    <>
      <div className={`container ${styles["cruise-info"]}`}>
        <div className="row mb-5">
          <h4 className="mt-3 mb-1 text-left">Period</h4>

          <div className="col">
            <Controller
              control={form.control}
              name="general.cruise.startDate"
              render={({field}) => (
                <TextInput
                  type="datetime-local"
                  label="Start Date"
                  {...field}
                />
              )}
            />
          </div>

          <div className="col">
            <Controller
              control={form.control}
              name="general.cruise.endDate"
              render={({field}) => (
                <TextInput
                  type="datetime-local"
                  label="End Date"
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <Select name="countries" title="Country of Departure"/>

            <div className="d-flex pt-1">
              <div className="mr-2">
                <Controller
                  control={form.control}
                  name="general.cruise.countryName"
                  render={({field}) => (
                    <TextInput
                      label="Country"
                      {...field}
                    />
                  )}
                />
              </div>

              <div className="mr-2">
                <Controller
                  control={form.control}
                  name="general.cruise.countryCode"
                  render={({field}) => (
                    <TextInput
                      label="Code"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <Select name="countries" title="Port of Departure"/>

            <div className="d-flex pt-1">
              <div className="mr-2">
                <Controller
                  control={form.control}
                  name="general.cruise.portName"
                  render={({field}) => (
                    <TextInput
                      label="Port"
                      {...field}
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  control={form.control}
                  name="general.cruise.portCode"
                  render={({field}) => (
                    <TextInput
                      label="Code"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <Select name="countries" title="Country of Return"/>

            <div className="d-flex pt-1">
              <div className="mr-2">
                <Controller
                  control={form.control}
                  name="general.cruise.returnCountryName"
                  render={({field}) => (
                    <TextInput
                      label="Country"
                      {...field}
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  control={form.control}
                  name="general.cruise.returnCountryCode"
                  render={({field}) => (
                    <TextInput
                      label="Code"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="col">
            <Select name="ports" title="Port of Return"/>

            <div className="d-flex pt-1">
              <div className="mr-2">
                <Controller
                  control={form.control}
                  name="general.cruise.returnPortName"
                  render={({field}) => (
                    <TextInput
                      label="Port"
                      {...field}
                    />
                  )}
                />
              </div>

              <div>
                <Controller
                  control={form.control}
                  name="general.cruise.returnPortCode"
                  render={({field}) => (
                    <TextInput
                      label="Code"
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col">
            <Select name="countries" title="Data Access Restriction *"/>
          </div>

          <div className="col">
            <div className="mt-10 pt-2">
              <Controller
                control={form.control}
                name="general.cruise.dataAccessRestrictionCode"
                render={({field}) => (
                  <TextInput
                    label="Code"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="mt-10">
              <Controller
                control={form.control}
                name="general.cruise.dataAccessRestrictionName"
                render={({field}) => (
                  <TextInput
                    label="Name"
                    {...field}
                  />
                )}
              />
            </div>

            <Controller
              control={form.control}
              name="general.cruise.dataAccessRestrictionDefinition"
              render={({field}) => (
                <TextArea
                  label="Definition"
                  {...field}
                />
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cruise;
