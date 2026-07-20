'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Icon } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { GalleryProject } from '@/lib/projects';

function PhotoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m21 16-5-5L5 21" />
    </svg>
  );
}

export function ProjectsGallery({ projects }: { projects: GalleryProject[] }) {
  const reduceMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState<GalleryProject | null>(
    null,
  );
  const [imageIndex, setImageIndex] = useState(0);

  const openProject = useCallback((project: GalleryProject) => {
    if (project.photoCount === 0) return;
    setActiveProject(project);
    setImageIndex(0);
  }, []);

  const closeLightbox = useCallback(() => setActiveProject(null), []);

  const showNext = useCallback(() => {
    if (!activeProject) return;
    const count = activeProject.images.length;
    setImageIndex((i) => (i + 1) % count);
  }, [activeProject]);

  const showPrev = useCallback(() => {
    if (!activeProject) return;
    const count = activeProject.images.length;
    setImageIndex((i) => (i - 1 + count) % count);
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      else if (event.key === 'ArrowRight') showNext();
      else if (event.key === 'ArrowLeft') showPrev();
    };

    document.addEventListener('keydown', onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [activeProject, closeLightbox, showNext, showPrev]);

  const currentImage = activeProject
    ? activeProject.images[imageIndex]
    : undefined;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => {
          const hasPhotos = project.photoCount > 0;
          return (
            <motion.article
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sand bg-bone shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-copper-300 hover:shadow-lift"
            >
              <button
                type="button"
                onClick={() => openProject(project)}
                disabled={!hasPhotos}
                aria-label={
                  hasPhotos
                    ? `Open ${project.title} gallery (${project.photoCount} photos)`
                    : `${project.title} — photos coming soon`
                }
                className="relative block aspect-[4/3] w-full overflow-hidden bg-graphite-800 focus-visible:outline-none disabled:cursor-default"
              >
                {hasPhotos && project.cover ? (
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    loading="lazy"
                    quality={90}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-bone/50">
                    <PhotoIcon className="h-8 w-8" />
                    <span className="text-xs font-medium uppercase tracking-wide">
                      Photos coming soon
                    </span>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite-900/70 via-graphite-900/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                {hasPhotos && (
                  <>
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-bone/15 px-3 py-1 text-xs font-semibold text-bone backdrop-blur-md">
                      <PhotoIcon className="h-3.5 w-3.5" />
                      {project.photoCount}{' '}
                      {project.photoCount === 1 ? 'Photo' : 'Photos'}
                    </span>
                    <span className="absolute bottom-4 right-4 inline-flex translate-y-1 items-center gap-1.5 rounded-full bg-copper-gradient px-3.5 py-1.5 text-xs font-semibold text-bone opacity-0 shadow-copper transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View gallery
                      <Icon name="arrowRight" className="h-3.5 w-3.5" />
                    </span>
                  </>
                )}
              </button>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-semibold tracking-tight text-graphite-900">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-graphite-500">
                  {project.category}
                </p>
                <p className="mt-3 text-graphite-600">{project.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-graphite-900/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} gallery`}
            onClick={closeLightbox}
          >
            <div className="flex items-center justify-between px-5 py-4 text-bone sm:px-8">
              <div className="min-w-0">
                <p className="truncate font-display text-lg font-semibold">
                  {activeProject.title}
                </p>
                <p className="text-sm text-bone/60">
                  {imageIndex + 1} / {activeProject.images.length}
                </p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close gallery"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/20 bg-bone/5 text-bone transition-colors hover:border-copper-400/50 hover:bg-bone/10"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <div
              className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4 sm:px-16"
              onClick={(event) => event.stopPropagation()}
            >
              {activeProject.images.length > 1 && (
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bone/20 bg-graphite-800/80 text-bone transition-colors hover:border-copper-400/50 hover:bg-graphite-700 sm:left-4"
                >
                  <Icon name="arrowRight" className="h-5 w-5 -scale-x-100" />
                </button>
              )}

              <AnimatePresence mode="wait" initial={false}>
                {currentImage && (
                  <motion.div
                    key={imageIndex}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full max-h-[72vh] w-full max-w-5xl"
                  >
                    <Image
                      src={currentImage}
                      alt={`${activeProject.title} — photo ${imageIndex + 1}`}
                      fill
                      quality={95}
                      sizes="100vw"
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {activeProject.images.length > 1 && (
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-bone/20 bg-graphite-800/80 text-bone transition-colors hover:border-copper-400/50 hover:bg-graphite-700 sm:right-4"
                >
                  <Icon name="arrowRight" className="h-5 w-5" />
                </button>
              )}
            </div>

            {activeProject.images.length > 1 && (
              <div
                className="flex justify-center gap-2 overflow-x-auto px-4 pb-5 sm:pb-6"
                onClick={(event) => event.stopPropagation()}
              >
                {activeProject.images.map((image, i) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setImageIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    aria-current={i === imageIndex}
                    className={cn(
                      'relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-16 sm:w-16',
                      i === imageIndex
                        ? 'border-copper-400 opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-90',
                    )}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
