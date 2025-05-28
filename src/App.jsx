import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./styles/app.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-area">
        <Header />
        <DashboardMainContent />
        
      </div>
    </div>
  );
}

export default App;
