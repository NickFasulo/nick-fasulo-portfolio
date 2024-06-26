import Image from 'next/image';
import { projects } from '@/data/config';

export default function Projects() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className="mt-8">
        {projects.projects.map((item, i) => {
          return (
            <div
              key={i}
              className="p-6 border border-lightText rounded-xl mb-4"
            >
              <h3 className="ml-2 mb-6">{item.title}</h3>
              <div className="border border-lightText rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  width="20rem"
                  height="11rem"
                  layout="responsive"
                  alt={`${item.title} image`}
                />
              </div>
              <p className="mt-2">{item.description}</p>
              <div className="flex items-left flex-col pt-5">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex items-center py-1 px-3 w-fit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2">
                      Demo &larr;
                    </span>
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    className="flex items-center py-1 px-3 w-fit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Github icon"
                    />
                    <span className="ml-2">
                      Github &larr;
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
