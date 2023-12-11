import { useState } from "react";
import getCurrentTime from "../features/getTime";
function GuestForm({ guests, setGuests }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("Choose Sex");
  const [age, setAge] = useState("");
  let toe = getCurrentTime();

  function NewGuest(name, age, sex, address, toe) {
    this.name = name;
    this.address = address;
    this.sex = sex;
    this.age = age;
    this.toe = toe;
  }

  const addGuest = () => {
    let guestToAdd = new NewGuest(name, address, sex, age, toe);
    setGuests(guests.concat(guestToAdd));
    console.log(guests);
    setName("");
    setAddress("");
    setSex("Choose Sex");
    setAge("");
  };

  return (
    <div className="w-full lg:w-1/4 h-2/3 bg-lorge rounded-md">
      <div className="flex flex-col justify-evenly">
        <h1 className="text-xl font-semibold flex justify-center p-1">
          New Guest Form
        </h1>
        <div className="flex-col">
          <div className="flex">
            <div className="flex flex-col w-1/2 p-3">
              <label>Name</label>
              <input
                type="text"
                className="rounded-md bg-light"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2 p-3">
              <label>Address</label>
              <input
                type="text"
                value={address}
                className="rounded-md bg-light"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2 p-3 ">
              <label className="w-full ">Sex: {sex}</label>
              <div className="flex w-full gap-8">
                <div
                  className="rounded-md bg-light w-1/3 flex justify-center cursor-pointer transition-all hover:bg-orge"
                  onClick={() => setSex("male")}
                >
                  <p>Male</p>
                </div>
                <div
                  className="rounded-md bg-light w-1/3 flex justify-center cursor-pointer transition-all hover:bg-orge"
                  onClick={() => setSex("female")}
                >
                  <p>Female</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 p-3 ">
              <label>Age</label>
              <input
                type="number"
                value={age}
                className="rounded-md bg-light w-1/2"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="flex  text-light h-10 gap-3 p-1">
            <button
              className="w-1/2 bg-orge rounded-md"
              onClick={() => addGuest()}
            >
              Save
            </button>
            <button
              className="w-1/2 bg-orge rounded-md"
              onClick={() => {
                setName("");
                setAddress("");
                setSex("Choose Sex");
                setAge("");
              }}
            >
              Clear Fields
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestForm;
