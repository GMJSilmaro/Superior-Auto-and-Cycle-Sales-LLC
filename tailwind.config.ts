import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Background colors for icons
    'bg-blue-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-red-100',
    // Text colors for icons
    'text-blue-500',
    'text-green-500',
    'text-purple-500',
    'text-red-500',
    // Other utility classes that might be getting purged
    'w-16',
    'h-16',
    'rounded-full',
    'flex',
    'items-center',
    'justify-center'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;