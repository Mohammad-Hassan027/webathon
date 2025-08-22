export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    x: -100,
    y: 0,

  },
  in: { opacity: 1, scale: 1, x: 0, y: 0 },
  out: { opacity: 0, scale: 0.8, x: 100, y: 0 },
};

export const pageTransition = {
  type: "spring",
  ease: "cubic-bezier(0.65, 0, 0.35, 1)",
  duration: 0.8,
};
