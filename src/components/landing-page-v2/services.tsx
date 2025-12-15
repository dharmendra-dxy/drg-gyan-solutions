"use client";


import { motion } from "framer-motion";
import Container from "../common/container";
import { services } from "@/constants";
import ServiceCard from "./service-card";

export default function Services() {
  return (
    <section className="bg-emerald-950 py-24">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Efficient and Integrated <br />
            Manufacturing Services
          </h2>

          <p className="mt-4 text-sm sm:text-base text-emerald-200/80">
            Simplify operations with our efficient, quality-focused services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
