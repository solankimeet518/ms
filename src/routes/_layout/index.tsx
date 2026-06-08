import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section';
import SkillSection from '@/components/skill-section';
import JourneySection from '@/components/journey-section';
import ProjectsSection from '@/components/projects-section';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-16 pt-12 py-24">
      <HeroSection />

      <JourneySection />

      <ProjectsSection />

      <SkillSection />

      <FooterSection />
    </div>
  );
}
