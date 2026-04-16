// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Post {
      slug: string;
      title: string;
      description: string;
      date: string;
      published: boolean;
      image?: string;
      categories?: string[];
    }
    interface PageData {
      posts?: Post[];
      meta?: Partial<Post>;
      content?: unknown;
    }
  }
}

export {};
