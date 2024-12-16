import { useState } from "react";

interface Project {
  id: number;
  title: string;
}

interface Props {
  projects: Project[];
  isDark: boolean;
}

function ProjectList({ projects, isDark }: Props) {
  const [extended, setExtended] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2
          className={`text-xl font-medium ${
            isDark ? "text-gray-300" : "text-gray-800"
          } xl:text-2xl`}
        >
          Projects
        </h2>

        <button
          className={`text-md font-bold ${
            isDark ? "text-gray-300" : "text-gray-800"
          } xl:text-lg`}
          onClick={() => setExtended(!extended)}
        >
          {extended ? "Show Less" : "Show More"}
        </button>
      </div>

      {extended ? (
        <ul className="grid grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <article
                className={`px-4 py-2 ${
                  isDark ? "bg-gray-700" : "bg-gray-400"
                } mx-2 my-2 rounded`}
              >
                <h3
                  className={`text-lg font-medium ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  } xl:text-2xl`}
                >
                  {project.title}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <li key={project.id}>
              <article
                className={`px-4 py-2 ${
                  isDark ? "bg-gray-700" : "bg-gray-400"
                } mx-2 my-2 rounded`}
              >
                <h3
                  className={`text-lg font-medium ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  } xl:text-2xl`}
                >
                  {project.title}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProjectList;
