import prisma from "@/lib/db";


export async function getUserBoard(userName: string) {
    const user = await prisma.user.findUnique({
        where: { username: userName },
        include: { boards: true }
    });
    if (!user) return null;

    if (!user.boards || user.boards.length === 0) {
        return await prisma.board.create({
            data: {
                title: "DEFAULT",
                ownerId: user.id,
                lists: {
                    createMany: {
                        data: [
                            { title: "Backlog" },
                            { title: "To do" },
                            { title: "In progress" },
                            { title: "Done" },
                        ]
                    }
                }
            },
        })
    }

    return user.boards;
}