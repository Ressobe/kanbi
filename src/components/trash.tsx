"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { CardType } from "@/app/types";
import { FlameIcon, Trash2Icon } from "lucide-react";
import { removeCardAction } from "@/actions/card";

type TrashProps = {
    setCards: Dispatch<SetStateAction<CardType[]>>;
}

export default function Trash({ setCards }: TrashProps) {
    const [active, setActive] = useState(false);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = () => {
        setActive(false);
    };

    const handleDragEnd = async (e: React.DragEvent<HTMLDivElement>) => {
        if (e.dataTransfer) {
            const cardId = e.dataTransfer.getData("cardId");
            setCards((pv) => pv.filter((c) => c.id !== cardId));
            setActive(false);

            await removeCardAction(cardId);
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