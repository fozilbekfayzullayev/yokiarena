import { motion, LazyMotion, domAnimation } from "framer-motion";
import { Link } from "react-router";
import { cup } from "../assets";

interface WinnerProps {
  winner: {
    name: string;
    img: string;
  };
}

const Podium = ({ winner }: WinnerProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="max-w-[500px] w-full relative mt-10 mx-auto overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.8 }}
      >
        <img
          className="w-full rounded-2xl bg-amber-50 p-2"
          src={winner.img}
          alt={winner.name}
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1, background: "rgba(15,25,40,0.7)" }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 1.5 }}
          className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full rounded-2xl backdrop-blur-[2px] p-5"
        >
          <motion.img
            className="w-30 md:w-50 mb-4"
            initial={{ y: -5 }}
            animate={{ y: 5 }}
            transition={{
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
              ease: "linear",
            }}
            src={cup}
            alt="winner"
            loading="lazy"
          />
          <p className="text-3xl md:text-5xl font-bold text-center capitalize mb-4">
            G'olib <br /> {winner.name}
          </p>
          <div className="flex gap-5 items-center absolute bottom-10">
            <Link className="podium-btn" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"
                />
              </svg>
            </Link>
            <button
              className="podium-btn"
              onClick={() => window.location.reload()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </LazyMotion>
  );
};

export default Podium;
