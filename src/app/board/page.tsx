import { Board } from "@/components/board";
import { getUserBoard } from "@/database/board";
import { getBoardCards } from "@/database/card";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function BoardPage() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return null;
    }

    return (
        <h1>
            hello
        </h1>

    );
}