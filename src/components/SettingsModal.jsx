function SettingsModal() {
  {
    // if (!modal) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col w-4/6 h-2/5 bg-lime-200 rounded-sm">
          <div className="flex justify-between bg-lime-400 p-3 items-center">
            <h2 className="text-center text-2xl ">Order Details</h2>
            <button
              className="text-2xl"
              // onClick={() => {
              //   setModal(false);
              // }}
            >
              x
            </button>
          </div>
          <form className="flex flex-col justify-evenly h-full ">
            <div className="flex flex-col justify-evenly h-full p-3">
              <p>Variety: Variety A</p>
              <p>Price: ₱55/kilo</p>
              <div className="flex gap-2">
                <label htmlFor="">Quantity:</label>
                <input
                  type="number"
                  step="any"
                  className="rounded-sm shadow-lg"
                />
              </div>
            </div>
            <button className="bg-emerald-300 transition-all hover:bg-emerald-400 p-3 text-lg">
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SettingsModal;
