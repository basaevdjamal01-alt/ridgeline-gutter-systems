import fs from 'node:fs';
import path from 'node:path';

export type GalleryProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  cover: string | null;
  photoCount: number;
};

type ProjectMeta = {
  slug: string;
  title: string;
  category: string;
  description: string;
};

/**
 * Real completed projects. Photos live in:
 *   public/images/projects/<slug>/01.jpg, 02.jpg, ...
 * The first image (sorted) is used as the cover. Filenames are not hardcoded —
 * every image found in the folder is included automatically.
 */
const PROJECTS_META: ProjectMeta[] = [
  {
    slug: 'project-01',
    title: 'Seamless Gutter Installation',
    category: 'Residential Installation',
    description:
      'Professional seamless aluminum gutter installation with clean finish and proper drainage.',
  },
  {
    slug: 'project-02',
    title: 'Gutter Guards Installation',
    category: 'Gutter Guard Project',
    description:
      'Premium gutter guard installation designed to reduce debris and improve long-term performance.',
  },
  {
    slug: 'project-03',
    title: 'Residential Gutter Replacement',
    category: 'Gutter Replacement',
    description:
      'Complete residential gutter replacement with improved water management and modern appearance.',
  },
  {
    slug: 'project-04',
    title: 'Custom Seamless Gutters',
    category: 'Custom Seamless System',
    description:
      'Custom-fit seamless gutter system fabricated on-site for maximum durability and perfect fit.',
  },
];

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function readProjectImages(slug: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'projects', slug);

  let entries: string[] = [];
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return entries
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/images/projects/${slug}/${file}`);
}

export function getProjects(): GalleryProject[] {
  return PROJECTS_META.map((meta) => {
    const images = readProjectImages(meta.slug);
    return {
      slug: meta.slug,
      title: meta.title,
      category: meta.category,
      description: meta.description,
      images,
      cover: images[0] ?? null,
      photoCount: images.length,
    };
  });
}
