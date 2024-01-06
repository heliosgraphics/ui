export const config: string = `:root {
	--box-px: 1px;
	--box-1: 2px;
	--box-2: 4px;
	--box-3: 6px;
	--box-4: 8px;
	--box-5: 10px;
	--box-6: 12px;
	--box-7: 14px;
	--box-8: 16px;
	--box-9: 18px;
	--box-10: 20px;
	--box-11: 22px;
	--box-12: 24px;
	--box-13: 26px;
	--box-14: 28px;
	--box-15: 30px;
	--box-16: 32px;
	--box-24: 48px;
	--box-32: 64px;
	--box-40: 80px;
	--box-48: 96px;

	--font-size-h1: 36px;
	--font-size-h2: 32px;
	--font-size-h3: 28px;
	--font-size-h4: 24px;
	--font-size-h5: 20px;
	--font-size-h6: 18px;
	--font-size-p: 16px;
	--font-size-small: 14px;
	--font-size-tiny: 12px;

	--line-height-h1: 44px;
	--line-height-h2: 40px;
	--line-height-h3: 36px;
	--line-height-h4: 32px;
	--line-height-h5: 26px;
	--line-height-h6: 24px;
	--line-height-p: 24px;
	--line-height-small: 22px;
	--line-height-tiny: 18px;

	--font-family-sans: Helvetica, Arial, sans-serif;
	--font-family-serif: Georgia, Garamond, serif;
	--font-family-mono: "Courier New", monospace;

  --font-weight-thin: 100;
  --font-weight-extra-light: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;
  --font-weight-black: 900;

	--z-index-0: 0;
	--z-index-10: 100;
	--z-index-20: 200;
	--z-index-30: 300;
	--z-index-40: 400;
	--z-index-50: 500;
	--z-index-60: 600;
	--z-index-70: 700;
	--z-index-80: 800;
	--z-index-90: 900;
	--z-index-100: 1000;

	--bg-opacity: 1;
	--color-opacity: 1;

  --hsl-aqua: 187,87%;
  --hsl-blue: 230,87%;
  --hsl-gray: 225,10%;
  --hsl-green: 120,75%;
  --hsl-orange: 23,94%;
  --hsl-pink: 324,76%;
  --hsl-purple: 266,80%;
  --hsl-red: 356,84%;
  --hsl-yellow: 39,93%;

	--hsl-gray-0: var(--hsl-gray), 100%;
	--hsl-gray-25: var(--hsl-gray), 97.5%;
	--hsl-gray-50: var(--hsl-gray), 95%;
	--hsl-gray-100: var(--hsl-gray), 90%;
	--hsl-gray-200: var(--hsl-gray), 80%;
	--hsl-gray-300: var(--hsl-gray), 70%;
	--hsl-gray-400: var(--hsl-gray), 60%;
	--hsl-gray-500: var(--hsl-gray), 50%;
	--hsl-gray-600: var(--hsl-gray), 40%;
	--hsl-gray-700: var(--hsl-gray), 30%;
	--hsl-gray-800: var(--hsl-gray), 20%;
	--hsl-gray-900: var(--hsl-gray), 10%;
	--hsl-gray-1000: var(--hsl-gray), 0%;

	--hsl-red-100: var(--hsl-red), 90%;
	--hsl-red-200: var(--hsl-red), 80%;
	--hsl-red-300: var(--hsl-red), 70%;
	--hsl-red-400: var(--hsl-red), 60%;
	--hsl-red-500: var(--hsl-red), 50%;
	--hsl-red-600: var(--hsl-red), 40%;
	--hsl-red-700: var(--hsl-red), 30%;
	--hsl-red-800: var(--hsl-red), 20%;
	--hsl-red-900: var(--hsl-red), 10%;

	--hsl-orange-100: var(--hsl-orange), 90%;
	--hsl-orange-200: var(--hsl-orange), 80%;
	--hsl-orange-300: var(--hsl-orange), 70%;
	--hsl-orange-400: var(--hsl-orange), 60%;
	--hsl-orange-500: var(--hsl-orange), 50%;
	--hsl-orange-600: var(--hsl-orange), 40%;
	--hsl-orange-700: var(--hsl-orange), 30%;
	--hsl-orange-800: var(--hsl-orange), 20%;
	--hsl-orange-900: var(--hsl-orange), 10%;

	--hsl-yellow-100: var(--hsl-yellow), 90%;
	--hsl-yellow-200: var(--hsl-yellow), 80%;
	--hsl-yellow-300: var(--hsl-yellow), 70%;
	--hsl-yellow-400: var(--hsl-yellow), 60%;
	--hsl-yellow-500: var(--hsl-yellow), 50%;
	--hsl-yellow-600: var(--hsl-yellow), 40%;
	--hsl-yellow-700: var(--hsl-yellow), 30%;
	--hsl-yellow-800: var(--hsl-yellow), 20%;
	--hsl-yellow-900: var(--hsl-yellow), 10%;

	--hsl-green-100: var(--hsl-green), 90%;
	--hsl-green-200: var(--hsl-green), 80%;
	--hsl-green-300: var(--hsl-green), 70%;
	--hsl-green-400: var(--hsl-green), 60%;
	--hsl-green-500: var(--hsl-green), 50%;
	--hsl-green-600: var(--hsl-green), 40%;
	--hsl-green-700: var(--hsl-green), 30%;
	--hsl-green-800: var(--hsl-green), 20%;
	--hsl-green-900: var(--hsl-green), 10%;

	--hsl-blue-100: var(--hsl-blue), 90%;
	--hsl-blue-200: var(--hsl-blue), 80%;
	--hsl-blue-300: var(--hsl-blue), 70%;
	--hsl-blue-400: var(--hsl-blue), 60%;
	--hsl-blue-500: var(--hsl-blue), 50%;
	--hsl-blue-600: var(--hsl-blue), 40%;
	--hsl-blue-700: var(--hsl-blue), 30%;
	--hsl-blue-800: var(--hsl-blue), 20%;
	--hsl-blue-900: var(--hsl-blue), 10%;

	--hsl-purple-100: var(--hsl-purple), 90%;
	--hsl-purple-200: var(--hsl-purple), 80%;
	--hsl-purple-300: var(--hsl-purple), 70%;
	--hsl-purple-400: var(--hsl-purple), 60%;
	--hsl-purple-500: var(--hsl-purple), 50%;
	--hsl-purple-600: var(--hsl-purple), 40%;
	--hsl-purple-700: var(--hsl-purple), 30%;
	--hsl-purple-800: var(--hsl-purple), 20%;
	--hsl-purple-900: var(--hsl-purple), 10%;

	--hsl-pink-100: var(--hsl-pink), 90%;
	--hsl-pink-200: var(--hsl-pink), 80%;
	--hsl-pink-300: var(--hsl-pink), 70%;
	--hsl-pink-400: var(--hsl-pink), 60%;
	--hsl-pink-500: var(--hsl-pink), 50%;
	--hsl-pink-600: var(--hsl-pink), 40%;
	--hsl-pink-700: var(--hsl-pink), 30%;
	--hsl-pink-800: var(--hsl-pink), 20%;
	--hsl-pink-900: var(--hsl-pink), 10%;

  --hsl-aqua-100: var(--hsl-aqua), 90%;
	--hsl-aqua-200: var(--hsl-aqua), 80%;
	--hsl-aqua-300: var(--hsl-aqua), 70%;
	--hsl-aqua-400: var(--hsl-aqua), 60%;
	--hsl-aqua-500: var(--hsl-aqua), 50%;
	--hsl-aqua-600: var(--hsl-aqua), 40%;
	--hsl-aqua-700: var(--hsl-aqua), 30%;
	--hsl-aqua-800: var(--hsl-aqua), 20%;
	--hsl-aqua-900: var(--hsl-aqua), 10%;

	--gray-0: hsla(var(--hsl-gray-0, 1));
	--gray-25: hsla(var(--hsl-gray-25, 1));
	--gray-50: hsla(var(--hsl-gray-50, 1));
	--gray-100: hsla(var(--hsl-gray-100, 1));
	--gray-200: hsla(var(--hsl-gray-200, 1));
	--gray-300: hsla(var(--hsl-gray-300, 1));
	--gray-400: hsla(var(--hsl-gray-400, 1));
	--gray-500: hsla(var(--hsl-gray-500, 1));
	--gray-600: hsla(var(--hsl-gray-600, 1));
	--gray-700: hsla(var(--hsl-gray-700, 1));
	--gray-800: hsla(var(--hsl-gray-800, 1));
	--gray-900: hsla(var(--hsl-gray-900, 1));
	--gray-1000: hsla(var(--hsl-gray-1000, 1));

	--red-100: hsla(var(--hsl-red-100, 1));
	--red-200: hsla(var(--hsl-red-200, 1));
	--red-300: hsla(var(--hsl-red-300, 1));
	--red-400: hsla(var(--hsl-red-400, 1));
	--red-500: hsla(var(--hsl-red-500, 1));
	--red-600: hsla(var(--hsl-red-600, 1));
	--red-700: hsla(var(--hsl-red-700, 1));
	--red-800: hsla(var(--hsl-red-800, 1));
	--red-900: hsla(var(--hsl-red-900, 1));

	--yellow-100: hsla(var(--hsl-yellow-100, 1));
	--yellow-200: hsla(var(--hsl-yellow-200, 1));
	--yellow-300: hsla(var(--hsl-yellow-300, 1));
	--yellow-400: hsla(var(--hsl-yellow-400, 1));
	--yellow-500: hsla(var(--hsl-yellow-500, 1));
	--yellow-600: hsla(var(--hsl-yellow-600, 1));
	--yellow-700: hsla(var(--hsl-yellow-700, 1));
	--yellow-800: hsla(var(--hsl-yellow-800, 1));
	--yellow-900: hsla(var(--hsl-yellow-900, 1));

	--green-100: hsla(var(--hsl-green-100, 1));
	--green-200: hsla(var(--hsl-green-200, 1));
	--green-300: hsla(var(--hsl-green-300, 1));
	--green-400: hsla(var(--hsl-green-400, 1));
	--green-500: hsla(var(--hsl-green-500, 1));
	--green-600: hsla(var(--hsl-green-600, 1));
	--green-700: hsla(var(--hsl-green-700, 1));
	--green-800: hsla(var(--hsl-green-800, 1));
	--green-900: hsla(var(--hsl-green-900, 1));

	--blue-100: hsla(var(--hsl-blue-100, 1));
	--blue-200: hsla(var(--hsl-blue-200, 1));
	--blue-300: hsla(var(--hsl-blue-300, 1));
	--blue-400: hsla(var(--hsl-blue-400, 1));
	--blue-500: hsla(var(--hsl-blue-500, 1));
	--blue-600: hsla(var(--hsl-blue-600, 1));
	--blue-700: hsla(var(--hsl-blue-700, 1));
	--blue-800: hsla(var(--hsl-blue-800, 1));
	--blue-900: hsla(var(--hsl-blue-900, 1));

	--purple-100: hsla(var(--hsl-purple-100, 1));
	--purple-200: hsla(var(--hsl-purple-200, 1));
	--purple-300: hsla(var(--hsl-purple-300, 1));
	--purple-400: hsla(var(--hsl-purple-400, 1));
	--purple-500: hsla(var(--hsl-purple-500, 1));
	--purple-600: hsla(var(--hsl-purple-600, 1));
	--purple-700: hsla(var(--hsl-purple-700, 1));
	--purple-800: hsla(var(--hsl-purple-800, 1));
	--purple-900: hsla(var(--hsl-purple-900, 1));

	--pink-100: hsla(var(--hsl-pink-100, 1));
	--pink-200: hsla(var(--hsl-pink-200, 1));
	--pink-300: hsla(var(--hsl-pink-300, 1));
	--pink-400: hsla(var(--hsl-pink-400, 1));
	--pink-500: hsla(var(--hsl-pink-500, 1));
	--pink-600: hsla(var(--hsl-pink-600, 1));
	--pink-700: hsla(var(--hsl-pink-700, 1));
	--pink-800: hsla(var(--hsl-pink-800, 1));
	--pink-900: hsla(var(--hsl-pink-900, 1));

  --orange-100: hsla(var(--hsl-orange-100, 1));
	--orange-200: hsla(var(--hsl-orange-200, 1));
	--orange-300: hsla(var(--hsl-orange-300, 1));
	--orange-400: hsla(var(--hsl-orange-400, 1));
	--orange-500: hsla(var(--hsl-orange-500, 1));
	--orange-600: hsla(var(--hsl-orange-600, 1));
	--orange-700: hsla(var(--hsl-orange-700, 1));
	--orange-800: hsla(var(--hsl-orange-800, 1));
	--orange-900: hsla(var(--hsl-orange-900, 1));

  --aqua-100: hsla(var(--hsl-aqua-100, 1));
	--aqua-200: hsla(var(--hsl-aqua-200, 1));
	--aqua-300: hsla(var(--hsl-aqua-300, 1));
	--aqua-400: hsla(var(--hsl-aqua-400, 1));
	--aqua-500: hsla(var(--hsl-aqua-500, 1));
	--aqua-600: hsla(var(--hsl-aqua-600, 1));
	--aqua-700: hsla(var(--hsl-aqua-700, 1));
	--aqua-800: hsla(var(--hsl-aqua-800, 1));
	--aqua-900: hsla(var(--hsl-aqua-900, 1));
}`
