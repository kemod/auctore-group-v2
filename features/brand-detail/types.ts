import { ReactNode } from "react";

export interface Collection {
  title: string;
  description: string;
}

export interface BrandDetailProps {
  name: string;
  category: string;

  heroImage: string;
  storyImage: string;

  description: string;

  collections: Collection[];

  gallery: string[];

  galleryTitle: ReactNode;
  galleryDescription: string;
}