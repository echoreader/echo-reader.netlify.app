import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
  },
  include: [
    'layouts/**/*.html',
    'content/**/*.md',
  ],
  safelist: [
    'font-sans',
    'container','mx-auto','px-4',
    'h-16','pt-16','mt-8',
    'text-base','leading-relaxed','leading-tight',
    'text-center','font-bold',
    'space-y-4','lg:text-5xl'
  ],
})
