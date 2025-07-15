import Header from '@/components/header';
import ScrollTopButton from '@/components/utils/scroll-top-button';
import { createFileRoute, Outlet } from '@tanstack/react-router';
export const Route = createFileRoute('/_layout')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="w-full pt-[130px]">
			<ScrollTopButton />
			<Header />
			<Outlet />
		</main>
	);
}
