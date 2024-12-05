import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLinks = [
  {
    title: "X",
    href: "https://www.x.com/egokiemute",
  },
  {
    title: "GitHub",
    href: "https://www.github.com/egokiemute",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/egokiphovwenokiemute",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/egokiphovwenokiemute",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gray-500/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-20" />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-4">
          <nav className="flex text-sm items-center gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-center gap-2 hover:underline transition-all ease-in duration-300"
              >
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-3" />
              </Link>
            ))}
          </nav>
          <div className="text-sm opacity-30">&copy; 2024. All rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};
