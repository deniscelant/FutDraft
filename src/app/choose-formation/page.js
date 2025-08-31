import * as db from "@/engine/db.js";
import Image from "next/image";

export default function ChooseFormation() {
  return (
    <main>
      {db.formations.forEach((f) => {
        <div>
          <h1>{f.name}</h1>
          <Image
            src={f.img}
            alt="Formation"
            width={500}
            height={500}
            style={{ width: "200px", height: "auto" }}
            priority
          />
        </div>;
      })}
    </main>
  );
}
