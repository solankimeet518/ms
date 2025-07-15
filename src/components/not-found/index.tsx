import { Button } from '@/shadcn/ui/button';
import { Link } from '@tanstack/react-router';

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
			<h1 className="text-6xl font-bold text-primary mb-4">404</h1>
			<h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
			<p className="text-muted-foreground mb-6 text-center max-w-md">
				Sorry, the page you are looking for does not exist or has been moved.
			</p>
			<Button asChild>
				<Link to="/">Go back home</Link>
			</Button>
		</div>
	);
}
