import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQRCode] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.trim() === "") {
      setQRCode("");
    }
  };

  const handleGenerate = () => {
    setQRCode(input.trim());
  };

  return (
    <div className="container-qr">
      <h1>QR Code Generator</h1>

      <div className="inp">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />

        <button onClick={handleGenerate} disabled={!input.trim()}>
          Generate
        </button>
      </div>

      {qrCode && <QRCode value={qrCode} size={350} />}
    </div>
  );
};

export default QRCodeGenerator;
