import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ProjectData } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectData;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-interactive overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-xl aspect-video">
        <img
          src={project.imagens_projeto[0]}
          alt={project.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
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
          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white">
            {project.categoria}
          </Badge>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-normal">
              {project.titulo}
            </h3>
            <span className="text-sm text-muted-foreground">{project.ano}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.descricao_curta}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.tecnologias.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.tecnologias.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tecnologias.length - 4}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <Button asChild variant="ghost" className="h-auto p-0 text-sm font-medium">
            <Link to={`/projetos/${project.slug}`}>
              Ver detalhes →
            </Link>
          </Button>
          
          <div className="flex gap-2">
            {project.url_live && (
              <Button
                size="sm"
                variant="outline"
                className="h-8 px-3 text-xs"
                asChild
              >
                <a
                  href={project.url_live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Live
                </a>
              </Button>
            )}
            <Button
              size="sm"
              variant="outline"
              className="h-8 px-3 text-xs"
              asChild
            >
              <a
                href={project.url_github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3 w-3 mr-1" />
                Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}