
import Input from "../../components/Input";

const Colors = ({ handleRadio }) => {
  return (
    <>
      <div className="flex flex-col p-2">
        <h2 className="sidebar-title color-title">Colors</h2>
        <div className="space-y-1 m-2">
        <label className="sidebar-label-container">
          <input onChange={handleRadio} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleRadio={handleRadio}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleRadio={handleRadio}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleRadio={handleRadio}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleRadio={handleRadio}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

       
        </div>
      </div>
    </>
  );
};

export default Colors;
