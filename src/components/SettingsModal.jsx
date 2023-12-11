import { useState } from "react";

function SettingsModal({
  showSetModal,
  setShowSetModal,
  setEventName,
  setGuests,
}) {
  const [nameValue, setNameValue] = useState("");
  {
    if (!showSetModal) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col w-2/6 h-2/5 bg-lorge rounded-lg">
          <div className="flex justify-between p-3 items-center">
            <h2 className="text-center text-2xl ">Settings</h2>
            <button
              className="text-2xl"
              onClick={() => {
                setShowSetModal(false);
              }}
            >
              x
            </button>
          </div>
          <div className="flex flex-col justify-evenly h-full ">
            <div className="flex flex-col gap-4 items-center">
              <label className="font-semibold">Change Event Name</label>
              <input
                type="text"
                className="w-1/2 rounded-md bg-light"
                onChange={(e) => {
                  setNameValue(e.target.value);
                  console.log(nameValue);
                }}
              />
              <button
                className="bg-orge w-1/2 transition-all hover:text-light"
                onClick={() => {
                  setEventName(nameValue);
                  setNameValue("");
                  setShowSetModal(false);
                }}
              >
                Save Changes
              </button>
              <button
                className="transition-all hover:text-light"
                onClick={() => {
                  setGuests([]);
                  setEventName("My Event");
                  setShowSetModal(false);
                }}
              >
                Reset Application
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsModal;
