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
        setGuests={setGuests}
      />
      <NavBar showSetModal={showSetModal} setShowSetModal={setShowSetModal} />
      <DashBoard
        eventName={eventName}
        attendance={attendance}
        setAttendance={setAttendance}
      />
      <div className="h-6 bg-lorge"></div>
      <div className="flex flex-col lg:flex-row bg-dark p-5 gap-5 h-3/6">
        <GuestTable guests={guests} setGuests={setGuests} />
        <GuestForm guests={guests} setGuests={setGuests} />
      </div>
    </div>
  );
}

export default App;
