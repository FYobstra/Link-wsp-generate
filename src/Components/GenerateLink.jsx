import React, { useState } from "react";
import { ProfileWsp, SendWsp } from "../Images";
import PhoneInput, {
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ModalLink from "./ModalLink";

export default function GenerateLink() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function previewLink(e) {
    isValidPhoneNumber(value)
      ? (window.open(
          `https://api.whatsapp.com/send?phone=${value.replace("+", "")}${
            message !== "" ? "&text=" + encodeURI(message) : ""
          }`
        ),
        "_blank",
        setError(false))
      : setError(true);
  }

  function downloadLink(e) {
    isValidPhoneNumber(value)
      ? (setIsOpen(true),
        setError(false),
        document.body.classList.add("modal-open"))
      : setError(true);
  }

  return (
    <div className="w-full max-w-7xl mx-auto" id="generateWsp">
      <ModalLink
        url={`https://api.whatsapp.com/send?phone=${value.replace("+", "")}${
          message !== "" ? "&text=" + encodeURI(message) : ""
        }`}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl dark:text-primary-text-dark text-primary-text-light text-center pb-10">
        Crea tu link gratis aquí
      </h1>
      <div className="w-full flex flex-col gap-10 md:flex-row mx-auto justify-between items-center px-10">
        <form className="w-full min-h-[450px] bg-gray-50 dark:bg-gray-800 max-w-lg flex flex-col gap-6 p-10 rounded-2xl shadow-sm lg:shadow-lg dark:shadow-slate-700">
          <div>
            <p className="dark:text-primary-text-dark text-primary-text-light pb-2">
              Escribe tu número de WhatsApp
            </p>
            <PhoneInput
              international
              defaultCountry="AR"
              className="bg-white py-2 rounded-lg px-1"
              value={value}
              onChange={setValue}
            />
            {error ? (
              <p className="text-red-500 text-xs pt-3">Número invalido</p>
            ) : (
              <p className="dark:text-secondary-text-dark text-secondary-text-light text-xs pt-3">
                Recuerda confirmar el código de tu país
              </p>
            )}
          </div>
          <div>
            <p className="dark:text-primary-text-dark text-primary-text-light pb-2">
              Mensaje de tu usuario
            </p>
            <textarea
              className="w-full h-24 bg-white py-2 rounded-lg px-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe un mensaje para que te saluden fácilmente..."
            />
            <p className="dark:text-secondary-text-dark text-secondary-text-light text-xs pt-2">
              Por ejemplo: "Hola 'tu marca' queria mas información sobre..."
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              previewLink();
            }}
            className="text-primary-text-light bg-gray-300 font-semibold text-sm md:text-base py-3 px-2 rounded-full"
          >
            Vista previa
          </button>
          <p className="dark:text-primary-text-dark text-primary-text-light text-center">
            - o -
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              downloadLink();
            }}
            className="text-primary-text-dark bg-[#00b66c] font-semibold text-sm md:text-base py-3 px-2 rounded-full"
          >
            Generar tu link de WhatsApp
          </button>
        </form>
        <div className="w-full border border-[#00000033] max-w-[280px] min-h-[450px] shadow-lg dark:shadow-slate-600 pt-[35px] pr-[10px] pb-[35px] pl-[10px] bg-white rounded-2xl">
          <div className="w-full flex justify-between flex-col bg-[#ECE5DD]">
            <div className="w-full h-[50px] bg-[#ededed] flex justify-start items-center gap-4 pl-5">
              <img src={ProfileWsp} alt="" className="rounded-full h-8" />
              <p type="tel" className="text-sm">
                {formatPhoneNumberIntl(value)}
              </p>
            </div>
            <div className="w-full h-[400px] flex justify-end items-end p-4">
              {message && (
                <p className="bg-[#DCF8C6] rounded-lg p-2 max-w-[200px] text-sm shadow-md">
                  {message}
                </p>
              )}
            </div>
            <div className="w-full h-[50px] bg-[#ededed] flex justify-between items-center px-3">
              <input type="text" className="w-[85%] rounded-2xl py-1" />
              <img src={SendWsp} alt="" className="w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
