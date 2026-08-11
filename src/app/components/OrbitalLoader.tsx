import { motion } from "motion/react";

export function OrbitalLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-32 h-32">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-200 to-sky-400" />
        </motion.div>

        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3 - index * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
            style={{
              transformOrigin: "center",
            }}
          >
            <div
              className="absolute top-0 left-1/2 w-3 h-3 rounded-full -translate-x-1/2"
              style={{
                background: index === 0 ? "#67E8F9" : index === 1 ? "#38BDF8" : "#14B8A6",
                boxShadow: `0 0 ${10 + index * 5}px ${index === 0 ? "#67E8F9" : index === 1 ? "#38BDF8" : "#14B8A6"}`,
              }}
            />
          </motion.div>
        ))}

        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-200/25 to-sky-400/25 blur-3xl" />
      </div>
    </div>
  );
}
