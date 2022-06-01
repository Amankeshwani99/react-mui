import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextFiled from "./components/MuiTextFiled";
import MuiTypography from "./components/MuiTypography";

function App() {
  return <div className="App">
  {/* <MuiTypography /> */}
  {/* <MuiButton /> */}
  {/* <MuiTextFiled /> */}
  {/* <MuiSelect /> */}
  <MuiRadioButton />
  <MuiCheckBox />
  <MuiSwitch />
  </div>;
}

export default App;
