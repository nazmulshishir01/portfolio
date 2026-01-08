"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/content/portfolio";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form submitted:", data);

        toast.success("Message sent successfully!", {
            description: "I'll get back to you as soon as possible.",
        });

        reset();
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
        },
        {
            icon: MapPin,
            label: "Location",
            value: personalInfo.location,
        },
        {
            icon: Phone,
            label: "Phone",
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
        },
    ];

    return (
        <SectionWrapper id="contact" className="bg-muted/20">
            <SectionHeading
                title="Get in Touch"
                subtitle="Have a project in mind? Let's talk about it."
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
                {/* Contact info */}
                <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                    <Reveal direction="left">
                        <p className="text-sm sm:text-base text-muted-foreground">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>
                    </Reveal>

                    <div className="space-y-3 sm:space-y-4">
                        {contactInfo.map((item, index) => (
                            <Reveal key={item.label} direction="left" delay={0.1 * (index + 1)}>
                                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card/50 border border-border/50">
                                    <div className="p-2 sm:p-3 rounded-md sm:rounded-lg bg-primary/10 shrink-0">
                                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-sm sm:text-base font-medium hover:text-primary transition-colors truncate block"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm sm:text-base font-medium truncate">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Contact form */}
                <Reveal direction="right" className="lg:col-span-3">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="space-y-1.5 sm:space-y-2">
                                <Label htmlFor="name" className="text-sm">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    {...register("name")}
                                    aria-invalid={errors.name ? "true" : "false"}
                                    className={`h-10 sm:h-11 text-sm sm:text-base ${errors.name ? "border-destructive" : ""}`}
                                />
                                {errors.name && (
                                    <p className="text-xs sm:text-sm text-destructive">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="space-y-1.5 sm:space-y-2">
                                <Label htmlFor="email" className="text-sm">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    {...register("email")}
                                    aria-invalid={errors.email ? "true" : "false"}
                                    className={`h-10 sm:h-11 text-sm sm:text-base ${errors.email ? "border-destructive" : ""}`}
                                />
                                {errors.email && (
                                    <p className="text-xs sm:text-sm text-destructive">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
                            <Label htmlFor="subject" className="text-sm">Subject</Label>
                            <Input
                                id="subject"
                                placeholder="What's this about?"
                                {...register("subject")}
                                aria-invalid={errors.subject ? "true" : "false"}
                                className={`h-10 sm:h-11 text-sm sm:text-base ${errors.subject ? "border-destructive" : ""}`}
                            />
                            {errors.subject && (
                                <p className="text-xs sm:text-sm text-destructive">{errors.subject.message}</p>
                            )}
                        </div>

                        <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
                            <Label htmlFor="message" className="text-sm">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Tell me about your project..."
                                rows={4}
                                {...register("message")}
                                aria-invalid={errors.message ? "true" : "false"}
                                className={`text-sm sm:text-base resize-none ${errors.message ? "border-destructive" : ""}`}
                            />
                            {errors.message && (
                                <p className="text-xs sm:text-sm text-destructive">{errors.message.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="mt-6 sm:mt-8 w-full sm:w-auto h-10 sm:h-11 text-sm sm:text-base"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </form>
                </Reveal>
            </div>
        </SectionWrapper>
    );
}