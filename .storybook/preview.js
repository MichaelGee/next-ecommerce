import { addDecorator } from "@storybook/react";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import mainTheme from "../theme";
import { StyleReset, DefaultTheme, ThemeProvider } from "react-atomize";





const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "centers",
  padding: "2.5rem 5rem",
};


addDecorator((storyFn) => (
  <StyletronProvider value={styletron}>
    <ThemeProvider theme={mainTheme}>
      <StyleReset />
      <div style={style}>{storyFn()}</div>
    </ThemeProvider>
  </StyletronProvider>
));
