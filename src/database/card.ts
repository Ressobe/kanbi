import { CardType } from "@/app/types";
import prisma from "@/lib/db"


export async function getBoardCards(boardId: string) {
    const board = await prisma.board.findUnique({
        where: { id: boardId },
        select: {
            lists: {
                include: {
                    cards: true
                }
            }
        }
    })
    if (!board) return null;

    const cards = [];

    for (const l of board.lists) {

        for (const card of l.cards) {
            cards.push({
                id: card.id,
                content: card.content,
                column: l.title,
                columnId: l.id,
                position: card.position,
            })
        }
    }

    return cards;
}

export async function deleteCards(boardId: string) {
    const listsAndCardsToDelete = await prisma.list.findMany({
            where: { boardId: boardId },
            include: { cards: true }, 
    });

    const cardsToDelete = listsAndCardsToDelete.flatMap(list => list.cards);

    await prisma.card.deleteMany({
            where: { id: { in: cardsToDelete.map(card => card.id) } },
    });
}

export async function updateCards(boardId: string, cards: CardType[]) {
    await deleteCards(boardId);
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        await prisma.card.create({
            data: {
                listId: card.columnId,
                content: card.content,
                position: i,
            }
        })
    }
}

export default async function addCard(boardId: string, columnId: string, content: string, position: number) {
    const card = await prisma.card.create({
        data: {
            content: content,
            position: position,
            listId: columnId
        }
    })

    await prisma.list.update({
        where: { 
            id: columnId,
            boardId: boardId,
        },
        data: {
            cards: {
                connect: { id: card.id }
            }
        }
    });

    return card;
}

export async function removeCard(cardId: string) {
    await prisma.card.delete({
        where: { id: cardId }
    })

}
