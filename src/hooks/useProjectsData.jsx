
// import { useQuery } from 'react-query';

// const useProjectsData = () => {
//   // return useQuery('projects', async () => {
//   //   return await new Promise((resolve) => {
//   //     setTimeout(() => {
//   //       resolve(dummyProjects);
//   //     }, 1000);
//   //   });
//   // });
//   return useQuery('projects', async (url) => {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
// };

// export default useProjectsData;
