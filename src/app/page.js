import Image from "next/image";
import styles from "./page.module.css";
import { gameSave } from "@/engine/gameSaves";
import LoadButton from "@/components/button";
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
        <LoadButton
        id={"Novo Jogo"}
        ></LoadButton>
      </main>
    </div>
  );
}
