"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { navLinks } from "@/content/portfolio";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass py-3"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <nav className="flex items-center justify-between">
                        {/* Website Name */}
                        <Link href="/" className="block">
                            <span className="text-xl font-bold gradient-text">Nazmul Portfolio</span>
                        </Link>

                        {/* Desktop navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/projects"
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md"
                            >
                                All Projects
                            </Link>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <ThemeToggle />

                            {/* Mobile menu button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden focus-ring"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </div>
                    </nav>
                </div>
            </motion.header>

            <MobileNav
                open={mobileMenuOpen}
                onOpenChange={setMobileMenuOpen}
            />
        </>
    );
}
