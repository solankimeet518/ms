import { useState, useEffect } from 'react';
import { Button } from '@/shadcn/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shadcn/ui/sheet';
import { LucideMenu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navigationItems = [
	{ title: 'Works', href: '#works' },
	{ title: 'Services', href: '#service-section' },
	{ title: 'Skills', href: '#skill-section' },
	{ title: 'Book Now', href: '/docs' },
];

const MobileNavigationSheet = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const sections = navigationItems.map(item => item.href.replace('#', ''));
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;
					
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(`#${section}`);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleItemClick = (href: string, e: React.MouseEvent) => {
		e.preventDefault();
		setIsOpen(false);
		
		// Handle scroll for anchor links
		if (href.startsWith('#')) {
			setTimeout(() => {
				const element = document.querySelector(href);
				if (element) {
					element.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					});
				}
			}, 300); // Delay to allow sheet to close first
		} else {
			// For external links, navigate normally
			setTimeout(() => {
				window.location.href = href;
			}, 300);
		}
	};

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" asChild>
					<motion.button
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						whileHover={{ 
							scale: 1.05,
							transition: { duration: 0.2 }
						}}
						whileTap={{ scale: 0.95 }}
						className="relative overflow-hidden"
					>
						<motion.div
							animate={{ rotate: isOpen ? 90 : 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<LucideMenu />
						</motion.div>
					</motion.button>
				</Button>
			</SheetTrigger>
			<SheetContent side="bottom" className="h-dvh overflow-y-scroll">
				<SheetHeader>
					<SheetTitle className="text-left text-2xl font-bold">
						Navigation
					</SheetTitle>
				</SheetHeader>
				<nav className="px-8 pb-8 flex-1 flex flex-col justify-center">
					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ 
									opacity: 1,
									scale: 1,
									transition: { 
										duration: 0.4, 
										delay: 0.1,
										ease: "easeOut"
									}
								}}
								exit={{ 
									opacity: 0,
									scale: 0.9,
									transition: { duration: 0.3 }
								}}
								className="flex flex-col items-center justify-center min-h-[60vh] py-8"
							>
								<motion.ul className="space-y-8 text-center">
									{navigationItems.map((item, index) => (
										<motion.li
											key={item.title}
											initial={{ opacity: 0, y: 50, rotateX: -90 }}
											animate={{ 
												opacity: 1, 
												y: 0,
												rotateX: 0,
												transition: { 
													delay: 0.3 + index * 0.15,
													duration: 0.6,
													ease: "easeOut",
													type: "spring",
													stiffness: 100,
													damping: 15
												}
											}}
											exit={{ 
												opacity: 0, 
												y: -30,
												rotateX: 90,
												transition: { 
													delay: (navigationItems.length - index - 1) * 0.1,
													duration: 0.4,
													ease: "easeIn"
												}
											}}
										>
											<motion.a
												href={item.href}
												onClick={(e) => handleItemClick(item.href, e)}
												className={`block text-3xl md:text-4xl font-bold transition-colors duration-300 py-6 px-8 rounded-2xl cursor-pointer ${
													activeSection === item.href 
														? 'text-primary' 
														: 'text-foreground hover:text-primary'
												}`}
												whileHover={{ 
													scale: 1.1,
													rotateY: 5,
													transition: { 
														duration: 0.3, 
														ease: "easeOut",
														type: "spring",
														stiffness: 300,
														damping: 20
													}
												}}
												whileTap={{ 
													scale: 0.95,
													rotateY: 0,
													transition: { duration: 0.2 }
												}}
												style={{
													perspective: "1000px",
													transformStyle: "preserve-3d"
												}}
											>
												<motion.div
													whileHover={{ 
														y: -8,
														textShadow: "0 10px 30px rgba(0,0,0,0.3)",
														transition: { duration: 0.3 }
													}}
													className="relative"
												>
													{item.title}
													<motion.div
														className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
															activeSection === item.href 
																? 'bg-gradient-to-r from-primary/30 to-accent/30 opacity-100' 
																: 'bg-gradient-to-r from-primary/20 to-accent/20 opacity-0'
														}`}
														whileHover={{
															opacity: activeSection === item.href ? 1 : 1,
															scale: 1.05,
															transition: { duration: 0.3 }
														}}
														style={{ zIndex: -1 }}
													/>
												</motion.div>
											</motion.a>
										</motion.li>
									))}
								</motion.ul>
								
								{/* Enhanced Decorative Elements */}
								<motion.div
									initial={{ scaleX: 0, opacity: 0 }}
									animate={{ 
										scaleX: 1, 
										opacity: 1,
										transition: { 
											delay: 0.8,
											duration: 0.8,
											ease: "easeOut"
										}
									}}
									exit={{ 
										scaleX: 0, 
										opacity: 0,
										transition: { duration: 0.4 }
									}}
									className="mt-12 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNavigationSheet;
