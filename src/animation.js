export const page = {
  hidden: {},
  show: {
    'background-color': 'var(--bg-new-color)',
    transition: { duration: 0.75 },
    ease: 'easeOut',
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
};
export const itemSerial = {
  hidden: { y: '100%' },
  show: {
    y: '0%',
    transition: { duration: 0.5 },
  },
};
export const itemParallel = {
  hidden: { y: '100%' },
  show: {
    y: '0%',
    transition: { delay: 0.5, duration: 0.5 },
  },
};
