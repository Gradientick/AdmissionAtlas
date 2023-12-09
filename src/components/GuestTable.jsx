const arrayOfGuests = [
  {
    name: "Luis",
    age: "19",
    sex: "Male",
    address: "Nagcarlan",
    toe: "13:35",
  },
  {
    name: "Luis",
    age: "19",
    sex: "Male",
    address: "Nagcarlan",
    toe: "13:35",
  },
  {
    name: "Luis",
    age: "19",
    sex: "Male",
    address: "Nagcarlan",
    toe: "13:35",
  },
  {
    name: "Luis",
    age: "19",
    sex: "Male",
    address: "Nagcarlan",
    toe: "13:35",
  },
  {
    name: "Luis",
    age: "19",
    sex: "Male",
    address: "Nagcarlan",
    toe: "13:35",
  },
  {
    name: "Luis",
    age: "19",
    sex: "Male",
    address: "Nagcarlan",
    toe: "13:35",
  },
  {
    name: "Luis",
    age: "19",
    sex: "Male",
    address: "Nagcarlan",
    toe: "13:35",
  },
  {
    name: "Luis",
    age: "19",
    sex: "Male",
    address: "Nagcarlan",
    toe: "13:35",
  },
];

function GuestTable() {
  return (
    <div className="w-2/3 flex flex-col gap-1">
      <div className="bg-lorge h-8 rounded-md flex justify-around gap-7 items-center">
        <h1 className="font-semibold">Guest Table</h1>
        <p>E.G. Name, Age, Sex, Address, time of entry</p>
      </div>
      <div className="flex flex-col gap-1 overflow-y-scroll w-full">
        {arrayOfGuests.map((guest, index) => (
          <div
            key={index}
            className="bg-light h-8 rounded-md flex justify-around gap-7 items-center"
          >
            <p>{guest.name}</p>
            <p>{guest.age}</p>
            <p>{guest.sex}</p>
            <p>{guest.address}</p>
            <p>{guest.toe}</p>
            <div className="bg-orge p-1 rounded-md text-light cursor-pointer">
              delete
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestTable;
