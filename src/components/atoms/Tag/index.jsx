export function Tag({ children }) {
  return (
    <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4 2xl:text-3xl">
      {children}
    </p>
  );
}
