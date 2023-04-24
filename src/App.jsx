import { Navbar, Hero, GridCards, GenerateLink, Footer } from "./Components";
import { IconContact, IconMarketing, IconMessage } from "./Images";

function App() {
  const dataCards = [
    {
      icon: IconMessage,
      title: "Comunicación instantánea",
      subtitle:
        "Permita que los clientes entren inmediatamente en un chat de WhatsApp con usted incluso sin su número",
    },
    {
      icon: IconMarketing,
      title: "Marketing eficaz en WhatsApp",
      subtitle:
        "Convierta los enlaces de WhatsApp en parte de su estrategia de marketing de WhatsApp compartiéndolos en Facebook, Instagram y más",
    },
    {
      icon: IconContact,
      title: "Recopilación sencilla de clientes potenciales",
      subtitle:
        "Capture y guarde automáticamente los números de los clientes para usarlos en el futuro cuando le envíen un mensaje a través de un enlace de WhatsApp",
    },
  ];

  return (
    <div className="w-full dark:bg-bg-dark bg-white flex flex-col gap-10">
      <Navbar />
      
      <Hero
        img={
          "https://global-uploads.webflow.com/6030eb20edb26744961d31ee/62ea1acb0175679bc2577391_WhatsApp-link-generator-1.png"
        }
        title={"Generador de enlaces de WhatsApp"}
        subtitle={
          "¿Quiere que sus clientes entablen una conver sación con usted en WhatsApp? Use el generador de enlaces WhatsApp de WsGen. Capture fácilmente los números de sus clientes cuando le envíen mensajes a través de su enlace de WhatsApp."
        }
      />

      <GridCards dataCard={dataCards} />

      <GenerateLink />

      <Footer />
    </div>
  );
}

export default App;
