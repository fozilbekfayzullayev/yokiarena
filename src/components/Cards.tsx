import { motion, LazyMotion, domAnimation } from "framer-motion";
import React from "react";

interface PosterCardProps {
  name: string;
  img: string;
  selected: boolean;
  id: string;
  onSelect: () => void;
}

const PosterCard = ({ name, img, selected, id, onSelect }: PosterCardProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={`rounded-2xl overflow-hidden`}
        key={id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 1,
          ease: "easeIn",
          type: "spring",
        }}
      >
        <label>
          <div
            className={`p-1 pb-4 bg-amber-50 rounded-2xl transition-colors duration-75 cursor-pointer block hover:bg-active ${
              selected ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="battle"
              checked={selected}
              onChange={onSelect}
              style={{ display: "none" }}
            />
            <img
              src={img}
              alt={name}
              className="poster-img mb-2.5"
              width={400}
              height={600}
              loading="lazy"
            />
            <p className="text-lg md:text-2xl font-semibold text-dark">
              {name}
            </p>
          </div>
        </label>
      </motion.div>
    </LazyMotion>
  );
};

export default React.memo(PosterCard);
