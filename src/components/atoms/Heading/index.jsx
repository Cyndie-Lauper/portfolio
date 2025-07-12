import HeadingSVG from './HeadingSVG';

export function Heading({ title, className = '', as: Tag = 'h2', animated = false  }) {
  return (
    <div className={`section-heading select-none ${className}`}>
      <div className={`heading flex ${animated ? 'translate-y-56' : ''} items-center justify-center space-x-[3%]`}>
        <HeadingSVG />
        <Tag className="w-fit text-5xl sm:text-heading-2 font-medium uppercase text-secondary-600">
          {title}
        </Tag>
        <HeadingSVG />
      </div>
    </div>
  );
}
