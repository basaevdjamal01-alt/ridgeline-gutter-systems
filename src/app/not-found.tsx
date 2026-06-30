import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-graphite-gradient text-bone texture-grain">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" aria-hidden />
      <Container className="relative text-center">
        <p className="eyebrow flex items-center justify-center gap-3 text-copper-300">
          <span className="channel-rule" aria-hidden />
          404 — Page not found
          <span className="channel-rule" aria-hidden />
        </p>
        <h1 className="mx-auto mt-6 max-w-2xl text-display font-medium">
          This page slipped through the downspout.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-body-lg text-bone/70">
          The page you’re looking for doesn’t exist or has moved. Let’s get you
          back on solid ground.
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <Button href="/" variant="inverse" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="ghost" size="lg" className="text-bone">
            Get a free estimate
          </Button>
        </div>
      </Container>
    </section>
  );
}
