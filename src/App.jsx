import "./App.css";
import DashBoard from "./components/DashBoard";
import GuestForm from "./components/GuestForm";
import GuestTable from "./components/GuestTable";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen bg-dark">
      <NavBar />
      <DashBoard />
      <div className="h-6 bg-lorge"></div>
      <div className="flex bg-dark p-5 gap-5 h-3/6">
        <GuestTable />
        <GuestForm />
      </div>
    </div>
  );
}

export default App;
