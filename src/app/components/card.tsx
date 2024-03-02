import { CardType } from "../types";

type CardProps = CardType;

export function Card({title, id, column} : CardProps) {
    return (
        <>
            <DropIndicator beforeId={id} column={column} />
            <div 
                draggable="true"
                className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
            >
                <p className="text-sm text-neutral-100">{title}</p>
            </div>
        </>
    );
}

type DropIndicatorProps = {
    beforeId: string;
    column:  string;
}

export const DropIndicator = ({ beforeId, column } : DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};