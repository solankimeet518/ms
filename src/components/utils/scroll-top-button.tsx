import { Button } from '@/shadcn/ui/button';
import { ChevronUp } from 'lucide-react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { useState } from 'react';

const ScrollTopButton = () => {
	const { scrollY } = useScroll();
	const [isAnimated, setIsAnimated] = useState(scrollY.get() > 100);

	scrollY.on('change', (value) => {
		if (value > 100) {
			setIsAnimated(true);
		} else {
			setIsAnimated(false);
		}
	});

	return (
		<AnimatePresence>
			{isAnimated === true && (
				<Button
					size="icon"
					className="rounded-full fixed bottom-20 left-10 md:left-20 z-50"
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					asChild
				>
					<motion.button
						animate={{
							y: [0, -20, 0],
						}}
						transition={{
							duration: 1,
							repeat: Infinity,
							repeatType: 'loop',
							ease: 'easeInOut',
						}}
						exit={{
							y: 100,
							transition: { repeat: 0 },
						}}
						whileHover={{
							y: 0,
							transition: { repeat: 0 },
						}}
					>
						<ChevronUp />
					</motion.button>
				</Button>
			)}
		</AnimatePresence>
	);
};

export default ScrollTopButton;
