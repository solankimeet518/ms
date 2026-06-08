'use client';

import * as React from 'react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/shadcn/ui/navigation-menu';

const works = [
	{
		title: 'MCP ERP System',
		href: '#projects-section',
		description: 'Rust, Axum, SeaORM, and React enterprise accounting platform.',
	},
	{
		title: 'Local Client Software',
		href: '#projects-section',
		description: 'Docker, DigitalOcean, and Next.js digital transformations.',
	},
	{
		title: 'Next.js Stripe Chat App',
		href: '#projects-section',
		description: 'Subscription-based socket chat application with Stripe.',
	},
	{
		title: 'Vue Video Editor & FFmpeg',
		href: '#projects-section',
		description: 'Web video timeline editor with backend server-side FFmpeg rendering.',
	},
	{
		title: 'Sumeet Shipping System',
		href: '#projects-section',
		description: 'React & Flutter shipping query management software.',
	},
];

export function AppNavigationMenu() {
	return (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Works</NavigationMenuTrigger>
					<NavigationMenuContent className="left-auto right-0">
						<ul className="grid w-[300px] md:w-[350px] lg:w-[400px] gap-2">
							{works.map((work) => (
								<ListItem key={work.title} title={work.title} href={work.href}>
									{work.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<a href="#skill-section">Skills</a>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<a href="mailto:solankimeet518+portfolio@gmail.com">Contact</a>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<a href={href}>
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
}
