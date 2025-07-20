export default function InputLabel({ ...props }) {
  const { children, htmlFor, type, name, placeholder } = props;
  return (
    <div className="mb-6">
      <label
        htmlFor={htmlFor}
        className="block text-slate-600 text-sm font-bold mb-2"
      >
        {children}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className=" w-full p-2 border border-gray-300 rounded placeholder:opacity-50
    text-slate-600
    dark:border-slate-700"
      />
    </div>
  );
}
