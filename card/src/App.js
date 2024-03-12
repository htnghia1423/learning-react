import "./App.scss";
import Card from "./components/Card";
import CardList from "./components/CardList";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    blue: "#2979ff",
    orange: "#ffa400",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardList>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList>
    </ThemeProvider>
  );
}

export default App;
