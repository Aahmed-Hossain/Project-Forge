import { tasks } from "@/data/data";
import { create } from "zustand";
export const useProjectStore = create((set) => ({
  projects: [],
  setProjects: (projects) => set(() => ({ projects })),

  // setProjects: (projects) => set({ projects }),
  // singleProject: (id) =>
  //   set((state) => ({
  //     project: state.projects.find((project) =>
  //     {
  //       project.id === id
  //       console.log(project) }
  //     )
  //   })),
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
}
));

export const useTasksStore = create((set) => ({
  tasks: tasks, 
  setCurrentTask: (taskId) => {
    const foundTask = tasks.find((task) => task.id === taskId);
    set({ currentTask: foundTask || null });
  },
  addTask: (newTask) => {
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
  editTask: (taskId, updatedTask) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      ),
    }));
  },
  deleteTask: (taskId) => {
    set((state) => {
      const updatedTask = state.tasks.filter(
        (task) => task.id !== taskId
      );
      return { tasks: updatedTask };
    });
  },
}));
