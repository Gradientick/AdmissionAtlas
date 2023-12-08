function GuestForm() {
  return (
    <div className="w-1/3 h-2/3 bg-lorge rounded-md">
      <form className="flex flex-col justify-evenly">
        <h1 className="text-xl font-semibold flex justify-center p-1">
          New Guest Form
        </h1>
        <div className="flex-col">
          <div className="flex">
            <div className="flex flex-col w-1/2 p-3">
              <label>Name</label>
              <input type="text" className="rounded-md bg-light" />
            </div>
            <div className="flex flex-col w-1/2 p-3">
              <label>Address</label>
              <input type="text" className="rounded-md bg-light" />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/2 p-3 ">
              <label className="w-full ">Sex</label>
              <div className="flex w-full gap-8">
                <div className="rounded-md bg-light w-1/3 flex justify-center cursor-pointer transition-all hover:bg-orge">
                  <p>Male</p>
                </div>
                <div className="rounded-md bg-light w-1/3 flex justify-center cursor-pointer transition-all hover:bg-orge">
                  <p>Female</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 p-3 ">
              <label>Age</label>
              <input type="number" className="rounded-md bg-light w-1/2" />
            </div>
          </div>
          <div className="flex  text-light h-10 gap-3 p-1">
            <button className="w-1/2 bg-orge rounded-md">Save</button>
            <button className="w-1/2 bg-orge rounded-md">Clear Fields</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GuestForm;
