import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

const contactItems = [
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${profileData.email}`,
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-50 dark:hover:bg-red-950/20",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: profileData.linkedin_url,
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-950/20",
  },
  {
    name: "GitHub",
    icon: Github,
    href: profileData.github_url,
    color: "hover:text-gray-800 dark:hover:text-gray-200",
    bgColor: "hover:bg-gray-50 dark:hover:bg-gray-950/20",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: profileData.instagram_url,
    color: "hover:text-pink-600",
    bgColor: "hover:bg-pink-50 dark:hover:bg-pink-950/20",
  },
];

export function ContactCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-3 mt-6"
    >
      {contactItems.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className={`h-12 px-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 ${item.color} ${item.bgColor}`}
            asChild
          >
            <a
              href={item.href}
              target={item.name === "Email" ? "_self" : "_blank"}
              rel={item.name === "Email" ? "" : "noopener noreferrer"}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <item.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{item.name}</span>
            </a>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
