// import { useQuery } from "react-query";
// import { dummyProjects } from "@/data/data";
// import { QueryClient } from 'react-query';
// export const queryClient = new QueryClient();

// const useProjectsData = (url) => {
//     return useQuery('projects', () => new Promise((resolve) => resolve(dummyProjects)));
  
// }

// export default useProjectsData

// import { useQuery } from "react-query";
// import { dummyProjects } from "@/data/data";

// const useProjectsData = () => {
//   return useQuery('projects', () => new Promise((resolve) => resolve(dummyProjects)));
// };

// export default useProjectsData;

import { useQuery } from 'react-query';
import { dummyProjects } from '@/data/data';

const useProjectsData = () => {
  return useQuery('projects', async () => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyProjects);
      }, 1000);
    });
  });
};

export default useProjectsData;
