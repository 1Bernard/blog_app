import React from "react";
import { IKImage } from "imagekitio-react";

const Image = (src, className) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src="https://ik.imagekit.io/c5fdbg4zy/logo.png"
      className="w-8 h-8"
      alt="Logo"
    />
  );
};

export default Image;
