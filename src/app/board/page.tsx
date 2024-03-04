import { Board } from "@/components/board";
import SignOutButton from "@/components/buttons/sign-out-button";
import { getUserBoard } from "@/database/board";
import { getBoardCards } from "@/database/card";
import getLists from "@/database/list";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function BoardPage() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return null;
    }

    const board = await getUserBoard(session.user.username);
    if (!board) return null;

    const cards = await getBoardCards(board.id);

    const lists = await getLists(board.id);

    if (!lists) return null;

    return (
        <>
            <nav className="bg-zinc-950/70 border-b border-primary-foreground p-4 flex flex-row-reverse items-center justify-between">
                <div className="flex items-center gap-x-20">
                    <h1 className="text-2xl font-bold">{session.user?.username}</h1>
                    <SignOutButton />
                </div>
            </nav>
            <Board boardId={board.id} lists={lists} defaultCards={cards ? cards : []} />
        </>
    );
}