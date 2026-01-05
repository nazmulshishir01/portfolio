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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo and tagline */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="inline-block">
                            <span className="text-xl font-bold tracking-tight">
                                <span className="gradient-text">Nazmul Portfolio</span>
                            </span>
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                            {personalInfo.tagline}
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-colors focus-ring"
                                aria-label={link.name}
                            >
                                <link.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 pt-8 border-t border-border/50">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p className="flex items-center gap-1">
                            © {currentYear} {personalInfo.name}. Made with{" "}
                            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href={personalInfo.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors focus-ring rounded"
                            >
                                Resume
                            </Link>
                            <Link
                                href="/projects"
                                className="hover:text-foreground transition-colors focus-ring rounded"
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
