import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import "../styles/globals.css";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
