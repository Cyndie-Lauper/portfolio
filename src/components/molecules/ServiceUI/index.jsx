import { useRef } from 'react';
import { useServiceUiAnimation } from './useServiceUiAnimation';
import { ServiceItem } from '../../atoms';

export function ServiceUi({ title, description, items }) {
  const serviceUi = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);
  const services = useRef(null);
  const line = useRef(null);

  useServiceUiAnimation({ serviceUi, heading, body, services, line });

  return (
    <div
      ref={serviceUi}
      className=" mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-24"
    >
      <div className="space-y-6">
        <div className="space-y-3 2xl:space-y-10">
          <h3
            ref={heading}
            className="text-heading-3 2xl:text-7xl font-semibold leading-tight  translate-y-10 opacity-0"
          >
            {title}
          </h3>
          <p
            ref={body}
            className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl  translate-y-10 opacity-0"
          >
            {description}
          </p>
        </div>
        <div
          ref={line}
          className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"
        ></div>
      </div>

      <div
        ref={services}
        className=" select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem]  translate-y-10 opacity-0"
      >
        {items.map((item, index) => (
          <ServiceItem key={`service-${item}`}>{item}</ServiceItem>
        ))}
      </div>
    </div>
  );
}
