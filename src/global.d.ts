export {};

declare global {
    interface FeatureItem {
        id: string;
        idx: number;
        imageUri: string;
        title: string;
        description: string;
        path: string;
    }
}
