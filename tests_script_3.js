let testData = {
  theme1: [
  {
    "savol": "AB = 12, BC = 8 bo'lsa, AC = ? (nuqtalar A, B, C tartibda joylashgan)",
    "variantlar": [4, 8, 12, 20],
    "javob": 20
  },
  {
    "savol": "AD = 24, AB = 8, CD = 7 bo'lsa, BC = ? (nuqtalar A, B, C, D tartibda joylashgan)",
    "variantlar": [5, 7, 9, 11],
    "javob": 9
  },
  {
    "savol": "AB = 18, AC = 30 bo'lsa, BC = ? (nuqtalar A, B, C tartibda joylashgan)",
    "variantlar": [12, 14, 16, 18],
    "javob": 12
  },
  {
    "savol": "AB : BC = 4 : 3, AC = 42 bo'lsa, BC = ? (nuqtalar A, B, C tartibda joylashgan)",
    "variantlar": [12, 14, 16, 18],
    "javob": 18
  },
  {
    "savol": "AB : BC = 5 : 4, AC = 36 bo'lsa, AB = ? (nuqtalar A, B, C tartibda joylashgan)",
    "variantlar": [12, 16, 20, 24],
    "javob": 20
  },
  {
    "savol": "AB : BC : CD = 2 : 2 : 3 bo'lsa, AB/BD nisbatini toping. (nuqtalar A, B, C, D tartibda joylashgan)",
    "variantlar": ["1/2", "2/5", "2/7", "3/7"],
    "javob": "2/5"
  },
  {
    "savol": "AB : BC : CD = 2 : 2 : 3 bo'lsa, (AB+CD)/BC nisbatini toping. (nuqtalar A, B, C, D tartibda joylashgan)",
    "variantlar": ["2", "2.5", "3", "3.5"],
    "javob": "2.5"
  },
  {
    "savol": "AB = BC, CD = DE, AE = 48 bo'lsa, BD = ? (nuqtalar A, B, C, D, E tartibda joylashgan)",
    "variantlar": [16, 18, 20, 24],
    "javob": 24
  },
  {
    "savol": "AB = BC, CD = DE, BD = 20 bo'lsa, AE = ? (nuqtalar A, B, C, D, E tartibda joylashgan)",
    "variantlar": [30, 40, 50, 60],
    "javob": 40
  },
  {
    "savol": "AD = 29 bo'lsa, BC = ? (nuqtalar A, B, C, D tartibda joylashgan, AB = BC = CD)",
    "variantlar": ["29/3", "29/2", "29", "58/3"],
    "javob": "29/3"
  },
  {
    "savol": "AC = 24 bo'lsa, BD = ? (nuqtalar A, B, C, D tartibda joylashgan, AB = BC = CD)",
    "variantlar": [12, 16, 18, 24],
    "javob": 16
  },
  {
    "savol": "AC : CD = AB : BC = 2 : 1, AD = 54 bo'lsa, BD = ? (nuqtalar A, B, C, D tartibda joylashgan)",
    "variantlar": [18, 24, 30, 36],
    "javob": 30
  },
  {
    "savol": "AC : CD = AB : BC = 2 : 1, AD = 45 bo'lsa, BC = ? (nuqtalar A, B, C, D tartibda joylashgan)",
    "variantlar": [5, 10, 15, 20],
    "javob": 10
  },
  {
    "savol": "AD = 30, BD = 20, AC = 15 bo'lsa, BC = ? (nuqtalar A, B, C, D tartibda joylashgan)",
    "variantlar": [5, 10, 15, 20],
    "javob": 5
  },
  {
    "savol": "AD = 30, BD = 20, AC = 15, AK = KB, CL = LD bo'lsa, KL = ? (nuqtalar A, K, B, C, L, D tartibda joylashgan)",
    "variantlar": [10, 12.5, 15, 17.5],
    "javob": 12.5
  },
  {
    "savol": "A, B va C nuqtalar berilgan tartibda, bir to'g'ri chiziqda yotadi. AB = 24 va BC = 12 bo'lsa, AC kesma uzunligini toping.",
    "variantlar": [12, 24, 36, 48],
    "javob": 36
  },
  {
    "savol": "To'g'ri chiziqdagi A, B, C nuqtalar uchun AB = 20 cm, AC = 7 cm va BC = 13 cm ekani ma'lum. A, B, C nuqtalarning qaysi biri qolgan ikkitasining orasida yotadi?",
    "variantlar": ["A nuqta", "B nuqta", "C nuqta", "Hech biri"],
    "javob": "A nuqta"
  },
  {
    "savol": "To'g'ri chiziqdagi A, B, C nuqtalar uchun AB = 15 cm, AC = 20 cm va BC = 35 cm ekani ma'lum. A, B, C nuqtalarning qaysi biri qolgan ikkitasining orasida yotadi?",
    "variantlar": ["A nuqta", "B nuqta", "C nuqta", "Hech biri"],
    "javob": "B nuqta"
  },
  {
    "savol": "AE kesmada C nuqta olindi. AC va CE kesmalarning o'rtalari B va D nuqtalar bo'lsin. Agar BD = 16 bo'lsa, AE kesma uzunligini toping.",
    "variantlar": [24, 28, 32, 36],
    "javob": 32
  },
  {
    "savol": "To'g'ri chiziqda A, B, C, D nuqtalar ko'rsatilgan tartibda olingan. Agar AB = BC = CD = 8 bo'lsa, AB va CD kesmalar o'rtalari orasidagi masofani toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "To'g'ri chiziqda A, B, C, D nuqtalar ko'rsatilgan tartibda olingan. Agar AB = BC = CD = 12 bo'lsa, AB va CD kesmalar o'rtalari orasidagi masofani toping.",
    "variantlar": [18, 20, 22, 24],
    "javob": 24
  },
  {
    "savol": "A, B, C va D nuqtalar ko'rsatilgan tartibda, bir to'g'ri chiziqda yotadi. AB:BC:CD = 1:2:3 bo'lsa, AC/BD nisbatini toping.",
    "variantlar": ["1/2", "2/3", "3/4", "4/5"],
    "javob": "3/4"
  },
  {
    "savol": "A, B, C va D nuqtalar ko'rsatilgan tartibda, bir to'g'ri chiziqda olindi. AC:CD = AB:BC = 2:1 va AD = 27 bo'lsa, BD kesma uzunligini toping.",
    "variantlar": [9, 12, 15, 18],
    "javob": 15
  },
  {
    "savol": "A, B, C nuqtalar ko'rsatilgan tartibda bir to'g'ri chiziqda yotadi. AB : AC = 3 : 7 bo'lsa, BC : AB nisbatini toping.",
    "variantlar": ["3/4", "4/3", "3/7", "7/3"],
    "javob": "4/3"
  },
  {
    "savol": "A, B, C nuqtalar bir to'g'ri chiziqda yotadi. Agar AB = 600 cm, BC = 400 cm bo'lsa, AC kesma uzunligini toping (ikki holat).",
    "variantlar": ["200 cm yoki 1000 cm", "400 cm yoki 800 cm", "600 cm yoki 1000 cm", "200 cm yoki 800 cm"],
    "javob": "200 cm yoki 1000 cm"
  },
  {
    "savol": "To'g'ri chiziqda A, B, C va D nuqtalar olingan. AB = 2, BC = 4 va CD = 8 bo'lsa, AD kesma uzunligi qabul qilishi mumkin bo'lgan qiymatlarni toping.",
    "variantlar": ["6 yoki 14", "8 yoki 12", "10 yoki 14", "6 yoki 10"],
    "javob": "6 yoki 14"
  },
  {
    "savol": "∠AOB = 30°, ∠BOC = 20° bo'lsa, ∠AOC = ? (OB nur AOC burchak ichida joylashgan)",
    "variantlar": [10, 25, 50, 60],
    "javob": 50
  },
  {
    "savol": "∠AOC = 57°, ∠BOC = 25° bo'lsa, ∠AOB = ? (OB nur AOC burchak ichida joylashgan)",
    "variantlar": [22, 27, 32, 42],
    "javob": 32
  },
  {
    "savol": "∠AOC = 63°, x = ? (∠AOB = 2x, ∠BOC = x, OB nur AOC burchak ichida joylashgan)",
    "variantlar": [18, 21, 24, 27],
    "javob": 21
  },
  {
    "savol": "∠AOC = 60°, x = ? (∠AOB = 3x, ∠BOC = x, OB nur AOC burchak ichida joylashgan)",
    "variantlar": [12, 15, 18, 20],
    "javob": 15
  },
  {
    "savol": "∠BOC = 50°, ∠AOB = ? (∠AOC = 90°, OB nur AOC burchak ichida joylashgan)",
    "variantlar": [30, 40, 50, 60],
    "javob": 40
  },
  {
    "savol": "BO ⟂ OD, ∠BOA = 20° bo'lsa, ∠COD = ? (O nuqtada to'g'ri chiziqlar kesishgan, A, B, C, D nuqtalar O dan turli yo'nalishlarda)",
    "variantlar": [20, 40, 60, 70],
    "javob": 70
  },
  {
    "savol": "x ni toping. (Burchaklar: 2x-40°, 3x, 4x bir nuqtada to'liq burchak hosil qiladi)",
    "variantlar": [30, 35, 40, 45],
    "javob": 40
  },
  {
    "savol": "AB:BC:CD = 2:2:3 bo'lsa, AC/BD nisbatini toping.",
    "variantlar": ["2/3", "3/4", "4/5", "5/6"],
    "javob": "4/5"
  },
  {
    "savol": "A, B, C nuqtalar bir to'g'ri chiziqda yotadi. Agar AB = 900 cm, BC = 400 cm bo'lsa, AC kesma uzunligini toping (ikki holat).",
    "variantlar": ["500 cm yoki 1300 cm", "600 cm yoki 1200 cm", "700 cm yoki 1100 cm", "800 cm yoki 1000 cm"],
    "javob": "500 cm yoki 1300 cm"
  },
  {
    "savol": "A, B, C nuqtalar bir to'g'ri chiziqda yotadi. Agar AB = 1200 cm, BC = 400 cm bo'lsa, AC kesma uzunligini toping (ikki holat).",
    "variantlar": ["600 cm yoki 1400 cm", "700 cm yoki 1300 cm", "800 cm yoki 1600 cm", "900 cm yoki 1500 cm"],
    "javob": "800 cm yoki 1600 cm"
  },
  {
    "savol": "A, B, C nuqtalar bir to'g'ri chiziqda yotadi. Agar AB = 8, AC = 15 bo'lsa, BC kesma uzunligini toping (ikki holat).",
    "variantlar": ["3 yoki 13", "5 yoki 15", "7 yoki 23", "9 yoki 25"],
    "javob": "7 yoki 23"
  },
  {
    "savol": "A, B, C, D nuqtalar bir to'g'ri chiziqda yotadi. AB = 5, BC = 7, CD = 9 bo'lsa, AD kesma uzunligini toping (nuqtalar A, B, C, D tartibda joylashgan).",
    "variantlar": [18, 19, 20, 21],
    "javob": 21
  },
  {
    "savol": "A, B, C, D nuqtalar bir to'g'ri chiziqda yotadi. AB = 3, BC = 5, AD = 15 bo'lsa, CD kesma uzunligini toping (nuqtalar A, B, C, D tartibda joylashgan).",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "∠AOB = 2x, ∠BOC = 3x, ∠COD = 4x, ∠AOD = 180° bo'lsa, x ni toping.",
    "variantlar": [15, 20, 25, 30],
    "javob": 20
  }
],






  theme2: [
  {
    "savol": "a || b, rasmda berilgan burchak 40° bo'lsa, α va β ni toping. (α va β mos burchaklar)",
    "variantlar": ["α=40°, β=40°", "α=40°, β=140°", "α=140°, β=40°", "α=140°, β=140°"],
    "javob": "α=40°, β=140°"
  },
  {
    "savol": "a || b, rasmda berilgan burchak 42° bo'lsa, α ni toping. (α va berilgan burchak almashinuvchi)",
    "variantlar": [42, 48, 138, 148],
    "javob": 42
  },
  {
    "savol": "a || b, rasmda berilgan burchak 4x bo'lsa, α va β ni toping. (α va β qo'shni burchaklar)",
    "variantlar": ["α=4x, β=180°-4x", "α=180°-4x, β=4x", "α=4x, β=4x", "α=180°-4x, β=180°-4x"],
    "javob": "α=4x, β=180°-4x"
  },
  {
    "savol": "a || b, rasmda berilgan burchak 50° bo'lsa, x ni toping. (x va 50° almashinuvchi)",
    "variantlar": [40, 50, 130, 140],
    "javob": 50
  },
  {
    "savol": "a || b, rasmda 2x+20° va 4x burchaklar berilgan bo'lsa, β ni toping.",
    "variantlar": [60, 80, 100, 120],
    "javob": 100
  },
  {
    "savol": "a || b, rasmda 2x va 4x burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [60, 80, 100, 120],
    "javob": 120
  },
  {
    "savol": "a || b, rasmda 3x va 5x-20° burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [75, 85, 95, 105],
    "javob": 105
  },
  {
    "savol": "a || b, rasmda 3x+15° va 4x burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [60, 75, 90, 105],
    "javob": 105
  },
  {
    "savol": "Ikkita parallel to'g'ri chiziqni uchinchi to'g'ri chiziq kesishidan hosil bo'lgan ichki almashinuvchi burchaklar yig'indisi 84° ga teng. Bu burchaklarni toping.",
    "variantlar": ["42° va 42°", "40° va 44°", "38° va 46°", "36° va 48°"],
    "javob": "42° va 42°"
  },
  {
    "savol": "Ikkita parallel to'g'ri chiziqni uchinchi to'g'ri chiziq kesishidan hosil bo'lgan ichki almashinuvchi burchaklar yig'indisi 96° ga teng. Bu burchaklarni toping.",
    "variantlar": ["48° va 48°", "46° va 50°", "44° va 52°", "42° va 54°"],
    "javob": "48° va 48°"
  },
  {
    "savol": "Ikkita parallel to'g'ri chiziqni uchinchi to'g'ri chiziq kesishidan hosil bo'lgan ichki bir tomonli burchaklar ayirmasi 80° ga teng. Bu burchaklardan kattasini toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 130
  },
  {
    "savol": "Ikkita parallel to'g'ri chiziqni uchinchi to'g'ri chiziq kesishidan hosil bo'lgan ichki bir tomonli burchaklar ayirmasi 100° ga teng. Bu burchaklardan kattasini toping.",
    "variantlar": [120, 130, 140, 150],
    "javob": 140
  },
  {
    "savol": "Ikkita parallel to'g'ri chiziqni uchinchi to'g'ri chiziq kesishidan hosil bo'lgan ichki bir tomonli burchaklar nisbati 2/7 ga teng. Bu burchaklardan kichigini toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 40
  },
  {
    "savol": "Ikkita parallel to'g'ri chiziqni uchinchi to'g'ri chiziq kesishidan hosil bo'lgan ichki bir tomonli burchaklar nisbati 4/5 ga teng. Bu burchaklardan kichigini toping.",
    "variantlar": [60, 70, 80, 90],
    "javob": 80
  },
  {
    "savol": "Ikkita parallel to'g'ri chiziqni uchinchi to'g'ri chiziq kesishidan hosil bo'lgan ichki bir tomonli burchaklar nisbati 1/2 ga teng. Bu burchaklardan kichigini toping.",
    "variantlar": [60, 70, 80, 90],
    "javob": 60
  },
  {
    "savol": "l || AC, 2α + β = ? (Rasmda uchburchak va parallel chiziq berilgan)",
    "variantlar": [90, 120, 150, 180],
    "javob": 180
  },
  {
    "savol": "l || AC, 2α = 3β bo'lsa, x = ? (Rasmda uchburchak va parallel chiziq berilgan)",
    "variantlar": [30, 36, 40, 45],
    "javob": 36
  },
  {
    "savol": "l || AC, α = ? (Rasmda uchburchak va parallel chiziq berilgan, bir burchak 50° berilgan)",
    "variantlar": [40, 50, 60, 70],
    "javob": 50
  },
  {
    "savol": "d₁ || d₂, rasmda x+10° va 2x-10° burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [60, 70, 80, 90],
    "javob": 70
  },
  {
    "savol": "d₁ || d₂, rasmda 30° va 40° burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [60, 70, 80, 90],
    "javob": 70
  },
  {
    "savol": "d₁ || d₂, rasmda 2x+20° va 30° burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [40, 50, 60, 70],
    "javob": 50
  },
  {
    "savol": "d₁ || d₂ || d₃, rasmda 40° va 20° burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [60, 70, 80, 90],
    "javob": 60
  },
  {
    "savol": "d₁ || d₂ || d₃, rasmda 50° va 80° burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 130
  },
  {
    "savol": "l₁ || l₂, rasmda x+20°, 70°, x+10°, 60° burchaklar berilgan bo'lsa, x ni toping.",
    "variantlar": [20, 30, 40, 50],
    "javob": 30
  },
  {
    "savol": "l₁ || l₂, rasmda 2x+20°, 30°, x+10° burchaklar berilgan bo'lsa, x ni toping.",
    "variantlar": [20, 30, 40, 50],
    "javob": 30
  },
  {
    "savol": "m₁ || m₂ || m₃, rasmda x va x-30° burchaklar berilgan bo'lsa, x ni toping.",
    "variantlar": [60, 70, 80, 90],
    "javob": 80
  },
  {
    "savol": "m₁ || m₂ || m₃, rasmda x+20° va x+5° burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 120
  },
  {
    "savol": "m₁ || m₂, rasmda 120° va 100° burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 110
  },
  {
    "savol": "m₁ || m₂, rasmda x, 120°, 130° burchaklar berilgan bo'lsa, x ni toping.",
    "variantlar": [60, 70, 80, 90],
    "javob": 70
  },
  {
    "savol": "m₁ || m₂, rasmda x+20°, 110°, x-10° burchaklar berilgan bo'lsa, x ni toping.",
    "variantlar": [20, 30, 40, 50],
    "javob": 40
  },
  {
    "savol": "m₁ || m₂, rasmda 2x, x+10°, 3x-10° burchaklar berilgan bo'lsa, x ni toping.",
    "variantlar": [20, 30, 40, 50],
    "javob": 30
  },
  {
    "savol": "l₁ || l₂, rasmda 100°, 120° va α burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 110
  },
  {
    "savol": "l₁ || l₂, rasmda 50°, 110° va α burchaklar berilgan bo'lsa, α ni toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 120
  },
  {
    "savol": "d₁ || d₂, rasmda 2x va 4x burchaklar berilgan bo'lsa, α ni toping. (α va 4x mos burchaklar)",
    "variantlar": [60, 80, 100, 120],
    "javob": 120
  },
  {
    "savol": "d₁ || d₂, rasmda 3x va 5x-20° burchaklar berilgan bo'lsa, x ni toping.",
    "variantlar": [20, 25, 30, 35],
    "javob": 30
  },
  {
    "savol": "d₁ || d₂, rasmda 3x+15° va 4x burchaklar berilgan bo'lsa, x ni toping.",
    "variantlar": [15, 20, 25, 30],
    "javob": 25
  },
  {
    "savol": "a || b, rasmda 2x+20° va 4x burchaklar berilgan bo'lsa, β ni toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 100
  },
  {
    "savol": "a || b, rasmda 50° burchak berilgan bo'lsa, x ni toping.",
    "variantlar": [40, 50, 60, 70],
    "javob": 50
  },
  {
    "savol": "a || b, rasmda 42° burchak berilgan bo'lsa, α ni toping.",
    "variantlar": [42, 48, 138, 148],
    "javob": 42
  },
  {
    "savol": "a || b, rasmda 40° burchak berilgan bo'lsa, α va β ni toping.",
    "variantlar": ["α=40°, β=40°", "α=40°, β=140°", "α=140°, β=40°", "α=140°, β=140°"],
    "javob": "α=40°, β=140°"
  }
],






theme3: [
  {
    "savol": "∠BAC = 70°, ∠BCA = 60° bo'lsa, ∠ABC = x ni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "∠BAC = 60°, ∠ABC = α, ∠BCA = α + 20° bo'lsa, α ni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "∠BAC = x + 10°, ∠ABC = x + 20°, ∠BCA = x bo'lsa, x ni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "BC ⟂ AC, ∠ABC = x, ∠CAB = x + 10° bo'lsa, x ni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 40
  },
  {
    "savol": "∠BAC = 30°, ∠DBC = 50°, ∠ABD = ∠DCB = α bo'lsa, α ni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "∠ABC = 80°, ∠BCA = 50°, ∠AED = 70° bo'lsa, ∠ADE = α ni toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 60
  },
  {
    "savol": "∠BDE = 40°, ∠BED = 80°, ∠BCA = 70° bo'lsa, ∠BAC = α ni toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 60
  },
  {
    "savol": "DE ⟂ BC, ∠BAC = 70°, ∠ABC = 60° bo'lsa, ∠EDC = α ni toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 60
  },
  {
    "savol": "∠ABC = 21°, ∠DAB = 42°, ∠DAC = 22°, ∠BAC = 60°, ∠CED = 50° bo'lsa, ∠ABC = α ni toping.",
    "variantlar": [21, 22, 42, 60],
    "javob": 21
  },
  {
    "savol": "AD ⟂ BC, BE ⟂ AC, ∠ECB = 30°, ∠EBA = 20° bo'lsa, ∠BAD = α ni toping.",
    "variantlar": [30, 40, 50, 60],
    "javob": 40
  },
  {
    "savol": "∠ABC = ∠ACB, ∠CBD = 20°, ∠BDC = 36° bo'lsa, ∠CAB = β ni toping.",
    "variantlar": [80, 82, 84, 86],
    "javob": 84
  },
  {
    "savol": "Chizmada berilganlarga ko'ra x ni toping. (Uchburchakning tashqi burchaklari 110° va 100°)",
    "variantlar": [110, 120, 130, 140],
    "javob": 130
  },
  {
    "savol": "Chizmada berilganlarga ko'ra x ni toping. (Uchburchakning burchaklari 3α-30° va boshqa burchaklar)",
    "variantlar": [20, 25, 30, 35],
    "javob": 30
  },
  {
    "savol": "AB ⟂ BD, AE - bissektrisa, ∠AED = 108° bo'lsa, x ni toping.",
    "variantlar": [12, 18, 24, 36],
    "javob": 18
  },
  {
    "savol": "Ikkita ichki burchagi 30° va 80° bo'lgan uchburchakning uchinchi ichki burchagini toping.",
    "variantlar": [60, 65, 70, 75],
    "javob": 70
  },
  {
    "savol": "Uchburchakning ichki burchaklari 3:7:2 nisbatda bo'lsa, bu burchaklardan kichigini toping.",
    "variantlar": [30, 35, 40, 45],
    "javob": 30
  },
  {
    "savol": "ABC uchburchakning BD bissektrisasi o'tkazildi. ∠BAD = 48°, ∠BCD = 42° bo'lsa, ∠ADB ni toping.",
    "variantlar": [80, 85, 90, 95],
    "javob": 90
  },
  {
    "savol": "Uchburchakning ikkita tashqi burchagi 120° va 130° ga teng. Uchburchakning uchinchi tashqi burchagini toping.",
    "variantlar": [100, 105, 110, 115],
    "javob": 110
  },
  {
    "savol": "Uchburchakning ikkita tashqi burchagi 140° va 120° ga teng. Uchburchakning uchinchi uchidagi ichki burchagini toping.",
    "variantlar": [70, 80, 90, 100],
    "javob": 80
  },
  {
    "savol": "Uchburchakning ikkita ichki burchagi 84° va 60° ga teng. Uchburchakning uchinchi uchidagi tashqi burchagini toping.",
    "variantlar": [124, 134, 144, 154],
    "javob": 144
  },
  {
    "savol": "Uchburchakning ichki burchaklari 3:2:1 nisbatda bo'lsa, uning eng katta tashqi burchagini toping.",
    "variantlar": [90, 100, 110, 120],
    "javob": 120
  },
  {
    "savol": "Uchburchakning tashqi burchaklari o'zaro 3:4:5 nisbatda. Uchburchakning eng katta ichki burchagini aniqlang.",
    "variantlar": [60, 75, 90, 105],
    "javob": 90
  },
  {
    "savol": "Uchburchakning tashqi burchaklari o'zaro 3:4:5 nisbatda. Uchburchakning ichki burchaklaridan eng kattasi va eng kichigining ayirmasini aniqlang.",
    "variantlar": [30, 40, 50, 60],
    "javob": 40
  },
  {
    "savol": "Chizmada berilganlarga ko'ra x va y ni toping.",
    "variantlar": ["x=50, y=130", "x=60, y=120", "x=70, y=110", "x=80, y=100"],
    "javob": "x=60, y=120"
  },
  {
    "savol": "Chizmada berilganlarga ko'ra y - x ni toping.",
    "variantlar": [20, 30, 40, 50],
    "javob": 40
  },
  {
    "savol": "Chizmada berilganlarga ko'ra x + y - z ni toping. ∠ABC = 80°, ∠ADC = 120°, ∠BAD = ∠DCB = α",
    "variantlar": [20, 30, 40, 50],
    "javob": 40
  },
  {
    "savol": "Chizmada berilganlarga ko'ra x + y - z ni toping. ∠BAD = 30°, ∠ABC = 60°, ∠BCD = 40°",
    "variantlar": [20, 30, 40, 50],
    "javob": 50
  },
  {
    "savol": "AB = AC, ∠BAC = 50° bo'lsa, ∠ABC ni toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 65
  },
  {
    "savol": "AB = AC, ∠BAC = 108° bo'lsa, ∠ABC ni toping.",
    "variantlar": [32, 34, 36, 38],
    "javob": 36
  },
  {
    "savol": "Uchburchakning burchaklari 2:3:4 nisbatda bo'lsa, eng katta burchakni toping.",
    "variantlar": [60, 70, 80, 90],
    "javob": 80
  },
  {
    "savol": "Teng yonli uchburchakning asosidagi burchagi 40° bo'lsa, uchidagi burchagini toping.",
    "variantlar": [80, 90, 100, 110],
    "javob": 100
  },
  {
    "savol": "Teng yonli uchburchakning uchidagi burchagi 80° bo'lsa, asosidagi burchagini toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "To'g'ri burchakli uchburchakning o'tkir burchaklaridan biri 30° ga teng. Ikkinchi o'tkir burchakni toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 60
  },
  {
    "savol": "To'g'ri burchakli uchburchakning o'tkir burchaklaridan biri 45° ga teng. Ikkinchi o'tkir burchakni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 45
  },
  {
    "savol": "Uchburchakning tashqi burchagi 120° ga teng. Unga qo'shni bo'lmagan ichki burchaklardan biri 50° bo'lsa, ikkinchi ichki burchakni toping.",
    "variantlar": [60, 65, 70, 75],
    "javob": 70
  },
  {
    "savol": "Uchburchakning tashqi burchagi 130° ga teng. Unga qo'shni bo'lmagan ichki burchaklardan biri 60° bo'lsa, ikkinchi ichki burchakni toping.",
    "variantlar": [60, 65, 70, 75],
    "javob": 70
  },
  {
    "savol": "Uchburchakning ichki burchaklari 5:6:7 nisbatda bo'lsa, eng kichik burchakni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "Uchburchakning ichki burchaklari 5:6:7 nisbatda bo'lsa, eng katta burchakni toping.",
    "variantlar": [60, 65, 70, 75],
    "javob": 70
  },
  {
    "savol": "ABC uchburchakda ∠A = 40°, ∠B = 60° bo'lsa, ∠C ni toping.",
    "variantlar": [60, 70, 80, 90],
    "javob": 80
  },
  {
    "savol": "ABC uchburchakda ∠A = 2x, ∠B = 3x, ∠C = 4x bo'lsa, x ni toping.",
    "variantlar": [15, 20, 25, 30],
    "javob": 20
  },
  {
    "savol": "Teng tomonli uchburchakning burchaklarini toping.",
    "variantlar": ["40,40,100", "50,50,80", "60,60,60", "70,70,40"],
    "javob": "60,60,60"
  }
],





theme4: [
  {
    "savol": "Uzunliklari 8, 12 va x bo'lgan kesmalardan uchburchak yasash mumkin bo'lsa, x ning nechta natural qiymati bor?",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "Uchburchakning ikki tomoni 14 va 16 bo'lsa, uning perimetri eng katta butun qiymatini toping.",
    "variantlar": [55, 56, 57, 58],
    "javob": 57
  },
  {
    "savol": "Uchburchakning ikki tomoni 1,2 va 0,7 bo'lsa, uchinchi tomoni qanday butun qiymatlar qabul qila oladi?",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "Uzunliklari 5, 9, 13, 17, 21 bo'lgan kesmalardan nechta turli tomonli uchburchak yasash mumkin?",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "Teng yonli uchburchakning ikki tomoni 5 va 11 bo'lsa, uning perimetrini toping.",
    "variantlar": [21, 22, 23, 27],
    "javob": 27
  },
  {
    "savol": "Uzunliklari 6, 10, 15, 18, 22 bo'lgan kesmalardan nechta turli tomonli uchburchak yasash mumkin?",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "Teng yonli uchburchakning ikki tomoni 8 va 17 bo'lsa, uning perimetrini toping.",
    "variantlar": [33, 34, 35, 42],
    "javob": 42
  },
  {
    "savol": "x ning qabul qilishi mumkin bo'lgan qiymatlarini toping. (Tomonlar: 6, 8, 10, 14, x)",
    "variantlar": ["4 < x < 20", "5 < x < 19", "6 < x < 18", "7 < x < 17"],
    "javob": "4 < x < 20"
  },
  {
    "savol": "x ning qabul qilishi mumkin bo'lgan qiymatlarini toping. (Tomonlar: 7, 10, 2x-1, 9, 13)",
    "variantlar": ["2 < x < 8", "3 < x < 9", "4 < x < 10", "5 < x < 11"],
    "javob": "4 < x < 10"
  },
  {
    "savol": "x ning qabul qilishi mumkin bo'lgan qiymatlarini toping. (Tomonlar: 5, 8, 6, 2x+2)",
    "variantlar": ["1 < x < 7", "2 < x < 8", "3 < x < 9", "4 < x < 10"],
    "javob": "2 < x < 8"
  },
  {
    "savol": "ABC uchburchakda ∠A = 72°, ∠B = 46° bo'lsa, uchburchakning eng katta tomonini toping.",
    "variantlar": ["AB", "BC", "AC", "Aniqlab bo'lmaydi"],
    "javob": "BC"
  },
  {
    "savol": "ABC uchburchakda ∠A = 54°, ∠B = 71° bo'lsa, kattaligi bo'yicha o'rtacha tomonni toping.",
    "variantlar": ["AB", "BC", "AC", "Aniqlab bo'lmaydi"],
    "javob": "AB"
  },
  {
    "savol": "ABC uchburchakda AB=12, BC=13, AC=14 bo'lsa, burchaklarni o'sish tartibida yozing.",
    "variantlar": ["∠A, ∠B, ∠C", "∠B, ∠A, ∠C", "∠C, ∠A, ∠B", "∠C, ∠B, ∠A"],
    "javob": "∠C, ∠B, ∠A"
  },
  {
    "savol": "ABCD to'rtburchakda ∠BAD=48°, ∠ADB=52°, ∠DBC=64°, ∠BCD=72° bo'lsa, eng katta tomonni toping.",
    "variantlar": ["AB", "BC", "CD", "DA"],
    "javob": "BC"
  },
  {
    "savol": "BD mediana bo'lsa, x ni toping. (Tomonlar: 8 va 12)",
    "variantlar": [2, 4, 6, 8],
    "javob": 4
  },
  {
    "savol": "BD mediana bo'lsa, x ni toping. (Tomonlar: 10 va 16)",
    "variantlar": [3, 5, 7, 9],
    "javob": 7
  },
  {
    "savol": "EF o'rta chiziq bo'lsa, x ni toping. (Asos: 14)",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "EF o'rta chiziq bo'lsa, x ni toping. (Asos: 18)",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "EF o'rta chiziq bo'lsa, x ni toping. (Asos: 24)",
    "variantlar": [10, 11, 12, 13],
    "javob": 12
  },
  {
    "savol": "x + y ni toping. (O'rta chiziqlar 8 va 10)",
    "variantlar": [16, 18, 20, 22],
    "javob": 20
  },
  {
    "savol": "x + y + z ni toping. (O'rta chiziqlar 5, 7, 9)",
    "variantlar": [18, 20, 22, 24],
    "javob": 22
  },
  {
    "savol": "D, E, F nuqtalar mos tomonlarning o'rta nuqtalari. P(EFD) = 25 bo'lsa, P(ABC) ni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "D, E, F nuqtalar mos tomonlarning o'rta nuqtalari. P(ABC) = 64 bo'lsa, P(EFD) ni toping.",
    "variantlar": [28, 30, 32, 34],
    "javob": 32
  },
  {
    "savol": "BA = BC, BE bissektrisa bo'lsa, x ni toping. (∠ABC = 40°)",
    "variantlar": [60, 65, 70, 75],
    "javob": 70
  },
  {
    "savol": "Uchburchakning ikki tomoni 8 va 12 bo'lsa, uchinchi tomon qanday oraliqda bo'ladi?",
    "variantlar": ["4 < x < 20", "5 < x < 19", "6 < x < 18", "7 < x < 17"],
    "javob": "4 < x < 20"
  },
  {
    "savol": "Uchburchakning ikki tomoni 5 va 9 bo'lsa, uchinchi tomon qanday oraliqda bo'ladi?",
    "variantlar": ["4 < x < 14", "5 < x < 13", "6 < x < 12", "7 < x < 11"],
    "javob": "4 < x < 14"
  },
  {
    "savol": "Uchburchakning ikki tomoni 3 va 7 bo'lsa, uning perimetri qanday oraliqda bo'ladi?",
    "variantlar": ["10 < P < 20", "12 < P < 22", "14 < P < 24", "16 < P < 26"],
    "javob": "14 < P < 20"
  },
  {
    "savol": "Uchburchakning ikki tomoni 4 va 9 bo'lsa, uning perimetri qanday oraliqda bo'ladi?",
    "variantlar": ["13 < P < 26", "14 < P < 27", "15 < P < 28", "16 < P < 29"],
    "javob": "13 < P < 26"
  },
  {
    "savol": "Teng yonli uchburchakning asosi 10, yon tomoni 7 bo'lsa, uning perimetrini toping.",
    "variantlar": [20, 22, 24, 26],
    "javob": 24
  },
  {
    "savol": "Teng yonli uchburchakning yon tomoni 12, perimetri 32 bo'lsa, asosini toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "Uchburchakning tomonlari 7, 8 va x. x ning nechta natural qiymati bor?",
    "variantlar": [11, 12, 13, 14],
    "javob": 13
  },
  {
    "savol": "Uchburchakning tomonlari 5, 6 va x. x ning nechta natural qiymati bor?",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "Uchburchakning tomonlari 3, 4 va x. x ning nechta butun qiymati bor?",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "Uchburchakning ikki tomoni 10 va 15 bo'lsa, uchinchi tomonning eng katta butun qiymatini toping.",
    "variantlar": [22, 23, 24, 25],
    "javob": 24
  },
  {
    "savol": "Uchburchakning ikki tomoni 10 va 15 bo'lsa, uchinchi tomonning eng kichik butun qiymatini toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "Uchburchakning perimetri 20, ikki tomoni 6 va 8 bo'lsa, uchinchi tomonni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "Uchburchakning perimetri 30, ikki tomoni 12 va 13 bo'lsa, uchinchi tomonni toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "Uchburchakning tomonlari 8, 12 va 16 bo'lsa, uning perimetrini toping.",
    "variantlar": [34, 35, 36, 37],
    "javob": 36
  },
  {
    "savol": "Uchburchakning tomonlari 5, 7 va 9 bo'lsa, uning perimetrini toping.",
    "variantlar": [19, 20, 21, 22],
    "javob": 21
  },
  {
    "savol": "Uchburchakning tomonlari 2, 3 va x. x ning nechta natural qiymati bor?",
    "variantlar": [1, 2, 3, 4],
    "javob": 3
  }
],





theme5: [
  {
    "savol": "AC ⟂ CB, CA = 3, CB = 4 bo'lsa, AB = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 5
  },
  {
    "savol": "AC ⟂ CB, CA = 5, CB = 12 bo'lsa, AB = x ni toping.",
    "variantlar": [13, 14, 15, 16],
    "javob": 13
  },
  {
    "savol": "AC ⟂ CB, CA = 8, CB = 15 bo'lsa, AB = x ni toping.",
    "variantlar": [16, 17, 18, 19],
    "javob": 17
  },
  {
    "savol": "AC ⟂ CB, AB = 25, AC = 24 bo'lsa, BC = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "AC ⟂ CB, AC = x, BC = x + 7, AB = x + 9 bo'lsa, x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 8
  },
  {
    "savol": "AB ⟂ BC, AD ⟂ CD, AB = 3, AD = 4, CD = 5 bo'lsa, BC = x ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 6
  },
  {
    "savol": "AB ⟂ AD, DC ⟂ BC, AB = 8, CD = 6, AD = x - 1, BC = x + 1 bo'lsa, x ni toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "BC ⟂ CA, CD = 8, DA = 4, BD = 10 bo'lsa, BA = x ni toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 14
  },
  {
    "savol": "BC ⟂ CA, BC = 12, BD = 13, BA = 20 bo'lsa, DA = x ni toping.",
    "variantlar": [9, 10, 11, 12],
    "javob": 11
  },
  {
    "savol": "BC ⟂ CA, BC = 15, BD = 17, BA = 25 bo'lsa, DA = x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 7
  },
  {
    "savol": "BC ⟂ CA, BA ⟂ AD, BC = 4, CA = 5, AD = 2√2 bo'lsa, BD = x ni toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 10
  },
  {
    "savol": "CD ⟂ CA, DA ⟂ AB, CD = 2, CA = 3, AB = 2√3 bo'lsa, BD = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "CD ⟂ CA, DA ⟂ AB, CA = 12, AB = 8, BD = 17 bo'lsa, CD = x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 9
  },
  {
    "savol": "CD ⟂ CA, DA ⟂ AB, CD = √15, AB = 6, BD = 10 bo'lsa, CA = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "AB ⟂ BC, BA ⟂ AD, BC = 3, AB = 4, AD = 8 bo'lsa, CD = x ni toping.",
    "variantlar": [10, 11, 12, 13],
    "javob": 13
  },
  {
    "savol": "AB ⟂ BC, BA ⟂ AD, BC = 5, AB = 6, AD = 13 bo'lsa, CD = x ni toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 14
  },
  {
    "savol": "CD ⟂ AB, AD = 5, BD = 11 bo'lsa, BC² - AC² ni toping.",
    "variantlar": [6, 16, 26, 36],
    "javob": 36
  },
  {
    "savol": "CD ⟂ AB, AD = 3, BD = 7 bo'lsa, BC² - AC² ni toping.",
    "variantlar": [4, 14, 24, 34],
    "javob": 24
  },
  {
    "savol": "AC ⟂ BD, AB = 3, BC = 4, CD = 5 bo'lsa, AD = x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 6
  },
  {
    "savol": "AC ⟂ BD, AB = 6, CD = 8, BC = 7 bo'lsa, AD = x ni toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "AC ⟂ BD, AB = x, BC = x + 5, CD = x + 8, AD = x + 5 bo'lsa, x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "AC ⟂ BD, AB = 5, AD² + BC² = 61 bo'lsa, CD = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "AB ⟂ CD, AC = BC = 10, AB = 16 bo'lsa, CD ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "AC = CB = BD = 25, AD = 5 bo'lsa, CD ni toping.",
    "variantlar": [15, 20, 25, 30],
    "javob": 20
  },
  {
    "savol": "AC = CB = √41, BD = 8, AD = 2 bo'lsa, CD ni toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "BD ⟂ AC, AB = 10, BC = 17, AC = 21 bo'lsa, BD = x ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "BD ⟂ AC, AB = 10, BC = 17 bo'lsa, AC ni toping.",
    "variantlar": [19, 20, 21, 22],
    "javob": 21
  },
  {
    "savol": "BD ⟂ AC, AB = 13, BC = 20 bo'lsa, AC ni toping.",
    "variantlar": [19, 20, 21, 22],
    "javob": 21
  },
  {
    "savol": "To'g'ri burchakli uchburchakning bir kateti 9 ga, gipotenuzasi 41 ga teng bo'lsa, ikkinchi katetini toping.",
    "variantlar": [40, 41, 42, 43],
    "javob": 40
  },
  {
    "savol": "ABC uchburchakda AH balandlik tushirildi. AB = 15, AH = 9, AC = 3√10 bo'lsa, BC tomon uzunligini toping.",
    "variantlar": [15, 16, 17, 18],
    "javob": 17
  },
  {
    "savol": "ABC uchburchakda BH balandlik o'tkazildi. AB = 7, AH = 4, HC = 3 bo'lsa, BC kesma uzunligini toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "Muntazam uchburchakning tomoni 8 ga teng. Bu uchburchak balandligini toping.",
    "variantlar": ["4√3", "6√3", "8√3", "10√3"],
    "javob": "4√3"
  },
  {
    "savol": "Muntazam uchburchakning balandligi 4√3 ga teng. Uchburchak perimetrini toping.",
    "variantlar": [18, 20, 22, 24],
    "javob": 24
  },
  {
    "savol": "Tomonlari 6, 7 va 8 ga teng uchburchakning kichik tomonining katta tomondagi proyeksiyasini toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "To'g'ri burchakli uchburchakning katetlari 5 va 12 bo'lsa, gipotenuzani toping.",
    "variantlar": [13, 14, 15, 16],
    "javob": 13
  },
  {
    "savol": "To'g'ri burchakli uchburchakning gipotenuzasi 17, bir kateti 8 bo'lsa, ikkinchi katetni toping.",
    "variantlar": [13, 14, 15, 16],
    "javob": 15
  },
  {
    "savol": "To'g'ri burchakli uchburchakning katetlari 9 va 12 bo'lsa, gipotenuzani toping.",
    "variantlar": [13, 14, 15, 16],
    "javob": 15
  },
  {
    "savol": "To'g'ri burchakli uchburchakning gipotenuzasi 25, bir kateti 7 bo'lsa, ikkinchi katetni toping.",
    "variantlar": [20, 21, 22, 24],
    "javob": 24
  },
  {
    "savol": "To'g'ri burchakli uchburchakning katetlari 8 va 15 bo'lsa, gipotenuzani toping.",
    "variantlar": [16, 17, 18, 19],
    "javob": 17
  },
  {
    "savol": "To'g'ri burchakli uchburchakning gipotenuzasi 10, bir kateti 6 bo'lsa, ikkinchi katetni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  }
],




theme6: [
  {
    "savol": "AC ⟂ AB, AB = 4, ∠ABC = 45° bo'lsa, BC = x ni toping.",
    "variantlar": ["4√2", "4√3", "8", "4"],
    "javob": "4√2"
  },
  {
    "savol": "AC ⟂ AB, AC = 6, ∠ABC = 45° bo'lsa, BC = x ni toping.",
    "variantlar": ["6√2", "6√3", "12", "6"],
    "javob": "6√2"
  },
  {
    "savol": "AC ⟂ AB, BC = 12, ∠ABC = 45° bo'lsa, AC = x ni toping.",
    "variantlar": ["6√2", "6√3", "12", "12√2"],
    "javob": "6√2"
  },
  {
    "savol": "AC ⟂ CB, CD ⟂ AB, AD = 2, ∠CAB = 45° bo'lsa, CB = x ni toping.",
    "variantlar": [2, 4, 6, 8],
    "javob": 4
  },
  {
    "savol": "AC ⟂ CB, BC = 4√3, ∠BAC = 60° bo'lsa, AB = x ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "AC ⟂ CB, AB = 18, ∠ABC = 30° bo'lsa, BC = x ni toping.",
    "variantlar": ["9√3", "9", "18", "18√3"],
    "javob": "9√3"
  },
  {
    "savol": "AC ⟂ CB, CD ⟂ AB, AD = 2, ∠CAB = 45° bo'lsa, CB = x ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "AC ⟂ CB, CD ⟂ AB, CD = 6, ∠ABC = 30° bo'lsa, AC = x ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 12
  },
  {
    "savol": "AC ⟂ CB, CD ⟂ AB, AC = 6, ∠ABC = 30° bo'lsa, CD = x ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "AC ⟂ CB, CD ⟂ AB, CD = 12, ∠ABC = 30° bo'lsa, BD = x ni toping.",
    "variantlar": [12, 123, 24, "to'g'risi yo'q"],
    "javob": "12√3"
  },
  {
    "savol": "AB ⟂ BC, BC = 12, sin α = 4/7 bo'lsa, AC ni toping.",
    "variantlar": [21, 24, 28, 32],
    "javob": 28
  },
  {
    "savol": "AB ⟂ BC, AC = 18, cos α = 2/3 bo'lsa, BC ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 12
  },
  {
    "savol": "AB ⟂ BC, AB = 7, sin α = 7/25 bo'lsa, BC ni toping.",
    "variantlar": [24, 25, 26, 28],
    "javob": 24
  },
  {
    "savol": "AC ⟂ CB, CD ⟂ AB, CD = 2, ∠ABC = 15° bo'lsa, AB ni toping.",
    "variantlar": [4, 6, 8, 10],
    "javob": 8
  },
  {
    "savol": "AC ⟂ CB, CD ⟂ AB, AB = 12, ∠BAC = 75° bo'lsa, CD = x ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "To'g'ri burchakli uchburchakning gipotenuzasi 14 ga, o'tkir burchaklaridan biri 30° ga teng. Kichik katet uzunligini toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "To'g'ri burchakli uchburchakda kichik katet 10 ga, bu katet qarshisidagi burchak 30° ga teng bo'lsa, uchburchak perimetrini toping.",
    "variantlar": [2003, 30103, 40, "to'g'risi yo'q"],
    "javob": "to'g'risi yo'q"
  },
  {
    "savol": "To'g'ri burchakli uchburchakning gipotenuzasi uzunligi 25 ga, o'tkir burchagi kosinusi 3/5 ga teng. Katta katet uzunligini toping.",
    "variantlar": [15, 20, 25, 30],
    "javob": 20
  },
  {
    "savol": "To'g'ri burchakli uchburchakning gipotenuzasiga tushirilgan balandligi 4 ga, o'tkir burchagi esa 45° ga teng. Uchburchakning kateti uzunligini toping.",
    "variantlar": ["4√2", "4√3", "8", "16"],
    "javob": "4√2"
  },
  {
    "savol": "To'g'ri burchakli uchburchakning bir kateti 7 ga, uning qarshisidagi burchagi 30° ga teng. Kichik katetning gipotenuzadagi proyeksiyasini toping.",
    "variantlar": [3.5, 7, 14, 21],
    "javob": 3.5
  },
  {
    "savol": "To'g'ri burchakli uchburchakning gipotenuzasi 15 ga, o'tkir burchagi sinusi 4/5 ga teng. Kichik katetning gipotenuzadagi proyeksiyasini toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "To'g'ri burchakli uchburchakning kichik kateti 7 ga, o'tkir burchak sinusi 24/25 ga teng. Uchburchak gipotenuzasiga tushirilgan balandlikni toping.",
    "variantlar": [5.76, 6.72, 7.68, 8.64],
    "javob": 6.72
  },
  {
    "savol": "Gipotenuzasi 12 ga teng bo'lgan to'g'ri burchakli uchburchakning o'tkir burchagi 15° ga teng. Uchburchak gipotenuzasiga tushirilgan balandlikni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "∠BAC = 30°, ∠BCA = 45°, BC = 4√2 bo'lsa, AB = x ni toping.",
    "variantlar": [4, 6, 8, 10],
    "javob": 8
  },
  {
    "savol": "∠BAC = 30°, ∠BCA = 45°, AB = 6 bo'lsa, BC = x ni toping.",
    "variantlar": ["3√2", "4√2", "5√2", "6√2"],
    "javob": "3√2"
  },
  {
    "savol": "∠BAC = 60°, ∠BCA = 45°, AB = 2√2 bo'lsa, BC = x ni toping.",
    "variantlar": ["2√3", "3√3", "4√3", "6√3"],
    "javob": "2√3"
  },
  {
    "savol": "∠BAC = 60°, CB = 6√3, sin(∠BCA) = 4/5 bo'lsa, AB = x ni toping.",
    "variantlar": [8, 10, 12, 14],
    "javob": 10
  },
  {
    "savol": "∠ABC = 60°, AC = 4√3, sin(∠BAC) = 3/4 bo'lsa, BC = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "∠BCA = 45°, AB = 8√2, sin(∠BAC) = 5/8 bo'lsa, BC = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "∠BAC = 45°, AB = 6, BC = 4√2 bo'lsa, sin α ni toping.",
    "variantlar": ["1/2", "2/3", "3/4", "4/5"],
    "javob": "3/4"
  },
  {
    "savol": "AB = 8, BC = 4, ∠BCA = 45° bo'lsa, sin α ni toping.",
    "variantlar": ["1/2", "√2/2", "√3/2", "1"],
    "javob": "√2/2"
  },
  {
    "savol": "AB = √2, BC = √3, ∠BCA = 45° bo'lsa, α ni toping.",
    "variantlar": [30, 45, 60, 90],
    "javob": 60
  },
  {
    "savol": "∠ACB = 45°, ∠ABC = 75°, AB = 3√2 bo'lsa, BC = x ni toping.",
    "variantlar": [2, 3, 1, "to'g'risi yo'q"],
    "javob": "3√3"
  },
  {
    "savol": "∠ABC = 30°, ∠BAC = 15°, AB = 16√2 bo'lsa, AC = x ni toping.",
    "variantlar": [8, 12, 16, 20],
    "javob": 16
  },
  {
    "savol": "AC = 4, CB = 6, cos α = -2/3 bo'lsa, AB = x ni toping.",
    "variantlar": [8, 10, 12, 14],
    "javob": 10
  },
  {
    "savol": "AC = 4, AB = 5, cos α = 1/4 bo'lsa, BC = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "AB = 4, AC = 8, ∠BAC = 60° bo'lsa, BC = x ni toping.",
    "variantlar": ["4√3", "4√7", "8√3", "8√7"],
    "javob": "4√3"
  },
  {
    "savol": "AB = 3√2, BC = 5, AC = 7 bo'lsa, ∠BAC = α ni toping.",
    "variantlar": [30, 45, 60, 90],
    "javob": 45
  },
  {
    "savol": "AC = 6, BC = 3, ∠BCA = 120° bo'lsa, AB = x ni toping.",
    "variantlar": ["3√7", "3√5", "6√3", "9"],
    "javob": "3√7"
  }
],





theme7: [
  {
    "savol": "AC = 8, CB = 20 bo'lsa, ABC uchburchak yuzini toping. (AC ⟂ CB)",
    "variantlar": [80, 100, 120, 160],
    "javob": 80
  },
  {
    "savol": "AB = 41, BC = 9 bo'lsa, ABC uchburchak yuzini toping. (AB ⟂ BC)",
    "variantlar": ["184.5", "369", "41√9", "9√41"],
    "javob": "184.5"
  },
  {
    "savol": "AC = 8, AB = 16 bo'lsa, ABC uchburchak yuzini toping. (AC ⟂ AB)",
    "variantlar": [64, 96, 128, 256],
    "javob": 64
  },
  {
    "savol": "AC = x - 8, AB = 16, BC = x bo'lsa, ABC uchburchak yuzini toping. (∠A = 90°)",
    "variantlar": [24, 48, 72, 96],
    "javob": 96
  },
  {
    "savol": "BC = 14, AD = 6 bo'lsa, ABC uchburchak yuzini toping. (AD ⟂ BC)",
    "variantlar": [42, 84, 168, 336],
    "javob": 42
  },
  {
    "savol": "CD = 8, DB = 18 bo'lsa, ABC uchburchak yuzini toping. (AD ⟂ BC)",
    "variantlar": [72, 144, 216, 288],
    "javob": 144
  },
  {
    "savol": "AD = 8, BD = 16 bo'lsa, ABC uchburchak yuzini toping. (CD ⟂ AB)",
    "variantlar": [64, 128, 256, 512],
    "javob": 128
  },
  {
    "savol": "AD = x, CD = 4, BD = x + 3 bo'lsa, ABC uchburchak yuzini toping. (CD ⟂ AB, x=6)",
    "variantlar": [30, 36, 42, 48],
    "javob": 36
  },
  {
    "savol": "AB = 8, P(ABC) = 18 bo'lsa, ABC uchburchak yuzini toping. (Teng yonli uchburchak)",
    "variantlar": [12, 24, 36, 48],
    "javob": 12
  },
  {
    "savol": "AB = 6, P(ABC) = 14 bo'lsa, ABC uchburchak yuzini toping. (Teng yonli uchburchak)",
    "variantlar": [6, 12, 18, 24],
    "javob": 6
  },
  {
    "savol": "CD = 10, AB = 22 bo'lsa, ABC uchburchak yuzini toping. (CD ⟂ AB)",
    "variantlar": [110, 220, 330, 440],
    "javob": 110
  },
  {
    "savol": "CD = 18, AB = 30 bo'lsa, ABC uchburchak yuzini toping. (CD ⟂ AB)",
    "variantlar": [270, 540, 810, 1080],
    "javob": 270
  },
  {
    "savol": "AC = 20, S(ABC) = 100 bo'lsa, BD = x ni toping. (BD ⟂ AC)",
    "variantlar": [5, 10, 15, 20],
    "javob": 10
  },
  {
    "savol": "BD = 10, S(ABC) = 120 bo'lsa, AC = x ni toping. (BD ⟂ AC)",
    "variantlar": [12, 24, 36, 48],
    "javob": 24
  },
  {
    "savol": "AD = 2, CD = 5, BC = 13 bo'lsa, ABC uchburchak yuzini toping. (BD ⟂ AC)",
    "variantlar": [30, 35, 40, 45],
    "javob": 35
  },
  {
    "savol": "AD = 9, CD = 18, BC = 30 bo'lsa, ABC uchburchak yuzini toping. (BD ⟂ AC)",
    "variantlar": [270, 324, 378, 432],
    "javob": 324
  },
  {
    "savol": "AC = 17, CD = 15, BC = 25 bo'lsa, ABC uchburchak yuzini toping. (BD ⟂ AC)",
    "variantlar": [150, 180, 210, 240],
    "javob": 210
  },
  {
    "savol": "AC = BC, CD = 8, BD = 6 bo'lsa, ABC uchburchak yuzini toping. (CD ⟂ AB)",
    "variantlar": [48, 64, 80, 96],
    "javob": 64
  },
  {
    "savol": "AC = BC, CD = 12, CB = 20 bo'lsa, ABC uchburchak yuzini toping. (CD ⟂ AB)",
    "variantlar": [120, 144, 168, 192],
    "javob": 168
  },
  {
    "savol": "AC = BC = 15, AB = 18 bo'lsa, ABC uchburchak yuzini toping.",
    "variantlar": [96, 108, 120, 132],
    "javob": 108
  },
  {
    "savol": "ABC muntazam uchburchak, tomoni 6 ga teng. S(ABC) ni toping.",
    "variantlar": ["9√3", "12√3", "15√3", "18√3"],
    "javob": "9√3"
  },
  {
    "savol": "ABC teng tomonli uchburchak, S(ABC) = 25√3 bo'lsa, P(ABC) ni toping.",
    "variantlar": [15, 30, 45, 60],
    "javob": 30
  },
  {
    "savol": "ABC muntazam uchburchak, CD = 12 bo'lsa, S(ABC) ni toping. (CD ⟂ AB)",
    "variantlar": ["24√3", "36√3", "48√3", "60√3"],
    "javob": "48√3"
  },
  {
    "savol": "ABC muntazam uchburchak, BC = 5x - 6, AB = 3x + 4 bo'lsa, S(ABC) ni toping.",
    "variantlar": ["9√3", "16√3", "25√3", "36√3"],
    "javob": "25√3"
  },
  {
    "savol": "ABC teng tomonli uchburchak, S(ABC) = 25√3 bo'lsa, P(ABC) ni toping.",
    "variantlar": [15, 30, 45, 60],
    "javob": 30
  },
  {
    "savol": "AC = 5, BC = 8, ∠ACB = 60° bo'lsa, ABC uchburchak yuzini toping.",
    "variantlar": ["10√3", "15√3", "20√3", "25√3"],
    "javob": "10√3"
  },
  {
    "savol": "AC = 12√2, AB = 4, ∠BAC = 45° bo'lsa, ABC uchburchak yuzini toping.",
    "variantlar": [12, 24, 36, 48],
    "javob": 24
  },
  {
    "savol": "AC = 6, ∠ACB = 45°, S(ABC) = 12√2 bo'lsa, BC = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "AB = 6, BC = 8, ∠CBD = 60° bo'lsa, S(ABC) ni toping. (D nuqta AC da)",
    "variantlar": ["12√3", "24√3", "36√3", "48√3"],
    "javob": "24√3"
  },
  {
    "savol": "BC = 24, BD = 9, DE = 3 bo'lsa, S(ABC) ni toping. (DE ⟂ BC)",
    "variantlar": [54, 108, 162, 216],
    "javob": 162
  },
  {
    "savol": "AB = 6, AC = 8, BE = 5, BD = 12 bo'lsa, S(BED) ni toping.",
    "variantlar": [15, 24, 30, 36],
    "javob": 30
  },
  {
    "savol": "AB = 5, BC = 13, BE = 4, BD = 26 bo'lsa, S(BED) ni toping.",
    "variantlar": [20, 26, 40, 52],
    "javob": 52
  },
  {
    "savol": "AB = 8, BC = 10, AC = 12 bo'lsa, ABC uchburchak yuzini toping.",
    "variantlar": ["15√3", "15√7", "20√3", "20√7"],
    "javob": "15√7"
  },
  {
    "savol": "AB = 9, BC = 11, AC = 12 bo'lsa, ABC uchburchak yuzini toping.",
    "variantlar": ["20√2", "20√3", "20√5", "20√7"],
    "javob": "20√2"
  },
  {
    "savol": "AB = 5, AC = 7, BC = 3√2 bo'lsa, ABC uchburchak yuzini toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 10
  },
  {
    "savol": "AB ⟂ BC, AC = 8, BC = √41 bo'lsa, ABC uchburchak yuzini toping.",
    "variantlar": ["√41", "2√41", "4√41", "8√41"],
    "javob": "2√41"
  },
  {
    "savol": "DE o'rta chiziq, BD = 2, DE = 3 bo'lsa, BE ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "AC = 8, AB = 10, BC = 6 bo'lsa, ABC uchburchak yuzini toping.",
    "variantlar": [24, 30, 36, 48],
    "javob": 24
  },
  {
    "savol": "AB = 13, BC = 14, AC = 15 bo'lsa, ABC uchburchak yuzini toping.",
    "variantlar": [84, 96, 108, 120],
    "javob": 84
  },
  {
    "savol": "ABC teng yonli uchburchak, AB = AC = 10, BC = 12 bo'lsa, S(ABC) ni toping.",
    "variantlar": [48, 60, 72, 84],
    "javob": 48
  }
],





theme8: [
  {
    "savol": "BD-bissektrisa; AB=4; BC=7 bo'lsa, AD/DC nisbatini toping.",
    "variantlar": ["4/7", "7/4", "4/11", "7/11"],
    "javob": "4/7"
  },
  {
    "savol": "BD-bissektrisa; AB=4; BC=7 bo'lsa, DC/AC nisbatini toping.",
    "variantlar": ["4/11", "7/11", "4/7", "7/4"],
    "javob": "7/11"
  },
  {
    "savol": "BD-bissektrisa; AB=9; AD=6; BC=12 bo'lsa, DC = x ni toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 8
  },
  {
    "savol": "BD-bissektrisa; AB=6; BC=9; AD=3 bo'lsa, DC = x ni toping.",
    "variantlar": [4, 4.5, 5, 5.5],
    "javob": 4.5
  },
  {
    "savol": "BD-bissektrisa; AB=3; BC=4; x = ? (x - AD yoki DC)",
    "variantlar": ["3/4", "4/3", "3/7", "4/7"],
    "javob": "3/4"
  },
  {
    "savol": "BD-bissektrisa; CD=12; BC:AB=2 bo'lsa, AD = x ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 6
  },
  {
    "savol": "BD-bissektrisa; AB=12; BC=16; AC=14 bo'lsa, AD va DC ni toping.",
    "variantlar": ["AD=6, DC=8", "AD=8, DC=6", "AD=7, DC=7", "AD=5, DC=9"],
    "javob": "AD=6, DC=8"
  },
  {
    "savol": "BD-bissektrisa; P(ABC)=39; AB=10; BC=16 bo'lsa, DC = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 8
  },
  {
    "savol": "BD-bissektrisa; BC=3; BA=12 bo'lsa, DA = x ni toping.",
    "variantlar": [9, 10, 11, 12],
    "javob": 12
  },
  {
    "savol": "∠ABC = 90°; AD-bissektrisa; BD=3; DC=1 bo'lsa, AC = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "∠ABC = 90°; AD-bissektrisa; BD=5; DC=13 bo'lsa, AC = x ni toping.",
    "variantlar": [15, 16, 17, 18],
    "javob": 17
  },
  {
    "savol": "∠ABC = 90°; AD-bissektrisa; BD=8; DC=17 bo'lsa, AC = x ni toping.",
    "variantlar": [20, 21, 22, 23],
    "javob": 23
  },
  {
    "savol": "∠ABC = 90°; AD-bissektrisa; BD=6; AB=BC bo'lsa, DC = x ni toping.",
    "variantlar": ["6√2", "6", "12", "12√2"],
    "javob": "6√2"
  },
  {
    "savol": "∠ABC = 90°; AD-bissektrisa; BD=8; AB=BC bo'lsa, DC = x ni toping.",
    "variantlar": ["8√2", "8", "16", "16√2"],
    "javob": "8√2"
  },
  {
    "savol": "Uchburchakning bissektrisasi o'zi tushgan tomonini 4 va 5 kesmalarga ajratadi. Agar uchburchakning kichik tomoni 8 ga teng bo'lsa, katta tomoni uzunligini toping.",
    "variantlar": [8, 10, 12, 14],
    "javob": 10
  },
  {
    "savol": "Uchburchakning 4 va 8 ga teng tomonlari orasidagi burchak bissektrisasi uchinchi tomondan ayirmasi 3 ga teng kesmalar ajratdi. Uchburchak perimetrini toping.",
    "variantlar": [18, 21, 24, 27],
    "javob": 24
  },
  {
    "savol": "ABC uchburchakning AC asosiga BD bissektrisasi tushirildi. AB=6, BC=9 bo'lsa, AD:DC nisbatini toping.",
    "variantlar": ["2:3", "3:2", "2:5", "5:2"],
    "javob": "2:3"
  },
  {
    "savol": "ABC uchburchakning AC asosiga BD bissektrisasi tushirildi. AB=8, AD=6, BC=16 bo'lsa, CD kesma uzunligini toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 12
  },
  {
    "savol": "ABC uchburchakda AB tomon BC tomondan 2 marta uzun va AC=15. B uchidan BD bissektrisasi tushirildi. AD kesma uzunligini toping.",
    "variantlar": [5, 6, 8, 10],
    "javob": 10
  },
  {
    "savol": "ABC uchburchakda AB tomon BC tomondan 4 ga uzun. B uchidan BD bissektrisasi tushirilgan bo'lib, AD=8 va CD=6 bo'lsa, ABC uchburchak perimetrini toping.",
    "variantlar": [40, 42, 44, 46],
    "javob": 44
  },
  {
    "savol": "To'g'ri burchakli uchburchakning bir o'tkir burchagi uchidan tushirilgan bissektrisasi ikkinchi katetni to'g'ri burchak uchidan boshlab hisoblaganda 5 va 13 kesmalarga ajratsa, berilgan uchburchakning perimetrini toping.",
    "variantlar": [30, 40, 50, 60],
    "javob": 50
  },
  {
    "savol": "AD-bissektrisa; BA=6; AC=8; BC=7 bo'lsa, AD = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "AD-bissektrisa; BA=8; AC=12; BC=15 bo'lsa, AD = x ni toping.",
    "variantlar": [9, 10, 11, 12],
    "javob": 10
  },
  {
    "savol": "AD-bissektrisa; BA=9; AC=12; BD=14 bo'lsa, AD = x ni toping.",
    "variantlar": [15, 16, 17, 18],
    "javob": 17
  },
  {
    "savol": "AL-bissektrisa; BA=10; AC=8; BC=12 bo'lsa, AL = x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "AD-bissektrisa; BA=8; BD=6; AC=12 bo'lsa, AD = x ni toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "AD-bissektrisa; AB=8; AC=12 bo'lsa, BD/DC nisbatini toping.",
    "variantlar": ["2/3", "3/2", "2/5", "3/5"],
    "javob": "2/3"
  },
  {
    "savol": "AD-bissektrisa; BA=12; BD=9; AC=14 bo'lsa, AD = x ni toping.",
    "variantlar": [15, 16, 17, 18],
    "javob": 16
  },
  {
    "savol": "CL-bissektrisa; ∠ACL=45°; AC=6; BC=12 bo'lsa, CL = x ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "AL-bissektrisa; ∠BAL=60°; AB=4; AC=12 bo'lsa, AL = x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "AL-bissektrisa; ∠CAL=60°; AB=6; AC=12 bo'lsa, AL = x ni toping.",
    "variantlar": ["4√3", "6√3", "8√3", "12√3"],
    "javob": "4√3"
  },
  {
    "savol": "AD-bissektrisa; ∠CAD=30°; AB=8; AC=12 bo'lsa, AD = x ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 10
  },
  {
    "savol": "AD-bissektrisa; ∠BAD=30°; AB=6; AC=9 bo'lsa, AD = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "AL-bissektrisa; AB=6; AC=12; AL=BL bo'lsa, AL = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "AL-bissektrisa; LC=AL; AB=10; AC=15 bo'lsa, AL = x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "AL-bissektrisa; AB=AL; BL=4; LC=6 bo'lsa, AL = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "Teng yonli uchburchakning asosi 16 ga, yon tomoni esa 10 ga teng bo'lsa, asosiga tushirilgan bissektrisa uzunligini toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "Uchburchakning ikki tomoni 4 va 6 ga teng. Uchinchi tomoniga tushirilgan bissektrisasi shu tomonni 2 va 3 kesmalarga ajratadi. Shu bissektrisa uzunligini toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "ABC uchburchakda AB=6, BC=4 va ∠ABC=120° bo'lsa, B uchidan tushirilgan bissektrisa uzunligini toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  }
],








theme9: [
  {
    "savol": "CD-mediana, AB=20, BD=6 bo'lsa, x ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 10
  },
  {
    "savol": "G-og'irlik markazi, BD=15 bo'lsa, x ni toping.",
    "variantlar": [5, 10, 15, 20],
    "javob": 10
  },
  {
    "savol": "G-og'irlik markazi, GD=4 bo'lsa, AG ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "G-og'irlik markazi, AG=12 bo'lsa, GD ni toping.",
    "variantlar": [4, 5, 6, 8],
    "javob": 6
  },
  {
    "savol": "G-og'irlik markazi, AD=12 bo'lsa, AG ni toping.",
    "variantlar": [4, 6, 8, 10],
    "javob": 8
  },
  {
    "savol": "G-og'irlik markazi, AG ⟂ CG, AG=6, CG=8 bo'lsa, AC ni toping.",
    "variantlar": [10, 12, 14, 16],
    "javob": 10
  },
  {
    "savol": "G-og'irlik markazi, AG ⟂ CG, AG=4, CG=3 bo'lsa, BG ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "G-og'irlik markazi, ∠ACG = ∠GCD, CG=10, AB=24 bo'lsa, AC ni toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "G-og'irlik markazi, ∠ACG = ∠GCB, BC=30, AB=36 bo'lsa, CG ni toping.",
    "variantlar": [10, 12, 15, 18],
    "javob": 15
  },
  {
    "savol": "G-og'irlik markazi, ∠ACG = ∠GCB, BC=25, AB=40 bo'lsa, CG ni toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "G-og'irlik markazi, AE-balandlik, CE=15, GE=8 bo'lsa, GD ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 7
  },
  {
    "savol": "G-og'irlik markazi, AE-balandlik, CG=15, BE=10 bo'lsa, AG ni toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "G-og'irlik markazi, AG ⟂ CG, AC=20 bo'lsa, BG ni toping.",
    "variantlar": [10, 12, 15, 20],
    "javob": 15
  },
  {
    "savol": "G-og'irlik markazi, AG ⟂ CG, AG=6, AC=10 bo'lsa, BG ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "G-og'irlik markazi, DC ni toping. (Rasmda BC=20, BD=6)",
    "variantlar": [10, 12, 14, 16],
    "javob": 14
  },
  {
    "savol": "ABC uchburchakning AD, BE va CF medianalari o'tkazildi. AE=4, CD=5 va BF=6 bo'lsa, ABC uchburchakning perimetrini toping.",
    "variantlar": [20, 25, 30, 35],
    "javob": 30
  },
  {
    "savol": "ABC uchburchakning A uchidan AD mediana tushirildi. G-medianalar kesishgan nuqta va GD=4 bo'lsa, AG ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "Teng yonli uchburchakning AC asosi 24 ga, AB yon tomoni esa 15 ga teng. Uchburchakning B uchidan medianalar kesishgan nuqtasigacha bo'lgan masofani toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 10
  },
  {
    "savol": "ABC uchburchakning B uchidan AC asosiga BD mediana tushirildi. AC=12 bo'lsa, CD ni toping.",
    "variantlar": [4, 6, 8, 10],
    "javob": 6
  },
  {
    "savol": "To'g'ri burchakli uchburchakning gipotenuzasi 24 ga teng bo'lsa, to'g'ri burchak uchidan medianalar kesishgan nuqtasigacha bo'lgan masofani toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "ABC uchburchakda AB=12, BC=10. Uchburchakning AD va CE medianalari o'tkazildi. BE - BD ni toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "To'g'ri burchakli uchburchakning to'g'ri burchak uchidan medianalar kesishgan nuqtasigacha masofa 12 ga teng. Uchburchak gipotenuzasi uzunligini toping.",
    "variantlar": [24, 30, 36, 48],
    "javob": 36
  },
  {
    "savol": "Muntazam uchburchakning tomoni 6√3 ga teng bo'lsa, bir uchidan chiqqan medianasi uzunligini toping.",
    "variantlar": [6, 8, 9, 12],
    "javob": 9
  },
  {
    "savol": "Uchburchakning og'irlik markazidan uchlarigacha bo'lgan masofalar mos ravishda 6,7 va 8 ga teng. Uchburchak medianalari yig'indisini toping.",
    "variantlar": [21, 24, 27, 30],
    "javob": 27
  },
  {
    "savol": "ABC uchburchakning AD va BE medianalari o'zaro to'g'ri burchak tashkil etadi va G nuqtada kesishadi. AD=12, BE=18 bo'lsa, CG kesma uzunligini toping.",
    "variantlar": [10, 12, 14, 16],
    "javob": 14
  },
  {
    "savol": "AD-mediana, AC=6, BC=8, AB=10 bo'lsa, AD ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "AD-mediana, AC=8, BC=10 bo'lsa, AD ni toping. (AB=12)",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "AD-mediana, AC=7, BC=12, AB=8 bo'lsa, AD ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "CD-mediana, AC=5, BC=4, CD=3 bo'lsa, AB ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "CD-mediana, AC=8, CB=10, CD=3√2 bo'lsa, AB ni toping.",
    "variantlar": [10, 12, 14, 16],
    "javob": 14
  },
  {
    "savol": "G-og'irlik markazi, AB=12, AC=16, AG=6 bo'lsa, BD ni toping.",
    "variantlar": [10, 12, 14, 16],
    "javob": 12
  },
  {
    "savol": "G-og'irlik markazi, AC=10, AB=14, GE=3 bo'lsa, CE ni toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "G-og'irlik markazi, GE=4, GB=16, GD=5 bo'lsa, CF ni toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 14
  },
  {
    "savol": "G-og'irlik markazi, AG=16, CG=18, AC=20 bo'lsa, BG ni toping.",
    "variantlar": [14, 16, 18, 20],
    "javob": 16
  },
  {
    "savol": "G-og'irlik markazi, AG=10, BG=12, AC=14 bo'lsa, CG ni toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 14
  },
  {
    "savol": "G-og'irlik markazi, GE=3, DG=4 bo'lsa, AG ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "G-og'irlik markazi, GD=5, BC=20 bo'lsa, EG ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "G-og'irlik markazi, AG ⟂ CG, AC=10, BD=20 bo'lsa, BG ni toping.",
    "variantlar": [10, 12, 14, 16],
    "javob": 14
  }
],






theme10: [
  {
    "savol": "△ABC ∼ △MNK, ∠A=64°, ∠B=72° bo'lsa, ∠MKN = γ ni toping.",
    "variantlar": [44, 64, 72, 84],
    "javob": 44
  },
  {
    "savol": "△ABC ∼ △MNK, ∠M=84°, ∠N=48° bo'lsa, ∠ABC = β ni toping.",
    "variantlar": [48, 64, 72, 84],
    "javob": 48
  },
  {
    "savol": "Uchburchaklar o'xshashligini yozing. (∠A=64°, ∠B=32°, ∠M=84°, ∠N=32°)",
    "variantlar": ["ABC ∼ MNK", "ABC ∼ NKM", "ABC ∼ KMN", "ABC ∼ NKM"],
    "javob": "ABC ∼ NKM"
  },
  {
    "savol": "Uchburchaklar o'xshashligini yozing. (∠A=64°, ∠B=84°, ∠M=64°, ∠N=32°)",
    "variantlar": ["ABC ∼ MNK", "ABC ∼ NKM", "ABC ∼ KMN", "ABC ∼ NKM"],
    "javob": "ABC ∼ KMN"
  },
  {
    "savol": "△ABC ∼ △MNK, AB=10, BC=15, AC=12, MN=5 bo'lsa, x+y ni toping. (NK=x, MK=y)",
    "variantlar": [13.5, 14.5, 15.5, 16.5],
    "javob": 13.5
  },
  {
    "savol": "△ABC ∼ △MNK, AB=15, BC=20, AC=18, NK=12 bo'lsa, x - y ni toping. (MK=x, MN=y)",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  },
  {
    "savol": "△ABC ∼ △MNK, AB=12, BC=18, AC=14, MK=7 bo'lsa, y + x ni toping. (MN=x, NK=y)",
    "variantlar": [15, 16, 17, 18],
    "javob": 17
  },
  {
    "savol": "DE ∥ BC, AD=6, AE=5, BD=9 bo'lsa, EC = x ni toping.",
    "variantlar": [6.5, 7, 7.5, 8],
    "javob": 7.5
  },
  {
    "savol": "DE ∥ BC, AE=4, BD=6, EC=8 bo'lsa, AD = x ni toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 3
  },
  {
    "savol": "DE ∥ BC, AC:AB=2:1, DE=12 bo'lsa, BC ni toping.",
    "variantlar": [18, 20, 22, 24],
    "javob": 24
  },
  {
    "savol": "DE ∥ BC, AD:BD=2:1, BC=18 bo'lsa, DE = x ni toping.",
    "variantlar": [8, 10, 12, 14],
    "javob": 12
  },
  {
    "savol": "DE ∥ BC, BC=20, AD=3BD bo'lsa, DE = x ni toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 15
  },
  {
    "savol": "DE ∥ BC, DE=16, BC=20 bo'lsa, AD:DB nisbatini toping.",
    "variantlar": ["3:1", "4:1", "3:2", "4:3"],
    "javob": "4:1"
  },
  {
    "savol": "CD ∥ AB, AB=18, EB=6, CE=3 bo'lsa, CD ni toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 9
  },
  {
    "savol": "DE ∥ BC, AD=18, BD=9, CE=7 bo'lsa, AE = x ni toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 14
  },
  {
    "savol": "CD ∥ AB, CD=8, AB=20, OB=10 bo'lsa, CO = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 4
  },
  {
    "savol": "CD ∥ AB, 3OD=OA, AB+CD=32 bo'lsa, CD = x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "CD ∥ AB, CD=6, AB=12, AD=18 bo'lsa, DO = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "O'xshash uchburchaklarning mos tomonlari nisbati 2 ga teng. Kichik uchburchak perimetri 10 bo'lsa, katta uchburchak perimetrini toping.",
    "variantlar": [15, 18, 20, 25],
    "javob": 20
  },
  {
    "savol": "Perimetrlari nisbati 3:4 bo'lgan o'xshash uchburchaklarning mos tomonlari farqi 9 ga teng. Kichik uchburchakning shu tomonini toping.",
    "variantlar": [18, 21, 24, 27],
    "javob": 27
  },
  {
    "savol": "CD ∥ AB, CD=12, AB=18, BC=25 bo'lsa, BO = x ni toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 15
  },
  {
    "savol": "O'xshash uchburchaklarning eng katta medianalari nisbati 3:4 ga teng. Uchburchaklar perimetrlari yig'indisi 63 bo'lsa, kichik uchburchak perimetrini toping.",
    "variantlar": [21, 24, 27, 30],
    "javob": 27
  },
  {
    "savol": "CD ∥ AB, 2AO=5DO, AB+CD=35 bo'lsa, CD = x ni toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 10
  },
  {
    "savol": "O'xshash uchburchaklarning perimetrlari 24 va 36 ga teng. Kichik bisektrisalari yig'indisi 15 bo'lsa, bu bisektrisalar uzunligini toping.",
    "variantlar": ["6 va 9", "5 va 10", "4 va 11", "7 va 8"],
    "javob": "6 va 9"
  },
  {
    "savol": "DE ∥ BC, AD=2, BD=4, DE=3 bo'lsa, BC ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 9
  },
  {
    "savol": "Ikkita o'xshash uchburchaklarning tomonlari nisbati 3 ga teng. Kichik uchburchak perimetri 30 ga kichik bo'lsa, katta uchburchak perimetrini toping.",
    "variantlar": [35, 40, 45, 50],
    "javob": 45
  },
  {
    "savol": "DE ∥ BC, AD=4, BD=6, AE=8 bo'lsa, AC ni toping.",
    "variantlar": [16, 18, 20, 22],
    "javob": 20
  },
  {
    "savol": "∠BAD = ∠BCD, BE=8, DE=6, DC=9 bo'lsa, AB = x ni toping.",
    "variantlar": [10, 11, 12, 13],
    "javob": 12
  },
  {
    "savol": "DE ∥ BC, AD=5, DE=4, BC=12 bo'lsa, AB ni toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 15
  },
  {
    "savol": "AB va CD kesmalar O nuqtada kesishadi. AC ∥ BD, AO=3, BO=4, CO=6 bo'lsa, CD ni toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 14
  },
  {
    "savol": "∠BAD = ∠BCD, AB=12, EB=6, ED=10 bo'lsa, CD = x ni toping.",
    "variantlar": [18, 20, 22, 24],
    "javob": 20
  },
  {
    "savol": "∠BAD = ∠BCD, BE=9, EC=21, AE=14 bo'lsa, ED = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "∠AED = ∠ABC, AE=8, AD=12, BD=4 bo'lsa, EC = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "DE ∥ FG ∥ BC, AD:DF:FB = 1:2:3, EG=2 bo'lsa, y - x ni toping. (AE=x, GC=y)",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "AB ∥ CD ∥ EF, AC=4, BD=5, EC=6 bo'lsa, DF = x ni toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 7.5
  },
  {
    "savol": "AB ∥ CD ∥ EF, AC=4, DF=9, BD=CE=x bo'lsa, x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  }
],






theme11: [
  {
    "savol": "ABCD to'rtburchakda ∠ABC=100°, ∠BCD=110°, ∠CDA=80° bo'lsa, ∠BAD = α ni toping.",
    "variantlar": [60, 65, 70, 75],
    "javob": 70
  },
  {
    "savol": "ABCD to'rtburchakda ∠BAD = x+20°, ∠ADC = 80°, ∠DCB = 100°, ∠CBA = 3x bo'lsa, x ni toping.",
    "variantlar": [35, 40, 45, 50],
    "javob": 40
  },
  {
    "savol": "To'rtburchakda ∠FAB = 110°, ∠BCE = 50°, ∠CDA = 80° bo'lsa, ∠ABC = α ni toping.",
    "variantlar": [80, 90, 100, 110],
    "javob": 100
  },
  {
    "savol": "To'rtburchakda ∠FAB = 120°, ∠BCE = 70°, ∠ABC = 4x, ∠CDA = x+20° bo'lsa, x ni toping.",
    "variantlar": [15, 18, 20, 22],
    "javob": 20
  },
  {
    "savol": "BG va AG bissektrisa, ∠AGB = 80°, ∠BCD = 120° bo'lsa, ∠ADC = x ni toping.",
    "variantlar": [70, 75, 80, 85],
    "javob": 80
  },
  {
    "savol": "CE va BE bissektrisa, AD ⟂ AB, ∠ADC = 60° bo'lsa, ∠CEB = x ni toping.",
    "variantlar": [120, 125, 130, 135],
    "javob": 135
  },
  {
    "savol": "CE va BE bissektrisa, AD ⟂ AB, ∠CEB = 80° bo'lsa, ∠ADC = x ni toping.",
    "variantlar": [30, 35, 40, 45],
    "javob": 40
  },
  {
    "savol": "To'rtburchakda ∠BAD = 80°, ∠BCD = 60°, BC = CD = DA bo'lsa, ∠CDA = x ni toping.",
    "variantlar": [110, 115, 120, 125],
    "javob": 120
  },
  {
    "savol": "To'rtburchakda ∠BCD = 60°, ∠CDA = 100°, BC = CD = DA bo'lsa, ∠BAD = x ni toping.",
    "variantlar": [80, 85, 90, 95],
    "javob": 90
  },
  {
    "savol": "AE=4, EB=6, ED=3, EC=7, ∠BEC=60° bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": [15, 18, 21, 24],
    "javob": 21
  },
  {
    "savol": "AE=4, EB=8, ED=5, EC=6, BC=10 bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": [45, 50, 55, 60],
    "javob": 55
  },
  {
    "savol": "AE=4, EB=6, ED=4, EC=8, ∠BEC=45° bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": ["16√2", "20√2", "24√2", "28√2"],
    "javob": "24√2"
  },
  {
    "savol": "AE=4, EB=8, ED=6, EC=6, DC=6 bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": [42, 44, 46, 48],
    "javob": 48
  },
  {
    "savol": "AB=12, CD=10, AB ⟂ CD bo'lsa, ACBD to'rtburchak yuzini toping.",
    "variantlar": [60, 120, 240, 480],
    "javob": 60
  },
  {
    "savol": "AB=12, AB ⟂ CD, SACBD = 90 bo'lsa, CD ni toping.",
    "variantlar": [15, 18, 20, 24],
    "javob": 15
  },
  {
    "savol": "AD=12, DC=15, CB=15, AB=16, AB ⟂ AD bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": [180, 200, 220, 240],
    "javob": 220
  },
  {
    "savol": "AD=8, DC=4√2, AB=8, AB ⟂ AD, ∠ADC=135° bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": [48, 52, 56, 60],
    "javob": 56
  },
  {
    "savol": "AD=10, DC=6√2, AB=10, AB ⟂ AD, ∠ADC=135° bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": [80, 90, 100, 110],
    "javob": 100
  },
  {
    "savol": "AD=6, DC=4, AB=8, AB ⟂ AD, DC ⟂ CB bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": [40, 44, 48, 52],
    "javob": 44
  },
  {
    "savol": "AD=12, DC=10, AB=16, DC ⟂ CB bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": [140, 160, 180, 200],
    "javob": 180
  },
  {
    "savol": "AD=6, DC=10, ∠ADC=60°, ∠DCB=60°, AD ⟂ AB bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": ["48√3", "52√3", "56√3", "60√3"],
    "javob": "48√3"
  },
  {
    "savol": "AD=8, DC=12, ∠ADC=60°, ∠DCB=60°, AD ⟂ AB bo'lsa, ABCD to'rtburchak yuzini toping.",
    "variantlar": ["72√3", "80√3", "88√3", "96√3"],
    "javob": "88√3"
  },
  {
    "savol": "E, F, G, H - mos tomonlar o'rtalari. PEFGH = 30 bo'lsa, AC + BD ni toping.",
    "variantlar": [15, 20, 25, 30],
    "javob": 30
  },
  {
    "savol": "To'rtburchakning diagonallari 18 va 24 ga teng. To'rtburchak tomonlari o'rtalarini ketma-ket tutashtirishdan hosil bo'lgan shakl perimetrini toping.",
    "variantlar": [42, 48, 54, 60],
    "javob": 42
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda DE = 2x+3, EC = 3x-2 bo'lsa, x ni toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda DE = 3x+4, EC = 4x-5 bo'lsa, x ni toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda ∠EDC = 35° bo'lsa, ∠CEB = x ni toping.",
    "variantlar": [55, 60, 65, 70],
    "javob": 55
  },
  {
    "savol": "To'rtburchakning bir burchagi to'g'ri burchak bo'lib, qolgan burchaklari 1:2:3 nisbatda. To'rtburchakning eng katta burchagini toping.",
    "variantlar": [120, 135, 150, 165],
    "javob": 150
  },
  {
    "savol": "To'rtburchakning diagonallari 15 va 12 ga teng bo'lib, to'g'ri burchak ostida kesishadi. To'rtburchak yuzini toping.",
    "variantlar": [90, 180, 270, 360],
    "javob": 90
  },
  {
    "savol": "To'rtburchakning diagonallari 3√3 va 4 ga teng bo'lib, ular o'zaro 60° li burchak tashkil etadi. To'rtburchak yuzini toping.",
    "variantlar": [6, 9, 12, 15],
    "javob": 9
  },
  {
    "savol": "ABCD to'rtburchakda ∠BAD = 90°, AB=12, BC=14, CD=15, AD=5 bo'lsa, to'rtburchak yuzini toping.",
    "variantlar": [84, 96, 108, 120],
    "javob": 108
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda ∠CEB = 60° bo'lsa, ∠EDC = x ni toping.",
    "variantlar": [30, 35, 40, 45],
    "javob": 30
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda DC = x+4, CB = x+2, SABCD = 48 bo'lsa, x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 4
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda ∠CEB = 45°, EC = 6 bo'lsa, SABCD ni toping.",
    "variantlar": [36, 48, 54, 72],
    "javob": 54
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda ∠CEB = 60°, EC = 8 bo'lsa, SABCD ni toping.",
    "variantlar": ["32√3", "36√3", "48√3", "56√3"],
    "javob": "32√3"
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda DC = x+4, CB = 2x, PABCD = 44 bo'lsa, SABCD ni toping.",
    "variantlar": [90, 100, 110, 120],
    "javob": 100
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda AE = 25, EC = 15 bo'lsa, SABCD ni toping.",
    "variantlar": [300, 400, 500, 600],
    "javob": 500
  },
  {
    "savol": "ABCD to'g'ri to'rtburchakda AD = 15, EB = 8, ∠ADE = ∠EDC bo'lsa, SABCD ni toping.",
    "variantlar": [180, 200, 220, 240],
    "javob": 200
  }
],








theme13: [
  {
    "savol": "ABCD parallelogrammda ∠BAD = x, ∠ABC = 2x bo'lsa, x ni toping.",
    "variantlar": [30, 45, 60, 90],
    "javob": 60
  },
  {
    "savol": "ABCD parallelogrammda ∠BAD = x, ∠ABC = 3x bo'lsa, x ni toping.",
    "variantlar": [35, 40, 45, 50],
    "javob": 45
  },
  {
    "savol": "ABCD parallelogrammda ∠BAD = x, ∠ABC = β, ∠BCD = 80° - x bo'lsa, β ni toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 100
  },
  {
    "savol": "ABCD parallelogrammda ∠BAD = x, ∠ABC = β, ∠BCD = 96° - x bo'lsa, β ni toping.",
    "variantlar": [84, 86, 88, 90],
    "javob": 84
  },
  {
    "savol": "ABCD parallelogrammda BE ⟂ AD, ∠ABE = 42° bo'lsa, ∠BCD = x ni toping.",
    "variantlar": [42, 48, 52, 58],
    "javob": 48
  },
  {
    "savol": "ABCD parallelogrammda BE ⟂ DC, ∠CBE = 36° bo'lsa, ∠BAD = x ni toping.",
    "variantlar": [36, 42, 48, 54],
    "javob": 54
  },
  {
    "savol": "ABCD parallelogrammda BE ⟂ DC, BF ⟂ AD, ∠BCD = 54° bo'lsa, ∠FBE = x ni toping.",
    "variantlar": [36, 42, 48, 54],
    "javob": 54
  },
  {
    "savol": "ABCD parallelogrammda BE ⟂ DC, BF ⟂ AD, ∠BCD = 42° bo'lsa, ∠FBE = x ni toping.",
    "variantlar": [42, 48, 52, 58],
    "javob": 42
  },
  {
    "savol": "ABCD parallelogrammda AE bissektrisa, ∠AEC = 146° bo'lsa, ∠ADC = x ni toping.",
    "variantlar": [68, 72, 76, 80],
    "javob": 72
  },
  {
    "savol": "ABCD parallelogrammda BE = DC, ∠ADC = 110° bo'lsa, ∠ABE = x ni toping.",
    "variantlar": [20, 25, 30, 35],
    "javob": 30
  },
  {
    "savol": "ABCD parallelogrammda DE bissektrisa, ∠BCD = 70° bo'lsa, ∠BED = x ni toping.",
    "variantlar": [115, 120, 125, 130],
    "javob": 125
  },
  {
    "savol": "ABCD parallelogrammda BE = DC, ∠ADC = 95° bo'lsa, ∠ABE = x ni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "ABCD parallelogrammda BE = DC, ∠ABE = 42° bo'lsa, ∠ADC = x ni toping.",
    "variantlar": [84, 86, 88, 90],
    "javob": 84
  },
  {
    "savol": "ABCD parallelogrammda AB = OC, ∠AOB = 75° bo'lsa, ∠BAO = x ni toping.",
    "variantlar": [30, 35, 40, 45],
    "javob": 40
  },
  {
    "savol": "ABCD parallelogrammda BE = DC, ∠BCD = 48° bo'lsa, ∠ABE = x ni toping.",
    "variantlar": [42, 44, 46, 48],
    "javob": 46
  },
  {
    "savol": "ABCD parallelogrammda AO = DC, ∠ABD = 78° bo'lsa, ∠ACD = x ni toping.",
    "variantlar": [42, 44, 46, 48],
    "javob": 44
  },
  {
    "savol": "ABCD parallelogrammda AE va DE bissektrisalar bo'lsa, ∠AED ni toping.",
    "variantlar": [45, 60, 90, 120],
    "javob": 90
  },
  {
    "savol": "ABCD parallelogrammda ∠BAE = 2α, ∠EAD = α, ∠CDE = 2β, ∠EDA = β bo'lsa, ∠AED = x ni toping.",
    "variantlar": [90, 100, 110, 120],
    "javob": 90
  },
  {
    "savol": "ABCD parallelogrammda AB = 6, AD = 9 bo'lsa, P(ABCD) ni toping.",
    "variantlar": [15, 30, 45, 60],
    "javob": 30
  },
  {
    "savol": "ABCD parallelogrammda AB = 7, AD = 12 bo'lsa, P(ABCD) ni toping.",
    "variantlar": [19, 38, 57, 76],
    "javob": 38
  },
  {
    "savol": "ABCD parallelogrammda AB = x-1, AD = x+3, P(ABCD) = 48 bo'lsa, x ni toping.",
    "variantlar": [9, 10, 11, 12],
    "javob": 11
  },
  {
    "savol": "ABCD parallelogrammda AB = x, AD = 5x, P(ABCD) = 120 bo'lsa, x ni toping.",
    "variantlar": [5, 8, 10, 12],
    "javob": 10
  },
  {
    "savol": "ABCD parallelogrammda AE bissektrisa, BE = 7, EC = 3 bo'lsa, P(ABCD) ni toping.",
    "variantlar": [20, 24, 28, 32],
    "javob": 24
  },
  {
    "savol": "ABCD parallelogrammda AE va DF bissektrisalar, AB = 5, AD = 12 bo'lsa, EF = x ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "ABCD parallelogrammda AE va DF bissektrisalar, AB = 6, AD = 8 bo'lsa, FE = x ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "ABCD parallelogrammda ∠ABE = 90°, BE = 15, DE = 4, EC = 8 bo'lsa, P(ABCD) ni toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 60
  },
  {
    "savol": "ABCD parallelogrammda ∠ABE = 90°, BE = 12, DE = 7, EC = 5 bo'lsa, P(ABCD) ni toping.",
    "variantlar": [48, 50, 52, 54],
    "javob": 50
  },
  {
    "savol": "ABCD parallelogrammda BE ⟂ AD, ∠BCD = 60°, DC = 6 bo'lsa, BE = x ni toping.",
    "variantlar": ["3√3", "4√3", "5√3", "6√3"],
    "javob": "3√3"
  },
  {
    "savol": "ABCD parallelogrammda BE ⟂ DC, ∠ADC = 135°, AD = 8√2 bo'lsa, BE = x ni toping.",
    "variantlar": [4, 6, 8, 10],
    "javob": 8
  },
  {
    "savol": "ABCD parallelogrammda BE ⟂ AC, DF ⟂ AC, DF = 3, DC = 5 bo'lsa, AE = x ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "ABCD parallelogrammda BE ⟂ AC, DF ⟂ AC, FC = 6, AF = 9 bo'lsa, EF = x ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "ABCD parallelogrammda AB = 4, BO = 3, AO = 4 bo'lsa, AD = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "ABCD parallelogrammda AD = 7, OD = 4, AO = 6 bo'lsa, AB = x ni toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 9
  },
  {
    "savol": "ABCD parallelogrammda AB = 8, AD = 10, OD = 6 bo'lsa, AO = x ni toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "Parallelogrammning balandligi uning tomoni bilan 20° li burchak tashkil etsa, parallelogrammning kichik burchagini toping.",
    "variantlar": [20, 30, 40, 50],
    "javob": 20
  },
  {
    "savol": "Parallelogrammning burchaklaridan ikkinchisidan 40° ga kichik bo'lsa, uning katta burchagini toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 110
  },
  {
    "savol": "ABCD parallelogrammning BD diagonali ABC burchakni 45° va 60° li burchaklarga bo'lsa, parallelogramm tomonlari nisbatini toping.",
    "variantlar": ["√2:1", "√3:1", "2:1", "3:1"],
    "javob": "√3:1"
  },
  {
    "savol": "Tomonlari 14 va 5 ga teng parallelogrammning katta tomoniga yopishgan burchaklar bissektrisalari bu tomonni uch qismga ajratadi. Bu qismlardan kichigining uzunligini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "ABCD parallelogrammning AD tomoni 18 ga teng bo'lib, A va D uchlaridan chiqarilgan bissektrisalari BC tomonida kesishadi. AB tomoni uzunligini toping.",
    "variantlar": [6, 9, 12, 15],
    "javob": 9
  }
],





theme14: [
  {
    "savol": "ABCD rombda ∠BAD = 50° bo'lsa, ∠ABC = x ni toping.",
    "variantlar": [120, 125, 130, 135],
    "javob": 130
  },
  {
    "savol": "ABCD rombda ∠ABC = 3x, ∠BAD = 2x bo'lsa, x ni toping.",
    "variantlar": [30, 36, 40, 45],
    "javob": 36
  },
  {
    "savol": "ABCD rombda ∠ABC = x + 60°, ∠BAD = x bo'lsa, x ni toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 60
  },
  {
    "savol": "ABCD rombda ∠BAD = 50° bo'lsa, ∠BCD = x ni toping.",
    "variantlar": [50, 60, 70, 80],
    "javob": 50
  },
  {
    "savol": "ABCD rombda ∠BAD = 120° - x, ∠BCD = 120° - x bo'lsa, x ni toping.",
    "variantlar": [20, 30, 40, 50],
    "javob": 40
  },
  {
    "savol": "ABCD rombda ∠BAD = 48° bo'lsa, ∠BCA = ?",
    "variantlar": [24, 48, 66, 132],
    "javob": 66
  },
  {
    "savol": "ABCD rombda ∠CAD = 20° bo'lsa, ∠BAC = x ni toping.",
    "variantlar": [20, 30, 40, 50],
    "javob": 20
  },
  {
    "savol": "ABCD rombda ∠CAD = 40° bo'lsa, ∠ACD = x ni toping.",
    "variantlar": [40, 50, 60, 70],
    "javob": 50
  },
  {
    "savol": "ABCD rombda ∠CAD = 30° bo'lsa, ∠BDA = x ni toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 60
  },
  {
    "savol": "ABCD rombda ∠CAD = x, ∠BDA = x + 40° bo'lsa, x ni toping.",
    "variantlar": [40, 45, 50, 55],
    "javob": 50
  },
  {
    "savol": "ABCD rombda ∠CAD = 25° bo'lsa, ∠DBC = x ni toping.",
    "variantlar": [25, 30, 35, 40],
    "javob": 40
  },
  {
    "savol": "ABCD rombda AB = 6, ∠BAD = 60°, BF ⟂ DC bo'lsa, BF = x ni toping.",
    "variantlar": ["3√3", "4√3", "5√3", "6√3"],
    "javob": "3√3"
  },
  {
    "savol": "ABCD rombda AB = 8, ∠BAD = 45°, BF ⟂ DC bo'lsa, BF = x ni toping.",
    "variantlar": ["4√2", "5√2", "6√2", "8√2"],
    "javob": "4√2"
  },
  {
    "savol": "ABCD rombda AB = 6√2, BF = 6, BF ⟂ DC bo'lsa, ∠BAD = x ni toping.",
    "variantlar": [30, 45, 60, 90],
    "javob": 45
  },
  {
    "savol": "ABCD rombda BC = 6, BG ⟂ AD, BG = 3 bo'lsa, ∠BAG = x ni toping.",
    "variantlar": [30, 45, 60, 90],
    "javob": 30
  },
  {
    "savol": "ABCD rombda BE = 6, EC = 10 bo'lsa, AD = x ni toping.",
    "variantlar": [14, 16, 18, 20],
    "javob": 16
  },
  {
    "savol": "ABCD rombda ED = 5, EC = 15 bo'lsa, AB = x ni toping.",
    "variantlar": [10, 12, 14, 16],
    "javob": 14
  },
  {
    "savol": "ABCD rombda AE = 16, AD = 20 bo'lsa, ED = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "ABCD rombda BE = 7, AD = 25 bo'lsa, AE = x ni toping.",
    "variantlar": [15, 16, 17, 18],
    "javob": 17
  },
  {
    "savol": "ABCD rombda AO = 12, OD = 5, AD ⟂ OE bo'lsa, OE = ?",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "ABCD rombda AO = 10, OD = 5, AD ⟂ OE bo'lsa, OE = ?",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "ABCD rombda AD = 20, OD = 12, AD ⟂ OE bo'lsa, OE = ?",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "ABCD rombda ED = 6, BO = 10, AD ⟂ OE bo'lsa, OE = ?",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "ABCD rombda BO = 15, ED = 9, AD ⟂ OE bo'lsa, OE = ?",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "ABCD rombda AH = 10, HD = 16, AD ⟂ BH bo'lsa, BH = x ni toping.",
    "variantlar": [8, 10, 12, 14],
    "javob": 12
  },
  {
    "savol": "Rombning diagonallari 24 va 18 ga teng. Romb perimetrini toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 60
  },
  {
    "savol": "Tomoni va kichik diagonali 12 ga teng bo'lgan rombning katta diagonalini toping.",
    "variantlar": ["12√3", "12√2", "24", "6√3"],
    "javob": "12√3"
  },
  {
    "savol": "Tomoni 8 ga, o'tkir burchagi kosinusi 4/5 ga teng bo'lgan rombning balandligini toping.",
    "variantlar": [4.8, 5.6, 6.4, 7.2],
    "javob": 6.4
  },
  {
    "savol": "Diagonallari 12 va 6 ga teng bo'lgan rombning diagonallari kesishgan nuqtadan tomonlargacha bo'lgan masofani toping.",
    "variantlar": [1.5, 2, 2.5, 3],
    "javob": 2.5
  },
  {
    "savol": "Tomoni 10 ga teng bo'lgan rombning bir diagonali 12 ga teng. Romb diagonallari kesishgan nuqtadan tomonigacha bo'lgan masofani toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  },
  {
    "savol": "ABCD rombning o'tmas burchagi uchidan BH balandlik tushirildi. AH=4 va HD=5 bo'lsa, BH kesma uzunligini toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 9
  },
  {
    "savol": "Romb diagonallarining tomonlari bilan hosil qilgan burchaklari nisbati 5:4 bo'lsa, uning katta burchagini toping.",
    "variantlar": [80, 90, 100, 110],
    "javob": 100
  },
  {
    "savol": "Rombning bir uchidan chiqqan balandliklari orasidagi burchagi 72° ga teng bo'lsa, uning o'tkir burchagini toping.",
    "variantlar": [36, 48, 54, 72],
    "javob": 54
  },
  {
    "savol": "Rombning diagonali uning bir tomoni bilan 20° li burchak tashkil qiladi. Rombning kichik burchagini toping.",
    "variantlar": [30, 35, 40, 45],
    "javob": 40
  },
  {
    "savol": "ABCD rombda BH = 8, DC = 16, AD ⟂ BH bo'lsa, SABCD ni toping.",
    "variantlar": [128, 144, 160, 192],
    "javob": 128
  },
  {
    "savol": "ABCD rombda DC = 10, S = 80, AD ⟂ BH bo'lsa, BH = x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "ABCD rombda AB = x + 3, BH = x, AD ⟂ BH, SABCD = 70 bo'lsa, BH = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "ABCD rombda DE = 18, EC = 8 bo'lsa, BE = x ni toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "DE balandlik, ∠BAD = 60°, DE = 8 bo'lsa, SABCD ni toping.",
    "variantlar": ["64√3/3", "128√3/3", "64√3", "128√3"],
    "javob": "128√3/3"
  },
  {
    "savol": "DE balandlik, ∠BAD = 45°, DE = 6 bo'lsa, SABCD ni toping.",
    "variantlar": [36, 48, 54, 72],
    "javob": 54
  },
  {
    "savol": "ABCD rombda AB = 6, ∠BAD = 60° bo'lsa, SABCD ni toping.",
    "variantlar": ["18√3", "24√3", "30√3", "36√3"],
    "javob": "18√3"
  },
  {
    "savol": "ABCD rombda AB = 8, ∠BAD = 45° bo'lsa, SABCD ni toping.",
    "variantlar": ["32√2", "36√2", "40√2", "48√2"],
    "javob": "32√2"
  }
],






theme17: [
  {
    "savol": "ABCD trapetsiyada ∠BAD = 65° bo'lsa, ∠ABC = x ni toping.",
    "variantlar": [105, 110, 115, 120],
    "javob": 115
  },
  {
    "savol": "ABCD trapetsiyada ∠ABC = 120°, ∠DAB = α, ∠ADC = β bo'lsa, α - β ni toping.",
    "variantlar": [20, 30, 40, 50],
    "javob": 40
  },
  {
    "savol": "ABCD trapetsiyada ∠BAD = 2x - 10°, ∠ABC = 3x + 10° bo'lsa, x ni toping.",
    "variantlar": [32, 34, 36, 38],
    "javob": 36
  },
  {
    "savol": "ABCD trapetsiyada ∠BAD = 2x, ∠ABC = 3x, ∠BCD = 2x + 40° bo'lsa, ∠ADC = α ni toping.",
    "variantlar": [70, 75, 80, 85],
    "javob": 80
  },
  {
    "savol": "ABCD trapetsiyada ∠DAB = x, ∠ABC = 4x bo'lsa, ∠CDA = α ni toping.",
    "variantlar": [110, 120, 130, 140],
    "javob": 130
  },
  {
    "savol": "ABCD trapetsiyada BE va AE bissektrisalar, ∠AEB = 81° bo'lsa, ∠BAD + ∠ABC ni toping.",
    "variantlar": [158, 160, 162, 164],
    "javob": 162
  },
  {
    "savol": "ABCD trapetsiyada AB = BC, AC = AD, ∠ABC = 112° bo'lsa, ∠ADC = x ni toping.",
    "variantlar": [68, 72, 76, 80],
    "javob": 72
  },
  {
    "savol": "ABCD trapetsiyada AB = BC = CD, AC = AD bo'lsa, ∠ADC = x ni toping.",
    "variantlar": [60, 65, 70, 75],
    "javob": 70
  },
  {
    "savol": "ABCD trapetsiyada AB = CD, AC bissektrisa, ∠CAD = 81° bo'lsa, ∠ABC = β ni toping.",
    "variantlar": [98, 102, 106, 110],
    "javob": 102
  },
  {
    "savol": "ABCD trapetsiyada AB = CD, AC bissektrisa, ∠ABC = 114° bo'lsa, ∠ACD = x ni toping.",
    "variantlar": [24, 28, 32, 36],
    "javob": 28
  },
  {
    "savol": "ABCD trapetsiyada CE ⟂ AD, ∠ADC = 45°, CD = 18 bo'lsa, CE = x ni toping.",
    "variantlar": ["9√2", "12√2", "15√2", "18√2"],
    "javob": "9√2"
  },
  {
    "savol": "ABCD trapetsiyada CE ⟂ AD, ∠ADC = 60°, CE = 8 bo'lsa, CD = x ni toping.",
    "variantlar": ["16√3/3", "8√3", "16", "32√3/3"],
    "javob": "16√3/3"
  },
  {
    "savol": "ABCD trapetsiyada ∠BAD = 60°, ∠ADC = 45°, AB = 4√2 bo'lsa, CD = x ni toping.",
    "variantlar": [8, 10, 12, 14],
    "javob": 12
  },
  {
    "savol": "ABCD trapetsiyada ∠BAD = 60°, ∠ADC = 45°, CD = 6√3 bo'lsa, AB = x ni toping.",
    "variantlar": ["6√2", "8√2", "10√2", "12√2"],
    "javob": "6√2"
  },
  {
    "savol": "ABCD trapetsiyada ∠BAD = 60°, ∠ADC = 30°, CD = 12√3 bo'lsa, AB = x ni toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 12
  },
  {
    "savol": "ABCD trapetsiyada ∠BAD = 60°, ∠ADC = 30°, AB = 16 bo'lsa, CD = x ni toping.",
    "variantlar": ["16√3", "18√3", "20√3", "24√3"],
    "javob": "16√3"
  },
  {
    "savol": "ABCD trapetsiyada ∠BAD = 48°, AB = 8, BC = 4, AD = 12 bo'lsa, ∠ADC = x ni toping.",
    "variantlar": [52, 54, 56, 58],
    "javob": 56
  },
  {
    "savol": "ABCD trapetsiyada ∠ADC = 54°, AB = 7, BC = 4, AD = 11 bo'lsa, ∠BAD = x ni toping.",
    "variantlar": [62, 64, 66, 68],
    "javob": 66
  },
  {
    "savol": "ABCD trapetsiyada BE ⟂ AD, AB = CD, AE = 5, ED = 15 bo'lsa, BC = x ni toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 10
  },
  {
    "savol": "ABCD trapetsiyada BE ⟂ AD, AB = CD, AE = 4, ED = 14 bo'lsa, BC = x ni toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 10
  },
  {
    "savol": "ABCD trapetsiyada BE ⟂ AD, AB = CD, AD = 14, BC = 6 bo'lsa, AE = x ni toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  },
  {
    "savol": "ABCD trapetsiyada ∠ADC = 54°, ∠BAD = 72°, AB = 9, AD = 15 bo'lsa, BC = x ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 7
  },
  {
    "savol": "ABCD trapetsiyada ∠ADC = α, ∠BAD = 90° - α, AB = 3, BC = 2, CD = 4 bo'lsa, AD = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "ABCD trapetsiyada ∠ADC = α, ∠BAD = 90° - α, AB = 20, BC = 10, CD = 21 bo'lsa, AD = x ni toping.",
    "variantlar": [25, 27, 29, 31],
    "javob": 29
  },
  {
    "savol": "ABCD trapetsiyada BE ⟂ AD, AB = CD, AD = 20, BC = 8 bo'lsa, AE = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "ABCD trapetsiyada BA ⟂ AD, BC = 8, AD = 13, CD = 13 bo'lsa, AB = x ni toping.",
    "variantlar": [10, 11, 12, 13],
    "javob": 12
  },
  {
    "savol": "Teng yonli trapetsiyaning o'tkir va o'tmas burchaklari nisbati 2:7 ga teng. Trapetsiyaning o'tkir burchagini toping.",
    "variantlar": [30, 35, 40, 45],
    "javob": 40
  },
  {
    "savol": "Teng yonli ABCD trapetsiyaning AC diagonali ∠BAD ning bissektrisasi. AC = AD bo'lsa, ∠ADC ni toping.",
    "variantlar": [60, 65, 70, 75],
    "javob": 70
  },
  {
    "savol": "Teng yonli trapetsiyaning asoslari ayirmasi yon tomoniga teng. Trapetsiyaning o'tkir burchagini toping.",
    "variantlar": [30, 45, 60, 75],
    "javob": 60
  },
  {
    "savol": "Teng yonli trapetsiyaning yon tomoni, kichik va katta asoslari mos ravishda 8, 10 va 16 ga teng. Trapetsiya perimetrini toping.",
    "variantlar": [42, 44, 46, 48],
    "javob": 42
  },
  {
    "savol": "Teng yonli trapetsiyaning kichik asosi, yon tomoni va balandligi mos ravishda 10, 15 va 12 ga teng. Trapetsiya perimetrini toping.",
    "variantlar": [50, 52, 54, 56],
    "javob": 52
  },
  {
    "savol": "ABCD trapetsiyada BC = 5, AD = 15, AC = 16 bo'lsa, OC = x ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "Trapetsiyaning asosidagi burchaklari 30° va 60° ga teng. Katta yon tomoni 15√3 ga teng bo'lsa, kichik yon tomon uzunligini toping.",
    "variantlar": [10, 12, 15, 18],
    "javob": 15
  },
  {
    "savol": "ABCD trapetsiyada BC = 9, AD = 18, OC = 7 bo'lsa, AO = x ni toping.",
    "variantlar": [10, 11, 12, 13],
    "javob": 12
  },
  {
    "savol": "ABCD trapetsiyada EF o'rta chiziq, EG = 4, GF = 12 bo'lsa, x - y ni toping. (AD = x, BC = y)",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "ABCD trapetsiyada BC = 8, AD = 20, OD = 15 bo'lsa, BO = x ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "ABCD trapetsiyada EF o'rta chiziq, EG = 3, GF = 10 bo'lsa, 2x - y ni toping. (AD = x, BC = y)",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  }
],




theme19: [
  {
    "savol": "ABCD trapetsiyada DC = 3, DH = 5 (balandlik), AB = 7 bo'lsa, S(ABCD) ni toping.",
    "variantlar": [25, 30, 35, 40],
    "javob": 25
  },
  {
    "savol": "ABCD trapetsiyada DC = 10, DH = 14 (balandlik), AB = 16 bo'lsa, S(ABCD) ni toping.",
    "variantlar": [162, 172, 182, 192],
    "javob": 182
  },
  {
    "savol": "ABCD trapetsiyada DC = 9, AB = 13, S(ABCD) = 88 bo'lsa, balandlik h ni toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "ABCD trapetsiyada DC = 12, AB = 16, S(ABCD) = 84 bo'lsa, balandlik h ni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "ABCD trapetsiyada DE = 15 (balandlik), S(ABCD) = 144 bo'lsa, DC ni toping.",
    "variantlar": [4.2, 4.6, 5.2, 5.6],
    "javob": 5.2
  },
  {
    "savol": "ABCD trapetsiyada DE = 6 (balandlik), DC = 4, S(ABCD) = 42 bo'lsa, AB ni toping.",
    "variantlar": [8, 9, 10, 11],
    "javob": 10
  },
  {
    "savol": "ABCD trapetsiyada DE = 12 (balandlik), DC = 8, S(ABCD) = 144 bo'lsa, AB ni toping.",
    "variantlar": [14, 15, 16, 17],
    "javob": 16
  },
  {
    "savol": "ABCD trapetsiyada AB ⟂ BC, AB = 5, BC = 7, AD = 4 bo'lsa, S(ABCD) ni toping.",
    "variantlar": [31.5, 42, 52.5, 63],
    "javob": 31.5
  },
  {
    "savol": "ABCD trapetsiyada AB = 4, BC = 6, DC = 8, ∠BCD = 30° bo'lsa, S(ABCD) ni toping.",
    "variantlar": [18, 24, 30, 36],
    "javob": 24
  },
  {
    "savol": "ABCD trapetsiyada AB = 4, DC = 12, AD = BC, ∠ABC = 135° bo'lsa, S(ABCD) ni toping.",
    "variantlar": [32, 40, 48, 56],
    "javob": 48
  },
  {
    "savol": "ABCD trapetsiyada AB = 6, DC = 20, AD = BC, ∠ABC = 120° bo'lsa, S(ABCD) ni toping.",
    "variantlar": ["78√3", "84√3", "90√3", "96√3"],
    "javob": "78√3"
  },
  {
    "savol": "ABCD trapetsiyada BH balandlik, DH = 9, HC = 4, AD = BC bo'lsa, S(ABCD) ni toping.",
    "variantlar": [84, 96, 108, 120],
    "javob": 108
  },
  {
    "savol": "ABCD trapetsiyada BH balandlik, BC = 10, HC = 6, AD = BC bo'lsa, S(ABCD) ni toping.",
    "variantlar": [128, 144, 160, 176],
    "javob": 160
  },
  {
    "savol": "ABCD trapetsiyada BH balandlik, DH = 20, BH = 10, AD = BC bo'lsa, S(ABCD) ni toping.",
    "variantlar": [200, 220, 240, 260],
    "javob": 240
  },
  {
    "savol": "ABCD trapetsiyada BE balandlik, DB = 20, BE = 12, AD = BC bo'lsa, S(ABCD) ni toping.",
    "variantlar": [168, 180, 192, 204],
    "javob": 192
  },
  {
    "savol": "ABCD trapetsiyada BE balandlik, DH = 9, HC = 4, AD = BC bo'lsa, S(ABCD) ni toping.",
    "variantlar": [78, 84, 90, 96],
    "javob": 90
  },
  {
    "savol": "ABCD trapetsiyada AC = 8, BD = 9, ∠CED = 45° bo'lsa, S(ABCD) ni toping.",
    "variantlar": ["18√2", "24√2", "30√2", "36√2"],
    "javob": "18√2"
  },
  {
    "savol": "O'rta chizig'i 8 va balandligi 6 ga teng bo'lgan trapetsiyaning yuzini toping.",
    "variantlar": [48, 54, 60, 66],
    "javob": 48
  },
  {
    "savol": "ABCD trapetsiyada AC = 6, BD = 8, ∠CED = 60° bo'lsa, S(ABCD) ni toping.",
    "variantlar": ["12√3", "18√3", "24√3", "30√3"],
    "javob": "12√3"
  },
  {
    "savol": "Diagonallari 12 va 10√3 ga, ular orasidagi burchagi 60° ga teng bo'lgan trapetsiyaning yuzini toping.",
    "variantlar": [45, 60, 75, 90],
    "javob": 90
  },
  {
    "savol": "ABCD trapetsiyada AC = BD = 10, ∠BDC = ∠ACD = 30° bo'lsa, S(ABCD) ni toping.",
    "variantlar": [25, 30, 35, 40],
    "javob": 35
  },
  {
    "savol": "Teng yonli trapetsiyaning diagonali 15 ga teng bo'lib, asos bilan tashkil qilgan burchagining sinusi 3/5 ga teng. Trapetsiya yuzini toping.",
    "variantlar": [72, 84, 96, 108],
    "javob": 108
  },
  {
    "savol": "ABCD trapetsiyada AC = BD = 12, ∠BDC = ∠ACD = 45° bo'lsa, S(ABCD) ni toping.",
    "variantlar": [72, 84, 96, 108],
    "javob": 96
  },
  {
    "savol": "To'g'ri burchakli trapetsiyaning o'tmas burchagi 120°, katta yon tomoni 8√3 ga teng. O'rta chizig'i 18 ga teng bo'lsa, trapetsiya yuzini toping.",
    "variantlar": ["108√3", "120√3", "132√3", "144√3"],
    "javob": "108√3"
  },
  {
    "savol": "Yon tomoni 10 ga, asoslari 6 va 18 ga teng bo'lgan trapetsiyaning yuzini toping.",
    "variantlar": [96, 108, 120, 132],
    "javob": 120
  },
  {
    "savol": "To'g'ri burchakli trapetsiyaning asoslari 6 va 12 ga teng. Katta yon tomoni 10 ga teng bo'lsa, uning yuzini toping.",
    "variantlar": [54, 60, 66, 72],
    "javob": 60
  },
  {
    "savol": "Teng yonli trapetsiyaning kichik asosi 10 ga, yon tomoni 6 ga teng. Asosidagi burchagi 60° bo'lsa, yuzini toping.",
    "variantlar": ["42√3", "48√3", "54√3", "60√3"],
    "javob": "42√3"
  },
  {
    "savol": "Teng yonli trapetsiyaning asoslari 10 va 18 ga teng. O'tkir burchagi sinusi 4/5 bo'lsa, yuzini toping.",
    "variantlar": [84, 96, 108, 120],
    "javob": 96
  },
  {
    "savol": "ABCD trapetsiyada AB:DC = 2:3 bo'lsa, SAOB ni toping.",
    "variantlar": ["2:3 nisbatda", "3:2 nisbatda", "4:9 nisbatda", "9:4 nisbatda"],
    "javob": "4:9 nisbatda"
  },
  {
    "savol": "ABCD trapetsiyada AB:DC = 3:4 bo'lsa, SAOB ni toping.",
    "variantlar": ["3:4 nisbatda", "4:3 nisbatda", "9:16 nisbatda", "16:9 nisbatda"],
    "javob": "9:16 nisbatda"
  },
  {
    "savol": "ABCD trapetsiyada AB:CD = 2:5 bo'lsa, SAOD : SAOB nisbatini toping.",
    "variantlar": ["2:5", "5:2", "2:3", "3:2"],
    "javob": "5:2"
  },
  {
    "savol": "ABCD trapetsiyada AB:CD = 2:3 bo'lsa, SAOD ni toping.",
    "variantlar": ["SAOB ga teng", "SAOB dan katta", "SAOB dan kichik", "Aniqlab bo'lmaydi"],
    "javob": "Aniqlab bo'lmaydi"
  },
  {
    "savol": "ABCD trapetsiyada SAOB = 4 bo'lsa, SDOC ni toping.",
    "variantlar": [4, 6, 8, 10],
    "javob": 8
  },
  {
    "savol": "ABCD trapetsiyada AB:DC = 3:4, SAOB = 18 bo'lsa, SDOC ni toping.",
    "variantlar": [24, 28, 32, 36],
    "javob": 32
  },
  {
    "savol": "ABCD trapetsiyada asoslar 8 va 14, balandlik 6 bo'lsa, yuzini toping.",
    "variantlar": [66, 72, 78, 84],
    "javob": 66
  },
  {
    "savol": "Teng yonli trapetsiyaning asoslari 12 va 20, yon tomoni 8 bo'lsa, yuzini toping.",
    "variantlar": ["64√3", "72√3", "80√3", "96√3"],
    "javob": "64√3"
  },
  {
    "savol": "To'g'ri burchakli trapetsiyaning asoslari 5 va 9, katta yon tomoni 7 bo'lsa, yuzini toping.",
    "variantlar": [28, 35, 42, 49],
    "javob": 35
  },
  {
    "savol": "ABCD trapetsiyada o'rta chiziq 12, balandlik 8 bo'lsa, yuzini toping.",
    "variantlar": [96, 108, 120, 132],
    "javob": 96
  },
  {
    "savol": "Teng yonli trapetsiyaning diagonallari o'zaro perpendikulyar, asoslari 8 va 12 bo'lsa, yuzini toping.",
    "variantlar": [80, 90, 100, 110],
    "javob": 100
  },
  {
    "savol": "ABCD trapetsiyada BC = 5, AD = 15, balandlik 8 bo'lsa, yuzini toping.",
    "variantlar": [80, 90, 100, 110],
    "javob": 80
  },
  {
    "savol": "ABCD trapetsiyada AB = 7, CD = 13, balandlik 5 bo'lsa, yuzini toping.",
    "variantlar": [50, 55, 60, 65],
    "javob": 50
  }
],






theme20: [
  {
    "savol": "Qavariq beshburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [450, 500, 540, 600],
    "javob": 540
  },
  {
    "savol": "Qavariq o'nbirburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [1440, 1500, 1620, 1800],
    "javob": 1620
  },
  {
    "savol": "Qavariq o'noltiburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [1980, 2160, 2340, 2520],
    "javob": 2160
  },
  {
    "savol": "Muntazam o'nikkiburchakning bitta tashqi burchagini toping.",
    "variantlar": [20, 25, 30, 35],
    "javob": 30
  },
  {
    "savol": "Muntazam o'nburchakning bitta tashqi burchagini toping.",
    "variantlar": [30, 32, 34, 36],
    "javob": 36
  },
  {
    "savol": "Muntazam o'nburchakning bitta ichki burchagini toping.",
    "variantlar": [140, 144, 150, 156],
    "javob": 144
  },
  {
    "savol": "Muntazam o'nbeshburchakning bitta ichki burchagini toping.",
    "variantlar": [150, 156, 160, 165],
    "javob": 156
  },
  {
    "savol": "Muntazam yigirma to'rtburchakning bitta ichki burchagini toping.",
    "variantlar": [150, 155, 160, 165],
    "javob": 165
  },
  {
    "savol": "Qavariq oltiburchakning diagonallari sonini toping.",
    "variantlar": [6, 9, 12, 15],
    "javob": 9
  },
  {
    "savol": "Qavariq o'nburchakning diagonallari sonini toping.",
    "variantlar": [25, 30, 35, 40],
    "javob": 35
  },
  {
    "savol": "Qavariq o'nbeshburchakning diagonallari sonini toping.",
    "variantlar": [90, 100, 110, 120],
    "javob": 90
  },
  {
    "savol": "Qavariq yigirmaburchakning diagonallari sonini toping.",
    "variantlar": [150, 160, 170, 180],
    "javob": 170
  },
  {
    "savol": "Diagonallari soni 5 ta bo'lgan qavariq ko'pburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [360, 540, 720, 900],
    "javob": 540
  },
  {
    "savol": "Diagonallari soni 27 ta bo'lgan qavariq ko'pburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [1260, 1440, 1620, 1800],
    "javob": 1620
  },
  {
    "savol": "Diagonallari soni tomonlari sonidan 25 ta ko'p bo'lgan ko'pburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [2160, 2340, 2520, 2700],
    "javob": 2520
  },
  {
    "savol": "Diagonallari soni 90 ta bo'lgan qavariq ko'pburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [1800, 1980, 2160, 2340],
    "javob": 2160
  },
  {
    "savol": "Diagonallari soni tomonlari sonidan 2 marta ko'p bo'lgan ko'pburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [720, 900, 1080, 1260],
    "javob": 1260
  },
  {
    "savol": "Diagonallari soni tomonlari sonidan 3 marta ko'p bo'lgan ko'pburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [1260, 1440, 1620, 1800],
    "javob": 1620
  },
  {
    "savol": "Diagonallari soni tomonlari sonidan 12 ta ko'p bo'lgan ko'pburchakning ichki burchaklari yig'indisini toping.",
    "variantlar": [1620, 1800, 1980, 2160],
    "javob": 1980
  },
  {
    "savol": "Ichki burchaklari yig'indisi 1080° bo'lgan ko'pburchakning nechta diagonali bor?",
    "variantlar": [15, 18, 20, 25],
    "javob": 20
  },
  {
    "savol": "Diagonallari soni 170 ta bo'lgan muntazam ko'pburchakning bitta tashqi burchagi necha gradusga teng?",
    "variantlar": [18, 20, 24, 30],
    "javob": 18
  },
  {
    "savol": "Diagonallari soni tomonlari sonidan 3 marta ko'p bo'lgan muntazam ko'pburchakning bitta ichki burchagini toping.",
    "variantlar": [135, 140, 144, 150],
    "javob": 150
  },
  {
    "savol": "ABCDEF muntazam oltiburchak, G markazi. x ni toping.",
    "variantlar": [30, 45, 60, 75],
    "javob": 60
  },
  {
    "savol": "ABCDEFGH muntazam sakkizburchakda ∠EOD = α ni toping.",
    "variantlar": [45, 60, 75, 90],
    "javob": 90
  },
  {
    "savol": "ABCDEFGH muntazam sakkizburchak, AKJIB muntazam beshburchak. ∠IBC = x ni toping.",
    "variantlar": [18, 27, 36, 45],
    "javob": 27
  },
  {
    "savol": "ABCDEFGH muntazam sakkizburchak, AONMLB muntazam oltiburchak. ∠OAH = x ni toping.",
    "variantlar": [15, 22.5, 30, 37.5],
    "javob": 30
  },
  {
    "savol": "ABCDEF muntazam oltiburchak, AGHF kvadrat. ∠BAG = x ni toping.",
    "variantlar": [15, 25, 35, 45],
    "javob": 45
  },
  {
    "savol": "ABCDEF muntazam oltiburchak, AIJKF muntazam beshburchak. ∠KFE = x ni toping.",
    "variantlar": [12, 18, 24, 30],
    "javob": 18
  },
  {
    "savol": "ABCDEFGH muntazam sakkizburchak, ABIJ kvadrat. ∠BIC ni toping.",
    "variantlar": [45, 60, 75, 90],
    "javob": 90
  },
  {
    "savol": "ABCDEF muntazam oltiburchak. ∠DFC = x ni toping.",
    "variantlar": [30, 45, 60, 75],
    "javob": 60
  },
  {
    "savol": "ABCDEF muntazam oltiburchak, BC = 8 bo'lsa, x ni toping.",
    "variantlar": [8, 12, 16, 20],
    "javob": 16
  },
  {
    "savol": "ABCDEF muntazam oltiburchak, EB = 14 bo'lsa, x ni toping.",
    "variantlar": [14, 21, 28, 35],
    "javob": 28
  },
  {
    "savol": "ABCDEF muntazam oltiburchak, DF = x ni toping.",
    "variantlar": [12, 18, 24, 30],
    "javob": 24
  },
  {
    "savol": "ABCDEF muntazam oltiburchak, BC = 8 bo'lsa, x ni toping.",
    "variantlar": [8, 12, 16, 20],
    "javob": 16
  },
  {
    "savol": "ABCDEF muntazam oltiburchak, EC = 12 bo'lsa, x ni toping.",
    "variantlar": [12, 18, 24, 30],
    "javob": 24
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