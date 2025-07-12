import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocialLink, ContactFill, Heading } from '../../../components';
import { sendEmail } from '../../../services/emailService';
import { useSectionRevealAnimation } from '../../../hooks/useSectionRevealAnimation';

export function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const heading = useRef(null);
  const body = useRef(null);
  const contactSection = useRef(null);
  const form = useRef();
  const navigate = useNavigate();

  const handleSendEmail = (e) => {
    e.preventDefault();
    sendEmail(form.current)
      .then(() => {
        console.log('SUCCESS!');
        navigate('/success');
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
      });
  };

  useSectionRevealAnimation({
    sectionRef: contactSection,
    headingRef: heading,
    bodyRef: body,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      <Heading title="Contact" />
      <div
        ref={contactSection}
        className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12"
      >
        <div className="col-span-4">
          <h3
            ref={heading}
            className="max-w-lg translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:max-w-3xl 2xl:text-7xl"
          >
            Have an awesome idea? Let&apos;s bring it to life.
          </h3>
          <p
            ref={body}
            className="mt-4 max-w-md translate-y-10 text-body-2 text-accent-100 opacity-0 2xl:max-w-2xl 2xl:text-4xl"
          >
            I am currently not available for freelance work. I am accepting new
            projects starting from February 2022.
          </p>
          <form
            ref={form}
            onSubmit={handleSendEmail}
            name="contact"
            autoComplete="off"
            className="mt-10 font-grotesk"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <ContactFill
                label="Your name"
                type="text"
                id="name"
                name="user_name"
                placeholder=""
              />
              <ContactFill
                label="Your email"
                type="email"
                id="email"
                name="user_email"
                placeholder=""
              />
              <ContactFill
                label="Your message"
                type="textarea"
                id="message"
                name="message"
                placeholder=""
                className="sm:col-span-2"
              />
            </div>
            <button
              type="submit"
              value="send"
              className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
            >
              <span className="relative">
                <span className="absolute bottom-2 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
                <span className="group-hover:text-accent-400">
                  Send Message
                </span>
              </span>
            </button>
          </form>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              Contact Details
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:diLauper0@gmail.com"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>diLauper0@gmail.com</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">
              My Digital Spaces
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <SocialLink href="https://bento.me/himn" icon="simple-icons:bento">Bento</SocialLink>
              <SocialLink href="https://github.com/Cyndie-Lauper" icon="mdi:github">Github</SocialLink>
              <SocialLink href="https://www.linkedin.com/" icon="mdi:linkedin">LinkedIn</SocialLink>
              <SocialLink href="https://www.youtube.com/channel/UCU47_ySWDoZT8z_f9t5hD1A" icon="mdi:youtube">YouTube</SocialLink>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                Ho Chi Minh City, Viet Nam <br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
