"use client";
import ICard from "@/components/ICard";
import { LineUp } from "@/engine/lineup";
import styles from "@/styles/card-styles.css";
import { useSearchParams } from "next/navigation";

export default function ILineUp() {
  const searchParams = useSearchParams();

  const search = searchParams.get("lineup");
  const stringSearch = search.toString()
  const lineup = new LineUp("", stringSearch);
  return (
    <main>
      {lineup.positions.map((card, index) => (
        <ICard key={index} Icard={card} />
      ))}
    </main>
  );
}
