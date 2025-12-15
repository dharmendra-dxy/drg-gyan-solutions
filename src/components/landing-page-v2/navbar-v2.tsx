import Button from "../common/button";
import Container from "../common/container";

const navLinks = ["Home", "About", "Services", "Contact"];

export default function NavbarV2() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="h-8 w-8 rounded-full bg-emerald-800 text-white flex items-center justify-center">
            P
          </span>
          Prodmast
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
        <div className="hidden md:block">
          <Button>Sign Up</Button>
        </div>

        {/* Mobile Menu Placeholder */}
        <button className="md:hidden text-gray-700">☰</button>
      </Container>
    </header>
  );
}
