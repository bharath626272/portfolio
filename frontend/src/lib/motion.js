export const EASE = [0.22, 1, 0.36, 1];

export const revealUp = {
  hidden: { y: "110%" },
  show: (i = 0) => ({
    y: 0,
    transition: { duration: 1, ease: EASE, delay: 0.05 * i },
  }),
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.05 * i },
  }),
};

export const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
