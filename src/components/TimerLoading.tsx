import { motion } from "framer-motion";

interface LoaderProps {
  count: number;
  isVisible: boolean;
}

const TimerLoading = ({ count, isVisible }: LoaderProps) => {
  if (!isVisible) return null;
  return (
    <div className="absolute top-[50%] left-[50%] translate-[-50%] z-50">
      <motion.h1
        className="text-8xl text-amber-50 font-railway"
        key={count}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          type: "spring",
        }}
      >
        {count}
      </motion.h1>
    </div>
  );
};

export default TimerLoading;
