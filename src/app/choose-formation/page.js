'use client'

import FormationWindow from "@/components/formationWindow";
import * as db from "@/config/db.js";
import SquadBuilder from "../squad-builder/page";
import { useSearchParams } from 'next/navigation'

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
