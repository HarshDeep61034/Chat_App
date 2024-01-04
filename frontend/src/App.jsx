import { useState } from "react";
function App() {
  const [code, setCode] = useState(null);
  const handleClick = () => {
    const code = document.getElementById("code").value;
    setCode(code);
    //Some backend opeation
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="border-2 border-black w-96 h-96 rounded-xl">
          <h1 className="text-center text-3xl font-bold">CHAT APP</h1>
          <div className="w-full h-full flex justify-center items-center flex-col text-2xl">
            <input
              type="text"
              id="code"
              name="code"
              className="bg-slate-300 p-2 rounded-xl"
            />
            <button className="px-2 py-1 bg-black text-white rounded-lg my-4 cursor-pointer">
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
