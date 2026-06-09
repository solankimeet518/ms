import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Code2, Users } from 'lucide-react';

const timelineEvents = [
	{
		date: '2025 - Present',
		title: 'Freelance Software Consultant',
		subtitle: 'Independent Contractor',
		description: 'Relocated to native place and established local client partnerships. Designing and delivering bespoke full-stack software solutions, high-conversion marketing websites, and digital products for local enterprises.',
		icon: Users,
		color: 'border-amber-500 bg-amber-500/10 text-amber-500',
	},
	{
		date: 'April - Dec 2024',
		title: 'Software Engineer',
		subtitle: 'Hupp Technology Pvt. Ltd.',
		description: 'Developed advanced video editor software built on Vue.js and Etro.js. Built a backend video rendering pipeline using FFmpeg, which was integrated by the NestJS team. Built a real-time chat application using Next.js, Emotion styled-components, and Stripe payment integration.',
		icon: Briefcase,
		color: 'border-primary bg-primary/10 text-primary',
	},
	{
		date: 'Jan - March 2024',
		title: 'React & Frontend Intern',
		subtitle: 'TST Technology',
		description: 'Acquired deep practical knowledge in modern JavaScript/TypeScript, React ecosystems, performance optimization, and clean coding architectures during a 3-month intensive internship program.',
		icon: Code2,
		color: 'border-violet-500 bg-violet-500/10 text-violet-500',
	},
	{
		date: 'College Days (2019 - 2024)',
		title: 'BCA & MScIT Graduate',
		subtitle: 'Kutch University & GLS University',
		description: 'Graduated with a Bachelor of Computer Applications (BCA) from Kutch University, followed by a Master of Science in Information Technology (MScIT) from GLS University. During this time, developed a comprehensive Shipping Management System for Sumeet Shipping & Logistics using React (web), Flutter (mobile), and Firebase (backend).',
		icon: GraduationCap,
		color: 'border-emerald-500 bg-emerald-500/10 text-emerald-500',
	},
];

export default function JourneySection() {
	return (
		<section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-border/40" id="journey-section">
			<div className="text-center max-w-[800px] mx-auto mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Professional & Academic Journey</h2>
				<p className="text-muted-foreground text-base md:text-lg">
					A chronological view of my career, showcasing my growth from university projects to core engineering roles and independent consulting.
				</p>
			</div>

			<div className="relative border-l border-border max-w-[800px] mx-auto pl-8 space-y-12">
				{timelineEvents.map((event, i) => {
					const Icon = event.icon;
					return (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className="relative group"
						>
							{/* Icon timeline node */}
							<div className={`absolute -left-[53px] top-1 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 ${event.color} transition-transform duration-300 group-hover:scale-110 shadow-sm backdrop-blur-sm bg-background`}>
								<Icon className="w-5 h-5" />
							</div>

							{/* Date Tag */}
							<span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
								{event.date}
							</span>

							{/* Event Card */}
							<div className="bg-card border rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md transition-shadow">
								<h3 className="text-xl font-bold mb-1 text-foreground">{event.title}</h3>
								<h4 className="text-sm font-semibold text-muted-foreground mb-4">{event.subtitle}</h4>
								<p className="text-muted-foreground/90 text-sm md:text-base leading-relaxed">
									{event.description}
								</p>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
