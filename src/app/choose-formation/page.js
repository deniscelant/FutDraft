import * as db from "@/engine/db.js";
import Image from "next/image";

export default function chooseFormation() {
  return (
    <main>
      <div>
        <h1>{db.formations[0].name}</h1>
        <Image
          src={db.formations[0].img}
          alt="Formation"
          width={500}
          height={500}
          style={{ width: "200px", height: "auto" }}
          priority
        />
      </div>
    </main>
  );
}
