import Image from 'next/image';
import { contact } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contact.title}
        </h2>
      </div>
      <p>
        Get in touch:&nbsp;&nbsp;
        <a
          className="dark:text-white text-black transition-colors duration-300"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </p>
      <div className="flex space-x-7 mt-5 text-lightText transition-colors duration-300">
        {contact.github && (
          <a href={contact.github} target="_blank" rel="noreferrer">
            <Image
              src="/static/icons/github.svg"
              width={24}
              height={24}
              alt="Nick Fasulo's Github"
            />
          </a>
        )}
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            <Image
              src="/static/icons/linkedin.svg"
              width={24}
              height={24}
              alt="Nick Fasulo's Linkedin"
            />
          </a>
        )}
        {contact.resume && (
          <a href={contact.resume} target="_blank" rel="noreferrer">
            <Image
              src="/static/icons/resume.svg"
              width={24}
              height={24}
              alt="Nick Fasulo's Resume"
            />
          </a>
        )}
      </div>
    </div>
  );
}
