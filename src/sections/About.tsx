import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import Image from "next/image";
import { SiFramer, SiNextdotjs, SiReactquery, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

export const AboutSection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-center">
          <h2 className="uppercase text-sm font-semibold tracking-widest bg-gradient-to-tr from-slate-500 to-slate-950 text-transparent bg-clip-text">
            My Tools
          </h2>
        </div>
        <p className="text-center text-black/60 text-2xl md:text-3xl my-3 max-w-md mx-auto mb-6">
          A Glimpse into My Tools.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 align-middle self-center gap-4 text-center mt-4 md:mt-10 mb-20">
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <HtmlIcon className="size-8" />
            <span>HTML5</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <Css3Icon className="size-8" />
            <span>CSS3</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <JavaScriptIcon className="size-8" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <ReactIcon className="size-8" />
            <span>ReactJs</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <GitHubIcon className="size-8" />
            <span>Git/GitHub</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <SiNextdotjs className="size-8" />
            <span>NextJs</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <SiTailwindcss className="size-8" />
            <span>TailwindCSS</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <SiRedux className="size-8" />
            <span>Redux</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <SiTypescript className="size-8" />
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-600 rounded-xl p-3 w-fit">
            <SiReactquery className="size-8" />
            <span>React Query</span>
          </div>
        </div>
      </div>
    </section>
  );
};
