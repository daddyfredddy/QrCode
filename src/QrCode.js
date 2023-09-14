import React from "react";
import image from "./images/image-qr-code.png";

function QrCode() {
  return (
    <div>
      <body>
        <div className="Container">
          <img src={image} className="qrImage" />
          <h2>
            Improve your front-end <br /> skills by building projects
          </h2>
          <p>
            Scan the QR code to visit Frontend <br /> Mentor and take your
            coding skills to <br /> the next level
          </p>
        </div>
      </body>
    </div>
  );
}

export default QrCode;
