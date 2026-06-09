import { motion } from 'motion/react';
import { Terminal, Layout, Cpu, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Terminal,
    items: ['JavaScript', 'TypeScript', 'Rust', 'Java', 'Python'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layout,
    items: ['React', 'Next.js', 'Axum', 'SeaORM', 'NestJS', 'Node.js', 'Vue.js', 'Sequelize', 'React Hook Form', 'Formik', 'Zod', 'TanStack Start', 'React Redux'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'DevOps, Cloud & Databases',
    icon: Cpu,
    items: ['Docker', 'DigitalOcean', 'GitHub Actions', 'Firebase', 'Supabase', 'PostgreSQL', 'MySQL/MariaDB', 'MongoDB'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Developer Tools',
    icon: Settings,
    items: ['Neovim', 'VSCode', 'Git', 'GitHub'],
    color: 'from-amber-500 to-orange-500',
  },
];

export default function SkillSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-border/40" id="skill-section">
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Technology Stack</h2>
        <p className="text-muted-foreground text-base md:text-lg">
          A comprehensive set of languages, frameworks, and developer tools I leverage to construct high-performance, robust software.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {skillCategories.map(({ title, icon: Icon, items }) => (
          <motion.div
            key={title}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 30px -10px var(--shadow-color)',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="rounded-2xl p-8 bg-card border shadow-xs flex flex-col justify-start relative overflow-hidden group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/80 border text-secondary-foreground hover:bg-secondary transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:scale-150 transition-transform duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
