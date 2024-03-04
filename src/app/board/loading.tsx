import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <>
            <nav className="bg-zinc-950/70 border-b border-primary-foreground p-4 flex flex-row-reverse items-center justify-between">
                <div className="flex items-center gap-x-20">
                </div>
            </nav>
            <div className="flex h-screen w-3/4 gap-10 overflow-scroll p-20 ">
                <Skeleton className="w-1/5 h-4/5 p-10" />
                <Skeleton className="w-1/5 h-4/5 p-10" />
                <Skeleton className="w-1/5 h-4/5 p-10" />
                <Skeleton className="w-1/5 h-4/5 p-10" />
            </div>
        </>

    );
}