import Link from "next/link";
import {gameSave} from "@/engine/gameSaves";

export default function LoadButton({ id }) {
  let url;
  if(id == "Continue"){
    gameSave.continueGame()
    url = gameSave.scenario
  }
  if(id == "Novo Jogo"){
    gameSave.newGame()
    url = gameSave.scenario
  }
  // if(id == "Carregar Jogo"){
  //   gameSave.loadGame()
  //   url = gameSave.scenario
  // }
  return (
    <Link id={id} href={url}>
      <button>{id}</button>
    </Link>
  );
}
