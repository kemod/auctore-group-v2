export interface Collection {
  title: string;
  description: string;
}

export interface BrandDetailProps {
  name: string;
  category: string;

  heroImage: string;
  storyImage: string;

  gallery: string[];

  collections: Collection[];
}