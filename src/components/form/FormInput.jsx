export function FormInput({ label, type, name, placeholder, onChange, value }) {
  return (
    <div className="my-5">
      <label
        htmlFor={label}
        className="block text-slate-600 text-sm font-bold mb-2"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="w-full p-2 border border-gray-300 rounded placeholder:opacity-50 text-slate-600 dark:border-slate-700"
        />
      ) : (
        <input
          id={label}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className="w-full p-2 border border-gray-300 rounded placeholder:opacity-50 text-slate-600 dark:border-slate-700"
        />
      )}
    </div>
  );
}
