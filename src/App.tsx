import { ThemeProvider } from "@mui/material";
import theme from "./muiTheme";
import { ResolutionProvider } from "./features/common/hooks/useResolution";
import MainRouter from "./features/common/components/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/tudupla">
        <ResolutionProvider>
          <MainRouter />
        </ResolutionProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
