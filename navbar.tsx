import { buttonVariants } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = window.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <a href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="h-6 w-6 text-primary" />
          <span>DevPortfolio</span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={buttonVariants({
                  variant: isActive ? "default" : "ghost",
                  size: "sm",
                })}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}