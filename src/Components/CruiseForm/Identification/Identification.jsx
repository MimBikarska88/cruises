/**
 * External Dependencies.
 */
import { Controller, useFormContext } from "react-hook-form";

/**
 * Internal Dependencies.
 */
import TextInput from "../../BaseComponents/TextInput/TextInput";

const Identification = () => {
  const form = useFormContext()

  return (
    <>
      <Controller
        control={form.control}
        name="identification.cruiseId"
        render={({ field }) => (
          <TextInput
            label="Cruise Id"
            {...field}
          />
        )}
      />

      <Controller
        control={form.control}
        name="identification.cruiseName"
        render={({ field }) => (
          <TextInput
            label="Cruise Name"
            {...field}
          />
        )}
      />

      <Controller
        control={form.control}
        name="identification.creationDate"
        render={({ field }) => (
          <TextInput
            label="Creation Date"
            {...field}
          />
        )}
      />

      <Controller
        control={form.control}
        name="identification.revisionDate"
        render={({ field }) => (
          <TextInput
            label="Revision Date"
            disabled
            {...field}
          />
        )}
      />

      <Controller
        control={form.control}
        name="identification.author"
        render={({ field }) => (
          <TextInput
            label="Author"
            disabled
            {...field}
          />
        )}
      />
    </>
  );
};

export default Identification;
