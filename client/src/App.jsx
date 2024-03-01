import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <Sidebar/>
      <AllRoutes />
      </div>
    </div>
  );
}

export default App;
