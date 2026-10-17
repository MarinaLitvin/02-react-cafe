import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import { useState } from "react";

import type { Votes, VoteType } from "../types/votes";

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

  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}
