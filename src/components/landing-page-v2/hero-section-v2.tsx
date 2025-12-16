import Image from "next/image";
import Container from "../common/container";
import Button from "../common/button";


function StatDarkCard({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl bg-emerald-900 p-6 text-white flex flex-col justify-end ${className}`}
    >
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{description}</p>
    </div>
  );
}


function ProjectsCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-3xl bg-white p-6 shadow-sm flex flex-col justify-between ${className}`}
    >
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center">
          📊
        </span>
        Total Projects
      </div>

      <div>
        <h3 className="mt-6 text-3xl font-semibold text-gray-900">
          1951+
        </h3>
        <p className="mt-1 text-xs text-emerald-700">
          Increase of 126 this month
        </p>
      </div>
    </div>
  );
}

function StatLightCard({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl bg-emerald-100 p-6 flex flex-col justify-end ${className}`}
    >
      <h3 className="text-3xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
    </div>
  );
}

function TallCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-3xl bg-emerald-950 p-6 text-white flex items-end ${className}`}
    >
      <p className="text-sm leading-relaxed">
        Achieve Optimal Efficiency and Boost Productivity
      </p>
    </div>
  );
}


export default function Hero() {
  return (
    <section className="bg-gray-50 pt-20 pb-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
             End-to-End Thesis <br />{" "}
            <span className="text-emerald-800">
              Research Paper & Patent Support
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            We help M.Tech and PhD scholars transform ideas into high-quality
            research outputs. From topic selection to final submission,
            publication, and patent drafting—our academic experts ensure
            accuracy, originality, and timely delivery.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Try Demo</Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm">
            <div className="text-yellow-400">★★★★★</div>
            <span className="text-gray-600">
              4.1 from <span className="underline">80+ reviews</span>
            </span>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-20 grid gap-6 md:grid-cols-12">
          {/* Image Card */}
          <div className="md:col-span-3 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
              alt="Manufacturing"
              width={400}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          {/* 100+ Card */}
          <StatDarkCard
            title="100+"
            description="Our Esteemed Clients and Partners"
            className="md:col-span-2"
          />

          {/* Projects Card */}
          <ProjectsCard className="md:col-span-3" />

          {/* 6+ Card */}
          <StatLightCard
            title="6+"
            description="Years of Dedicated Service"
            className="md:col-span-2"
          />

          {/* Tall Right Card */}
          <TallCard className="md:col-span-2" />
        </div>
      </Container>
    </section>
  );
}
