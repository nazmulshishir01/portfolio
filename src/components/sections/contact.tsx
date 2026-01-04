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

            <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact info */}
                <div className="lg:col-span-2 space-y-8">
                    <Reveal direction="left">
                        <p className="text-muted-foreground">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>
                    </Reveal>

                    <div className="space-y-4">
                        {contactInfo.map((item, index) => (
                            <Reveal key={item.label} direction="left" delay={0.1 * (index + 1)}>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <item.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{item.label}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="font-medium hover:text-primary transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-medium">{item.value}</p>
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
                        className="p-6 sm:p-8 rounded-2xl bg-card/50 border border-border/50"
                    >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    {...register("name")}
                                    aria-invalid={errors.name ? "true" : "false"}
                                    className={errors.name ? "border-destructive" : ""}
                                />
                                {errors.name && (
                                    <p className="text-sm text-destructive">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    {...register("email")}
                                    aria-invalid={errors.email ? "true" : "false"}
                                    className={errors.email ? "border-destructive" : ""}
                                />
                                {errors.email && (
                                    <p className="text-sm text-destructive">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                placeholder="What's this about?"
                                {...register("subject")}
                                aria-invalid={errors.subject ? "true" : "false"}
                                className={errors.subject ? "border-destructive" : ""}
                            />
                            {errors.subject && (
                                <p className="text-sm text-destructive">{errors.subject.message}</p>
                            )}
                        </div>

                        <div className="mt-6 space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Tell me about your project..."
                                rows={5}
                                {...register("message")}
                                aria-invalid={errors.message ? "true" : "false"}
                                className={errors.message ? "border-destructive" : ""}
                            />
                            {errors.message && (
                                <p className="text-sm text-destructive">{errors.message.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="mt-8 w-full sm:w-auto"
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
