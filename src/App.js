import { Button } from "@mui/material";
import { styled } from "@mui/system";
import SettingsIcon from '@mui/icons-material/Settings';

const BlueButton = styled(Button)({
  backgroundColor: "skyblue",
  color: "#888",
  margin: "5px",
  "&:hover": {
    backgroundColor: "lightblue"
  }
});

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon />} variant="contained">Contained</Button>
      <BlueButton variant="contained">My unique button</BlueButton>
    </div>
  );
}

export default App;
