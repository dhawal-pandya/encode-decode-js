import { useState } from "react";

function App() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  const encodeText = () => {
    setTextB(btoa(textA));
  };

  const decodeText = () => {
    try {
      setTextA(atob(textB));
    } catch (e) {
      alert("Invalid Base64 string");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl mb-6">Simple Base64 Encoder & Decoder</h1>

      <div className="w-full max-w-10xl flex flex-col lg:flex-row items-center gap-6">
        {/* Input Box A */}
        <textarea
          className="w-full lg:w-1/2 h-80 p-4 border rounded-lg bg-gray-800 text-white resize-none outline-none"
          placeholder="Simple text"
          value={textA}
          onChange={(e) => setTextA(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition"
            onClick={encodeText}
          >
            Encode →
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg transition"
            onClick={decodeText}
          >
            ← Decode
          </button>
        </div>

        {/* Output Box B */}
        <textarea
          className="w-full lg:w-1/2 h-80 p-4 border rounded-lg bg-gray-800 text-white resize-none outline-none"
          placeholder="Base64 string"
          value={textB}
          onChange={(e) => setTextB(e.target.value)}
        />
      </div>
      <div className="mt-10 text-center text-gray-400 text-sm">
        Made with <span className="text-red-500">♥</span> by{" "}
        <a
          href="https://dhawal-pandya.github.io/" // <-- your GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Dhawal Pandya
        </a>
      </div>
    </div>
  );
}

export default App;
