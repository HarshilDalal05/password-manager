import { CardList } from "./components/card-list";
import { AddCardButton } from "./components/add-card-button";

export default function CardsPage() {
  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Cards</h1>
        <AddCardButton />
      </div>
      <CardList />
    </div>
  );
}
