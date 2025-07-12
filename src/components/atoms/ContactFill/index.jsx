export function ContactFill({ label, type, id, name, className, placeholder }) {
  return (
    <div className={`relative z-0 ${className}`}>
      <input
        required
        type={type}
        id={id}
        name={name}
        className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 2xl:text-body-2"
      >
        {label}
      </label>
    </div>
  );
}
