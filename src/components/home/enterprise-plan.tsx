import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function EnterprisePlan() {
    return (
          <div className="flex flex-col p-6 bg-zinc-900 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-muted">
            <div>
              <h3 className="text-2xl font-bold text-center">Enterprise</h3>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold">$99</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-x-2">
                    <Check className="text-green-500 w-10 h-10" /> 
                    <span>Unlimited Cards</span>
                </li>
                <li className="flex items-center gap-x-2">
                   <Check className="text-green-500 w-10 h-10" /> 
                  <span>Unlimited Cloud Storage</span>
                </li>
                <li className="flex items-center gap-x-2">
                   <Check className="text-green-500 w-10 h-10" /> 
                   <span>Execute an unlimited number of commands</span>
                </li>
                <li className="flex items-center gap-x-2">
                   <Check className="text-green-500 w-10 h-10" /> 
                   <span>Access diverse views</span>
                </li>
                <li className="flex items-center gap-x-2">
                   <Check className="text-green-500 w-10 h-10" /> 
                   <span>Receive priority support for all your needs</span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-background text-foreground hover:bg-secondary">Get Started</Button>
            </div>
          </div>
    );
}