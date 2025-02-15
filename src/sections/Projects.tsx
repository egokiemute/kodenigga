import darkSaasLandingPage from "@/assets/images/flextable.png";
import lightSaasLandingPage from "@/assets/images/vimerge.png";
import aiStartupLandingPage from "@/assets/images/lyde.png";
import snowWiseWebsite from "@/assets/images/snowwise.png";
import christakeWebsite from "@/assets/images/christak.png";
import grainImage from "@/assets/images/grain.jpg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Flextable",
    year: "2024",
    title: "Wherever work takes you, we'll find the space",
    results: [
      { title: "User Experience Optimization by 40%" },
      { title: "Performance Enhancements by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://flextable.co",
    image: darkSaasLandingPage,
  },
  {
    company: "Vimerge Studio",
    year: "2024",
    title: "Design studio for christian creatives.",
    results: [
      { title: "Dynamic Content Management (+40%)" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://www.vimerge.studio/",
    image: lightSaasLandingPage,
  },
  {
    company: "Lyde Cleaning Service Uk",
    year: "2024",
    title: "Professional cleaning service you can trust.",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Optimized Asset Loading by +50%" },
      { title: "Mobile Responsiveness Improvements" },
    ],
    link: "https://lydeltd.co.uk/",
    image: aiStartupLandingPage,
  },
  {
    company: "Snow Wise Experience",
    year: "2024",
    title: "Transforming idea to exceptional experience.",
    results: [
      { title: "Load Time Optimization by 50%" },
      { title: "Load Time Optimization" },
      { title: "Strengthened the business by refining digital presence" },
    ],
    link: "https://snowwiseltd.co.uk/",
    image: snowWiseWebsite,
  },
  {
    company: "Christak Innovations Limited",
    year: "2024",
    title: "We're committed to elevating lives, spaces, and supply chains through innovative solutions and unparalleled service.",
    results: [
      { title: "Strengthened the business by refining digital presence" },
    ],
    link: "https://www.christak.co.uk/",
    image: christakeWebsite,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="z-[1000] bg-white mb-16">
      <div className="container md:px-0">
        <div className="flex justify-center">
          <h2 className="uppercase text-sm font-semibold tracking-widest bg-gradient-to-tr from-slate-500 to-slate-950 text-transparent bg-clip-text">
            Real-world projects
          </h2>
        </div>
        <p className="text-center text-black/60 text-2xl md:text-3xl my-3 max-w-md mx-auto mb-12">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 gap-10">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-transparent rounded-3xl z-0 overflow-hidden relative after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/40 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="flex items-center gap-2 font-semibold text-black/40 text-sm uppercase">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span className="text-black/60 text-base">{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-gray-900 mt-4" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li key={result.title} className="flex gap-1 text-sm text-gray-500">
                    <CheckCircleIcon className="size-5" />
                    {result.title}
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-black text-white h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-6">
                  <span>View Live Project</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              <Image
                className="mt-8 -mb-4"
                src={project.image}
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
