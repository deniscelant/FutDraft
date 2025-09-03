import Image from "next/image";
import Link from "next/link";
import { setFormation } from "@/engine/db";

export default function FormationWindow({ name, img }) {
  function handleClick() {
    setFormation.formation = name; // grava direto no módulo
  }

  return (
    <Link href="squad-builder"  >
      <div onClick={handleClick}>
        <h1>{name}</h1>
        <Image
          src={img}
          alt="Formation"
          width={500}
          height={500}
          style={{ width: "200px", height: "auto" }}
          priority
        />
      </div>
    </Link>
  );
}
