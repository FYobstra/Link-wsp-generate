import React, { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { saveAs } from "file-saver";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";
import "react-toastify/dist/ReactToastify.css";

export default function ModalLink({ isOpen, url, setIsOpen }) {
  const notify = () => toast.success("Link copiado a portapapeles");
  const [qrLoaded, setQrLoaded] = useState(false);
  const [qrLoading, setQrLoading] = useState(true);

  const handleQrLoaded = () => {
    setQrLoaded(true);
  };

  useEffect(() => {
    setQrLoading(true);
    setQrLoaded(false);
  }, [url]);

  useEffect(() => {
    if (qrLoaded) {
      setQrLoading(false);
    }
  }, [qrLoaded]);

  return (
    <>
      <ToastContainer />
      {isOpen && (
        <div className="w-full h-[100vh] flex justify-center items-center backdrop-blur-sm bg-[#0000005c] fixed top-0 left-0 right-0 bottom-0 z-40">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
          />
          <div className="w-[90%] md:w-[35%] bg-white p-10 flex flex-col gap-5 justify-between items-start rounded-xl">
            <div className="w-full flex justify-end">
              <RxCross2
                className="text-lg cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  document.body.classList.remove("modal-open");
                }}
              />
            </div>
            <h1 className="font-bold text-xl md:text-2xl lg:text-xl">
              Tu link de WhatsApp está listo!
            </h1>
            <div>
              <p>
                Copia y compártelo en tus redes sociales, sitio web, correos y
                donde quieras que los usuarios te contacten fácilmente:
              </p>
            </div>
            <div className="w-full bg-gray-200 py-2 px-4 rounded-lg flex items-center justify-between">
              <input
                type="text"
                disabled
                value={url}
                className="w-[90%] bg-transparent py-1 outline-none"
              />
              <FaCopy
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  notify();
                }}
                className="text-xl cursor-pointer"
              />
            </div>
            <p>
              Además, tienes tu propio código QR para pegarlo donde prefieras!
            </p>
            <div className="relative w-full h-[150px]">
              {qrLoading && (
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-8 h-8 border-4 border-gray-300 rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`}
                alt=""
                className={`${qrLoading ? "hidden" : "block"} mx-auto`}
                onLoad={handleQrLoaded}
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                onClick={() =>
                  saveAs(
                    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}",
                    "image.jpg"
                  )
                }
                className="text-primary-text-dark text-sm font-semibold py-2 px-4 rounded-3xl bg-[#00b66c]"
              >
                Descargar QR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
