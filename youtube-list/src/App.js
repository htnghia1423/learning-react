import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";

// Parent component
function App() {
  // const numbers = [1, 2, 3, 4, 5];
  // const double = numbers.map((numbers) => numbers * 2);
  // console.log(double);

  // console.log(YoutubeData);

  const name = "Thunder";

  return (
    <div>
      <YoutubeList>
        {/* children: html, components, text, variable */}
      </YoutubeList>
    </div>
  );
}

// Props --> Properties

//Rendering list

export default App;
