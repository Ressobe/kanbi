"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { CardType } from "@/app/types";
import { PlusCircleIcon, PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import addCardAction from "@/actions/card";

type AddCardProps = {
    boardId: string;
    newPosition: number;
    columnId: string;
    column: string;
    setCards: Dispatch<SetStateAction<CardType[]>>;
}

export default function AddCard({ boardId, newPosition, column, columnId, setCards }: AddCardProps) {
    const [text, setText] = useState('');
    const [adding, setAdding] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!text.trim().length) return;
        const newCard = {
            column,
            columnId,
            content: text.trim(),
            position: newPosition,
            id: Math.random().toString(),

        };

        setCards((pv) => [...pv, newCard]);

        await addCardAction(boardId, columnId, text.trim(), newPosition);

        setAdding(false);
    };

    return (
        <>
            {adding ? <>
                <motion.form layout onSubmit={handleSubmit}>
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        autoFocus
                        placeholder="Add new task..."
                        className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-none"
                    />
                    <div className="mt-1.5 flex items-center justify-end gap-1.5">
                        <motion.button
                            onClick={() => setAdding(false)}
                            className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                        >
                            Close
                        </motion.button>
                        <motion.button
                            type="submit"
                            className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
                        >
                            <span>Add</span>
                            <PlusIcon className="w-4 h-4" />
                        </motion.button>
                    </div>
                </motion.form>
            </> : <motion.button
                layout
                onClick={() => setAdding(true)}
                className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
                <span>Add card</span>
                <PlusCircleIcon className="w-4 h-4" />
            </motion.button>}

        </>
    );
}