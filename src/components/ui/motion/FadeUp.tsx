"use client";

import { m, HTMLMotionProps, Variants } from "framer-motion";
import React from "react";

interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  distance = 20,
  direction = "up",
  once = true,
  className,
  ...props
}: FadeUpProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        delay,
        duration: duration || undefined,
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
