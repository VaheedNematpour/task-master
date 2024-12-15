interface Props {
  isDark: boolean;
  handleDark: () => void;
}

function NavBar({ isDark, handleDark }: Props) {
  return (
    <>
      <nav className="flex items-center justify-between">
        <h1
          className={`text-xl ${
            isDark ? "text-gray-300" : "text-gray-800"
          } font-medium xl:text-3xl`}
        >
          Task Master
        </h1>

        <button
          className={`text-lg ${
            isDark ? "text-gray-300" : "text-gray-800"
          } xl:text-xl`}
          onClick={handleDark}
        >
          {isDark ? "Set Light" : "Set Dark"}
        </button>
      </nav>
    </>
  );
}

export default NavBar;
