"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { CardType } from "../types";
import { Card, DropIndicator } from "./card";
import AddCard from "./add-card";

type ColumnProps = {
    title: string;
    headingColor: string;
    column: string;
    cards: CardType[];
    setCards: Dispatch<SetStateAction<CardType[]>>;
}

export default function Column({ title, headingColor, column, cards, setCards }: ColumnProps) {
    const [active, setActive] = useState(false);

    return (
        <div className="w-56 shrink-0">
            <div className="mb-3 flex items-center justify-between">
                <h3 className={`font-medium ${headingColor}`}>{title}</h3>
                <span className="rounded text-sm text-neutral-400">
                    {cards.length}
                </span>
            </div>
            <div
                className={`h-full w-full transition-colors ${active ? "bg-neutral-800/50" : "bg-neutral-800/0"}`}
            >
                {cards.map((c) => {
                    return <Card key={c.id} {...c} />;
                })}
                <DropIndicator beforeId="-1" column={column} />
                <AddCard column={column} setCards={setCards} />
            </div>

        </div>
    );
}

