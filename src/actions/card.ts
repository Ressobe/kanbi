"use server";

import addCard, { removeCard } from "@/database/card";
import { revalidatePath } from "next/cache";


export async function addCardAction(boardId: string, columnId: string, content: string, position: number) {
    return await addCard(boardId, columnId, content, position);
}

export async function removeCardAction(cardId: string) {
    await removeCard(cardId);
}