import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleRadio }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
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

        <label className="sidebar-label-container">
          <input
            handleRadio={handleRadio}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
