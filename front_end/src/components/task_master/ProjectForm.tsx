interface Props {
  isDark: boolean;
}

function ProjectForm({ isDark }: Props) {
  return (
    <>
      <h2
        className={`my-3 text-xl font-medium ${
          isDark ? "text-gray-300" : "text-gray-800"
        } xl:text-2xl`}
      >
        Add Projects
      </h2>

      <form>
        <div className="space-y-2">
          <label
            htmlFor="title"
            className={`my-3 text-lg font-medium ${
              isDark ? "text-gray-300" : "text-gray-800"
            } xl:text-xl`}
          >
            Title
          </label>
          <input
            type="text"
            className={`block w-full rounded px-3 py-2 text-lg ${
              isDark ? "bg-gray-700 text-gray-300" : "bg-gray-400 text-gray-800"
            }`}
          />
        </div>

        <button
          className={`my-2 w-full py-2 text-lg border-2 border-gray-800 rounded ${
            isDark
              ? "border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-800"
              : "border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-300"
          }`}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default ProjectForm;
