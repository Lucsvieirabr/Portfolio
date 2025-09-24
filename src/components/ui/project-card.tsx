import { Link } from "react-router-dom";
import { ExternalLink, Github, Computer } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TechTag } from "@/components/ui/tech-tag";
import { ImageWithLoading } from "@/components/ui/image-with-loading";
import type { ProjectData } from "@/data/projects";

// Função para determinar o texto do botão baseado na categoria
const getButtonText = (categoria: string): string => {
  if (categoria === "Profissional - CodeTime") {
    return "Site da CodeTime";
  }
  return "Code";
};

// Função para determinar o ícone baseado na categoria
const getButtonIcon = (categoria: string) => {
  if (categoria === "Profissional - CodeTime") {
    return <Computer className="h-3 w-3" />;
  }
  return <Github className="h-3 w-3" />;
};

interface ProjectCardProps {
  project: ProjectData;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <Link to={`/projetos/${project.slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group card-interactive overflow-hidden cursor-pointer h-full flex flex-col"
      >
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-t-xl aspect-video">
          <ImageWithLoading
            src={project.imagens_projeto[0]}
            alt={project.titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
            fallbackClassName="rounded-t-xl"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
          {project.url_live && (
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.url_live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver projeto ao vivo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={project.url_github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código no GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <TechTag className="backdrop-blur-sm shadow-lg">
            {project.categoria}
          </TechTag>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="space-y-4 flex-1">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-normal truncate">
                {project.titulo}
              </h3>
              <span className="text-sm text-muted-foreground flex-shrink-0">{project.ano}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              {project.descricao_curta}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.tecnologias.slice(0, 4).map((tech) => (
              <TechTag key={tech} className="text-xs">
                {tech}
              </TechTag>
            ))}
            {project.tecnologias.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tecnologias.length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 mt-auto">
          <div className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
            Clique para ver detalhes →
          </div>
          
          <div className="flex gap-2">
            {project.url_live && (
              <Button
                size="sm"
                variant="outline"
                className="h-8 px-3 text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
                asChild
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={project.url_live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  Live
                </a>
              </Button>
            )}
            <Button
              size="sm"
              variant="outline"
              className={`h-8 text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 ${
                project.categoria === "Profissional - CodeTime" ? "px-2" : "px-3"
              }`}
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.url_github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                {getButtonIcon(project.categoria)}
                {getButtonText(project.categoria)}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}