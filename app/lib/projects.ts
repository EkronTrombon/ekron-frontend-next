import { Project } from '@/app/types/project';
import projectsData from '@/app/data/projects.json';

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getRecentProjects(count: number = 2): Project[] {
  return projectsData.slice(0, count) as Project[];
}
