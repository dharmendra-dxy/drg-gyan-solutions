import Button from "../common/button";
import Container from "../common/container";

export default function HeroSectionV2() {
  return (
    <section className="bg-gray-50 pt-20 pb-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
            End-to-End Thesis <br />
            <span className="text-emerald-800">
              {" "}
              Research Paper & Patent Support
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            We help M.Tech and PhD scholars transform ideas into high-quality
            research outputs. From topic selection to final submission,
            publication, and patent drafting—our academic experts ensure
            accuracy, originality, and timely delivery.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Try Demo</Button>
          </div>

          {/* Rating */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm">
            <div className="flex text-yellow-400">★★★★★</div>
            <span className="text-gray-600">
              4.1 from <span className="underline">80+ reviews</span>
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="100+" desc="Our Esteemed Clients and Partners" />
          <StatHighlight />
          <StatCard title="6+" desc="Years of Dedicated Service" light />
          <StatDark />
        </div>
      </Container>
    </section>
  );
}

/* --- Sub Components --- */

function StatCard({
  title,
  desc,
  light = false,
}: {
  title: string;
  desc: string;
  light?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 ${
        light ? "bg-emerald-100" : "bg-emerald-900 text-white"
      }`}
    >
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{desc}</p>
    </div>
  );
}

function StatHighlight() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">Total Projects</p>
      <h3 className="mt-2 text-3xl font-semibold text-gray-900">1951+</h3>
      <p className="mt-1 text-xs text-emerald-700">
        Increase of 126 this month
      </p>
    </div>
  );
}

function StatDark() {
  return (
    <div className="rounded-2xl bg-emerald-950 p-6 text-white">
      <h3 className="text-lg font-medium">
        Achieve Optimal Efficiency and Boost Productivity
      </h3>
    </div>
  );
}
