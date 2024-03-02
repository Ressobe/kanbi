"use client";

import Trash from "./trash";
import Column from "./column";
import { useEffect, useState } from "react";
import { CardType } from "../types";


export function Board() {
    const [cards, setCards] = useState<CardType[] | []>([]);
    const [hasChecked, setHasChecked] = useState(false);

    useEffect(() => {
        hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        const cardsData = localStorage.getItem("cards");
        setCards(cardsData ? JSON.parse(cardsData) : []);
        setHasChecked(true);
    }, []);

    return (
        <div className="flex h-full w-full gap-3 overflow-scroll p-12">
            <Column
                title="Backlog"
                column="backlog"
                headingColor="text-neutral-500"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="TODO"
                column="todo"
                headingColor="text-yellow-200"
                cards={cards}
                setCards={setCards}

            />

            <Column
                title="In progress"
                column="doing"
                headingColor="text-blue-200"
                cards={cards}
                setCards={setCards}

            />

            <Column
                title="Complete"
                column="done"
                headingColor="text-emerald-200"
                cards={cards}
                setCards={setCards}
            />
            <Trash setCards={setCards} />
        </div>
    );
}