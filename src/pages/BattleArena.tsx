import { useEffect, useState } from "react";
// import { data } from "../../public/db";
import PosterCard from "../components/Cards";
import Podium from "../components/Podium";
import TimerLoading from "../components/TimerLoading";
import { useCountDown } from "../hooks/useCountdown";
import { useFetch } from "../hooks/useFetch";

interface Data {
  id: number;
  // name: string;
  title: string;
  image_url: string;
}

const BattleArena = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [roundIndex, setRoundIndex] = useState<number>(1);
  const getItem: string | null =
    localStorage.getItem("category")?.replace(/["'\\]/g, "") ?? null;
  const { data, loading } = useFetch(getItem);
  const [winner, setWinner] = useState<Data | null>(data[0] ?? null);
  const { countdown, isLoading } = useCountDown();

  useEffect(() => {
    if (!loading && data?.length > 0 && winner === null) {
      //  eslint-disable-next-line react-hooks/exhaustive-deps
      setWinner(data[0]);
    }
  }, [loading, data, winner]);

  const nextRound = () => {
    if (!selected) return;

    const newWinner = data.find((item) => item.title === selected) ?? winner;
    setWinner(newWinner);

    setRoundIndex((prev) => prev + 1);
    setSelected(null);
  };

  const challanger = data[roundIndex] ?? null;
  const isFinished = roundIndex >= data.length;

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

      <TimerLoading count={countdown} isVisible={isLoading} />
      {!isLoading && (
        <div className="w-full z-10 px-4 py-20 md:py-12 lg:py-8 text-center">
          {!isFinished && winner && (
            <div className="flex items-center justify-center flex-col">
              <h1 className="text-4xl mb-8 font-pt-serif font-bold">
                Qaysi biri ... ?
              </h1>
              <div className="flex justify-between items-stretch md:items-center gap-5 md:gap-8 mb-10">
                <PosterCard
                  name={winner.title}
                  img={winner.image_url}
                  selected={selected === winner.title}
                  id={`${winner.id} - ${challanger.id}`}
                  onSelect={() => setSelected(winner.title)}
                />
                <p className="text-2xl font-medium font-pt-serif select-none hidden md:block">
                  yoki
                </p>
                {challanger && (
                  <PosterCard
                    name={challanger.title}
                    img={challanger.image_url}
                    selected={selected === challanger.title}
                    id={`${challanger.id}`}
                    onSelect={() => setSelected(challanger.title)}
                  />
                )}
              </div>

              <button
                className={`button ${selected ? "" : "opacity-60"}`}
                onClick={nextRound}
                disabled={!selected}
              >
                Keyingi
              </button>
            </div>
          )}

          {isFinished && winner && <Podium winner={winner} />}
        </div>
      )}
    </div>
  );
};

export default BattleArena;
