import Image from "next/image";
import Button from "../common/button";
import Container from "../common/container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function NavbarV2() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center font-semibold text-lg">
          <Image
            src="/landing-page/gyan-solution-logo.png"
            alt="gs-logo"
            width={40}
            height={40}
          />
          GyanSolution
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
  {navLinks.map(({ href, label }) => (
    <a key={label} href={href} className="hover:text-emerald-800">
      {label}
    </a>
  ))}
</nav>

        {/* CTA */}
        <div className="">
          <Button>Get Quotations</Button>
        </div>
      </Container>
    </header>
  );
}
