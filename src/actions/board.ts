"use server";

import { CardType } from "@/app/types";
import { updateCards } from "@/database/card";


export default async function updateBoardAction(boardId: string, cards: CardType[]) {
    await updateCards(boardId, cards);
}