import { Navbar, Hero, GridCards, GenerateLink, Footer } from "./Components";
import { IconContact, IconMarketing, IconMessage } from "./Images";

function App() {
  const dataCards = [
    {
      icon: IconMessage,
      title: "Comunicación instantánea",
      subtitle:
        "Permita que los clientes entren inmediatamente en un chat de WhatsApp contigo incluso sin su número",
    },
    {
      icon: IconMarketing,
      title: "Marketing eficaz en WhatsApp",
      subtitle:
        "Convierte los enlaces de WhatsApp en parte de tu estrategia de marketing de WhatsApp compartiéndolos en Facebook, Instagram y más...",
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
          "Quieres que tus clientes te hablen por WhatsApp? Pues con el generador de enlaces WhatsApp de WsGen, es pan comido! Podrás capturar fácilmente sus números cuando te envíen mensajes a través de tu enlace de WhatsApp. No lo pienses más y haz que tu comunicación con ellos sea mucho más fácil!"
        }
      />

      <GridCards dataCard={dataCards} />

      <GenerateLink />

      <Footer />
    </div>
  );
}

export default App;
