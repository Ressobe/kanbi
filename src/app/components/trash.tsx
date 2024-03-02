"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { CardType } from "../types";
import { FlameIcon, Trash2Icon } from "lucide-react";

type TrashProps = {
    setCards: Dispatch<SetStateAction<CardType[]>>;
}

export default function Trash({ setCards }: TrashProps) {
    const [active, setActive] = useState(false);

    return (
        <div
            className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${active
                    ? "border-red-800 bg-red-800/20 text-red-500"
                    : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
                }`}
        >
            {active ? <FlameIcon className="animate-bounce" /> :  <Trash2Icon /> }
        </div>
    )
}