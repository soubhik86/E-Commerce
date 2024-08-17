import { useQuery } from "@tanstack/react-query"
import { fetchuser, getProductById } from "../api/ApiHandler"



export const userGetQueries = ()=>{
  return useQuery({
     queryKey: ['todos'],
      queryFn: fetchuser
    
    });
  
}

export const productGetByIdQuaries = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};