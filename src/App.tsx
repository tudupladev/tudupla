import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./muiTheme";
import { ResolutionProvider } from "./features/common/hooks/useResolution";
import MainRouter from "./features/common/components/MainRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResolutionProvider>
          <MainRouter />
        </ResolutionProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
