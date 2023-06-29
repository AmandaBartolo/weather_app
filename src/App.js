import { WeatherStorage } from "./contexts/WeatherContext";
import "./index.css";
import WeatherPage from "./pages/WeatherPage";

function App() {
  return (
    <>
      <WeatherStorage>
        <WeatherPage />
      </WeatherStorage>
    </>
  );
}

export default App;
