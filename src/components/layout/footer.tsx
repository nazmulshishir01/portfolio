import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Facebook, Youtube } from "lucide-react";
import { personalInfo } from "@/content/portfolio";
import { XIcon } from "@/components/shared/icons";

const socialLinks = [
    {
        name: "GitHub",
        href: personalInfo.social.github,
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: personalInfo.social.linkedin,
        icon: Linkedin,
    },
    {
        name: "X",
        href: personalInfo.social.twitter,
        icon: XIcon,
    },
    {
        name: "Facebook",
        href: personalInfo.social.facebook,
        icon: Facebook,
    },
    {
        name: "YouTube",
        href: personalInfo.social.youtube,
        icon: Youtube,
    },
    {
        name: "Email",
        href: `mailto:${personalInfo.email}`,
        icon: Mail,
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/50 bg-card/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-8 sm:py-10 md:py-12">
                <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
                    {/* Logo and tagline */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="inline-block">
                            <span className="text-lg sm:text-xl font-bold tracking-tight">
                                <span className="gradient-text">Nazmul Portfolio</span>
                            </span>
                        </Link>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-[280px] sm:max-w-xs mx-auto md:mx-0">
                            {personalInfo.tagline}
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 md:gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="p-2 sm:p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-colors focus-ring"
                                aria-label={link.name}
                            >
                                <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50">
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between text-xs sm:text-sm text-muted-foreground">
                        <p className="flex items-center gap-1 flex-wrap justify-center">
                            <span>© {currentYear} {personalInfo.name}.</span>
                            <span className="flex items-center gap-1">
                                Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-red-500" /> using Next.js
                            </span>
                        </p>
                        <div className="flex items-center gap-4 sm:gap-6">
                            <Link
                                href={personalInfo.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors focus-ring rounded py-1"
                            >
                                Resume
                            </Link>
                            <Link
                                href="/projects"
                                className="hover:text-foreground transition-colors focus-ring rounded py-1"
                            >
                                Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}