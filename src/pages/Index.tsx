import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { ContactCards } from "@/components/ui/contact-cards";
import { ImageWithLoading } from "@/components/ui/image-with-loading";
import { profileData } from "@/data/profile";
import { getFeaturedProjects } from "@/data/projects";

const Index = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <ImageWithLoading
                  src={profileData.foto_perfil_url}
                  alt={profileData.nome_completo}
                  className="w-full h-full rounded-full border-4 border-primary/20 shadow-glow object-cover"
                  fallbackClassName="rounded-full"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse pointer-events-none" />
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Olá, eu sou{" "}
                  <span className="text-gradient">
                    {profileData.nome_completo.split(' ')[0]}
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-primary font-medium">
                  {profileData.cargo}
                </p>
              </div>
              
              {/* Contact Cards */}
              <ContactCards />
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {profileData.bio}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-primary text-white hover:scale-105 transition-transform duration-normal">
                <Link to="/projetos" className="flex items-center gap-2">
                  Ver Projetos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 lg:py-32 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Projetos em <span className="text-gradient">Destaque</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos meus trabalhos mais recentes e relevantes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              <Link to="/projetos" className="flex items-center gap-2">
                Ver Todos os Projetos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
