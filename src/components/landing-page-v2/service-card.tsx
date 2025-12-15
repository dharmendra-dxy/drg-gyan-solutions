"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/variants";
import { ArrowUpRight } from "lucide-react";

type Props = {
  index: number;
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function ServiceCard({
  index,
  title,
  description,
  icon: Icon,
}: Readonly<Props>) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      className="group relative rounded-2xl bg-emerald-900/90 p-6 transition hover:bg-emerald-900"
    >
      <div className="flex items-start justify-between">
        <Icon className="h-6 w-6 text-emerald-300" />
        <span className="text-emerald-300 transition group-hover:translate-x-1 group-hover:bg-emerald-800 p-1 rounded-full">
          <ArrowUpRight/>
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-emerald-100/80">
        {description}
      </p>
    </motion.div>
  );
}
