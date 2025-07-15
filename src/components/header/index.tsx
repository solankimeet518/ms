import { AppNavigationMenu } from './app-navigation-menu';
import { useScroll, useTransform, motion, AnimatePresence } from 'motion/react';
import LogoSvg from '@/assets/image/logo.svg?react';
import { Button } from '@/shadcn/ui/button';
import { useThemeStore } from '@/store/themeStore';
import { MoonIcon, SunIcon } from 'lucide-react';
import useWindowDimensions from '@/hooks/use-window-dimensions';
import MobileNavigationMenu from './mobile-navigation-menu';

const Header = () => {
	const { scrollY } = useScroll();
	const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
	const top = useTransform(scrollY, [0, 100], [50, 20]);
	const borderWidth = useTransform(scrollY, [0, 50], [0, 1]);

	const themeStore = useThemeStore();
	const { width } = useWindowDimensions();

	return (
		<motion.header
			className="p-4 w-[95%] fixed left-[2.5%] backdrop-blur-xl rounded-xl flex justify-between border z-40"
			style={{ scale, top, borderWidth }}
		>
			<LogoSvg />

			<div className="flex gap-2">
				{width > 768 ? (
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
						>
							<AppNavigationMenu />
						</motion.div>
					</AnimatePresence>
				) : (
					<AnimatePresence>
						<MobileNavigationMenu />
					</AnimatePresence>
				)}

				<Button variant="ghost" size="icon" onClick={() => themeStore.toggle()}>
					<motion.span animate={{ rotate: 360 }} key={themeStore.theme}>
						{themeStore.theme === 'dark' ? (
							<SunIcon fill="white" />
						) : (
							<MoonIcon fill="currentColor" />
						)}
					</motion.span>
				</Button>
			</div>
		</motion.header>
	);
};

export default Header;
