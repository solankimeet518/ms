import { Card, CardHeader, CardTitle, CardContent } from '@/shadcn/ui/card';
import { motion, type Variants } from 'motion/react';

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.5,
			ease: 'easeOut',
		},
	}),
};

export function CardLayout() {
	const services = [
		{
			title: 'Custom Website Development',
			description:
				'From landing pages to complex web apps, we build responsive, scalable websites using modern technologies.',
		},
		{
			title: 'E-Commerce Solutions',
			description:
				'We create secure, user-friendly online stores powered by platforms like Shopify, or custom builds.',
		},
		{
			title: 'Website Maintenance & Optimization',
			description:
				'Keep your site fast, secure, and up-to-date with regular updates, performance tuning, and SEO improvements.',
		},
	];

	return (
		<div className="grid gap-6 md:grid-cols-3 place-items-stretch">
			{services.map((service, i) => (
				<motion.div
					key={service.title}
					custom={i}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={cardVariants}
					whileHover={{
						scale: 1.03,
						boxShadow: '0px 8px 20px var(--border)',
					}}
					transition={{
					}}
					className="h-full rounded-xl"
				>
					<Card className="h-full bg-white transition-colors duration-300 dark:bg-zinc-900">
						<CardHeader>
							<CardTitle>{service.title}</CardTitle>
						</CardHeader>
						<CardContent className="text-card-foreground/80">
							<p>{service.description}</p>
						</CardContent>
					</Card>
				</motion.div>
			))}
		</div>
	);
}
