function DashBoard({ eventName, attendance, setAttendance }) {
  return (
    <div className=" h-2/6 bg-light flex justify-evenly items-center text-dark">
      <h1 className=" text-5xl">{eventName}</h1>
      <div className="flex flex-col items-center text-4xl">
        <p>{attendance}</p>
        <p>Attendance</p>
      </div>
    </div>
  );
}

export default DashBoard;
