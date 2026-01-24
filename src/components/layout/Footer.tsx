export function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-surface/50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="https://github.com/Abbas192006" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/abbasxcode/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/abbas_412_/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
