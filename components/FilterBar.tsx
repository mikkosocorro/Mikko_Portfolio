interface FilterBarProps<T extends string> {
  options: readonly T[];
  active: T;
  onChange: (value: T) => void;
  label: string;
}

export default function FilterBar<T extends string>({
  options,
  active,
  onChange,
  label,
}: FilterBarProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-wrap justify-center gap-3"
    >
      {options.map((option) => {
        const selected = option === active;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option)}
            className={`rounded-full border px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              selected
                ? "border-accent bg-accent text-white shadow-blue"
                : "border-white/10 bg-white/[0.03] text-gray-400 hover:-translate-y-0.5 hover:border-glow/60 hover:text-white"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
