import { useState } from "react";
import { data } from "../../public/db";
import PosterCard from "../components/Cards";
import Winner from "../components/Podium";
import TimerLoading from "../components/TimerLoading";
import { useCountDown } from "../hooks/useCountdown";

interface Data {
  id: number;
  name: string;
  img: string;
}

const BattleArena = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [roundIndex, setRoundIndex] = useState<number>(1);
  const [winner, setWinner] = useState<Data | null>(data[0]);
  const { countdown, isLoading } = useCountDown();

  const nextRound = () => {
    if (!selected) return;
    const dataMap = new Map(data.map((item) => [item.name, item]));
    const newWinner = dataMap.get(selected) ?? winner;
    setWinner(newWinner);
    setRoundIndex(roundIndex + 1);
    setSelected(null);
  };

  const challanger = data[roundIndex];
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
                  name={winner.name}
                  img={winner.img}
                  selected={selected === winner.name}
                  id={`${winner.id} - ${challanger.id}`}
                  onSelect={() => setSelected(winner.name)}
                />
                <p className="text-2xl font-medium font-pt-serif select-none hidden md:block">
                  yoki
                </p>
                <PosterCard
                  name={challanger.name}
                  img={challanger.img}
                  selected={selected === challanger.name}
                  id={`${challanger.id}`}
                  onSelect={() => setSelected(challanger.name)}
                />
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

          {isFinished && winner && <Winner winner={winner} />}
        </div>
      )}
    </div>
  );
};

export default BattleArena;
