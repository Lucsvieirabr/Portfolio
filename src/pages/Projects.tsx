import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectFilters } from "@/components/ui/project-filters";
import { projectsData, getAllCategories } from "@/data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const categories = ["Todos", ...getAllCategories()];
  
  const filteredProjects = selectedCategory === "Todos" 
    ? projectsData 
    : projectsData.filter(project => project.categoria === selectedCategory);

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
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold">
              Meus <span className="text-gradient">Projetos</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Uma coleção dos meus trabalhos mais significativos, 
              demonstrando diferentes tecnologias e abordagens de desenvolvimento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <ProjectFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            totalProjects={projectsData.length}
            filteredCount={filteredProjects.length}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      layout: { duration: 0.3 }
                    }}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <p className="text-lg text-muted-foreground">
                Nenhum projeto encontrado para a categoria "{selectedCategory}".
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory("Todos")}
                className="mt-4"
              >
                Ver Todos os Projetos
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;