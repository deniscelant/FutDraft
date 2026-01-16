import { CardAttributes } from "@/config/cardAttributes";
import RenderCard from "./renderCard";
import { stringSearch } from "./renderLineup";

export default function CardBoard() {
  const searchParams = useSearchParams();
  const search = searchParams.get("lineup");
  const stringSearch = search.toString();
  const cardAttributes = new CardAttributes(stringSearch);

  return (
    <>
      <RenderCard stats={cardAttributes} />
      <RenderCard stats={cardAttributes} />
      <RenderCard stats={cardAttributes} />
      <RenderCard stats={cardAttributes} />
      <RenderCard stats={cardAttributes} />
    </>
  );
}
