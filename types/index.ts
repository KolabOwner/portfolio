// types/index.ts

export interface BlogPost {
  id: string;
  title: string;
  description?: string;
  link: string;
  date: string;
}

export interface ShowcaseImage {
  id: string;
  src: string;
  alt: string;
}