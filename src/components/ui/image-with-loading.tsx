import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}

export function ImageWithLoading({ 
  src, 
  alt, 
  className = "", 
  fallbackClassName = "" 
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 flex items-center justify-center bg-muted/50 rounded-full ${fallbackClassName}`}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="text-primary"
            >
              <Loader2 className="h-8 w-8" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State */}
      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 flex items-center justify-center bg-muted rounded-full ${fallbackClassName}`}
          >
            <div className="text-4xl font-bold text-muted-foreground">
              {alt.charAt(0).toUpperCase()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading || hasError ? "opacity-0" : "opacity-100"
        } ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading || hasError ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
