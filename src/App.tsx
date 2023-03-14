import Sensors from "./pages/Sensors";
import SensorsProvider from "./context/SensorsContext";

function App() {
  return (
    <SensorsProvider>
      <Sensors />
    </SensorsProvider>
  );
}

export default App;
