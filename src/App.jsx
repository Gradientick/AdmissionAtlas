import "./App.css";
import DashBoard from "./components/DashBoard";
import GuestForm from "./components/GuestForm";
import GuestTable from "./components/GuestTable";
import NavBar from "./components/NavBar";
import SettingsModal from "./components/SettingsModal";
import { useState, useEffect } from "react";
function App() {
  const [eventName, setEventName] = useState("Event Name");
  const [showSetModal, setShowSetModal] = useState(false);
  // const [guests, setGuests] = useState([
  //   {
  //     name: "Luis",
  //     age: "19",
  //     sex: "Male",
  //     address: "Nagcarlan",
  //     toe: "13:35",
  //   },
  // ]);
  const [attendance, setAttendance] = useState(0);
  const [guests, setGuests] = useState([]);
  useEffect(() => {
    setAttendance(guests.length);
  }, [guests]);

  return (
    <div className="h-screen bg-dark">
      <SettingsModal
        showSetModal={showSetModal}
        setShowSetModal={setShowSetModal}
        setEventName={setEventName}
      />
      <NavBar showSetModal={showSetModal} setShowSetModal={setShowSetModal} />
      <DashBoard
        eventName={eventName}
        attendance={attendance}
        setAttendance={setAttendance}
      />
      <div className="h-6 bg-lorge"></div>
      <div className="flex bg-dark p-5 gap-5 h-3/6">
        <GuestTable guests={guests} setGuests={setGuests} />
        <GuestForm guests={guests} setGuests={setGuests} />
      </div>
    </div>
  );
}

export default App;
