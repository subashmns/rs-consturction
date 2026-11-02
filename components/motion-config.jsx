"use client";

import { MotionConfig } from "motion/react";

export default function MotionConfigProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
