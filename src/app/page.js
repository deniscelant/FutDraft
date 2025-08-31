import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button";
import { gameSave } from "@/engine/gameSaves";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/futdraft.png"
          alt="FutDraft"
          width={500}
          height={500}
          style={{ width: "200px", height: "auto" }}
          priority
        />
        <Button method={gameSave.continueGame()} text = {"Continue"}/>
        <Button method={gameSave.newGame()} text = {"Novo Jogo"}/>
        <Button method={gameSave.loadGame()} text = {"Carregar Jogo"}/>
      </main>
    </div>
  );
}
