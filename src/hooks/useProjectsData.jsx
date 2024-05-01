import { useQuery } from "react-query";

const useProjectsData = (url) => {
    return useQuery('projectsData', async()=>{
        const response =  await fetch(url);
        if(!response.ok){
            throw new Error('NETWORK RESPONSE FAILED')
        }
        return response.json();
    })
  
}

export default useProjectsData