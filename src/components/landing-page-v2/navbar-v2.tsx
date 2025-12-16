import Image from "next/image";
import Button from "../common/button";
import Container from "../common/container";

const navLinks = ["Home", "About", "Services", "Contact"];

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
          {navLinks.map((item) => (
            <a key={item} href="#" className="hover:text-emerald-800">
              {item}
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
