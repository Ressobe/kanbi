import { Check } from "lucide-react";
import { Button } from "../ui/button";

export function BasicPlan() {
    return (
        <div className="flex flex-col p-6 bg-zinc-900 shadow-lg rounded-lg justify-between border border-muted">
            <div>
                <h3 className="text-2xl font-bold text-center">Basic</h3>
                <div className="mt-4 text-center ">
                    <span className="text-4xl font-bold">$29</span>/ month
                </div>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-x-2">
                        <Check className="text-green-500 w-10 h-10" /> 
                        <span>Unlimited Cards</span>
                    </li>
                    <li className="flex items-center gap-x-2">
                        <Check className="text-green-500 w-10 h-10" /> 
                        <span>Up to 5 Boards</span>
                    </li>
                    <li className="flex items-center gap-x-2">
                        <Check className="text-green-500 w-10 h-10" /> 
                        <span>Assign tasks and deadlines </span>
                    </li>
                </ul>
            </div>
            <div className="mt-6">
                <Button className="w-full bg-background text-foreground hover:bg-secondary">Get Started</Button>
            </div>
        </div>

    );
}