import { Button } from '@/shadcn/ui/button';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Code2, ArrowRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shadcn/ui/tooltip';

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-20 px-6" id="hero-section">
      <motion.div
        className="col-span-1 md:col-span-7 flex flex-col items-start text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for Opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-none">
          Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-stone-500">Solanki</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
          Software Engineer
        </h2>

        <p className="text-base md:text-lg text-muted-foreground/90 max-w-[600px] mb-8 leading-relaxed">
          I focus on creating simple, efficient tools that streamline daily tasks and help businesses run better.
        </p>

        <div className="flex flex-wrap gap-4 items-center mb-8">
          <Button size="lg" className="group" nativeButton={false} asChild>
            <a href="#journey-section">
              View My Journey
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} asChild>
            <a href="mailto:solankimeet518+portfolio@gmail.com">Contact Me</a>
          </Button>
        </div>

        <div className="flex gap-3 items-center">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-muted-foreground transition-all duration-300" nativeButton={false} asChild />}>
              <a
                href="https://www.linkedin.com/in/meet518/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-muted-foreground transition-all duration-300" nativeButton={false} asChild />}>
              <a
                href="https://github.com/solankimeet518"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-muted-foreground transition-all duration-300" nativeButton={false} asChild />}>
              <a
                href="https://x.com/solankimeet518"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>Twitter</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-muted-foreground transition-all duration-300" nativeButton={false} asChild />}>
              <a
                href="https://leetcode.com/u/solankimeet518/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent>LeetCode</TooltipContent>
          </Tooltip>
        </div>
      </motion.div>

      <motion.div
        className="col-span-1 md:col-span-5 flex justify-center items-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="relative border-4 border-border/80 dark:border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl bg-zinc-900/5 backdrop-blur-sm p-4 max-w-[320px] md:max-w-[400px]">
          <img
            src="/images/photo.jpg"
            alt="Meet Solanki"
            className="rounded-xl object-cover w-full h-auto max-h-[380px]"
            onError={(e) => {
              // Fallback placeholder image if /images/photo.jpg is not found
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400&q=80";
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
