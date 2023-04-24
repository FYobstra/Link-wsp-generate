import { motion } from "framer-motion";

export default function Hero({title, subtitle,img}) {
  return (
    <div className="w-full lg:max-w-7xl mx-auto px-10">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col lg:flex-row justify-center items-center gap-10"
      >
        <div className="order-2 lg:order-none">
          <img
            src={img}
            alt="Image Hero"
            className="sm:w-[70%] md:w-[80%] mx-auto lg:w-[90%] hero"
          />
        </div>
        <div className="flex flex-col gap-3 lg:w-full text-center lg:text-start">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl dark:text-primary-text-dark text-primary-text-light">
            {title}
          </h1>
          <p className="dark:text-secondary-text-dark text-secondary-text-light text-sm md:text-base">
            {subtitle}
          </p>
        </div>
      </motion.header>
    </div>
  );
}
