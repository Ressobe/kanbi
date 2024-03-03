export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear().toString();
    return (
        <footer className="w-full flex flex-col gap-y-6 md:flex-row items-center justify-between px-10 bg-background border-t border-primary-foreground   text-center text-muted py-4">
            <div className="space-y-2">
                <div>© {currentYear} Bartosz Sobina. All rights reserved.</div>
                <div>bartosz.sobina@proton.me</div>
            </div>
            <div className="flex gap-x-6">
                <span className="transition-all hover:text-foreground cursor-pointer hover:underline hover:underline-offset-3">Cookie Preferences</span>
                <span className="transition-all hover:text-foreground cursor-pointer hover:underline hover:underline-offset-3">Terms of Service</span>
                <span className="transition-all hover:text-foreground cursor-pointer hover:underline hover:underline-offset-3">Privacy Policy</span>
                <span className="transition-all hover:text-foreground cursor-pointer hover:underline hover:underline-offset-3">Refund Policy</span>
            </div>
        </footer>
    );
}