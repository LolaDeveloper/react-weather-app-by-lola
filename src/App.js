import Search from "./Search";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Weather">
        <h1>Weather App</h1>
        <h2>
          {" "}
          <Search />{" "}
        </h2>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
