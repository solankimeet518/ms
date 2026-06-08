import { motion } from 'motion/react';
import { Card, CardHeader, CardTitle, CardContent, CardAction } from '@/shadcn/ui/card';
import { FolderGit2, Ship, Film, MessageSquare, Laptop, Receipt } from 'lucide-react';

const projects = [
  {
    title: 'MCP ERP System',
    subtitle: 'Current Development Project',
    description: 'A comprehensive Enterprise Resource Planning (ERP) platform designed to handle daily business accounting, invoicing, ledger balances, and transaction tracking. Engineered with a highly scalable Rust backend utilizing Axum and SeaORM, paired with a React frontend managed via Redux, TanStack, React Hook Form, and Zod.',
    icon: Receipt,
    tech: ['Rust', 'Axum', 'SeaORM', 'React', 'TanStack', 'Redux', 'React Hook Form', 'Zod', 'Axios'],
    category: 'Enterprise / Fintech',
  },
  {
    title: 'Sumeet Shipping Management System',
    subtitle: 'College Project / Production Solution',
    description: 'A custom shipping logistics platform engineered for Sumeet Shipping & Logistics. Features a React web admin panel and a Flutter mobile companion app communicating via Firebase. Admins can manage customer queries, track cargos, and update global web portal settings directly from the mobile app.',
    icon: Ship,
    tech: ['React', 'Flutter', 'Firebase', 'NoSQL', 'Cloud Functions'],
    category: 'Logistics',
  },
  {
    title: 'Cloud-Based Video Editor',
    subtitle: 'Hupp Technology Pvt. Ltd.',
    description: 'A browser-based video editing workspace built on Vue.js and Etro.js. Developed a custom backend node module utilizing FFmpeg to process and render complex video tracks server-side, enabling fast video exports that were successfully integrated into NestJS.',
    icon: Film,
    tech: ['Vue.js', 'Etro.js', 'Node.js', 'FFmpeg', 'NestJS'],
    category: 'Media Tech',
  },
  {
    title: 'Next.js Stripe Chat Application',
    subtitle: 'Personal Production SaaS',
    description: 'A real-time communication platform styled dynamically with Emotion CSS-in-JS. Integrated Stripe checkout APIs to handle subscriber billings and manage subscription models to access locked, premium chat rooms and groups.',
    icon: MessageSquare,
    tech: ['Next.js', 'Emotion', 'Stripe API', 'WebSockets', 'Tailwind CSS'],
    category: 'SaaS / Chat',
  },
  {
    title: 'Local Client Software & Marketing Suites',
    subtitle: 'Independent Consulting',
    description: 'Custom digital transformations for local business clients. Designed and deployed fast marketing portfolios, e-commerce storefronts, and internal business dashboards using Docker, digital ocean, and modern React/Next.js stack.',
    icon: Laptop,
    tech: ['React', 'Next.js', 'Axum', 'SeaORM', 'Docker', 'DigitalOcean'],
    category: 'B2B Services',
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-border/40" id="projects-section">
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground text-base md:text-lg">
          A showcase of shipping systems, media editors, and SaaS products I have designed and deployed.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <Card className="h-full bg-card border hover:border-primary/30 transition-all duration-300 relative flex flex-col justify-between overflow-hidden group">
                <CardHeader className="flex flex-row items-start justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {project.category}
                      </span>
                      <CardTitle className="text-lg font-bold mt-1.5 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardAction>
                    <FolderGit2 className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </CardAction>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between p-6 pt-0">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">{project.subtitle}</p>
                    <p className="text-muted-foreground/95 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-[11px] font-medium rounded bg-secondary text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
