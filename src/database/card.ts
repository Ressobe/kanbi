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
                ...card,
                listName: l.title,
            })
        }
    }

    return cards;
}