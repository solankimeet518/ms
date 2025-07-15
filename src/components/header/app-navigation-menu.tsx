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

const works: { title: string; href: string; description: string }[] = [];

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
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent className="left-auto right-0">
						<ul className="grid w-[300px] md:w-[350px] lg:w-[400px] gap-2">
							{services.map((service) => (
								<ListItem key={service.title} title={service.title} href={''}>
									{service.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<a href="/docs">Book Now</a>
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
