import { dummyProjects } from "@/data/data";
import { create } from "zustand";
export const useProjectStore = create((set) => ({
  projects: [],
  setProjects: (projects)=>set(()=> ({projects} , console.log(projects))) ,
  addProject: (newProject) =>
    set((state) => ({ projects: [...state.projects, newProject] })),
  editProject: (projectId, updatedProject) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId ? updatedProject : project
      ),
    })),
  deleteProject: (projectId) => {
    set((state) => {
      const updatedProject = state.projects.filter(
        (project) => project.id !== projectId
      );
      return { projects: updatedProject };
    });
  },
}));
