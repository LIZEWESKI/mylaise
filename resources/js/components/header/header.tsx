import { Button } from '@/components/ui/button';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { Menu, Twitter, User, X, Youtube } from 'lucide-react';
import { useState } from 'react';
import AppLogo from '../app-logo';

const Header = () => {
    const { auth } = usePage<SharedData>().props;
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative z-20 flex w-full items-center justify-between px-6">
            <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center rounded-lg">
                    <AppLogo />
                </div>
            </div>
            <nav className="flex items-center justify-end gap-4">
                <>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon" className="">
                            <User className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon" className="" onClick={toggleMenu}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </>
                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 backdrop-blur-sm">
                        <div className="absolute inset-0 right-0 left-0 bg-black/48 p-6">
                            {/* Menu Header */}
                            <div className="flex items-center justify-between px-6">
                                <div className="flex items-center space-x-2">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg">
                                        <AppLogo />
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-[--color-button]" onClick={toggleMenu}>
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>

                            {/* Menu Content */}
                            <div className="space-y-8 p-6">
                                <nav className="space-y-6 font-paytone font-bold">
                                    <a href="#" className="block font-paytone text-8xl font-bold text-white transition-colors hover:text-purple-400">
                                        ACCUEIL
                                    </a>
                                    <a href="#" className="block text-8xl font-bold text-white transition-colors hover:text-purple-400">
                                        CATALOGUE
                                    </a>
                                    <a href="#" className="block text-8xl font-bold text-white transition-colors hover:text-purple-400">
                                        MES ARCHI
                                    </a>
                                </nav>

                                {/* Version and Social */}
                                <div className="absolute right-6 bottom-6 left-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-white/60">MyLaise v1.0.0</span>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex space-x-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                                                    <span className="text-sm text-white">
                                                        <Twitter />
                                                    </span>
                                                </div>
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                                                    <span className="text-sm text-white">
                                                        <Youtube />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
