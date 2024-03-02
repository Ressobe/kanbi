"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { CardType } from "../types";
import { FlameIcon, Trash2Icon } from "lucide-react";

type TrashProps = {
    setCards: Dispatch<SetStateAction<CardType[]>>;
}

export default function Trash({ setCards }: TrashProps) {
    const [active, setActive] = useState(false);

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = () => {
        setActive(false);
    };

    const handleDragEnd = (e: DragEvent) => {
        if (e.dataTransfer) {
            const cardId = e.dataTransfer.getData("cardId");
            setCards((pv) => pv.filter((c) => c.id !== cardId));
            setActive(false);
        }
    };

    return (
        <div
            onDrop={(e) => handleDragEnd(e)}
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={handleDragLeave}
            className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${active
                ? "border-red-800 bg-red-800/20 text-red-500"
                : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
                }`}
        >
            {active ? <FlameIcon className="animate-bounce" /> : <Trash2Icon />}
        </div>
    )
}