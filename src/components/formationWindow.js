import Image from "next/image";

export default function FormationWindow({name, img}) {
  return (
    <div>
      <h1>{name}</h1>
      <Image
        src={img}
        alt="Formation"
        width={500}
        height={500}
        style={{ width: "200px", height: "auto" }}
        priority
        onClick={chooseFormation}
      />
    </div>
  );
}
