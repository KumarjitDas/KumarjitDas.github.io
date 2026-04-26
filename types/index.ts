export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  longDescription?: string;
  repoUrl?: string;
  liveUrl?: string;
}
