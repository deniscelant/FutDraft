import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button";
import GameSaves from "@/engine/gameSaves";

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
          style={{ width: "200px",height: "auto" }}
          priority
        />
        <Button
          method={GameSaves.continueGame()}
        >
          {
            <h1>Continue</h1>
          }
        </Button>
      </main>
    </div>
  );
}
