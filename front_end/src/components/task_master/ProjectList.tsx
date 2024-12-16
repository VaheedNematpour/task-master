import useProject from "./hooks/useProject";

interface Props {
  isDark: boolean;
}

function ProjectList({ isDark }: Props) {
  const { data } = useProject();

  return (
    <>
      <h2
        className={`text-xl ${
          isDark ? "text-gray-300" : "text-gray-800"
        } font-medium xl:text-2xl`}
      >
        Projects
      </h2>

      <ul className="grid grid-cols-3">
        {data &&
          data.map((project) => (
            <li
              key={project.id}
              className={`px-3 py-6 my-3 mx-2 ${
                isDark
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-400 text-gray-700"
              } text-lg rounded shadow`}
            >
              <article>
                <h3>{project.title}</h3>
              </article>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ProjectList;
