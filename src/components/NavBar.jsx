function NavBar({ setShowSetModal, showSetModal }) {
  return (
    <div className="flex bg-lorge h-20 justify-between items-center p-8">
      <h1 className=" text-2xl sm:text-xl font-semibold">Admission Atlas</h1>
      <p
        className="cursor-pointer text-base"
        onClick={() => {
          console.log("clicked");
          setShowSetModal(true);
        }}
      >
        Settings
      </p>
    </div>
  );
}

export default NavBar;
