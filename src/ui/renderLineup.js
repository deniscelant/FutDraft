"use client";
import RenderCard from "@/ui/renderCard";
import { Lineup } from "@/config/lineup";
import styles from "@/styles/card-styles.css";
import { useSearchParams } from "next/navigation";
import { CardAttributes } from "@/config/cardAttributes";
import { useState } from "react";

export default function RenderLineup() {
  const [cardBoard, setCardBoard] = useState(false);
  const searchParams = useSearchParams().get("lineup").toString();
  const lineup = new Lineup(searchParams);

  return (
    <main>
      <div>
        {lineup.positions.map((index) => (
          <RenderCard
            key={index}
            click={() => {
              setCardBoard(true);
            }}
          />
        ))}
      </div>
      <div style={{ display: cardBoard ? "initial" : "none" }}>
        {[...new Array(5)].map((index) => (
          <RenderCard
            key={index}
            stats={
              new CardAttributes(
                lineup.positions[
                  Math.floor(Math.random() * lineup.positions.length)
                ]
              )
            }
          />
        ))}
      </div>
    </main>
  );
}
