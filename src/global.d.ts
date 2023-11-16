export {};

declare global {
  interface FeatureItem {
    id: string;
    index?: number;
    imageUri: string;
    title: string;
    description: string;
    path: string;
  }
}
