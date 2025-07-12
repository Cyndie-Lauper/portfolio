export function FooterNavLink({ href, children }) {
  return (
    <a href={href} className="group relative hidden md:inline-block">
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
    </a>
  );
}
