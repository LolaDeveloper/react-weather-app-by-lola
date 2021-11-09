import Search from "./Search";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App ">
      <div className="Weather container">
        <h1>Weather App</h1>
        <h2>
          {" "}
          <Search />{" "}
        </h2>
      </div>
      <Footer />
    </div>
  );
}
