import { Button } from '@/shadcn/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import { LucideMenu } from 'lucide-react';
import { motion } from 'motion/react';

const MobileNavigationMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" asChild>
					<motion.button
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
					>
						<LucideMenu />
					</motion.button>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Works</DropdownMenuItem>
				<DropdownMenuItem>Services</DropdownMenuItem>
				<DropdownMenuItem>Skills</DropdownMenuItem>
				<DropdownMenuItem>Work with Me</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default MobileNavigationMenu;
