import Button from "../ui/button.jsx";
import GameSaves from "../game/gameSaves";

export default function MainView() {
  return (
    <div>
      <img src="assets/exp/futdraft.png" />
      <Button
        method={GameSaves.continueGame}
        text={"Continue"}
      />
    </div>
  );
}


