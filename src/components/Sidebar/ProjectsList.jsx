export default function ProjectsList({ items, onLiftProject, selectedProjectId }) {
  return (
    <ul>
      {items.map((project) => {
        let cssClasses = "px-2 py-1 w-full text-left rounded-sm my-1";

        if (project.id === selectedProjectId) {
          cssClasses += " bg-stone-800 text-stone-200"
        } else {
          cssClasses += " text-stone-400"
        }

        return (
          <li key={project.id}>
            <button
              className={cssClasses}
              onClick={() => onLiftProject(project.id)}
            >
              {project.title}
            </button>
          </li>
        )
      })}
    </ul>
  );
}
