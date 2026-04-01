import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();

    setErrorMessage(null);
    setIsSending(true);

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          company,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "Failed to send message");
      }

      setShowThankYou(true);
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message";
      setErrorMessage(message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-mono text-primary mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm currently looking for internship or junior developer opportunities.
            Feel free to reach out — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">mouadev8@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Available remotely</p>
              </div>
            </div>
          </div>

          {showThankYou ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
              <p className="text-muted-foreground">Your message has been sent. I’ll get back to you soon.</p>
              <p className="text-sm text-muted-foreground mt-3">
                Prefer email? Contact me at{" "}
                <a
                  href="mailto:mouadev8@gmail.com"
                  className="text-foreground underline underline-offset-4"
                >
                  mouadev8@gmail.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <input
              type="text"
              name="company"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            {errorMessage ? (
              <p className="text-sm text-muted-foreground">
                Couldn’t send automatically ({errorMessage}). You can email me at{" "}
                <a
                  href="mailto:mouadev8@gmail.com"
                  className="text-foreground underline underline-offset-4"
                >
                  mouadev8@gmail.com
                </a>
                .
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send size={14} />
            </button>
          </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
