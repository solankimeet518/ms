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
    href: '#mcp-erp-system',
    description: 'Rust, Axum, SeaORM, and React enterprise accounting platform.',
  },
  {
    title: 'Local Client Software',
    href: '#local-client-software',
    description: 'Docker, DigitalOcean, and Next.js digital transformations.',
  },
  {
    title: 'Next.js Stripe Chat App',
    href: '#nextjs-stripe-chat-app',
    description: 'Subscription-based socket chat application with Stripe.',
  },
  {
    title: 'Vue Video Editor & FFmpeg',
    href: '#cloud-based-video-editor',
    description: 'Web video timeline editor with backend server-side FFmpeg rendering.',
  },
  {
    title: 'Sumeet Shipping System',
    href: '#sumeet-shipping-management-system',
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
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#skill-section">
            Skills
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="mailto:solankimeet518+portfolio@gmail.com">
            Contact
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
      <NavigationMenuLink href={href}>
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  );
}
