"use client";
import RenderCard from "@/ui/renderCard";
import { Lineup } from "@/config/lineup";
import styles from "@/styles/card-styles.css";
import { useSearchParams } from "next/navigation";

export default function RenderLineup() {
  const searchParams = useSearchParams();

  const search = searchParams.get("lineup");
  const stringSearch = search.toString()
  const lineup = new Lineup(stringSearch);
  return (
    <div>
      {lineup.positions.map((index) => (
        <RenderCard key={index}/>
      ))}
    </div>
  );
}
