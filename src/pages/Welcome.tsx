import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Select from "react-select";
import type { StylesConfig } from "react-select";

const words = ["kino", "aktor", "aktrisa", "qo'shiq"];

const options = [
  { value: "movies", label: "Kinolar" },
  { value: "musics", label: "Qo'shiqlar" },
  { value: "actors", label: "Aktorlar" },
  { value: "actresses", label: "Aktrisalar" },
];

type OptionType = { value: string; label: string };

const customStyles: StylesConfig<OptionType> = {
  control: (base) => ({
    ...base,
    backgroundColor: "rgb(255, 210, 48)",
    width: "200px",
    borderRadius: "12px",
    padding: "4px",
    boxShadow: "none",
    border: "none",
    fontWeight: "600",
    letterSpacing: "0.75px",
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
    borderRadius: "4px",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "rgba(255, 210, 48,0.5)" : "#fffbeb",
    color: "#333",
    cursor: "pointer",
    marginTop: "0px",
    fontWeight: "600",
    letterSpacing: "1px",
    borderRadius: 0,
  }),
  placeholder: (base) => ({
    ...base,
    color: "#1e1e1e",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#444",
  }),
};

const Welcome = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleChange = (option: OptionType | null) => {
    const value = option ? option.value : "";
    setCategory(value);
  };

  useEffect(() => {
    localStorage.setItem("category", category);
  }, [category]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (category !== "") navigate("/battle");
    else alert("Iltimos, Kategoriya tanlang!");
  };

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
        <p className="mt-2 text-2xl mb-5">
          Bu yerda siz o'zingiz yoqtirgan{" "}
          <span className="bg-amber-300 text-black px-2 font-bold uppercase">
            {currentWord}
          </span>{" "}
          larni bir-biriga qarshi kurashishga yuborishingiz mumkin. ⚔️
        </p>
        <Select<OptionType>
          options={options}
          onChange={handleChange}
          styles={customStyles}
          placeholder="Tanlash"
        />
        <button className="button mt-4" onClick={handleClick}>
          Arena
        </button>
      </div>
    </div>
  );
};

export default Welcome;
