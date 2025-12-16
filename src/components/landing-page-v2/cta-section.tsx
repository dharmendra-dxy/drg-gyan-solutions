import Button from "../common/button";
import Container from "../common/container";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <div className="w-full bg-emerald-950 py-12">
      <Container className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-white">
            From Ideas to Practical in Days
          </h3>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-3xl">
            Simplify operations with our efficient, quality-focused services.
            Simplify operations with our efficient, quality-focused services.
            Simplify operations with our efficient, quality-focused services.
            Simplify operations with our efficient, quality-focused services.
          </p>

          <Button variant="secondary" className="mt-12">Work With Us</Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default CtaSection;
