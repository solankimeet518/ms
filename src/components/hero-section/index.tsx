import { Button } from '@/shadcn/ui/button';
import { motion } from 'motion/react';
import Linkedn from '@/assets/image/icon-linkedn.svg?react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shadcn/ui/tooltip';
import { Github } from 'lucide-react';

const HeroSection = () => {
	return (
		<section className="w-full max-w-[1200px] mx-auto grid cols-1 md:grid-cols-2 gap-2">
			<div className="col-span-1 self-end justify-self-center">
				<img
					src='/images/photo.jpg'
					alt="Photo"
					className="max-h-[400px]"
				/>
			</div>

			<motion.div
				className="col-span-1 -order-1 md:order-1 p-2"
				initial={{ transform: 'translateY(50px)' }}
				animate={{ transform: 'translateY(0)' }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
			>
				<h1 className="text-4xl font-semibold">Software Enginner</h1>
				<p className="mt-2 text-2xl">Software Engineer</p>

				<p className="mt-4">
					Hi, I am a Software Engineer with a passion for building web
					applications. I love to create efficient and scalable solutions.
				</p>

				<Button className="mt-4">Work With Me</Button>
				<div className="flex items-start mt-2">
					<Tooltip>
						<TooltipTrigger>
							<Button variant="ghost" size="icon" asChild>
								<a
									href="https://www.linkedin.com/in/meet518"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedn />
								</a>
							</Button>
						</TooltipTrigger>
						<TooltipContent>LinkedIn</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger>
							<Button variant="ghost" size="icon" asChild>
								<a
									href="https://www.github.com/solankimeet518"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github fill="currentColor" />
								</a>
							</Button>
						</TooltipTrigger>
						<TooltipContent>GitHub</TooltipContent>
					</Tooltip>
				</div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
