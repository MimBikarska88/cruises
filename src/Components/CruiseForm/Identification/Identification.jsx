import styles from "../CruiseForm.module.css";
import TextInput from "../../BaseComponents/TextInput/TextInput";
const Identification = ({ identification, setIdentification }) => {
  // must use state or context in next step to keep track of the input values
  // onChange for each input must be provided
  // value prop for each input must be set accordingly

  return (
    <>
      <TextInput
        disabled={true}
        label="Cruise Id"
        name={"cruiseId"}
        value={identification.cruiseId}
      />
      <TextInput
        label="Cruise Name"
        name={"cruiseName"}
        value={identification.cruiseName}
        onChange={(e) => console.log(e.target.value)}
      />
      <TextInput
        disabled={true}
        label="Creation Date"
        name={"creationDate"}
        value={identification.creationDate}
      />
      <TextInput
        disabled={true}
        label="Revision Date"
        name={"revisionDate"}
        value={identification.revisionDate}
      />
      <TextInput label="Author" name={"author"} value={identification.author} />
    </>
  );
};

export default Identification;
