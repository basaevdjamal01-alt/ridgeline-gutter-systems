import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { CtaBand } from '@/components/sections/CtaBand';
import { ProjectsGallery } from '@/components/sections/ProjectsGallery';
import { getProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Completed Gutter Projects',
  description:
    'Browse completed seamless gutter installations, gutter guard projects, and residential replacements by GUTTER FLOW MASTER across Minnesota, Wisconsin, and North Dakota.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Completed gutter projects"
        lead="A look at real seamless gutter systems, guard installations, and full replacements we’ve completed for homeowners. Tap any project to browse the full photo gallery."
        crumbs={[{ label: 'Projects' }]}
      />

      <Section tone="bone">
        <Container>
          <ProjectsGallery projects={projects} />
        </Container>
      </Section>

      <CtaBand title="Ready to discuss your gutter project?" />
    </>
  );
}
