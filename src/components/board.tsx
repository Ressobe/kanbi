"use client";

import Trash from "./trash";
import Column from "./column";
import { useState } from "react";
import { CardType } from "@/app/types";


export function Board() {
    const [cards, setCards] = useState<CardType[] | []>([]);

      return (
        <div className="flex h-screen w-full gap-3 overflow-scroll p-12">
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