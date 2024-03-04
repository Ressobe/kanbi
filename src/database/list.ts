import prisma from "@/lib/db";

export default async function getLists(boardId: string) {
    const board = await prisma.board.findUnique({
        where: { id: boardId },
        include: {
            lists: true
        }
    });
    if (!board) {
        return null;
    }

    return board.lists;
}

