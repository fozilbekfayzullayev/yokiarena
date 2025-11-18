import { useEffect, useState } from "react";
import { Link } from "react-router";

const words = ["kino", "aktor", "kitob"];

const Welcome = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center lg:items-baseline min-h-screen w-full bg-background relative">
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0 bg-background"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.5) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.5) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      <div className="h-screen flex items-center justify-center flex-col text-center z-50 relative px-4">
        <h1 className="relative text-5xl md:text-6xl  font-bold mb-3 px-3 welcome-heading">
          Salom 👋
        </h1>
        <p className="mt-5 text-2xl">
          <span className="font-bold">(Yoki)</span> arenasiga xush kelibsiz!
        </p>
        <p className="mt-2 text-2xl mb-10">
          Bu yerda siz o'zingiz yoqtirgan{" "}
          <span className="bg-amber-300 text-black px-2 font-bold">
            {currentWord}
          </span>{" "}
          larni bir-biriga qarshi kurashishga yuborishingiz mumkin. ⚔️
        </p>
        <Link to={"/battle"} className="button">
          Arena
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
