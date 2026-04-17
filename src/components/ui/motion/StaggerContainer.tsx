"use client";

import { m, HTMLMotionProps, Variants } from "framer-motion";
import React from "react";

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  className,
  ...props
}: StaggerContainerProps) {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
}

export const staggerChildVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};
