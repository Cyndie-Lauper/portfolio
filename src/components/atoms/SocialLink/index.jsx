import { Icon } from '@iconify/react';

export function SocialLink({ href, icon, children, iconColor = "#666" }) {
  return (
    <a
      href={href}
      className="group flex items-center space-x-2"
      target="_blank"
      rel="noreferrer"
    >
      <Icon icon={icon} color={iconColor} />
      <div className="relative">
        <span>{children}</span>
        <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
      </div>
    </a>
  );
}
