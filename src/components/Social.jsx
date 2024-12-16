import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Social = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-2 text-3xl font-bold">Pranjal Kabra</p> {/* Adjusted margin */}
        <p className="text-sm text-gray-500">pranjalkabra07@gmail.com</p> {/* Added email */}
      </div>
      <div className="flex items-center justify-center gap-8 mt-4">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserved.
      </p>
    </div>
  );
};

export default Social;
