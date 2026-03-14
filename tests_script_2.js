let testData = {
	theme1: [
  {
    "savol": "x² - 20x + 64 = 0 tenglamani yeching.",
    "variantlar": ["x = 4, x = 16", "x = -4, x = -16", "x = 4, x = -16", "x = -4, x = 16"],
    "javob": "x = 4, x = 16"
  },
  {
    "savol": "4 - 5x² - 36 = 0 tenglamani yeching.",
    "variantlar": ["x² = -32/5, haqiqiy ildiz yo'q", "x = ±√(32/5)", "x = ±4√(2/5)", "x = ±32/5"],
    "javob": "x² = -32/5, haqiqiy ildiz yo'q"
  },
  {
    "savol": "16x² + 15x - 1 = 0 tenglamani yeching.",
    "variantlar": ["x = 1/16, x = -1", "x = -1/16, x = 1", "x = 1/16, x = 1", "x = -1/16, x = -1"],
    "javob": "x = 1/16, x = -1"
  },
  {
    "savol": "6x² + 28x + 27 = 0 tenglamani yeching.",
    "variantlar": ["x = (-14 ± √34)/6", "x = (-14 ± √34)/3", "x = (14 ± √34)/6", "x = (14 ± √34)/3"],
    "javob": "x = (-14 ± √34)/6"
  },
  {
    "savol": "(3x - 4)x - 5(3x - 4) + 6 = 0 tenglamani yeching.",
    "variantlar": ["x = 2, x = 3", "x = -2, x = -3", "x = 2, x = -3", "x = -2, x = 3"],
    "javob": "x = 2, x = 3"
  },
  {
    "savol": "8x² - 82x + 81 = 0 tenglamani yeching.",
    "variantlar": ["x = 1/8, x = 81", "x = 1, x = 81/8", "x = -1/8, x = -81", "x = -1, x = -81/8"],
    "javob": "x = 1, x = 81/8"
  },
  {
    "savol": "8x² - 17x + 16 = 0 tenglamani yeching.",
    "variantlar": ["D < 0, haqiqiy ildiz yo'q", "x = (17 ± √-223)/16", "x = (17 ± √223)/16", "x = 2, x = 8"],
    "javob": "D < 0, haqiqiy ildiz yo'q"
  },
  {
    "savol": "8x² - 20x + 64 = 0 tenglamani yeching.",
    "variantlar": ["D < 0, haqiqiy ildiz yo'q", "x = (20 ± √-1648)/16", "x = (20 ± √1648)/16", "x = 4, x = 16"],
    "javob": "D < 0, haqiqiy ildiz yo'q"
  },
  {
    "savol": "(2x - 1)² + 8(2x - 1) + 15 = 0 tenglamani yeching.",
    "variantlar": ["x = -1, x = -2", "x = 1, x = 2", "x = -1, x = 2", "x = 1, x = -2"],
    "javob": "x = -1, x = -2"
  },
  {
    "savol": "(3x - 2)² - 9(3x - 2) + 8 = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = 2", "x = -1, x = -2", "x = 1, x = -2", "x = -1, x = 2"],
    "javob": "x = 1, x = 2"
  },
  {
    "savol": "3x(2x + 3)² + 10(2x + 3) + 35 = 0 tenglamani yeching.",
    "variantlar": ["x = -1, x = -4", "x = 1, x = 4", "x = -1, x = 4", "x = 1, x = -4"],
    "javob": "x = -1, x = -4"
  },
  {
    "savol": "(2x + 2)² - 2x(2x + 2) - 3 = 0 tenglamani yeching.",
    "variantlar": ["x = 1/2, x = -1/2", "x = 1, x = -1", "x = 2, x = -2", "x = 3, x = -3"],
    "javob": "x = 1/2, x = -1/2"
  },
  {
    "savol": "(x² + 1)² - 6(x² + 1) + 5 = 0 tenglamani yeching.",
    "variantlar": ["x = 0, x = ±2", "x = 0, x = 2", "x = ±2", "x = 0, x = ±√2"],
    "javob": "x = 0, x = ±2"
  },
  {
    "savol": "(x+11)⁵ = (x+11)³ tenglamani yeching.",
    "variantlar": ["x = -11, x = -10, x = -12", "x = -11, x = 0", "x = -11, x = 1", "x = -11, x = -1"],
    "javob": "x = -11, x = -10, x = -12"
  },
  {
    "savol": "(x-2)⁷ = (x-2)³ tenglamani yeching.",
    "variantlar": ["x = 2, x = 3, x = 1", "x = 2, x = 0", "x = 2, x = 1", "x = 2, x = -1"],
    "javob": "x = 2, x = 3, x = 1"
  },
  {
    "savol": "-3 + 27 = x + 24 tenglamani yeching.",
    "variantlar": ["x = 0", "x = 1", "x = -1", "x = 2"],
    "javob": "x = 0"
  },
  {
    "savol": "x² - 8x + 14 = 0 tenglamani yeching.",
    "variantlar": ["x = 4 ± √2", "x = -4 ± √2", "x = 8 ± √2", "x = 2 ± √2"],
    "javob": "x = 4 ± √2"
  },
  {
    "savol": "5x² - 4x - 1 = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = -1/5", "x = -1, x = 1/5", "x = 1, x = 1/5", "x = -1, x = -1/5"],
    "javob": "x = 1, x = -1/5"
  },
  {
    "savol": "5x² + 1 = 0 tenglamani yeching.",
    "variantlar": ["x² = -1/5, haqiqiy ildiz yo'q", "x = ±1/√5", "x = ±√5", "x = 0"],
    "javob": "x² = -1/5, haqiqiy ildiz yo'q"
  },
  {
    "savol": "x² + 2 = x + 14 tenglamani yeching.",
    "variantlar": ["x = 4, x = -3", "x = -4, x = 3", "x = 4, x = 3", "x = -4, x = -3"],
    "javob": "x = 4, x = -3"
  },
  {
    "savol": "x² - 3 = x + 24 tenglamani yeching.",
    "variantlar": ["x = (1 ± √109)/2", "x = (-1 ± √109)/2", "x = (1 ± √109)", "x = (-1 ± √109)"],
    "javob": "x = (1 ± √109)/2"
  },
  {
    "savol": "(x² + 4x + 2)² + 4(x² + 4x + 2) + 2 = x tenglamani yeching.",
    "variantlar": ["x = -1, x = -2", "x = 0, x = -3", "x = 1, x = -4", "x = -1, x = -3"],
    "javob": "x = -1, x = -2"
  },
  {
    "savol": "1/(x+1) + 1/(x+2) + 1/(x+3) + 1/(x+4) = 0 tenglamani yeching.",
    "variantlar": ["x = -2.5", "x = -2, x = -3", "x = -1, x = -4", "x = 0"],
    "javob": "x = -2.5"
  },
  {
    "savol": "(x² + 2x)² + 2x² + 4x = x tenglamani yeching.",
    "variantlar": ["x = 0, x = -1, x = -3", "x = 0, x = 1, x = 3", "x = 0, x = -2, x = -4", "x = 0, x = 2, x = 4"],
    "javob": "x = 0, x = -1, x = -3"
  },
  {
    "savol": "1/(x-1) + 1/(x-2) + 1/(x-3) + 1/(x-4) = 0 tenglamani yeching.",
    "variantlar": ["x = 2.5", "x = 2, x = 3", "x = 1, x = 4", "x = 0"],
    "javob": "x = 2.5"
  },
  {
    "savol": "((x² + 2x - 3)/(x + 4))² + ((x² + x - 2)/(x - 7))² = 0 tenglamani yeching.",
    "variantlar": ["x = 1", "x = -3", "x = 1, x = -3", "x = 0"],
    "javob": "x = 1"
  },
  {
    "savol": "80x³ + 4x² - 80 - 4/x = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = -1", "x = 2, x = -2", "x = 4, x = -4", "x = 0.5, x = -0.5"],
    "javob": "x = 1, x = -1"
  },
  {
    "savol": "(x - 4)(x - 5)(x - 1)(x - 8) = -20 tenglamani yeching.",
    "variantlar": ["x = 3, x = 6", "x = 2, x = 7", "x = 4, x = 5", "x = 1, x = 8"],
    "javob": "x = 3, x = 6"
  },
  {
    "savol": "(x² - 5x + 2)(x² - 7x + 2) - 8x² = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = 2, x = -1, x = -2", "x = 3, x = 4, x = -3, x = -4", "x = 0.5, x = 1.5", "x = 2, x = 5"],
    "javob": "x = 1, x = 2, x = -1, x = -2"
  },
  {
    "savol": "(x - 1)x(x + 1)(x + 2) = 120 tenglamani yeching.",
    "variantlar": ["x = 4, x = -5", "x = 3, x = -4", "x = 5, x = -6", "x = 2, x = -3"],
    "javob": "x = 4, x = -5"
  },
  {
    "savol": "(x + 3)(x + 6)(x - 9)(x - 2) = -36x² tenglamani yeching.",
    "variantlar": ["x = 3, x = 6", "x = -3, x = -6", "x = 9, x = 2", "x = 0, x = 1"],
    "javob": "x = 3, x = 6"
  },
  {
    "savol": "(x² - 2x + 3)(x² - 6x + 3) + 4x² = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = 3", "x = -1, x = -3", "x = 2, x = 4", "x = 0, x = 5"],
    "javob": "x = 1, x = 3"
  },
  {
    "savol": "(x - 2)(x + 1)(x - 3)(x + 6) = (25/4)x² tenglamani yeching.",
    "variantlar": ["x = 2, x = -3", "x = 1, x = -6", "x = 3, x = -2", "x = 4, x = -1"],
    "javob": "x = 2, x = -3"
  },
  {
    "savol": "x² + 4/x² + 6x + 12/x + 13 = 0 tenglamani yeching.",
    "variantlar": ["x = -1, x = -2", "x = 1, x = 2", "x = -1, x = 2", "x = 1, x = -2"],
    "javob": "x = -1, x = -2"
  },
  {
    "savol": "x⁴ + 1 + x³ + x - 4x² = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = -1", "x = 2, x = -2", "x = 1, x = 2", "x = -1, x = -2"],
    "javob": "x = 1, x = -1"
  },
  {
    "savol": "x⁴ + x³ - 1.75x² + x + 1 = 0 tenglamani yeching.",
    "variantlar": ["x = 0.5, x = 2", "x = -0.5, x = -2", "x = 1, x = -1", "x = 0.25, x = 4"],
    "javob": "x = 0.5, x = 2"
  },
  {
    "savol": "x⁴ + 2x³ - 11x² + 4x + 4 = 0 tenglamani yeching.",
    "variantlar": ["x = 2, x = -2, x = -0.5, x = -2", "x = 1, x = -1, x = 2, x = -2", "x = 3, x = -3, x = 1, x = -1", "x = 4, x = -4, x = 0.5, x = -0.5"],
    "javob": "x = 2, x = -2, x = -0.5, x = -2"
  },
  {
    "savol": "(x-1)(x-2)(x-3)(x-4) = 24 tenglamani yeching.",
    "variantlar": ["x = 0, x = 5", "x = 1, x = 4", "x = 2, x = 3", "x = -1, x = 6"],
    "javob": "x = 0, x = 5"
  },
  {
    "savol": "(x+2)(x+3)(x+4)(x+5) = 360 tenglamani yeching.",
    "variantlar": ["x = 1, x = -8", "x = 2, x = -7", "x = 3, x = -6", "x = 4, x = -5"],
    "javob": "x = 1, x = -8"
  },
  {
    "savol": "(x² - x + 2)/(3x² - 4x + 2) = (x² - x + 3)/(3x² - 4x + 3) tenglamani yeching.",
    "variantlar": ["x = 1, x = 2", "x = -1, x = -2", "x = 0, x = 1", "x = 0, x = -1"],
    "javob": "x = 1, x = 2"
  },
  {
    "savol": "x² + 1/x² + x + 1/x - 4 = 0 tenglamaning ratsional yechimlari yig'indisini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "(x + 1/x)² - 2(x + 1/x) = 0 tenglamaning ratsional yechimlari yig'indisini toping.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "x² + 1/x² + 2(x + 1/x) - 6 = 0 tenglamaning ratsional yechimlari yig'indisini toping.",
    "variantlar": [-2, -1, 0, 1],
    "javob": -2
  },
  {
    "savol": "(x + 1/x)² - 3(x + 1/x) + 2 = 0 tenglamaning ratsional yechimlari yig'indisini toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "x² + 16/x² + 2x + 8/x - 27 = 0 tenglamaning ratsional yechimlari yig'indisini toping.",
    "variantlar": [-2, -1, 0, 1],
    "javob": -1
  },
  {
    "savol": "(x + 2/x)² + 4x + 8/x - 21 = 0 tenglamaning ratsional yechimlari yig'indisini toping.",
    "variantlar": [-3, -2, -1, 0],
    "javob": -3
  }
],






	theme2: [
  {
    "savol": "x + y = 6, xy = 8 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 2, y = 4; x = 4, y = 2", "x = 1, y = 5; x = 5, y = 1", "x = 3, y = 3", "x = 0, y = 6"],
    "javob": "x = 2, y = 4; x = 4, y = 2"
  },
  {
    "savol": "x + y = 8, xy = 15 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 3, y = 5; x = 5, y = 3", "x = 2, y = 6; x = 6, y = 2", "x = 4, y = 4", "x = 1, y = 7"],
    "javob": "x = 3, y = 5; x = 5, y = 3"
  },
  {
    "savol": "x + y = 10, xy = 21 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 3, y = 7; x = 7, y = 3", "x = 5, y = 5", "x = 2, y = 8; x = 8, y = 2", "x = 4, y = 6; x = 6, y = 4"],
    "javob": "x = 3, y = 7; x = 7, y = 3"
  },
  {
    "savol": "x - y = 3, xy = 10 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 5, y = 2", "x = -5, y = -2", "x = 2, y = -1", "x = -2, y = -5"],
    "javob": "x = 5, y = 2"
  },
  {
    "savol": "x - y = 8, x² - y² = 80 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 9, y = 1", "x = 10, y = 2", "x = 8, y = 0", "x = 11, y = 3"],
    "javob": "x = 9, y = 1"
  },
  {
    "savol": "x - y = -3, x² - y² = 21 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 2, y = 5", "x = -2, y = -5", "x = 5, y = 2", "x = -5, y = -2"],
    "javob": "x = 2, y = 5"
  },
  {
    "savol": "x - y = 3, x² - y² = 21 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 5, y = 2", "x = 2, y = -1", "x = 7, y = 4", "x = 4, y = 1"],
    "javob": "x = 5, y = 2"
  },
  {
    "savol": "x + y = 9, x² - y² = 9 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 5, y = 4", "x = 6, y = 3", "x = 4, y = 5", "x = 7, y = 2"],
    "javob": "x = 5, y = 4"
  },
  {
    "savol": "x + y = 7, x² - y² = 21 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 5, y = 2", "x = 6, y = 1", "x = 4, y = 3", "x = 7, y = 0"],
    "javob": "x = 5, y = 2"
  },
  {
    "savol": "x + y = 6, x² + y² = 20 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 2, y = 4; x = 4, y = 2", "x = 1, y = 5; x = 5, y = 1", "x = 3, y = 3", "x = 0, y = 6"],
    "javob": "x = 2, y = 4; x = 4, y = 2"
  },
  {
    "savol": "x - y = 5, x² + y² = 53 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 7, y = 2; x = -2, y = -7", "x = 6, y = 1; x = -1, y = -6", "x = 8, y = 3; x = -3, y = -8", "x = 5, y = 0"],
    "javob": "x = 7, y = 2; x = -2, y = -7"
  },
  {
    "savol": "x + y = 2, x² + y² - 2xy = 16 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 5, y = -3; x = -3, y = 5", "x = 4, y = -2; x = -2, y = 4", "x = 3, y = -1; x = -1, y = 3", "x = 6, y = -4; x = -4, y = 6"],
    "javob": "x = 5, y = -3; x = -3, y = 5"
  },
  {
    "savol": "x + y = 3, x² + y² - 2xy = 1 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 2, y = 1; x = 1, y = 2", "x = 3, y = 0", "x = 4, y = -1; x = -1, y = 4", "x = 5, y = -2; x = -2, y = 5"],
    "javob": "x = 2, y = 1; x = 1, y = 2"
  },
  {
    "savol": "x - y = 6, x² + y² + 2xy = 16 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 5, y = -1; x = 1, y = -5", "x = 4, y = -2; x = 2, y = -4", "x = 3, y = -3", "x = 6, y = 0"],
    "javob": "x = 5, y = -1; x = 1, y = -5"
  },
  {
    "savol": "x + y = 3, x² + xy - y² = 5 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 2, y = 1", "x = 1, y = 2", "x = 3, y = 0", "x = 0, y = 3"],
    "javob": "x = 2, y = 1"
  },
  {
    "savol": "x - y = 7, x² - xy - y² = 19 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 5, y = -2", "x = 6, y = -1", "x = 4, y = -3", "x = 7, y = 0"],
    "javob": "x = 5, y = -2"
  },
  {
    "savol": "y = x + 6, x² + 3 = 4y tenglamalar sistemasini yeching.",
    "variantlar": ["x = 3, y = 9; x = 7, y = 13", "x = -3, y = 3; x = -7, y = -1", "x = 4, y = 10; x = 6, y = 12", "x = 5, y = 11"],
    "javob": "x = 3, y = 9; x = 7, y = 13"
  },
  {
    "savol": "y - 3x = 2, x² = 2y + 3 tenglamalar sistemasini yeching.",
    "variantlar": ["x = -1, y = -1; x = 5, y = 17", "x = 1, y = 5; x = -5, y = -13", "x = 2, y = 8; x = -4, y = -10", "x = 3, y = 11; x = -3, y = -7"],
    "javob": "x = -1, y = -1; x = 5, y = 17"
  },
  {
    "savol": "x - 2y = 1, 3x + y² = 10 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 3, y = 1; x = -13, y = -7", "x = 2, y = 0.5; x = -12, y = -6.5", "x = 4, y = 1.5; x = -14, y = -7.5", "x = 5, y = 2; x = -15, y = -8"],
    "javob": "x = 3, y = 1; x = -13, y = -7"
  },
  {
    "savol": "x² + xy + 3 = 0, y - 3x - 2 = 0 tenglamalar sistemasining butun yechimlarini toping.",
    "variantlar": ["x = -1, y = -1", "x = 1, y = 5", "x = -3, y = -7", "x = 3, y = 11"],
    "javob": "x = -1, y = -1"
  },
  {
    "savol": "y² - x² = 16, x + y = 8 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 3, y = 5", "x = 2, y = 6", "x = 4, y = 4", "x = 1, y = 7"],
    "javob": "x = 3, y = 5"
  },
  {
    "savol": "x² - xy = -1, y + 4x = 6 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 1, y = 2", "x = -1, y = 10", "x = 2, y = -2", "x = -2, y = 14"],
    "javob": "x = 1, y = 2"
  },
  {
    "savol": "2x² + xy - 14 = 0, 3x - y - 3 = 0 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 2, y = 3; x = -7/4, y = -33/4", "x = 1, y = 0; x = -7, y = -24", "x = 3, y = 6; x = -2, y = -9", "x = 4, y = 9; x = -1, y = -6"],
    "javob": "x = 2, y = 3; x = -7/4, y = -33/4"
  },
  {
    "savol": "(x - 5)² = 0, (y - 3)/(x - 5) = 0 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 5, y = 3", "x = 5, y ixtiyoriy", "x = 5, y ≠ 5", "y = 3, x ixtiyoriy"],
    "javob": "x = 5, y = 3"
  },
  {
    "savol": "x + y = 4, 1/x + 1/y = 1 tenglamalar sistemasining butun yechimlarini toping.",
    "variantlar": ["x = 2, y = 2", "x = 1, y = 3; x = 3, y = 1", "x = 0, y = 4", "x = 4, y = 0"],
    "javob": "x = 2, y = 2"
  },
  {
    "savol": "xy = 6, 1/x - 1/y = 1/6 tenglamalar sistemasining butun yechimlarini toping.",
    "variantlar": ["x = 3, y = 2", "x = 2, y = 3", "x = -3, y = -2", "x = -2, y = -3"],
    "javob": "x = 3, y = 2"
  },
  {
    "savol": "x + y = 8, 1/x + 1/y = 1/2 tenglamalar sistemasining butun yechimlarini toping.",
    "variantlar": ["x = 4, y = 4", "x = 2, y = 6; x = 6, y = 2", "x = 3, y = 5; x = 5, y = 3", "x = 1, y = 7; x = 7, y = 1"],
    "javob": "x = 4, y = 4"
  },
  {
    "savol": "x + y = 7, 1/x + 1/y = 7/12 tenglamalar sistemasining butun yechimlarini toping.",
    "variantlar": ["x = 3, y = 4; x = 4, y = 3", "x = 2, y = 5; x = 5, y = 2", "x = 1, y = 6; x = 6, y = 1", "x = 7, y = 0"],
    "javob": "x = 3, y = 4; x = 4, y = 3"
  },
  {
    "savol": "x + y + xy = 7, x² + y² + xy = 13 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 1, y = 3; x = 3, y = 1", "x = 2, y = 2", "x = 0, y = 7; x = 7, y = 0", "x = -1, y = -4; x = -4, y = -1"],
    "javob": "x = 1, y = 3; x = 3, y = 1"
  },
  {
    "savol": "x/y + x + y = 7, (y/x)(x + y) = 12 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 2, y = 4", "x = 4, y = 2", "x = 3, y = 3", "x = 1, y = 6"],
    "javob": "x = 2, y = 4"
  },
  {
    "savol": "(x/y)(x + y) = 20, y/x + x + y = 9 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 4, y = 1", "x = 1, y = 4", "x = 5, y = 2", "x = 2, y = 5"],
    "javob": "x = 4, y = 1"
  },
  {
    "savol": "x³ - y³ = 7, x² + xy + y² = 7 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 2, y = 1", "x = 1, y = 2", "x = 3, y = 2", "x = 2, y = 3"],
    "javob": "x = 2, y = 1"
  },
  {
    "savol": "x³ - y³ = 19, x² + xy + y² = 19 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 3", "x = 3, y = 4"],
    "javob": "x = 3, y = 2"
  },
  {
    "savol": "x³ + y³ = 28, x² - xy + y² = 7 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 3, y = 1; x = 1, y = 3", "x = 2, y = 2", "x = 4, y = 0; x = 0, y = 4", "x = -1, y = 3; x = 3, y = -1"],
    "javob": "x = 3, y = 1; x = 1, y = 3"
  },
  {
    "savol": "x² + xy = 24, y² + xy = 12 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 4, y = 2; x = -4, y = -2", "x = 6, y = 3; x = -6, y = -3", "x = 2, y = 4; x = -2, y = -4", "x = 3, y = 6; x = -3, y = -6"],
    "javob": "x = 4, y = 2; x = -4, y = -2"
  },
  {
    "savol": "(5x - y)/(x + y) + (x + y)/(5x - y) = 2, x² - y² = -3 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 1, y = 2; x = -1, y = -2", "x = 2, y = 1; x = -2, y = -1", "x = 3, y = 4; x = -3, y = -4", "x = 4, y = 3; x = -4, y = -3"],
    "javob": "x = 1, y = 2; x = -1, y = -2"
  },
  {
    "savol": "(3x + 2y)/(x - y) + (x - y)/(3x + 2y) = 2.5, x² - y² = 15 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 4, y = 1; x = -4, y = -1", "x = 5, y = 2; x = -5, y = -2", "x = 3, y = 0", "x = 6, y = 3; x = -6, y = -3"],
    "javob": "x = 4, y = 1; x = -4, y = -1"
  },
  {
    "savol": "x/y + y/x = 2.5, x² + y² = 5 tenglamalar sistemasini yeching.",
    "variantlar": ["x = 2, y = 1; x = 1, y = 2; x = -2, y = -1; x = -1, y = -2", "x = 3, y = 2; x = 2, y = 3", "x = 4, y = 1; x = 1, y = 4", "x = 5, y = 0"],
    "javob": "x = 2, y = 1; x = 1, y = 2; x = -2, y = -1; x = -1, y = -2"
  },
  {
    "savol": "3x - y = 1, 2x + y = 4, x² + y² = 5 tenglamalar sistemasi yechimlari ko'paytmasini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "√3(x² - 4) + x - 3xy + 4y² = 0 tenglamani butun sonlarda yeching.",
    "variantlar": ["x = 2, y = 1", "x = -2, y = -1", "x = 2, y = -1", "x = -2, y = 1"],
    "javob": "x = 2, y = 1"
  },
  {
    "savol": "Ikkita sonning yig'indisi 12 ga, ko'paytmasi 35 ga teng. Bu sonlarni toping.",
    "variantlar": ["5 va 7", "4 va 8", "3 va 9", "6 va 6"],
    "javob": "5 va 7"
  },
  {
    "savol": "Ikkita sonning ayirmasi 5 ga, ko'paytmasi 24 ga teng. Bu sonlarni toping.",
    "variantlar": ["8 va 3", "6 va 1", "12 va 7", "10 va 5"],
    "javob": "8 va 3"
  },
  {
    "savol": "Ikkita sonning ayirmasi 8 ga, ko'paytmasi 48 ga teng. Bu sonlarni toping.",
    "variantlar": ["12 va 4", "10 va 2", "14 va 6", "16 va 8"],
    "javob": "12 va 4"
  },
  {
    "savol": "Ikkita musbat sonning ko'paytmasi 21 ga, kvadratlarining yig'indisi 58 ga teng. Bu sonlarni toping.",
    "variantlar": ["7 va 3", "21 va 1", "6 va 3.5", "5 va 4.2"],
    "javob": "7 va 3"
  },
  {
    "savol": "Ikkita musbat sonning ko'paytmasi 18 ga, kvadratlarining yig'indisi 45 ga teng. Bu sonlarni toping.",
    "variantlar": ["6 va 3", "9 va 2", "18 va 1", "5 va 3.6"],
    "javob": "6 va 3"
  },
  {
    "savol": "Ikkita musbat sonning ko'paytmasi 24 ga, kvadratlarining yig'indisi 73 ga teng. Bu sonlarni toping.",
    "variantlar": ["8 va 3", "12 va 2", "24 va 1", "6 va 4"],
    "javob": "8 va 3"
  },
  {
    "savol": "Diagonali √13 ga, yuzi 6 ga teng bo'lgan to'g'ri to'rtburchakning perimetrini toping.",
    "variantlar": [14, 16, 18, 20],
    "javob": 14
  }
],





	theme3: [
  {
    "savol": "P(x) = x⁶ - 4x³ + 3x² - 21x + 5 ko'phadning darajasini toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "P(x; y) = x⁷ + 3x⁵y² - 2x⁴y⁴ + xy ko'phadning darajasini toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 8
  },
  {
    "savol": "P(x) = (x⁴ - x³ + x² + 1)(x + 1)⁵ ko'phadning darajasini toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "P(x) = (x⁴ + 3x² - 12) · (x² + 5x - 1) ko'phadning ozod hadini toping.",
    "variantlar": [12, -12, 0, 1],
    "javob": 12
  },
  {
    "savol": "P(x) = (x² - 5x - 2) · (5x³ - 7) ko'phadning ozod hadini toping.",
    "variantlar": [14, -14, 0, 7],
    "javob": 14
  },
  {
    "savol": "P(x) = (x + 1)³ · (3 - x)⁴ ko'phadning ozod hadini toping.",
    "variantlar": [27, 81, 9, 3],
    "javob": 81
  },
  {
    "savol": "P(x) = (x - 2)³ · (x + 2)³ ko'phadning ozod hadini toping.",
    "variantlar": [64, -64, 0, 8],
    "javob": -64
  },
  {
    "savol": "P(x) = (x - 3)³ · (x - 2)⁴ ko'phadning ozod hadini toping.",
    "variantlar": [-108, 108, -432, 432],
    "javob": -432
  },
  {
    "savol": "P(x) = (x² + x - 1)³⁵ + 5x - 4 ko'phadda x ning juft darajalari oldidagi koeffitsiyentlar yig'indisini toping.",
    "variantlar": [-2, -1, 0, 1],
    "javob": -2
  },
  {
    "savol": "P(x) = x⁴ + 4x³ + 5x² + x - 2 ni (x - 1) ga bo'lgandagi qoldiqni toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "P(x) = x⁴ - x³ - x² + 4x + 3 ni x + 2 ga bo'lgandagi qoldiqni toping.",
    "variantlar": [-9, -8, -7, -6],
    "javob": -9
  },
  {
    "savol": "P(x) = x⁴ + 4x² + 4x + 4 ni (x - 3) ga bo'lgandagi qoldiqni toping.",
    "variantlar": [121, 122, 123, 124],
    "javob": 121
  },
  {
    "savol": "P(x) = x⁵ - 4x³ + 6x² + 3x + 2 ni x + 1 ga bo'lgandagi qoldiqni toping.",
    "variantlar": [-2, -1, 0, 1],
    "javob": 0
  },
  {
    "savol": "P(x) = x¹⁰⁰ + x⁹⁰ + x⁸⁰ + x⁷⁰ + x + 12 ni x - 1 ga bo'lgandagi qoldiqni toping.",
    "variantlar": [16, 17, 18, 19],
    "javob": 17
  },
  {
    "savol": "P(x) = x¹⁰ + x⁸ + x⁶ + x⁴ + x² + 1 ni x + 1 ga bo'lgandagi qoldiqni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "P(x) = (3x - 3)⁶ + 9x² + 12x - 5 ni 3x - 2 ga bo'lgandagi qoldiqni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "P(x) = (2x - 3)⁷ + 8x³ + 4x² + 6x - 2 ni 2x - 1 ga bo'lgandagi qoldiqni toping.",
    "variantlar": [-2, -1, 0, 1],
    "javob": -2
  },
  {
    "savol": "P(x) = (x - 2)¹⁶⁰ + (x - 4)¹⁵⁶ + 3x² + 5x - 1 ni x - 3 ga bo'lgandagi qoldiqni toping.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "P(x) = (x + 2)¹¹¹ + (x + 4)¹¹⁵ + 5x² + 4x - 2 ni x + 3 ga bo'lgandagi qoldiqni toping.",
    "variantlar": [-2, -1, 0, 1],
    "javob": 0
  },
  {
    "savol": "a ning qanday qiymatida P(x) = x² + ax + 6 ko'phad x - 1 ga qoldiqsiz bo'linadi?",
    "variantlar": [-7, -6, -5, -4],
    "javob": -7
  },
  {
    "savol": "a ning qanday qiymatida P(x) = ax² + 4x + 8 ko'phad x - 2 ga qoldiqsiz bo'linadi?",
    "variantlar": [-4, -3, -2, -1],
    "javob": -4
  },
  {
    "savol": "a ning qanday qiymatida P(x) = x⁴ + x³ + 5x² + 25x + a ko'phad x + 1 ga qoldiqsiz bo'linadi?",
    "variantlar": [20, 21, 22, 23],
    "javob": 20
  },
  {
    "savol": "a ning qanday qiymatida P(x) = (x - 2)³ + x² + ax + 5 ko'phad x - 3 ga qoldiqsiz bo'linadi?",
    "variantlar": [-7, -6, -5, -4],
    "javob": -7
  },
  {
    "savol": "a ning qanday qiymatida P(x) = x⁴ + x³ - 3x² + ax + 8 ko'phad x - 2 ga qoldiqsiz bo'linadi?",
    "variantlar": [-10, -9, -8, -7],
    "javob": -10
  },
  {
    "savol": "a ning qanday qiymatida P(x) = x⁴ - 3x² + 6x + a ko'phad x + 3 ga qoldiqsiz bo'linadi?",
    "variantlar": [-54, -53, -52, -51],
    "javob": -54
  },
  {
    "savol": "a ning qanday qiymatida P(x) = (x - 2)² + ax³ + x² + ax - 5 ko'phadning barcha koeffitsiyentlari yig'indisi 3 ga teng bo'ladi?",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "a ning qanday qiymatida P(x) = (x - a)²¹⁵ + x - 2 ko'phadning barcha koeffitsiyentlari yig'indisi nolga teng bo'ladi?",
    "variantlar": [1, 2, 3, 4],
    "javob": 3
  },
  {
    "savol": "a ning qanday qiymatida P(x) = x³ + x² + ax + 6 ni x - 2 ga bo'lgandagi qoldiq 4 ga teng bo'ladi?",
    "variantlar": [-5, -4, -3, -2],
    "javob": -5
  },
  {
    "savol": "a ning qanday qiymatida P(x) = x³ - x² + ax + 9 ni x - 3 ga bo'lgandagi qoldiq 6 ga teng bo'ladi?",
    "variantlar": [-5, -4, -3, -2],
    "javob": -3
  },
  {
    "savol": "a ning qanday qiymatida P(x) = x³ + 5x² + ax + 25 ni x - 5 ga bo'lgandagi qoldiq -5 ga teng bo'ladi?",
    "variantlar": [-6, -5, -4, -3],
    "javob": -5
  },
  {
    "savol": "a ning qanday qiymatida P(x) = x³ + 3x² + ax + 27 ni x + 3 ga bo'lgandagi qoldiq -9 ga teng bo'ladi?",
    "variantlar": [8, 9, 10, 11],
    "javob": 9
  },
  {
    "savol": "a va b ning qanday qiymatlarida P(x) = (x - 1)⁴ + ax² + bx + 5 ko'phadda x ning juft darajalari oldidagi koeffitsiyentlar yig'indisi 14 ga, x ning toq darajalari oldidagi koeffitsiyentlar yig'indisi esa -6 ga teng bo'ladi?",
    "variantlar": ["a=4, b=-2", "a=3, b=-1", "a=2, b=0", "a=1, b=1"],
    "javob": "a=4, b=-2"
  },
  {
    "savol": "a va b ning qanday qiymatlarida P(x) = (x + 1)⁶ + ax² + bx + 11 ko'phadda x ning juft darajalari oldidagi koeffitsiyentlar yig'indisi 30 ga, x ning toq darajalari oldidagi koeffitsiyentlar yig'indisi esa 20 ga teng bo'ladi?",
    "variantlar": ["a=4, b=2", "a=3, b=1", "a=2, b=0", "a=1, b=-1"],
    "javob": "a=4, b=2"
  },
  {
    "savol": "P(x) = x² + 3x + 2 bo'lsa, P(x + 1) ni toping.",
    "variantlar": ["x² + 5x + 6", "x² + 4x + 3", "x² + 3x + 2", "x² + 6x + 8"],
    "javob": "x² + 5x + 6"
  },
  {
    "savol": "a va b ning qanday qiymatlarida P(x) = x³ + ax² + bx + 6 ko'phad Q(x) = x² - 4x + 3 ga qoldiqsiz bo'linadi?",
    "variantlar": ["a=-4, b=1", "a=-3, b=2", "a=-2, b=3", "a=-1, b=4"],
    "javob": "a=-4, b=1"
  },
  {
    "savol": "a va b ning qanday qiymatlarida P(x) = x³ + ax² + bx - 4 ko'phad Q(x) = x² - 4 ga qoldiqsiz bo'linadi?",
    "variantlar": ["a=1, b=-4", "a=2, b=-3", "a=3, b=-2", "a=4, b=-1"],
    "javob": "a=1, b=-4"
  },
  {
    "savol": "a va b ning qanday qiymatlarida P(x) = x³ + ax² + bx + 2 ko'phad Q(x) = x² - 1 ga qoldiqsiz bo'linadi?",
    "variantlar": ["a=2, b=1", "a=1, b=2", "a=-2, b=-1", "a=-1, b=-2"],
    "javob": "a=2, b=1"
  },
  {
    "savol": "a va b ning qanday qiymatlarida P(x) = x³ + ax² + bx - 6 ko'phad Q(x) = x² - x - 6 ga qoldiqsiz bo'linadi?",
    "variantlar": ["a=3, b=-4", "a=4, b=-3", "a=5, b=-2", "a=6, b=-1"],
    "javob": "a=3, b=-4"
  },
  {
    "savol": "x³ - 6x² + 11x - 6 = 0 tenglamani ko'paytuvchilar ajratish usuli orqali yeching.",
    "variantlar": ["x = 1, x = 2, x = 3", "x = -1, x = -2, x = -3", "x = 1, x = -2, x = 3", "x = -1, x = 2, x = -3"],
    "javob": "x = 1, x = 2, x = 3"
  },
  {
    "savol": "x³ - 10x² + 23x - 14 = 0 tenglamani ko'paytuvchilar ajratish usuli orqali yeching.",
    "variantlar": ["x = 1, x = 2, x = 7", "x = -1, x = -2, x = -7", "x = 1, x = -2, x = 7", "x = -1, x = 2, x = -7"],
    "javob": "x = 1, x = 2, x = 7"
  },
  {
    "savol": "x³ - 8x² - 11x + 18 = 0 tenglamani ko'paytuvchilar ajratish usuli orqali yeching.",
    "variantlar": ["x = -2, x = 1, x = 9", "x = 2, x = -1, x = -9", "x = -2, x = -1, x = 9", "x = 2, x = 1, x = -9"],
    "javob": "x = -2, x = 1, x = 9"
  }
],





	theme4: [
  {
    "savol": "x² > 0 tengsizlikni yeching.",
    "variantlar": ["x ≠ 0", "x > 0", "x < 0", "x = 0"],
    "javob": "x ≠ 0"
  },
  {
    "savol": "x² + 2 < 0 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x = ∅", "x > 0", "x < 0"],
    "javob": "x = ∅"
  },
  {
    "savol": "x² ≤ 0 tengsizlikni yeching.",
    "variantlar": ["x = 0", "x ≤ 0", "x ≥ 0", "x ∈ R"],
    "javob": "x = 0"
  },
  {
    "savol": "(x - 2)² ≥ 0 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x ≥ 2", "x ≤ 2", "x = 2"],
    "javob": "x ∈ R"
  },
  {
    "savol": "(x + 3)² > 0 tengsizlikni yeching.",
    "variantlar": ["x ≠ -3", "x > -3", "x < -3", "x ∈ R"],
    "javob": "x ≠ -3"
  },
  {
    "savol": "x² + 1 > 0 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x > 0", "x < 0", "x = ∅"],
    "javob": "x ∈ R"
  },
  {
    "savol": "-x² - 9 < 0 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x = ∅", "x > 0", "x < 0"],
    "javob": "x ∈ R"
  },
  {
    "savol": "(x - 5)(x - 7) ≤ 0 tengsizlikni yeching.",
    "variantlar": ["5 ≤ x ≤ 7", "x ≤ 5 yoki x ≥ 7", "5 < x < 7", "x < 5 yoki x > 7"],
    "javob": "5 ≤ x ≤ 7"
  },
  {
    "savol": "(x - 2)(x - 6) > 0 tengsizlikni yeching.",
    "variantlar": ["x < 2 yoki x > 6", "2 < x < 6", "x ≤ 2 yoki x ≥ 6", "2 ≤ x ≤ 6"],
    "javob": "x < 2 yoki x > 6"
  },
  {
    "savol": "(x - 3)(5x + 3) < 0 tengsizlikni yeching.",
    "variantlar": ["-0.6 < x < 3", "x < -0.6 yoki x > 3", "-3 < x < 0.6", "x < -3 yoki x > 0.6"],
    "javob": "-0.6 < x < 3"
  },
  {
    "savol": "(2x - 1)(x - 5) ≤ 0 tengsizlikni yeching.",
    "variantlar": ["0.5 ≤ x ≤ 5", "x ≤ 0.5 yoki x ≥ 5", "0.5 < x < 5", "x < 0.5 yoki x > 5"],
    "javob": "0.5 ≤ x ≤ 5"
  },
  {
    "savol": "(x + 2)(x - 1)(x + 3) < 0 tengsizlikni yeching.",
    "variantlar": ["x < -3 yoki -2 < x < 1", "-3 < x < -2 yoki x > 1", "-2 < x < 1 yoki x > 3", "x < -2 yoki -1 < x < 3"],
    "javob": "x < -3 yoki -2 < x < 1"
  },
  {
    "savol": "(3 - x)(x + 1)x ≤ 0 tengsizlikni yeching.",
    "variantlar": ["-1 ≤ x ≤ 0 yoki x ≥ 3", "x ≤ -1 yoki 0 ≤ x ≤ 3", "-1 ≤ x ≤ 3", "x ≤ -1 yoki x ≥ 3"],
    "javob": "-1 ≤ x ≤ 0 yoki x ≥ 3"
  },
  {
    "savol": "x(x-5)(4+x)(x+1) ≥ 0 tengsizlikni yeching.",
    "variantlar": ["x ≤ -4 yoki -1 ≤ x ≤ 0 yoki x ≥ 5", "-4 ≤ x ≤ -1 yoki 0 ≤ x ≤ 5", "x ≤ -4 yoki -1 ≤ x ≤ 5", "-4 ≤ x ≤ 0 yoki x ≥ 5"],
    "javob": "x ≤ -4 yoki -1 ≤ x ≤ 0 yoki x ≥ 5"
  },
  {
    "savol": "(3-x)(5+x)(1-x)(4-x) ≤ 0 tengsizlikni yeching.",
    "variantlar": ["x ≤ -5 yoki 1 ≤ x ≤ 3 yoki x ≥ 4", "-5 ≤ x ≤ 1 yoki 3 ≤ x ≤ 4", "x ≤ -5 yoki 1 ≤ x ≤ 4", "-5 ≤ x ≤ 3 yoki x ≥ 4"],
    "javob": "x ≤ -5 yoki 1 ≤ x ≤ 3 yoki x ≥ 4"
  },
  {
    "savol": "x² > 16 tengsizlikni yeching.",
    "variantlar": ["x < -4 yoki x > 4", "-4 < x < 4", "x ≤ -4 yoki x ≥ 4", "-4 ≤ x ≤ 4"],
    "javob": "x < -4 yoki x > 4"
  },
  {
    "savol": "x² ≤ 9 tengsizlikni yeching.",
    "variantlar": ["-3 ≤ x ≤ 3", "x ≤ -3 yoki x ≥ 3", "-3 < x < 3", "x < -3 yoki x > 3"],
    "javob": "-3 ≤ x ≤ 3"
  },
  {
    "savol": "x² ≥ 4 tengsizlikni yeching.",
    "variantlar": ["x ≤ -2 yoki x ≥ 2", "-2 ≤ x ≤ 2", "x < -2 yoki x > 2", "-2 < x < 2"],
    "javob": "x ≤ -2 yoki x ≥ 2"
  },
  {
    "savol": "x² - 5x < 0 tengsizlikni yeching.",
    "variantlar": ["0 < x < 5", "x < 0 yoki x > 5", "0 ≤ x ≤ 5", "x ≤ 0 yoki x ≥ 5"],
    "javob": "0 < x < 5"
  },
  {
    "savol": "-x² - 4x ≥ 0 tengsizlikni yeching.",
    "variantlar": ["-4 ≤ x ≤ 0", "x ≤ -4 yoki x ≥ 0", "-4 < x < 0", "x < -4 yoki x > 0"],
    "javob": "-4 ≤ x ≤ 0"
  },
  {
    "savol": "3x + x² ≤ 0 tengsizlikni yeching.",
    "variantlar": ["-3 ≤ x ≤ 0", "x ≤ -3 yoki x ≥ 0", "-3 < x < 0", "x < -3 yoki x > 0"],
    "javob": "-3 ≤ x ≤ 0"
  },
  {
    "savol": "4x² - 7x < 0 tengsizlikni yeching.",
    "variantlar": ["0 < x < 1.75", "x < 0 yoki x > 1.75", "0 ≤ x ≤ 1.75", "x ≤ 0 yoki x ≥ 1.75"],
    "javob": "0 < x < 1.75"
  },
  {
    "savol": "x² + 5x - 6 > 0 tengsizlikni yeching.",
    "variantlar": ["x < -6 yoki x > 1", "-6 < x < 1", "x ≤ -6 yoki x ≥ 1", "-6 ≤ x ≤ 1"],
    "javob": "x < -6 yoki x > 1"
  },
  {
    "savol": "x² - 6x + 8 > 0 tengsizlikni yeching.",
    "variantlar": ["x < 2 yoki x > 4", "2 < x < 4", "x ≤ 2 yoki x ≥ 4", "2 ≤ x ≤ 4"],
    "javob": "x < 2 yoki x > 4"
  },
  {
    "savol": "(x + 3)/(x² - 5x + 12) < 0 tengsizlikni yeching.",
    "variantlar": ["x < -3", "x > -3", "x ∈ R", "x = ∅"],
    "javob": "x < -3"
  },
  {
    "savol": "(x² - 3x + 2)/(x² + 7x + 18) ≤ 0 tengsizlikni yeching.",
    "variantlar": ["[1,2]", "(-∞,1] ∪ [2,∞)", "(1,2)", "(-∞,1) ∪ (2,∞)"],
    "javob": "[1,2]"
  },
  {
    "savol": "(x² + 5x)/(-x² + x - 1) ≥ 0 tengsizlikni yeching.",
    "variantlar": ["(-∞,-5] ∪ [0,∞)", "[-5,0]", "(-∞,-5) ∪ (0,∞)", "(-5,0)"],
    "javob": "(-∞,-5] ∪ [0,∞)"
  },
  {
    "savol": "4/x > 1 tengsizlikni yeching.",
    "variantlar": ["0 < x < 4", "x < 0 yoki x > 4", "x > 4", "x < 4"],
    "javob": "0 < x < 4"
  },
  {
    "savol": "2/x < 2 tengsizlikni yeching.",
    "variantlar": ["x < 0 yoki x > 1", "0 < x < 1", "x > 1", "x < 1"],
    "javob": "x < 0 yoki x > 1"
  },
  {
    "savol": "3/x ≤ 5 tengsizlikni yeching.",
    "variantlar": ["x < 0 yoki x ≥ 0.6", "0 < x ≤ 0.6", "x ≤ 0.6", "x ≥ 0.6"],
    "javob": "x < 0 yoki x ≥ 0.6"
  },
  {
    "savol": "2/(2x+3) > 1/4 tengsizlikni yeching.",
    "variantlar": ["-1.5 < x < 2.5", "x < -1.5 yoki x > 2.5", "x > 2.5", "x < -1.5"],
    "javob": "-1.5 < x < 2.5"
  },
  {
    "savol": "2/(x-1) > 1/7 tengsizlikni yeching.",
    "variantlar": ["x < 1 yoki x > 15", "1 < x < 15", "x > 15", "x < 1"],
    "javob": "x < 1 yoki x > 15"
  },
  {
    "savol": "2/(x+1) > 3/(x+2) tengsizlikni yeching.",
    "variantlar": ["(-2,-1) ∪ (1,∞)", "(-∞,-2) ∪ (-1,1)", "(-1,1)", "(-∞,-2) ∪ (1,∞)"],
    "javob": "(-2,-1) ∪ (1,∞)"
  },
  {
    "savol": "2/(x-3) < 1/x tengsizlikni yeching.",
    "variantlar": ["(-∞,0) ∪ (3,6)", "(0,3) ∪ (6,∞)", "(-∞,0) ∪ (3,∞)", "(0,3) ∪ (3,6)"],
    "javob": "(-∞,0) ∪ (3,6)"
  },
  {
    "savol": "(x-2)(x-3)²(x-4) ≥ 0 tengsizlikni yeching.",
    "variantlar": ["(-∞,2] ∪ [4,∞) ∪ {3}", "(-∞,2] ∪ [3,4]", "[2,3] ∪ [4,∞)", "(-∞,2) ∪ (3,4)"],
    "javob": "(-∞,2] ∪ [4,∞) ∪ {3}"
  },
  {
    "savol": "x²(x-2)(x-5)⁵⁷ > 0 tengsizlikni yeching.",
    "variantlar": ["(-∞,0) ∪ (0,2) ∪ (5,∞)", "(-∞,2) ∪ (5,∞)", "(0,2) ∪ (5,∞)", "(-∞,0) ∪ (2,5)"],
    "javob": "(-∞,0) ∪ (0,2) ∪ (5,∞)"
  },
  {
    "savol": "(x-1)(x-2)²(x-3)³(x-4)⁴ ≤ 0 tengsizlikni yeching.",
    "variantlar": ["[1,2] ∪ [3,4]", "[1,3] ∪ [4,∞)", "(-∞,1] ∪ [2,3] ∪ [4,∞)", "[1,2] ∪ [3,∞)"],
    "javob": "[1,2] ∪ [3,4]"
  },
  {
    "savol": "x(x-5)⁵(x-6)⁶(x+4) > 0 tengsizlikni yeching.",
    "variantlar": ["(-4,0) ∪ (0,5) ∪ (6,∞)", "(-∞,-4) ∪ (0,5) ∪ (6,∞)", "(-4,5) ∪ (6,∞)", "(-4,0) ∪ (5,6)"],
    "javob": "(-4,0) ∪ (0,5) ∪ (6,∞)"
  },
  {
    "savol": "x - 2 ≤ 25/(x-2) tengsizlikni yeching.",
    "variantlar": ["(-∞,-3] ∪ (2,7]", "[-3,2) ∪ [7,∞)", "(-∞,-3) ∪ [2,7)", "(-3,2] ∪ (7,∞)"],
    "javob": "(-∞,-3] ∪ (2,7]"
  },
  {
    "savol": "x + 1 ≥ 16/(x+1) tengsizlikni yeching.",
    "variantlar": ["[-5,-1) ∪ [3,∞)", "(-∞,-5] ∪ (-1,3]", "[-5,3]", "(-∞,-5) ∪ (-1,∞)"],
    "javob": "[-5,-1) ∪ [3,∞)"
  }
],





	theme5: [
  {
    "savol": "a ning qanday qiymatida 2x² + 4x - a = 0 tenglamaning ildizlari yig'indisi 3 ga teng bo'ladi?",
    "variantlar": [2, 4, 6, 8],
    "javob": 2
  },
  {
    "savol": "a ning qanday qiymatida 2x² + 10x + c = 0 tenglamaning ildizlari yig'indisi 4 ga teng bo'ladi?",
    "variantlar": [-5, -4, -3, -2],
    "javob": -5
  },
  {
    "savol": "a ning qanday qiymatida 3x² + 9x - d = 0 tenglamaning ildizlari yig'indisi 8 ga teng bo'ladi?",
    "variantlar": [24, 18, 12, 6],
    "javob": 6
  },
  {
    "savol": "a ning qanday qiymatida 3x² + 10x + c = 0 tenglamaning ildizlari yig'indisi 9 ga teng bo'ladi?",
    "variantlar": [-10, -9, -8, -7],
    "javob": -10
  },
  {
    "savol": "k ning qanday qiymatida (k² - 25)x² = (k - 4)x + 1 tenglama ildizga ega bo'lmaydi?",
    "variantlar": ["k = 5", "k = -5", "k = 4", "k = ±5"],
    "javob": "k = ±5"
  },
  {
    "savol": "k ning qanday qiymatida (k² + 40)x² = (k + 10)x + 2 tenglama ildizga ega bo'lmaydi?",
    "variantlar": ["k = -10", "k = 10", "k = ±√40", "k = 0"],
    "javob": "k = ±√40"
  },
  {
    "savol": "k ning qanday qiymatida (k² + 3)x² = (k - 2)x + 4 tenglama yagona ildizga ega?",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "k ning qanday qiymatida (k² + 1)x² = (k + 1)x + 5 tenglama yagona ildizga ega?",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "k ning qanday qiymatida (k² + 2)x² = (k - 2)x + 3 tenglama ildizlari kvadratlari yig'indisi 4 ga teng?",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "k ning qanday qiymatida (k² + 6)x² = (k + 6)x + 1 tenglama ildizlari kvadratlari yig'indisi 5 ga teng?",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  },
  {
    "savol": "k ning qanday qiymatida (k² + 4)x² = (k - 2)x + 7 tenglama ildizlari ko'paytmasi 2 ga teng?",
    "variantlar": [1, 2, 3, 4],
    "javob": 3
  },
  {
    "savol": "k ning qanday qiymatida (k² + 10)x² = (k + 10)x + 8 tenglama ildizlari ko'paytmasi 3 ga teng?",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "m ning qanday qiymatida 4x² + mx + 16 = 0 tenglama ildizlari kvadratlari yig'indisi 9 ga teng?",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "m ning qanday qiymatida 4x² + 2mx + 9 = 0 tenglama ildizlari kvadratlari yig'indisi 10 ga teng?",
    "variantlar": [4, 6, 8, 10],
    "javob": 6
  },
  {
    "savol": "m ning qanday qiymatida 4x² + 4mx + 25 = 0 tenglama ildizlari yig'indisi 5 ga teng?",
    "variantlar": [5, 10, 15, 20],
    "javob": 10
  },
  {
    "savol": "k ning qanday qiymatida 3x² + 2k = 0 tenglama haqiqiy yechimga ega bo'lmaydi?",
    "variantlar": ["k > 0", "k < 0", "k = 0", "k ≠ 0"],
    "javob": "k > 0"
  },
  {
    "savol": "k ning qanday qiymatida 3x² + k = 0 tenglama haqiqiy yechimga ega bo'lmaydi?",
    "variantlar": ["k > 0", "k < 0", "k = 0", "k ≠ 0"],
    "javob": "k > 0"
  },
  {
    "savol": "a ning qanday qiymatida (a-2)x² + 4x + 1 = 0 tenglama ikkita haqiqiy ildizga ega?",
    "variantlar": ["a < 6", "a ≤ 6", "a > 6", "a ≥ 6"],
    "javob": "a < 6"
  },
  {
    "savol": "a ning qanday qiymatida (a+3)x² - 6x + 2 = 0 tenglama ikkita haqiqiy ildizga ega?",
    "variantlar": ["a < 1.5", "a > 1.5", "a < -1.5", "a > -1.5"],
    "javob": "a < 1.5"
  },
  {
    "savol": "m ning qanday qiymatida x² + mx + 16 = 0 tenglama ildizlari kvadratlari yig'indisi 32 ga teng?",
    "variantlar": [4, 6, 8, 10],
    "javob": 8
  },
  {
    "savol": "m ning qanday qiymatida x² - mx + 9 = 0 tenglama ildizlari kvadratlari yig'indisi 18 ga teng?",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "a ning qanday qiymatida 2x² + ax + 8 = 0 tenglama ildizlari yig'indisi 6 ga teng?",
    "variantlar": [-12, -10, -8, -6],
    "javob": -12
  },
  {
    "savol": "a ning qanday qiymatida 3x² - ax + 12 = 0 tenglama ildizlari yig'indisi 8 ga teng?",
    "variantlar": [24, 20, 16, 12],
    "javob": 24
  },
  {
    "savol": "k ning qanday qiymatida (k-1)x² + (k+1)x + 1 = 0 tenglama ildizlari o'zaro teng?",
    "variantlar": [3, 4, 5, 6],
    "javob": 3
  },
  {
    "savol": "k ning qanday qiymatida (k+2)x² + (k-2)x + 2 = 0 tenglama ildizlari o'zaro teng?",
    "variantlar": [2, 4, 6, 8],
    "javob": 6
  },
  {
    "savol": "a ning qanday qiymatida x² - 2ax + a² - 1 = 0 tenglama ildizlari orasida 3 soni bo'ladi?",
    "variantlar": [2, 4, 6, 8],
    "javob": 4
  },
  {
    "savol": "a ning qanday qiymatida x² - (a+1)x + a = 0 tenglama ildizlari orasida 5 soni bo'ladi?",
    "variantlar": [5, 6, 7, 8],
    "javob": 5
  },
  {
    "savol": "m ning qanday qiymatida x² + mx - 8 = 0 tenglama ildizlari ayirmasi 6 ga teng?",
    "variantlar": [2, 4, 6, 8],
    "javob": 4
  },
  {
    "savol": "m ning qanday qiymatida x² - mx + 12 = 0 tenglama ildizlari ayirmasi 4 ga teng?",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "a ning qanday qiymatida (a-3)x² - 2ax + 5 = 0 tenglama ildizlaridan biri 1 ga teng?",
    "variantlar": [2, 4, 6, 8],
    "javob": 4
  },
  {
    "savol": "a ning qanday qiymatida (a+2)x² - 3ax + 4 = 0 tenglama ildizlaridan biri -1 ga teng?",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "k ning qanday qiymatida x² + kx + k + 3 = 0 tenglama ildizlari yig'indisi ularning ko'paytmasiga teng?",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  },
  {
    "savol": "k ning qanday qiymatida x² - kx + k - 2 = 0 tenglama ildizlari yig'indisi ularning ko'paytmasiga teng?",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "a ning qanday qiymatida x² - 2ax + a² - 4 = 0 tenglama ildizlari 3 va 5 bo'ladi?",
    "variantlar": [4, 5, 6, 7],
    "javob": 4
  },
  {
    "savol": "a ning qanday qiymatida x² - 3ax + 2a² = 0 tenglama ildizlari 2 va 4 bo'ladi?",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "m ning qanday qiymatida 2x² - mx + 2 = 0 tenglama ildizlari o'zaro teskari sonlar bo'ladi?",
    "variantlar": [2, 4, 6, 8],
    "javob": 4
  },
  {
    "savol": "m ning qanday qiymatida 3x² + mx - 3 = 0 tenglama ildizlari o'zaro teskari sonlar bo'ladi?",
    "variantlar": [3, 6, 9, 12],
    "javob": 6
  },
  {
    "savol": "a ning qanday qiymatida ax² + 6x + 1 = 0 tenglama ildizlari orasida 2 soni bo'ladi?",
    "variantlar": [-3, -2, -1, 0],
    "javob": -2
  },
  {
    "savol": "a ning qanday qiymatida ax² - 8x + 3 = 0 tenglama ildizlari orasida 1 soni bo'ladi?",
    "variantlar": [5, 6, 7, 8],
    "javob": 5
  },
  {
    "savol": "k ning qanday qiymatida (k-2)x² + (k+1)x + 2 = 0 tenglama ikkala ildizi ham manfiy?",
    "variantlar": ["k < -1", "k > 2", "-1 < k < 2", "k < -1 yoki k > 2"],
    "javob": "k < -1 yoki k > 2"
  }
],





theme6: [
  {
    "savol": "x ≥ 1 bo'lsa, |x - 1| ifodani soddalashtiring.",
    "variantlar": ["x - 1", "1 - x", "x + 1", "-x - 1"],
    "javob": "x - 1"
  },
  {
    "savol": "x ≤ -2 bo'lsa, |x + 2| ifodani soddalashtiring.",
    "variantlar": ["-x - 2", "x + 2", "x - 2", "-x + 2"],
    "javob": "-x - 2"
  },
  {
    "savol": "x ≥ 2 bo'lsa, |2x - 4| ifodani soddalashtiring.",
    "variantlar": ["2x - 4", "4 - 2x", "2x + 4", "-2x - 4"],
    "javob": "2x - 4"
  },
  {
    "savol": "x ≥ 3 bo'lsa, |3x - 9| ifodani soddalashtiring.",
    "variantlar": ["3x - 9", "9 - 3x", "3x + 9", "-3x - 9"],
    "javob": "3x - 9"
  },
  {
    "savol": "x ≤ -2 bo'lsa, |4x + 6| ifodani soddalashtiring.",
    "variantlar": ["-4x - 6", "4x + 6", "4x - 6", "-4x + 6"],
    "javob": "-4x - 6"
  },
  {
    "savol": "x ≥ 2 bo'lsa, |x - 2| + |x + 2| ifodani soddalashtiring.",
    "variantlar": ["2x", "4", "2x + 4", "x² - 4"],
    "javob": "2x"
  },
  {
    "savol": "x ≥ 3 bo'lsa, |x - 3| + |x + 3| ifodani soddalashtiring.",
    "variantlar": ["2x", "6", "2x + 6", "x² - 9"],
    "javob": "2x"
  },
  {
    "savol": "-4 < x ≤ 1 bo'lsa, |x - 1| + |x + 4| ifodani soddalashtiring.",
    "variantlar": ["5", "-2x - 3", "2x + 3", "-5"],
    "javob": "5"
  },
  {
    "savol": "x > 0.5 bo'lsa, |x + 1| + |x + 3| ifodani soddalashtiring.",
    "variantlar": ["2x + 4", "4", "-2x - 4", "2x - 4"],
    "javob": "2x + 4"
  },
  {
    "savol": "-5 ≤ x ≤ -2 bo'lsa, |x + 2| + |x + 5| ifodani soddalashtiring.",
    "variantlar": ["-2x - 7", "3", "-3", "2x + 7"],
    "javob": "3"
  },
  {
    "savol": "x > 1 bo'lsa, |2x - 2| + |x + 3| ifodani soddalashtiring.",
    "variantlar": ["3x + 1", "x + 5", "3x - 1", "x - 5"],
    "javob": "3x + 1"
  },
  {
    "savol": "x < -2 bo'lsa, |3x - 3| + |2x + 3| ifodani soddalashtiring.",
    "variantlar": ["-5x", "5x", "-x - 6", "x + 6"],
    "javob": "-5x"
  },
  {
    "savol": "-2 < x ≤ 0 bo'lsa, |4x - 2| + |2x + 4| ifodani soddalashtiring.",
    "variantlar": ["-2x + 2", "6x + 2", "-6x + 2", "2x + 6"],
    "javob": "-2x + 2"
  },
  {
    "savol": "x ≥ 1 bo'lsa, |2x + 1| + |-3x + 3| ifodani soddalashtiring.",
    "variantlar": ["-x + 4", "5x - 2", "-5x + 4", "x + 2"],
    "javob": "-x + 4"
  },
  {
    "savol": "-0.6 < x ≤ 2 bo'lsa, |x + 2| + |3x + 5| ifodani soddalashtiring.",
    "variantlar": ["4x + 7", "-2x - 3", "2x + 7", "-4x - 3"],
    "javob": "4x + 7"
  },
  {
    "savol": "x > -1 bo'lsa, x - 2 - (x² - 1)/|x + 1| ifodani soddalashtiring.",
    "variantlar": ["-1", "2x - 3", "-2x + 1", "x - 3"],
    "javob": "-1"
  },
  {
    "savol": "x < -4 bo'lsa, (2x + 2)/(x - |x + 2|) + 2x ifodani soddalashtiring.",
    "variantlar": ["2x - 1", "2x + 1", "x - 2", "x + 2"],
    "javob": "2x + 1"
  },
  {
    "savol": "-2 < x ≤ 4 bo'lsa, |x - 4| - |x + 2| - x ifodani soddalashtiring.",
    "variantlar": ["-x - 6", "-3x + 2", "-x + 2", "-3x - 2"],
    "javob": "-x - 6"
  },
  {
    "savol": "x < -2.5 bo'lsa, x|x + 2| - (x + 3)|x - 1| ifodani soddalashtiring.",
    "variantlar": ["-2x² - 4x + 3", "2x² + 4x - 3", "-4x - 3", "4x + 3"],
    "javob": "-2x² - 4x + 3"
  },
  {
    "savol": "0 < x ≤ 3 bo'lsa, |x - 3|(|x| + 3) - x² ifodani soddalashtiring.",
    "variantlar": ["-x² - 3x + 9", "x² + 3x - 9", "-6x + 9", "6x - 9"],
    "javob": "-6x + 9"
  },
  {
    "savol": "|4x - 2| = 4x - 2 tenglamani yeching.",
    "variantlar": ["x ≥ 0.5", "x ≤ 0.5", "x > 0.5", "x < 0.5"],
    "javob": "x ≥ 0.5"
  },
  {
    "savol": "|2x - 6| = 2x - 6 tenglamani yeching.",
    "variantlar": ["x ≥ 3", "x ≤ 3", "x > 3", "x < 3"],
    "javob": "x ≥ 3"
  },
  {
    "savol": "|4 - x²| = 4 - x² tenglamani yeching.",
    "variantlar": ["-2 ≤ x ≤ 2", "x ≤ -2 yoki x ≥ 2", "x > 2", "x < -2"],
    "javob": "-2 ≤ x ≤ 2"
  },
  {
    "savol": "|x² - 9| = x² - 9 tenglamani yeching.",
    "variantlar": ["x ≤ -3 yoki x ≥ 3", "-3 ≤ x ≤ 3", "x > 3", "x < -3"],
    "javob": "x ≤ -3 yoki x ≥ 3"
  },
  {
    "savol": "|x² - 2x| = x² - 2x tenglamani yeching.",
    "variantlar": ["x ≤ 0 yoki x ≥ 2", "0 ≤ x ≤ 2", "x > 2", "x < 0"],
    "javob": "x ≤ 0 yoki x ≥ 2"
  },
  {
    "savol": "|3x - 2| = -3x + 2 tenglamani yeching.",
    "variantlar": ["x ≤ 2/3", "x ≥ 2/3", "x > 2/3", "x < 2/3"],
    "javob": "x ≤ 2/3"
  },
  {
    "savol": "|4x - 6| = -4x + 6 tenglamani yeching.",
    "variantlar": ["x ≤ 1.5", "x ≥ 1.5", "x > 1.5", "x < 1.5"],
    "javob": "x ≤ 1.5"
  },
  {
    "savol": "|x² - 4x + 3| = 4x - x² - 3 tenglamani yeching.",
    "variantlar": ["1 ≤ x ≤ 3", "x ≤ 1 yoki x ≥ 3", "x < 1", "x > 3"],
    "javob": "1 ≤ x ≤ 3"
  },
  {
    "savol": "|x² - 10x + 9| = 10x - x² - 9 tenglamani yeching.",
    "variantlar": ["1 ≤ x ≤ 9", "x ≤ 1 yoki x ≥ 9", "x < 1", "x > 9"],
    "javob": "1 ≤ x ≤ 9"
  },
  {
    "savol": "|x³ - x| = x - x³ tenglamani yeching.",
    "variantlar": ["-1 ≤ x ≤ 0 yoki x ≥ 1", "x ≤ -1 yoki 0 ≤ x ≤ 1", "x > 1", "x < -1"],
    "javob": "-1 ≤ x ≤ 0 yoki x ≥ 1"
  },
  {
    "savol": "|2x - 3| = 0 tenglamani yeching.",
    "variantlar": ["x = 1.5", "x = -1.5", "x = 0", "x = 3"],
    "javob": "x = 1.5"
  },
  {
    "savol": "|3x - 4| = 0 tenglamani yeching.",
    "variantlar": ["x = 4/3", "x = -4/3", "x = 0", "x = 4"],
    "javob": "x = 4/3"
  },
  {
    "savol": "|5x + 3| = -8 tenglamani yeching.",
    "variantlar": ["yechim yo'q", "x = -2.2", "x = 1", "x = -1"],
    "javob": "yechim yo'q"
  },
  {
    "savol": "|3x - 1| = 5 tenglamani yeching.",
    "variantlar": ["x = 2, x = -4/3", "x = -2, x = 4/3", "x = 2, x = 4/3", "x = -2, x = -4/3"],
    "javob": "x = 2, x = -4/3"
  },
  {
    "savol": "|6x - 11| = 7 tenglamani yeching.",
    "variantlar": ["x = 3, x = 2/3", "x = -3, x = -2/3", "x = 3, x = -2/3", "x = -3, x = 2/3"],
    "javob": "x = 3, x = 2/3"
  },
  {
    "savol": "|8 - 3x| = 2 tenglamani yeching.",
    "variantlar": ["x = 2, x = 10/3", "x = -2, x = -10/3", "x = 2, x = -10/3", "x = -2, x = 10/3"],
    "javob": "x = 2, x = 10/3"
  },
  {
    "savol": "|x² - 5x| = 0 tenglamani yeching.",
    "variantlar": ["x = 0, x = 5", "x = 0", "x = 5", "x = -5"],
    "javob": "x = 0, x = 5"
  },
  {
    "savol": "|3x - x²| = -11 tenglamani yeching.",
    "variantlar": ["yechim yo'q", "x = 0", "x = 3", "x = -3"],
    "javob": "yechim yo'q"
  },
  {
    "savol": "|x² - 17| = 19 tenglamani yeching.",
    "variantlar": ["x = ±6, x = ±√2", "x = ±6", "x = ±√2", "x = 6, x = √2"],
    "javob": "x = ±6, x = ±√2"
  },
  {
    "savol": "|2x - 4| + |x - 3| = |3x - 7| tenglamani yeching.",
    "variantlar": ["x ≤ 2 yoki x ≥ 3", "2 ≤ x ≤ 3", "x ≥ 3", "x ≤ 2"],
    "javob": "x ≤ 2 yoki x ≥ 3"
  }
],






theme7: [
  {
    "savol": "|x| > -1 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x > 0", "x < 0", "x = ∅"],
    "javob": "x ∈ R"
  },
  {
    "savol": "|3x| < -3 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x = ∅", "x > 0", "x < 0"],
    "javob": "x = ∅"
  },
  {
    "savol": "|2x + 7| ≥ -4 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x = ∅", "x > -3.5", "x < -3.5"],
    "javob": "x ∈ R"
  },
  {
    "savol": "|x² - 9| < -5 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x = ∅", "-3 < x < 3", "x < -3 yoki x > 3"],
    "javob": "x = ∅"
  },
  {
    "savol": "|x - 4| < 0 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x = ∅", "x = 4", "x < 4"],
    "javob": "x = ∅"
  },
  {
    "savol": "|x - 5| ≤ 0 tengsizlikni yeching.",
    "variantlar": ["x = 5", "x ∈ R", "x ≤ 5", "x ≥ 5"],
    "javob": "x = 5"
  },
  {
    "savol": "|x² - x - 2| > 0 tengsizlikni yeching.",
    "variantlar": ["x ≠ -1, x ≠ 2", "x ∈ R", "x = ∅", "-1 < x < 2"],
    "javob": "x ≠ -1, x ≠ 2"
  },
  {
    "savol": "|x² - 2x - 3| ≥ 0 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x = ∅", "x = 3, x = -1", "x < -1 yoki x > 3"],
    "javob": "x ∈ R"
  },
  {
    "savol": "|x² - 5x + 4| < 0 tengsizlikni yeching.",
    "variantlar": ["x ∈ R", "x = ∅", "1 < x < 4", "x < 1 yoki x > 4"],
    "javob": "x = ∅"
  },
  {
    "savol": "|x² - 6x + 5| ≤ 0 tengsizlikni yeching.",
    "variantlar": ["x = 1, x = 5", "1 ≤ x ≤ 5", "x ∈ R", "x = ∅"],
    "javob": "x = 1, x = 5"
  },
  {
    "savol": "|x| ≤ 2 tengsizlikni yeching.",
    "variantlar": ["-2 ≤ x ≤ 2", "x ≤ -2 yoki x ≥ 2", "x > -2", "x < 2"],
    "javob": "-2 ≤ x ≤ 2"
  },
  {
    "savol": "|3x| ≤ 9 tengsizlikni yeching.",
    "variantlar": ["-3 ≤ x ≤ 3", "x ≤ -3 yoki x ≥ 3", "-9 ≤ x ≤ 9", "x ≤ -9 yoki x ≥ 9"],
    "javob": "-3 ≤ x ≤ 3"
  },
  {
    "savol": "|2x| > 6 tengsizlikni yeching.",
    "variantlar": ["x < -3 yoki x > 3", "-3 < x < 3", "x < -6 yoki x > 6", "-6 < x < 6"],
    "javob": "x < -3 yoki x > 3"
  },
  {
    "savol": "|x| > 5 tengsizlikni yeching.",
    "variantlar": ["x < -5 yoki x > 5", "-5 < x < 5", "x > 5", "x < -5"],
    "javob": "x < -5 yoki x > 5"
  },
  {
    "savol": "|x| < 4 tengsizlikni yeching.",
    "variantlar": ["-4 < x < 4", "x < -4 yoki x > 4", "x < 4", "x > -4"],
    "javob": "-4 < x < 4"
  },
  {
    "savol": "|x| ≥ 2 tengsizlikni yeching.",
    "variantlar": ["x ≤ -2 yoki x ≥ 2", "-2 ≤ x ≤ 2", "x ≥ 2", "x ≤ -2"],
    "javob": "x ≤ -2 yoki x ≥ 2"
  },
  {
    "savol": "|4x - 2| < 7 tengsizlikni yeching.",
    "variantlar": ["-1.25 < x < 2.25", "x < -1.25 yoki x > 2.25", "-2.25 < x < 1.25", "x < -2.25 yoki x > 1.25"],
    "javob": "-1.25 < x < 2.25"
  },
  {
    "savol": "|5x - 1| < 1 tengsizlikni yeching.",
    "variantlar": ["0 < x < 0.4", "-0.4 < x < 0", "x < 0 yoki x > 0.4", "x < -0.4 yoki x > 0"],
    "javob": "0 < x < 0.4"
  },
  {
    "savol": "|7 + x| > 2 tengsizlikni yeching.",
    "variantlar": ["x < -9 yoki x > -5", "-9 < x < -5", "x < -5 yoki x > -9", "x > -5"],
    "javob": "x < -9 yoki x > -5"
  },
  {
    "savol": "|2x - 3| < 4 tengsizlikni yeching.",
    "variantlar": ["-0.5 < x < 3.5", "x < -0.5 yoki x > 3.5", "-3.5 < x < 0.5", "x < -3.5 yoki x > 0.5"],
    "javob": "-0.5 < x < 3.5"
  },
  {
    "savol": "|2x - 4| > 5 tengsizlikni yeching.",
    "variantlar": ["x < -0.5 yoki x > 4.5", "-0.5 < x < 4.5", "x < -4.5 yoki x > 0.5", "-4.5 < x < 0.5"],
    "javob": "x < -0.5 yoki x > 4.5"
  },
  {
    "savol": "|4x + 1| < 3 tengsizlikni yeching.",
    "variantlar": ["-1 < x < 0.5", "x < -1 yoki x > 0.5", "-0.5 < x < 1", "x < -0.5 yoki x > 1"],
    "javob": "-1 < x < 0.5"
  },
  {
    "savol": "|3x + 5/2| ≥ 2 tengsizlikni yeching.",
    "variantlar": ["x ≤ -1.5 yoki x ≥ -0.17", "-1.5 ≤ x ≤ -0.17", "x ≤ -0.17 yoki x ≥ 1.5", "-0.17 ≤ x ≤ 1.5"],
    "javob": "x ≤ -1.5 yoki x ≥ -0.17"
  },
  {
    "savol": "|x² + 5x| < 6 tengsizlikni yeching.",
    "variantlar": ["-6 < x < -1 yoki 1 < x < 6", "-6 < x < 6", "x < -6 yoki x > 6", "-1 < x < 1"],
    "javob": "-6 < x < -1 yoki 1 < x < 6"
  },
  {
    "savol": "|x² + 3x| ≥ 4 tengsizlikni yeching.",
    "variantlar": ["x ≤ -4 yoki x ≥ 1", "-4 ≤ x ≤ 1", "x ≤ -1 yoki x ≥ 4", "-1 ≤ x ≤ 4"],
    "javob": "x ≤ -4 yoki x ≥ 1"
  },
  {
    "savol": "|2x - 1| < |x - 3| tengsizlikni yeching.",
    "variantlar": ["-2 < x < 4/3", "x < -2 yoki x > 4/3", "4/3 < x < 2", "x < 4/3 yoki x > 2"],
    "javob": "-2 < x < 4/3"
  },
  {
    "savol": "|x - 1|(9 - x²) < 0 tengsizlikni yeching.",
    "variantlar": ["-3 < x < 1 yoki 1 < x < 3", "x < -3 yoki x > 3", "x < -3 yoki 1 < x < 3", "-3 < x < 1 yoki x > 3"],
    "javob": "-3 < x < 1 yoki 1 < x < 3"
  },
  {
    "savol": "|x - 4|/(x² - 5x + 6) ≥ 0 tengsizlikni yeching.",
    "variantlar": "(2,3) ∪ {4}",
    "javob": "(2,3) ∪ {4}"
  },
  {
    "savol": "|x - 1|/(x² - 5x + 6) ≤ 0 tengsizlikni yeching.",
    "variantlar": "(-∞,2) ∪ (3,∞) ∪ {1}",
    "javob": "(-∞,2) ∪ (3,∞) ∪ {1}"
  },
  {
    "savol": "|x + 3|/(x² - 3x + 2) ≤ 0 tengsizlikni yeching.",
    "variantlar": "(-∞,1) ∪ (2,∞) ∪ {-3}",
    "javob": "(-∞,1) ∪ (2,∞) ∪ {-3}"
  },
  {
    "savol": "|x|/(x² + 6x + 5) > 0 tengsizlikni yeching.",
    "variantlar": "(-∞,-5) ∪ (-5,-1) ∪ (-1,0) ∪ (0,∞)",
    "javob": "(-∞,-5) ∪ (-5,-1) ∪ (-1,0) ∪ (0,∞)"
  },
  {
    "savol": "|x - 3|/(x² - 4x + 3) < 0 tengsizlikni yeching.",
    "variantlar": "(1,3)",
    "javob": "(1,3)"
  },
  {
    "savol": "|x - 2| < 2x - 7 tengsizlikni yeching.",
    "variantlar": ["x > 5", "x > 3", "x < 5", "x < 3"],
    "javob": "x > 5"
  },
  {
    "savol": "|x - 3| < 3x - 11 tengsizlikni yeching.",
    "variantlar": ["x > 4", "x > 3.5", "x < 4", "x < 3.5"],
    "javob": "x > 4"
  },
  {
    "savol": "|x + 1| < 2x - 1 tengsizlikni yeching.",
    "variantlar": ["x > 2", "x > 0", "x < 2", "x < 0"],
    "javob": "x > 2"
  },
  {
    "savol": "|x - 1| + |2 - x| > 3 tengsizlikni yeching.",
    "variantlar": ["x < 0 yoki x > 3", "0 < x < 3", "x < -3 yoki x > 0", "-3 < x < 0"],
    "javob": "x < 0 yoki x > 3"
  },
  {
    "savol": "|x + 3| + |x - 4| ≤ 11 tengsizlikni yeching.",
    "variantlar": ["-5 ≤ x ≤ 6", "x ≤ -5 yoki x ≥ 6", "-6 ≤ x ≤ 5", "x ≤ -6 yoki x ≥ 5"],
    "javob": "-5 ≤ x ≤ 6"
  },
  {
    "savol": "|x - 2| + |x| ≤ 4 tengsizlikni yeching.",
    "variantlar": ["-1 ≤ x ≤ 3", "x ≤ -1 yoki x ≥ 3", "-2 ≤ x ≤ 2", "x ≤ -2 yoki x ≥ 2"],
    "javob": "-1 ≤ x ≤ 3"
  },
  {
    "savol": "|5x - 5| + |5x - 3| > 5 tengsizlikni yeching.",
    "variantlar": ["x < 0.3 yoki x > 1.3", "0.3 < x < 1.3", "x < 0.2 yoki x > 1.2", "0.2 < x < 1.2"],
    "javob": "x < 0.3 yoki x > 1.3"
  },
  {
    "savol": "(x² - x - 6)/(x + 2) ≥ 2 tengsizlikni yeching.",
    "variantlar": "[-2, 5]",
    "javob": "[-2, 5]"
  }
],





theme8: [
  {
    "savol": "((a²b⁻³)/(a³b⁻¹))² ifodani soddalashtiring.",
    "variantlar": ["a⁻²b⁻⁴", "a²b⁴", "a⁻²b⁴", "a²b⁻⁴"],
    "javob": "a⁻²b⁻⁴"
  },
  {
    "savol": "((a²b³)⁻²(ab⁻¹)³)/(a⁻²b³) ifodani soddalashtiring.",
    "variantlar": ["a⁻⁵b⁻⁶", "a⁵b⁶", "a⁻⁵b⁶", "a⁵b⁻⁶"],
    "javob": "a⁻⁵b⁻⁶"
  },
  {
    "savol": "xy²(x⁻¹y³)³ ÷ x⁴y⁵ ifodani soddalashtiring.",
    "variantlar": ["x⁻⁶y⁶", "x⁶y⁶", "x⁻⁶y⁻⁶", "x⁶y⁻⁶"],
    "javob": "x⁻⁶y⁶"
  },
  {
    "savol": "(a^(-2/5) · a^(6/5))/(a^(-8/5)) ifodani soddalashtiring.",
    "variantlar": ["a^(12/5)", "a^(4/5)", "a^(16/5)", "a^(8/5)"],
    "javob": "a^(12/5)"
  },
  {
    "savol": "(b · (a^(1/3)b^(-2/3)) · a⁻¹)^(1/2) ifodani soddalashtiring.",
    "variantlar": ["a⁻¹^(1/3)b^(1/6)", "a⁻¹^(1/3)b^(1/6)", "a⁻¹^(1/3)b^(1/6)", "a⁻¹^(1/3)b^(1/6)"],
    "javob": "a⁻¹^(1/3)b^(1/6)"
  },
  {
    "savol": "(x^(-1/2) · y^(-1/3))^(1/3) · (x^(5/4) · y^(1/6)) ifodani soddalashtiring.",
    "variantlar": ["x^(13/12)y^(1/6)", "x^(13/12)y^(-1/6)", "x^(-13/12)y^(1/6)", "x^(-13/12)y^(-1/6)"],
    "javob": "x^(13/12)y^(1/6)"
  },
  {
    "savol": "(x^(1/4) · y^(-3/2))⁻² · (x^(1/2) · y^(-3/2))³ ifodani soddalashtiring.",
    "variantlar": ["x^(1/2)y^(-3/2)", "x^(-1/2)y^(3/2)", "x^(1/2)y^(3/2)", "x^(-1/2)y^(-3/2)"],
    "javob": "x^(1/2)y^(-3/2)"
  },
  {
    "savol": "x · x² · x√x ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x^(4.5)", "x^(5)", "x^(4)", "x^(3.5)"],
    "javob": "x^(4.5)"
  },
  {
    "savol": "x√x · ∛x ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x^(1.5 + 1/3)", "x^(1.5 + 1/3) = x^(11/6)", "x^(5/3)", "x^(4/3)"],
    "javob": "x^(11/6)"
  },
  {
    "savol": "x² · (√(x⁻¹))⁶ ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x² · x⁻³ = x⁻¹", "x² · x³ = x⁵", "x² · x⁻⁶ = x⁻⁴", "x² · x⁶ = x⁸"],
    "javob": "x⁻¹"
  },
  {
    "savol": "∛(x√x) ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x^(1/2)", "x^(1/3)", "x^(1/4)", "x^(1/6)"],
    "javob": "x^(1/2)"
  },
  {
    "savol": "x√(x√x) ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x^(7/4)", "x^(5/4)", "x^(3/4)", "x^(1/4)"],
    "javob": "x^(7/4)"
  },
  {
    "savol": "x² ∛(x√x) ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x^(2 + 1/2) = x^(5/2)", "x^(2 + 1/3) = x^(7/3)", "x^(2 + 1/4) = x^(9/4)", "x^(2 + 1/6) = x^(13/6)"],
    "javob": "x^(5/2)"
  },
  {
    "savol": "x√(x∛(x√x)) ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x^(43/24)", "x^(23/12)", "x^(11/6)", "x^(7/4)"],
    "javob": "x^(43/24)"
  },
  {
    "savol": "(x²√(x√x))/(15√(x⁴)) ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x^(7/4 - 2) = x^(-1/4)", "x^(7/4 - 2) = x^(-1/4)", "x^(5/4 - 2) = x^(-3/4)", "x^(9/4 - 2) = x^(1/4)"],
    "javob": "x^(-1/4)"
  },
  {
    "savol": "(x√(x∛(x²)))/(x√(x√x)) ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x^(1/12)", "x^(-1/12)", "x^(1/6)", "x^(-1/6)"],
    "javob": "x^(-1/12)"
  },
  {
    "savol": "√(x√(x√x))/∛(x√(x√x)) ni asosi x bo'lgan daraja shaklida yozing.",
    "variantlar": ["x^(7/8 - 7/12) = x^(7/24)", "x^(7/8 - 7/12) = x^(7/24)", "x^(5/8 - 5/12) = x^(5/24)", "x^(9/8 - 9/12) = x^(9/24)"],
    "javob": "x^(7/24)"
  },
  {
    "savol": "a > 0 bo'lsa, √(a⁴) - ⁵√(a⁵) + ⁶√(a⁶) ni soddalashtiring.",
    "variantlar": ["a² - a + a = a²", "a² - a + |a| = a²", "|a²| - a + |a|", "a⁴ - a⁵ + a⁶"],
    "javob": "a²"
  },
  {
    "savol": "a < 0 bo'lsa, √(a²) - ∛(a³) + ⁴√(a⁴) ni soddalashtiring.",
    "variantlar": ["|a| - a + |a| = -a - a - a = -3a", "|a| - a + |a| = -a - a - a = -3a", "a - a + a = a", "-a - a - a = -3a"],
    "javob": "-3a"
  },
  {
    "savol": "27^(3/2) - 16^(3/4) ni hisoblang.",
    "variantlar": [127, 128, 129, 130],
    "javob": 127
  },
  {
    "savol": "81^(3/4) + 27^(1/3) ni hisoblang.",
    "variantlar": [27, 28, 29, 30],
    "javob": 30
  },
  {
    "savol": "125^(2/3) - 343^(1/3) ni hisoblang.",
    "variantlar": [18, 19, 20, 21],
    "javob": 18
  },
  {
    "savol": "2³ · 4² ni hisoblang.",
    "variantlar": [32, 64, 128, 256],
    "javob": 128
  },
  {
    "savol": "2⁻² · 8² ni hisoblang.",
    "variantlar": [4, 8, 16, 32],
    "javob": 16
  },
  {
    "savol": "3⁻¹ · 9² ni hisoblang.",
    "variantlar": [9, 18, 27, 36],
    "javob": 27
  },
  {
    "savol": "5⁴ · 25⁻² ni hisoblang.",
    "variantlar": [0.04, 0.2, 1, 5],
    "javob": 0.04
  },
  {
    "savol": "(5⁻¹)³ : 25⁻² ni hisoblang.",
    "variantlar": [5, 25, 125, 625],
    "javob": 125
  },
  {
    "savol": "∛27 · 8 - 0.5 ∛32 ni hisoblang.",
    "variantlar": [22, 23, 24, 25],
    "javob": 24
  },
  {
    "savol": "3 · ∛(-27) + ∛10 · 100 ni hisoblang.",
    "variantlar": [990, 991, 992, 993],
    "javob": 991
  },
  {
    "savol": "∛64 - ∛∛64 ni hisoblang.",
    "variantlar": [2, 3, 4, 5],
    "javob": 2
  },
  {
    "savol": "∛(-23) - ∛((-2)³) ni hisoblang.",
    "variantlar": [0, -1, 1, 2],
    "javob": 0
  },
  {
    "savol": "27^(2/3) - (1/16)^(-0.5) ni hisoblang.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "(√19 + √8)/(√4 + √3) ni hisoblang.",
    "variantlar": [3, 4, 5, 6],
    "javob": 3
  },
  {
    "savol": "∛3 va ∛√72 sonlarini taqqoslang.",
    "variantlar": ["∛3 > ∛√72", "∛3 < ∛√72", "∛3 = ∛√72", "Taqqoslab bo'lmaydi"],
    "javob": "∛3 < ∛√72"
  },
  {
    "savol": "√(2√3) va √5 sonlarini taqqoslang.",
    "variantlar": ["√(2√3) > √5", "√(2√3) < √5", "√(2√3) = √5", "Taqqoslab bo'lmaydi"],
    "javob": "√(2√3) < √5"
  },
  {
    "savol": "-√(2√6) va -√(5√2) sonlarini taqqoslang.",
    "variantlar": ["-√(2√6) > -√(5√2)", "-√(2√6) < -√(5√2)", "-√(2√6) = -√(5√2)", "Taqqoslab bo'lmaydi"],
    "javob": "-√(2√6) > -√(5√2)"
  },
  {
    "savol": "√2, √3 va √4 sonlarini o'sish tartibida yozing.",
    "variantlar": ["√2, √3, √4", "√3, √2, √4", "√4, √3, √2", "√2, √4, √3"],
    "javob": "√2, √3, √4"
  },
  {
    "savol": "√3, √4 va √18 sonlarini o'sish tartibida yozing.",
    "variantlar": ["√3, √4, √18", "√4, √3, √18", "√3, √18, √4", "√18, √4, √3"],
    "javob": "√3, √4, √18"
  },
  {
    "savol": "√26 va √5 sonlarini taqqoslang.",
    "variantlar": ["√26 > √5", "√26 < √5", "√26 = √5", "Taqqoslab bo'lmaydi"],
    "javob": "√26 > √5"
  },
  {
    "savol": "-|√10| va -∛√99 sonlarini taqqoslang.",
    "variantlar": ["-|√10| > -∛√99", "-|√10| < -∛√99", "-|√10| = -∛√99", "Taqqoslab bo'lmaydi"],
    "javob": "-|√10| > -∛√99"
  }
],





theme9: [
  {
    "savol": "√x = 3 tenglamani yeching.",
    "variantlar": [6, 9, 12, 15],
    "javob": 9
  },
  {
    "savol": "√x = -2 tenglamani yeching.",
    "variantlar": ["x = 4", "x = -4", "x = 0", "yechim yo'q"],
    "javob": "yechim yo'q"
  },
  {
    "savol": "√x - 4 = 3 tenglamani yeching.",
    "variantlar": [25, 36, 49, 64],
    "javob": 49
  },
  {
    "savol": "√(x² - 144) = 5 tenglamani yeching.",
    "variantlar": ["x = ±13", "x = ±12", "x = ±11", "x = ±10"],
    "javob": "x = ±13"
  },
  {
    "savol": "∛(x² - 9) = -2 tenglamani yeching.",
    "variantlar": ["x = ±1", "x = ±√5", "x = ±√7", "x = ±3"],
    "javob": "x = ±1"
  },
  {
    "savol": "√(x+1+√2) = √[4]2 tenglamani yeching.",
    "variantlar": ["x = 0", "x = 1", "x = -1", "x = 2"],
    "javob": "x = -1"
  },
  {
    "savol": "√(x-2√3-1) = √3 - 1 tenglamani yeching.",
    "variantlar": ["x = 3", "x = 4", "x = 5", "x = 6"],
    "javob": "x = 4"
  },
  {
    "savol": "√(x+1)/√(x-1) = 3 tenglamani yeching.",
    "variantlar": [1.25, 1.5, 1.75, 2],
    "javob": 1.25
  },
  {
    "savol": "√((4-x)/(x+2)) = 1/√3 tenglamani yeching.",
    "variantlar": [2.5, 3, 3.5, 4],
    "javob": 2.5
  },
  {
    "savol": "√((x+3)/(x+4)) = 1/√5 tenglamani yeching.",
    "variantlar": ["-2.75", "-2.5", "-2.25", "-2"],
    "javob": "-2.75"
  },
  {
    "savol": "(x² - 5x + 6)/√(x - 2) = 0 tenglamani yeching.",
    "variantlar": ["x = 2", "x = 3", "x = 2, x = 3", "x = ∅"],
    "javob": "x = 3"
  },
  {
    "savol": "(x² + 4x + 3)/√(1 - x) = 0 tenglamani yeching.",
    "variantlar": ["x = -3", "x = -1", "x = -3, x = -1", "x = ∅"],
    "javob": "x = -3"
  },
  {
    "savol": "(4x² - 5x - 6)/√(-x) = 0 tenglamani yeching.",
    "variantlar": ["x = -0.75", "x = 2", "x = -0.75, x = 2", "x = ∅"],
    "javob": "x = -0.75"
  },
  {
    "savol": "(x² + 6x - 7)/√(x + 3) = 0 tenglamani yeching.",
    "variantlar": ["x = -7", "x = 1", "x = -7, x = 1", "x = ∅"],
    "javob": "x = 1"
  },
  {
    "savol": "(16 - x²)√(3 - x) = 0 tenglamani yeching.",
    "variantlar": ["x = 3, x = ±4", "x = 3, x = 4", "x = 3, x = -4", "x = ±4"],
    "javob": "x = 3, x = -4"
  },
  {
    "savol": "(25 - x²)√(27 - 3x) = 0 tenglamani yeching.",
    "variantlar": ["x = 5, x = -5, x = 9", "x = 5, x = -5", "x = 9", "x = 5, x = 9"],
    "javob": "x = 5, x = -5, x = 9"
  },
  {
    "savol": "(x² - 4)√(x² - 9) = 0 tenglamani yeching.",
    "variantlar": ["x = ±2, x = ±3", "x = ±2", "x = ±3", "x = 2, x = 3"],
    "javob": "x = ±2, x = ±3"
  },
  {
    "savol": "(x² - 4x + 3)√(x - 4) = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = 3, x = 4", "x = 1, x = 3", "x = 4", "x = ∅"],
    "javob": "x = 4"
  },
  {
    "savol": "(x² + 5x + 6)√(x² - 2x - 3) = 0 tenglamani yeching.",
    "variantlar": ["x = -2, x = -3, x = -1, x = 3", "x = -2, x = -3", "x = -1, x = 3", "x = -2, x = -3, x = 3"],
    "javob": "x = -2, x = -3, x = -1, x = 3"
  },
  {
    "savol": "(x² - 4x + 3)√(x² - 6x + 8) = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = 3, x = 2, x = 4", "x = 1, x = 3", "x = 2, x = 4", "x = 1, x = 2, x = 4"],
    "javob": "x = 1, x = 3, x = 2, x = 4"
  },
  {
    "savol": "√(x-2)·(x²-9) = √(x-2) tenglamaning haqiqiy ildizlari sonini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "√(x²+4x-5)·√(x²+7x) = 0 tenglamaning haqiqiy ildizlari sonini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 3
  },
  {
    "savol": "√(x-3)·(x²+3x+3) = √(x-3) tenglamaning haqiqiy ildizlari sonini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "√(x²-6x+8)·√(x²-5x+6) = 0 tenglamaning haqiqiy ildizlari sonini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 3
  },
  {
    "savol": "√(x²+9x+20)·√(x²+8x+12) = 0 tenglamaning haqiqiy ildizlari sonini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 4
  },
  {
    "savol": "(√(x²+3x) - 4)·(x²+5x+5)/(√(x²+3x) - 4) = 1 tenglamani yeching.",
    "variantlar": ["x = -2, x = -3", "x = -2", "x = -3", "x = 2, x = 3"],
    "javob": "x = -2, x = -3"
  },
  {
    "savol": "√x = 12 - √[4]x tenglamani yeching.",
    "variantlar": [16, 25, 36, 49],
    "javob": 16
  },
  {
    "savol": "x + 4 = 5√x tenglamani yeching.",
    "variantlar": ["x = 1, x = 16", "x = 1", "x = 16", "x = 4, x = 8"],
    "javob": "x = 1, x = 16"
  },
  {
    "savol": "2x³ - x√x - 120 = 0 tenglamani yeching.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  },
  {
    "savol": "2√(x+1) - 4/√(x+1) + 7 = 0 tenglamani yeching.",
    "variantlar": [0, 1, 2, 3],
    "javob": 3
  },
  {
    "savol": "10√(x+3) - 6/√(x+3) + 17 = 0 tenglamani yeching.",
    "variantlar": ["-2", "-1", 0, 1],
    "javob": -2
  },
  {
    "savol": "25√(x-3) - 3/√(x-3) - 22 = 0 tenglamani yeching.",
    "variantlar": [4, 5, 6, 7],
    "javob": 4
  },
  {
    "savol": "√((2-x)/(2+x)) - 4√((2+x)/(2-x)) = -3 tenglamani yeching.",
    "variantlar": ["x = 1.2", "x = 1.4", "x = 1.6", "x = 1.8"],
    "javob": "x = 1.4"
  },
  {
    "savol": "√((2-x)/(x-1)) - 7√((x-1)/(2-x)) = 6 tenglamani yeching.",
    "variantlar": ["x = 1.5", "x = 1.75", "x = 2", "x = 2.25"],
    "javob": "x = 1.75"
  },
  {
    "savol": "3/(3+√x) - 5/(3√x+x) = 1/4 tenglamani yeching.",
    "variantlar": [4, 9, 16, 25],
    "javob": 9
  },
  {
    "savol": "3/(4+√x) - 5/(4√x+x) = 1/12 tenglamani yeching.",
    "variantlar": [4, 9, 16, 25],
    "javob": 16
  },
  {
    "savol": "√((x²-1)²) = x² - 1 tenglamani yeching.",
    "variantlar": ["x ∈ R", "x ≤ -1 yoki x ≥ 1", "x ≥ 1", "x ≤ -1"],
    "javob": "x ≤ -1 yoki x ≥ 1"
  },
  {
    "savol": "√(x⁴ - 18x² + 81) = 9 - x² tenglamani yeching.",
    "variantlar": ["-3 ≤ x ≤ 3", "x ≤ -3 yoki x ≥ 3", "x ≥ 3", "x ≤ -3"],
    "javob": "-3 ≤ x ≤ 3"
  },
  {
    "savol": "√((x-2)²(x-1)) = (x-2)√(x-1) tenglamani yeching.",
    "variantlar": ["x ≥ 2", "x ≥ 1", "x ∈ R", "x ≥ 1, x ≠ 2"],
    "javob": "x ≥ 2"
  },
  {
    "savol": "√((x-3)²(x-5)) = (x-3)√(x-5) tenglamani yeching.",
    "variantlar": ["x ≥ 3", "x ≥ 5", "x ≥ 3, x ≠ 5", "x ≥ 5"],
    "javob": "x ≥ 5"
  }
],







theme10: [
  {
    "savol": "√x < -14 tengsizlikni yeching.",
    "variantlar": ["x < 196", "x > 196", "x ∈ ∅", "x ∈ R"],
    "javob": "x ∈ ∅"
  },
  {
    "savol": "√x - 15 < -21 tengsizlikni yeching.",
    "variantlar": ["x < 36", "x > 36", "x ∈ ∅", "x ∈ R"],
    "javob": "x ∈ ∅"
  },
  {
    "savol": "√(x² + 2x - 3) ≤ -2 tengsizlikni yeching.",
    "variantlar": ["x ∈ ∅", "-3 ≤ x ≤ 1", "x ≤ -3 yoki x ≥ 1", "x ∈ R"],
    "javob": "x ∈ ∅"
  },
  {
    "savol": "∜(4x - 6) < 0 tengsizlikni yeching.",
    "variantlar": ["x < 1.5", "x > 1.5", "x ∈ ∅", "x ∈ R"],
    "javob": "x ∈ ∅"
  },
  {
    "savol": "√(-x² + 3x - 1) < 0 tengsizlikni yeching.",
    "variantlar": ["x ∈ ∅", "x ∈ ((3-√5)/2, (3+√5)/2)", "x ∈ R", "x = (3±√5)/2"],
    "javob": "x ∈ ∅"
  },
  {
    "savol": "√(x - 2) ≤ 0 tengsizlikni yeching.",
    "variantlar": ["x = 2", "x ≥ 2", "x ≤ 2", "x ∈ ∅"],
    "javob": "x = 2"
  },
  {
    "savol": "¹⁰√(3x - 6) ≤ 0 tengsizlikni yeching.",
    "variantlar": ["x = 2", "x ≥ 2", "x ≤ 2", "x ∈ ∅"],
    "javob": "x = 2"
  },
  {
    "savol": "√(x - 8) > -6 tengsizlikni yeching.",
    "variantlar": ["x ≥ 8", "x > 8", "x ∈ R", "x ∈ ∅"],
    "javob": "x ≥ 8"
  },
  {
    "savol": "√x > -15 tengsizlikni yeching.",
    "variantlar": ["x ≥ 0", "x > 0", "x ∈ R", "x ∈ ∅"],
    "javob": "x ≥ 0"
  },
  {
    "savol": "√((2x - 3)/(4 - x)) ≥ -1 tengsizlikni yeching.",
    "variantlar": ["[1.5, 4)", "(-∞, 1.5] ∪ (4, ∞)", "x ∈ R", "x ∈ ∅"],
    "javob": "[1.5, 4)"
  },
  {
    "savol": "√((3 + 2x)/(4 - x)) ≥ -√3 tengsizlikni yeching.",
    "variantlar": ["[-1.5, 4)", "(-∞, -1.5] ∪ (4, ∞)", "x ∈ R", "x ∈ ∅"],
    "javob": "[-1.5, 4)"
  },
  {
    "savol": "√(2x - 4) ≥ 0 tengsizlikni yeching.",
    "variantlar": ["x ≥ 2", "x > 2", "x ≤ 2", "x ∈ R"],
    "javob": "x ≥ 2"
  },
  {
    "savol": "√(x² - 4) > 0 tengsizlikni yeching.",
    "variantlar": ["x < -2 yoki x > 2", "x ≤ -2 yoki x ≥ 2", "x > 2", "x < -2"],
    "javob": "x < -2 yoki x > 2"
  },
  {
    "savol": "√(3x + 5) ≤ 0 tengsizlikni yeching.",
    "variantlar": ["x = -5/3", "x ≥ -5/3", "x ≤ -5/3", "x ∈ ∅"],
    "javob": "x = -5/3"
  },
  {
    "savol": "√((2x - 4)/(5 - x)) > 0 tengsizlikni yeching.",
    "variantlar": ["(2, 5)", "[2, 5)", "(2, 5]", "[2, 5]"],
    "javob": "(2, 5)"
  },
  {
    "savol": "√(x - 2)/(x - 1) ≥ 1 tengsizlikni yeching.",
    "variantlar": ["(1, 2]", "(1, 2)", "[1, 2]", "(1, ∞)"],
    "javob": "(1, 2]"
  },
  {
    "savol": "√((x - 7)/(3x - 21)) < 6 tengsizlikni yeching.",
    "variantlar": ["(7, ∞)", "[7, ∞)", "(7, 43)", "(7, 49)"],
    "javob": "(7, ∞)"
  },
  {
    "savol": "√((x - 5)/(1 - 2x)) ≥ 0.5 tengsizlikni yeching.",
    "variantlar": ["[5.25, ∞)", "(5.25, ∞)", "[5, ∞)", "(5, ∞)"],
    "javob": "[5.25, ∞)"
  },
  {
    "savol": "√((9 + 3x)/(8 - x)) ≤ √27 tengsizlikni yeching.",
    "variantlar": ["[-3, 7.2]", "[-3, 8)", "(-3, 7.2]", "[-3, 7.2)"],
    "javob": "[-3, 7.2]"
  },
  {
    "savol": "√((3x + 1)/(x + 2)) < 1 tengsizlikni yeching.",
    "variantlar": ["(-2, 0.5)", "(-2, 0.5]", "(-∞, -2) ∪ (0.5, ∞)", "(-∞, -2] ∪ [0.5, ∞)"],
    "javob": "(-2, 0.5)"
  },
  {
    "savol": "√(2x - x²) ≥ 1 tengsizlikni yeching.",
    "variantlar": ["{1}", "[1, ∞)", "(-∞, 1]", "[0, 2]"],
    "javob": "{1}"
  },
  {
    "savol": "√((4x + 2)/(x - 1)) ≤ 2 tengsizlikni yeching.",
    "variantlar": ["(-∞, -3] ∪ (1, ∞)", "(-∞, -3) ∪ (1, ∞)", "[-3, 1)", "(-3, 1]"],
    "javob": "(-∞, -3] ∪ (1, ∞)"
  },
  {
    "savol": "√(4x² - 12x + 41) ≤ 2 tengsizlikni yeching.",
    "variantlar": ["x ∈ ∅", "x = 2.5", "x ∈ R", "x ≤ 2.5 yoki x ≥ 2.5"],
    "javob": "x ∈ ∅"
  },
  {
    "savol": "√(x² + 3x - 2) < 2 tengsizlikni yeching.",
    "variantlar": ["(-4, 1)", "(-∞, -4) ∪ (1, ∞)", "(-4, -1) ∪ (1, 2)", "(-2, 1)"],
    "javob": "(-4, 1)"
  },
  {
    "savol": "√(-x² + 6x - 4) > 1 tengsizlikni yeching.",
    "variantlar": ["(1, 5)", "[1, 5]", "(1, 5]", "[1, 5)"],
    "javob": "(1, 5)"
  },
  {
    "savol": "√(x + 2) < √x tengsizlikni yeching.",
    "variantlar": ["x ∈ ∅", "x ≥ 0", "x > 0", "x ∈ R"],
    "javob": "x ∈ ∅"
  },
  {
    "savol": "√(x + 3) > √x tengsizlikni yeching.",
    "variantlar": ["x ≥ 0", "x > 0", "x ∈ R", "x ∈ ∅"],
    "javob": "x ≥ 0"
  },
  {
    "savol": "√(2x - 3) ≤ √(9x) tengsizlikni yeching.",
    "variantlar": ["[1.5, ∞)", "(1.5, ∞)", "[1.5, ∞)", "[1.5, 9]"],
    "javob": "[1.5, ∞)"
  },
  {
    "savol": "√(5x + 7) ≥ √(4x) tengsizlikni yeching.",
    "variantlar": ["[-7/5, ∞)", "(-7/5, ∞)", "[-7/5, 0]", "[-7/5, ∞)"],
    "javob": "[-7/5, ∞)"
  },
  {
    "savol": "√(3x - 10) > √(6 - x) tengsizlikni yeching.",
    "variantlar": ["(4, 6]", "[4, 6]", "(4, 6)", "[4, 6)"],
    "javob": "(4, 6]"
  },
  {
    "savol": "√(x - 2) < x - 4 tengsizlikni yeching.",
    "variantlar": ["(3, ∞)", "[3, ∞)", "(2, ∞)", "(2, 3) ∪ (3, ∞)"],
    "javob": "(3, ∞)"
  },
  {
    "savol": "√(x + 3) ≥ 2x - 1 tengsizlikni yeching.",
    "variantlar": ["[-3, 13/4]", "[-3, 13/4)", "(-3, 13/4]", "(-3, 13/4)"],
    "javob": "[-3, 13/4]"
  },
  {
    "savol": "√(2x - 1) < x - 2 tengsizlikni yeching.",
    "variantlar": ["(3, ∞)", "[3, ∞)", "(2.5, ∞)", "(2, ∞)"],
    "javob": "(3, ∞)"
  },
  {
    "savol": "√(3x - 2) > 2x - 3 tengsizlikni yeching.",
    "variantlar": ["[2/3, 11/4)", "(2/3, 11/4)", "[2/3, 11/4]", "(2/3, 11/4]"],
    "javob": "[2/3, 11/4)"
  },
  {
    "savol": "√(x² - 5x + 6) < x - 4 tengsizlikni yeching.",
    "variantlar": ["x < 2", "x > 2", "x < 3", "x > 3"],
    "javob": "x < 2"
  },
  {
    "savol": "√(x² + x - 2) < x + 3 tengsizlikni yeching.",
    "variantlar": ["x ≥ 1", "x > 1", "x ≤ 1", "x < 1"],
    "javob": "x ≥ 1"
  },
  {
    "savol": "√(x² + 2x - 3) > x + 1 tengsizlikni yeching.",
    "variantlar": ["x < -3", "x > -3", "x < -1", "x > -1"],
    "javob": "x < -3"
  },
  {
    "savol": "√(2x + 1) > √(x - 1) tengsizlikni yeching.",
    "variantlar": ["x ≥ 1", "x > 1", "x ≥ 0", "x > 0"],
    "javob": "x ≥ 1"
  },
  {
    "savol": "√(x + 5) ≤ x - 1 tengsizlikni yeching.",
    "variantlar": ["[4, ∞)", "[3, ∞)", "[5, ∞)", "[2, ∞)"],
    "javob": "[4, ∞)"
  },
  {
    "savol": "√(3 - x) > x - 1 tengsizlikni yeching.",
    "variantlar": ["(-∞, 2)", "(-∞, 2]", "(-∞, 1)", "(-∞, 1]"],
    "javob": "(-∞, 2)"
  }
],





theme11: [
  {
    "savol": "Arifmetik progressiyada a₁ = 5 va d = 3 bo'lsa, a₄ ni toping.",
    "variantlar": [11, 12, 14, 17],
    "javob": 14
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 2 va d = 4 bo'lsa, a₅ ni toping.",
    "variantlar": [14, 16, 18, 20],
    "javob": 18
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 10 va d = -2 bo'lsa, a₆ ni toping.",
    "variantlar": [0, -2, 2, 4],
    "javob": 0
  },
  {
    "savol": "Arifmetik progressiyada a₃ = 10 va a₅ = 16 bo'lsa, d ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "Arifmetik progressiyada a₂ = 7 va a₄ = 13 bo'lsa, a₁ ni toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 3, d = 2 bo'lsa, a₁₀ ni toping.",
    "variantlar": [19, 20, 21, 22],
    "javob": 21
  },
  {
    "savol": "Arifmetik progressiyada a₅ = 17 va d = 3 bo'lsa, a₁ ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 5
  },
  {
    "savol": "Arifmetik progressiyada a₇ = 25 va d = 4 bo'lsa, a₃ ni toping.",
    "variantlar": [9, 10, 11, 12],
    "javob": 9
  },
  {
    "savol": "Arifmetik progressiyada a₁ = -3 va d = 5 bo'lsa, a₈ ni toping.",
    "variantlar": [29, 30, 32, 35],
    "javob": 32
  },
  {
    "savol": "Arifmetik progressiyada a₄ = 12 va a₉ = 27 bo'lsa, d ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 7, d = 3 bo'lsa, S₅ ni toping.",
    "variantlar": [45, 50, 55, 60],
    "javob": 50
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 4, d = 2 bo'lsa, S₈ ni toping.",
    "variantlar": [60, 64, 68, 72],
    "javob": 72
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 10, d = -1 bo'lsa, S₆ ni toping.",
    "variantlar": [35, 40, 45, 50],
    "javob": 45
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 1, d = 1 bo'lsa, S₁₀ ni toping.",
    "variantlar": [45, 50, 55, 60],
    "javob": 55
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 5, a₁₀ = 50 bo'lsa, S₁₀ ni toping.",
    "variantlar": [250, 255, 260, 275],
    "javob": 275
  },
  {
    "savol": "Arifmetik progressiyada a₃ = 9, a₇ = 21 bo'lsa, a₁ ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "Arifmetik progressiyada a₂ = 8, a₆ = 20 bo'lsa, d ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 2, d = 3 bo'lsa, nechanchi had 20 ga teng?",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 10, d = -2 bo'lsa, nechanchi had 0 ga teng?",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 3, d = 4 bo'lsa, a₁ + a₅ yig'indisini toping.",
    "variantlar": [16, 18, 20, 22],
    "javob": 22
  },
  {
    "savol": "Arifmetik progressiyada a₃ = 7, a₅ = 13 bo'lsa, a₄ ni toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 10
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 4, d = 5 bo'lsa, S₆ ni toping.",
    "variantlar": [89, 94, 99, 104],
    "javob": 99
  },
  {
    "savol": "Arifmetik progressiyada a₂ = 6, a₄ = 12 bo'lsa, a₁ ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 8, d = 2 bo'lsa, a₁ dan a₅ gacha bo'lgan hadlar yig'indisini toping.",
    "variantlar": [40, 44, 48, 52],
    "javob": 40
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 6, d = 3 bo'lsa, a₈ ni toping.",
    "variantlar": [21, 24, 27, 30],
    "javob": 27
  },
  {
    "savol": "Arifmetik progressiyada a₄ = 14, a₇ = 23 bo'lsa, a₁ ni toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 1, d = 2 bo'lsa, S₂₀ ni toping.",
    "variantlar": [300, 350, 380, 400],
    "javob": 400
  },
  {
    "savol": "Arifmetik progressiyada a₅ = 15, a₉ = 27 bo'lsa, d ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "Arifmetik progressiyada a₁ = -2, d = 3 bo'lsa, a₇ ni toping.",
    "variantlar": [13, 14, 15, 16],
    "javob": 16
  },
  {
    "savol": "Arifmetik progressiyada a₃ = 8, a₆ = 17 bo'lsa, a₁ ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 2
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 7, d = 4 bo'lsa, S₇ ni toping.",
    "variantlar": [98, 105, 112, 119],
    "javob": 112
  },
  {
    "savol": "Arifmetik progressiyada a₂ = 5, a₅ = 14 bo'lsa, a₁ ni toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 3, d = 2 bo'lsa, a₁₀ - a₅ ni toping.",
    "variantlar": [8, 10, 12, 14],
    "javob": 10
  },
  {
    "savol": "Arifmetik progressiyada a₄ = 10, a₈ = 22 bo'lsa, a₁ ni toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 12, d = -3 bo'lsa, a₆ ni toping.",
    "variantlar": [-3, 0, 3, 6],
    "javob": -3
  },
  {
    "savol": "Arifmetik progressiyada a₃ = 9, a₇ = 21 bo'lsa, S₇ ni toping.",
    "variantlar": [80, 84, 88, 92],
    "javob": 84
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 5, d = 3 bo'lsa, nechanchi had 29 ga teng?",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "Arifmetik progressiyada a₂ = 4, a₄ = 10 bo'lsa, S₅ ni toping.",
    "variantlar": [30, 35, 40, 45],
    "javob": 40
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 8, d = 2 bo'lsa, a₁ dan a₄ gacha bo'lgan hadlar yig'indisini toping.",
    "variantlar": [32, 34, 36, 38],
    "javob": 32
  },
  {
    "savol": "Arifmetik progressiyada a₁ = 4, d = 5 bo'lsa, a₁ + a₃ + a₅ yig'indisini toping.",
    "variantlar": [24, 27, 30, 33],
    "javob": 27
  }
],



theme13: [
  {
    "savol": "Birinchi hadi 3 ga, maxraji 2 ga teng bo'lgan geometrik progressiyaning to'rtinchi hadini toping.",
    "variantlar": [12, 18, 24, 30],
    "javob": 24
  },
  {
    "savol": "Birinchi hadi 2 ga, to'rtinchi hadi 54 ga teng bo'lgan geometrik progressiyaning maxrajini toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "b₅ = -1/3 va b₃ = -4/3 bo'lgan geometrik progressiyaning birinchi hadini toping.",
    "variantlar": ["-16/3", "-4/3", "-8/3", "-2/3"],
    "javob": "-16/3"
  },
  {
    "savol": "Uchinchi va yettinchi hadlari 3 va 27 ga teng bo'lgan geometrik progressiyaning beshinchi hadini toping.",
    "variantlar": [6, 9, 12, 15],
    "javob": 9
  },
  {
    "savol": "b₃·b₅·b₁₀ = 27 bo'lsa, b₆ ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "Uchinchi va sakkizinchi hadlari ko'paytmasi 36 ga teng bo'lgan geometrik progressiyaning beshinchi va oltinchi hadlari ko'paytmasini toping.",
    "variantlar": [6, 12, 18, 36],
    "javob": 36
  },
  {
    "savol": "b₁ = 1, q = 3 bo'lsa, b₃ ni toping.",
    "variantlar": [3, 6, 9, 12],
    "javob": 9
  },
  {
    "savol": "b₁ = 1, q = 2 bo'lsa, b₅ ni toping.",
    "variantlar": [8, 12, 16, 20],
    "javob": 16
  },
  {
    "savol": "q = 2, b₁ = 1/32 bo'lsa, b₆ ni toping.",
    "variantlar": [1, 2, 4, 8],
    "javob": 1
  },
  {
    "savol": "b₄ = 100, q = 0.1 bo'lsa, b₈ ni toping.",
    "variantlar": [0.001, 0.01, 0.1, 1],
    "javob": 0.01
  },
  {
    "savol": "q = -2, b₇ = 16 bo'lsa, b₃ ni toping.",
    "variantlar": [-2, -1, 1, 2],
    "javob": 1
  },
  {
    "savol": "q = 1/4, b₃ = 2 bo'lsa, b₅ + b₁ ni toping.",
    "variantlar": [8.125, 8.5, 9, 9.125],
    "javob": 8.125
  },
  {
    "savol": "b₃ = 3/8, q = 2 bo'lsa, b₇ ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 6
  },
  {
    "savol": "b₁ = 2 va b₅ = 32 bo'lsa, geometrik progressiyaning maxrajini toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 2
  },
  {
    "savol": "b₇ = -1 va b₄ = -27 bo'lsa, geometrik progressiyaning maxrajini toping.",
    "variantlar": ["-1/3", "1/3", "-3", "3"],
    "javob": "-1/3"
  },
  {
    "savol": "b₅ = -1/2 va b₈ = 32 bo'lsa, geometrik progressiyaning maxrajini toping.",
    "variantlar": [-4, -2, 2, 4],
    "javob": -4
  },
  {
    "savol": "b₅·b₆ = 36 va b₂₀·b₆ = 9 bo'lsa, b₁ ni toping.",
    "variantlar": [2, 3, 4, 6],
    "javob": 2
  },
  {
    "savol": "b₅·b₇·b₆ = 216 bo'lsa, b₆ ni toping.",
    "variantlar": [6, 12, 18, 24],
    "javob": 6
  },
  {
    "savol": "b₁₂·b₅·b₇ = -8 bo'lsa, b₈ ni toping.",
    "variantlar": [-2, -1, 1, 2],
    "javob": -2
  },
  {
    "savol": "b₂·b₁₀·b₁₅ = -343 bo'lsa, b₉ ni toping.",
    "variantlar": [-7, -5, 5, 7],
    "javob": -7
  },
  {
    "savol": "x, 12, 3x+6 sonlari geometrik progressiyaning ketma-ket hadlari bo'lsa, x ni toping.",
    "variantlar": [4, 6, 8, 10],
    "javob": 6
  },
  {
    "savol": "2, a-3, 8 sonlari geometrik progressiyaning ketma-ket hadlari bo'lsa, a ning manfiy qiymatini toping.",
    "variantlar": [-5, -4, -3, -2],
    "javob": -5
  },
  {
    "savol": "x-4, x-1, x+4 sonlari geometrik progressiyaning ketma-ket hadlari bo'lsa, x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "Geometrik progressiyaning birinchi uchta hadi mos ravishda x-3, 2x-6, x+6 ga teng bo'lsa, progressiyaning to'rtinchi hadini toping.",
    "variantlar": [12, 18, 24, 30],
    "javob": 24
  },
  {
    "savol": "1, √x, 3√x+4 sonlari geometrik progressiyaning ketma-ket hadlari bo'lsa, x ning qiymatini toping.",
    "variantlar": [4, 9, 16, 25],
    "javob": 16
  },
  {
    "savol": "3 va 243 sonlari orasiga bitta son shunday qo'yildiki, natijada bu uchta son geometrik progressiyani tashkil qildi. Bu sonni toping.",
    "variantlar": [9, 27, 54, 81],
    "javob": 27
  },
  {
    "savol": "2 va 16 sonlari orasiga ikkita son shunday qo'yildiki, natijada bu to'rtta son geometrik progressiyani tashkil qildi. Bu sonlarni toping.",
    "variantlar": ["4 va 8", "3 va 9", "5 va 10", "6 va 12"],
    "javob": "4 va 8"
  },
  {
    "savol": "3 va 81 sonlari orasiga ikkita son shunday qo'yildiki, natijada bu to'rtta son geometrik progressiyani tashkil qildi. Bu sonlarni toping.",
    "variantlar": ["9 va 27", "6 va 18", "12 va 36", "15 va 45"],
    "javob": "9 va 27"
  },
  {
    "savol": "1 va 243 sonlari orasiga to'rtta son shunday qo'yildiki, natijada bu oltita son geometrik progressiyani tashkil qildi. Bu sonlarni toping.",
    "variantlar": ["3, 9, 27, 81", "2, 4, 8, 16", "5, 25, 125, 625", "4, 16, 64, 256"],
    "javob": "3, 9, 27, 81"
  },
  {
    "savol": "b₁ = 3, q = 2 bo'lsa, S₅ ni toping.",
    "variantlar": [93, 96, 99, 102],
    "javob": 93
  },
  {
    "savol": "b₁ = 4, q = 3 bo'lsa, S₄ ni toping.",
    "variantlar": [120, 140, 160, 180],
    "javob": 160
  },
  {
    "savol": "b₁ = 8, q = 1/2 bo'lsa, S₅ ni toping.",
    "variantlar": [15.5, 16, 16.5, 17],
    "javob": 15.5
  },
  {
    "savol": "b₃ = 12, b₆ = 96 bo'lsa, b₁ ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "b₂ = 6, b₄ = 24 bo'lsa, q ni toping.",
    "variantlar": [2, -2, "to'g'risi yo'q", 4],
    "javob": "±2"
  },
  {
    "savol": "b₁ = 5, q = -2 bo'lsa, b₄ ni toping.",
    "variantlar": [-40, -20, 20, 40],
    "javob": -40
  },
  {
    "savol": "b₁ = 2, q = 1/3 bo'lsa, b₅ ni toping.",
    "variantlar": ["2/27", "2/81", "2/9", "2/3"],
    "javob": "2/81"
  },
  {
    "savol": "b₄ = 27, q = 3 bo'lsa, b₁ ni toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "b₅ = 48, q = 2 bo'lsa, b₁ ni toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 3
  },
  {
    "savol": "b₂ = 8, b₅ = 64 bo'lsa, q ni toping.",
    "variantlar": [2, 4, 6, 8],
    "javob": 2
  },
  {
    "savol": "b₁ = 6, q = -1/2 bo'lsa, b₆ ni toping.",
    "variantlar": ["-3/16", "-3/8", "-3/4", "-3/2"],
    "javob": "-3/16"
  },
  {
    "savol": "b₃ = 18, b₅ = 162 bo'lsa, b₁ ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 2
  }
],





theme14: [
  {
    "savol": "3, 7, -4 va 2 sonlarining o'rta arifmetigini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "4, -9, 7, 0 va 3 sonlarining o'rta arifmetigini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "2, -3, 5, 7, 2 va 1 sonlarining o'rta arifmetigini toping.",
    "variantlar": [2.33, 2.5, 2.67, 3],
    "javob": 2.33
  },
  {
    "savol": "7,6, x va 6,8 sonlarining o'rta arifmetigi 7,1 ga teng bo'lsa, x ni toping.",
    "variantlar": [6.9, 7, 7.1, 7.2],
    "javob": 6.9
  },
  {
    "savol": "6,2, x va 5,4 sonlarining o'rta arifmetigi 6,3 ga teng bo'lsa, x ni toping.",
    "variantlar": [7.1, 7.2, 7.3, 7.4],
    "javob": 7.3
  },
  {
    "savol": "-2, 3,1, 7 va x sonlarining o'rta arifmetigi 2 ga teng bo'lsa, x ni toping.",
    "variantlar": [0.9, 1, 1.1, 1.2],
    "javob": 0.9
  },
  {
    "savol": "Birinchi son ikkinchi sondan 3 ga katta. Agar ularning o'rta arifmetigi 10 ga teng bo'lsa, ulardan kattasini toping.",
    "variantlar": [10.5, 11, 11.5, 12],
    "javob": 11.5
  },
  {
    "savol": "Birinchi son ikkinchi sondan 13 ga katta. Agar ularning o'rta arifmetigi 43 ga teng bo'lsa, ikkinchi sonni toping.",
    "variantlar": [36.5, 37, 37.5, 38],
    "javob": 36.5
  },
  {
    "savol": "Birinchi son ikkinchi sondan 24 ga katta. Agar ularning o'rta arifmetigi 31 ga teng bo'lsa, ikkinchi sonni toping.",
    "variantlar": [17, 18, 19, 20],
    "javob": 19
  },
  {
    "savol": "Uchta sonning o'rta arifmetigi 7 ga teng. Ulardan dastlabki ikkitasining o'rta arifmetigi 5 ga teng bo'lsa, uchinchi sonni toping.",
    "variantlar": [9, 10, 11, 12],
    "javob": 11
  },
  {
    "savol": "Sinfdagi 30 ta o'quvchining o'rtacha o'zlashtirish ko'rsatkichi 70 ga teng edi. Bitta o'quvchi sinfdan ketganidan keyin o'rtacha ko'rsatkich 70,5 ga teng bo'ldi. Sinfdan ketgan o'quvchining o'zlashtirish ko'rsatkichini toping.",
    "variantlar": [55, 60, 65, 70],
    "javob": 55
  },
  {
    "savol": "Sinfdagi 31 ta o'quvchining o'rtacha o'zlashtirish ko'rsatkichi 68 ga teng edi. Bitta o'quvchi sinfdan ketganidan keyin o'rtacha ko'rsatkich 68,5 ga teng bo'ldi. Sinfdan ketgan o'quvchining o'zlashtirish ko'rsatkichini toping.",
    "variantlar": [48.5, 52.5, 56.5, 60.5],
    "javob": 52.5
  },
  {
    "savol": "12 va 27 sonlarining o'rta geometrigini toping.",
    "variantlar": [15, 16, 17, 18],
    "javob": 18
  },
  {
    "savol": "24, 15 va 75 sonlarining o'rta geometrigini toping.",
    "variantlar": [20, 25, 30, 35],
    "javob": 30
  },
  {
    "savol": "32, 18 va 6 sonlarining o'rta geometrigini toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "32, 50, 108 va 75 sonlarining o'rta geometrigini toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 60
  },
  {
    "savol": "2, 8 va x sonlarining o'rta geometrigi x ga teng. x ni toping.",
    "variantlar": [4, 6, 8, 10],
    "javob": 4
  },
  {
    "savol": "8, 54 va x sonlarining o'rta geometrigi x ga teng. x ni toping.",
    "variantlar": [12, 18, 24, 36],
    "javob": 12
  },
  {
    "savol": "24, 54 va x sonlarining o'rta geometrigi x ga teng. x ni toping.",
    "variantlar": [24, 30, 36, 42],
    "javob": 36
  },
  {
    "savol": "Toshkentdan Buxorogacha bo'lgan masofa 600 km. Bu masofani tezyurar poyezd 4 soatda bosib o'tadi. Tezyurar poyezdning tezligini toping.",
    "variantlar": [120, 130, 140, 150],
    "javob": 150
  },
  {
    "savol": "Toshkentdan Samarqandgacha bo'lgan masofa 270 km. Bu masofani tezyurar poyezd 2 soatda bosib o'tadi. Tezyurar poyezdning tezligini toping.",
    "variantlar": [120, 125, 130, 135],
    "javob": 135
  },
  {
    "savol": "Toshkentdan Qarshigacha bo'lgan masofa 440 km. Bu masofani tezyurar poyezd 4 soatda bosib o'tadi. Tezyurar poyezdning tezligini toping.",
    "variantlar": [90, 100, 110, 120],
    "javob": 110
  },
  {
    "savol": "G'ildirak aylanasining uzunligi 1,5 m. G'ildirak 21 marta aylanganda qancha masofani bosib o'tadi?",
    "variantlar": [28.5, 30, 31.5, 33],
    "javob": 31.5
  },
  {
    "savol": "G'ildirak aylanasining uzunligi 1,5 m. G'ildirak 231 m masofani bosib o'tganda necha marta aylanadi?",
    "variantlar": [144, 150, 154, 160],
    "javob": 154
  },
  {
    "savol": "G'ildirak aylanasining uzunligi 2,1 m. G'ildirak 16 marta aylanganda qancha masofani bosib o'tadi?",
    "variantlar": [31.6, 32.6, 33.6, 34.6],
    "javob": 33.6
  },
  {
    "savol": "G'ildirak aylanasining uzunligi 1,2 m. G'ildirak 32 marta aylanganda qancha masofani bosib o'tadi?",
    "variantlar": [36.4, 37.4, 38.4, 39.4],
    "javob": 38.4
  },
  {
    "savol": "A va B shaharlardan bir-biriga qarab ikki avtomobil yo'lga chiqdi. Avtomobillarning tezliklari 60 km/soat va 70 km/soat bo'lsa, ular bir-biriga qanday tezlikda yaqinlashadi?",
    "variantlar": [120, 130, 140, 150],
    "javob": 130
  },
  {
    "savol": "A va B shaharlardan bir-biriga qarab ikki avtomobil yo'lga chiqdi. Avtomobillarning tezliklari 85 km/soat va 75 km/soat bo'lsa, ular bir-biriga qanday tezlikda yaqinlashadi?",
    "variantlar": [150, 155, 160, 165],
    "javob": 160
  },
  {
    "savol": "Tezliklari 18 km/soat va 15 km/soat bo'lgan ikki velosipedchi bir vaqtda, bir joydan, bir xil yo'nalishda yo'lga chiqdi. 3 soatdan keyin ular orasidagi masofa necha km bo'ladi?",
    "variantlar": [6, 7, 8, 9],
    "javob": 9
  },
  {
    "savol": "Tezliklari 16 km/soat va 20 km/soat bo'lgan ikki velosipedchi bir vaqtda, bir joydan, bir xil yo'nalishda yo'lga chiqdi. 4 soatdan keyin ular orasidagi masofa necha km bo'ladi?",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "Tezliklari 20 km/soat va 24 km/soat bo'lgan ikki velosipedchi bir vaqtda, bir joydan, bir xil yo'nalishda yo'lga chiqdi. 2 soatdan keyin ular orasidagi masofa necha km bo'ladi?",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "Bir shahardan 70 km/soat tezlik bilan yuk poyezdi va 3 soat o'tgach, shu shahardan yuk poyezdi yo'nalishida 80 km/soat tezlik bilan elektropoyezd yo'lga chiqdi. Elektropoyezd jo'naganidan necha soatdan keyin yuk poyezdini quvib yetadi?",
    "variantlar": [18, 19, 20, 21],
    "javob": 21
  },
  {
    "savol": "Bir shahardan 50 km/soat tezlik bilan yuk poyezdi va 3 soat o'tgach, shu shahardan yuk poyezdi yo'nalishida 75 km/soat tezlik bilan elektropoyezd yo'lga chiqdi. Elektropoyezd jo'naganidan necha soatdan keyin yuk poyezdini quvib yetadi?",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "Bir shahardan 60 km/soat tezlik bilan yuk poyezdi va 3 soat o'tgach, shu shahardan yuk poyezdi yo'nalishida 90 km/soat tezlik bilan elektropoyezd yo'lga chiqdi. Elektropoyezd jo'naganidan necha soatdan keyin yuk poyezdini quvib yetadi?",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "Velosipedchi shahardan soatiga 10,2 km tezlik bilan yo'lga chiqdi. Undan 1 soat keyin yo'lga chiqqan ikkinchi velosipedchi unga 3 soatda yetib oldi. Ikkinchi velosipedchining tezligini toping.",
    "variantlar": [12.6, 13.6, 14.6, 15.6],
    "javob": 13.6
  },
  {
    "savol": "100 kg mevaning 65%i suvdan iborat. Ma'lum vaqtdan keyin bu mevadagi suvning miqdori 30% bo'lib qoldi. Mevaning og'irligi necha kg bo'lib qoldi?",
    "variantlar": [45, 50, 55, 60],
    "javob": 50
  },
  {
    "savol": "400 gramm eritmaning 10%i tuzdan iborat. Eritmaning 20%i to'kib yuborildi va uning o'rniga toza suv quyildi. Hosil bo'lgan eritmaning konsentratsiyasini toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "50 gramm tuzli suvning tarkibida 20% tuz bor. Eritmadagi tuzning miqdori 10% bo'lishi uchun necha gramm toza suv qo'shish kerak?",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "200 gramm eritmaning 30%i tuzdan iborat. Eritmaning 10%i to'kib yuborildi va uning o'rniga toza suv quyildi. Hosil bo'lgan eritmaning konsentratsiyasini toping.",
    "variantlar": [24, 25, 26, 27],
    "javob": 27
  },
  {
    "savol": "80 gramm tuzli suvning tarkibida 15% tuz bor. Eritmadagi tuzning miqdori 12% bo'lishi uchun necha gramm toza suv qo'shish kerak?",
    "variantlar": [15, 20, 25, 30],
    "javob": 20
  }
],





theme17: [
  {
    "savol": "2ˣ = 8 tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 3
  },
  {
    "savol": "3ˣ = 9 tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "4ˣ = 1/16 tenglamani yeching.",
    "variantlar": [-2, -1, 1, 2],
    "javob": -2
  },
  {
    "savol": "5ˣ = 1/125 tenglamani yeching.",
    "variantlar": [-3, -2, 2, 3],
    "javob": -3
  },
  {
    "savol": "7ˣ = 1/49 tenglamani yeching.",
    "variantlar": [-2, -1, 1, 2],
    "javob": -2
  },
  {
    "savol": "(1/6)ˣ = 216 tenglamani yeching.",
    "variantlar": [-3, -2, 2, 3],
    "javob": -3
  },
  {
    "savol": "9ˣ = 3 tenglamani yeching.",
    "variantlar": ["1/2", "-1/2", "2", "-2"],
    "javob": "1/2"
  },
  {
    "savol": "4ˣ = 1/2 tenglamani yeching.",
    "variantlar": ["-1/2", "1/2", "-2", "2"],
    "javob": "-1/2"
  },
  {
    "savol": "25ˣ = 1/5 tenglamani yeching.",
    "variantlar": ["-1/2", "1/2", "-2", "2"],
    "javob": "-1/2"
  },
  {
    "savol": "100ˣ = 0,1 tenglamani yeching.",
    "variantlar": ["-1/2", "1/2", "-2", "2"],
    "javob": "-1/2"
  },
  {
    "savol": "7ˣ⁻¹ = 1/7 tenglamani yeching.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "8ˣ⁻¹ = 4 tenglamani yeching.",
    "variantlar": ["5/3", "4/3", "2/3", "1/3"],
    "javob": "5/3"
  },
  {
    "savol": "5ˣ²⁻¹ = 625 tenglamani yeching.",
    "variantlar": ["±2", "±3", "±4", "±5"],
    "javob": "±3"
  },
  {
    "savol": "3ˣ⁺¹ = 3 tenglamani yeching.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "2ˣ = 8/√2 tenglamani yeching.",
    "variantlar": ["2.5", "3.5", "4.5", "5.5"],
    "javob": "3.5"
  },
  {
    "savol": "3ˣ = 3∛3 tenglamani yeching.",
    "variantlar": ["4/3", "5/3", "2/3", "1/3"],
    "javob": "4/3"
  },
  {
    "savol": "27ˣ = 3⁵√3 tenglamani yeching.",
    "variantlar": ["6/5", "7/5", "8/5", "9/5"],
    "javob": "6/5"
  },
  {
    "savol": "3ˣ⁺² = 3⁴√3 tenglamani yeching.",
    "variantlar": ["1/4", "1/2", "3/4", "1"],
    "javob": "1/4"
  },
  {
    "savol": "7⁽ˣ⁺³⁾/² = 49/√7 tenglamani yeching.",
    "variantlar": [0, 1, 2, 3],
    "javob": 2
  },
  {
    "savol": "5¹⁻ˣ² = ⁴√25 tenglamani yeching.",
    "variantlar": ["±1/2", "±3/2", "±5/2", "±7/2"],
    "javob": "±1/2"
  },
  {
    "savol": "(2/3)ˣ⁻¹ = (3/2)ˣ⁻³ tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "(3/4)ˣ⁺³ = (4/3)⁻²ˣ⁻¹⁵ tenglamani yeching.",
    "variantlar": [-4, -5, -6, -7],
    "javob": -6
  },
  {
    "savol": "(49/16)ˣ⁺¹ = (4/7)⁹ tenglamani yeching.",
    "variantlar": ["-5.5", "-4.5", "-3.5", "-2.5"],
    "javob": "-3.5"
  },
  {
    "savol": "(3/5)³ˣ = (25/9)⁹ tenglamani yeching.",
    "variantlar": [6, 7, 8, 9],
    "javob": 6
  },
  {
    "savol": "(16/9)ˣ⁻¹ = (3/4)⁸ tenglamani yeching.",
    "variantlar": [-3, -2, -1, 0],
    "javob": -3
  },
  {
    "savol": "(4/5)³ˣ = (125/64)⁻³ tenglamani yeching.",
    "variantlar": [3, 4, 5, 6],
    "javob": 3
  },
  {
    "savol": "(2/10)²ˣ⁺¹ = 25⁽ˣ²⁻⁴⁾/² tenglamani yeching.",
    "variantlar": [-3, -2, 2, 3],
    "javob": 3
  },
  {
    "savol": "(15/7)ˣ²⁺³ = (7/15)⁻²ˣ⁻³ tenglamani yeching.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "(23/2)²ˣ²⁺⁵ = (1/11.5)⁻³ˣ⁻⁷ tenglamani yeching.",
    "variantlar": [-3, -2, 2, 3],
    "javob": -2
  },
  {
    "savol": "(28/5)²⁸ˣ²⁻⁵ = (5/28)⁵ˣ²⁻¹²⁷ tenglamani yeching.",
    "variantlar": ["±2", "±3", "±4", "±5"],
    "javob": "±2"
  },
  {
    "savol": "√(x - 5) · (5ˣ - 25) = 0 tenglamani yeching.",
    "variantlar": [2, 3, 4, 5],
    "javob": 5
  },
  {
    "savol": "√(3 - x) · (2ˣ - 16) = 0 tenglamani yeching.",
    "variantlar": [-4, 0, 3, 4],
    "javob": 3
  },
  {
    "savol": "∛(2x - 6) · (3ˣ - 3) = 0 tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 3
  },
  {
    "savol": "(3x² - 3)/(x + 1) = 0 tenglamani yeching.",
    "variantlar": [1, -1, "to'g'risi yo'q", 0],
    "javob": 1
  },
  {
    "savol": "((x² - 9x + 20) · (2ˣ - 4))/√(4 - x) = 0 tenglamani yeching.",
    "variantlar": [2, 4, 5, 5],
    "javob": 2
  },
  {
    "savol": "(√(x + 4) · (5ˣ - 125))/(x² + 3x - 4) = 0 tenglamani yeching.",
    "variantlar": [3, -4, 1, 3],
    "javob": 3
  },
  {
    "savol": "4ˣ = 32 tenglama yechimining butun qismini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "(4 · 3ˣ)² = (9/16)ˣ⁻⁴ tenglamaning yechimlari yig'indisini toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "25ˣ - 6 · 5ˣ + 5 = 0 tenglamani yeching.",
    "variantlar": [0, 1, "0 va 1", 5],
    "javob": "0 va 1"
  },
  {
    "savol": "4ˣ - 5 · 2ˣ - 24 = 0 tenglamani yeching.",
    "variantlar": [3, 8, -3, 3],
    "javob": 3
  }
],





theme19: [
  {
    "savol": "log₂ 16 ni hisoblang.",
    "variantlar": [2, 4, 8, 16],
    "javob": 4
  },
  {
    "savol": "√(log₂ 512) ni hisoblang.",
    "variantlar": [3, 4, 5, 6],
    "javob": 3
  },
  {
    "savol": "log₀.₅ 8 ni hisoblang.",
    "variantlar": [-3, -2, 2, 3],
    "javob": -3
  },
  {
    "savol": "√10000 ni hisoblang.",
    "variantlar": [10, 100, 1000, 10000],
    "javob": 100
  },
  {
    "savol": "log₃ (1/27) ni hisoblang.",
    "variantlar": [-3, -2, 2, 3],
    "javob": -3
  },
  {
    "savol": "∛(log₂ 256) ni hisoblang.",
    "variantlar": [2, 4, 6, 8],
    "javob": 2
  },
  {
    "savol": "log₄ (1/81) ni hisoblang.",
    "variantlar": [-4, -3, 3, 4],
    "javob": -3
  },
  {
    "savol": "log₅ (1/81) ni hisoblang.",
    "variantlar": ["log₅(1/81)", "-2log₅9", "-4log₅3", "Tayinlab bo'lmaydi"],
    "javob": "Tayinlab bo'lmaydi"
  },
  {
    "savol": "log₂ 16 = 4 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "To'g'ri"
  },
  {
    "savol": "log₃ (1/27) = -3 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "To'g'ri"
  },
  {
    "savol": "log₁/₈ 3 = 3 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "log₁/₅ 125 = -3 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "To'g'ri"
  },
  {
    "savol": "log₇ 7 = 1 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "To'g'ri"
  },
  {
    "savol": "log₁/₃ 1 = 0 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "To'g'ri"
  },
  {
    "savol": "log₄ 256 = 4 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "To'g'ri"
  },
  {
    "savol": "log₀.₂ 25 = -2 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "To'g'ri"
  },
  {
    "savol": "log₂ ∛2 = 3.5 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "1/3", "3"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "lg 10^(√10) = 1.2 tenglik to'g'rimi?",
    "variantlar": ["To'g'ri", "Noto'g'ri", "√10", "10"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "log₂ 2⁵ ni hisoblang.",
    "variantlar": [2, 3, 4, 5],
    "javob": 5
  },
  {
    "savol": "log₁/₃ (1/3)⁴ ni hisoblang.",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "log₀.₁ (0.1)⁻² ni hisoblang.",
    "variantlar": [-2, -1, 1, 2],
    "javob": -2
  },
  {
    "savol": "log₄ 4⁻³ ni hisoblang.",
    "variantlar": [-3, -2, 2, 3],
    "javob": -3
  },
  {
    "savol": "log₇ 7¹²⁵ ni hisoblang.",
    "variantlar": [7, 25, 125, 625],
    "javob": 125
  },
  {
    "savol": "log₂ 0.125 ni hisoblang.",
    "variantlar": [-3, -2, 2, 3],
    "javob": -3
  },
  {
    "savol": "log₁/₄ 64 ni hisoblang.",
    "variantlar": [-3, -2, 2, 3],
    "javob": -3
  },
  {
    "savol": "log₅ (1/125) ni hisoblang.",
    "variantlar": [-3, -2, 2, 3],
    "javob": -3
  },
  {
    "savol": "ln √e ni hisoblang.",
    "variantlar": ["1/2", "1", "2", "e"],
    "javob": "1/2"
  },
  {
    "savol": "√(-(2 log₃ (1/9))) ni hisoblang.",
    "variantlar": [2, 3, 4, 5],
    "javob": 2
  },
  {
    "savol": "log₂² (log₃ 81) ni hisoblang.",
    "variantlar": [1, 2, 4, 8],
    "javob": 4
  },
  {
    "savol": "log₁ (log₂ 512) ni hisoblang.",
    "variantlar": [0, 1, 2, "aniqlanmagan"],
    "javob": "aniqlanmagan"
  },
  {
    "savol": "log₈³ (log₉ 3) ni hisoblang.",
    "variantlar": ["1/27", "1/9", "1/3", "1"],
    "javob": "1/27"
  },
  {
    "savol": "log₂ (log√₃ 81) ni hisoblang.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "log₄² (log₉ 81) ni hisoblang.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "log₆ 2 + log₆ 3 ni hisoblang.",
    "variantlar": [0, 1, 2, 6],
    "javob": 1
  },
  {
    "savol": "log₃₄ 2 + log₃₄ 17 ni hisoblang.",
    "variantlar": [0, 1, 2, 34],
    "javob": 1
  },
  {
    "savol": "log₁₂ 24 + log₁₂ 6 ni hisoblang.",
    "variantlar": [2, 3, 4, 12],
    "javob": 2
  },
  {
    "savol": "log₆ 12 + log₆ 18 ni hisoblang.",
    "variantlar": [2, 3, 4, 6],
    "javob": 3
  },
  {
    "savol": "log₁₂ 2 + log₁₂ 6 ni hisoblang.",
    "variantlar": [0, 1, 2, 12],
    "javob": 1
  },
  {
    "savol": "lg 20 + lg 50 ni hisoblang.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  }
],





theme20: [
  {
    "savol": "logₐ b = 2 bo'lsa, logₐ (ab) ifodaning qiymatini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 3
  },
  {
    "savol": "logₐ b = 4 bo'lsa, logₐb (a²b) ifodaning qiymatini toping.",
    "variantlar": ["6/5", "7/5", "8/5", "9/5"],
    "javob": "6/5"
  },
  {
    "savol": "logₐ b = 3 bo'lsa, logₐ²b (ab³) ifodaning qiymatini toping.",
    "variantlar": ["5/3", "7/3", "8/3", "10/3"],
    "javob": "7/3"
  },
  {
    "savol": "logₐ b = 4 bo'lsa, logₐ/b (a²) ifodaning qiymatini toping.",
    "variantlar": ["-2/3", "-1/3", "1/3", "2/3"],
    "javob": "-2/3"
  },
  {
    "savol": "logᵦ a = 3 bo'lsa, logᵦ/a (a²) ifodaning qiymatini toping.",
    "variantlar": ["-3", "-2", "2", "3"],
    "javob": "-3"
  },
  {
    "savol": "log₂ a = log₈ b bo'lsa, logᵦ (a²/b) ifodaning qiymatini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 3
  },
  {
    "savol": "log₃ a = log₉ b bo'lsa, logᵦ (a/b) ifodaning qiymatini toping.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "log₂₅ a = log₅ b bo'lsa, logᵦ (a³/b) ifodaning qiymatini toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 5
  },
  {
    "savol": "log₃ a = log₂₇ b bo'lsa, logᵦ (a²/b) ifodaning qiymatini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "log₆₄ a = log₄ b bo'lsa, logᵦ (a³/b³) ifodaning qiymatini toping.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "lg a = 5,76 bo'lsa, lg √a ifodaning qiymatini toping.",
    "variantlar": [2.88, 5.76, 11.52, 28.8],
    "javob": 2.88
  },
  {
    "savol": "ln a = 3,24 bo'lsa, ln ∛(a²) ifodaning qiymatini toping.",
    "variantlar": [1.62, 2.16, 4.86, 9.72],
    "javob": 2.16
  },
  {
    "savol": "log₂ a = 2,1 bo'lsa, log₂ ⁴√(a⁵) ifodaning qiymatini toping.",
    "variantlar": [2.1, 2.5, 2.625, 3.2],
    "javob": 2.625
  },
  {
    "savol": "log₃ a = 3,6 bo'lsa, log₃ ⁵√(a⁵) ifodaning qiymatini toping.",
    "variantlar": [1.8, 3.6, 7.2, 18],
    "javob": 3.6
  },
  {
    "savol": "log₅ a = 1,2 bo'lsa, log₅ ⁶√(a⁴) ifodaning qiymatini toping.",
    "variantlar": [0.8, 1.2, 1.8, 2.4],
    "javob": 0.8
  },
  {
    "savol": "lg a = 2 va lg b = 1 bo'lsa, lg √(a/b) ifodaning qiymatini toping.",
    "variantlar": [0.5, 1, 1.5, 2],
    "javob": 0.5
  },
  {
    "savol": "lg a = 2,4 va lg b = 7/5 bo'lsa, lg √(a/b) ifodaning qiymatini toping.",
    "variantlar": [0.5, 0.85, 1.2, 1.7],
    "javob": 0.85
  },
  {
    "savol": "ln a = 1,2 va ln b = 8/5 bo'lsa, ln √(a/b) ifodaning qiymatini toping.",
    "variantlar": [-0.2, -0.1, 0.1, 0.2],
    "javob": -0.2
  },
  {
    "savol": "log₂ a = 3,6 va log₂ b = 1,2 bo'lsa, log₂ ∛(a/b²) ifodaning qiymatini toping.",
    "variantlar": [0.4, 0.8, 1.2, 1.6],
    "javob": 0.4
  },
  {
    "savol": "log₅ a = 1,8 va log₅ b = 6/5 bo'lsa, log₅ ⁶√(a²/b⁵) ifodaning qiymatini toping.",
    "variantlar": [-0.4, -0.2, 0.2, 0.4],
    "javob": -0.4
  },
  {
    "savol": "log₂ 3 = a bo'lsa, log₄ 9 ni a orqali ifodalang.",
    "variantlar": ["a", "2a", "a/2", "a²"],
    "javob": "a"
  },
  {
    "savol": "log₃ 5 = a bo'lsa, log₉ 125 ni a orqali ifodalang.",
    "variantlar": ["a/2", "a", "3a/2", "2a"],
    "javob": "3a/2"
  },
  {
    "savol": "log₂ 7 = a bo'lsa, log₁₆ 343 ni a orqali ifodalang.",
    "variantlar": ["a/4", "a/2", "3a/4", "a"],
    "javob": "3a/4"
  },
  {
    "savol": "log₃ 2 = a bo'lsa, log₉ 16 ni a orqali ifodalang.",
    "variantlar": ["2a", "4a", "2/a", "4/a"],
    "javob": "2/a"
  },
  {
    "savol": "log₅ 2 = a bo'lsa, log₁₂₅ 16 ni a orqali ifodalang.",
    "variantlar": ["a/3", "2a/3", "4a/3", "2a"],
    "javob": "4a/3"
  },
  {
    "savol": "log₅ 2 = a bo'lsa, log₅ 25 ni a orqali ifodalang.",
    "variantlar": ["a", "2", "2a", "a²"],
    "javob": "2"
  },
  {
    "savol": "log₃ 2 = a bo'lsa, log₁₆ 27 ni a orqali ifodalang.",
    "variantlar": ["3/(4a)", "4/(3a)", "3a/4", "4a/3"],
    "javob": "3/(4a)"
  },
  {
    "savol": "log₂ 3 = a bo'lsa, log₂₇ 8 ni a orqali ifodalang.",
    "variantlar": ["3/a", "1/a", "3a", "a/3"],
    "javob": "1/a"
  },
  {
    "savol": "log₅ 7 = a bo'lsa, log₃₄₃ 25 ni a orqali ifodalang.",
    "variantlar": ["2/(3a)", "3/(2a)", "2a/3", "3a/2"],
    "javob": "2/(3a)"
  },
  {
    "savol": "log₅ 5 = a bo'lsa, log₁₂₅ 9 ni a orqali ifodalang.",
    "variantlar": ["log₅9/3", "2log₅3/3", "log₅9", "2log₅3"],
    "javob": "log₅9/3"
  },
  {
    "savol": "logₐ b = 2 bo'lsa, logₐ (a²/b³) ifodaning qiymatini toping.",
    "variantlar": [-4, -2, 2, 4],
    "javob": -4
  },
  {
    "savol": "log₂ 5 = a bo'lsa, log₄ 50 ni a orqali ifodalang.",
    "variantlar": ["1 + a/2", "1 + a", "2 + a/2", "2 + a"],
    "javob": "1 + a/2"
  },
  {
    "savol": "log₃ 7 = a bo'lsa, log₉ 49 ni a orqali ifodalang.",
    "variantlar": ["a", "2a", "a/2", "a²"],
    "javob": "a"
  },
  {
    "savol": "lg 2 = 0,3010 bo'lsa, lg 8 ning qiymatini toping.",
    "variantlar": [0.6020, 0.9030, 1.2040, 1.5050],
    "javob": 0.9030
  },
  {
    "savol": "ln 3 = 1,0986 bo'lsa, ln 27 ning qiymatini toping.",
    "variantlar": [1.0986, 2.1972, 3.2958, 4.3944],
    "javob": 3.2958
  },
  {
    "savol": "log₅ 2 = a va log₅ 3 = b bo'lsa, log₅ 72 ni a va b orqali ifodalang.",
    "variantlar": ["3a + 2b", "2a + 3b", "a + b + 1", "3a + 2b + 1"],
    "javob": "3a + 2b"
  },
  {
    "savol": "log₂ 3 = a va log₂ 5 = b bo'lsa, log₂ 60 ni a va b orqali ifodalang.",
    "variantlar": ["a + b + 1", "a + b + 2", "2a + b", "a + 2b"],
    "javob": "a + b + 2"
  },
  {
    "savol": "log₃ 2 = a bo'lsa, log₆ 8 ni a orqali ifodalang.",
    "variantlar": ["3a/(1+a)", "3/(1+a)", "a/(1+a)", "3a/(1-a)"],
    "javob": "3a/(1+a)"
  },
  {
    "savol": "log₂ 7 = a bo'lsa, log₁₄ 56 ni a orqali ifodalang.",
    "variantlar": ["(3+a)/(1+a)", "(3-a)/(1+a)", "(3a)/(1+a)", "(3)/(1+a)"],
    "javob": "(3+a)/(1+a)"
  },
  {
    "savol": "logₐ b = 3 va logₐ c = 2 bo'lsa, logₐ (b²c³) ifodaning qiymatini toping.",
    "variantlar": [6, 8, 12, 18],
    "javob": 12
  }
],

}

document.querySelector('.btn-start').addEventListener('click', () => {
    const selectedTopics = Array.from(document.querySelectorAll('input[name="mavzu"]:checked')).map(cb => cb.value);
    const testCount = parseInt(document.getElementById("testCount").value);

    if (selectedTopics.length === 0) {
      alert("Iltimos, mavzuni tanlang!");
      return;
    } else if (selectedTopics.length > 3) {
      alert("Faqat 3 tagacha mavzu tanlash mumkin!");
      return;
    }

    let allTests = [];
    selectedTopics.forEach(topic => {
      if (testData[topic]) allTests = allTests.concat(testData[topic]);
    });

    allTests.sort(() => Math.random() - 0.5);
    const selectedTests = allTests.slice(0, testCount);

    localStorage.setItem('selectedTests', JSON.stringify(selectedTests));
    window.location.href = 'examrepetitor.html';
  });