import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section';
import ServiceSection from '@/components/service-section';
import SkillSection from '@/components/skill-section';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-4">
			<HeroSection />
		
			<ServiceSection />

			<SkillSection />

			<FooterSection />
		</div>
	);
}
