import { Linkedin, Instagram, Facebook } from "lucide-react";
import Container from "../common/container";
import Image from "next/image";

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>

      <ul className="mt-4 space-y-3 text-sm text-gray-300">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-white transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white hover:text-black transition"
    >
      <Icon size={16} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <Container>
        {/* Top Section */}
        <div className="grid gap-10 py-20 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center font-semibold text-lg">
              <Image
                src="/landing-page/gyan-solution-logo.png"
                alt="gs-logo"
                width={40}
                height={40}
              />
              GyanSolution
            </div>

            <p className="mt-4 text-sm text-emerald-200/80 max-w-xs">
              Our solutions make production faster and cheaper. Contact us for
              more information.
            </p>
          </div>

          {/* Company */}
          <FooterColumn
            title="Company"
            links={["About Us", "Customers", "Newsroom", "Events"]}
          />

          {/* Industries */}
          <FooterColumn
            title="Industries"
            links={[
              "Precision Metalforming",
              "Industrial Manufacturing",
              "High Tech & Electronics",
              "Aerospace",
            ]}
          />

          {/* Products */}
          <FooterColumn
            title="Products"
            links={[
              "Manufacturing Execution System",
              "Enterprise Resource Planning",
              "Quality Management System",
              "Supply Chain Planning",
            ]}
          />

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Get In Touch</h4>

            <a
              href="mailto:hallo@prodmast.com"
              className="mt-4 block text-sm text-emerald-200 hover:text-white underline-offset-4 hover:underline"
            >
              hallo@prodmast.com
            </a>

            <div className="mt-6 flex gap-3">
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Facebook} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-emerald-800/40" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 py-6 text-sm text-emerald-200/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 GyanSolution, All rights reserved</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
