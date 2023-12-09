function DashBoard({ eventName }) {
  return (
    <div className=" h-2/6 bg-light flex justify-evenly items-center text-dark">
      <h1 className=" text-5xl">{eventName}</h1>
      <div className="flex flex-col items-center text-4xl">
        <p>100</p>
        <p>Attendance</p>
      </div>
    </div>
  );
}

export default DashBoard;
