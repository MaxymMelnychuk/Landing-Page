module.exports = {
    theme: {
      extend: {
        colors: {
          'gradient-start': 'oklch(16.5% 0.03 270)',
          'gradient-end': 'oklch(0% 0 0)',
        },
        backgroundImage: {
          'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  }