import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/projetos" replace />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Button variant="ghost" className="mb-8 p-0 h-auto" asChild>
              <Link to="/projetos" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Voltar aos Projetos
              </Link>
            </Button>

            {/* Project Header */}
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="space-y-2">
                  <h1 className="text-3xl lg:text-4xl font-bold">{project.titulo}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.ano}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {project.categoria}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.url_live && (
                    <Button className="bg-gradient-primary text-white" asChild>
                      <a
                        href={project.url_live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <a
                      href={project.url_github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.imagens_projeto.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-normal"
                >
                  <img
                    src={image}
                    alt={`${project.titulo} - Imagem ${index + 1}`}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-slow"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Sobre o Projeto</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.descricao_completa}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tecnologias.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-8"
            >
              <div className="card-elevated p-6 space-y-4">
                <h3 className="text-lg font-semibold">Informações do Projeto</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ano:</span>
                    <span className="font-medium">{project.ano}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria:</span>
                    <Badge variant="outline" className="text-xs">
                      {project.categoria}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-medium text-accent">Concluído</span>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6 space-y-4">
                <h3 className="text-lg font-semibold">Links</h3>
                <div className="space-y-3">
                  {project.url_live && (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a
                        href={project.url_live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Projeto Ao Vivo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a
                      href={project.url_github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código no GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;