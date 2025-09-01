import ChooseFormation from "@/app/choose-formation/page";
import { gameSave } from "./gameSaves";
import Link from "next/link";

// export class Scenario{
//     constructor(scenario){
//         this.scenario = scenario;
//         this.scenarioTypes = [{
//             1: "ChooseFormation",
//             2: "SquadBuilder",
//             3: "Championship",
//         }]
//         this.renderScenario()
//     }

//     renderScenario(){
//         if(this.scenario === "ChooseFormation"){
//              return <Link href="/choose-formation"></Link>
//         }
//         if(this.scenario === "SquadBuilder"){
//              return <Link href="/squad-builder"></Link>
//         }
//         if(this.scenario === "Championship"){
//              return <Link href="/championship"></Link>

//         }
//     }
// }

export default function renderScenario(scenario) {
  return <Link href={scenario}></Link>;
}

