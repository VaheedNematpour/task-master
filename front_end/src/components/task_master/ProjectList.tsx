import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Project {
  id: number;
  title: string;
}

interface Props {
  isDark: boolean;
}

function ProjectList({ isDark }: Props) {
  const { data } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: () =>
      axios
        .get<Project[]>("http://localhost:8000/prj/projects/")
        .then((res) => res.data),
  });

  return (
    <>
      <h2
        className={`text-xl ${
          isDark ? "text-gray-300" : "text-gray-800"
        } font-medium xl:text-2xl`}
      >
        Projects
      </h2>

      <ul>
        {data &&
          data.map((project) => <li key={project.id}>{project.title}</li>)}
      </ul>
    </>
  );
}

export default ProjectList;
