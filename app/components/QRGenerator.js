// components/QRGenerator.js
"use client"
import QRCode from 'qrcode';
import { useState } from 'react';

function QRGenerator() {
  const [url, setUrl] = useState('');
  const [qrCodeURL, setQrCodeURL] = useState(null);

  const generateQR = async () => {
    try {
      const generatedQR = await QRCode.toDataURL(url);
      setQrCodeURL(generatedQR);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className='btn btn-primary' onClick={generateQR}>Generate QR</button>
      <div>
        {qrCodeURL && <img src={qrCodeURL} alt="Generated QR" />}
      </div>
    </div>
  );
}

export default QRGenerator;
