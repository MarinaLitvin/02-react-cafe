import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import { useState } from "react";
import VoteOptions from "./VoteOptions";
import type { Votes, VoteType } from "../types/votes";
import VoteStats from "./VoteStats";
import Notification from "./Notification";

export default function App() {
  // Стан для збереження кількості голосів
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для оновлення голосів за типом
  const handleVote = (type: VoteType): void => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  // Функція для скидання голосів
  const resetVotes = (): void => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate =
    totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />

      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />

      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
