import { Github, Linkedin, Mail } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gradient">
              {profileData.nome_completo}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {profileData.cargo} apaixonado por criar soluções inovadoras e eficientes. 
              Sempre em busca de novos desafios e oportunidades de crescimento.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-normal"
              >
                <Mail className="h-4 w-4" />
                {profileData.email}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href={profileData.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-normal hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={profileData.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-normal hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {profileData.nome_completo}. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Desenvolvido com ❤️ usando React + TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}