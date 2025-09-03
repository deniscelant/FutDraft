import FormationWindow from "@/components/formationWindow";
import * as db from "@/engine/db.js";
import Image from "next/image";

export default function ChooseFormation() {
  return (
    <div>
      {db.formations.map((f) => (
        <FormationWindow
          key={f.name}
          name={f.name}
          img={f.img}
        />
      ))}
    </div>
  );
}
