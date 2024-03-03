import { CheckCircleIcon } from "lucide-react";
import { RefObject } from "react";

type FeaturesSectionProps = {
    ref: RefObject<HTMLDivElement>;
}

export default function FeaturesSecion() {
    return (
        <div >
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="gap-10 flex flex-col items-center">
                            <h2 className="font-bold tracking-tighter text-4xl text-gradient bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                The Kanbi makes it easy to stay organized and get things done
                            </h2>
                            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                With Kanban, you can create boards to organize your tasks, move cards to track progress, and collaborate
                                with your team in real-time. Here are some key benefits of using the Kanban app:
                            </p>
                        </div>
                        <div className="pt-4 grid max-w-sm gap-2">
                            <div className="flex items-center space-x-2">
                                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 text-green-500" />
                                <p className="text-lg font-medium tracking-wide dark:text-gray-400">Improved productivity</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 text-green-500" />
                                <p className="text-lg font-medium tracking-wide dark:text-gray-400">Better task organization</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircleIcon className="w-5 h-5 flex-shrink-0 text-green-500" />
                                <p className="text-lg font-medium tracking-wide dark:text-gray-400">Enhanced collaboration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    );
}