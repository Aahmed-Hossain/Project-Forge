
import create from 'zustand';

export const useProjectStore = create((set) => ({
  projects: dummyProjects, 
  addProject: (newProject) =>
    set((state) => ({ projects: [...state.projects, newProject] })),
  editProject: (projectId, updatedProject) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === projectId ? updatedProject : project
      ),
    })),
}));


