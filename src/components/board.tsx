"use client";

import Trash from "./trash";
import Column from "./column";
import { useEffect, useState } from "react";
import { CardType } from "@/app/types";
import { List } from "@prisma/client";

type BoardProps = {
    defaultCards: CardType[] | [];
    lists: List[]
    boardId: string
}

export function Board({ defaultCards, lists, boardId }: BoardProps) {
    const [cards, setCards] = useState<CardType[] | []>(defaultCards);

    useEffect(() => {
        console.log(cards);
    }, [cards]);

    const colors = [ "text-neutral-500", "text-yellow-200", "text-blue-200", "text-emerald-200" ];

    return (
        <div className="flex h-screen w-full gap-3 overflow-scroll p-12">
            {lists.map((column, idx) => {
                return (
                    <Column
                        key={column.title}
                        title={column.title}
                        column={column.title}
                        columnId={column.id}
                        boardId={boardId}
                        headingColor={colors[idx]}
                        cards={cards}
                        setCards={setCards}
                    />
                );
            })}
            <Trash setCards={setCards} />
        </div>
    );
}