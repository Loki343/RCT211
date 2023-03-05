import { useState } from "react";
import "./App.css";
import PinTab from "./components/PinTab";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <PinTab length={4} maxChar={2} setOtp={setOtp}/>
      OTP is {otp}
    </div>
  );
}

export default App;
