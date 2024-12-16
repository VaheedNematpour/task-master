import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Project {
  id: number;
  title: string;
}

function useProject() {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: () =>
      axios
        .get<Project[]>("http://localhost:8000/prj/projects/")
        .then((res) => res.data),
  });
}

export default useProject;
