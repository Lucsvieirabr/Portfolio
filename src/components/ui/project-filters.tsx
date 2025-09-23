import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechTag } from "@/components/ui/tech-tag";

interface ProjectFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  totalProjects: number;
  filteredCount: number;
}

export function ProjectFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  totalProjects,
  filteredCount,
}: ProjectFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-4"
    >
      {/* Filter Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Filter className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Filtrar Projetos</h3>
            <p className="text-sm text-muted-foreground">
              {filteredCount} de {totalProjects} projetos
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {selectedCategory !== "Todos" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCategoryChange("Todos")}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-2" />
              Limpar Filtros
            </Button>
          )}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2"
          >
            <span>Categorias</span>
            <motion.div
              animate={{ rotate: isFiltersOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Filter Tags - Collapsible */}
      <AnimatePresence>
        {isFiltersOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 overflow-hidden"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => {
                        onCategoryChange(category);
                        setIsFiltersOpen(false);
                      }}
                      className={`transition-all duration-300 ${
                        isSelected
                          ? "ring-2 ring-primary/50 ring-offset-2 ring-offset-background"
                          : "hover:ring-2 hover:ring-primary/30 hover:ring-offset-2 hover:ring-offset-background"
                      }`}
                    >
                      <TechTag
                        className={`text-sm cursor-pointer ${
                          isSelected
                            ? "opacity-100 shadow-lg"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        {category}
                      </TechTag>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Active Filter Indicator */}
            {selectedCategory !== "Todos" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Filtrando por: <strong className="text-foreground">{selectedCategory}</strong></span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
