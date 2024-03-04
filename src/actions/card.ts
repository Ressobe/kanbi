"use server";

import addCard from "@/database/card";


export default async function addCardAction(boardId: string, columnId: string, content: string, position: number) {
    await addCard(boardId, columnId, content, position);
}