import useWindowDimensions from '@/hooks/use-window-dimensions';
import { motion } from 'motion/react';

const skills = [
	{
		title: 'Frontend',
		items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MUI', 'Shadcn'],
		gridArea: 'a',
	},
	{
		title: 'Backend',
		items: ['Nest.js', 'Express', 'Java Spring', 'Supabase', 'Firebase'],
		gridArea: 'b',
	},
	{
		title: 'Databases',
		items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
		gridArea: 'c',
	},
	{
		title: 'DevOps',
		items: ['Docker', 'GitHub Actions', 'Vercel'],
		gridArea: 'd',
	},
	{
		title: 'Tools',
		items: ['VSCode', 'Postman', 'Figma'],
		gridArea: 'e',
	},
];

export default function SkillSection() {
	const { width } = useWindowDimensions();
	return (
		<section className="max-w-6xl mx-auto px-4 py-12">
			<h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

			<div
				className="grid gap-4 grid-cols-[repeat(1,_1fr)] xs:grid-cols-[repeat(2,_1fr)] sm:grid-cols-[repeat(3,_1fr)] xs:grid-rows-[200px 150px 150px] grid"
				style={{
					gridTemplateAreas:
						width > 640
							? `
      "a b c"
      "a b d"
      "e e d"
        `
							: width > 320
							? `
      "a b"
      "c d"
      "e ."
        `
							: `
      "a"
      "b"
      "c"
      "d"
      "e"
        `,
				}}
			>
				{skills.map(({ title, items, gridArea }) => (
					<motion.div
						key={title}
						whileHover={{
							scale: 1.05,
							boxShadow: '0 8px 20px var(--border)',
						}}
						transition={{ type: 'spring', stiffness: 200, damping: 20 }}
						style={{ gridArea }}
						className="rounded-lg p-6 bg-muted/50 border shadow-sm backdrop-blur flex flex-col"
					>
						<h3 className="text-xl font-semibold mb-3">{title}</h3>
						<ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 flex-grow overflow-auto">
							{items.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</section>
	);
}
