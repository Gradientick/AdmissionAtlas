function GuestTable({ guests, setGuests }) {
  const handleDelete = (pos) => {
    console.log("delete button has been clicked");
    let filterAndDeleteGuest = guests.filter(function (_, index) {
      return index !== pos;
    });
    setGuests(filterAndDeleteGuest);
    console.log(guests);
  };
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="bg-lorge h-8 rounded-md flex justify-around gap-7 items-center">
        <h1 className="font-semibold">Guest Table</h1>
        <p onClick={() => console.log(guests)}>
          E.G. Name, Age, Sex, Address, time of entry
        </p>
      </div>
      <div className="flex flex-col gap-1 overflow-y-scroll w-full">
        {guests.map((guest, index) => (
          <div
            key={index}
            className="bg-light h-8 rounded-md flex justify-around gap-7 items-center"
          >
            <p>{guest.name}</p>
            <p>{guest.age}</p>
            <p>{guest.sex}</p>
            <p>{guest.address}</p>
            <p>{guest.toe}</p>
            <div
              className="bg-orge p-1 rounded-md text-light cursor-pointer"
              onClick={() => handleDelete(index)}
            >
              delete
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestTable;
