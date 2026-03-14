let testData = {
theme1: [
    // 1-20. Hisoblang (1-20)
  { savol: "48 : (12 - 4 * 2) + 24 : 6", variantlar: ["10", "12", "14", "16"], javob: "12" },
  { savol: "(192 : 6 - 12) : (16 - 2 * 7)", variantlar: ["86", "84", "88", "90"], javob: "86" },
  { savol: "120 : 12 - (169 : 13 - 12)", variantlar: ["97", "95", "99", "100"], javob: "97" },
  { savol: "64 : (4 + 2 * 8 - 144 : 12)", variantlar: ["21", "19", "23", "25"], javob: "21" },
  { savol: "84 - 48 : 4 + 15 * (2 + 3 * 0)", variantlar: ["37", "35", "39", "41"], javob: "37" },
  { savol: "2 * 15 + 3 * 10 + 6 * 5", variantlar: ["100", "90", "110", "120"], javob: "100" },
  { savol: "111 : 3 + 12 * (9 - 6 : 2)", variantlar: ["16", "14", "18", "20"], javob: "16" },
  { savol: "112 : 4 * 5", variantlar: ["140", "120", "130", "150"], javob: "140" },
  { savol: "156 : 2 - 18 : 2 + 3 * (18 : 6 + 2)", variantlar: ["48", "46", "50", "52"], javob: "48" },
  { savol: "122 + (83 - (25 - 12))", variantlar: ["192", "190", "188", "186"], javob: "192" },
  { savol: "20", variantlar: ["20", "18", "22", "24"], javob: "20" },

  // 39-45. Qulay usulda hisoblang
  { savol: "7·55 - 7·45 + 3·55 - 3·45", variantlar: ["100", "90", "110", "120"], javob: "100" },
  { savol: "37·59 + 37·41 + 63·59 + 41·63", variantlar: ["10000", "9800", "10200", "10400"], javob: "10000" },
  { savol: "14·27 - 14·24 + 16·49 - 16·46", variantlar: ["90", "88", "92", "94"], javob: "90" },
  { savol: "28·43 + 57·81 + 43·72 + 57·19", variantlar: ["10000", "10200", "9800", "10400"], javob: "10000" },
  { savol: "12·13 + 13·24 + 36·47 + 60·64", variantlar: ["630", "620", "640", "650"], javob: "630" },
  { savol: "67·43 - 43·37 - 30·23 - 20·10", variantlar: ["264", "260", "268", "270"], javob: "264" },
  { savol: "128·247 + 247·172 + 300·253", variantlar: ["12132", "12000", "12200", "12300"], javob: "12132" },

  // 46-51. Masalalar
  { savol: "Daftarning narxi 5000 so‘m, ruchkaning narxi 3000 so‘m. 4 ta daftar va 3 ta ruchka necha so‘m turadi?", variantlar: ["29000", "28000", "30000", "31000"], javob: "29000" },
  { savol: "Bolaning yoshi onasining yoshidan 24 ga kam, otasining yoshi esa onasining yoshidan 5 ga ko‘p. Agar bolaning yoshi 12 ga teng bo‘lsa, otaning yoshini toping.", variantlar: ["41", "40", "42", "43"], javob: "41" },
  { savol: "Fermer xo‘jaligida iyul oyida 300 tonna sut mahsulotlari yetishtirildi. Bu miqdor iyun oyidagidan 17 tonnaga ko‘p, lekin avgust oyidagidan 23 tonnaga kam ekani ma’lum. Yoz oylarida fermada jami necha tonna sut mahsulotlari yetishtirilgan?", variantlar: ["877", "870", "880", "890"], javob: "877" },
  { savol: "4 kg pomidor uchun 36000 so‘m to‘landi. 5 kg pomidor necha so‘m turadi?", variantlar: ["45000", "44000", "46000", "47000"], javob: "45000" },
  { savol: "12 ta daftar uchun 48000 so‘m to‘landi. 14 ta daftar necha so‘m turadi?", variantlar: ["56000", "55000", "57000", "58000"], javob: "56000" },
  { savol: "5 kg kartoshka 15000 so‘m, 7 kg piyoz 28000 so‘m bo‘lsa, 3 kg kartoshka va 4 kg piyoz necha so‘m bo‘ladi?", variantlar: ["25000", "24000", "26000", "27000"], javob: "25000" },

  // 52-60. Masalalar
  { savol: "Ozod har kuni 36 km dan yo‘l bosib manzilga 10 kunda yetib bordi. Agar Ozod dastlabki manzilga 9 kunda qaytib kelmoqchi bo‘lsa, kuniga o‘rtacha necha km yo‘l bosishi kerak?", variantlar: ["40", "38", "42", "44"], javob: "40" },
  { savol: "40 soni dastlab 5 marta, keyin yana 80 ga orttirildi. Hosil bo‘lgan son dastlabkisidan necha marta ortiq?", variantlar: ["7", "6", "8", "9"], javob: "7" },
  { savol: "30 soni dastlab 5 marta, keyin yana 90 ga orttirildi. Hosil bo‘lgan son dastlabkisidan necha marta ortiq?", variantlar: ["8", "7", "9", "10"], javob: "8" },
  { savol: "24 va 8 sonlarining ko‘paytmasiga teng bo‘lishi uchun 120 ga qanday sonni qo‘shish kerak?", variantlar: ["72", "70", "74", "76"], javob: "72" },
  { savol: "3600 va 24 sonlarining bo‘linmasini hosil qilish uchun 200 dan qanday sonni ayirish kerak?", variantlar: ["50", "48", "52", "54"], javob: "50" },

  // 61-65. Tengsizliklar

  { savol: "1 ≤ n ≤ 9 ni qanoatlantiruvchi nechta natural son bor?", variantlar: ["9", "8", "10", "7"], javob: "9" },
  { savol: "2 < n < 7 ni qanoatlantiruvchi nechta natural son bor?", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "3 < n ≤ 8 ni qanoatlantiruvchi nechta natural son bor?", variantlar: ["5", "4", "6", "7"], javob: "5" },
  { savol: "12 ≤ n < 15 ni qanoatlantiruvchi nechta natural son bor?", variantlar: ["3", "2", "4", "5"], javob: "3" },
  { savol: "21 < n ≤ 25 ni qanoatlantiruvchi nechta natural son bor?", variantlar: ["4", "3", "5", "6"], javob: "4" },

  // 66-70. Qatordagi sonlar
  { savol: "1; 2; 3; ...; 45; 46; qatorida nechta natural son bor?", variantlar: ["46", "45", "47", "48"], javob: "46" },
  { savol: "5; 6; 7 ...; 100 qatorida nechta natural son bor?", variantlar: ["96", "95", "97", "98"], javob: "96" },
  { savol: "6; 7; 8 ...; 97; 98 qatorida nechta natural son bor?", variantlar: ["93", "92", "94", "95"], javob: "93" },
  { savol: "23; 24; 25 ... 123, 124 qatorida nechta natural son bor?", variantlar: ["102", "101", "103", "104"], javob: "102" },
  { savol: "11; 12; 13; ...; 74; 75; qatorida nechta natural son bor?", variantlar: ["65", "64", "66", "67"], javob: "65" },

  // 71-80. Hisoblang
  { savol: "8 * 10000 + 5 * 1000 + 3 * 100 + 7 * 10 + 9", variantlar: ["85379", "85378", "85380", "85381"], javob: "85379" },
  { savol: "6 * 10000 + 9 * 1000 + 100 + 5 * 10 + 7", variantlar: ["69157", "69158", "69156", "69159"], javob: "69157" },
  { savol: "10000 + 5 * 1000 + 4 * 10 + 2", variantlar: ["15042", "15041", "15043", "15044"], javob: "15042" },
  { savol: "3 * 10000 + 4 * 100 + 2 * 10 + 7", variantlar: ["30427", "30426", "30428", "30429"], javob: "30427" },
  { savol: "2 * 10000 + 4 * 10", variantlar: ["20040", "20039", "20041", "20042"], javob: "20040" },
  { savol: "87032", variantlar: ["87032", "87033", "87031", "87034"], javob: "87032" },
  { savol: "221057", variantlar: ["221057", "221058", "221056", "221059"], javob: "221057" },
  { savol: "129807", variantlar: ["129807", "129808", "129806", "129809"], javob: "129807" },
  { savol: "65472", variantlar: ["65472", "65473", "65471", "65474"], javob: "65472" },
  { savol: "10007", variantlar: ["10007", "10008", "10006", "10009"], javob: "10007" },

  // 81-105. Turli masalalar
  { savol: "Eng kichik uch xonali son bilan eng katta ikki xonali son yig‘indisini toping.", variantlar: ["199", "198", "200", "201"], javob: "199" },
  { savol: "Turli raqamlar bilan yozilgan eng katta ikki xonali sonni yozing.", variantlar: ["98", "97", "99", "96"], javob: "98" },
  { savol: "Nechta ikki xonali son chapdan o‘ngga va o‘ngdan chapga bir xil o‘qiladi?", variantlar: ["9", "8", "10", "11"], javob: "9" },
  { savol: "Turli raqamlar bilan yozilgan eng katta uch xonali sonni yozing.", variantlar: ["987", "986", "985", "984"], javob: "987" },
  { savol: "Qo’shiluvchilardan biri 18 ga, ikkinchisi 16 ga oshirilsa, yig’indining qiymati qanchaga oshadi?", variantlar: ["34", "33", "35", "36"], javob: "34" },
  { savol: "Turli raqamlar bilan yozilgan eng kichik uch xonali sonni yozing.", variantlar: ["102", "101", "103", "104"], javob: "102" },
  { savol: "12 ta son yig’indisi 100 ga teng. Agar har bir qo’shiluvchi 5 ga orttirilsa, yig’indi nechaga teng bo’ladi?", variantlar: ["160", "155", "165", "170"], javob: "160" },
  { savol: "Bir xonali natural sonlar nechta?", variantlar: ["9", "8", "10", "11"], javob: "9" },
  { savol: "Yig‘indida ishtirok etayotgan har bir qo’shiluvchi 4 ga orttirilsa, yig‘indi 36 ga ortadi. Yig‘indida nechta son qatnashgan?", variantlar: ["9", "8", "10", "11"], javob: "9" },
  { savol: "3042 sonidan katta va 6 raqami bilan tugaydigan eng kichik to‘rt xonali son nechaga teng?", variantlar: ["3046", "3045", "3047", "3048"], javob: "3046" },
  { savol: "Yig‘indida ishtirok etayotgan har bir qo’shiluvchi 3 ga orttirilsa, yig‘indi 24 ga ortadi. Yig‘indida nechta son qatnashgan?", variantlar: ["8", "7", "9", "10"], javob: "8" },


  { savol: "Barcha raqamlar yordamida, ularni takrorlamasdan yozilgan eng katta va eng kichik 10 xonali sonni yozing.", variantlar: ["9876543210", "9876543211", "9876543209", "9876543212"], javob: "9876543210" },
  { savol: "1 dan 20 gacha bo‘lgan sonlar ketma-ket bitta son kabi yozildi: 1234…1920. Necha xonali son hosil bo‘ldi?", variantlar: ["31", "30", "32", "33"], javob: "31" },
  { savol: "3 va 4 raqamlaridan foydalanib nechta ikki xonali son yozish mumkin? (Raqamlar takrorlanishi mumkin)", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "1 dan 99 gacha bo‘lgan sonlar ketma-ket bitta son kabi yozildi: 1234…9899. Necha xonali son hosil bo‘ldi?", variantlar: ["189", "188", "190", "191"], javob: "189" },
  { savol: "2, 3, 4 raqamlaridan ularni takrorlamasdan nechta uch xonali son yozish mumkin? Bu sonlarni o‘sish tartibida joylashtiring.", variantlar: ["6", "5", "7", "8"], javob: "6" },

  // 97-105. Iqtidorlilar uchun
  { savol: "1,2,3,4 raqamlaridan foydalanib nechta turli raqamli 4 xonali son hosil qilish mumkin?", variantlar: ["24", "23", "25", "26"], javob: "24" },
  { savol: "Hisoblang: 1 + 2 + 3 + ... + 200", variantlar: ["20100", "20000", "20200", "20300"], javob: "20100" },
  { savol: "O’quvchi birinchi kuni 1 ta, ikkinchi kuni 2 ta, uchinchi kuni 3 ta masala yechdi va hokazo. U dastlabki 20 kunda jami nechta masala yechgan?", variantlar: ["210", "200", "220", "230"], javob: "210" },
  { savol: "Agar a = 1 + 3 + 5 + ... + 25 va b = 4 + 12 + b/a ni toping.", variantlar: ["16", "15", "17", "18"], javob: "16" },
  { savol: "Uchta javonda 210 ta kitob bor. Birinchi javondan ikkinchisiga 10 ta, ikkinchi javondan uchinchisiga 20 ta kitob olib qo’yilsa, javonlardagi kitoblar soni teng bo’ladi. Dastlab har bir javonda nechtadan kitob bo’lgan?", variantlar: ["60,70,80", "50,70,90", "55,70,85", "65,70,75"], javob: "60,70,80" },
  { savol: "Futbol to’pi sotib olish uchun bir nechta bola 12000 so’mdan pul yig’moqchi edi. Yana bir bola kelib qo’shilganidan keyin, to’p sotib olish uchun har bir bola 10000 so’mdan berishi yetdi. To’p narxini aniqlang.", variantlar: ["60000", "50000", "55000", "65000"], javob: "60000" },
  { savol: "Ikki sonning yig’indisi 4675 ga teng. Qo’shiluvchilardan biri 0 raqami bilan tugaydi. Agar shu raqam o’chirilsa, ikkinchi qo’shiluvchi hosil bo’ladi. Bu sonlarni toping.", variantlar: ["4250,425", "4175,500", "4000,675", "4500,175"], javob: "4250,425" },
  { savol: "3879143 sonidan shunday 3 ta raqam o’chirildiki, natijada eng katta son hosil bo’ldi. Hosil bo’lgan sonni toping.", variantlar: ["9874", "9873", "9875", "9872"], javob: "9874" },
  { savol: "Ikki sonning yig’indisi 700 ga teng. Agar birinchi sonni 5 marta, ikkinchi sonni 2 marta orttirsak, hosil bo’lgan sonlar yig’indisi 2900 ga teng bo’ladi. Berilgan sonlarni toping.", variantlar: ["500,200", "400,300", "450,250", "350,350"], javob: "500,200" },

  // 106-110. Qo'shimcha masalalar
  { savol: "1 dan 2024 gacha bo‘lgan natural sonlar 123...20232024 ko‘rinishida bir qatorga yozildi. Ketma-ket kelgan 100 ta raqam yig‘indisi eng kamida nechaga teng bo‘lishi mumkin?", variantlar: ["100", "99", "101", "102"], javob: "100" },
  { savol: "Kitob betlarini sahifalash 3-betdan boshlanadi. Kitobni sahifalash uchun 1042 ta raqam ishlatildi. Kitob necha sahifali?", variantlar: ["384", "383", "385", "386"], javob: "384" },
  { savol: "Ma’lum bir yilning yanvar oyida to‘rtta juma va to‘rt dushanba bor edi. Shu oyning 20-kuni haftaning qaysi kuni edi?", variantlar: ["Payshanba", "Seshanba", "Chorshanba", "Juma"], javob: "Payshanba" },
  { savol: "100 ta natural son yig‘indisi 103 ga teng. Bu sonlarning ko‘paytmasining eng katta qiymatini toping.", variantlar: ["27", "26", "28", "29"], javob: "27" },
],




theme2: [
  // 1-10. Bo'luvchilar va karralilar
  { savol: "12 sonining barcha natural bo'luvchilarini yozing.", variantlar: ["1,2,3,4,6,12", "1,2,3,4,5,6,12", "1,2,3,4,6,8,12", "1,2,3,4,5,6,8,12"], javob: "1,2,3,4,6,12" },
  { savol: "100 sonining barcha natural bo'luvchilarini yozing.", variantlar: ["1,2,4,5,10,20,25,50,100", "1,2,4,5,8,10,20,25,50,100", "1,2,4,5,10,20,25,40,50,100", "1,2,4,5,10,20,25,30,50,100"], javob: "1,2,4,5,10,20,25,50,100" },
  { savol: "36 sonining barcha natural bo'luvchilarini yozing.", variantlar: ["1,2,3,4,6,9,12,18,36", "1,2,3,4,5,6,9,12,18,36", "1,2,3,4,6,8,9,12,18,36", "1,2,3,4,6,9,12,15,18,36"], javob: "1,2,3,4,6,9,12,18,36" },
  { savol: "48 sonining barcha natural bo'luvchilarini yozing.", variantlar: ["1,2,3,4,6,8,12,16,24,48", "1,2,3,4,6,8,10,12,16,24,48", "1,2,3,4,5,6,8,12,16,24,48", "1,2,3,4,6,7,8,12,16,24,48"], javob: "1,2,3,4,6,8,12,16,24,48" },
  { savol: "25 dan oshmaydigan 5 ga karrali natural sonlarni yozing.", variantlar: ["5,10,15,20,25", "5,10,15,20", "0,5,10,15,20,25", "5,10,15,20,25,30"], javob: "5,10,15,20,25" },
  { savol: "20 dan oshmaydigan 3 ga karrali natural sonlarni yozing.", variantlar: ["3,6,9,12,15,18", "3,6,9,12,15", "3,6,9,12,15,18,21", "3,6,9,12,15,18,20"], javob: "3,6,9,12,15,18" },
  { savol: "8 ga karrali ikki xonali sonlarni yozing.", variantlar: ["16,24,32,40,48,56,64,72,80,88,96", "8,16,24,32,40,48,56,64,72,80,88,96", "16,24,32,40,48,56,64,72,80,88", "8,16,24,32,40,48,56,64,72,80,88"], javob: "16,24,32,40,48,56,64,72,80,88,96" },
  { savol: "100 dan oshmaydigan 5 ga karrali natural sonlar nechta?", variantlar: ["20", "19", "21", "18"], javob: "20" },
  { savol: "40 dan oshmaydigan 6 ga karrali natural sonlar nechta?", variantlar: ["6", "5", "7", "4"], javob: "6" },
  { savol: "12 ga karrali ikki xonali sonlar nechta?", variantlar: ["8", "7", "9", "10"], javob: "8" },

  // 11-30. Sonlarni bo'linish belgilari
  { savol: "2065, 1020, 24567, 86245, 98468, 95684 sonlardan 2 ga bo'linadiganlarini ajratib yozing.", variantlar: ["1020,98468,95684", "1020,24567,98468", "2065,1020,95684", "86245,98468,95684"], javob: "1020,98468,95684" },
  { savol: "1428, 547, 8642, 94560, 34762, 983456 sonlardan 2 ga bo'linadiganlarini ajratib yozing.", variantlar: ["1428,8642,94560,34762,983456", "1428,547,8642,94560,34762", "8642,94560,34762,983456", "547,8642,94560,34762"], javob: "1428,8642,94560,34762,983456" },
  { savol: "5019, 2978, 30459, 83423, 49871, 22257 sonlardan 3 ga bo'linadiganlarini ajratib yozing.", variantlar: ["5019,30459,22257", "5019,2978,30459", "30459,83423,22257", "2978,49871,22257"], javob: "5019,30459,22257" },
  { savol: "5891, 77139, 12987, 25489, 98701, 54630 sonlardan 3 ga bo'linadiganlarini ajratib yozing.", variantlar: ["77139,12987,54630", "5891,77139,12987", "12987,25489,54630", "77139,25489,98701"], javob: "77139,12987,54630" },
  { savol: "2457, 54878, 65428, 30196, 52784, 26198 sonlardan 4 ga bo'linadiganlarini ajratib yozing.", variantlar: ["65428,30196,52784", "2457,54878,65428", "30196,52784,26198", "54878,65428,30196"], javob: "65428,30196,52784" },
  { savol: "9872, 3686, 7462, 87964, 56872, 99846 sonlardan 4 ga bo'linadiganlarini ajratib yozing.", variantlar: ["9872,87964,56872", "9872,3686,87964", "87964,56872,99846", "3686,7462,87964"], javob: "9872,87964,56872" },
  { savol: "25780, 6955, 23547, 55542, 98751, 98420 sonlardan 5 ga bo'linadiganlarini ajratib yozing.", variantlar: ["25780,6955,98420", "25780,23547,98420", "6955,55542,98420", "23547,55542,98751"], javob: "25780,6955,98420" },
  { savol: "8694, 8745, 236540, 10007, 45870, 20000 sonlardan 5 ga bo'linadiganlarini ajratib yozing.", variantlar: ["8745,236540,45870,20000", "8694,8745,236540,45870", "236540,10007,45870,20000", "8745,45870,20000,8694"], javob: "8745,236540,45870,20000" },
  { savol: "5291, 8752, 93642, 124782, 36480, 98754 sonlardan 6 ga bo'linadiganlarini ajratib yozing.", variantlar: ["93642,124782,36480,98754", "5291,8752,93642,124782", "124782,36480,98754,5291", "8752,93642,36480,98754"], javob: "93642,124782,36480,98754" },
  { savol: "56324, 98456, 5217, 235476, 2548, 82446 sonlardan 6 ga bo'linadiganlarini ajratib yozing.", variantlar: ["235476,82446", "56324,98456,235476", "98456,5217,82446", "56324,235476,2548"], javob: "235476,82446" },

  // 21-30. 8,9,10,11,12 ga bo'linish
  { savol: "6442, 84564, 45872, 25948, 35472, 65244 sonlardan 8 ga bo'linadiganlarini ajratib yozing.", variantlar: ["45872,35472", "84564,45872,35472", "25948,35472,65244", "6442,84564,45872"], javob: "45872,35472" },
  { savol: "8654, 54248, 65844, 36546, 25478, 89600 sonlardan 8 ga bo'linadiganlarini ajratib yozing.", variantlar: ["54248,89600", "8654,54248,89600", "65844,36546,89600", "54248,65844,25478"], javob: "54248,89600" },
  { savol: "364581, 123453, 456387, 95403, 8546310 sonlardan 9 ga bo'linadiganlarini ajratib yozing.", variantlar: ["364581,123453,8546310", "123453,456387,95403", "456387,95403,8546310", "364581,456387,95403"], javob: "364581,123453,8546310" },
  { savol: "85320, 986541, 556621, 9654876, 565659 sonlardan 9 ga bo'linadiganlarini ajratib yozing.", variantlar: ["85320,9654876,565659", "986541,556621,9654876", "85320,986541,565659", "556621,9654876,565659"], javob: "85320,9654876,565659" },
  { savol: "25480, 88965, 96540, 78120, 963547 sonlardan 10 ga bo'linadiganlarini ajratib yozing.", variantlar: ["25480,96540,78120", "88965,96540,78120", "25480,88965,96540", "96540,78120,963547"], javob: "25480,96540,78120" },
  { savol: "10000, 8974520, 656565, 7890, 89750 sonlardan 10 ga bo'linadiganlarini ajratib yozing.", variantlar: ["10000,8974520,7890", "8974520,656565,7890", "10000,656565,89750", "7890,89750,8974520"], javob: "10000,8974520,7890" },
  { savol: "87542, 22440, 6578132, 94820, 4562910 sonlardan 11 ga bo'linadiganlarini ajratib yozing.", variantlar: ["22440,6578132,94820,4562910", "87542,22440,6578132,94820", "6578132,94820,4562910,87542", "22440,94820,4562910,87542"], javob: "22440,6578132,94820,4562910" },
  { savol: "97262, 95478, 25460, 95370, 9681220 sonlardan 11 ga bo'linadiganlarini ajratib yozing.", variantlar: ["97262,95370", "97262,95478,95370", "95478,25460,95370", "25460,95370,9681220"], javob: "97262,95370" },
  { savol: "6248, 95460, 87252, 335420, 785640 sonlardan 12 ga bo'linadiganlarini ajratib yozing.", variantlar: ["95460,87252,785640", "6248,95460,87252", "87252,335420,785640", "95460,335420,785640"], javob: "95460,87252,785640" },
  { savol: "3620, 45878, 658720, 69720, 25488 sonlardan 12 ga bo'linadiganlarini ajratib yozing.", variantlar: ["69720,25488", "3620,69720,25488", "45878,658720,69720", "658720,69720,25488"], javob: "69720,25488" },

  // 31-50. a raqamining qiymatlari
  { savol: "239a soni 2 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["0,2,4,6,8", "0,2,4,6", "2,4,6,8", "0,2,4,6,8,9"], javob: "0,2,4,6,8" },
  { savol: "645a soni 3 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["1,4,7", "0,3,6,9", "2,5,8", "3,6,9"], javob: "1,4,7" },
  { savol: "482a soni 4 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["0,4,8", "0,2,4,6,8", "2,4,6,8", "0,4,8,9"], javob: "0,4,8" },
  { savol: "964a soni 4 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["0,4,8", "0,2,4,6,8", "2,4,6,8", "0,4,8,9"], javob: "0,4,8" },
  { savol: "129a soni 5 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["0,5", "0", "5", "0,5,9"], javob: "0,5" },
  { savol: "259a soni 5 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["0,5", "0", "5", "0,5,9"], javob: "0,5" },
  { savol: "487a soni 6 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["2,8", "0,6", "4,8", "2,4,6,8"], javob: "2,8" },
  { savol: "975a soni 6 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["0,6", "2,8", "4,8", "0,6,9"], javob: "0,6" },
  { savol: "734a soni 8 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["4", "0,8", "2,6", "4,8"], javob: "4" },

  { savol: "196a soni 8 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["8", "0,8", "4", "2,6"], javob: "8" },
  { savol: "662a soni 9 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["7", "0,9", "3,6", "1,4,7"], javob: "7" },
  { savol: "210a soni 9 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["6", "0,9", "3,6", "1,4,7"], javob: "6" },
  { savol: "456a soni 10 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["0", "0,5", "5", "0,5,9"], javob: "0" },
  { savol: "829a soni 10 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["0", "0,5", "5", "0,5,9"], javob: "0" },
  { savol: "3654a soni 11 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["7", "0", "5", "9"], javob: "7" },
  { savol: "1862a soni 11 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["5", "0", "7", "9"], javob: "5" },
  { savol: "546a soni 12 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["0,6", "0,3,6,9", "2,8", "4,8"], javob: "0,6" },
  { savol: "478a soni 12 ga bo'linishi uchun a raqami qanday qiymatlar qabul qiladi?", variantlar: ["4", "0,6", "2,8", "4,8"], javob: "4" },

  // 51-60. Tub sonlar
  { savol: "1, 2, 3, 5, 7, 9, 11, 13, 15 qatoridan tub sonlarni ajratib yozing.", variantlar: ["2,3,5,7,11,13", "1,2,3,5,7,11,13", "2,3,5,7,9,11,13", "3,5,7,11,13,15"], javob: "2,3,5,7,11,13" },
  { savol: "17, 19, 21, 23, 27, 29, 31 qatoridan tub sonlarni ajratib yozing.", variantlar: ["17,19,23,29,31", "17,19,21,23,29,31", "19,23,27,29,31", "17,21,23,27,29"], javob: "17,19,23,29,31" },
  { savol: "37, 39, 41, 43, 47, 49, 53 qatoridan tub sonlarni ajratib yozing.", variantlar: ["37,41,43,47,53", "37,39,41,43,47,53", "41,43,47,49,53", "37,41,43,47,49"], javob: "37,41,43,47,53" },
  { savol: "57, 59, 61, 67, 71, 73, 77 qatoridan tub sonlarni ajratib yozing.", variantlar: ["59,61,67,71,73", "57,59,61,67,71,73", "61,67,71,73,77", "59,61,67,71,73,77"], javob: "59,61,67,71,73" },
  { savol: "79, 83, 87, 89, 97, 99, 101 qatoridan tub sonlarni ajratib yozing.", variantlar: ["79,83,89,97,101", "79,83,87,89,97,101", "83,87,89,97,99", "79,89,97,99,101"], javob: "79,83,89,97,101" },
  { savol: "103, 107, 109, 111, 113, 121 qatoridan tub sonlarni ajratib yozing.", variantlar: ["103,107,109,113", "103,107,109,111,113", "107,109,111,113", "103,109,111,113,121"], javob: "103,107,109,113" },
  { savol: "[15; 35] kesmada nechta tub son mavjud?", variantlar: ["7", "6", "8", "5"], javob: "7" },
  { savol: "(10;50) oraliqda nechta tub son mavjud?", variantlar: ["11", "10", "12", "13"], javob: "11" },
  { savol: "(70,100) oraliqda nechta tub son mavjud?", variantlar: ["6", "5", "7", "8"], javob: "6" },
  { savol: "(30;50) oraliqda murakkab sonlar nechta?", variantlar: ["15", "14", "16", "17"], javob: "15" },

  // 62-70. Tub sonlar bilan tenglamalar va masalalar
  { savol: "xy = 14 tenglikni qanoatlantiruvchi x, y tub sonlarni toping.", variantlar: ["2 va 7", "3 va 5", "2 va 5", "3 va 7"], javob: "2 va 7" },
  { savol: "xy = 35 tenglikni qanoatlantiruvchi x, y tub sonlarni toping.", variantlar: ["5 va 7", "3 va 11", "5 va 5", "7 va 5"], javob: "5 va 7" },
  { savol: "x + y = 15 tenglikni qanoatlantiruvchi x, y tub sonlarni toping.", variantlar: ["2 va 13", "3 va 12", "5 va 10", "7 va 8"], javob: "2 va 13" },
  { savol: "x + y = 21 tenglikni qanoatlantiruvchi x, y tub sonlarni toping.", variantlar: ["2 va 19", "3 va 18", "5 va 16", "7 va 14"], javob: "2 va 19" },
  { savol: "x + y = 20 tenglikni qanoatlantiruvchi x, y tub sonlarni toping.", variantlar: ["3 va 17", "2 va 18", "5 va 15", "7 va 13"], javob: "3 va 17" },
  { savol: "To'g'ri to'rtburchak bo'yi va enining uzunligi tub sonlar bo'lib, perimetri 26 bo'lsa, uning yuzini toping.", variantlar: ["42", "40", "44", "46"], javob: "42" },
  { savol: "To'g'ri to'rtburchak bo'yi va enining uzunligi tub sonlar bo'lib, perimetri 38 bo'lsa, uning yuzini toping.", variantlar: ["90", "88", "92", "94"], javob: "90" },
  { savol: "1,2,3,4,5,6 raqamlari bir martadan ishlatib olti xonali son yozildi. Hosil bo'lgan son 11 ga bo'linishi mumkinmi?", variantlar: ["Mumkin emas", "Mumkin", "Aniqlab bo'lmaydi", "Faqat juft sonlarda"], javob: "Mumkin emas" },
  { savol: "1,2,3,4,5,6,7 raqamlari bir martadan ishlatib 11 ga bo'linadigan biror yetti xonali son yozing.", variantlar: ["1234567", "7654321", "4261537", "1357246"], javob: "4261537" },
  { savol: "111...111 (27 ta) soni 27 ga bo'linishini ko'rsating.", variantlar: ["Bo'linadi", "Bo'linmaydi", "Aniqlab bo'lmaydi", "Faqat 9 ga bo'linadi"], javob: "Bo'linadi" },
  { savol: "Ikkita murakkab son yig'indisi ko'rinishida yozilmaydigan barcha tub sonlarni toping.", variantlar: ["2,3,5,7", "2,3,5", "3,5,7,11", "2,5,7,11"], javob: "2,3,5" },
  { savol: "p va p^2 + 2 sonlari tub son bo'ladigan barcha p sonlarini toping.", variantlar: ["3", "2", "5", "7"], javob: "3" },
  { savol: "1;2;3...2023;2024;2025 sonlar to'plamidan eng ko'pi bilan nechta son tanlab olish mumkin, bunda tanlangan sonlardan ixtiyoriy ikkitasining ayirmasi murakkab son bo'lsin?", variantlar: ["3", "4", "5", "6"], javob: "3" },
  ],







  theme3: [
  // 1-20. Faktorial va darajalar
  { savol: "5! = ?", variantlar: ["120", "100", "140", "160"], javob: "120" },
  { savol: "4! + 3! = ?", variantlar: ["30", "24", "36", "42"], javob: "30" },
  { savol: "0! + 1! + 2! + 3! = ?", variantlar: ["10", "8", "12", "14"], javob: "10" },
  { savol: "2! - 5! = ?", variantlar: ["-118", "118", "-120", "120"], javob: "-118" },
  { savol: "6!/240 = ?", variantlar: ["3", "4", "5", "6"], javob: "3" },
  { savol: "6!/4! = ?", variantlar: ["30", "20", "40", "50"], javob: "30" },
  { savol: "7!/5! = ?", variantlar: ["42", "36", "48", "54"], javob: "42" },
  { savol: "4! + 5!/4! = ?", variantlar: ["29", "24", "34", "39"], javob: "29" },
  { savol: "(6! - 5!)/5! = ?", variantlar: ["5", "4", "6", "7"], javob: "5" },
  { savol: "4! + 5!/4! - 3! = ?", variantlar: ["23", "19", "21", "25"], javob: "23" },
  { savol: "12^0 = ?", variantlar: ["1", "0", "12", "144"], javob: "1" },
  { savol: "3^4 = ?", variantlar: ["81", "64", "27", "243"], javob: "81" },
  { savol: "5^3 = ?", variantlar: ["125", "25", "625", "115"], javob: "125" },
  { savol: "4^2 - 2^4 = ?", variantlar: ["0", "8", "16", "32"], javob: "0" },
  { savol: "12 * 2^3 = ?", variantlar: ["96", "72", "48", "144"], javob: "96" },
  { savol: "(2 * 3^3 - 6^2) : 9 = ?", variantlar: ["2", "3", "4", "5"], javob: "2" },
  { savol: "(4^3 - 6! : 4!) : 17 = ?", variantlar: ["2", "3", "4", "5"], javob: "2" },
  { savol: "(174 : 87 + 21)^3 - 8^2 = ?", variantlar: ["12127", "12000", "12200", "12100"], javob: "12127" },
  { savol: "(10^2 + 24^2)/26^2 = ?", variantlar: ["1", "2", "0.5", "1.5"], javob: "1" },
  { savol: "1^3 + 2^3 + 3^3 + 4^3 = ?", variantlar: ["100", "64", "81", "121"], javob: "100" },

  // 21-30. Tub ko'paytuvchilarga ajratish
  { savol: "72 sonini tub ko'paytuvchilarga ajrating.", variantlar: ["2^3 * 3^2", "2^2 * 3^3", "2^4 * 3^2", "2^3 * 3^3"], javob: "2^3 * 3^2" },
  { savol: "60 sonini tub ko'paytuvchilarga ajrating.", variantlar: ["2^2 * 3 * 5", "2 * 3^2 * 5", "2^3 * 3 * 5", "2^2 * 3^2 * 5"], javob: "2^2 * 3 * 5" },
  { savol: "196 sonini tub ko'paytuvchilarga ajrating.", variantlar: ["2^2 * 7^2", "2^3 * 7^2", "2^2 * 7^3", "2 * 7^3"], javob: "2^2 * 7^2" },
  { savol: "180 sonini tub ko'paytuvchilarga ajrating.", variantlar: ["2^2 * 3^2 * 5", "2^3 * 3^2 * 5", "2^2 * 3 * 5^2", "2 * 3^2 * 5^2"], javob: "2^2 * 3^2 * 5" },
  { savol: "270 sonini tub ko'paytuvchilarga ajrating.", variantlar: ["2 * 3^3 * 5", "2^2 * 3^3 * 5", "2 * 3^2 * 5^2", "2^3 * 3^3 * 5"], javob: "2 * 3^3 * 5" },
  { savol: "720 sonini tub ko'paytuvchilarga ajrating.", variantlar: ["2^4 * 3^2 * 5", "2^3 * 3^3 * 5", "2^5 * 3^2 * 5", "2^4 * 3 * 5^2"], javob: "2^4 * 3^2 * 5" },
  { savol: "1440 sonini tub ko'paytuvchilarga ajrating.", variantlar: ["2^5 * 3^2 * 5", "2^4 * 3^3 * 5", "2^6 * 3^2 * 5", "2^5 * 3 * 5^2"], javob: "2^5 * 3^2 * 5" },
  { savol: "900 sonini tub ko'paytuvchilarga ajrating.", variantlar: ["2^2 * 3^2 * 5^2", "2^3 * 3^2 * 5^2", "2^2 * 3^3 * 5^2", "2^2 * 3^2 * 5^3"], javob: "2^2 * 3^2 * 5^2" },
  { savol: "1001 sonini tub ko'paytuvchilarga ajrating.", variantlar: ["7 * 11 * 13", "7 * 13 * 17", "11 * 13 * 17", "7 * 11 * 17"], javob: "7 * 11 * 13" },

  // 31-40. EKUB
  { savol: "48 va 60 sonlarining EKUBini toping.", variantlar: ["12", "6", "24", "18"], javob: "12" },
  { savol: "72 va 192 sonlarining EKUBini toping.", variantlar: ["24", "12", "36", "48"], javob: "24" },
  { savol: "200 va 360 sonlarining EKUBini toping.", variantlar: ["40", "20", "80", "60"], javob: "40" },
  { savol: "84 va 350 sonlarining EKUBini toping.", variantlar: ["14", "7", "21", "28"], javob: "14" },
  { savol: "121 va 154 sonlarining EKUBini toping.", variantlar: ["11", "22", "33", "44"], javob: "11" },
  { savol: "1440 va 1200 sonlarining EKUBini toping.", variantlar: ["240", "120", "360", "480"], javob: "240" },
  { savol: "1001 va 3080 sonlarining EKUBini toping.", variantlar: ["77", "11", "91", "143"], javob: "77" },
  { savol: "24, 36 va 80 sonlarining EKUBini toping.", variantlar: ["4", "2", "8", "12"], javob: "4" },

  { savol: "120, 96 va 180 sonlarining EKUBini toping.", variantlar: ["12", "6", "24", "18"], javob: "12" },
  { savol: "36, 180, 276 va 420 sonlarining EKUBini toping.", variantlar: ["12", "6", "24", "18"], javob: "12" },

  // 41-50. EKUK
  { savol: "6 va 28 sonlarining EKUKini toping.", variantlar: ["84", "42", "168", "56"], javob: "84" },
  { savol: "48 va 45 sonlarining EKUKini toping.", variantlar: ["720", "360", "1080", "1440"], javob: "720" },
  { savol: "36 va 21 sonlarining EKUKini toping.", variantlar: ["252", "126", "378", "504"], javob: "252" },
  { savol: "40 va 24 sonlarining EKUKini toping.", variantlar: ["120", "60", "240", "180"], javob: "120" },
  { savol: "52 va 65 sonlarining EKUKini toping.", variantlar: ["260", "130", "390", "520"], javob: "260" },
  { savol: "120 va 144 sonlarining EKUKini toping.", variantlar: ["720", "360", "1080", "1440"], javob: "720" },
  { savol: "35 va 42 sonlarining EKUKini toping.", variantlar: ["210", "105", "315", "420"], javob: "210" },
  { savol: "12, 18 va 45 sonlarining EKUKini toping.", variantlar: ["180", "90", "270", "360"], javob: "180" },
  { savol: "25, 40 va 12 sonlarining EKUKini toping.", variantlar: ["600", "300", "900", "1200"], javob: "600" },
  { savol: "100, 120 va 250 sonlarining EKUKini toping.", variantlar: ["3000", "1500", "4500", "6000"], javob: "3000" },

  // 57-68. EKUB va EKUK masalalari
  { savol: "12 va 16 sonlarining EKUB va EKUK yig'indisini toping.", variantlar: ["52", "48", "56", "44"], javob: "52" },
  { savol: "24 va 30 sonlarining EKUKi 100 dan nechaga kam?", variantlar: ["20", "10", "30", "40"], javob: "20" },
  { savol: "20 va 24 sonlarining EKUKining EKUBiga nisbatini toping.", variantlar: ["30", "24", "36", "42"], javob: "30" },
  { savol: "42 va 154 sonlarining EKUKining EKUBiga nisbatini toping.", variantlar: ["33", "22", "44", "55"], javob: "33" },
  { savol: "210 va 280 sonlarining EKUKining EKUBiga nisbatini toping.", variantlar: ["12", "8", "16", "24"], javob: "12" },
  { savol: "Elibekda 16 ta qalam va 24 ta daftar bor. U daftar va qalamlarni do'stlariga teng bo'lib bermoqchi. U eng ko'pi bilan nechta do'stiga bera oladi?", variantlar: ["8", "6", "4", "12"], javob: "8" },
  { savol: "To'g'ri to'rtburchak shaklidagi bog'ning eni va bo'yi 120m va 106m. Bog' chegarasi bo'ylab bir xil masofada chiroqlar o'rnatildi. Chiroqlar orasidagi masofa eng ko'pi bilan necha metr?", variantlar: ["2", "4", "6", "8"], javob: "2" },
  { savol: "To'g'ri to'rtburchakning tomonlari 48 va 64. Uni kamida nechta bir xil kvadrat bilan qoplash mumkin?", variantlar: ["12", "8", "16", "24"], javob: "12" },
  { savol: "Eni, bo'yi va balandligi 12, 6 va 4 bo'lgan idishga kub shaklidagi qutilar to'ldirilmoqda. Eng kamida nechta quti ketadi?", variantlar: ["12", "8", "16", "24"], javob: "12" },
  { savol: "Sinfda 16 o'g'il va 12 qiz bola bor. O'qituvchi ularni bir xil sondagi guruhlarga ajratmoqchi. Bir guruhda eng ko'pi bilan nechta o'quvchi bo'lishi mumkin?", variantlar: ["4", "2", "6", "8"], javob: "4" },
  { savol: "Hasan 18 ga karrali sonlarni, Husan 15 ga karrali sonlarni yozmoqda. Ular yozgan qatordagi birinchi umumiy sonni toping.", variantlar: ["90", "45", "60", "120"], javob: "90" },
  { savol: "Hasan 27 ga karrali sonlarni, Husan 45 ga karrali sonlarni yozmoqda. Ular yozgan qatordagi birinchi umumiy sonni toping.", variantlar: ["135", "90", "180", "225"], javob: "135" },

  // 63-75. Transport va oraliq masalalari
  { savol: "Avtobus bekatidan A yo'nalishli avtobuslar har 24 minutda, B yo'nalishli avtobuslar har 18 minutda jo'naydi. Soat 11:00 da birga jo'nashgan bo'lsa, keyingi safar soat nechada birga jo'nashadi?", variantlar: ["12:12", "12:00", "11:72", "12:24"], javob: "12:12" },
  { savol: "Avtobus bekatidan A yo'nalishli avtobuslar har 15 minutda, B yo'nalishli avtobuslar har 16 minutda jo'naydi. Soat 12:00 da birga jo'nashgan bo'lsa, keyingi safar soat nechada birga jo'nashadi?", variantlar: ["16:00", "15:00", "14:00", "13:00"], javob: "16:00" },
  { savol: "Alisherning qadami 60 sm, akasiniki 72 sm.Bir joydan boshlashsa, qancha masofada qadamlari birinchi marta ustma-ust tushadi?", variantlar: ["360 sm", "300 sm", "420 sm", "480 sm"], javob: "360 sm" },
  { savol: "[8; 25] kesmada 21 bilan o'zaro tub bo'lgan sonlar nechta?", variantlar: ["12", "10", "14", "16"], javob: "12" },
  { savol: "[3; 18] kesmada 15 bilan o'zaro tub bo'lgan sonlar nechta?", variantlar: ["12", "10", "14", "16"], javob: "12" },
  { savol: "[15; 30] kesmada 32 bilan o'zaro tub bo'lgan sonlar nechta?", variantlar: ["8", "6", "10", "12"], javob: "8" },
  { savol: "[12; 30] kesmada 36 bilan o'zaro tub bo'lgan sonlar nechta?", variantlar: ["11", "9", "13", "15"], javob: "11" },
  { savol: "[7; 25] kesmada 22 bilan o'zaro tub bo'lgan sonlar nechta?", variantlar: ["10", "8", "12", "14"], javob: "10" },
  { savol: "[4; 8] kesmada o'zaro tub sonlar juftliklari sonini toping.", variantlar: ["6", "4", "8", "10"], javob: "6" },
  { savol: "[3; 6] kesmada o'zaro tub sonlar juftliklari sonini toping.", variantlar: ["7", "5", "9", "11"], javob: "7" },
  { savol: "[12; 15] kesmada o'zaro tub sonlar juftliklari sonini toping.", variantlar: ["6", "4", "8", "10"], javob: "6" },
  { savol: "[20; 24] kesmada o'zaro tub sonlar juftliklari sonini toping.", variantlar: ["8", "6", "10", "12"], javob: "8" },
  { savol: "[30; 36] kesmada o'zaro tub sonlar juftliklari sonini toping.", variantlar: ["12", "10", "14", "16"], javob: "12" },

  // 76-88. EKUB va EKUK xossalari
  { savol: "EKUB(12;8) · EKUK(12;8) = ?", variantlar: ["96", "48", "72", "144"], javob: "96" },
  { savol: "EKUB(16;36) · EKUK(16;36) = ?", variantlar: ["576", "288", "864", "1152"], javob: "576" },
  { savol: "EKUB(25;60) · EKUK(25;60) = ?", variantlar: ["1500", "750", "2250", "3000"], javob: "1500" },
  { savol: "Ikki sonning EKUBi 6, EKUKi 72 bo'lsa, ularning ko'paytmasini toping.", variantlar: ["432", "216", "648", "864"], javob: "432" },
  { savol: "Ikki sonning EKUBi 15, EKUKi 135 bo'lsa, ularning ko'paytmasini toping.", variantlar: ["2025", "1012.5", "4050", "6075"], javob: "2025" },
  { savol: "Ikki sonning ko'paytmasi 720 ga, EKUKi 120 ga teng bo'lsa, EKUBini toping.", variantlar: ["6", "4", "8", "12"], javob: "6" },
  { savol: "Ikki sonning ko'paytmasi 2400 ga, EKUKi 300 ga teng bo'lsa, EKUBini toping.", variantlar: ["8", "6", "10", "12"], javob: "8" },
  { savol: "Ikki sonning ko'paytmasi 864 ga, EKUKi 72 ga teng bo'lsa, EKUBini toping.", variantlar: ["12", "6", "18", "24"], javob: "12" },
  { savol: "Ikki sonning ko'paytmasi 84 ga, EKUKi 42 ga teng bo'lsa, EKUBini toping.", variantlar: ["2", "4", "6", "8"], javob: "2" },
  { savol: "Ikki sonning ko'paytmasi 72 ga, EKUKi 36 ga teng bo'lsa, EKUBini toping.", variantlar: ["2", "4", "6", "8"], javob: "2" },
  { savol: "O'zaro tub sonlarning EKUKi 84 ga teng bo'lsa, ularning ko'paytmasini toping.", variantlar: ["84", "42", "168", "252"], javob: "84" },
  { savol: "x, y, p, t turli tub sonlar. a = x^3 y p^2, b = x^2 p t^3 sonlarining EKUBi va EKUKini toping.", variantlar: ["x^2 p va x^3 y p^2 t^3", "x^2 p t va x^3 y p^2 t^3", "x^2 p^2 va x^3 y p t^3", "x^2 p t^2 va x^3 y p^2 t"], javob: "x^2 p va x^3 y p^2 t^3" },
  { savol: "x, t, k, m, n turli tub sonlar. a = x^4 t^3 k^2 m, b = t^2 k m^3 n sonlarining EKUBi va EKUKini toping.", variantlar: ["t^2 k m va x^4 t^3 k^2 m^3 n", "t^2 k m^2 va x^4 t^3 k^2 m^3 n", "t^2 k^2 m va x^4 t^3 k^2 m^3 n", "t^2 k m n va x^4 t^3 k^2 m^3"], javob: "t^2 k m va x^4 t^3 k^2 m^3 n" },
  { savol: "O'zaro tub sonlar juftligini hosil qilish uchun 330 va 420 sonlarining har birini qanday natural songa bo'lish kerak?", variantlar: ["30", "10", "20", "40"], javob: "30" },

  // 89-100. Tenglamalar sistemalari
  { savol: "O'zaro tub sonlar juftligini hosil qilish uchun 125 va 240 sonlarining har birini qanday natural songa bo'lish kerak?", variantlar: ["5", "10", "15", "20"], javob: "5" },
  { savol: "EKUK(2^n; 5^n) = 100 bo'lsa, n ning qiymatini toping.", variantlar: ["2", "1", "3", "4"], javob: "2" },
  { savol: "EKUB(x; y) = 12 va x + y = 96 bo'lgan x, y natural sonlarni toping.", variantlar: ["12 va 84", "24 va 72", "36 va 60", "48 va 48"], javob: "12 va 84" },
  { savol: "EKUB(x; y) = 15 va x + y = 150 bo'lgan x, y natural sonlarni toping.", variantlar: ["15 va 135", "30 va 120", "45 va 105", "60 va 90"], javob: "15 va 135" },
  { savol: "EKUB(x; y) = 11 va x + y = 99 bo'lgan x, y natural sonlarni toping.", variantlar: ["11 va 88", "22 va 77", "33 va 66", "44 va 55"], javob: "11 va 88" },
  { savol: "EKUB(x; y) = 20 va x + y = 140 bo'lgan x, y natural sonlarni toping.", variantlar: ["20 va 120", "40 va 100", "60 va 80", "70 va 70"], javob: "20 va 120" },
  { savol: "EKUB(x; y) = 9 va x + y = 99 bo'lgan x, y natural sonlarni toping.", variantlar: ["9 va 90", "18 va 81", "27 va 72", "36 va 63"], javob: "9 va 90" },
  { savol: "EKUK(x; y) = 72 va xy = 432 bo'lgan x, y natural sonlarni toping.", variantlar: ["6 va 72", "8 va 54", "9 va 48", "12 va 36"], javob: "6 va 72" },
  { savol: "EKUK(x; y) = 24 va xy = 48 bo'lgan x, y natural sonlarni toping.", variantlar: ["4 va 12", "6 va 8", "3 va 16", "2 va 24"], javob: "6 va 8" },
  { savol: "EKUK(x; y) = 160 va xy = 640 bo'lgan x, y natural sonlarni toping.", variantlar: ["8 va 80", "10 va 64", "16 va 40", "20 va 32"], javob: "8 va 80" },
  { savol: "EKUK(x; y) = 180 va xy = 1800 bo'lgan x, y natural sonlarni toping.", variantlar: ["10 va 180", "12 va 150", "15 va 120", "18 va 100"], javob: "12 va 150" },
  { savol: "EKUK(x; y) = 240 va xy = 1920 bo'lgan x, y natural sonlarni toping.", variantlar: ["16 va 120", "20 va 96", "24 va 80", "30 va 64"], javob: "16 va 120" }
  ],





  theme3: [
  // 1-10. Natural bo'luvchilar soni
  { savol: "36 sonining natural bo'luvchilari sonini toping.", variantlar: ["9", "8", "10", "12"], javob: "9" },
  { savol: "100 sonining natural bo'luvchilari sonini toping.", variantlar: ["9", "8", "10", "12"], javob: "9" },
  { savol: "96 sonining natural bo'luvchilari sonini toping.", variantlar: ["12", "10", "14", "16"], javob: "12" },
  { savol: "144 sonining natural bo'luvchilari sonini toping.", variantlar: ["15", "12", "18", "21"], javob: "15" },
  { savol: "160 sonining natural bo'luvchilari sonini toping.", variantlar: ["12", "10", "14", "16"], javob: "12" },
  { savol: "248 sonining natural bo'luvchilari sonini toping.", variantlar: ["8", "6", "10", "12"], javob: "8" },
  { savol: "196 sonining natural bo'luvchilari sonini toping.", variantlar: ["9", "8", "10", "12"], javob: "9" },
  { savol: "120 sonining natural bo'luvchilari sonini toping.", variantlar: ["16", "14", "18", "20"], javob: "16" },
  { savol: "240 sonining natural bo'luvchilari sonini toping.", variantlar: ["20", "18", "22", "24"], javob: "20" },
  { savol: "360 sonining natural bo'luvchilari sonini toping.", variantlar: ["24", "22", "26", "28"], javob: "24" },

  // 11-20. Natural bo'luvchilar yig'indisi
  { savol: "40 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["90", "80", "100", "110"], javob: "90" },
  { savol: "12 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["28", "24", "32", "36"], javob: "28" },
  { savol: "48 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["124", "120", "128", "132"], javob: "124" },
  { savol: "13 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["14", "13", "15", "16"], javob: "14" },
  { savol: "60 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["168", "160", "172", "176"], javob: "168" },
  { savol: "56 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["120", "112", "124", "128"], javob: "120" },
  { savol: "240 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["744", "720", "768", "792"], javob: "744" },
  { savol: "144 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["403", "400", "406", "410"], javob: "403" },
  { savol: "105 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["192", "186", "198", "204"], javob: "192" },
  { savol: "180 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["546", "540", "552", "558"], javob: "546" },
  { savol: "550 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["1116", "1100", "1120", "1130"], javob: "1116" },
  { savol: "231 sonining natural bo'luvchilari yig'indisini toping.", variantlar: ["384", "380", "388", "392"], javob: "384" },

  // 21-30. Umumiy natural bo'luvchilar soni
  { savol: "120 va 144 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["8", "6", "10", "12"], javob: "8" },
  { savol: "180 va 250 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "270 va 240 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["8", "6", "10", "12"], javob: "8" },
  { savol: "135 va 195 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "432 va 576 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["15", "12", "18", "21"], javob: "15" },
  { savol: "196 va 441 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["3", "2", "4", "5"], javob: "3" },
  { savol: "1001 va 1430 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "140, 180 va 220 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["6", "4", "8", "10"], javob: "6" },
  { savol: "80, 112 va 144 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["5", "4", "6", "8"], javob: "5" },
  { savol: "162, 180 va 252 sonlarining umumiy natural bo'luvchilari sonini toping.", variantlar: ["6", "4", "8", "10"], javob: "6" },

  // 31-46. Ko'paytmalar va darajalar
  { savol: "48·70·144 ko'paytmasining natural bo'luvchilari sonini toping.", variantlar: ["120", "100", "140", "160"], javob: "120" },
  { savol: "100·198·324 ko'paytmasining natural bo'luvchilari sonini toping.", variantlar: ["108", "96", "120", "132"], javob: "108" },
  { savol: "4·5·6·7·8·9·10 ko'paytmasining natural bo'luvchilari sonini toping.", variantlar: ["192", "180", "200", "210"], javob: "192" },
  { savol: "5·10·15·20·25·30·35·40 ko'paytmasining natural bo'luvchilari sonini toping.", variantlar: ["480", "450", "500", "520"], javob: "480" },
  { savol: "2³·3ⁿ ning natural bo'luvchilari soni 20 ta bo'lsa, n ni toping.", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "3⁴·5ⁿ ning natural bo'luvchilari soni 15 ta bo'lsa, n ni toping.", variantlar: ["2", "1", "3", "4"], javob: "2" },
  { savol: "3³·2²·5ⁿ ning natural bo'luvchilari soni 36 ta bo'lsa, n ni toping.", variantlar: ["3", "2", "4", "5"], javob: "3" },
  { savol: "7²·11³·13ⁿ ning natural bo'luvchilari soni 48 ta bo'lsa, n ni toping.", variantlar: ["2", "1", "3", "4"], javob: "2" },
  { savol: "19²·13⁴·11ⁿ ning natural bo'luvchilari soni 45 ta bo'lsa, n ni toping.", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "1·2·3·4·5·6......242·243 ko'paytma 3 ning eng katta darajasini toping.", variantlar: ["117", "115", "119", "121"], javob: "117" },
  { savol: "1·2·3......124·125 ko'paytma 5 ning eng katta darajasini toping.", variantlar: ["31", "30", "32", "33"], javob: "31" },
  { savol: "1·2·3......146·147 ko'paytma 7 ning eng katta darajasini toping.", variantlar: ["24", "23", "25", "26"], javob: "24" },
  { savol: "1·2·3......120·121 ko'paytma 11 ning eng katta darajasini toping.", variantlar: ["12", "11", "13", "14"], javob: "12" },
  { savol: "65·66·67......127·128 ko'paytma 2 ning eng katta darajasini toping.", variantlar: ["31", "30", "32", "33"], javob: "31" },
  { savol: "31·32·33......98·99 ko'paytma 3 ning eng katta darajasini toping.", variantlar: ["16", "15", "17", "18"], javob: "16" },
  { savol: "41·42·43......144·145 ko'paytma 5 ning eng katta darajasini toping.", variantlar: ["12", "11", "13", "14"], javob: "12" },

  // 56-65. Nollar soni
  { savol: "1·2·3......99·100 ko'paytma nechta nol bilan tugaydi?", variantlar: ["24", "23", "25", "26"], javob: "24" },
  { savol: "1·2·3......199·200 ko'paytma nechta nol bilan tugaydi?", variantlar: ["49", "48", "50", "51"], javob: "49" },
  { savol: "1·2·3......124·125 ko'paytma nechta nol bilan tugaydi?", variantlar: ["31", "30", "32", "33"], javob: "31" },
  { savol: "1·2·3......624·625 ko'paytma nechta nol bilan tugaydi?", variantlar: ["156", "155", "157", "158"], javob: "156" },
  { savol: "1·2·3......249·250 ko'paytma nechta nol bilan tugaydi?", variantlar: ["62", "61", "63", "64"], javob: "62" },

  // 66-75. Oraliq masalalari
  { savol: "21·22·23......49·50 ko'paytma nechta nol bilan tugaydi?", variantlar: ["7", "6", "8", "9"], javob: "7" },
  { savol: "41·42·43......119·120 ko'paytma nechta nol bilan tugaydi?", variantlar: ["9", "8", "10", "11"], javob: "9" },
  { savol: "101·102·103......174·175 ko'paytma nechta nol bilan tugaydi?", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "81·82·83......199·200 ko'paytma nechta nol bilan tugaydi?", variantlar: ["12", "11", "13", "14"], javob: "12" },
  { savol: "126·127·128......624·625 ko'paytma nechta nol bilan tugaydi?", variantlar: ["48", "47", "49", "50"], javob: "48" },
  { savol: "1 dan 100 gacha natural sonlar orasida nechtasi 3 ga bo'linadi?", variantlar: ["33", "32", "34", "35"], javob: "33" },
  { savol: "1 dan 400 gacha natural sonlar orasida nechtasi 5 ga bo'linadi?", variantlar: ["80", "79", "81", "82"], javob: "80" },
  { savol: "1 dan 300 gacha natural sonlar orasida nechtasi 7 ga bo'linadi?", variantlar: ["42", "41", "43", "44"], javob: "42" },
  { savol: "1 dan 60 gacha natural sonlar orasida nechtasi 3 ga bo'linmaydi?", variantlar: ["40", "39", "41", "42"], javob: "40" },
  { savol: "1 dan 40 gacha natural sonlar orasida nechtasi 5 ga bo'linmaydi?", variantlar: ["32", "31", "33", "34"], javob: "32" },
  { savol: "101 dan 300 gacha natural sonlar orasida nechtasi 10 ga bo'linadi?", variantlar: ["20", "19", "21", "22"], javob: "20" },
  { savol: "41 dan 100 gacha natural sonlar orasida nechtasi 8 ga bo'linadi?", variantlar: ["8", "7", "9", "10"], javob: "8" },
  { savol: "101 dan 200 gacha natural sonlar orasida nechtasi 5 ga bo'linmaydi?", variantlar: ["80", "79", "81", "82"], javob: "80" },
  { savol: "51 dan 170 gacha natural sonlar orasida nechtasi 10 ga bo'linmaydi?", variantlar: ["108", "107", "109", "110"], javob: "108" },

  // 76-88. Turli masalalar
  { savol: "1 dan 200 gacha natural sonlar orasida nechtasi 4 va 6 ga bo'linadi?", variantlar: ["16", "15", "17", "18"], javob: "16" },
  { savol: "1 dan 200 gacha natural sonlar orasida nechtasi 6, 9 va 10 ga bo'linadi?", variantlar: ["3", "2", "4", "5"], javob: "3" },
  { savol: "1 dan 400 gacha natural sonlar orasida nechtasi 8 va 10 ga bo'linadi?", variantlar: ["10", "9", "11", "12"], javob: "10" },
  { savol: "1 dan 300 gacha natural sonlar orasida nechtasi 4, 6 va 10 ga bo'linadi?", variantlar: ["5", "4", "6", "7"], javob: "5" },
  { savol: "1 dan 200 gacha natural sonlar orasida nechtasi 12 va 16 ga bo'linadi?", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "Ko'paytmasi 48 ga teng bo'lgan nechta natural sonlar juftligi mavjud?", variantlar: ["5", "4", "6", "7"], javob: "5" },
  { savol: "Ko'paytmasi 240 ga teng bo'lgan nechta natural sonlar juftligi mavjud?", variantlar: ["10", "9", "11", "12"], javob: "10" },
  { savol: "Ko'paytmasi 576 ga teng bo'lgan nechta natural sonlar juftligi mavjud?", variantlar: ["12", "11", "13", "14"], javob: "12" },
  { savol: "100, 121, 120, 144 va 154 sonlardan nechtasining natural bo'luvchilari soni toq?", variantlar: ["3", "2", "4", "5"], javob: "3" },
  { savol: "96, 125, 196, 256 va 324 sonlardan nechtasining natural bo'luvchilari soni toq?", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "Dastlabki 100 ta tub son ko'paytmasi necha bilan tugaydi?", variantlar: ["0", "2", "4", "6"], javob: "0" },
  { savol: "2, 3, 4 va 5 ga qoldiqsiz bo'linadigan eng kichik uch xonali sonni toping.", variantlar: ["120", "60", "180", "240"], javob: "120" },
  { savol: "3, 4, 5, 6 va 7 sonlariga qoldiqsiz bo'linadigan uch xonali sonlar nechta?", variantlar: ["1", "2", "3", "4"], javob: "1" },

  // Iqtidorlilar uchun qo'shimcha masalalar
  { savol: "1 dan 300 gacha natural sonlar orasida nechtasi 3 ga va 5 ga bir vaqtda bo'linmaydi?", variantlar: ["160", "159", "161", "162"], javob: "160" },
  { savol: "30! soni nechta 0 bilan tugaydi?", variantlar: ["7", "6", "8", "9"], javob: "7" },
  { savol: "1·2·3...99·100 ko'paytma 10 ning eng katta darajasini toping.", variantlar: ["24", "23", "25", "26"], javob: "24" },
  { savol: "123!+124! soni nechta 0 bilan tugaydi?", variantlar: ["28", "27", "29", "30"], javob: "28" },
  { savol: "1·2·3...99·100 ko'paytma 4 ning eng katta darajasini toping.", variantlar: ["48", "47", "49", "50"], javob: "48" },
  { savol: "1·2·3...124·125 ko'paytma 80 ning eng katta darajasini toping.", variantlar: ["15", "14", "16", "17"], javob: "15" },
  { savol: "1·2·3...124·125 ko'paytma 45 ning eng katta darajasini toping.", variantlar: ["12", "11", "13", "14"], javob: "12" },
  { savol: "1 dan 200 gacha natural sonlar orasida nechtasi 2 ga ham, 5 ga ham bo'linmaydi?", variantlar: ["80", "79", "81", "82"], javob: "80" },
  { savol: "n toq natural sonning bo'luvchilar soni 20 ta bo'lsa, 4n ning natural bo'luvchilar sonini toping.", variantlar: ["40", "38", "42", "44"], javob: "40" },
  { savol: "a va b o'zaro tub sonlar. a ning bo'luvchilari soni 18 ta, b ning bo'luvchilari soni 20 ta. ab ning bo'luvchilari soni nechta?", variantlar: ["360", "38", "380", "400"], javob: "360" },
  { savol: "30 ga bo'linadigan va aniq 30 ta natural bo'luvchiga ega bo'lgan sonni toping.", variantlar: ["720", "360", "1080", "1440"], javob: "720" },
  { savol: "42 ga bo'linadigan va aniq 42 ta natural bo'luvchiga ega bo'lgan sonni toping.", variantlar: ["2016", "1008", "3024", "4032"], javob: "2016" }
  
  ],

  theme4: [
  // 1-10. Bo'linma va qoldiq
  { savol: "235 sonini 16 ga bo'lgandagi bo'linma va qoldiqni toping.", variantlar: ["14 va 11", "15 va 10", "13 va 12", "14 va 10"], javob: "14 va 11" },
  { savol: "444 sonini 44 ga bo'lgandagi bo'linma va qoldiqni toping.", variantlar: ["10 va 4", "9 va 8", "11 va 0", "10 va 6"], javob: "10 va 4" },
  { savol: "590 sonini 15 ga bo'lgandagi bo'linma va qoldiqni toping.", variantlar: ["39 va 5", "38 va 10", "40 va 0", "39 va 6"], javob: "39 va 5" },
  { savol: "125 sonini qandaydir songa bo'lganda bo'linma 15 ga, qoldiq 5 ga teng. Bo'luvchini toping.", variantlar: ["8", "7", "9", "10"], javob: "8" },
  { savol: "169 sonini qandaydir songa bo'lganda bo'linma 10 ga, qoldiq 9 ga teng. Bo'luvchini toping.", variantlar: ["16", "15", "17", "18"], javob: "16" },
  { savol: "327 sonini qandaydir songa bo'lganda bo'linma 18 ga, qoldiq 3 ga teng. Bo'luvchini toping.", variantlar: ["18", "17", "19", "20"], javob: "18" },
  { savol: "244 sonini qandaydir songa bo'lganda bo'linma 30 ga, qoldiq 4 ga teng. Bo'luvchini toping.", variantlar: ["8", "7", "9", "10"], javob: "8" },
  { savol: "Bo'luvchi 15 ga, bo'linma 17 ga va qoldiq 5 ga teng bo'lsa, bo'linuvchini toping.", variantlar: ["260", "255", "265", "270"], javob: "260" },
  { savol: "Bo'luvchi 21 ga, bo'linma 12 ga va qoldiq 8 ga teng bo'lsa, bo'linuvchini toping.", variantlar: ["260", "255", "265", "270"], javob: "260" },
  { savol: "Bo'luvchi 25 ga, bo'linma 11 ga va qoldiq 7 ga teng bo'lsa, bo'linuvchini toping.", variantlar: ["282", "280", "284", "286"], javob: "282" },

  // 11-20. Tengliklar qoldiqli bo'lishni ifodalaydimi?
  { savol: "48 = 13·3 + 9 tenglik qoldiqli bo'lishni ifodalaydimi?", variantlar: ["Yo'q, qoldiq bo'luvchidan katta", "Ha", "Yo'q, qoldiq manfiy", "Yo'q, tenglik noto'g'ri"], javob: "Yo'q, qoldiq bo'luvchidan katta" },
  { savol: "60 = 16·4 - 4 tenglik qoldiqli bo'lishni ifodalaydimi?", variantlar: ["Yo'q, qoldiq manfiy bo'lmaydi", "Ha", "Yo'q, qoldiq bo'luvchidan katta", "Yo'q, tenglik noto'g'ri"], javob: "Yo'q, qoldiq manfiy bo'lmaydi" },
  { savol: "30 = 7·5 - 5 tenglik qoldiqli bo'lishni ifodalaydimi?", variantlar: ["Yo'q, qoldiq manfiy bo'lmaydi", "Ha", "Yo'q, qoldiq bo'luvchidan katta", "Yo'q, tenglik noto'g'ri"], javob: "Yo'q, qoldiq manfiy bo'lmaydi" },
  { savol: "65 = 6·10 + 5 tenglik qoldiqli bo'lishni ifodalaydimi?", variantlar: ["Ha", "Yo'q, qoldiq bo'luvchidan katta", "Yo'q, qoldiq manfiy", "Yo'q, tenglik noto'g'ri"], javob: "Ha" },

  // 21-30. Ko'paytmalarni bo'lgandagi qoldiq
  { savol: "11·13·21·25·29 ni 6 ga bo'lgandagi qoldiqni toping.", variantlar: ["1", "2", "3", "4"], javob: "1" },
  { savol: "15·17·23·27·31 ni 7 ga bo'lgandagi qoldiqni toping.", variantlar: ["2", "1", "3", "4"], javob: "2" },
  { savol: "12·32·19·47·53 ni 10 ga bo'lgandagi qoldiqni toping.", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "37·49·59·69·79 ni 13 ga bo'lgandagi qoldiqni toping.", variantlar: ["8", "7", "9", "10"], javob: "8" },
  { savol: "54·67·75·120·130 ni 11 ga bo'lgandagi qoldiqni toping.", variantlar: ["10", "9", "8", "7"], javob: "10" },
  { savol: "35·27·65·45·27 ni 8 ga bo'lgandagi qoldiqni toping.", variantlar: ["7", "6", "5", "4"], javob: "7" },
  { savol: "22²·25³ ni 6 ga bo'lgandagi qoldiqni toping.", variantlar: ["4", "3", "5", "2"], javob: "4" },
  { savol: "45²·33³ ni 7 ga bo'lgandagi qoldiqni toping.", variantlar: ["5", "4", "6", "3"], javob: "5" },
  { savol: "23³·99³ ni 7 ga bo'lgandagi qoldiqni toping.", variantlar: ["1", "2", "3", "4"], javob: "1" },
  { savol: "(29·41)³ ni 11 ga bo'lgandagi qoldiqni toping.", variantlar: ["5", "4", "6", "7"], javob: "5" },

  // 31-41. Qoldiq masalalari
  { savol: "Sonni 10 ga bo'lganda 7 qoldiq qoladi. Bu sonni 5 ga bo'lgandagi qoldiqni toping.", variantlar: ["2", "1", "3", "4"], javob: "2" },
  { savol: "Sonni 18 ga bo'lganda 15 qoldiq qoladi. Bu sonni 6 ga bo'lgandagi qoldiqni toping.", variantlar: ["3", "2", "4", "5"], javob: "3" },
  { savol: "Sonni 24 ga bo'lganda 17 qoldiq qoladi. Bu sonni 12 ga bo'lgandagi qoldiqni toping.", variantlar: ["5", "4", "6", "7"], javob: "5" },
  { savol: "Sonni 300 ga bo'lganda 125 qoldiq qoladi. Bu sonni 30 ga bo'lgandagi qoldiqni toping.", variantlar: ["5", "4", "6", "7"], javob: "5" },
  { savol: "Sonni 240 ga bo'lganda 199 qoldiq qoladi. Bu sonni 10 ga bo'lgandagi qoldiqni toping.", variantlar: ["9", "8", "7", "6"], javob: "9" },
  { savol: "a sonini 25 ga bo'lganda 24 qoldiq qoladi. a ni 20 ga bo'lgandagi qoldiqni toping.", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "a sonini 30 ga bo'lganda 20 qoldiq qoladi. a ni 15 ga bo'lgandagi qoldiqni toping.", variantlar: ["5", "4", "6", "7"], javob: "5" },
  { savol: "a sonini 40 ga bo'lganda 30 qoldiq qoladi. a ni 8 ga bo'lgandagi qoldiqni toping.", variantlar: ["6", "5", "7", "4"], javob: "6" },
  { savol: "a sonini 75 ga bo'lganda 18 qoldiq qoladi. a ni 9 ga bo'lgandagi qoldiqni toping.", variantlar: ["0", "1", "2", "3"], javob: "0" },
  { savol: "a sonini 50 ga bo'lganda 49 qoldiq qoladi. a ni 4 ga bo'lgandagi qoldiqni toping.", variantlar: ["1", "2", "3", "0"], javob: "1" },
  { savol: "Ikki sonni 7 ga bo'lganda mos ravishda 3 va 5 qoldiq qoladi. Ko'paytmani 7 ga bo'lgandagi qoldiqni toping.", variantlar: ["1", "2", "3", "4"], javob: "1" },

  // 54-55. Qoldiqlar teng
  { savol: "108, 146 va 241 sonlarining har birini birdan katta qanday natural songa bo'lganda qoldiqlar teng bo'ladi?", variantlar: ["19", "17", "18", "20"], javob: "19" },
  { savol: "100, 169 va 215 sonlarining har birini birdan katta qanday natural songa bo'lganda qoldiqlar teng bo'ladi?", variantlar: ["23", "21", "22", "24"], javob: "23" },

  // 56-65. Oxirgi raqam (ko'paytma)
  { savol: "36·57 ning oxirgi raqamini toping.", variantlar: ["2", "1", "3", "4"], javob: "2" },
  { savol: "12·13 ning oxirgi raqamini toping.", variantlar: ["6", "5", "7", "8"], javob: "6" },
  { savol: "14·28·12 ning oxirgi raqamini toping.", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "13·27·39 ning oxirgi raqamini toping.", variantlar: ["9", "8", "7", "6"], javob: "9" },
  { savol: "12·13·14 + 15·16·17 ning oxirgi raqamini toping.", variantlar: ["8", "7", "9", "6"], javob: "8" },
  { savol: "17·13·9 + 23·25·27 ning oxirgi raqamini toping.", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "16·18·12 - 7·5·13 ning oxirgi raqamini toping.", variantlar: ["1", "2", "3", "4"], javob: "1" },
  { savol: "27·29·41 - 57·13·11 ning oxirgi raqamini toping.", variantlar: ["8", "7", "9", "6"], javob: "8" },
  { savol: "16·19·12 - 15·13·11 ning oxirgi raqamini toping.", variantlar: ["3", "2", "4", "5"], javob: "3" },
  { savol: "28·36·16 - 19·17·16 ning oxirgi raqamini toping.", variantlar: ["8", "7", "9", "6"], javob: "8" },

  // 66-95. Darajalarning oxirgi raqami
  { savol: "2¹⁰⁰¹ ning oxirgi raqamini toping.", variantlar: ["2", "4", "6", "8"], javob: "2" },
  { savol: "2¹⁵⁰² ning oxirgi raqamini toping.", variantlar: ["4", "2", "6", "8"], javob: "4" },
  { savol: "52¹⁸⁵ ning oxirgi raqamini toping.", variantlar: ["2", "4", "6", "8"], javob: "2" },
  { savol: "1402⁵¹² ning oxirgi raqamini toping.", variantlar: ["6", "4", "2", "8"], javob: "6" },
  { savol: "3²⁰² ning oxirgi raqamini toping.", variantlar: ["9", "3", "7", "1"], javob: "9" },
  { savol: "3¹⁸⁰ ning oxirgi raqamini toping.", variantlar: ["1", "3", "7", "9"], javob: "1" },
  { savol: "13²⁵¹ ning oxirgi raqamini toping.", variantlar: ["7", "3", "9", "1"], javob: "7" },
  { savol: "523¹¹ ning oxirgi raqamini toping.", variantlar: ["7", "3", "9", "1"], javob: "7" },
  { savol: "8121 ning oxirgi raqamini toping.", variantlar: ["1", "3", "7", "9"], javob: "1" },
  { savol: "28503 ning oxirgi raqamini toping.", variantlar: ["3", "5", "7", "9"], javob: "3" },
  { savol: "888888 ning oxirgi raqamini toping.", variantlar: ["8", "6", "4", "2"], javob: "8" },
  { savol: "99999 ning oxirgi raqamini toping.", variantlar: ["9", "1", "3", "7"], javob: "9" },
  { savol: "29³⁰ ning oxirgi raqamini toping.", variantlar: ["1", "9", "3", "7"], javob: "1" },
  { savol: "1626364656 ning oxirgi raqamini toping.", variantlar: ["6", "4", "2", "8"], javob: "6" },
  { savol: "34⁴³ + 43³⁴ ning oxirgi raqamini toping.", variantlar: ["7", "5", "3", "9"], javob: "7" },
  { savol: "99¹⁰¹⁵ + 101⁵¹⁰¹⁶ ning oxirgi raqamini toping.", variantlar: ["0", "1", "9", "8"], javob: "0" },

  // 91-109. Murakkab ifodalar
  { savol: "21²⁰¹⁸ - 17¹⁷¹⁷ ning oxirgi raqamini toping.", variantlar: ["4", "2", "6", "8"], javob: "4" },
  { savol: "1·2·3...50 - 2·4·6...40 ning oxirgi raqamini toping.", variantlar: ["0", "2", "4", "6"], javob: "0" },
  { savol: "3¹²⁰ + 8¹²¹ ning oxirgi raqamini toping.", variantlar: ["9", "7", "1", "3"], javob: "9" },
  { savol: "4,5,6,9 sonlariga bo'linganda qoldiqlar bir xil bo'ladigan yuzdan katta eng kichik natural sonni toping.", variantlar: ["181", "179", "183", "185"], javob: "181" },
  { savol: "Sovg'alarni qutiga 2,3,4,5,6 tadan joylaganda har safar 1 ta ortib qoladi. Sovg'alar 100-150 ta orasida bo'lsa, nechta?", variantlar: ["121", "119", "123", "125"], javob: "121" },
  { savol: "Sovg'alarni qutiga 4,6,9 tadan joylaganda har safar 1 ta ortib qoladi. Sovg'alar 120-150 ta orasida bo'lsa, nechta?", variantlar: ["145", "143", "147", "149"], javob: "145" },
  { savol: "Konfetlarni qutiga 3,4,5,6 tadan joylashtirganda har safar 1 ta yetmay qoladi. Konfetlar soni kamida nechta?", variantlar: ["59", "61", "57", "63"], javob: "59" },
  { savol: "301⁵³⁰¹⁶ + 301⁶³⁰¹⁷ ning oxirgi raqamini toping.", variantlar: ["2", "4", "6", "8"], javob: "2" },
  { savol: "4¹⁰¹⁵ + 7¹⁰¹⁶ ning oxirgi raqamini toping.", variantlar: ["3", "5", "7", "9"], javob: "3" },
  { savol: "4·(3²¹ + 79⁹⁷) + 7 ning oxirgi raqamini toping.", variantlar: ["3", "5", "7", "9"], javob: "3" },
  { savol: "1·2·3...41 - 1·3·5...41 ning oxirgi raqamini toping.", variantlar: ["5", "3", "7", "9"], javob: "5" },
  { savol: "1·2·3...31 + 1·3·5...31 ning oxirgi raqamini toping.", variantlar: ["9", "7", "5", "3"], javob: "9" }

  ],





  theme5: [
    // 1-15. Kasrlarni qisqartiring
  { savol: "10/24 kasrini qisqartiring.", variantlar: ["5/12", "2/5", "3/8", "4/9"], javob: "5/12" },
  { savol: "14/35 kasrini qisqartiring.", variantlar: ["2/5", "3/7", "1/2", "4/9"], javob: "2/5" },
  { savol: "42/56 kasrini qisqartiring.", variantlar: ["3/4", "2/3", "5/8", "4/7"], javob: "3/4" },
  { savol: "12/30 kasrini qisqartiring.", variantlar: ["2/5", "3/8", "1/3", "4/9"], javob: "2/5" },
  { savol: "64/768 kasrini qisqartiring.", variantlar: ["1/12", "1/10", "1/8", "1/14"], javob: "1/12" },
  { savol: "48/576 kasrini qisqartiring.", variantlar: ["1/12", "1/10", "1/8", "1/14"], javob: "1/12" },
  { savol: "96/144 kasrini qisqartiring.", variantlar: ["2/3", "3/4", "4/5", "5/6"], javob: "2/3" },
  { savol: "48/360 kasrini qisqartiring.", variantlar: ["2/15", "1/7", "3/20", "4/25"], javob: "2/15" },
  { savol: "248/930 kasrini qisqartiring.", variantlar: ["4/15", "3/10", "5/18", "2/9"], javob: "4/15" },
  { savol: "222/370 kasrini qisqartiring.", variantlar: ["3/5", "2/3", "4/7", "5/9"], javob: "3/5" },
  { savol: "108/432 kasrini qisqartiring.", variantlar: ["1/4", "1/3", "2/5", "3/8"], javob: "1/4" },
  { savol: "210/294 kasrini qisqartiring.", variantlar: ["5/7", "3/4", "7/9", "4/5"], javob: "5/7" },
  { savol: "192/288 kasrini qisqartiring.", variantlar: ["2/3", "3/4", "4/5", "5/6"], javob: "2/3" },
  { savol: "924/1001 kasrini qisqartiring.", variantlar: ["12/13", "11/12", "13/14", "10/11"], javob: "12/13" },
  { savol: "2160/2520 kasrini qisqartiring.", variantlar: ["6/7", "5/6", "7/8", "4/5"], javob: "6/7" },

  // 16-25. Aralash kasrlarni noto'g'ri kasrga aylantiring
  { savol: "2 1/8 aralash kasrini noto'g'ri kasrga aylantiring.", variantlar: ["17/8", "15/8", "19/8", "13/8"], javob: "17/8" },
  { savol: "5 11/12 aralash kasrini noto'g'ri kasrga aylantiring.", variantlar: ["71/12", "69/12", "73/12", "67/12"], javob: "71/12" },
  { savol: "1 3/10 aralash kasrini noto'g'ri kasrga aylantiring.", variantlar: ["13/10", "11/10", "15/10", "17/10"], javob: "13/10" },
  { savol: "12 4/7 aralash kasrini noto'g'ri kasrga aylantiring.", variantlar: ["88/7", "86/7", "90/7", "84/7"], javob: "88/7" },
  { savol: "4 3/11 aralash kasrini noto'g'ri kasrga aylantiring.", variantlar: ["47/11", "45/11", "49/11", "43/11"], javob: "47/11" },
  { savol: "2 45/46 aralash kasrini noto'g'ri kasrga aylantiring.", variantlar: ["137/46", "135/46", "139/46", "133/46"], javob: "137/46" },

  // 26-35. Noto'g'ri kasrlarni aralash kasrga aylantiring
  { savol: "41/10 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["4 1/10", "3 11/10", "4 2/10", "5 1/10"], javob: "4 1/10" },
  { savol: "49/8 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["6 1/8", "5 9/8", "7 1/8", "6 2/8"], javob: "6 1/8" },
  { savol: "55/12 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["4 7/12", "5 5/12", "4 8/12", "5 7/12"], javob: "4 7/12" },
  { savol: "77/9 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["8 5/9", "7 14/9", "9 4/9", "8 6/9"], javob: "8 5/9" },
  { savol: "120/17 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["7 1/17", "6 18/17", "8 1/17", "7 2/17"], javob: "7 1/17" },
  { savol: "200/10 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["20", "19 10/10", "20 1/10", "21"], javob: "20" },
  { savol: "240/41 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["5 35/41", "6 34/41", "5 36/41", "6 35/41"], javob: "5 35/41" },
  { savol: "1000/33 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["30 10/33", "29 31/33", "31 7/33", "30 11/33"], javob: "30 10/33" },
  { savol: "1200/53 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["22 34/53", "21 47/53", "23 31/53", "22 35/53"], javob: "22 34/53" },
  { savol: "1001/101 noto'g'ri kasrini aralash kasrga aylantiring.", variantlar: ["9 92/101", "10 91/101", "9 93/101", "10 92/101"], javob: "9 92/101" },

  // 36-45. Kasrlarni umumiy maxrajga keltiring
  { savol: "5/6 va 7/8 kasrlarini umumiy maxrajga keltiring.", variantlar: ["20/24 va 21/24", "15/24 va 21/24", "20/24 va 14/24", "15/18 va 14/18"], javob: "20/24 va 21/24" },
  { savol: "3/10 va 11/15 kasrlarini umumiy maxrajga keltiring.", variantlar: ["9/30 va 22/30", "6/30 va 22/30", "9/30 va 20/30", "12/40 va 22/40"], javob: "9/30 va 22/30" },
  { savol: "12/35 va 5/14 kasrlarini umumiy maxrajga keltiring.", variantlar: ["24/70 va 25/70", "12/70 va 25/70", "24/70 va 20/70", "36/105 va 25/105"], javob: "24/70 va 25/70" },
  { savol: "31/48 va 17/18 kasrlarini umumiy maxrajga keltiring.", variantlar: ["93/144 va 136/144", "93/144 va 102/144", "124/144 va 136/144", "93/144 va 126/144"], javob: "93/144 va 136/144" },
  { savol: "5/11 va 7/9 kasrlarini umumiy maxrajga keltiring.", variantlar: ["45/99 va 77/99", "40/99 va 77/99", "45/99 va 70/99", "55/99 va 77/99"], javob: "45/99 va 77/99" },
  { savol: "16/21 va 5/28 kasrlarini umumiy maxrajga keltiring.", variantlar: ["64/84 va 15/84", "48/84 va 15/84", "64/84 va 20/84", "32/84 va 15/84"], javob: "64/84 va 15/84" },
  { savol: "4/65 va 22/39 kasrlarini umumiy maxrajga keltiring.", variantlar: ["12/195 va 110/195", "16/195 va 110/195", "12/195 va 130/195", "20/195 va 110/195"], javob: "12/195 va 110/195" },
  { savol: "5/42 va 7/112 kasrlarini umumiy maxrajga keltiring.", variantlar: ["40/336 va 21/336", "35/336 va 21/336", "40/336 va 24/336", "30/336 va 21/336"], javob: "40/336 va 21/336" },
  { savol: "3/32, 5/48 va 7/120 kasrlarini umumiy maxrajga keltiring.", variantlar: ["45/480, 50/480, 28/480", "45/480, 50/480, 35/480", "30/480, 50/480, 28/480", "45/480, 40/480, 28/480"], javob: "45/480, 50/480, 28/480" },
  { savol: "5/35 va 3/15 kasrlarini umumiy maxrajga keltiring.", variantlar: ["15/105 va 21/105", "10/105 va 21/105", "15/105 va 18/105", "20/105 va 21/105"], javob: "15/105 va 21/105" },

  // 46-50. Kasrlarni taqqoslang
  { savol: "a = 2/3, b = 5/6. Kasrlarni taqqoslang.", variantlar: ["a < b", "a > b", "a = b", "a ≤ b"], javob: "a < b" },
  { savol: "a = 5/8, b = 3/4. Kasrlarni taqqoslang.", variantlar: ["a < b", "a > b", "a = b", "a ≥ b"], javob: "a < b" },
  { savol: "a = 2/13, b = 5/39. Kasrlarni taqqoslang.", variantlar: ["a > b", "a < b", "a = b", "a ≥ b"], javob: "a > b" },
  { savol: "a = 5/18, b = 7/24. Kasrlarni taqqoslang.", variantlar: ["a < b", "a > b", "a = b", "a ≤ b"], javob: "a < b" },
  { savol: "a = 6/49, b = 2/21. Kasrlarni taqqoslang.", variantlar: ["a < b", "a > b", "a = b", "a ≥ b"], javob: "a > b" },

  // 51-52. Sonlarni o'sish tartibida joylashtiring
  { savol: "a = 2/3, b = 3/4, c = 7/12. Sonlarni o'sish tartibida joylashtiring.", variantlar: ["c, a, b", "a, b, c", "c, b, a", "a, c, b"], javob: "c, a, b" },
  { savol: "a = 5/6, b = 7/8, c = 19/24. Sonlarni o'sish tartibida joylashtiring.", variantlar: ["c, a, b", "a, b, c", "c, b, a", "a, c, b"], javob: "c, a, b" },

  // 61-70. Amallarni bajaring (qo'shish va ayirish)
  { savol: "5/12 + 1/12 = ?", variantlar: ["1/2", "6/12", "1/3", "3/4"], javob: "1/2" },
  { savol: "4/13 + 7/13 = ?", variantlar: ["11/13", "1", "10/13", "12/13"], javob: "11/13" },
  { savol: "1 - 45/49 + 4/49 = ?", variantlar: ["8/49", "6/49", "10/49", "4/49"], javob: "8/49" },
  { savol: "2·1/24 + 3·7/24 = ?", variantlar: ["23/24", "21/24", "25/24", "19/24"], javob: "23/24" },
  { savol: "19/20 + 3·7/20 = ?", variantlar: ["2", "19/20", "21/20", "23/20"], javob: "2" },
  { savol: "12/25 - 7/25 = ?", variantlar: ["1/5", "5/25", "6/25", "4/25"], javob: "1/5" },
  { savol: "33/75 - 28/75 = ?", variantlar: ["1/15", "5/75", "2/15", "4/75"], javob: "1/15" },
  { savol: "10·7/9 - 8·1/9 = ?", variantlar: ["2·2/3", "2·1/3", "2·5/9", "2·4/9"], javob: "2·2/3" },
  { savol: "2·13/24 - 1·19/24 = ?", variantlar: ["18/24", "3/4", "17/24", "19/24"], javob: "18/24" },
  { savol: "12·1/9 - 7·7/9 = ?", variantlar: ["4·1/3", "4·2/3", "4·1/9", "4·2/9"], javob: "4·1/3" },

  // 71-90. Ko'paytirish va bo'lish
  { savol: "5/12 · 28/75 = ?", variantlar: ["7/45", "8/45", "7/36", "8/36"], javob: "7/45" },
  { savol: "35/39 · 52/105 = ?", variantlar: ["4/9", "5/9", "4/7", "5/7"], javob: "4/9" },
  { savol: "1/17 · 3/11 = ?", variantlar: ["3/187", "4/187", "3/177", "4/177"], javob: "3/187" },
  { savol: "2/19 · 14/43 = ?", variantlar: ["28/817", "26/817", "28/807", "26/807"], javob: "28/817" },
  { savol: "1/11 · 5/61 = ?", variantlar: ["5/671", "6/671", "5/661", "6/661"], javob: "5/671" },
  { savol: "6/25 · 12/35 = ?", variantlar: ["72/875", "70/875", "72/865", "70/865"], javob: "72/875" },
  { savol: "72/85 · 48/51 = ?", variantlar: ["1152/1445", "1150/1445", "1152/1435", "1150/1435"], javob: "1152/1445" },
  { savol: "2·4/11 : 7/45 = ?", variantlar: ["130/77", "128/77", "132/77", "126/77"], javob: "130/77" },
  { savol: "3·1/17 : 5/34 = ?", variantlar: ["104/25", "102/25", "106/25", "108/25"], javob: "104/25" },
  { savol: "2/3 · 21/40 = ?", variantlar: ["7/20", "9/20", "7/18", "9/18"], javob: "7/20" },
  { savol: "4/5 · 3/8 = ?", variantlar: ["3/10", "1/2", "5/12", "7/20"], javob: "3/10" },
  { savol: "4/21 · 5/6 = ?", variantlar: ["10/63", "8/63", "12/63", "14/63"], javob: "10/63" },
  { savol: "1·5/12 + 3·9/16 = ?", variantlar: ["4·47/48", "4·45/48", "5·47/48", "5·45/48"], javob: "4·47/48" },
  { savol: "2·7/8 - 1·7/12 = ?", variantlar: ["1·7/24", "1·5/24", "2·7/24", "2·5/24"], javob: "1·7/24" },
  { savol: "3·5/16 + 2·7/24 = ?", variantlar: ["5·29/48", "5·31/48", "6·29/48", "6·31/48"], javob: "5·29/48" },
  { savol: "3·1/30 - 1·11/45 = ?", variantlar: ["1·11/18", "1·13/18", "2·11/18", "2·13/18"], javob: "1·11/18" },
  { savol: "4·23/24 + 7·15/16 = ?", variantlar: ["12·35/48", "12·37/48", "13·35/48", "13·37/48"], javob: "12·35/48" },
  { savol: "6·3/8 - 4·11/12 = ?", variantlar: ["1·17/24", "1·19/24", "2·17/24", "2·19/24"], javob: "1·17/24" },

  // 101-124. Murakkab ifodalar
  { savol: "2 + 4/3 = ?", variantlar: ["10/3", "8/3", "7/3", "11/3"], javob: "10/3" },
  { savol: "2 + 1/3 = ?", variantlar: ["7/3", "5/3", "8/3", "4/3"], javob: "7/3" },
  { savol: "(2/7 + 5/3) : 2/7 - 1/4 = ?", variantlar: ["12", "10", "11", "13"], javob: "12" },
  { savol: "5/3 : (5/3 : 2/3) + 1/3 : 15/20 - 1/12 = ?", variantlar: ["1/2", "2/3", "3/4", "5/6"], javob: "1/2" },
  { savol: "(1/190 + 1/200) : (1/199 - 1/200) = ?", variantlar: ["399/10", "399/20", "399/30", "399/40"], javob: "399/10" },
  { savol: "4·(17/5 - 47/40) + 12·1/2·6/4 + 3 = ?", variantlar: ["21", "19", "20", "22"], javob: "21" },
  { savol: "(1·3/20 + 2·5/12) · 120 = ?", variantlar: ["286", "284", "288", "290"], javob: "286" },
  { savol: "10/16 · 3/2 · (17/4 : 17) + 3·3/4·5/6 = ?", variantlar: ["105/32", "103/32", "107/32", "109/32"], javob: "105/32" },
  { savol: "(14/15 + 5/2 + 3/10) · 8/7 · 3/4 · 5/10 = ?", variantlar: ["11/5", "12/5", "13/5", "14/5"], javob: "11/5" },
  { savol: "3/4·5/6 + 2·1/2·2/5 - 1·1/9 = ?", variantlar: ["5/18", "7/18", "9/18", "11/18"], javob: "5/18" },
  { savol: "((1 + 1/2) : (2·2/3 + 1·5/6)) / ((2·7/10 - 1·2/5) : (1·1/2 - 1·6/13)) = ?", variantlar: ["1", "2", "3", "4"], javob: "1" },
  { savol: "((1·1/2 + 3·1/3 - 1·1/6) : (1·1/4 + 2·1/11)) = ?", variantlar: ["4/5", "3/5", "2/5", "1/5"], javob: "4/5" },
  { savol: "(49/9 - 2) : (1/3 + 7/18) / ((2/4 + 3/4) : (5 - 3/3)) = ?", variantlar: ["2", "3", "4", "5"], javob: "2" },
  { savol: "(1/2 + 3/1 - 1/6) / (2/9 + 1/3 - 1/2) = ?", variantlar: ["12", "10", "11", "13"], javob: "12" },
  { savol: "1 + 2/3 + 1/3 - 1/4 / (2 + 2/3 + 1/3 - (-1/4)) = ?", variantlar: ["1/3", "2/3", "3/4", "4/5"], javob: "1/3" }

  ],





  theme6: [
  // 1-15. O'nli kasrlarni oddiy kasrga aylantiring
  { savol: "0.5 ni oddiy kasr ko'rinishida yozing.", variantlar: ["1/2", "2/3", "3/4", "4/5"], javob: "1/2" },
  { savol: "0.25 ni oddiy kasr ko'rinishida yozing.", variantlar: ["1/4", "1/3", "2/5", "3/8"], javob: "1/4" },
  { savol: "0.75 ni oddiy kasr ko'rinishida yozing.", variantlar: ["3/4", "2/3", "4/5", "5/6"], javob: "3/4" },
  { savol: "0.125 ni oddiy kasr ko'rinishida yozing.", variantlar: ["1/8", "1/6", "2/9", "3/10"], javob: "1/8" },
  { savol: "0.375 ni oddiy kasr ko'rinishida yozing.", variantlar: ["3/8", "2/5", "3/7", "4/9"], javob: "3/8" },
  { savol: "0.625 ni oddiy kasr ko'rinishida yozing.", variantlar: ["5/8", "3/5", "4/7", "6/11"], javob: "5/8" },
  { savol: "0.875 ni oddiy kasr ko'rinishida yozing.", variantlar: ["7/8", "5/6", "8/9", "9/10"], javob: "7/8" },
  { savol: "2.44 ni oddiy kasr ko'rinishida yozing.", variantlar: ["61/25", "63/25", "59/25", "57/25"], javob: "61/25" },
  { savol: "2.15 ni oddiy kasr ko'rinishida yozing.", variantlar: ["43/20", "41/20", "47/20", "49/20"], javob: "43/20" },
  { savol: "21.6 ni oddiy kasr ko'rinishida yozing.", variantlar: ["108/5", "107/5", "109/5", "111/5"], javob: "108/5" },
  { savol: "12.00 ni oddiy kasr ko'rinishida yozing.", variantlar: ["12", "13", "11", "14"], javob: "12" },
  { savol: "1.000 ni oddiy kasr ko'rinishida yozing.", variantlar: ["1", "2", "3", "4"], javob: "1" },
  { savol: "0.48 ni oddiy kasr ko'rinishida yozing.", variantlar: ["12/25", "11/25", "13/25", "14/25"], javob: "12/25" },
  { savol: "1.72 ni oddiy kasr ko'rinishida yozing.", variantlar: ["43/25", "41/25", "47/25", "49/25"], javob: "43/25" },
  { savol: "12.88 ni oddiy kasr ko'rinishida yozing.", variantlar: ["322/25", "321/25", "323/25", "324/25"], javob: "322/25" },

  // 16-25. Oddiy kasrlarni o'nli kasrga aylantiring
  { savol: "1/2 ni o'nli kasr ko'rinishida yozing.", variantlar: ["0.5", "0.25", "0.75", "0.125"], javob: "0.5" },
  { savol: "1/4 ni o'nli kasr ko'rinishida yozing.", variantlar: ["0.25", "0.5", "0.75", "0.125"], javob: "0.25" },
  { savol: "3/4 ni o'nli kasr ko'rinishida yozing.", variantlar: ["0.75", "0.5", "0.25", "0.125"], javob: "0.75" },
  { savol: "7/4 ni o'nli kasr ko'rinishida yozing.", variantlar: ["1.75", "1.5", "1.25", "1.8"], javob: "1.75" },
  { savol: "77/200 ni o'nli kasr ko'rinishida yozing.", variantlar: ["0.385", "0.375", "0.395", "0.365"], javob: "0.385" },
  { savol: "41/20 ni o'nli kasr ko'rinishida yozing.", variantlar: ["2.05", "2.1", "2.15", "2.25"], javob: "2.05" },

  // 26-50. Qo'shish va ayirish
  { savol: "2.1 + 3.7 = ?", variantlar: ["5.8", "5.7", "5.9", "6.0"], javob: "5.8" },
  { savol: "3.2 + 1.52 = ?", variantlar: ["4.72", "4.62", "4.82", "4.92"], javob: "4.72" },
  { savol: "2.14 + 12.4 = ?", variantlar: ["14.54", "14.44", "14.64", "14.74"], javob: "14.54" },
  { savol: "2.8 + 13.68 + 4.12 = ?", variantlar: ["20.6", "20.5", "20.7", "20.8"], javob: "20.6" },
  { savol: "1.23 + 2.145 + 11.2 = ?", variantlar: ["14.575", "14.475", "14.675", "14.775"], javob: "14.575" },
  { savol: "3.21 - 2.02 = ?", variantlar: ["1.19", "1.18", "1.2", "1.21"], javob: "1.19" },
  { savol: "2.84 - 1.2 = ?", variantlar: ["1.64", "1.54", "1.74", "1.84"], javob: "1.64" },
  { savol: "8.7 - 1.96 = ?", variantlar: ["6.74", "6.64", "6.84", "6.94"], javob: "6.74" },
  { savol: "3.2 - 1.54 + 1.2 = ?", variantlar: ["2.86", "2.76", "2.96", "2.66"], javob: "2.86" },
  { savol: "3 - 1.124 + 3.14 = ?", variantlar: ["5.016", "5.116", "4.916", "5.216"], javob: "5.016" },
  { savol: "1.2 + 15 = ?", variantlar: ["16.2", "16.1", "16.3", "16.4"], javob: "16.2" },
  { savol: "24 : 2.1 + 3.14 : 2.5 = ?", variantlar: ["12.656", "12.556", "12.756", "12.856"], javob: "12.656" },
  { savol: "1.32 : 3.1 - 1.2 : 2.1 = ?", variantlar: ["0.014", "0.024", "0.034", "0.044"], javob: "0.014" },
  { savol: "2.3 : 1.51 + 2.7 : 1.2 - 1.3 : 2.11 = ?", variantlar: ["3.14", "3.04", "3.24", "3.34"], javob: "3.14" },

  // 51-68. Bo'lish amallari
  { savol: "2.24 : 0.04 = ?", variantlar: ["56", "54", "58", "60"], javob: "56" },
  { savol: "10.2 : 0.08 = ?", variantlar: ["127.5", "125.5", "129.5", "131.5"], javob: "127.5" },
  { savol: "16.8 : 0.12 = ?", variantlar: ["140", "138", "142", "144"], javob: "140" },
  { savol: "27.15 : 0.6 = ?", variantlar: ["45.25", "44.25", "46.25", "47.25"], javob: "45.25" },
  { savol: "41 : 0.8 = ?", variantlar: ["51.25", "50.25", "52.25", "53.25"], javob: "51.25" },
  { savol: "0.047 : 100 = ?", variantlar: ["0.00047", "0.0047", "0.047", "0.47"], javob: "0.00047" },
  { savol: "0.0053 : 1000 = ?", variantlar: ["0.0000053", "0.000053", "0.00053", "0.0053"], javob: "0.0000053" },
  { savol: "0.51 : 0.1 = ?", variantlar: ["5.1", "51", "0.051", "510"], javob: "5.1" },
  { savol: "21.5 : 0.0001 = ?", variantlar: ["215000", "21500", "2150", "215"], javob: "215000" },
  { savol: "0.48 : 0.1 = ?", variantlar: ["4.8", "48", "0.048", "480"], javob: "4.8" },
  { savol: "0.057 : 0.01 = ?", variantlar: ["5.7", "57", "0.57", "570"], javob: "5.7" },
  { savol: "0.072 : 0.001 = ?", variantlar: ["72", "720", "7.2", "7200"], javob: "72" },
  { savol: "248.13 : 10 = ?", variantlar: ["24.813", "2.4813", "2481.3", "0.24813"], javob: "24.813" },
  { savol: "16.24 : 100 = ?", variantlar: ["0.1624", "1.624", "162.4", "0.01624"], javob: "0.1624" },
  { savol: "0.473 : 100 = ?", variantlar: ["0.00473", "0.0473", "4.73", "47.3"], javob: "0.00473" },

  // 68-90. Murakkab ifodalar
  { savol: "3.005 · 100 - 29.05 : 0.1 + 420 · 0.01 = ?", variantlar: ["14.2", "13.2", "15.2", "16.2"], javob: "14.2" },
  { savol: "0.403 · 100 - 303 : 10 + 2.4 : 0.1 - 3.4 : 0.1 = ?", variantlar: ["10.3", "9.3", "11.3", "12.3"], javob: "10.3" },
  { savol: "(1.37 + 1.87) : 1.2 + 3.51 : 2.7 = ?", variantlar: ["4", "3.5", "4.5", "5"], javob: "4" },
  { savol: "(7.2 : 2.4 + 0.4) : (1.2 - 20 · 0.045) = ?", variantlar: ["8", "7", "9", "10"], javob: "8" },
  { savol: "(2.5 · 2.6 + 1.2) : 0.77 - 2.8125 · 3.2 = ?", variantlar: ["1", "2", "3", "4"], javob: "1" },
  { savol: "(2.772 : 1.32 + 4.05 : 4.5) : (0.14 + 21 : 42) = ?", variantlar: ["5", "4", "6", "7"], javob: "5" },
  { savol: "(2.41 · 1.07 + 0.6213) : (0.6 + 0.125 · 8) = ?", variantlar: ["2", "3", "1.5", "2.5"], javob: "2" },
  { savol: "(1.4 · 2.7 + 0.35 · 5.2) : (0.23 + 0.03 · 4) = ?", variantlar: ["10", "9", "11", "12"], javob: "10" },
  { savol: "(2/3 + 0.5) : 1/6 - 2.35 : 0.5 = ?", variantlar: ["2.3", "2.2", "2.4", "2.5"], javob: "2.3" },
  { savol: "(0.03 · 0.3 + 0.891) : 1/4 + 3/8 · 1.6 = ?", variantlar: ["4.2", "4.1", "4.3", "4.4"], javob: "4.2" },
  { savol: "(0.1 · 0.001 - 0.0005) : 0.4 · 100 + 44/7 · 0.175 = ?", variantlar: ["1", "2", "3", "4"], javob: "1" },
  { savol: "((2/7 + 0.2 : 4/5) : (4/9 : 2.1 - 7/3 : 4.5)) = ?", variantlar: ["9", "8", "10", "11"], javob: "9" },
  { savol: "(0.021 : 1.3 : 0.32) / (2.1 : 0.26 : 4.8) = ?", variantlar: ["0.1", "0.2", "0.3", "0.4"], javob: "0.1" },
  { savol: "(4.9 : 64 : 0.015) / (21 : 0.4 : 0.028) = ?", variantlar: ["1", "2", "3", "4"], javob: "1" },
  { savol: "(2.7 : 3.6 : 0.84) / (1.8 : 6.3 : 1.08) = ?", variantlar: ["4", "3", "5", "6"], javob: "4" },
  { savol: "(0.44 : 2.7 : 3.24) / (6.6 : 2.43 : 0.08) = ?", variantlar: ["0.1", "0.2", "0.3", "0.4"], javob: "0.1" },
  { savol: "(1.1 : 2.2 : 3.3) / (4.4 : 5.5 : 6.6) = ?", variantlar: ["0.5", "1", "1.5", "2"], javob: "1" },
  { savol: "(0.04 : 0.13 + 0.04 : 0.17) / (0.12 : 0.11 + 0.12 : 0.19) = ?", variantlar: ["1/3", "2/3", "1/2", "3/4"], javob: "1/3" },
  { savol: "(0.48 : 1.92 - 0.48 : 0.48) / (0.48 : 0.96 + 0.48 : 1.44) = ?", variantlar: ["-1/5", "-2/5", "-3/5", "-4/5"], javob: "-1/5" },
  { savol: "(3.2 : 5.7 + 3.2 : 4.3) / (2.4 : 76 + 2.4 : 24) = ?", variantlar: ["20", "18", "22", "24"], javob: "20" },
  { savol: "(2.7 : 2.7 + 2.7 : 7.2) / (1.8 : 1.8 + 1.8 : 8.1) = ?", variantlar: ["3", "2", "4", "5"], javob: "3" },
  { savol: "(2.3 : 4.3 + 2.3 : 6.3 + 2.3 : 8.3) / (4.6 : 3.3 + 4.6 : 7.3 + 4.6 : 8.3) = ?", variantlar: ["0.5", "1", "1.5", "2"], javob: "0.5" },

  // 91-100. Davriy kasrlarni oddiy kasrga aylantiring
  { savol: "0,(7) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["7/9", "7/10", "7/99", "7/90"], javob: "7/9" },
  { savol: "1,(15) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["38/33", "37/33", "39/33", "40/33"], javob: "38/33" },
  { savol: "0,(45) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["5/11", "4/11", "6/11", "7/11"], javob: "5/11" },
  { savol: "2,(75) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["91/33", "92/33", "93/33", "94/33"], javob: "91/33" },
  { savol: "2,3(1) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["104/45", "103/45", "105/45", "106/45"], javob: "104/45" },
  { savol: "2,4(6) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["37/15", "38/15", "39/15", "40/15"], javob: "37/15" },
  { savol: "6,8(3) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["41/6", "43/6", "45/6", "47/6"], javob: "41/6" },
  { savol: "3,22(6) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["97/30", "98/30", "99/30", "100/30"], javob: "97/30" },
  { savol: "1,5(09) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["83/55", "84/55", "85/55", "86/55"], javob: "83/55" },
  { savol: "2,8(09) davriy kasrini oddiy kasr ko'rinishida yozing.", variantlar: ["139/50", "138/50", "140/50", "141/50"], javob: "139/50" },

  // 101-105. Oddiy kasrlarni davriy kasrga aylantiring
  { savol: "3 8/11 ni davriy kasr ko'rinishida yozing.", variantlar: ["3,(72)", "3,7(2)", "3,(27)", "3,2(7)"], javob: "3,(72)" },
  { savol: "5 23/33 ni davriy kasr ko'rinishida yozing.", variantlar: ["5,(69)", "5,6(9)", "5,(96)", "5,9(6)"], javob: "5,(69)" },
  { savol: "2 11/15 ni davriy kasr ko'rinishida yozing.", variantlar: ["2,7(3)", "2,(73)", "2,3(7)", "2,(37)"], javob: "2,7(3)" },
  { savol: "6 17/75 ni davriy kasr ko'rinishida yozing.", variantlar: ["6,22(6)", "6,(226)", "6,2(26)", "6,26(2)"], javob: "6,22(6)" },

  // 106-110. Davriy kasrlarni taqqoslang
  { savol: "a = 0,7(27), b = 0,(72), c = 0,(7272). Kasrlarni taqqoslang.", variantlar: ["a < b < c", "a > b > c", "a = b = c", "a < c < b"], javob: "a < b < c" },
  { savol: "a = 0,72(2), b = 0,7(2), c = 0,(72). Kasrlarni taqqoslang.", variantlar: ["b < a < c", "a < b < c", "c < a < b", "b < c < a"], javob: "b < a < c" },
  { savol: "a = 0,54(44), b = 0,5(444), c = 0,(54). Kasrlarni taqqoslang.", variantlar: ["b < a < c", "a < b < c", "c < a < b", "b < c < a"], javob: "b < a < c" },
  { savol: "a = 1,3(23), b = 1,(323), c = 1,32(23). Kasrlarni taqqoslang.", variantlar: ["a < c < b", "b < a < c", "c < a < b", "a < b < c"], javob: "a < c < b" }

  ],





  theme7: [
  {
    "savol": "-18 - 5 + 1 + 2",
    "variantlar": [-24, -22, -20, -18],
    "javob": -20
  },
  {
    "savol": "5 - 13 - 4 - 2",
    "variantlar": [-16, -14, -12, -10],
    "javob": -14
  },
  {
    "savol": "4 - 8 + 1 - 7",
    "variantlar": [-12, -10, -8, -6],
    "javob": -10
  },
  {
    "savol": "-23 + 10 - 207 + 103",
    "variantlar": [-127, -117, -107, -97],
    "javob": -117
  },
  {
    "savol": "-(-5) + (-7) - (-9)",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "-(-8) + (-2) + (-9)",
    "variantlar": [-5, -4, -3, -2],
    "javob": -3
  },
  {
    "savol": "7 - (-3) + (-4) + (-2)",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "(-6) · (-4) · (-3)",
    "variantlar": [-72, -62, -52, -42],
    "javob": -72
  },
  {
    "savol": "(-2) · (-7) · 3 · (-1)",
    "variantlar": [-42, -32, -22, -12],
    "javob": -42
  },
  {
    "savol": "(-18) : (-6) : (-2)",
    "variantlar": [-2.5, -1.5, -0.5, 0.5],
    "javob": -1.5
  },
  {
    "savol": "(-24) : 4 : (-3)",
    "variantlar": [0, 1, 2, 3],
    "javob": 2
  },
  {
    "savol": "-135 : 2 : (-5)",
    "variantlar": [11.5, 12.5, 13.5, 14.5],
    "javob": 13.5
  },
  {
    "savol": "(-400) : (-2) : (-20)",
    "variantlar": [-20, -15, -10, -5],
    "javob": -10
  },
  {
    "savol": "(-250) : (-5) : 10",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "(-4) : (-12) : 3 + (-19) : 19",
    "variantlar": [-1.889, -1.289, -0.889, -0.289],
    "javob": -0.889
  },
  {
    "savol": "A nuqtadan 3 birlik o'ngda B nuqta olindi. B nuqtadan 2 birlik chapda C nuqta olindi. C nuqta qaysi songa to'g'ri keladi?",
    "variantlar": ["A+1", "A+2", "A+3", "A+4"],
    "javob": "A+1"
  },
  {
    "savol": "-3,7 soniga qanday eng kichik butun son qo'shilsa, natija musbat bo'ladi?",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "Son o'qida A(4,8) va B(-7,2) nuqtalar berilgan. AB kesma o'rtasining koordinatasini toping.",
    "variantlar": [-2.2, -1.2, -0.2, 0.8],
    "javob": -1.2
  },
  {
    "savol": "A nuqtadan 7 birlik chapda B nuqta olindi. B nuqtadan 2 birlik o'ngda C nuqta olindi. C nuqta qaysi songa to'g'ri keladi?",
    "variantlar": ["A-5", "A-4", "A-3", "A-2"],
    "javob": "A-5"
  },
  {
    "savol": "-6 3/4 soni qaysi butun sonlar orasida joylashgan?",
    "variantlar": ["-8 va -6", "-7 va -6", "-6 va -5", "-5 va -4"],
    "javob": "-7 va -6"
  },
  {
    "savol": "Son o'qida A(4,6) va B(9,4) nuqtalarning o'rtasida C nuqta olingan. AC kesma o'rtasining koordinatasini toping.",
    "variantlar": [5.25, 5.75, 6.25, 6.75],
    "javob": 5.75
  },
  {
    "savol": "A nuqtadan 5 birlik o'ngda B nuqta olindi. B nuqtadan 8 birlik chapda C nuqta olindi. C nuqta qaysi songa to'g'ri keladi?",
    "variantlar": ["A-3", "A-2", "A-1", "A"],
    "javob": "A-3"
  },
  {
    "savol": "Son o'qida A(3,2) nuqtadan 5 birlik uzoqlikda qaysi nuqtalar joylashgan?",
    "variantlar": ["-1,8 va 7,2", "-1,8 va 8,2", "-2,8 va 7,2", "-2,8 va 8,2"],
    "javob": "-1,8 va 8,2"
  },
  {
    "savol": "A nuqtadan 6 birlik o'ngda B nuqta olindi. B nuqta qaysi butun sonlar orasida joylashgan?",
    "variantlar": ["A+5 va A+6", "A+6 va A+7", "A+5 va A+7", "A+4 va A+6"],
    "javob": "A+6 va A+7"
  },
  {
    "savol": "37 (1,2 · (-4,5) - 4,8 : (-6)) · (-0,5)",
    "variantlar": [-2.6, -1.6, 1.6, 2.6],
    "javob": -1.6
  },
  {
    "savol": "42 [-2 1/3 + 5/6 · (1,8 - 0,8 · (-1/2))]",
    "variantlar": [-1.5, -0.5, 0.5, 1.5],
    "javob": -0.5
  },
  {
    "savol": "38 0,72 : (-1,6) + 0,12 · (-0,3 + 0,6 : (-3))",
    "variantlar": [-0.55, -0.45, -0.35, -0.25],
    "javob": -0.45
  },
  {
    "savol": "43 [-5,3 · 1/3 + 2,3 · 1/3]",
    "variantlar": [-2, -1, 0, 1],
    "javob": -1
  },
  {
    "savol": "39 (0,6 : (-5) + 0,6 · (-1,2)) : (-0,08 + 0,24)",
    "variantlar": [-5.75, -4.75, -3.75, -2.75],
    "javob": -4.75
  },
  {
    "savol": "44 [-1,2 · 1/2 - 2,8 · 1/2]",
    "variantlar": [-3, -2, -1, 0],
    "javob": -2
  },
  {
    "savol": "40 1,25 · (-0,4) + 0,4 : (-0,8)",
    "variantlar": [-1.5, -1, -0.5, 0],
    "javob": -1
  },
  {
    "savol": "41 [-1,2 : (-0,8) + 2,7 · 1/9]",
    "variantlar": [1.2, 1.5, 1.8, 2.1],
    "javob": 1.8
  },
  {
    "savol": "45 [2,2 · (-1/6) - 2,2 · 1/3 + 0,8 · (-4,5)]",
    "variantlar": [-5.2, -4.7, -4.2, -3.7],
    "javob": -4.7
  },
  {
    "savol": "26 (-6/11) : (-3/4) + (-2/11)",
    "variantlar": [0.18, 0.28, 0.38, 0.48],
    "javob": 0.18
  },
  {
    "savol": "31 28^(4/5) : (-13^(5/7))",
    "variantlar": [-2, -1, 1, 2],
    "javob": -2
  },
  {
    "savol": "27 7/4 : (-3/4) - (-7/3)",
    "variantlar": [0.33, 0.67, 1.33, 1.67],
    "javob": 0.67
  },
  {
    "savol": "32 -(5/4 - 11/36) : 3/17",
    "variantlar": [-6.78, -5.78, -4.78, -3.78],
    "javob": -5.78
  },
  {
    "savol": "29 6 - (-9) : (-3/2)",
    "variantlar": [-2, 0, 2, 4],
    "javob": 0
  },
  {
    "savol": "33 (-8/9) + (-2/3) : (-1/6)",
    "variantlar": [2.11, 3.11, 4.11, 5.11],
    "javob": 3.11
  },
  {
    "savol": "30 (-1/2) : (-3/2) : (-5/6) + 1",
    "variantlar": [0.2, 0.4, 0.6, 0.8],
    "javob": 0.6
  },
  {
    "savol": "34 -(-1/2) : (-1/2) : (-3/2) - 1/2",
    "variantlar": [-1.5, -1, -0.5, 0],
    "javob": -1
  },
  {
    "savol": "35 (-1/3) + 1/3 : (-1/3) : (-1/3)",
    "variantlar": [0.33, 0.67, 1.33, 1.67],
    "javob": 0.67
  },
  {
    "savol": "31 (-5/4) : (-11/8)",
    "variantlar": [0.71, 0.81, 0.91, 1.01],
    "javob": 0.91
  },
  {
    "savol": "36 (-0,3 + 1,4) : (2,3 - 4,3)",
    "variantlar": [-0.65, -0.55, -0.45, -0.35],
    "javob": -0.55
  },
  {
    "savol": "95 Suv osti kemasi dengiz sathidan 100 metr chuqurlikda edi. Keyingi 4 soat davomida kema chuqurligining o'zgarishi -100m; -150m; +200m; +100m bo'ldi. Endi kema suv sathidan qanday chuqurlikda turibdi?",
    "variantlar": [-50, -40, -30, -20],
    "javob": -50
  },
  {
    "savol": "101 1 -3 + 5 - 7 + ... + 97 - 99",
    "variantlar": [-50, -40, -30, -20],
    "javob": -50
  },
  {
    "savol": "102 5 - 10 + 15 - 20 + ... + 95 - 100",
    "variantlar": [-50, -40, -30, -20],
    "javob": -50
  },
  {
    "savol": "96 Birjada 1 unsiya oltin narxi 2300$ ga teng edi. Keyingi 3 kun davomida oltin narxining o'zgarishi -13,7$; -17,2$ va +7,9$ kabi bo'lgan bo'lsa, 1 unsiya oltinning narxi necha $ ni tashkil etmoqda?",
    "variantlar": [2274, 2275, 2276, 2277],
    "javob": 2277
  },
  {
    "savol": "103 Hisoblang: 1 + 2 - 3 - 4 + 5 + 6 - 7 - 8 + 97 + 98 - 99 - 100",
    "variantlar": [-100, -50, 0, 50],
    "javob": -100
  },
  {
    "savol": "97 Son o'qida 2,3 sonidan 23,4 birlik uzoqlikdagi sonlar yig'indisini toping.",
    "variantlar": [4.6, 5.6, 6.6, 7.6],
    "javob": 4.6
  },
  {
    "savol": "104 1 * 2 * 3 * ... * n ifodada * lar o'rniga + va - amallarini qo'yib 0 hosil qilish mumkin bo'ladigan 100 dan kichik natural n sonlari nechta?",
    "variantlar": [48, 49, 50, 51],
    "javob": 50
  },
  {
    "savol": "98 1 - 2 + 3 - 4 + 5 - 6... + 19 - 20",
    "variantlar": [-10, -8, -6, -4],
    "javob": -10
  },
  {
    "savol": "99 1 - 2 + 3 - 4 + 5 - 6 + ... + 99 - 100",
    "variantlar": [-50, -40, -30, -20],
    "javob": -50
  },
  {
    "savol": "105 100 ta butun son ko'paytmasi 2 ga teng. Bu sonlar yig'indisining qabul qilishi mumkin bo'lgan eng kichik qiymatini toping.",
    "variantlar": [-98, -88, -78, -68],
    "javob": -98
  },
  {
    "savol": "100 2 - 4 + 6 - 8 + ... + 98 - 100",
    "variantlar": [-50, -40, -30, -20],
    "javob": -50
  },
  {
    "savol": "69 |-12| |24| |-28|",
    "variantlar": [12, 24, 28, 64],
    "javob": 64
  },
  {
    "savol": "70 |24| |-2| |+2| |-12|",
    "variantlar": [24, 26, 36, 40],
    "javob": 40
  },
  {
    "savol": "71 |23| |-47| |-23| |-147|",
    "variantlar": [147, 170, 193, 240],
    "javob": 240
  },
  {
    "savol": "72 |0,2| |-0,8| |+0,2| |+0,8|",
    "variantlar": [1.6, 1.8, 2.0, 2.2],
    "javob": 2.0
  },
  {
    "savol": "73 ||1 - 2| - 3| - 4|",
    "variantlar": [-2, -1, 0, 1],
    "javob": -2
  },
  {
    "savol": "74 ||12 - 23| + |23 + 12||",
    "variantlar": [35, 46, 57, 68],
    "javob": 46
  },
  {
    "savol": "75 |12 - |13 - |14 - 15|||",
    "variantlar": [10, 11, 12, 13],
    "javob": 12
  },
  {
    "savol": "76 -1,8 < x < 3,2 tengsizlikni nechta butun qanoatlantiradi?",
    "variantlar": [3, 4, 5, 6],
    "javob": 5
  },
  {
    "savol": "77 -12,7 ≤ x ≤ 4 tengsizlikni nechta butun qanoatlantiradi?",
    "variantlar": [15, 16, 17, 18],
    "javob": 17
  },
  {
    "savol": "78 -3,5 < x < 4,5 tengsizlikning butun yig'indisini toping.",
    "variantlar": [0, 1, 2, 3],
    "javob": 3
  },
  {
    "savol": "67 |-12| - |3|",
    "variantlar": [5, 7, 9, 11],
    "javob": 9
  },
  {
    "savol": "68 |123 - 128| - |-11|",
    "variantlar": [-8, -4, 0, 4],
    "javob": -4
  },
  {
    "savol": "69 |54 + 12| - |13 - 15|",
    "variantlar": [62, 64, 66, 68],
    "javob": 64
  },
  {
    "savol": "79 -6,7 < x < 1,3 tengsizlikning butun yechimlari yig'indisini toping.",
    "variantlar": [-21, -20, -19, -18],
    "javob": -20
  },
  {
    "savol": "80 -8,5 < x < 6,8 tengsizlikning butun yechimlari yig'indisini toping.",
    "variantlar": [-11, -10, -9, -8],
    "javob": -10
  },
  {
    "savol": "81 2,3 + 2,7 yig'indiga qarama-qarshi sonni toping.",
    "variantlar": [-5, -4, -3, -2],
    "javob": -5
  },
  {
    "savol": "82 -2,8 + 5,3 yig'indiga teskari sonni toping.",
    "variantlar": [0.2, 0.3, 0.4, 0.5],
    "javob": 0.4
  },
  {
    "savol": "83 4,3 - 9,3 ayirmaga qarama-qarshi songa teskari sonni toping.",
    "variantlar": [0.1, 0.2, 0.3, 0.4],
    "javob": 0.2
  },
  {
    "savol": "84 (-1,2) · 25 + 24 ifodaningning qiymatiga teskari sonning qarama-qarshisini toping.",
    "variantlar": [0.5, 0.6, 0.7, 0.8],
    "javob": 0.6
  },
  {
    "savol": "85 -2,4 · 5 + 2 ifodaning qiymatiga teskari va qarama-qarshi sonlar yig'indisini toping.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "86 [2,4] + {0,2}",
    "variantlar": [2.2, 2.4, 2.6, 2.8],
    "javob": 2.2
  },
  {
    "savol": "87 [-1,2] + {3,4}",
    "variantlar": [1.4, 1.6, 1.8, 2.0],
    "javob": 1.8
  },
  {
    "savol": "88 Akmalning ikki do'stidan mos ravishda 40 ming so'm va 35 ming so'm qarzi bor. Agar u birinchi do'stiga 10 ming, ikkinchi do'stiga 25 ming bersa, jami qancha qarzi qoladi?",
    "variantlar": [30, 35, 40, 45],
    "javob": 40
  },
  {
    "savol": "89 12 va -8 sonlari yig'indisidan 18 va -13 sonlari yig'indisini ayiring.",
    "variantlar": [-5, -3, -1, 1],
    "javob": -1
  },
  {
    "savol": "90 -3,6 sonini shunday ikkita qo'shiluvchilar yig'indisi shaklida yozingki, bunda qo'shiluvchilardan biri bu songa qarama-qarshi son bo'lsin.",
    "variantlar": ["3,6 + (-7,2)", "3,6 + 7,2", "-3,6 + 0", "0 + (-3,6)"],
    "javob": "3,6 + (-7,2)"
  },
  {
    "savol": "91 Hafta davomida kunlik o'rtacha haroratga o'zgarishi quyidagicha bo'ldi: +2,4°C; -1,2°C; Agar hafta oxirida harorat 3°C bo'lsa, hafta boshida harorat necha gradus bo'lgan?",
    "variantlar": [0.8, 1.2, 1.6, 1.8],
    "javob": 1.8
  }
  ],




  
  theme8: [
  {
    "savol": "15 ning 2/3 qismini toping.",
    "variantlar": [5, 8, 10, 12],
    "javob": 10
  },
  {
    "savol": "45 ning 5/9 qismini toping.",
    "variantlar": [20, 25, 30, 35],
    "javob": 25
  },
  {
    "savol": "28 ning 4/7 qismini toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "48 ning 3/16 qismini toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 9
  },
  {
    "savol": "100 ning 11/20 qismini toping.",
    "variantlar": [45, 50, 55, 60],
    "javob": 55
  },
  {
    "savol": "380 ning 5/19 qismini toping.",
    "variantlar": [90, 95, 100, 105],
    "javob": 100
  },
  {
    "savol": "330 ning 5/11 qismini toping.",
    "variantlar": [140, 145, 150, 155],
    "javob": 150
  },
  {
    "savol": "680 ning 8/17 qismini toping.",
    "variantlar": [300, 310, 320, 330],
    "javob": 320
  },
  {
    "savol": "2/3 qismi 18 ga teng bo'lgan sonni toping.",
    "variantlar": [24, 25, 26, 27],
    "javob": 27
  },
  {
    "savol": "5/8 qismi 40 ga teng bo'lgan sonni toping.",
    "variantlar": [60, 62, 64, 66],
    "javob": 64
  },
  {
    "savol": "1/3 qismi 12 ga teng bo'lgan sonni toping.",
    "variantlar": [32, 34, 36, 38],
    "javob": 36
  },
  {
    "savol": "4/7 qismi 24 ga teng bo'lgan sonni toping.",
    "variantlar": [38, 40, 42, 44],
    "javob": 42
  },
  {
    "savol": "10/13 qismi 120 ga teng bo'lgan sonni toping.",
    "variantlar": [146, 150, 156, 160],
    "javob": 156
  },
  {
    "savol": "7/12 qismi 10.5 ga teng bo'lgan sonni toping.",
    "variantlar": [16, 17, 18, 19],
    "javob": 18
  },
  {
    "savol": "11/7 qismi 121 ga teng bo'lgan sonni toping.",
    "variantlar": [73, 75, 77, 79],
    "javob": 77
  },
  {
    "savol": "45 ning 8% ini toping.",
    "variantlar": [3.2, 3.4, 3.6, 3.8],
    "javob": 3.6
  },
  {
    "savol": "360 ning 25% ini toping.",
    "variantlar": [80, 85, 90, 95],
    "javob": 90
  },
  {
    "savol": "80 ning 20% ini toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "400 ning 0.5% ini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "20 ning 40% ini toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "5.6 ning 120% ini toping.",
    "variantlar": [5.72, 6.22, 6.72, 7.22],
    "javob": 6.72
  },
  {
    "savol": "3.2 ning 500% ini toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "Sonning 5 foizi 20 ga teng bo'lsa, sonning o'zini toping.",
    "variantlar": [200, 300, 400, 500],
    "javob": 400
  },
  {
    "savol": "Sonning 4 foizi 10 ga teng bo'lsa, sonning o'zini toping.",
    "variantlar": [200, 225, 250, 275],
    "javob": 250
  },
  {
    "savol": "Sonning 15 foizi 30 ga teng bo'lsa, sonning o'zini toping.",
    "variantlar": [150, 175, 200, 225],
    "javob": 200
  },
  {
    "savol": "Sonning 24 foizi 4.8 ga teng bo'lsa, sonning o'zini toping.",
    "variantlar": [10, 15, 20, 25],
    "javob": 20
  },
  {
    "savol": "Sonning 27 foizi 8.1 ga teng bo'lsa, sonning o'zini toping.",
    "variantlar": [20, 25, 30, 35],
    "javob": 30
  },
  {
    "savol": "Sonning 120 foizi 144 ga teng bo'lsa, sonning o'zini toping.",
    "variantlar": [100, 110, 120, 130],
    "javob": 120
  },
  {
    "savol": "Sonning 12 foizi 18 ga teng bo'lsa, sonning o'zini toping.",
    "variantlar": [130, 140, 150, 160],
    "javob": 150
  },
  {
    "savol": "Sonning 32 foizi 1024 ga teng bo'lsa, sonning o'zini toping.",
    "variantlar": [3000, 3100, 3200, 3300],
    "javob": 3200
  },
  {
    "savol": "Akmal ishning 2/7 qismini bajardi. Ishning qanday qismi bajarilmay qoldi?",
    "variantlar": ["3/7", "4/7", "5/7", "6/7"],
    "javob": "5/7"
  },
  {
    "savol": "Futbol to'pi sotib olish uchun 120 ming so'm pul yig'ildi. Bu pul futbol topi narxining 3/5 qismiga teng bo'lsa, futbol topi necha so'm turadi?",
    "variantlar": [150000, 175000, 200000, 225000],
    "javob": 200000
  },
  {
    "savol": "O'quvchi kitobning 3/5 qismini o'qib tugatdi. Agar kitob tugashiga 160 bet qolgan bo'lsa, kitob necha betlik?",
    "variantlar": [300, 350, 400, 450],
    "javob": 400
  },
  {
    "savol": "50 ning 2/5 qismiga 30 ning 5/6 qismini qo'shing.",
    "variantlar": [35, 40, 45, 50],
    "javob": 45
  },
  {
    "savol": "Diskdagi fayllarning 2/5 qismidan nusxa olindi. Agar nusxa olinmagan fayllar 20 GB bo'lsa, qancha fayldan nusxa olingan?",
    "variantlar": [10.5, 11.5, 12.5, 13.5],
    "javob": 13.33
  },
  {
    "savol": "Maoshning avval 1/6 qismi, keyin esa 1/4 qismi ishlatilganidan keyin 2500000 so'm pul qolgan bo'lsa, maosh qancha bo'lganini aniqlang.",
    "variantlar": [4000000, 4200000, 4400000, 4600000],
    "javob": 4000000
  },
  {
    "savol": "Masalalarning 2/5 qismi geometriyaga, qolgani esa algebraga oid. Agar o'quvchi jami 20 ta masala yechgan bo'lsa, masalalardan nechtasi algebraga oid edi?",
    "variantlar": [8, 10, 12, 14],
    "javob": 12
  },
  {
    "savol": "Maftuna pulining 1/4 qismiga kitob, 1/5 qismiga daftar va 1/3 qismiga ruchka sotib oldi. Agar unda 35 ming so'm pul qolgan bo'lsa, daftar qancha turadi?",
    "variantlar": [15, 18, 20, 25],
    "javob": 20
  },
  {
    "savol": "300 betli kitobning 20%i o'qib tugatildi. Necha bet o'qilmay qoldi?",
    "variantlar": [210, 220, 230, 240],
    "javob": 240
  },
  {
    "savol": "Ali pulining 1/3 qismini, Vali esa 1/4 qismini ishlatdi. Agar ularning pullari 60 mingdan bo'lgan bo'lsa, jami qancha pullari qoldi?",
    "variantlar": [75, 80, 85, 90],
    "javob": 85
  },
  {
    "savol": "Do'kondagi 200 ming so'mlik kiyim 30% chegirma bilan sotilsa, uni qanchaga sotib olish mumkin?",
    "variantlar": [120000, 130000, 140000, 150000],
    "javob": 140000
  },
  {
    "savol": "Ishchining oyligi 6 mln so'm. Agar keyingi oydan oyliklar 15% oshayotgan bo'lsa, uning oyligi qanchaga oshadi?",
    "variantlar": [700000, 800000, 900000, 1000000],
    "javob": 900000
  },
  {
    "savol": "Mahsulot narxi 20% ga arzonlashtirilgandan so'ng 6400 so'm bo'ldi. Mahsulotning dastlabki narxini aniqlang.",
    "variantlar": [7000, 7500, 8000, 8500],
    "javob": 8000
  },
  {
    "savol": "Maktabdagi 400 o'quvchidan 210 tasi sport to'garaklariga qatnashadi. Necha foiz o'quvchi sport to'garaklariga qatnashmaydi?",
    "variantlar": ["45.5%", "46.5%", "47.5%", "48.5%"],
    "javob": "47.5%"
  },
  {
    "savol": "Mahsulot narxi 25% ga oshirilgandan so'ng 5000 so'm bo'ldi. Mahsulotning dastlabki narxini aniqlang.",
    "variantlar": [3000, 3500, 4000, 4500],
    "javob": 4000
  },
  {
    "savol": "Turnirda olingan 80 ta medaldan 48 tasi oltin va kumush medallar. Bronza medallar jami medallarning necha foizini tashkil qiladi?",
    "variantlar": ["35%", "40%", "45%", "50%"],
    "javob": "40%"
  },
  {
    "savol": "500 nafar o'quvchidan 120 nafari a'lo bahoga o'qiydi. A'lo bahoga o'qimaydigan o'quvchilar necha foizni tashkil qiladi?",
    "variantlar": ["70%", "72%", "74%", "76%"],
    "javob": "76%"
  },
  {
    "savol": "Zavodda ishlaydigan 120 nafar ishchidan 48 nafari ayollar. Erkaklar jami ishchilarning necha foizini tashkil qiladi?",
    "variantlar": ["50%", "55%", "60%", "65%"],
    "javob": "60%"
  },
  {
    "savol": "400 nafar o'quvchidan 150 nafari a'lo bahoga o'qiydi. A'lo bahoga o'qimaydigan o'quvchilar necha foizni tashkil qiladi?",
    "variantlar": ["60.5%", "61.5%", "62.5%", "63.5%"],
    "javob": "62.5%"
  },
  {
    "savol": "Mahsulot narxi 10% ga oshirilgandan keyin 13200 so'm bo'ldi. Mahsulotning dastlabki narxini aniqlang.",
    "variantlar": [11000, 11500, 12000, 12500],
    "javob": 12000
  },
  {
    "savol": "Reja bo'yicha 360 ta detal tayyorlanishi kerak edi. Agar 414 ta detal tayyorlangan bo'lsa, reja necha foizga orttirib bajarilgan?",
    "variantlar": ["12%", "13%", "14%", "15%"],
    "javob": "15%"
  },
  {
    "savol": "Reja bo'yicha 450 ta detal tayyorlanishi kerak edi. Agar 522 ta detal tayyorlangan bo'lsa, reja necha foizga orttirib bajarilgan?",
    "variantlar": ["14%", "15%", "16%", "17%"],
    "javob": "16%"
  },
  {
    "savol": "3/10 : 5 = x : 2/11",
    "variantlar": [0.012, 0.013, 0.014, 0.015],
    "javob": 0.0132
  },
  {
    "savol": "18 soni 15 sonidan necha foizga ko'p?",
    "variantlar": ["15%", "18%", "20%", "25%"],
    "javob": "20%"
  },
  {
    "savol": "3,2 : x = 4,8 : 1,2",
    "variantlar": [0.6, 0.7, 0.8, 0.9],
    "javob": 0.8
  },
  {
    "savol": "40 soni 50 sonidan necha foizga kam?",
    "variantlar": ["10%", "15%", "20%", "25%"],
    "javob": "20%"
  },
  {
    "savol": "2,4 : x = 2,5 : 15",
    "variantlar": [12.4, 13.4, 14.4, 15.4],
    "javob": 14.4
  },
  {
    "savol": "1,5 : 8x = 2,5 : 40",
    "variantlar": [2.5, 3, 3.5, 4],
    "javob": 3
  },
  {
    "savol": "24 : x = 35 : 140",
    "variantlar": [96, 98, 100, 102],
    "javob": 96
  },
  {
    "savol": "4,2 : 7x = 2,5 : 3,6",
    "variantlar": [0.764, 0.784, 0.804, 0.824],
    "javob": 0.864
  },
  {
    "savol": "40 : x = 12 : 9",
    "variantlar": [20, 25, 30, 35],
    "javob": 30
  },
  {
    "savol": "1 : 5 masshtabli chizma berilgan. Uzunligi 20 cm bo'lgan jism chizmada necha cm joy oladi?",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "2 : 3x = 5 : 12",
    "variantlar": [1.2, 1.4, 1.6, 1.8],
    "javob": 1.6
  },
  {
    "savol": "1:1000 masshtabli xaritada tasvirlangan 2 cm lik yo'lakning uzunligi necha m ga teng?",
    "variantlar": [10, 15, 20, 25],
    "javob": 20
  },
  {
    "savol": "4 : 7x = 8 : 21",
    "variantlar": [1.2, 1.3, 1.4, 1.5],
    "javob": 1.5
  },
  {
    "savol": "1:10 000 000 masshtabli xaritada 2 shahar orasidagi masofa 3 cm ga teng. Bu shaharlar orasidagi masofa necha km?",
    "variantlar": [200, 250, 300, 350],
    "javob": 300
  },
  {
    "savol": "1:4 000 000 masshtabli xaritada ikki shahar tasvirlangan. Agar ular orasidagi masofa 200 km bo'lsa, xaritada shaharlar orasidagi masofa necha cm?",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "Usta 20 ta detalni 6 kunda tayyorlaydi. U 1 kunda nechta detal tayyorlaydi?",
    "variantlar": [2.33, 2.83, 3.33, 3.83],
    "javob": 3.33
  },
  {
    "savol": "Ikki shahar orasidagi masofa 150 km ga teng. 1:3 000 000 masshtabli xaritada bu shaharlar orasidagi masofa necha cm bo'ladi?",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "Bir ishni 6 ta usta 20 kunda bajaradi. Shu ishni 12 kunda bajarish uchun nechta usta kerak?",
    "variantlar": [8, 9, 10, 11],
    "javob": 10
  },
  {
    "savol": "Bola 5 soatda 18 km yo'l bosdi. Xuddi shu tezlik bilan 8 soatda qancha yo'l bosib o'tadi?",
    "variantlar": [25.8, 26.8, 27.8, 28.8],
    "javob": 28.8
  },
  {
    "savol": "Ma'lum miqdordagi pulga 20000 so'mlik mahsulotdan 12 kg sotib olish mumkin. Xuddi shu pulga 15000 so'mlik mahsulotdan necha kg sotib olish mumkin?",
    "variantlar": [14, 15, 16, 17],
    "javob": 16
  },
  {
    "savol": "800 g eritmada 120 g tuz bor. 600 g shunday eritmada necha g tuz bor?",
    "variantlar": [70, 80, 90, 100],
    "javob": 90
  },
  {
    "savol": "O'quvchi kuniga 40 sahifa o'qib kitobni 7 kunda tugatdi. Agar u kuniga 35 sahifa o'qiganida necha kunda tugatar edi?",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "100 kg mevadan 60 l meva sharbati olinadi. 300 l meva sharbati olinishi uchun qancha meva kerak?",
    "variantlar": [400, 450, 500, 550],
    "javob": 500
  },
  {
    "savol": "Haydovchi 80 km/soat tezlik bilan 6 soatda manzilga yetib boradi. U 5 soatda manzilga yetib borishi uchun tezligi qanday bo'lishi kerak?",
    "variantlar": [86, 90, 96, 100],
    "javob": 96
  },
  {
    "savol": "5 litr yog'ning narxi 90 ming so'm bo'lsa, 7 litr yog'ni qanchaga sotib olish mumkin?",
    "variantlar": [116, 120, 126, 130],
    "javob": 126
  },
  {
    "savol": "Ma'lum ishni 4 kishi 6 kunda tugata oladi. Xuddi shu ishni 8 kishi necha kunda tugatadi?",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "52 sonini 5 va 8 sonlariga teskari proporsional bo'laklarga bo'ling.",
    "variantlar": ["20 va 32", "24 va 28", "30 va 22", "32 va 20"],
    "javob": "32 va 20"
  },
  {
    "savol": "18 sonini 2 va 7 sonlariga to'g'ri proporsional bo'laklarga bo'ling.",
    "variantlar": ["2 va 16", "3 va 15", "4 va 14", "5 va 13"],
    "javob": "4 va 14"
  },
  {
    "savol": "70 sonini 1/2 va 1/3 sonlariga teskari proporsional bo'laklarga bo'ling.",
    "variantlar": ["20 va 50", "28 va 42", "30 va 40", "35 va 35"],
    "javob": "28 va 42"
  },
  {
    "savol": "12 sonini 7, 14 va 28 sonlariga teskari proporsional bo'laklarga bo'ling.",
    "variantlar": ["2, 4, 6", "3, 4, 5", "4, 3, 5", "6, 4, 2"],
    "javob": "6, 4, 2"
  },
  {
    "savol": "74 sonini 4, 5 va 6 sonlariga teskari proporsional bo'laklarga bo'ling.",
    "variantlar": ["20, 24, 30", "24, 20, 30", "30, 24, 20", "30, 20, 24"],
    "javob": "30, 24, 20"
  },
  {
    "savol": "100 sonini 1, 2, 3 va 4 sonlariga to'g'ri proporsional bo'laklarga bo'ling.",
    "variantlar": ["5, 10, 15, 20", "10, 20, 30, 40", "15, 25, 35, 25", "20, 30, 40, 10"],
    "javob": "10, 20, 30, 40"
  },
  {
    "savol": "36 ning 2/3 qismiga 24 ning qanday qismi qo'shilsa, yig'indi 120 ning 30% iga teng bo'ladi?",
    "variantlar": ["1/2", "1/3", "1/4", "1/5"],
    "javob": "1/2"
  },
  {
    "savol": "48 ning 5/6 qismiga 30 ning qanday qismi qo'shilsa, yig'indi 200 ning 28% iga teng bo'ladi?",
    "variantlar": ["1/3", "2/5", "3/5", "2/3"],
    "javob": "2/3"
  },
  {
    "savol": "35 ning 2/7 qismiga 40 ning qanday qismi qo'shilsa, yig'indi 80 ning 20% iga teng bo'ladi?",
    "variantlar": ["0.1", "0.15", "0.2", "0.25"],
    "javob": 0.2
  },
  {
    "savol": "100 ning 2/5 qismiga 200 ning qanday qismi qo'shilsa, yig'indi 400 ning 25% iga teng bo'ladi?",
    "variantlar": ["0.1", "0.15", "0.2", "0.25"],
    "javob": 0.25
  },
  {
    "savol": "120 ning 5/8 qismiga 20 ning qanday qismi qo'shilsa, yig'indi 180 ning 50% iga teng bo'ladi?",
    "variantlar": ["0.25", "0.5", "0.75", "1"],
    "javob": 0.5
  },
  {
    "savol": "100 ning 40% iga 120 ning 15% i qo'shilsa, yig'indi 200 ning necha foiziga teng bo'ladi?",
    "variantlar": ["25%", "26%", "27%", "28%"],
    "javob": "26%"
  },
  {
    "savol": "200 ning 20% iga 150 ning 40% i qo'shilsa, yig'indi 400 ning necha foiziga teng bo'ladi?",
    "variantlar": ["20%", "25%", "30%", "35%"],
    "javob": "25%"
  },
  {
    "savol": "150 ning 60% iga 180 ning 10% i qo'shilsa, yig'indi 150 ning necha foiziga teng bo'ladi?",
    "variantlar": ["68%", "70%", "72%", "74%"],
    "javob": "72%"
  },
  {
    "savol": "250 ning 20% iga 240 ning 50% i qo'shilsa, yig'indi 500 ning necha foiziga teng bo'ladi?",
    "variantlar": ["32%", "34%", "36%", "38%"],
    "javob": "34%"
  },
  {
    "savol": "300 ning 15% iga 50 ning 30% i qo'shilsa, yig'indi 250 ning necha foiziga teng bo'ladi?",
    "variantlar": ["22%", "24%", "26%", "28%"],
    "javob": "24%"
  },
  {
    "savol": "Ko'paytuvchilardan biri 10% ga, ikkinchisi 20% ga orttirilsa, ko'paytma necha foizga ortadi?",
    "variantlar": ["30%", "31%", "32%", "33%"],
    "javob": "32%"
  },
  {
    "savol": "Ko'paytuvchilardan biri 20% ga, ikkinchisi 15% ga orttirilsa, ko'paytma necha foizga ortadi?",
    "variantlar": ["35%", "36%", "37%", "38%"],
    "javob": "38%"
  },
  {
    "savol": "To'g'ri to'rtburchakning eni 20% ga, bo'yi 30% ga kamaytirilsa, uning yuzi necha foizga kamayadi?",
    "variantlar": ["42%", "44%", "46%", "48%"],
    "javob": "44%"
  }

  ],






  theme9: [
  {
    "savol": "Tomoni 8 m ga teng bo'lgan kvadrat yuzini toping.",
    "variantlar": [54, 56, 64, 72],
    "javob": 64
  },
  {
    "savol": "Tomoni 12 cm ga teng bo'lgan kvadrat perimetrini toping.",
    "variantlar": [24, 36, 48, 144],
    "javob": 48
  },
  {
    "savol": "Perimetri 16 dm ga teng bo'lgan kvadrat yuzini toping.",
    "variantlar": [12, 14, 16, 18],
    "javob": 16
  },
  {
    "savol": "Perimetri 24 m ga teng bo'lgan kvadrat yuzini toping.",
    "variantlar": [24, 30, 36, 48],
    "javob": 36
  },
  {
    "savol": "Yuzi 121 cm² ga teng bo'lgan kvadrat perimetrini toping.",
    "variantlar": [24, 34, 44, 54],
    "javob": 44
  },
  {
    "savol": "Tomonlari 4 cm va 6 cm ga teng bo'lgan to'g'ri to'rtburchak perimetrini toping.",
    "variantlar": [10, 20, 24, 30],
    "javob": 20
  },
  {
    "savol": "Tomonlari 12 cm va 15 cm ga teng bo'lgan to'g'ri to'rtburchak perimetrini toping.",
    "variantlar": [27, 44, 54, 180],
    "javob": 54
  },
  {
    "savol": "Tomonlari 3 m va 5 m ga teng bo'lgan to'g'ri to'rtburchak yuzini toping.",
    "variantlar": [8, 12, 15, 16],
    "javob": 15
  },
  {
    "savol": "Tomonlari 12 m va 7 m ga teng bo'lgan to'g'ri to'rtburchak yuzini toping.",
    "variantlar": [74, 84, 94, 104],
    "javob": 84
  },
  {
    "savol": "Perimetri 24 m ga teng bo'lgan to'g'ri to'rtburchakning eni 5 m ga teng bo'lsa, uning bo'yini toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "Perimetri 28 cm ga teng bo'lgan to'g'ri to'rtburchakning bo'yi 3 cm ga teng bo'lsa, uning perimetri necha cm?",
    "variantlar": [20, 24, 28, 32],
    "javob": 28
  },
  {
    "savol": "Yuzi 28 cm² ga teng bo'lgan to'g'ri to'rtburchakning eni 4 cm ga teng bo'lsa, uning perimetrini toping.",
    "variantlar": [16, 18, 20, 22],
    "javob": 22
  },
  {
    "savol": "Yuzi 51 m² ga teng bo'lgan to'g'ri to'rtburchakning eni 3 m ga teng bo'lsa, uning perimetrini toping.",
    "variantlar": [30, 34, 38, 40],
    "javob": 40
  },
  {
    "savol": "Perimetri 16 cm ga teng bo'lgan to'g'ri to'rtburchakning eni 3 cm ga teng bo'lsa, uning yuzini toping.",
    "variantlar": [9, 12, 15, 18],
    "javob": 15
  },
  {
    "savol": "Perimetri 22 m ga teng bo'lgan to'g'ri to'rtburchakning bo'yi 7 m ga teng bo'lsa, uning yuzini toping.",
    "variantlar": [24, 28, 32, 36],
    "javob": 28
  },
  {
    "savol": "Tomonining uzunligi 6 m bo'lgan teng tomonli uchburchak perimetrini toping.",
    "variantlar": [12, 15, 18, 21],
    "javob": 18
  },
  {
    "savol": "Tomonlari 3 cm, 4 cm va 5 cm bo'lgan uchburchak perimetrini toping.",
    "variantlar": [10, 11, 12, 13],
    "javob": 12
  },
  {
    "savol": "Tomonlari 12 cm, 14 cm va 16 cm bo'lgan uchburchak perimetrini toping.",
    "variantlar": [32, 36, 40, 42],
    "javob": 42
  },
  {
    "savol": "Yon tomoni 5 cm, asosi 4 cm bo'lgan teng yonli uchburchak perimetrini toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 14
  },
  {
    "savol": "Uchburchakning eng katta tomoni 12 cm ga teng. Agar qolgan tomonlari katta tomondan 2 cm va 3 cm ga qisqa bo'lsa, uning perimetrini toping.",
    "variantlar": [25, 27, 29, 31],
    "javob": 29
  },
  {
    "savol": "To'g'ri burchakli uchburchakning katetlari 5 cm va 4 cm ga teng. Uchburchakning yuzini toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 10
  },
  {
    "savol": "To'g'ri burchakli uchburchakning katetlari 12 m va 6 m ga teng. Uning yuzini toping.",
    "variantlar": [36, 48, 56, 72],
    "javob": 36
  },
  {
    "savol": "Radiusi 5 cm ga teng bo'lgan aylana uzunligini toping.",
    "variantlar": ["8π", "9π", "10π", "12π"],
    "javob": "10π"
  },
  {
    "savol": "Radiusi 2 cm ga teng bo'lgan aylana uzunligini toping.",
    "variantlar": ["2π", "3π", "4π", "5π"],
    "javob": "4π"
  },
  {
    "savol": "Diametri 12 cm ga teng bo'lgan aylana uzunligini toping.",
    "variantlar": ["6π", "8π", "10π", "12π"],
    "javob": "12π"
  },
  {
    "savol": "Uzunligi 16π m ga teng bo'lgan aylana radiusini toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "Uzunligi 12π cm ga teng bo'lgan aylana diametrini toping.",
    "variantlar": [6, 8, 10, 12],
    "javob": 12
  },
  {
    "savol": "Radiusi 6 cm bo'lgan doira yuzini toping.",
    "variantlar": ["24π", "30π", "36π", "42π"],
    "javob": "36π"
  },
  {
    "savol": "Radiusi 12 cm bo'lgan doira yuzini toping.",
    "variantlar": ["100π", "121π", "144π", "169π"],
    "javob": "144π"
  },
  {
    "savol": "Diametri 14 cm bo'lgan doira yuzini toping.",
    "variantlar": ["36π", "42π", "49π", "56π"],
    "javob": "49π"
  },
  {
    "savol": "Yuzi 121π cm² bo'lgan doira radiusini toping.",
    "variantlar": [9, 10, 11, 12],
    "javob": 11
  },
  {
    "savol": "Yuzi 144π cm² bo'lgan doira diametrini toping.",
    "variantlar": [12, 18, 24, 30],
    "javob": 24
  },
  {
    "savol": "Qirrasi 3 ga teng bo'lgan kubning to'la yuzini toping.",
    "variantlar": [9, 27, 36, 54],
    "javob": 54
  },
  {
    "savol": "Qirralar yig'indisi 48 ga teng bo'lgan kubning hajmini toping.",
    "variantlar": [27, 48, 64, 125],
    "javob": 64
  },
  {
    "savol": "To'la sirti yuzi 96 bo'lgan kubning qirralari uzunliklari yig'indisini toping.",
    "variantlar": [24, 36, 48, 60],
    "javob": 48
  },
  {
    "savol": "Hajmi 27 ga teng bo'lgan kubning to'la yuzini toping.",
    "variantlar": [27, 36, 48, 54],
    "javob": 54
  },
  {
    "savol": "Asosining yuzi 16 ga teng bo'lgan kubning hajmini toping.",
    "variantlar": [48, 64, 72, 96],
    "javob": 64
  },
  {
    "savol": "To'la sirti 216 ga teng bo'lgan kubning qirrasini toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 6
  },
  {
    "savol": "Qirralari uzunligi yig'indisi 120 bo'lgan kubning to'la sirti yuzini toping.",
    "variantlar": [200, 400, 600, 800],
    "javob": 600
  },
  {
    "savol": "Qirrasi 5 ga teng bo'lgan kubning hajmini toping.",
    "variantlar": [15, 25, 75, 125],
    "javob": 125
  },
  {
    "savol": "Kubning yon sirti yuzi 64 ga teng. Kub hajmini toping.",
    "variantlar": [27, 64, 125, 216],
    "javob": 64
  },
  {
    "savol": "Asosining perimetri 12 ga teng bo'lgan kubning hajmini toping.",
    "variantlar": [8, 27, 64, 125],
    "javob": 27
  },
  {
    "savol": "Qirralari uzunliklari yig'indisi 52 ga teng bo'lgan to'g'ri burchakli parallelepipedning eni, bo'yi va balandligi yig'indisini toping.",
    "variantlar": [11, 12, 13, 14],
    "javob": 13
  },
  {
    "savol": "Asosining perimetri 14 ga, balandligi 4 ga teng bo'lgan to'g'ri burchakli parallelepipedning qirralari uzunliklari yig'indisini toping.",
    "variantlar": [22, 24, 26, 28],
    "javob": 22
  },
  {
    "savol": "Eni, bo'yi va balandligi mos ravishda 3, 5 va 6 ga teng bo'lgan to'g'ri burchakli parallelepipedning to'la sirti yuzini toping.",
    "variantlar": [96, 108, 126, 144],
    "javob": 126
  },
  {
    "savol": "Eni, bo'yi va balandligi mos ravishda 4, 6 va 8 ga teng bo'lgan to'g'ri burchakli parallelepiped to'la sirti yuzini toping.",
    "variantlar": [184, 196, 208, 220],
    "javob": 208
  },
  {
    "savol": "Asosining perimetri 24 ga, balandligi 5 ga teng bo'lgan to'g'ri burchakli parallelepiped yon sirti yuzini toping.",
    "variantlar": [80, 100, 120, 140],
    "javob": 120
  },
  {
    "savol": "Chizmada berilgan shakl perimetrini toping. Shakl: tomonlari 2 cm, 5 cm, 16 cm bo'lgan shakl.",
    "variantlar": [23, 26, 38, 46],
    "javob": 46
  },
  {
    "savol": "Chizmada berilgan shakl perimetrini toping. Shakl: tomonlari 5 cm, 1 cm, 3 cm, 8 cm bo'lgan shakl.",
    "variantlar": [17, 24, 28, 34],
    "javob": 34
  },
  {
    "savol": "Chizmada berilgan chiziq uzunligini toping. Shakl: tomonlari 1 cm, 3 cm, 7 cm, 6 cm, 1 cm bo'lgan shakl.",
    "variantlar": [15, 18, 24, 28],
    "javob": 24
  },
  {
    "savol": "Bo'yalgan shaklning yuzini toping. (Shakl haqida ma'lumot: kvadrat ichida doira yoki uchburchak bo'lishi mumkin)",
    "variantlar": [12, 16, 20, 24],
    "javob": 16
  },
  {
    "savol": "A, B, C nuqtalari bilan berilgan uchburchak yuzini toping. (Kataklar kvadrat)",
    "variantlar": [4, 6, 8, 10],
    "javob": 6
  },
  {
    "savol": "A, B, C, D nuqtalari bilan berilgan shakl yuzini toping. Pik formulasidan foydalaning.",
    "variantlar": [8, 10, 12, 14],
    "javob": 10
  },
  {
    "savol": "A, B, C, D nuqtalari bilan berilgan shakl yuzini toping. Pik formulasidan foydalaning.",
    "variantlar": [6, 8, 10, 12],
    "javob": 8
  },
  {
    "savol": "A, B, C, D, E nuqtalari bilan berilgan shakl yuzini toping. Pik formulasidan foydalaning.",
    "variantlar": [9, 11, 13, 15],
    "javob": 11
  },
  {
    "savol": "A, B, C, D, E nuqtalari bilan berilgan shakl yuzini toping. Pik formulasidan foydalaning.",
    "variantlar": [10, 12, 14, 16],
    "javob": 12
  },
  {
    "savol": "A, B, C, D, E, F nuqtalari bilan berilgan shakl yuzini toping. Pik formulasidan foydalaning.",
    "variantlar": [12, 14, 16, 18],
    "javob": 14
  },
  {
    "savol": "A va C nuqtalari orqali berilgan shakl yuzini toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "A, B, C nuqtalari bilan berilgan shakl yuzini toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  },
  {
    "savol": "A, B, C nuqtalari bilan berilgan shakl yuzini toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "A, B, C nuqtalari bilan berilgan shakl yuzini toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 5
  },
  {
    "savol": "A, B, C nuqtalari bilan berilgan shakl yuzini toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  }
  ],





  theme10: [
  {
    "savol": "(-1)¹⁰⁸ = (-1)¹⁰⁶ + (-2)⁶ ifodani hisoblang.",
    "variantlar": [62, 63, 64, 65],
    "javob": 64
  },
  {
    "savol": "(3⁻² + 2⁻¹) · 18/11 ifodani hisoblang.",
    "variantlar": [0.5, 0.75, 1, 1.25],
    "javob": 1
  },
  {
    "savol": "(7⁻¹ - 2) : 13 ifodani hisoblang.",
    "variantlar": [-0.1428, -0.1328, -0.1228, -0.1128],
    "javob": -0.1428
  },
  {
    "savol": "(4⁻² + 5⁻¹) · 80 ifodani hisoblang.",
    "variantlar": [18, 20, 22, 24],
    "javob": 20
  },
  {
    "savol": "(2⁻³ + 3⁻²) : 17/24 ifodani hisoblang.",
    "variantlar": [0.5, 0.75, 1, 1.25],
    "javob": 1
  },
  {
    "savol": "(3⁻¹ + 5⁻²)(2⁻² + 7⁻¹) ifodani hisoblang.",
    "variantlar": [0.2, 0.25, 0.3, 0.35],
    "javob": 0.3
  },
  {
    "savol": "(3/2)⁻¹ + (2/3)⁻² ifodani hisoblang.",
    "variantlar": [2.5, 2.75, 3, 3.25],
    "javob": 3
  },
  {
    "savol": "(5/2)³ · 16 ifodani hisoblang.",
    "variantlar": [200, 225, 250, 275],
    "javob": 250
  },
  {
    "savol": "(2/3)³ · 9 ifodani hisoblang.",
    "variantlar": [2.5, 2.667, 2.75, 3],
    "javob": 2.667
  },
  {
    "savol": "(5² - 2²) : 25 ifodani hisoblang.",
    "variantlar": [0.8, 0.84, 0.9, 1],
    "javob": 0.84
  },
  {
    "savol": "(2² - 8) ifodani hisoblang.",
    "variantlar": [-4, -3, -2, -1],
    "javob": -4
  },
  {
    "savol": "a¹² · a⁸ ni soddalashtiring.",
    "variantlar": ["a⁴", "a²⁰", "a⁹⁶", "a²⁴"],
    "javob": "a²⁰"
  },
  {
    "savol": "a²⁰ · a⁴ ni soddalashtiring.",
    "variantlar": ["a⁵", "a¹⁶", "a²⁴", "a⁸⁰"],
    "javob": "a²⁴"
  },
  {
    "savol": "a¹² · a⁹ ni soddalashtiring.",
    "variantlar": ["a³", "a²¹", "a¹⁰⁸", "a²⁷"],
    "javob": "a²¹"
  },
  {
    "savol": "a²¹ · a²⁰ ni soddalashtiring.",
    "variantlar": ["a¹", "a⁴¹", "a⁴²⁰", "a²⁹"],
    "javob": "a⁴¹"
  },
  {
    "savol": "(a⁴)³ ni soddalashtiring.",
    "variantlar": ["a⁷", "a¹²", "a⁶⁴", "a⁸"],
    "javob": "a¹²"
  },
  {
    "savol": "(a¹⁰)³ ni soddalashtiring.",
    "variantlar": ["a⁷", "a¹³", "a³⁰", "a¹⁰⁰⁰"],
    "javob": "a³⁰"
  },
  {
    "savol": "(ab)³ ni soddalashtiring.",
    "variantlar": ["a³b", "ab³", "a³b³", "3ab"],
    "javob": "a³b³"
  },
  {
    "savol": "(a²b³)² ni soddalashtiring.",
    "variantlar": ["a⁴b⁵", "a⁴b⁶", "a²b⁶", "a⁴b⁹"],
    "javob": "a⁴b⁶"
  },
  {
    "savol": "(a²/b³)⁴ ni soddalashtiring.",
    "variantlar": ["a⁶/b⁷", "a⁸/b¹²", "a²/b³", "a⁶/b¹²"],
    "javob": "a⁸/b¹²"
  },
  {
    "savol": "a² · (a³/a)² ni soddalashtiring.",
    "variantlar": ["a⁶", "a⁷", "a⁸", "a⁹"],
    "javob": "a⁶"
  },
  {
    "savol": "2·2·2·2·2 ni daraja shaklida yozing.",
    "variantlar": ["2⁴", "2⁵", "2⁶", "2⁷"],
    "javob": "2⁵"
  },
  {
    "savol": "3·3·3·3·3 ni daraja shaklida yozing.",
    "variantlar": ["3⁴", "3⁵", "3⁶", "3⁷"],
    "javob": "3⁵"
  },
  {
    "savol": "4·4·4·4·4 ni daraja shaklida yozing.",
    "variantlar": ["4⁴", "4⁵", "4⁶", "4⁷"],
    "javob": "4⁵"
  },
  {
    "savol": "5·5·5·5·5 ni daraja shaklida yozing.",
    "variantlar": ["5⁴", "5⁵", "5⁶", "5⁷"],
    "javob": "5⁵"
  },
  {
    "savol": "2² + 3⁴ ni hisoblang.",
    "variantlar": [81, 83, 85, 87],
    "javob": 85
  },
  {
    "savol": "4³ - 2³ - 3² ni hisoblang.",
    "variantlar": [45, 47, 49, 51],
    "javob": 47
  },
  {
    "savol": "5³ + 4³ - 2⁴ ni hisoblang.",
    "variantlar": [165, 175, 185, 195],
    "javob": 185
  },
  {
    "savol": "100 - 2⁵ + 4² ni hisoblang.",
    "variantlar": [76, 78, 80, 82],
    "javob": 78
  },
  {
    "savol": "3⁴ + 2⁵ - 6² ni hisoblang.",
    "variantlar": [65, 67, 69, 71],
    "javob": 69
  },
  {
    "savol": "-4² - (-4)² + (-2)⁴ ni hisoblang.",
    "variantlar": [-12, -14, -16, -18],
    "javob": -16
  },
  {
    "savol": "(-2)³ - (-4)² + 2⁵ ni hisoblang.",
    "variantlar": [4, 6, 8, 10],
    "javob": 8
  },
  {
    "savol": "-5³ + (-6)² - (-25)¹ ni hisoblang.",
    "variantlar": [-140, -142, -144, -146],
    "javob": -144
  },
  {
    "savol": "(-1)¹⁰⁷ + (-1)¹⁰⁶ + 1000⁰ ni hisoblang.",
    "variantlar": [0, 1, 2, 3],
    "javob": 1
  },
  {
    "savol": "(3 - 3/4)⁻¹ - (1/2)⁻² · 7 + 5 ifodani hisoblang.",
    "variantlar": [-6, -4, -2, 0],
    "javob": -4
  },
  {
    "savol": "-(7/5)⁻² - (1/5)⁰ : (1/13)⁻¹ ifodani hisoblang.",
    "variantlar": [-0.51, -0.41, -0.31, -0.21],
    "javob": -0.41
  },
  {
    "savol": "((3 - 1/4)⁴ + 3 · (3/2)⁻³)⁻²¹ + (-7 - 1/9)⁰ ifodani hisoblang.",
    "variantlar": [0, 1, 2, 3],
    "javob": 1
  },
  {
    "savol": "-(-1)⁴ + (-1)³ + (-1)² + (-1)¹ ifodani hisoblang.",
    "variantlar": [-2, -1, 0, 1],
    "javob": -2
  },
  {
    "savol": "(-1)⁴ + (-1)³ + (-1)² + (-11)⁰ ifodani hisoblang.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "2⁴ · 4⁵ · 8³ ni asosi 2 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["2²⁰", "2²²", "2²⁴", "2²⁶"],
    "javob": "2²⁶"
  },
  {
    "savol": "16¹² · 32⁸ ni asosi 2 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["2⁶⁴", "2⁷²", "2⁸⁰", "2⁸⁸"],
    "javob": "2⁸⁸"
  },
  {
    "savol": "1024⁵ · 512⁵ ni asosi 2 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["2⁷⁵", "2⁸⁰", "2⁸⁵", "2⁹⁰"],
    "javob": "2⁸⁵"
  },
  {
    "savol": "(4³ : 8)⁴ ni asosi 2 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["2⁸", "2⁹", "2¹⁰", "2¹²"],
    "javob": "2¹²"
  },
  {
    "savol": "(16⁷ : 8⁸)¹⁰ ni asosi 2 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["2⁵", "2¹⁰", "2²⁰", "2³⁰"],
    "javob": "2¹⁰"
  },
  {
    "savol": "2⁹ + 2⁹ ni hisoblang.",
    "variantlar": [512, 1024, 2048, 4096],
    "javob": 1024
  },
  {
    "savol": "2⁸ + 2⁸ + 2⁸ + 2⁸ ni hisoblang.",
    "variantlar": [256, 512, 1024, 2048],
    "javob": 1024
  },
  {
    "savol": "1024⁵ / (32 · 256⁴) ni hisoblang.",
    "variantlar": [8, 16, 32, 64],
    "javob": 32
  },
  {
    "savol": "(2 · 4 · 8 · 16 · 32)⁵ ni asosi 2 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["2⁷⁵", "2⁸⁵", "2⁹⁵", "2¹⁰⁵"],
    "javob": "2⁷⁵"
  },
  {
    "savol": "a⁹ ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(a³)³", "(a⁶)³", "(a²)³", "(a⁴)³"],
    "javob": "(a³)³"
  },
  {
    "savol": "a¹²b⁶ ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(a⁴b²)³", "(a⁶b³)³", "(a³b)³", "(a²b)³"],
    "javob": "(a⁴b²)³"
  },
  {
    "savol": "64a³ ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(4a)³", "(8a)³", "(16a)³", "(32a)³"],
    "javob": "(4a)³"
  },
  {
    "savol": "27b⁹ ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(3b³)³", "(3b⁶)³", "(9b³)³", "(27b³)³"],
    "javob": "(3b³)³"
  },
  {
    "savol": "125a³b⁹ ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(5ab³)³", "(5a³b³)³", "(25ab³)³", "(5ab⁶)³"],
    "javob": "(5ab³)³"
  },
  {
    "savol": "a¹²b⁹c³⁰ ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(a⁴b³c¹⁰)³", "(a⁶b³c¹⁰)³", "(a⁴b³c¹⁵)³", "(a³b³c¹⁰)³"],
    "javob": "(a⁴b³c¹⁰)³"
  },
  {
    "savol": "216a²¹b²⁴c²⁷ ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(6a⁷b⁸c⁹)³", "(6a⁷b⁶c⁹)³", "(6a⁸b⁸c⁹)³", "(6a⁷b⁸c⁷)³"],
    "javob": "(6a⁷b⁸c⁹)³"
  },
  {
    "savol": "0.008 · a¹²b⁹ ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(0.2a⁴b³)³", "(0.2a³b³)³", "(0.2a⁴b²)³", "(0.02a⁴b³)³"],
    "javob": "(0.2a⁴b³)³"
  },
  {
    "savol": "0.125 · a⁴⁵b⁶⁰ ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(0.5a¹⁵b²⁰)³", "(0.5a¹⁵b¹⁵)³", "(0.5a²⁰b²⁰)³", "(0.5a¹⁰b²⁰)³"],
    "javob": "(0.5a¹⁵b²⁰)³"
  },
  {
    "savol": "-(27/8) · c⁴⁵ · n¹² ni ko'rsatkichi 3 bo'lgan daraja shaklida tasvirlang.",
    "variantlar": ["(-1.5c¹⁵n⁴)³", "(-1.5c¹⁵n³)³", "(-1.5c¹⁰n⁴)³", "(-1.5c¹⁵n⁶)³"],
    "javob": "(-1.5c¹⁵n⁴)³"
  },
  {
    "savol": "21⁴ / (3⁴ · 7²) ni hisoblang.",
    "variantlar": [9, 12, 15, 18],
    "javob": 9
  },
  {
    "savol": "18⁵ / (2⁵ · 3⁹) ni hisoblang.",
    "variantlar": [32, 36, 40, 44],
    "javob": 32
  },
  {
    "savol": "33² · 11² ifodani hisoblang.",
    "variantlar": [131769, 132769, 133769, 134769],
    "javob": 131769
  },
  {
    "savol": "31² · 11¹¹ ifodani soddalashtiring.",
    "variantlar": ["31²·11¹¹", "341¹¹", "31·11¹¹", "341¹³"],
    "javob": "31²·11¹¹"
  },
  {
    "savol": "(1,2)⁻³ : 1,25⁴ ifodani hisoblang.",
    "variantlar": [0.32, 0.36, 0.4, 0.44],
    "javob": 0.4
  },
  {
    "savol": "36⁴ / (27 · 3⁹) ni hisoblang.",
    "variantlar": [12, 16, 18, 24],
    "javob": 16
  },
  {
    "savol": "(1/4)³ : (0,5)² : (1,7)⁰ ifodani hisoblang.",
    "variantlar": [0.015, 0.0156, 0.016, 0.0165],
    "javob": 0.0156
  },
  {
    "savol": "100⁵ / (2¹¹ · 5⁸) ni hisoblang.",
    "variantlar": [1250, 1500, 1750, 2000],
    "javob": 1250
  },
  {
    "savol": "(-0,75)⁵ : (-1/5)³ : (7/9)² ifodani hisoblang.",
    "variantlar": [-0.5, -0.45, -0.4, -0.35],
    "javob": -0.45
  },
  {
    "savol": "3²²²² + 3²²²² + 3²²²²² + 3²²²²³ ifodani soddalashtiring.",
    "variantlar": ["3²²²²·(2+3+3²)", "3²²²³·(3)", "3²²²²·(2+3+9)", "3²²²²·(2+3+3³)"],
    "javob": "3²²²²·(2+3+9)"
  },
  {
    "savol": "1/625 : (-3·3/4)⁴ : (3/5)² : (2/3)³ ifodani hisoblang.",
    "variantlar": [0.01, 0.02, 0.03, 0.04],
    "javob": 0.02
  },
  {
    "savol": "(2¹⁰⁰ + 2¹⁰⁰ + 2¹⁰¹ + 2¹⁰²) / (2⁹⁹ + 2⁹⁹ + 2⁹⁹) ifodani hisoblang.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "(4/5)⁴ : (15/4)³ ifodani hisoblang.",
    "variantlar": [0.02, 0.03, 0.04, 0.05],
    "javob": 0.04
  },
  {
    "savol": "(1/3)⁴ : (2/4)² ifodani hisoblang.",
    "variantlar": [0.0123, 0.0124, 0.0125, 0.0126],
    "javob": 0.0123
  },
  {
    "savol": "2¹⁰ : (2³·3⁴·5⁴)/(6²·8⁴·10³) ifodani hisoblang.",
    "variantlar": [0.5, 0.8, 1, 1.2],
    "javob": 1
  },
  {
    "savol": "(336³·165⁴)/(8⁸⁴·210³) ifodani hisoblang.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  }
  ],




  theme11: [
  {
    "savol": "1 m² 2 cm² necha cm² ga teng?",
    "variantlar": [10002, 10020, 10200, 12000],
    "javob": 10002
  },
  {
    "savol": "600 m² ni ar da ifodalang.",
    "variantlar": [3, 4, 5, 6],
    "javob": 6
  },
  {
    "savol": "2 m² 7 dm² 3 cm² necha cm² ga teng?",
    "variantlar": [20703, 27003, 20073, 20730],
    "javob": 20703
  },
  {
    "savol": "3,2 ar ni m² da ifodalang.",
    "variantlar": [300, 310, 320, 330],
    "javob": 320
  },
  {
    "savol": "5 km 54 m necha m ga teng?",
    "variantlar": [5054, 50054, 500054, 5000],
    "javob": 5054
  },
  {
    "savol": "1 km² ni gektarda ifodalang.",
    "variantlar": [10, 100, 1000, 10000],
    "javob": 100
  },
  {
    "savol": "3 km 240 m necha km ga teng?",
    "variantlar": [3.24, 3.25, 3.3, 3.4],
    "javob": 3.24
  },
  {
    "savol": "145 m² ni km² da ifodalang.",
    "variantlar": [0.000145, 0.00145, 0.0145, 0.145],
    "javob": 0.000145
  },
  {
    "savol": "3 m 4 dm 12 cm necha dm ga teng?",
    "variantlar": [34.2, 35.2, 36.2, 37.2],
    "javob": 35.2
  },
  {
    "savol": "1 km² 4000 m² ni gektarda ifodalang.",
    "variantlar": [100.4, 101.4, 102.4, 104],
    "javob": 100.4
  },
  {
    "savol": "2546 m necha km ga teng?",
    "variantlar": [2.456, 2.5, 2.546, 2.6],
    "javob": 2.546
  },
  {
    "savol": "145 ga 250 ar ni km² da ifodalang.",
    "variantlar": [1.4525, 1.475, 1.5, 1.525],
    "javob": 1.4525
  },
  {
    "savol": "45 cm 54 mm necha dm ga teng?",
    "variantlar": [4.5, 4.8, 5.04, 5.4],
    "javob": 5.04
  },
  {
    "savol": "1 m³ ni dm³ da ifodalang.",
    "variantlar": [10, 100, 1000, 10000],
    "javob": 1000
  },
  {
    "savol": "1 m² ni dm² da ifodalang.",
    "variantlar": [10, 100, 1000, 10000],
    "javob": 100
  },
  {
    "savol": "2 dm³ 120 cm³ ni cm³ da ifodalang.",
    "variantlar": [1200, 2000, 2120, 2200],
    "javob": 2120
  },
  {
    "savol": "3 m² 125 dm² ni dm² da ifodalang.",
    "variantlar": [300, 325, 425, 525],
    "javob": 425
  },
  {
    "savol": "21 cm² ni dm² da ifodalang.",
    "variantlar": [0.21, 2.1, 21, 210],
    "javob": 0.21
  },
  {
    "savol": "2 dm² 3 cm² ni mm² da ifodalang.",
    "variantlar": [20000, 20003, 20300, 23000],
    "javob": 20300
  },
  {
    "savol": "1000 m³ ni km³ da ifodalang.",
    "variantlar": [0.000001, 0.00001, 0.0001, 0.001],
    "javob": 0.000001
  },
  {
    "savol": "1 m³ ni litrda ifodalang.",
    "variantlar": [10, 100, 1000, 10000],
    "javob": 1000
  },
  {
    "savol": "25 m³ 12 dm³ 150 cm³ ni litrda ifodalang.",
    "variantlar": [25012.15, 25120.15, 25121.5, 25122],
    "javob": 25012.15
  },
  {
    "savol": "10 cm³ ni mm³ da ifodalang.",
    "variantlar": [100, 1000, 10000, 100000],
    "javob": 10000
  },
  {
    "savol": "3 cm³ 120 mm³ ni cm³ da ifodalang.",
    "variantlar": [3.12, 3.2, 3.12, 4.12],
    "javob": 3.12
  },
  {
    "savol": "12 kg ni grammda ifodalang.",
    "variantlar": [120, 1200, 12000, 120000],
    "javob": 12000
  },
  {
    "savol": "140 gramm ni kg da ifodalang.",
    "variantlar": [0.14, 1.4, 14, 140],
    "javob": 0.14
  },
  {
    "savol": "3 sr 120 kg ni kg da ifodalang.",
    "variantlar": [312, 420, 520, 620],
    "javob": 420
  },
  {
    "savol": "2 t 4 sr 56 kg ni kg da ifodalang.",
    "variantlar": [2000, 2400, 2456, 2500],
    "javob": 2456
  },
  {
    "savol": "3 sr 5 kg ni tonnada ifodalang.",
    "variantlar": [0.305, 0.35, 0.5, 3.5],
    "javob": 0.305
  },
  {
    "savol": "12 t 7 sr 12 kg ni grammda ifodalang.",
    "variantlar": [12712000, 1271200, 12712, 127120],
    "javob": 12712000
  },
  {
    "savol": "1 t 56 kg 200 grammni srdda ifodalang.",
    "variantlar": [10.562, 10.562, 10.562, 10.562],
    "javob": 10.562
  },
  {
    "savol": "1 soatni sekundda ifodalang.",
    "variantlar": [60, 600, 3600, 36000],
    "javob": 3600
  },
  {
    "savol": "1 soat 24 minutni sekundda ifodalang.",
    "variantlar": [3600, 5040, 5040, 5040],
    "javob": 5040
  },
  {
    "savol": "2 soat 12 minutni soatda ifodalang.",
    "variantlar": [2.1, 2.2, 2.3, 2.4],
    "javob": 2.2
  },
  {
    "savol": "3 soat, 25 minut, 36 sekundni minutda ifodalang.",
    "variantlar": [205.6, 206.6, 207.6, 208.6],
    "javob": 205.6
  },
  {
    "savol": "1 soat 2 minutni soatda ifodalang.",
    "variantlar": [1.02, 1.03, 1.04, 1.05],
    "javob": 1.03
  },
  {
    "savol": "a - (b - c - d) ifodani qavslarsiz yozing.",
    "variantlar": ["a - b - c - d", "a - b + c + d", "a + b - c - d", "a - b + c - d"],
    "javob": "a - b + c + d"
  },
  {
    "savol": "x - (y + z - t) ifodani qavslarsiz yozing.",
    "variantlar": ["x - y - z - t", "x - y - z + t", "x - y + z - t", "x + y - z - t"],
    "javob": "x - y - z + t"
  },
  {
    "savol": "m + (-n - k + l) ifodani qavslarsiz yozing.",
    "variantlar": ["m - n - k + l", "m - n + k - l", "m + n - k - l", "m + n + k - l"],
    "javob": "m - n - k + l"
  },
  {
    "savol": "a - (b + (c - d)) ifodani qavslarsiz yozing.",
    "variantlar": ["a - b - c - d", "a - b - c + d", "a - b + c - d", "a + b - c - d"],
    "javob": "a - b - c + d"
  },
  {
    "savol": "a - (-b - (c - d)) ifodani qavslarsiz yozing.",
    "variantlar": ["a + b - c - d", "a + b + c - d", "a - b - c + d", "a + b + c + d"],
    "javob": "a + b + c - d"
  },
  {
    "savol": "a - (b - (c - (d - (e + f)))) ifodani qavslarsiz yozing.",
    "variantlar": ["a - b - c + d - e - f", "a - b + c - d + e + f", "a - b - c + d - e + f", "a - b + c - d - e - f"],
    "javob": "a - b + c - d + e + f"
  },
  {
    "savol": "x - (y - z - (a - b) - d) ifodani qavslarsiz yozing.",
    "variantlar": ["x - y + z + a - b + d", "x - y - z + a - b - d", "x - y + z - a + b - d", "x - y + z + a - b - d"],
    "javob": "x - y + z + a - b - d"
  },
  {
    "savol": "a - (b - (c - (d - (e - f)))) ifodani qavslarsiz yozing.",
    "variantlar": ["a - b + c - d + e - f", "a - b - c + d - e + f", "a + b - c - d + e - f", "a - b + c + d - e - f"],
    "javob": "a - b + c - d + e - f"
  },
  {
    "savol": "a + (b - (c + (d - (e + f)))) ifodani qavslarsiz yozing.",
    "variantlar": ["a + b - c - d + e + f", "a + b - c + d - e - f", "a - b + c - d + e + f", "a + b + c - d - e - f"],
    "javob": "a + b - c - d + e + f"
  },
  {
    "savol": "a - (b + (c + (d - (e - f)))) ifodani qavslarsiz yozing.",
    "variantlar": ["a - b - c - d + e - f", "a - b - c - d - e + f", "a - b - c + d - e - f", "a + b - c - d + e - f"],
    "javob": "a - b - c - d + e - f"
  },
  {
    "savol": "a sonning uchlangani bilan b sonning ikkilangani yig'indisini algebraik ifoda shaklida yozing.",
    "variantlar": ["a + 3b + 2", "3a + 2b", "a·3 + b·2", "3a·2b"],
    "javob": "3a + 2b"
  },
  {
    "savol": "a va b sonlar yig'indisining kvadratini algebraik ifoda shaklida yozing.",
    "variantlar": ["a² + b²", "(a + b)²", "a² + 2ab + b²", "a + b²"],
    "javob": "(a + b)²"
  },
  {
    "savol": "a va b sonlar kublari ayirmasini algebraik ifoda shaklida yozing.",
    "variantlar": ["a³ - b³", "(a - b)³", "a - b³", "a³ + b³"],
    "javob": "a³ - b³"
  },
  {
    "savol": "a va b sonlar yig'indisining kubini algebraik ifoda shaklida yozing.",
    "variantlar": ["a³ + b³", "(a + b)³", "a³ + 3a²b + 3ab² + b³", "a + b³"],
    "javob": "(a + b)³"
  },
  {
    "savol": "(a + 2b)² ifodaning qiymatini a = -2,3 va b = 1,1 bo'lganda hisoblang.",
    "variantlar": [0.01, 0.1, 1, 10],
    "javob": 0.01
  },
  {
    "savol": "a soni bilan b sonining kvadrati yig'indisini algebraik ifoda shaklida yozing.",
    "variantlar": ["a + b²", "a² + b", "(a + b)²", "a² + b²"],
    "javob": "a + b²"
  },
  {
    "savol": "(4a + 6b)/(2a - 3b) ifodaning qiymatini a = 5 va b = 3 bo'lganda hisoblang.",
    "variantlar": [38, 38, 38, 38],
    "javob": 38
  },
  {
    "savol": "a sonining kubi bilan b sonining kvadrati ayirmasini algebraik ifoda shaklida yozing.",
    "variantlar": ["a³ - b²", "a² - b³", "a³ - b", "a - b²"],
    "javob": "a³ - b²"
  },
  {
    "savol": "(4a + 3b - 2c)/(a + b + c) ifodaning qiymatini a = 7, b = -6 va c = 2 bo'lganda hisoblang.",
    "variantlar": [2, 3, 4, 5],
    "javob": 4
  },
  {
    "savol": "a va b sonlari yig'indisi bilan shu sonlar ayirmasining ko'paytmasini algebraik ifoda shaklida yozing.",
    "variantlar": ["(a + b)(a - b)", "(a + b)²", "(a - b)²", "a² - b²"],
    "javob": "(a + b)(a - b)"
  },
  {
    "savol": "a sonining kubi bilan b sonining ikkilangani yig'indisini algebraik ifoda shaklida yozing.",
    "variantlar": ["a³ + 2b", "a³ + b²", "2a³ + b", "a³ + b"],
    "javob": "a³ + 2b"
  },
  {
    "savol": "S = 2ab + 2bc + 2ca bo'lsa, S ning qiymatini a = 1,2; b = 2 va c = 3 bo'lganda hisoblang.",
    "variantlar": [36, 36.6, 36.8, 37],
    "javob": 36.8
  },
  {
    "savol": "a, b, c sonlarining kvadratlari yig'indisini algebraik ifoda shaklida yozing.",
    "variantlar": ["a² + b² + c²", "(a + b + c)²", "a + b + c", "a²b²c²"],
    "javob": "a² + b² + c²"
  },
  {
    "savol": "S = (a + b)/(2h) bo'lsa, S ning qiymatini a = 4; b = 1,2 va h = 5 bo'lganda hisoblang.",
    "variantlar": [0.52, 0.62, 0.72, 0.82],
    "javob": 0.52
  },
  {
    "savol": "a va b sonlar yig'indisining shu sonlar ayirmasiga nisbatini algebraik ifoda shaklida yozing.",
    "variantlar": ["(a + b)/(a - b)", "a + b/a - b", "(a - b)/(a + b)", "a/b"],
    "javob": "(a + b)/(a - b)"
  },
  {
    "savol": "Birinchi kuni a dona mahsulot tayyorlandi. Ikkinchi kuni birinchi kundagidan b dona ko'p mahsulot tayyorlangan. Shu ikki kunda qancha mahsulot tayyorlangan?",
    "variantlar": ["a + b", "2a + b", "a + 2b", "ab"],
    "javob": "2a + b"
  },
  {
    "savol": "Har biri a so'mdan b dona daftar va har biri e so'mdan d dona kitob sotib olindi. Xarid uchun jami qancha pul to'langan?",
    "variantlar": ["ab + ed", "a + b + e + d", "(a + e)(b + d)", "a·b·e·d"],
    "javob": "ab + ed"
  },
  {
    "savol": "a dona qutining har birida b tadan qalam bor. Jami qalamlar sonini toping.",
    "variantlar": ["a + b", "a - b", "a·b", "a/b"],
    "javob": "a·b"
  },
  {
    "savol": "Konsertga 3 so'mlik a dona va 4 so'mlik 2a dona bilet sotilgan. Jami tushum qanchaga teng bo'lgan?",
    "variantlar": ["3a + 4·2a", "3a + 8a", "11a", "12a"],
    "javob": "11a"
  },
  {
    "savol": "Hasanning puli Husanning pulidan a so'mga ko'p. Hasan Husanga necha so'm pul bersa, ularning pullari teng bo'ladi?",
    "variantlar": ["a", "a/2", "2a", "a/3"],
    "javob": "a/2"
  },
  {
    "savol": "Hasan Husandan a yoshga katta. Agar Husan b yoshda bo'lsa, ularning yoshlari yig'indisini toping.",
    "variantlar": ["a + b", "a + 2b", "2a + b", "2b + a"],
    "javob": "2b + a"
  },
  {
    "savol": "Kitobning narxi a% ga oshirildi. Uning dastlabki narxini hosil qilish uchun, yangi narxini necha foizga kamaytirish kerak?",
    "variantlar": ["a%", "(100a)/(100+a)%", "(100a)/(100-a)%", "a/(100+a)%"],
    "javob": "(100a)/(100+a)%"
  },
  {
    "savol": "a²(b + b)³ : (-a³(a + b)²) ifodani soddalashtiring.",
    "variantlar": ["-(a⁻¹)(b + b)³/(a + b)²", "-(a⁻¹)(2b)³/(a + b)²", "-a⁵(2b)³/(a + b)²", "-a⁵(b + b)³"],
    "javob": "-(a⁻¹)(2b)³/(a + b)²"
  },
  {
    "savol": "(3a⁴b⁷)⁴ : (9a⁸b¹³)² ifodaning qiymatini a = 1,14 va b = 2,5 bo'lganda hisoblang.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "(1,2a³b²c)⁴ : (1,2a⁴b²c)³ ifodaning qiymatini a = 0,27; b = 0,6; c = 1,25 bo'lganda hisoblang.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "4a² : (a⁻¹b²)³ : (ab⁻²)² ifodaning qiymatini a = 0,25; b = 3 bo'lganda hisoblang.",
    "variantlar": [1, 2, 3, 4],
    "javob": 4
  },
  {
    "savol": "(5ab)² : (2a²b²c)⁴ ifodani soddalashtiring.",
    "variantlar": ["(25a²b²)/(16a⁸b⁸c⁴)", "(25)/(16a⁶b⁶c⁴)", "(25a⁶b⁶c⁴)/(16)", "(25a⁶)/(16b⁶c⁴)"],
    "javob": "(25)/(16a⁶b⁶c⁴)"
  },
  {
    "savol": "(15a⁴b³c²) : (5a³b³c) ifodaning qiymatini a = 0,5; b = 2,7; c = 4 bo'lganda hisoblang.",
    "variantlar": [24, 24, 24, 24],
    "javob": 24
  }
  ],






  theme12: [
  {
    "savol": "x³ + 3x + 7 + (2x² - 3x + 2) ni soddalashtiring.",
    "variantlar": ["x³ + 2x² + 9", "x³ + 2x² + 6x + 9", "x³ + 2x² + 9", "x³ + 2x² + 6x + 5"],
    "javob": "x³ + 2x² + 9"
  },
  {
    "savol": "2x² - 4x + 3 = (2x² + 3x - 2) tenglikni tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Aniqlab bo'lmaydi", "Faqat x=0 da to'g'ri"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "x³ + 2x + 1 = (3x³ - 2x² + 2x) tenglikni tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Aniqlab bo'lmaydi", "Faqat x=1 da to'g'ri"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "2a + 4b = (-2a + 3b) tenglikni tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Aniqlab bo'lmaydi", "Faqat a=0 da to'g'ri"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "3a - 5b + (2a - 3b) ni soddalashtiring.",
    "variantlar": ["5a - 8b", "a - 8b", "5a - 2b", "a - 2b"],
    "javob": "5a - 8b"
  },
  {
    "savol": "4a + 5b = (3a - 8b) tenglikni tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Aniqlab bo'lmaydi", "Faqat a=0 da to'g'ri"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "x² + 2x = (x² + 3x - 1) + (x² - 2x + 1) tenglikni tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Aniqlab bo'lmaydi", "Faqat x=0 da to'g'ri"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "5a - 4b + c = (4a + 3b) - (b + c) tenglikni tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Aniqlab bo'lmaydi", "Faqat a=0 da to'g'ri"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "3a - (2b + 3c) - (4a + 2b - c) ni soddalashtiring.",
    "variantlar": ["-a - 4b - 2c", "-a - 4b - 4c", "7a - 4b - 2c", "7a - 4b - 4c"],
    "javob": "-a - 4b - 2c"
  },
  {
    "savol": "x² + 2xy - (3y² + xy + x²) ni soddalashtiring.",
    "variantlar": ["xy - 3y²", "3xy - 3y²", "x² + xy - 3y²", "2xy - 3y²"],
    "javob": "xy - 3y²"
  },
  {
    "savol": "xy + 3x² + (-2x - xy + y²) - (x + 2x²) ni soddalashtiring.",
    "variantlar": ["x² + y² - 3x", "x² + y² - 2x", "x² + y² - x", "x² + y² + x"],
    "javob": "x² + y² - 3x"
  },
  {
    "savol": "x² + y² - (2x² + xy) - (3y² - xy + 3x²) ni soddalashtiring.",
    "variantlar": ["-4x² - 2y²", "-4x² - 2y² + 2xy", "-4x² - 2y² - 2xy", "4x² + 2y²"],
    "javob": "-4x² - 2y²"
  },
  {
    "savol": "x³ + xy² - (y³ + 4xy²) + (2x³ + 3xy²) ni soddalashtiring.",
    "variantlar": ["3x³ - y³", "3x³ - y³ + 8xy²", "3x³ - y³", "3x³ - y³ - 8xy²"],
    "javob": "3x³ - y³"
  },
  {
    "savol": "-(x² + 2xy) + (xy + y²) + 3x² + xy ni soddalashtiring.",
    "variantlar": ["2x² + y²", "2x² + y² + 4xy", "2x² + y²", "2x² + y² - 4xy"],
    "javob": "2x² + y²"
  },
  {
    "savol": "2(x² + 2) + 3(2x + 3) ni soddalashtiring.",
    "variantlar": ["2x² + 6x + 13", "2x² + 6x + 4", "2x² + 6x + 9", "2x² + 6x + 5"],
    "javob": "2x² + 6x + 13"
  },
  {
    "savol": "3(x² - 2x) - 2(5x + 2) ni soddalashtiring.",
    "variantlar": ["3x² - 16x - 4", "3x² - 6x - 4", "3x² - 16x + 4", "3x² - 6x + 4"],
    "javob": "3x² - 16x - 4"
  },
  {
    "savol": "2(x² + 2xy) - 5(3xy + 2y²) ni soddalashtiring.",
    "variantlar": ["2x² - 11xy - 10y²", "2x² - 11xy + 10y²", "2x² + 11xy - 10y²", "2x² + 11xy + 10y²"],
    "javob": "2x² - 11xy - 10y²"
  },
  {
    "savol": "5(x³ + 3x² + x) + 4(x² - 3x - 1) ni soddalashtiring.",
    "variantlar": ["5x³ + 19x² - 7x - 4", "5x³ + 19x² + 7x - 4", "5x³ + 19x² - 7x + 4", "5x³ + 11x² - 7x - 4"],
    "javob": "5x³ + 19x² - 7x - 4"
  },
  {
    "savol": "-2(x² + 3xy - y²) + 3(x² + y²) ni soddalashtiring.",
    "variantlar": ["x² - 6xy + 5y²", "x² - 6xy - 5y²", "x² + 6xy + 5y²", "x² + 6xy - 5y²"],
    "javob": "x² - 6xy + 5y²"
  },
  {
    "savol": "4(2a + b) - (7a + 3b) - b + 2a ni soddalashtiring.",
    "variantlar": ["3a", "4a", "5a", "6a"],
    "javob": "3a"
  },
  {
    "savol": "5(2a + 3b) - 2(5a + 7b) + 3(c - b) ni soddalashtiring.",
    "variantlar": ["-2b + 3c", "2b + 3c", "-2b - 3c", "2b - 3c"],
    "javob": "-2b + 3c"
  },
  {
    "savol": "4ab + 5ac - 2(3ab + 2ac) + 2ab ni soddalashtiring.",
    "variantlar": ["ab + ac", "ab - ac", "2ab + ac", "2ab - ac"],
    "javob": "ab + ac"
  },
  {
    "savol": "5(3a² + 4b²) - 3(5a² + 6b²) + a² - b² ni soddalashtiring.",
    "variantlar": ["a² + b²", "a² - b²", "-a² + b²", "-a² - b²"],
    "javob": "a² + b²"
  },
  {
    "savol": "2,5(2,4a - 5) - 3(3a + 2) + 1,5(4a - 2) ni soddalashtiring.",
    "variantlar": ["-3a - 18,5", "3a - 18,5", "-3a + 18,5", "3a + 18,5"],
    "javob": "-3a - 18,5"
  },
  {
    "savol": "3(4a - 2) - 1,2(5a - 10) - 3,5(4a - 2) ni soddalashtiring.",
    "variantlar": ["-8a + 7", "-8a - 7", "8a + 7", "8a - 7"],
    "javob": "-8a + 7"
  },
  {
    "savol": "1,2(a + 3b) - 2,1(a - b) + 2,4(a - 2b) ni soddalashtiring.",
    "variantlar": ["1,5a - 0,3b", "1,5a + 0,3b", "-1,5a - 0,3b", "-1,5a + 0,3b"],
    "javob": "1,5a - 0,3b"
  },
  {
    "savol": "0,8(2a - 3b) - 1,2(a - b) + 2,5(2a + b) ni soddalashtiring.",
    "variantlar": ["5,3a + 0,1b", "5,3a - 0,1b", "-5,3a + 0,1b", "-5,3a - 0,1b"],
    "javob": "5,3a + 0,1b"
  },
  {
    "savol": "(3/2)(x² - 2x + 1) - (1/9)(2,7a - 3,6) ni soddalashtiring.",
    "variantlar": ["1,5x² - 3x + 1,5 - 0,3a + 0,4", "1,5x² - 3x + 1,5 - 0,3a - 0,4", "1,5x² - 3x + 1,5 + 0,3a - 0,4", "1,5x² - 3x + 1,5 + 0,3a + 0,4"],
    "javob": "1,5x² - 3x + 1,5 - 0,3a + 0,4"
  },
  {
    "savol": "(3/17)(3,4a + 5,1) ni soddalashtiring.",
    "variantlar": ["0,6a + 0,9", "0,6a - 0,9", "0,6a + 0,3", "0,6a - 0,3"],
    "javob": "0,6a + 0,9"
  },
  {
    "savol": "(1/3)(1,5a - 4,5) - (1/17)(3,4a + 5,1) ni soddalashtiring.",
    "variantlar": ["0,5a - 1,5 - 0,2a - 0,3", "0,5a - 1,5 - 0,2a + 0,3", "0,5a - 1,5 + 0,2a - 0,3", "0,5a - 1,5 + 0,2a + 0,3"],
    "javob": "0,5a - 1,5 - 0,2a - 0,3"
  },
  {
    "savol": "(1/5)(4a - 6b) - 2(3a - 2,5(a - 4b)) ni soddalashtiring.",
    "variantlar": ["0,8a - 1,2b - 6a + 5a - 20b", "0,8a - 1,2b - 6a - 5a + 20b", "0,8a - 1,2b - 6a + 5a + 20b", "0,8a - 1,2b - 6a - 5a - 20b"],
    "javob": "0,8a - 1,2b - 6a + 5a - 20b"
  },
  {
    "savol": "(1/3)x(x² + 2y) - 4y(y + 2x) ni soddalashtiring.",
    "variantlar": ["(1/3)x³ + (2/3)xy - 4y² - 8xy", "(1/3)x³ + (2/3)xy - 4y² + 8xy", "(1/3)x³ - (2/3)xy - 4y² - 8xy", "(1/3)x³ - (2/3)xy - 4y² + 8xy"],
    "javob": "(1/3)x³ + (2/3)xy - 4y² - 8xy"
  },
  {
    "savol": "a(b - c) + b(c - a) + c(a - b) ni soddalashtiring.",
    "variantlar": ["0", "ab + bc + ca", "ab - bc - ca", "2ab + 2bc + 2ca"],
    "javob": "0"
  },
  {
    "savol": "(4/3)x(3x² + 5x - 4) - (2/3)(x² - 2x + 1) ni soddalashtiring.",
    "variantlar": ["4x³ + (20/3)x² - (16/3)x - (2/3)x² + (4/3)x - (2/3)", "4x³ + (20/3)x² - (16/3)x + (2/3)x² - (4/3)x + (2/3)", "4x³ - (20/3)x² - (16/3)x - (2/3)x² + (4/3)x - (2/3)", "4x³ - (20/3)x² - (16/3)x + (2/3)x² - (4/3)x + (2/3)"],
    "javob": "4x³ + (20/3)x² - (16/3)x - (2/3)x² + (4/3)x - (2/3)"
  },
  {
    "savol": "2x(x² - 3x + 5) - 3(-2x + 3) - 2x³ ni soddalashtiring.",
    "variantlar": ["-6x² + 16x - 9", "-6x² + 4x - 9", "6x² + 16x - 9", "6x² + 4x - 9"],
    "javob": "-6x² + 16x - 9"
  },
  {
    "savol": "(2a - 3)(3a - 1) ni ko'paytiring.",
    "variantlar": ["6a² - 11a + 3", "6a² - 11a - 3", "6a² + 11a + 3", "6a² + 11a - 3"],
    "javob": "6a² - 11a + 3"
  },
  {
    "savol": "x(x² - 4x - 6) - 4x(-x - 2) + (-x³) ni soddalashtiring.",
    "variantlar": ["8x² + 2x", "8x² - 2x", "-8x² + 2x", "-8x² - 2x"],
    "javob": "8x² + 2x"
  },
  {
    "savol": "(a - 2)(2a² - 3a + 4) ni ko'paytiring.",
    "variantlar": ["2a³ - 7a² + 10a - 8", "2a³ - 7a² - 10a - 8", "2a³ + 7a² + 10a + 8", "2a³ + 7a² - 10a + 8"],
    "javob": "2a³ - 7a² + 10a - 8"
  },
  {
    "savol": "(2a + 3b - 1)(2a - 3b + 1) ni ko'paytiring.",
    "variantlar": ["4a² - 9b² + 6b - 1", "4a² - 9b² - 6b + 1", "4a² - 9b² + 6b + 1", "4a² - 9b² - 6b - 1"],
    "javob": "4a² - 9b² + 6b - 1"
  },
  {
    "savol": "(x - y + xy)(xy + x + y) ni ko'paytiring.",
    "variantlar": ["x²y² + x²y + xy² + x² - y²", "x²y² + x²y + xy² - x² + y²", "x²y² + x²y + xy² + x² + y²", "x²y² + x²y + xy² - x² - y²"],
    "javob": "x²y² + x²y + xy² + x² - y²"
  },
  {
    "savol": "(x - 2)(x + 5) - (x - 3)(x + 6) ni soddalashtiring.",
    "variantlar": ["4x + 8", "4x - 8", "2x + 8", "2x - 8"],
    "javob": "4x + 8"
  },
  {
    "savol": "(2x + 3)(x - 4) - (2x + 5)(x - 2) ni soddalashtiring.",
    "variantlar": ["-6x - 2", "-6x + 2", "6x - 2", "6x + 2"],
    "javob": "-6x - 2"
  },
  {
    "savol": "(2x + 3)(3x - 2) - (5x + 1)(x + 3) ni soddalashtiring.",
    "variantlar": ["x² - 6x - 9", "x² - 6x + 9", "x² + 6x - 9", "x² + 6x + 9"],
    "javob": "x² - 6x - 9"
  },
  {
    "savol": "(3x - 2)(x - 1) - (2x - 1)(3x - 1) ni soddalashtiring.",
    "variantlar": ["-3x² - 2x + 1", "-3x² + 2x + 1", "-3x² - 2x - 1", "-3x² + 2x - 1"],
    "javob": "-3x² + 2x + 1"
  },
  {
    "savol": "(4x⁴ - 8x³ - 10x²) : (-2x) + (5x³ - 10x² + 15x) : (5x) ni hisoblang.",
    "variantlar": ["-2x³ + 4x² + 5x + x² - 2x + 3", "-2x³ + 4x² + 5x - x² + 2x - 3", "2x³ - 4x² - 5x + x² - 2x + 3", "2x³ - 4x² - 5x - x² + 2x - 3"],
    "javob": "-2x³ + 4x² + 5x + x² - 2x + 3"
  },
  {
    "savol": "(6a - 2b) : 2 + (9a - 3b) : 3 ni soddalashtiring.",
    "variantlar": ["6a - 2b", "3a - b", "6a + 2b", "3a + b"],
    "javob": "6a - 2b"
  },
  {
    "savol": "(x⁴ + x³ + x²) : (-x) - (2x³ - x² + 2x) : (x) + x³ ni soddalashtiring.",
    "variantlar": ["-x³ - x² - x - 2x² + x - 2 + x³", "-x³ - x² - x + 2x² - x + 2 + x³", "x³ + x² + x - 2x² + x - 2 - x³", "x³ + x² + x + 2x² - x + 2 - x³"],
    "javob": "-x³ - x² - x - 2x² + x - 2 + x³"
  },
  {
    "savol": "2ⁿ⁺² · 2²ⁿ⁺³ ni asosi 2 bo'lgan daraja shaklida yozing.",
    "variantlar": ["2³ⁿ⁺⁵", "2³ⁿ⁺⁶", "2²ⁿ⁺⁵", "2²ⁿ⁺⁶"],
    "javob": "2³ⁿ⁺⁵"
  },
  {
    "savol": "(12a - 4b + 8) : (-4) - (15a + 20b - 10) : 5 ni soddalashtiring.",
    "variantlar": ["-3a + b - 2 - 3a - 4b + 2", "-3a + b - 2 + 3a + 4b - 2", "3a - b + 2 - 3a - 4b + 2", "3a - b + 2 + 3a + 4b - 2"],
    "javob": "-3a + b - 2 - 3a - 4b + 2"
  },
  {
    "savol": "(6x³ - 3x² - 12x) : 3x - (2x⁴ - 4x³ + 6x²) : 2x² ni soddalashtiring.",
    "variantlar": ["2x² - x - 4 - x² + 2x - 3", "2x² - x - 4 + x² - 2x + 3", "2x² + x + 4 - x² + 2x - 3", "2x² + x + 4 + x² - 2x + 3"],
    "javob": "2x² - x - 4 - x² + 2x - 3"
  },
  {
    "savol": "2ⁿ⁻² · 4ⁿ⁺⁵ ni asosi 2 bo'lgan daraja shaklida yozing.",
    "variantlar": ["2³ⁿ⁺⁸", "2³ⁿ⁺⁷", "2²ⁿ⁺⁸", "2²ⁿ⁺⁷"],
    "javob": "2³ⁿ⁺⁸"
  },
  {
    "savol": "4²ⁿ⁻¹ : 8ⁿ⁻² ni asosi 2 bo'lgan daraja shaklida yozing.",
    "variantlar": ["2ⁿ⁺⁴", "2ⁿ⁺³", "2ⁿ⁺²", "2ⁿ⁺¹"],
    "javob": "2ⁿ⁺⁴"
  },
  {
    "savol": "32ⁿ²⁻²ⁿ⁻¹ : 8ⁿ²⁺ⁿ ni asosi 2 bo'lgan daraja shaklida yozing.",
    "variantlar": ["2ⁿ²⁻¹¹ⁿ⁻⁵", "2ⁿ²⁻¹¹ⁿ⁻³", "2ⁿ²⁻⁷ⁿ⁻⁵", "2ⁿ²⁻⁷ⁿ⁻³"],
    "javob": "2ⁿ²⁻⁷ⁿ⁻⁵"
  },
  {
    "savol": "2ⁿ : 4ⁿ + 3 · 8ⁿ⁺² ni soddalashtiring.",
    "variantlar": ["2⁻ⁿ + 3·2³ⁿ⁺⁶", "2ⁿ + 3·2³ⁿ⁺⁶", "2⁻ⁿ - 3·2³ⁿ⁺⁶", "2ⁿ - 3·2³ⁿ⁺⁶"],
    "javob": "2⁻ⁿ + 3·2³ⁿ⁺⁶"
  },
  {
    "savol": "2ⁿ⁻² · 2²ⁿ⁺³ : 2²ⁿ⁻⁵ ni asosi 2 bo'lgan daraja shaklida yozing.",
    "variantlar": ["2ⁿ⁺⁶", "2ⁿ⁺⁵", "2ⁿ⁺⁴", "2ⁿ⁺³"],
    "javob": "2ⁿ⁺⁶"
  },
  {
    "savol": "1024ⁿ : 64ⁿ⁺⁴ ni asosi 2 bo'lgan daraja shaklida yozing.",
    "variantlar": ["2⁴ⁿ⁻²⁴", "2⁴ⁿ⁻²⁰", "2⁴ⁿ⁻²²", "2⁴ⁿ⁻¹⁸"],
    "javob": "2⁴ⁿ⁻²⁴"
  },
  {
    "savol": "x² + 5x + 6 ni (x + 3) ga bo'ling.",
    "variantlar": ["x + 2", "x - 2", "x + 3", "x - 3"],
    "javob": "x + 2"
  },
  {
    "savol": "x² - x - 20 ni (x - 5) ga bo'ling.",
    "variantlar": ["x + 4", "x - 4", "x + 5", "x - 5"],
    "javob": "x + 4"
  },
  {
    "savol": "x³ - 4x² - 8x + 8 ni (x + 2) ga bo'ling.",
    "variantlar": ["x² - 6x + 4", "x² - 6x - 4", "x² + 6x + 4", "x² + 6x - 4"],
    "javob": "x² - 6x + 4"
  },
  {
    "savol": "x³ - 3x² + 9x - 27 ni (x - 3) ga bo'ling.",
    "variantlar": ["x² + 9", "x² - 9", "x² + 6x + 9", "x² - 6x + 9"],
    "javob": "x² + 9"
  },
  {
    "savol": "2x³ - 5x² + x + 3 ni (2x - 3) ga bo'ling.",
    "variantlar": ["x² - x - 1", "x² + x - 1", "x² - x + 1", "x² + x + 1"],
    "javob": "x² - x - 1"
  },
  {
    "savol": "6x³ - 11x² - 5x + 12 ni (3x - 4) ga bo'ling.",
    "variantlar": ["2x² - x - 3", "2x² + x - 3", "2x² - x + 3", "2x² + x + 3"],
    "javob": "2x² - x - 3"
  },
  {
    "savol": "-3x² + 2x³ - x + 2 ni (x - 1) ga bo'ling.",
    "variantlar": ["2x² - x - 2", "2x² + x - 2", "2x² - x + 2", "2x² + x + 2"],
    "javob": "2x² - x - 2"
  },
  {
    "savol": "-3x² - 4x³ + 5x + 4 ni (x + 1) ga bo'ling.",
    "variantlar": ["-4x² + x + 4", "-4x² - x + 4", "4x² + x + 4", "4x² - x + 4"],
    "javob": "-4x² + x + 4"
  },
  {
    "savol": "x² - x³ - 3x - 45 ni (x + 3) ga bo'ling.",
    "variantlar": ["-x² + 4x - 15", "-x² - 4x - 15", "x² + 4x - 15", "x² - 4x - 15"],
    "javob": "-x² + 4x - 15"
  },
  {
    "savol": "x² + 5xy + 3y² = ax² - bxy + cy² tenglik ayniyat bo'lsa, a, b, c koeffitsiyentlarni toping.",
    "variantlar": ["a=1, b=-5, c=3", "a=1, b=5, c=3", "a=-1, b=-5, c=-3", "a=-1, b=5, c=-3"],
    "javob": "a=1, b=-5, c=3"
  },
  {
    "savol": "2x² + 3xy + y² = ax² - cxy + dy² tenglik ayniyat bo'lsa, a, c, d koeffitsiyentlarni toping.",
    "variantlar": ["a=2, c=-3, d=1", "a=2, c=3, d=1", "a=-2, c=-3, d=-1", "a=-2, c=3, d=-1"],
    "javob": "a=2, c=-3, d=1"
  },
  {
    "savol": "x³ + 3x²y + 5y³ = ax³ - cx²y + 5y⁴ tenglik ayniyat bo'lsa, a va c koeffitsiyentlarni toping.",
    "variantlar": ["a=1, c=-3", "a=1, c=3", "a=-1, c=-3", "a=-1, c=3"],
    "javob": "a=1, c=-3"
  },
  {
    "savol": "(x - 2y)(x + 3y) = axᵇ - cxy + dy² tenglik ayniyat bo'lsa, a, b, c, d larni toping.",
    "variantlar": ["a=1, b=2, c=1, d=-6", "a=1, b=2, c=-1, d=-6", "a=1, b=2, c=1, d=6", "a=1, b=2, c=-1, d=6"],
    "javob": "a=1, b=2, c=1, d=-6"
  },
  {
    "savol": "a + b = 8 bo'lsa, ab + ba ning qiymatini toping.",
    "variantlar": [8, 16, 32, 64],
    "javob": 16
  },
  {
    "savol": "a + b + c = 12 bo'lsa, abc + bca + cab ning qiymatini toping.",
    "variantlar": [12, 24, 36, 48],
    "javob": 36
  },
  {
    "savol": "ab + ba = 121 bo'lsa, a + b ning qiymatini toping.",
    "variantlar": [11, 12, 13, 14],
    "javob": 11
  },
  {
    "savol": "abc + bca + cab = 2220 bo'lsa, a + b + c ning qiymatini toping.",
    "variantlar": [20, 21, 22, 23],
    "javob": 20
  },
  {
    "savol": "ab - ba = 36 bo'lsa, a - b ni toping.",
    "variantlar": [4, 5, 6, 7],
    "javob": 6
  },
  {
    "savol": "ab + bc + ca = 132 bo'lsa, a + b + c ni toping.",
    "variantlar": [11, 12, 13, 14],
    "javob": 12
  },
  {
    "savol": "abc - cba = 198 bo'lsa, a - c ni toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 2
  },
  {
    "savol": "P = x - y + (x - 3y) va Q = x + y - (2y - x) bo'lsa, P - Q ni toping.",
    "variantlar": ["2x - 6y", "2x + 2y", "-2x + 2y", "-2x - 6y"],
    "javob": "2x - 6y"
  },
  {
    "savol": "P = x - 4y + (x - 3y) va Q = 2x + 4y + (2y - x) bo'lsa, P + Q ni toping.",
    "variantlar": ["3x - y", "3x + y", "x - y", "x + y"],
    "javob": "3x - y"
  },
  {
    "savol": "Agar a + b = 5 va (a + 1)(b + 1) = 9 bo'lsa, ab ning qiymatini toping.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  }
  ],






  theme13: [
  {
    "savol": "(c - d)(c + d) ni soddalashtiring.",
    "variantlar": ["c² - d²", "c² + d²", "c² - 2cd + d²", "c² + 2cd + d²"],
    "javob": "c² - d²"
  },
  {
    "savol": "(4 - a)(4 + a) ni soddalashtiring.",
    "variantlar": ["16 - a²", "16 + a²", "a² - 16", "8 - 2a"],
    "javob": "16 - a²"
  },
  {
    "savol": "(b - 10)(b + 10) ni soddalashtiring.",
    "variantlar": ["b² - 100", "b² + 100", "100 - b²", "b² - 20b + 100"],
    "javob": "b² - 100"
  },
  {
    "savol": "(x + y)(x - y) ni soddalashtiring.",
    "variantlar": ["x² - y²", "x² + y²", "x² - 2xy + y²", "x² + 2xy + y²"],
    "javob": "x² - y²"
  },
  {
    "savol": "(b - 2)(b + 2) ni soddalashtiring.",
    "variantlar": ["b² - 4", "b² + 4", "4 - b²", "b² - 4b + 4"],
    "javob": "b² - 4"
  },
  {
    "savol": "(c - 7)(7 + c) ni soddalashtiring.",
    "variantlar": ["c² - 49", "c² + 49", "49 - c²", "c² - 14c + 49"],
    "javob": "c² - 49"
  },
  {
    "savol": "(x - 9)(9 + x) ni soddalashtiring.",
    "variantlar": ["x² - 81", "x² + 81", "81 - x²", "x² - 18x + 81"],
    "javob": "x² - 81"
  },
  {
    "savol": "(y + 3)(3 - y) ni soddalashtiring.",
    "variantlar": ["9 - y²", "y² - 9", "y² + 9", "9 - 6y + y²"],
    "javob": "9 - y²"
  },
  {
    "savol": "(x² - y²)(x² + y²) ni soddalashtiring.",
    "variantlar": ["x⁴ - y⁴", "x⁴ + y⁴", "x² - y²", "x⁴ - 2x²y² + y⁴"],
    "javob": "x⁴ - y⁴"
  },
  {
    "savol": "(a² - b)(a² + b) ni soddalashtiring.",
    "variantlar": ["a⁴ - b²", "a⁴ + b²", "a² - b²", "a⁴ - 2a²b + b²"],
    "javob": "a⁴ - b²"
  },
  {
    "savol": "(x⁴ - y)(x⁴ + y) ni soddalashtiring.",
    "variantlar": ["x⁸ - y²", "x⁸ + y²", "x⁴ - y²", "x⁸ - 2x⁴y + y²"],
    "javob": "x⁸ - y²"
  },
  {
    "savol": "(2/a - 3/b)(2/a + 3/b) ni soddalashtiring.",
    "variantlar": ["4/a² - 9/b²", "4/a² + 9/b²", "2/a² - 3/b²", "4/a² - 6/(ab) + 9/b²"],
    "javob": "4/a² - 9/b²"
  },
  {
    "savol": "(4/x - 5/y)(4/x + 5/y) ni soddalashtiring.",
    "variantlar": ["16/x² - 25/y²", "16/x² + 25/y²", "4/x² - 5/y²", "16/x² - 20/(xy) + 25/y²"],
    "javob": "16/x² - 25/y²"
  },
  {
    "savol": "(2a⁻¹ - b⁻²)(2a⁻¹ + b⁻²) ni soddalashtiring.",
    "variantlar": ["4a⁻² - b⁻⁴", "4a⁻² + b⁻⁴", "2a⁻² - b⁻⁴", "4a⁻² - 2a⁻¹b⁻² + b⁻⁴"],
    "javob": "4a⁻² - b⁻⁴"
  },
  {
    "savol": "(1/2 - a³)(a³ + 1/2) ni soddalashtiring.",
    "variantlar": ["1/4 - a⁶", "1/4 + a⁶", "a⁶ - 1/4", "1/4 - a³ + a⁶"],
    "javob": "1/4 - a⁶"
  },
  {
    "savol": "(a⁴ - b³)(a⁴ + b³) ni soddalashtiring.",
    "variantlar": ["a⁸ - b⁶", "a⁸ + b⁶", "a⁴ - b³", "a⁸ - 2a⁴b³ + b⁶"],
    "javob": "a⁸ - b⁶"
  },
  {
    "savol": "(a³ - a²)(a³ + a²) ni soddalashtiring.",
    "variantlar": ["a⁶ - a⁴", "a⁶ + a⁴", "a⁵ - a⁴", "a⁶ - 2a⁵ + a⁴"],
    "javob": "a⁶ - a⁴"
  },
  {
    "savol": "(1/10 - a⁸)(1/10 + a⁸) ni soddalashtiring.",
    "variantlar": ["1/100 - a¹⁶", "1/100 + a¹⁶", "a¹⁶ - 1/100", "1/100 - a⁸ + a¹⁶"],
    "javob": "1/100 - a¹⁶"
  },
  {
    "savol": "(aⁿ - bᵐ)(aⁿ + bᵐ) ni soddalashtiring.",
    "variantlar": ["a²ⁿ - b²ᵐ", "a²ⁿ + b²ᵐ", "aⁿ⁺ᵐ - bⁿ⁺ᵐ", "a²ⁿ - 2aⁿbᵐ + b²ᵐ"],
    "javob": "a²ⁿ - b²ᵐ"
  },
  {
    "savol": "(a²ⁿ - b)(a²ⁿ + b) ni soddalashtiring.",
    "variantlar": ["a⁴ⁿ - b²", "a⁴ⁿ + b²", "a²ⁿ - b²", "a⁴ⁿ - 2a²ⁿb + b²"],
    "javob": "a⁴ⁿ - b²"
  },
  {
    "savol": "(-x - 3)(x - 3) ni soddalashtiring.",
    "variantlar": ["9 - x²", "x² - 9", "-x² - 9", "-x² + 9"],
    "javob": "9 - x²"
  },
  {
    "savol": "(-a - b)(a - b) ni soddalashtiring.",
    "variantlar": ["b² - a²", "a² - b²", "-a² - b²", "-a² + b²"],
    "javob": "b² - a²"
  },
  {
    "savol": "(x - 2)(x + 2)(x² + 4) ni soddalashtiring.",
    "variantlar": ["x⁴ - 16", "x⁴ + 16", "x² - 4", "x⁴ - 8x² + 16"],
    "javob": "x⁴ - 16"
  },
  {
    "savol": "(c - 1)(c + 1)(c² + 1) ni soddalashtiring.",
    "variantlar": ["c⁴ - 1", "c⁴ + 1", "c² - 1", "c⁴ - 2c² + 1"],
    "javob": "c⁴ - 1"
  },
  {
    "savol": "(100 - 2)(100 + 2) ni hisoblang.",
    "variantlar": [9996, 9998, 10000, 10002],
    "javob": 9996
  },
  {
    "savol": "(10 - 0,1)(10 + 0,1) ni hisoblang.",
    "variantlar": [99, 99.9, 99.99, 100],
    "javob": 99.99
  },
  {
    "savol": "998 · 1002 ni hisoblang.",
    "variantlar": [999996, 999998, 1000000, 1000002],
    "javob": 999996
  },
  {
    "savol": "103 · 97 ni hisoblang.",
    "variantlar": [9991, 9992, 9993, 9994],
    "javob": 9991
  },
  {
    "savol": "82 · 78 ni hisoblang.",
    "variantlar": [6396, 6398, 6400, 6402],
    "javob": 6396
  },
  {
    "savol": "(m + n)² ni soddalashtiring.",
    "variantlar": ["m² + 2mn + n²", "m² - 2mn + n²", "m² + n²", "m² - n²"],
    "javob": "m² + 2mn + n²"
  },
  {
    "savol": "(a + 2b - c)² - (a + 2b)² + (a + c)² ni soddalashtiring.",
    "variantlar": ["a² + 2ac + c² - 2a² - 4ab - 2ac - 4b² + 2ac + 2bc", "a² + 2ac + c² - a² - 4ab - 2ac - 4b² + a² + 2ac + c²", "a² + 2ac + c² - a² - 4ab - 4b² + a² + 2ac + c²", "a² + 2ac + c² - a² - 4ab - 4b² - 2ac + a² + 2ac + c²"],
    "javob": "a² + 2ac + c² - a² - 4ab - 4b² + a² + 2ac + c²"
  },
  {
    "savol": "(x - a)² = x² - bx + 9 ayniyatdan koeffitsiyentlarni toping.",
    "variantlar": ["a=3, b=6", "a=-3, b=6", "a=3, b=-6", "a=-3, b=-6"],
    "javob": "a=3, b=6"
  },
  {
    "savol": "(x - a)² = x² - 8x + b ayniyatdan koeffitsiyentlarni toping.",
    "variantlar": ["a=4, b=16", "a=-4, b=16", "a=4, b=-16", "a=-4, b=-16"],
    "javob": "a=4, b=16"
  },
  {
    "savol": "(ax - 4)² = bx² - 24x + 16 ayniyatdan koeffitsiyentlarni toping.",
    "variantlar": ["a=3, b=9", "a=-3, b=9", "a=3, b=-9", "a=-3, b=-9"],
    "javob": "a=3, b=9"
  },
  {
    "savol": "(ax - 4)² = 9x² - bx + 16 ayniyatdan koeffitsiyentlarni toping.",
    "variantlar": ["a=3, b=24", "a=-3, b=24", "a=3, b=-24", "a=-3, b=-24"],
    "javob": "a=3, b=24"
  },
  {
    "savol": "(x + a)² = x² + bx + 1/4 ayniyatdan koeffitsiyentlarni toping.",
    "variantlar": ["a=0.5, b=1", "a=-0.5, b=1", "a=0.5, b=-1", "a=-0.5, b=-1"],
    "javob": "a=0.5, b=1"
  },
  {
    "savol": "(3x + a)² = 9x² + x + b ayniyatdan koeffitsiyentlarni toping.",
    "variantlar": ["a=1/6, b=1/36", "a=-1/6, b=1/36", "a=1/6, b=-1/36", "a=-1/6, b=-1/36"],
    "javob": "a=1/6, b=1/36"
  },
  {
    "savol": "(5x - b)² = 25x² - 5x + a ayniyatdan koeffitsiyentlarni toping.",
    "variantlar": ["b=0.5, a=0.25", "b=-0.5, a=0.25", "b=0.5, a=-0.25", "b=-0.5, a=-0.25"],
    "javob": "b=0.5, a=0.25"
  },
  {
    "savol": "(aⁿ + bᵐ)³ ni soddalashtiring.",
    "variantlar": ["a³ⁿ + 3a²ⁿbᵐ + 3aⁿb²ᵐ + b³ᵐ", "a³ⁿ + 3a²ⁿbᵐ + 3aⁿb²ᵐ - b³ᵐ", "a³ⁿ - 3a²ⁿbᵐ + 3aⁿb²ᵐ - b³ᵐ", "a³ⁿ + b³ᵐ"],
    "javob": "a³ⁿ + 3a²ⁿbᵐ + 3aⁿb²ᵐ + b³ᵐ"
  },
  {
    "savol": "(xⁿ + y²ᵐ)³ ni soddalashtiring.",
    "variantlar": ["x³ⁿ + 3x²ⁿy²ᵐ + 3xⁿy⁴ᵐ + y⁶ᵐ", "x³ⁿ + 3x²ⁿy²ᵐ + 3xⁿy⁴ᵐ - y⁶ᵐ", "x³ⁿ - 3x²ⁿy²ᵐ + 3xⁿy⁴ᵐ - y⁶ᵐ", "x³ⁿ + y⁶ᵐ"],
    "javob": "x³ⁿ + 3x²ⁿy²ᵐ + 3xⁿy⁴ᵐ + y⁶ᵐ"
  },
  {
    "savol": "a³ + 12a² + 48a + 64 ni yig'indi yoki ayirma kubiga keltiring.",
    "variantlar": ["(a + 4)³", "(a - 4)³", "(a + 8)³", "(a - 8)³"],
    "javob": "(a + 4)³"
  },
  {
    "savol": "a³ - 21a² + 147a - 343 ni yig'indi yoki ayirma kubiga keltiring.",
    "variantlar": ["(a - 7)³", "(a + 7)³", "(a - 3)³", "(a + 3)³"],
    "javob": "(a - 7)³"
  },
  {
    "savol": "a³ + 9a² + 27a + 27 ni yig'indi yoki ayirma kubiga keltiring.",
    "variantlar": ["(a + 3)³", "(a - 3)³", "(a + 9)³", "(a - 9)³"],
    "javob": "(a + 3)³"
  },
  {
    "savol": "a³ - 6a²b + 12ab² - 8b³ ni yig'indi yoki ayirma kubiga keltiring.",
    "variantlar": ["(a - 2b)³", "(a + 2b)³", "(2a - b)³", "(2a + b)³"],
    "javob": "(a - 2b)³"
  },
  {
    "savol": "27a³ + 54a²b + 36ab² + 8b³ ni yig'indi yoki ayirma kubiga keltiring.",
    "variantlar": ["(3a + 2b)³", "(3a - 2b)³", "(2a + 3b)³", "(2a - 3b)³"],
    "javob": "(3a + 2b)³"
  },
  {
    "savol": "(u + v)(u² - uv + v²) ni ko'paytiring.",
    "variantlar": ["u³ + v³", "u³ - v³", "u³ + 3u²v + 3uv² + v³", "u³ - 3u²v + 3uv² - v³"],
    "javob": "u³ + v³"
  },
  {
    "savol": "(a + 5)(a² - 5a + 25) ni ko'paytiring.",
    "variantlar": ["a³ + 125", "a³ - 125", "a³ + 15a² + 75a + 125", "a³ - 15a² + 75a - 125"],
    "javob": "a³ + 125"
  }
  ],






  theme14: [
  {
    "savol": "6 + 3a ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["3(2 + a)", "3(2 - a)", "2(3 + a)", "2(3 - a)"],
    "javob": "3(2 + a)"
  },
  {
    "savol": "12a + 15b ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["3(4a + 5b)", "3(4a - 5b)", "5(4a + 3b)", "5(4a - 3b)"],
    "javob": "3(4a + 5b)"
  },
  {
    "savol": "14a - 35b ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["7(2a - 5b)", "7(2a + 5b)", "5(2a - 7b)", "5(2a + 7b)"],
    "javob": "7(2a - 5b)"
  },
  {
    "savol": "6a - 12b + 18c ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["6(a - 2b + 3c)", "6(a + 2b - 3c)", "3(2a - 4b + 6c)", "3(2a + 4b - 6c)"],
    "javob": "6(a - 2b + 3c)"
  },
  {
    "savol": "8a + 12b - 16c ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["4(2a + 3b - 4c)", "4(2a - 3b + 4c)", "8(a + 1.5b - 2c)", "8(a - 1.5b + 2c)"],
    "javob": "4(2a + 3b - 4c)"
  },
  {
    "savol": "a + 2ab ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["a(1 + 2b)", "a(1 - 2b)", "2a(0.5 + b)", "2a(0.5 - b)"],
    "javob": "a(1 + 2b)"
  },
  {
    "savol": "ab + 3ax ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["a(b + 3x)", "a(b - 3x)", "x(a + 3b)", "x(a - 3b)"],
    "javob": "a(b + 3x)"
  },
  {
    "savol": "xy + xy² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["xy(1 + y)", "xy(1 - y)", "x(y + y²)", "x(y - y²)"],
    "javob": "xy(1 + y)"
  },
  {
    "savol": "a²b - b²a ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["ab(a - b)", "ab(a + b)", "a²b(1 - b)", "b²a(1 - a)"],
    "javob": "ab(a - b)"
  },
  {
    "savol": "6a³b² - 8ab⁴ ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["2ab²(3a² - 4b²)", "2ab²(3a² + 4b²)", "2ab²(3a - 4b)", "2ab²(3a + 4b)"],
    "javob": "2ab²(3a² - 4b²)"
  },
  {
    "savol": "3x - x⁴ + 2x² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["x(3 - x³ + 2x)", "x(3 + x³ - 2x)", "x²(3/x - x² + 2)", "x²(3/x + x² - 2)"],
    "javob": "x(3 - x³ + 2x)"
  },
  {
    "savol": "12a⁴b⁵ - 21a²b³ ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["3a²b³(4a²b² - 7)", "3a²b³(4a²b² + 7)", "3a²b³(4ab² - 7)", "3a²b³(4ab² + 7)"],
    "javob": "3a²b³(4a²b² - 7)"
  },
  {
    "savol": "12a³b² - 18ab + 24ab² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["6ab(2a²b - 3 + 4b)", "6ab(2a²b + 3 - 4b)", "6ab(2a²b - 3 - 4b)", "6ab(2a²b + 3 + 4b)"],
    "javob": "6ab(2a²b - 3 + 4b)"
  },
  {
    "savol": "2a²b⁵ + 6a³b⁴ + 4a⁵b³ ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["2a²b³(b² + 3ab + 2a³)", "2a²b³(b² - 3ab + 2a³)", "2a²b³(b² + 3ab - 2a³)", "2a²b³(b² - 3ab - 2a³)"],
    "javob": "2a²b³(b² + 3ab + 2a³)"
  },
  {
    "savol": "5³a⁴ + 5⁴a⁷ - 5²a³ ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["5²a³(5a + 5²a⁴ - 1)", "5²a³(5a - 5²a⁴ + 1)", "5²a³(5a + 5²a⁴ + 1)", "5²a³(5a - 5²a⁴ - 1)"],
    "javob": "5²a³(5a + 5²a⁴ - 1)"
  },
  {
    "savol": "(a - b)(a + 2b) + (a - b)(a + b) ifodani soddalashtiring.",
    "variantlar": ["(a - b)(2a + 3b)", "(a - b)(2a - 3b)", "(a + b)(2a + 3b)", "(a + b)(2a - 3b)"],
    "javob": "(a - b)(2a + 3b)"
  },
  {
    "savol": "(6a - b)(a + 3b) - (6a - b)(3a - 4b) ifodani soddalashtiring.",
    "variantlar": ["(6a - b)(-2a + 7b)", "(6a - b)(-2a - 7b)", "(6a - b)(2a + 7b)", "(6a - b)(2a - 7b)"],
    "javob": "(6a - b)(-2a + 7b)"
  },
  {
    "savol": "(a + 2b) + 5a(a + 2b) + 3b(a + 2b) ifodani soddalashtiring.",
    "variantlar": ["(a + 2b)(1 + 5a + 3b)", "(a + 2b)(1 - 5a - 3b)", "(a + 2b)(1 + 5a - 3b)", "(a + 2b)(1 - 5a + 3b)"],
    "javob": "(a + 2b)(1 + 5a + 3b)"
  },
  {
    "savol": "(2a - b)(a + 4b) + (2a - b)(a - b) ifodani soddalashtiring.",
    "variantlar": ["(2a - b)(2a + 3b)", "(2a - b)(2a - 3b)", "(2a - b)(2a + 5b)", "(2a - b)(2a - 5b)"],
    "javob": "(2a - b)(2a + 3b)"
  },
  {
    "savol": "(x + y)(5x - 4y) - (x + y)(x + 3y) ifodani soddalashtiring.",
    "variantlar": ["(x + y)(4x - 7y)", "(x + y)(4x + 7y)", "(x + y)(6x - 7y)", "(x + y)(6x + 7y)"],
    "javob": "(x + y)(4x - 7y)"
  },
  {
    "savol": "(2x - y)(x - 3y) - (2x - y)(2x + 5y) ifodani soddalashtiring.",
    "variantlar": ["(2x - y)(-x - 8y)", "(2x - y)(-x + 8y)", "(2x - y)(x - 8y)", "(2x - y)(x + 8y)"],
    "javob": "(2x - y)(-x - 8y)"
  },
  {
    "savol": "3x(x - 2y) - (x - 2y)(x + y) ifodani soddalashtiring.",
    "variantlar": ["(x - 2y)(2x - y)", "(x - 2y)(2x + y)", "(x - 2y)(4x - y)", "(x - 2y)(4x + y)"],
    "javob": "(x - 2y)(2x - y)"
  },
  {
    "savol": "(a - 3b)(a + 2b) - (a - 3b)(2a - b) ifodani soddalashtiring.",
    "variantlar": ["(a - 3b)(-a + 3b)", "(a - 3b)(-a - 3b)", "(a - 3b)(a + 3b)", "(a - 3b)(a - 3b)"],
    "javob": "(a - 3b)(-a + 3b)"
  },
  {
    "savol": "3x(x - 3y) + (x - 3y)(x + y) ifodani soddalashtiring.",
    "variantlar": ["(x - 3y)(4x + y)", "(x - 3y)(4x - y)", "(x - 3y)(2x + y)", "(x - 3y)(2x - y)"],
    "javob": "(x - 3y)(4x + y)"
  },
  {
    "savol": "(a - b)(x² + 2y²) + (b - a)(2x² - y²) ifodani soddalashtiring.",
    "variantlar": ["(a - b)(-x² + 3y²)", "(a - b)(-x² - 3y²)", "(a - b)(x² + 3y²)", "(a - b)(x² - 3y²)"],
    "javob": "(a - b)(-x² + 3y²)"
  },
  {
    "savol": "a²(3x - 4y) - b²(4y - 3x) ifodani soddalashtiring.",
    "variantlar": ["(3x - 4y)(a² + b²)", "(3x - 4y)(a² - b²)", "(3x + 4y)(a² + b²)", "(3x + 4y)(a² - b²)"],
    "javob": "(3x - 4y)(a² + b²)"
  },
  {
    "savol": "x² - 25 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x - 5)(x + 5)", "(x - 5)²", "(x + 5)²", "(x - 25)(x + 1)"],
    "javob": "(x - 5)(x + 5)"
  },
  {
    "savol": "x² - 36 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x - 6)(x + 6)", "(x - 6)²", "(x + 6)²", "(x - 36)(x + 1)"],
    "javob": "(x - 6)(x + 6)"
  },
  {
    "savol": "16 - x² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(4 - x)(4 + x)", "(x - 4)(x + 4)", "(4 - x)²", "(4 + x)²"],
    "javob": "(4 - x)(4 + x)"
  },
  {
    "savol": "49 - a² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(7 - a)(7 + a)", "(a - 7)(a + 7)", "(7 - a)²", "(7 + a)²"],
    "javob": "(7 - a)(7 + a)"
  },
  {
    "savol": "121 - b² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(11 - b)(11 + b)", "(b - 11)(b + 11)", "(11 - b)²", "(11 + b)²"],
    "javob": "(11 - b)(11 + b)"
  },
  {
    "savol": "a² - 4b² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(a - 2b)(a + 2b)", "(a - 2b)²", "(a + 2b)²", "(2a - b)(2a + b)"],
    "javob": "(a - 2b)(a + 2b)"
  },
  {
    "savol": "c² - 16d² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(c - 4d)(c + 4d)", "(c - 4d)²", "(c + 4d)²", "(4c - d)(4c + d)"],
    "javob": "(c - 4d)(c + 4d)"
  },
  {
    "savol": "4x² - y² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(2x - y)(2x + y)", "(2x - y)²", "(2x + y)²", "(x - 2y)(x + 2y)"],
    "javob": "(2x - y)(2x + y)"
  },
  {
    "savol": "49x² - y² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(7x - y)(7x + y)", "(7x - y)²", "(7x + y)²", "(x - 7y)(x + 7y)"],
    "javob": "(7x - y)(7x + y)"
  },
  {
    "savol": "x² - 25y² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x - 5y)(x + 5y)", "(x - 5y)²", "(x + 5y)²", "(5x - y)(5x + y)"],
    "javob": "(x - 5y)(x + 5y)"
  },
  {
    "savol": "121x² - 144y² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(11x - 12y)(11x + 12y)", "(11x - 12y)²", "(11x + 12y)²", "(12x - 11y)(12x + 11y)"],
    "javob": "(11x - 12y)(11x + 12y)"
  },
  {
    "savol": "a²/4 - b²/9 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(a/2 - b/3)(a/2 + b/3)", "(a/2 - b/3)²", "(a/2 + b/3)²", "(a/3 - b/2)(a/3 + b/2)"],
    "javob": "(a/2 - b/3)(a/2 + b/3)"
  },
  {
    "savol": "x²/16 - y² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x/4 - y)(x/4 + y)", "(x/4 - y)²", "(x/4 + y)²", "(x - 4y)(x + 4y)"],
    "javob": "(x/4 - y)(x/4 + y)"
  },
  {
    "savol": "144/x² - 9/y² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(12/x - 3/y)(12/x + 3/y)", "(12/x - 3/y)²", "(12/x + 3/y)²", "(3/x - 12/y)(3/x + 12/y)"],
    "javob": "(12/x - 3/y)(12/x + 3/y)"
  },
  {
    "savol": "1,44a² - 0,09b² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(1,2a - 0,3b)(1,2a + 0,3b)", "(1,2a - 0,3b)²", "(1,2a + 0,3b)²", "(0,3a - 1,2b)(0,3a + 1,2b)"],
    "javob": "(1,2a - 0,3b)(1,2a + 0,3b)"
  },
  {
    "savol": "(a + b)² - 25 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(a + b - 5)(a + b + 5)", "(a + b - 5)²", "(a + b + 5)²", "(a + b - 25)(a + b + 1)"],
    "javob": "(a + b - 5)(a + b + 5)"
  },
  {
    "savol": "(x - y)² - 36 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x - y - 6)(x - y + 6)", "(x - y - 6)²", "(x - y + 6)²", "(x - y - 36)(x - y + 1)"],
    "javob": "(x - y - 6)(x - y + 6)"
  },
  {
    "savol": "9 - (a + b)² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(3 - a - b)(3 + a + b)", "(a + b - 3)(a + b + 3)", "(3 - a - b)²", "(3 + a + b)²"],
    "javob": "(3 - a - b)(3 + a + b)"
  },
  {
    "savol": "16 - (x - y)² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(4 - x + y)(4 + x - y)", "(4 - x - y)(4 + x + y)", "(x - y - 4)(x - y + 4)", "(x - y - 4)²"],
    "javob": "(4 - x + y)(4 + x - y)"
  },
  {
    "savol": "121 - (2x + 3y)² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(11 - 2x - 3y)(11 + 2x + 3y)", "(2x + 3y - 11)(2x + 3y + 11)", "(11 - 2x - 3y)²", "(11 + 2x + 3y)²"],
    "javob": "(11 - 2x - 3y)(11 + 2x + 3y)"
  },
  {
    "savol": "(a + b)² - (3a - 2b)² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(a + b - 3a + 2b)(a + b + 3a - 2b) = (-2a + 3b)(4a - b)", "(-2a - 3b)(4a + b)", "(2a + 3b)(4a - b)", "(2a - 3b)(4a + b)"],
    "javob": "(-2a + 3b)(4a - b)"
  },
  {
    "savol": "(2a - b)² - (3a + 2b)² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(2a - b - 3a - 2b)(2a - b + 3a + 2b) = (-a - 3b)(5a + b)", "(-a + 3b)(5a - b)", "(a - 3b)(5a + b)", "(a + 3b)(5a - b)"],
    "javob": "(-a - 3b)(5a + b)"
  },
  {
    "savol": "(x + 2y)² - (2x + y)² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x + 2y - 2x - y)(x + 2y + 2x + y) = (-x + y)(3x + 3y)", "(-x - y)(3x - 3y)", "(x - y)(3x + 3y)", "(x + y)(3x - 3y)"],
    "javob": "(-x + y)(3x + 3y)"
  },
  {
    "savol": "(2m + n)² - (3m - 4n)² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(2m + n - 3m + 4n)(2m + n + 3m - 4n) = (-m + 5n)(5m - 3n)", "(-m - 5n)(5m + 3n)", "(m + 5n)(5m - 3n)", "(m - 5n)(5m + 3n)"],
    "javob": "(-m + 5n)(5m - 3n)"
  },
  {
    "savol": "a² + 4ab + 4b² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(a + 2b)²", "(a - 2b)²", "(a + 2b)(a - 2b)", "(2a + b)²"],
    "javob": "(a + 2b)²"
  },
  {
    "savol": "a² + 6ab + 9b² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(a + 3b)²", "(a - 3b)²", "(a + 3b)(a - 3b)", "(3a + b)²"],
    "javob": "(a + 3b)²"
  },
  {
    "savol": "4a² - 12ab² + 9b⁴ ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(2a - 3b²)²", "(2a + 3b²)²", "(2a - 3b²)(2a + 3b²)", "(3a - 2b²)²"],
    "javob": "(2a - 3b²)²"
  },
  {
    "savol": "9x² - 12xy + 4y² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(3x - 2y)²", "(3x + 2y)²", "(3x - 2y)(3x + 2y)", "(2x - 3y)²"],
    "javob": "(3x - 2y)²"
  },
  {
    "savol": "16m⁴ + 24m²n² + 9n⁴ ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(4m² + 3n²)²", "(4m² - 3n²)²", "(4m² + 3n²)(4m² - 3n²)", "(2m² + 3n²)²"],
    "javob": "(4m² + 3n²)²"
  },
  {
    "savol": "m³ + 3m²n + 3mn² + n³ ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(m + n)³", "(m - n)³", "(m + n)(m² - mn + n²)", "(m - n)(m² + mn + n²)"],
    "javob": "(m + n)³"
  },
  {
    "savol": "(a² + 9)² - 36a² ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(a² + 9 - 6a)(a² + 9 + 6a) = (a - 3)²(a + 3)²", "(a² - 9)(a² + 9)", "(a - 3)⁴", "(a + 3)⁴"],
    "javob": "(a - 3)²(a + 3)²"
  },
  {
    "savol": "(a + b)(a + b + 2) - (a - b)(a - b - 2) ifodani soddalashtiring.",
    "variantlar": ["4ab + 2a + 2b", "4ab - 2a - 2b", "4ab + 2a - 2b", "4ab - 2a + 2b"],
    "javob": "4ab + 2a + 2b"
  },
  {
    "savol": "(2x - 3y)(5x² - 3y²) - (3y - 2x)(4x² - y²) ifodani soddalashtiring.",
    "variantlar": ["(2x - 3y)(9x² - 2y²)", "(2x - 3y)(9x² + 2y²)", "(2x - 3y)(x² - 4y²)", "(2x - 3y)(x² + 4y²)"],
    "javob": "(2x - 3y)(9x² - 2y²)"
  },
  {
    "savol": "(a - b)(2a² - 3b²) - (b - a)(2b² - a²) ifodani soddalashtiring.",
    "variantlar": ["(a - b)(3a² - b²)", "(a - b)(3a² + b²)", "(a - b)(a² - 5b²)", "(a - b)(a² + 5b²)"],
    "javob": "(a - b)(3a² - b²)"
  },
  {
    "savol": "a⁷ - a⁴ - 2a³ + 2 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(a³ - 1)(a⁴ - 2)", "(a³ + 1)(a⁴ - 2)", "(a³ - 1)(a⁴ + 2)", "(a³ + 1)(a⁴ + 2)"],
    "javob": "(a³ - 1)(a⁴ - 2)"
  },
  {
    "savol": "a⁵ + b⁸ - a³b² - a²b⁶ ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(a³ - b²)(a² - b⁶)", "(a³ + b²)(a² - b⁶)", "(a³ - b²)(a² + b⁶)", "(a³ + b²)(a² + b⁶)"],
    "javob": "(a³ - b²)(a² - b⁶)"
  },
  {
    "savol": "(a - b)³ + (b - c)³ + (c - a)³ ifodani soddalashtiring.",
    "variantlar": ["3(a - b)(b - c)(c - a)", "0", "(a - b + b - c + c - a)³", "3(a - b)(b - c)(a - c)"],
    "javob": "3(a - b)(b - c)(c - a)"
  },
  {
    "savol": "(a - 2b)³ + (2b - c)³ + (c - a)³ ifodani soddalashtiring.",
    "variantlar": ["3(a - 2b)(2b - c)(c - a)", "0", "(a - 2b + 2b - c + c - a)³", "3(a - 2b)(2b - c)(a - c)"],
    "javob": "3(a - 2b)(2b - c)(c - a)"
  },
  {
    "savol": "(a - 2)³ + (2 - b)³ + (b - a)³ ifodani soddalashtiring.",
    "variantlar": ["3(a - 2)(2 - b)(b - a)", "0", "(a - 2 + 2 - b + b - a)³", "3(a - 2)(2 - b)(a - b)"],
    "javob": "3(a - 2)(2 - b)(b - a)"
  },
  {
    "savol": "(x - 2y)³ + (2y - 3z)³ + (3z - x)³ ifodani soddalashtiring.",
    "variantlar": ["3(x - 2y)(2y - 3z)(3z - x)", "0", "(x - 2y + 2y - 3z + 3z - x)³", "3(x - 2y)(2y - 3z)(x - 3z)"],
    "javob": "3(x - 2y)(2y - 3z)(3z - x)"
  },
  {
    "savol": "111²·9 - 9²·11 + 11¹ ifodani hisoblang.",
    "variantlar": [110889, 110889, 110889, 110889],
    "javob": 110889
  },
  {
    "savol": "x² - 6x + 5 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x - 1)(x - 5)", "(x + 1)(x + 5)", "(x - 1)(x + 5)", "(x + 1)(x - 5)"],
    "javob": "(x - 1)(x - 5)"
  },
  {
    "savol": "x² - 9x + 20 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x - 4)(x - 5)", "(x + 4)(x + 5)", "(x - 4)(x + 5)", "(x + 4)(x - 5)"],
    "javob": "(x - 4)(x - 5)"
  },
  {
    "savol": "x² - 3x - 10 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x - 5)(x + 2)", "(x + 5)(x - 2)", "(x - 5)(x - 2)", "(x + 5)(x + 2)"],
    "javob": "(x - 5)(x + 2)"
  },
  {
    "savol": "x² - 4x - 32 ifodani ko'paytuvchilarga ajrating.",
    "variantlar": ["(x - 8)(x + 4)", "(x + 8)(x - 4)", "(x - 8)(x - 4)", "(x + 8)(x + 4)"],
    "javob": "(x - 8)(x + 4)"
  }
  ],





  theme15: [
  {
    "savol": "ax/(bx) kasrni soddalashtiring.",
    "variantlar": ["a/b", "a/x", "x/b", "ax/bx"],
    "javob": "a/b"
  },
  {
    "savol": "ac²/(a²c) kasrni soddalashtiring.",
    "variantlar": ["c/a", "a/c", "ac/a", "c²/a²"],
    "javob": "c/a"
  },
  {
    "savol": "(4x³)/(6x²y) kasrni soddalashtiring.",
    "variantlar": ["(2x)/(3y)", "(2x²)/(3y)", "(4x)/(6y)", "(2x³)/(3y)"],
    "javob": "(2x)/(3y)"
  },
  {
    "savol": "(12a³b²)/(15a²b³) kasrni soddalashtiring.",
    "variantlar": ["(4a)/(5b)", "(4a²)/(5b²)", "(12a)/(15b)", "(3a)/(4b)"],
    "javob": "(4a)/(5b)"
  },
  {
    "savol": "(14m²n²)/(7mn) kasrni soddalashtiring.",
    "variantlar": ["2mn", "2m²n", "2mn²", "2m²n²"],
    "javob": "2mn"
  },
  {
    "savol": "[a(x-2)]/[b(x-2)] kasrni soddalashtiring.",
    "variantlar": ["a/b", "b/a", "(x-2)/(x-2)", "a(x-2)/b"],
    "javob": "a/b"
  },
  {
    "savol": "(m²n - mn²)/(5m - 5n) kasrni soddalashtiring.",
    "variantlar": ["mn/5", "mn(m-n)/(5(m-n))", "m-n", "m+n"],
    "javob": "mn/5"
  },
  {
    "savol": "(3a + 3b)/(a²b + ab²) kasrni soddalashtiring.",
    "variantlar": ["3/(ab)", "3/(a+b)", "3(a+b)/(ab(a+b))", "3/ab"],
    "javob": "3/(ab)"
  },
  {
    "savol": "(ax - bx)/(a² - ab) kasrni soddalashtiring.",
    "variantlar": ["x/a", "x/(a-b)", "x(a-b)/(a(a-b))", "x/a"],
    "javob": "x/a"
  },
  {
    "savol": "(x² + xy)/(y² + xy) kasrni soddalashtiring.",
    "variantlar": ["x/y", "y/x", "x(x+y)/(y(x+y))", "x/y"],
    "javob": "x/y"
  },
  {
    "savol": "(x² - y²)/(x + y) kasrni soddalashtiring.",
    "variantlar": ["x - y", "x + y", "x² - y²", "(x-y)(x+y)/(x+y)"],
    "javob": "x - y"
  },
  {
    "savol": "(a² - 25)/(a + 5) kasrni soddalashtiring.",
    "variantlar": ["a - 5", "a + 5", "(a-5)(a+5)/(a+5)", "a-5"],
    "javob": "a - 5"
  },
  {
    "savol": "(b² - 4a²)/(b - 2a) kasrni soddalashtiring.",
    "variantlar": ["b + 2a", "b - 2a", "(b-2a)(b+2a)/(b-2a)", "b+2a"],
    "javob": "b + 2a"
  },
  {
    "savol": "(49x² - 25y²)/(7x - 5y) kasrni soddalashtiring.",
    "variantlar": ["7x + 5y", "7x - 5y", "(7x-5y)(7x+5y)/(7x-5y)", "7x+5y"],
    "javob": "7x + 5y"
  },
  {
    "savol": "(4c + 8)/(c² - 4) kasrni soddalashtiring.",
    "variantlar": ["4/(c-2)", "4/(c+2)", "4(c+2)/((c-2)(c+2))", "4/(c-2)"],
    "javob": "4/(c-2)"
  },
  {
    "savol": "(xy - 7y²)/(x² - 49y²) kasrni soddalashtiring.",
    "variantlar": ["y/(x+7y)", "y/(x-7y)", "y(x-7y)/((x-7y)(x+7y))", "y/(x+7y)"],
    "javob": "y/(x+7y)"
  },
  {
    "savol": "(c - 2)/(c² - 4) kasrni soddalashtiring.",
    "variantlar": ["1/(c+2)", "1/(c-2)", "(c-2)/((c-2)(c+2))", "1/(c+2)"],
    "javob": "1/(c+2)"
  },
  {
    "savol": "(x² - y²)/(3x - 3y) kasrni soddalashtiring.",
    "variantlar": ["(x+y)/3", "(x-y)/3", "(x+y)/3", "(x²-y²)/(3(x-y))"],
    "javob": "(x+y)/3"
  },
  {
    "savol": "(a² - ab)/(a² - b²) kasrni soddalashtiring.",
    "variantlar": ["a/(a+b)", "a/(a-b)", "a(a-b)/((a-b)(a+b))", "a/(a+b)"],
    "javob": "a/(a+b)"
  },
  {
    "savol": "(5xy - y²)/(y² - 25x²) kasrni soddalashtiring.",
    "variantlar": ["-y/(y+5x)", "y/(y+5x)", "-y/(y+5x)", "y/(y-5x)"],
    "javob": "-y/(y+5x)"
  },
  {
    "savol": "(m²n + mn²)/(mn³ - m³n) kasrni soddalashtiring.",
    "variantlar": ["1/(n-m)", "1/(n+m)", "mn(m+n)/(mn(n²-m²))", "1/(n-m)"],
    "javob": "1/(n-m)"
  },
  {
    "savol": "(x² - y²)/(x² + 2xy + y²) kasrni soddalashtiring.",
    "variantlar": ["(x-y)/(x+y)", "(x+y)/(x-y)", "(x-y)/(x+y)", "(x²-y²)/(x+y)²"],
    "javob": "(x-y)/(x+y)"
  },
  {
    "savol": "(x² + 2x + 1)/(x² - 1) kasrni soddalashtiring.",
    "variantlar": ["(x+1)/(x-1)", "(x-1)/(x+1)", "(x+1)/(x-1)", "(x+1)²/((x-1)(x+1))"],
    "javob": "(x+1)/(x-1)"
  },
  {
    "savol": "(x² + 4x + 4)/(x² - 4) kasrni soddalashtiring.",
    "variantlar": ["(x+2)/(x-2)", "(x-2)/(x+2)", "(x+2)/(x-2)", "(x+2)²/((x-2)(x+2))"],
    "javob": "(x+2)/(x-2)"
  },
  {
    "savol": "(a² + 2ab + b²)/(a³ + 3a²b + 3ab² + b³) kasrni soddalashtiring.",
    "variantlar": ["1/(a+b)", "a+b", "(a+b)²/(a+b)³", "1/(a+b)"],
    "javob": "1/(a+b)"
  },
  {
    "savol": "(ax² - 14ax + 49a)/(x² - 49) kasrni soddalashtiring.",
    "variantlar": ["a(x-7)/(x+7)", "a(x+7)/(x-7)", "a(x-7)/(x+7)", "a(x-7)²/((x-7)(x+7))"],
    "javob": "a(x-7)/(x+7)"
  },
  {
    "savol": "(5a² - 5b²)/(25a² - 50ab + 25b²) kasrni soddalashtiring.",
    "variantlar": ["(a+b)/[5(a-b)]", "(a-b)/[5(a+b)]", "(a+b)/[5(a-b)]", "5(a²-b²)/[25(a-b)²]"],
    "javob": "(a+b)/[5(a-b)]"
  },
  {
    "savol": "(4x² + 4xy + y²)/(y² - 4x²) kasrni soddalashtiring.",
    "variantlar": ["(2x+y)/(y-2x)", "(2x-y)/(y+2x)", "(2x+y)/(y-2x)", "(2x+y)²/((y-2x)(y+2x))"],
    "javob": "(2x+y)/(y-2x)"
  },
  {
    "savol": "(x - 10)/(x² - 20x + 100) kasrni soddalashtiring.",
    "variantlar": ["1/(x-10)", "1/(x+10)", "1/(x-10)", "(x-10)/(x-10)²"],
    "javob": "1/(x-10)"
  },
  {
    "savol": "(x³ + y³)/(x² - xy + y²) - (x² - y²)/(x + y) ifodani soddalashtiring.",
    "variantlar": ["x + y", "x - y", "2y", "2x"],
    "javob": "x + y"
  },
  {
    "savol": "1/(x + 2) + 1/(x - 2) ifodani soddalashtiring.",
    "variantlar": ["(2x)/(x² - 4)", "2/(x² - 4)", "(2x)/(x² - 4)", "(x²+4)/(x²-4)"],
    "javob": "(2x)/(x² - 4)"
  },
  {
    "savol": "1/(a - 3) - 1/(a + 3) ifodani soddalashtiring.",
    "variantlar": ["6/(a² - 9)", "-6/(a² - 9)", "6/(a² - 9)", "0"],
    "javob": "6/(a² - 9)"
  },
  {
    "savol": "1/(a + b) + 1/(a - b) ifodani soddalashtiring.",
    "variantlar": ["(2a)/(a² - b²)", "(2b)/(a² - b²)", "(2a)/(a² - b²)", "(a²+b²)/(a²-b²)"],
    "javob": "(2a)/(a² - b²)"
  },
  {
    "savol": "1/(m - 5) - 1/(m + 6) ifodani soddalashtiring.",
    "variantlar": ["11/[(m-5)(m+6)]", "1/[(m-5)(m+6)]", "11/[(m-5)(m+6)]", "(m+6-m+5)/[(m-5)(m+6)]"],
    "javob": "11/[(m-5)(m+6)]"
  },
  {
    "savol": "1/(x + y) - 1/(x - y) ifodani soddalashtiring.",
    "variantlar": ["(-2y)/(x² - y²)", "(2y)/(x² - y²)", "(-2y)/(x² - y²)", "(x-y-x-y)/[(x+y)(x-y)]"],
    "javob": "(-2y)/(x² - y²)"
  },
  {
    "savol": "(x/y - y/x) : (1/x - 1/y) ifodani soddalashtiring.",
    "variantlar": ["x + y", "x - y", "x + y", "(x²-y²)/(xy) : (y-x)/(xy) = (x²-y²)/(y-x) = -(x+y)"],
    "javob": "x + y"
  },
  {
    "savol": "(1/y - 1/x) : (1/x + 1/y) ifodani soddalashtiring.",
    "variantlar": ["(x-y)/(x+y)", "(x+y)/(x-y)", "(x-y)/(x+y)", "(x-y)/(xy) : (x+y)/(xy) = (x-y)/(x+y)"],
    "javob": "(x-y)/(x+y)"
  },
  {
    "savol": "(y/x - x/y) : (1/x + 1/y) ifodani soddalashtiring.",
    "variantlar": ["y - x", "x - y", "y - x", "(y²-x²)/(xy) : (x+y)/(xy) = (y²-x²)/(x+y) = y-x"],
    "javob": "y - x"
  },
  {
    "savol": "[1/x - (x-3y)/(x² - y²)] : (1/x + 1/y) ifodani soddalashtiring.",
    "variantlar": ["(y)/(x+y)", "(x)/(x+y)", "(y)/(x+y)", "Kasrni soddalashtirish natijasi"],
    "javob": "(y)/(x+y)"
  },
  {
    "savol": "[4/(a+b) - (a-7b)/(a²-b²)] : (1/b² - 1/a²) ifodani soddalashtiring.",
    "variantlar": ["(a²b²)/(a-b)", "(a²b²)/(a+b)", "(a²b²)/(a-b)", "Murakkab kasr"],
    "javob": "(a²b²)/(a-b)"
  },
  {
    "savol": "[y/(x+y) + (x-y)/(x+y)] : [y/x + (x+y)/(x-y)] ifodani soddalashtiring.",
    "variantlar": ["(x(x-y))/(x²+y²)", "(x(x+y))/(x²-y²)", "(x(x-y))/(x²+y²)", "Soddalashtirish"],
    "javob": "(x(x-y))/(x²+y²)"
  },
  {
    "savol": "[(x+y)/(x-y) + (x-y)/(x+y)] : [1 - 2y/(x²+y²)] ifodani soddalashtiring.",
    "variantlar": ["(x²+y²)/(x-y)", "(x²-y²)/(x+y)", "(x²+y²)/(x-y)", "Natija"],
    "javob": "(x²+y²)/(x-y)"
  },
  {
    "savol": "[a/(a-b) - (a²+b²)/(a²-b²)] : (a+b) ifodani soddalashtiring.",
    "variantlar": ["b/(a-b)", "a/(a+b)", "b/(a-b)", "Soddalashtirish"],
    "javob": "b/(a-b)"
  },
  {
    "savol": "[1/(x+5y) - 1/(5y-x)] : z/(z²-25y²) ifodani soddalashtiring.",
    "variantlar": ["2/z", "2x/z", "2/z", "Natija"],
    "javob": "2/z"
  },
  {
    "savol": "[1/(x+4y) + 1/(4y-x)] : z/(z²-16xy) ifodani soddalashtiring.",
    "variantlar": ["0", "2/z", "0", "Natija"],
    "javob": "0"
  },
  {
    "savol": "[(z²-y²)/(x-y) - (z²-y²)/(x-y)] : (1+1/y) ifodani soddalashtiring.",
    "variantlar": ["0", "1", "0", "0"],
    "javob": "0"
  },
  {
    "savol": "[b/(a+b) + (a²+b²)/(a²-b²)] * (ab-b²)/a ifodani soddalashtiring.",
    "variantlar": ["b", "a", "b", "Ko'paytma"],
    "javob": "b"
  },
  {
    "savol": "[(x²-y²)/(x-y) + (x³+y³)/(x²-y²)] * (1/x - 1/y) ifodani soddalashtiring.",
    "variantlar": ["(x²+xy+y²)/(x+y)", "(x²-xy+y²)/(x-y)", "(x²+xy+y²)/(x+y)", "Soddalashtirish"],
    "javob": "(x²+xy+y²)/(x+y)"
  },
  {
    "savol": "(x³-4x)/(x²+4x+4) * [2/(x-2) - 1/x] ifodani soddalashtiring.",
    "variantlar": ["(x+2)/(x-2)", "(x-2)/(x+2)", "(x+2)/(x-2)", "Ko'paytma"],
    "javob": "(x+2)/(x-2)"
  },
  {
    "savol": "(x³-9x)/(x²+6x+9) * [2/(x-3) - 1/x] ifodani soddalashtiring.",
    "variantlar": ["(x+3)/(x-3)", "(x-3)/(x+3)", "(x+3)/(x-3)", "Ko'paytma"],
    "javob": "(x+3)/(x-3)"
  },
  {
    "savol": "(x³-9x)/(2x²+6x) * [1/(x-3) - 1/(x+3)] ifodani soddalashtiring.",
    "variantlar": ["1", "2", "1", "Soddalashtirish"],
    "javob": "1"
  },
  {
    "savol": "[1/(x(x+1)) - 1/((x+1)(x+2))] * x² ifodani soddalashtiring.",
    "variantlar": ["x/(x+2)", "(x+2)/x", "x/(x+2)", "Ko'paytma"],
    "javob": "x/(x+2)"
  }
],


theme16: [
  {
    "savol": "19x = 57 tenglamani yeching.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "-48x = 96 tenglamani yeching.",
    "variantlar": [-2, 2, -3, 3],
    "javob": -2
  },
  {
    "savol": "-23x = 69 tenglamani yeching.",
    "variantlar": [-3, 3, -4, 4],
    "javob": -3
  },
  {
    "savol": "-105 : x = -35 tenglamani yeching.",
    "variantlar": [3, -3, 4, -4],
    "javob": 3
  },
  {
    "savol": "10 : (-x) = 2 tenglamani yeching.",
    "variantlar": [-5, 5, -2, 2],
    "javob": -5
  },
  {
    "savol": "50 : (-x) = 5 tenglamani yeching.",
    "variantlar": [-10, 10, -5, 5],
    "javob": -10
  },
  {
    "savol": "12 + x = -9 tenglamani yeching.",
    "variantlar": [-21, 21, -3, 3],
    "javob": -21
  },
  {
    "savol": "-8 + x = 10 tenglamani yeching.",
    "variantlar": [18, -18, 2, -2],
    "javob": 18
  },
  {
    "savol": "12x + 14 = 38 tenglamani yeching.",
    "variantlar": [2, 3, 4, 5],
    "javob": 2
  },
  {
    "savol": "24 - 3x = 15 tenglamani yeching.",
    "variantlar": [3, 4, 5, 6],
    "javob": 3
  },
  {
    "savol": "6x - 12 = 24 tenglamani yeching.",
    "variantlar": [6, 5, 4, 3],
    "javob": 6
  },
  {
    "savol": "8x + 4 = 40 tenglamani yeching.",
    "variantlar": [4.5, 5, 5.5, 6],
    "javob": 4.5
  },
  {
    "savol": "-(4x + 4)/4 = -4 tenglamani yeching.",
    "variantlar": [3, 4, 5, 6],
    "javob": 3
  },
  {
    "savol": "-(x - 5)/2 = -3 tenglamani yeching.",
    "variantlar": [11, 10, 9, 8],
    "javob": 11
  },
  {
    "savol": "4(-7x + 2) = -20 tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "6(-x - 5) = -42 tenglamani yeching.",
    "variantlar": [2, 3, 4, 5],
    "javob": 2
  },
  {
    "savol": "-(x + 4) - 4(3x + 1) = -21 tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "5(-3x + 3) - 2(-3x - 2) = 19 tenglamani yeching.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "3x + 2(x - 4) = 12 tenglamani yeching.",
    "variantlar": [4, 5, 6, 7],
    "javob": 4
  },
  {
    "savol": "5(1 - 2x) - 12 = 35 - 9x tenglamani yeching.",
    "variantlar": [-6, -5, -4, -3],
    "javob": -6
  },
  {
    "savol": "2(3x + 1) + 4(2x - 3) = 3(x - 1) tenglamani yeching.",
    "variantlar": [0.5, 1, 1.5, 2],
    "javob": 0.5
  },
  {
    "savol": "7(3x + 2) - 3(4x - 2) = 5(2x - 1) tenglamani yeching.",
    "variantlar": [-5, -4, -3, -2],
    "javob": -3
  },
  {
    "savol": "3(2 - 4x) + 1 = -19 - 2(1 - x) tenglamani yeching.",
    "variantlar": [2, 3, 4, 5],
    "javob": 2
  },
  {
    "savol": "-3(4x + 4) - (3x + 2) = (4x - 3) + (-5x + 1) + 16 tenglamani yeching.",
    "variantlar": [-2, -1, 0, 1],
    "javob": -2
  },
  {
    "savol": "-4(5x - 3) - 5(2x + 2) = 3(-5x + 4) - (5x + 1) - 9 tenglamani yeching.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "4(x - 2) + 3x = 6(1.5x - 4) + 12 tenglamani yeching.",
    "variantlar": [4, 5, 6, 7],
    "javob": 4
  },
  {
    "savol": "2.5(3 - x) - 1.5 = 4(x + 1) - 11 tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "100/(25 - x) = 5 tenglamani yeching.",
    "variantlar": [5, 6, 7, 8],
    "javob": 5
  },
  {
    "savol": "(2x - 1)/3 - (4 - x)/2 = 1 + (x - 3)/6 tenglamani yeching.",
    "variantlar": [5, 6, 7, 8],
    "javob": 5
  },
  {
    "savol": "300/(7 - x) = 75 tenglamani yeching.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "2(x - 3) - 3(2 - x) + 8 = 5x - 4 tenglamani yeching.",
    "variantlar": [-6, -5, -4, -3],
    "javob": -6
  },
  {
    "savol": "2x - 3 = 2(x + 1) - 5 tenglamani yeching.",
    "variantlar": ["x ixtiyoriy son", "x = 0", "x = 1", "x = 2"],
    "javob": "x ixtiyoriy son"
  },
  {
    "savol": "a ning qanday qiymatida 3xa - 7 = 7a + 5x tenglamaning ildizi 1 ga teng bo'ladi?",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "a ning qanday qiymatida 2x + 5a = 4x - 3 + ax tenglamaning ildizi 12 ga teng bo'ladi?",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "3x + 2(x - 3) = 6x - (x + 4) tenglamani yeching.",
    "variantlar": ["yechimga ega emas", "x ixtiyoriy son", "x = 0", "x = 1"],
    "javob": "x ixtiyoriy son"
  },
  {
    "savol": "a ning qanday qiymatida a(x + 1) - 8 = x(a - 2) + 3a tenglamaning ildizi 5 ga teng bo'ladi?",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "(x + 2)/3 + (x - 5)/6 = (2x - 3)/4 + 15 tenglamani yeching.",
    "variantlar": [41, 42, 43, 44],
    "javob": 43
  },
  {
    "savol": "x + 2/9 = 4/3 tenglamani yeching.",
    "variantlar": ["10/9", "11/9", "13/9", "14/9"],
    "javob": "10/9"
  },
  {
    "savol": "(2x-3)/(4x+5) = (3x-1)/(6x-1) tenglamani yeching.",
    "variantlar": [0.5, 1, 1.5, 2],
    "javob": 1
  },
  {
    "savol": "5/5 + x = 3/3 tenglamani yeching.",
    "variantlar": [0, 1, 2, 3],
    "javob": 0
  },
  {
    "savol": "(x-1)/(3x-2) = (5x-3)/(15x-1) tenglamani yeching.",
    "variantlar": [0, 1, 2, 3],
    "javob": 1
  },
  {
    "savol": "1 + 1/0.2 = 36 tenglamani tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "x ni topish kerak", "Ma'nosi yo'q"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "(3x-1)/(6x-5) = (x+1)/(2x+3) tenglamani yeching.",
    "variantlar": [0.5, 1, 1.5, 2],
    "javob": 1
  },
  {
    "savol": "5 - (5/x + 1)/(3 - 1/x) = 2 tenglamani yeching.",
    "variantlar": [0.5, 1, 1.5, 2],
    "javob": 0.5
  },
  {
    "savol": "(5x² + x + 5)/(x-4) = 5x + 3 tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 1
  },
  {
    "savol": "(x+1)² = (111 - (1-x))x - 80 tenglamani yeching.",
    "variantlar": [9, 10, 11, 12],
    "javob": 10
  },
  {
    "savol": "4x + (5x - (6x - (7x - (8x - 9)))) = 10 tenglamani yeching.",
    "variantlar": [0.5, 1, 1.5, 2],
    "javob": 0.5
  },
  {
    "savol": "x - (x + (2x - (3x - (4x - (5x - (6x - (7x - (8x - 9))))))) = 18 tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "(x + 2)² - (x - 1)² = 21 tenglamani yeching.",
    "variantlar": [2, 3, 4, 5],
    "javob": 3
  },
  {
    "savol": "(x - 1)² - (x - 1)(x - 1) = 0 tenglamani yeching.",
    "variantlar": ["x ixtiyoriy son", "x = 1", "x = 0", "x = -1"],
    "javob": "x ixtiyoriy son"
  },
  {
    "savol": "a va b ning qanday qiymatlarida ax + 5 = 4x tenglama yechimga ega bo'lmaydi?",
    "variantlar": ["a = 4, b ixtiyoriy", "a ≠ 4, b ixtiyoriy", "a = 4, b = 5", "a = 4, b ≠ 5"],
    "javob": "a = 4, b ≠ 5"
  },
  {
    "savol": "a ning qanday qiymatida 5x + 2 = ax - 4 tenglama yechimga ega bo'lmaydi?",
    "variantlar": [5, 4, 3, 2],
    "javob": 5
  },
  {
    "savol": "y + 2x = 6 + 3y tenglamada x ni y orqali ifodalang.",
    "variantlar": ["x = y + 3", "x = y - 3", "x = 3 - y", "x = -y - 3"],
    "javob": "x = y + 3"
  },
  {
    "savol": "y = (3x + 1)/(2x - 1) tenglamada x ni y orqali ifodalang.",
    "variantlar": ["x = (y+1)/(2y-3)", "x = (y-1)/(2y+3)", "x = (y+1)/(2y+3)", "x = (y-1)/(2y-3)"],
    "javob": "x = (y+1)/(2y-3)"
  },
  {
    "savol": "y = (2x + 3)/(x + 1) tenglamada x ni y orqali ifodalang.",
    "variantlar": ["x = (y-3)/(2-y)", "x = (y+3)/(2-y)", "x = (y-3)/(2+y)", "x = (y+3)/(2+y)"],
    "javob": "x = (y-3)/(2-y)"
  },
  {
    "savol": "y = (5x + 1)/(x + 2) tenglamada x ni y orqali ifodalang.",
    "variantlar": ["x = (2y-1)/(5-y)", "x = (2y+1)/(5-y)", "x = (2y-1)/(5+y)", "x = (2y+1)/(5+y)"],
    "javob": "x = (2y-1)/(5-y)"
  },
  {
    "savol": "a ning qanday qiymatida a(x + 5) = 3(2x + 1) tenglama yechimga ega bo'lmaydi?",
    "variantlar": [6, 5, 4, 3],
    "javob": 6
  },
  {
    "savol": "a ning qanday qiymatida a = (3x - 1)/(x - 2) tenglama yechimga ega bo'lmaydi?",
    "variantlar": [3, 2, 1, 0],
    "javob": 3
  },
  {
    "savol": "a ning qanday qiymatida a = (2x - 3)/(x + 10) tenglama yechimga ega bo'lmaydi?",
    "variantlar": [3, 2, 1, 0],
    "javob": 2
  },
  {
    "savol": "a ≠ b bo'lganda a + b²x = abx + b tenglamani yeching.",
    "variantlar": ["x = 1/b", "x = 1/a", "x = a/b", "x = b/a"],
    "javob": "x = 1/b"
  },
  {
    "savol": "12/5 - 1/3 = 4 tenglamani tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "x ni topish kerak", "Ma'nosi yo'q"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "18/(2 + 8/(3 - 4/(x - 5))) = 3 tenglamani yeching.",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "2 + 9/(4 - 5/(3 + 2/(x + 1))) = 5 tenglamani yeching.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "3 - 6/(1 + 4/(4 - 1/(x - 2))) = 1 tenglamani yeching.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  }
],




  theme17: [
  {
    "savol": "x - 7 > 0 tengsizlikni yeching.",
    "variantlar": ["x > 7", "x < 7", "x ≥ 7", "x ≤ 7"],
    "javob": "x > 7"
  },
  {
    "savol": "x + 5 < 0 tengsizlikni yeching.",
    "variantlar": ["x < -5", "x > -5", "x ≤ -5", "x ≥ -5"],
    "javob": "x < -5"
  },
  {
    "savol": "3 + x ≤ 0 tengsizlikni yeching.",
    "variantlar": ["x ≤ -3", "x ≥ -3", "x < -3", "x > -3"],
    "javob": "x ≤ -3"
  },
  {
    "savol": "2 - x ≥ 5 tengsizlikni yeching.",
    "variantlar": ["x ≤ -3", "x ≥ -3", "x < -3", "x > -3"],
    "javob": "x ≤ -3"
  },
  {
    "savol": "3 + 2x < 7 tengsizlikni yeching.",
    "variantlar": ["x < 2", "x > 2", "x ≤ 2", "x ≥ 2"],
    "javob": "x < 2"
  },
  {
    "savol": "5x - 8 > 2 tengsizlikni yeching.",
    "variantlar": ["x > 2", "x < 2", "x ≥ 2", "x ≤ 2"],
    "javob": "x > 2"
  },
  {
    "savol": "3x + 4 ≤ 2x + 5 tengsizlikni yeching.",
    "variantlar": ["x ≤ 1", "x ≥ 1", "x < 1", "x > 1"],
    "javob": "x ≤ 1"
  },
  {
    "savol": "2x - 2 > 3x - 4 tengsizlikni yeching.",
    "variantlar": ["x < 2", "x > 2", "x ≤ 2", "x ≥ 2"],
    "javob": "x < 2"
  },
  {
    "savol": "3x + 4 > 5x - 6 tengsizlikni yeching.",
    "variantlar": ["x < 5", "x > 5", "x ≤ 5", "x ≥ 5"],
    "javob": "x < 5"
  },
  {
    "savol": "6x + 7 ≤ 3x + 1 tengsizlikni yeching.",
    "variantlar": ["x ≤ -2", "x ≥ -2", "x < -2", "x > -2"],
    "javob": "x ≤ -2"
  },
  {
    "savol": "4x + 3 ≥ 2x + 7 tengsizlikni yeching.",
    "variantlar": ["x ≥ 2", "x ≤ 2", "x > 2", "x < 2"],
    "javob": "x ≥ 2"
  },
  {
    "savol": "5x + 1 > 2x - 8 tengsizlikni yeching.",
    "variantlar": ["x > -3", "x < -3", "x ≥ -3", "x ≤ -3"],
    "javob": "x > -3"
  },
  {
    "savol": "3(x + 2) < 4x - 5 tengsizlikni yeching.",
    "variantlar": ["x > 11", "x < 11", "x ≥ 11", "x ≤ 11"],
    "javob": "x > 11"
  },
  {
    "savol": "7(x + 3) < 2x + 11 tengsizlikni yeching.",
    "variantlar": ["x < -2", "x > -2", "x ≤ -2", "x ≥ -2"],
    "javob": "x < -2"
  },
  {
    "savol": "3(x + 2) ≥ 4(x + 2) + 5 tengsizlikni yeching.",
    "variantlar": ["x ≤ -7", "x ≥ -7", "x < -7", "x > -7"],
    "javob": "x ≤ -7"
  },
  {
    "savol": "3x + 5 ≥ (11x + 1)/3 tengsizlikni yeching.",
    "variantlar": ["x ≤ 2", "x ≥ 2", "x < 2", "x > 2"],
    "javob": "x ≤ 2"
  },
  {
    "savol": "4x + 3(2x + 2) < 5(3x - 4) + 2(x - 1) tengsizlikni yeching.",
    "variantlar": ["x > 6", "x < 6", "x ≥ 6", "x ≤ 6"],
    "javob": "x > 6"
  },
  {
    "savol": "(2x - 3)/4 ≤ (5x - 2)/8 tengsizlikni yeching.",
    "variantlar": ["x ≥ -4", "x ≤ -4", "x > -4", "x < -4"],
    "javob": "x ≥ -4"
  },
  {
    "savol": "x(x + 2) - 3(x + 3) > x² + 3x - 9 tengsizlikni yeching.",
    "variantlar": ["x < 0", "x > 0", "x ≤ 0", "x ≥ 0"],
    "javob": "x < 0"
  },
  {
    "savol": "(2x + 3)/2 + (3x + 1)/4 > 2x + 1 tengsizlikni yeching.",
    "variantlar": ["x > -4", "x < -4", "x ≥ -4", "x ≤ -4"],
    "javob": "x > -4"
  },
  {
    "savol": "x² - 2x + 9 < (x + 1)(x + 3) tengsizlikni yeching.",
    "variantlar": ["x > 2", "x < 2", "x ≥ 2", "x ≤ 2"],
    "javob": "x > 2"
  },
  {
    "savol": "(x + 4)(x - 2) ≤ (x - 5)(x + 4) tengsizlikni yeching.",
    "variantlar": ["x ≤ 3", "x ≥ 3", "x < 3", "x > 3"],
    "javob": "x ≤ 3"
  },
  {
    "savol": "(3x + 5)/2 ≥ (x + 3)/4 + (5x + 1)/2 tengsizlikni yeching.",
    "variantlar": ["x ≤ -1", "x ≥ -1", "x < -1", "x > -1"],
    "javob": "x ≤ -1"
  },
  {
    "savol": "(2x + 3)/5 > (4x + 3)/9 tengsizlikni yeching.",
    "variantlar": ["x < 6", "x > 6", "x ≤ 6", "x ≥ 6"],
    "javob": "x < 6"
  },
  {
    "savol": "(x³ + x + 7)/3 + (x² + 2)/6 > (x² - x + 12)/2 tengsizlikni yeching.",
    "variantlar": ["x > 2", "x < 2", "x ≥ 2", "x ≤ 2"],
    "javob": "x > 2"
  },
  {
    "savol": "(x² + 3x + 2)/3 - (x² + 5x - 3)/4 ≥ (x² + 6x - 4)/12 tengsizlikni yeching.",
    "variantlar": ["x ≥ -3", "x ≤ -3", "x > -3", "x < -3"],
    "javob": "x ≥ -3"
  },
  {
    "savol": "(x + 3)³ - (x + 2)³ - 3(x + 1)² - 25 < 0 tengsizlikni yeching.",
    "variantlar": ["x < 2", "x > 2", "x ≤ 2", "x ≥ 2"],
    "javob": "x < 2"
  },
  {
    "savol": "(x + 1)³ + (2 - x)³ - (3x + 1)² > -7 tengsizlikni yeching.",
    "variantlar": ["x < 1", "x > 1", "x ≤ 1", "x ≥ 1"],
    "javob": "x < 1"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {3x + 4 > 7, 2x - 3 < 9}",
    "variantlar": ["x > 1 va x < 6", "x > 1", "x < 6", "1 < x < 6"],
    "javob": "1 < x < 6"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {2x - 1 < 13, 3x + 7 > 16}",
    "variantlar": ["x < 7 va x > 3", "x > 3", "x < 7", "3 < x < 7"],
    "javob": "3 < x < 7"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {x + 7 > 2, 2x - 4 ≥ 0}",
    "variantlar": ["x > -5 va x ≥ 2", "x ≥ 2", "x > -5", "-5 < x ≤ 2"],
    "javob": "x ≥ 2"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {2x + 7 ≤ 9, 3x + 7 > 1}",
    "variantlar": ["x ≤ 1 va x > -2", "-2 < x ≤ 1", "x ≤ 1", "x > -2"],
    "javob": "-2 < x ≤ 1"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {3x + 1 > 10, 2x - 2 ≥ 4}",
    "variantlar": ["x > 3 va x ≥ 3", "x ≥ 3", "x > 3", "3 ≤ x"],
    "javob": "x ≥ 3"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {-2x + 5 > 1, 6x + 7 < 1}",
    "variantlar": ["x < 2 va x < -1", "x < -1", "x < 2", "yechim yo'q"],
    "javob": "yechim yo'q"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {5x + 6 ≤ x, 3x + 12 ≤ x + 17}",
    "variantlar": ["x ≤ -1.5 va x ≤ 2.5", "x ≤ -1.5", "x ≤ 2.5", "x ≤ -1.5"],
    "javob": "x ≤ -1.5"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {2(x + 3) - (3x + 2)/4 > (10x + 4)/3, 4(2 - x) ≤ (3x + 5)/2}",
    "variantlar": ["x < -2 va x ≥ 1", "x ≥ 1", "x < -2", "yechim yo'q"],
    "javob": "yechim yo'q"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {x/2 < (x + 1)/3, x/3 > (x + 1)/4}",
    "variantlar": ["x < 2 va x > 3", "2 < x < 3", "x < 2", "x > 3"],
    "javob": "2 < x < 3"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {3(x - 1) - 2(2 - 3x) > 5x - 3, 8x - 3(2x + 5) < 2(x - 7)}",
    "variantlar": ["x > 0.5 va x < 0.5", "0.5 < x < 0.5", "x > 0.5", "x < 0.5"],
    "javob": "yechim yo'q"
  },
  {
    "savol": "tengsizliklar sistemasini yeching: {x + 2 ≤ (2x + 1)/3, 3(x + 1) + 5(2x - 3) > 4(2x - 1) + 2}",
    "variantlar": ["x ≤ -5 va x > 2", "x > 2", "x ≤ -5", "yechim yo'q"],
    "javob": "yechim yo'q"
  },
  {
    "savol": "2(x - 5) + 3(x - 7) > 0 tengsizlikning eng kichik natural yechimini toping.",
    "variantlar": [7, 8, 9, 10],
    "javob": 8
  },
  {
    "savol": "2x + 3(x - 5) < 8 tengsizlikning natural yechimlari yig'indisini toping.",
    "variantlar": [6, 10, 15, 21],
    "javob": 6
  },
  {
    "savol": "(3x + 1)/2 - 4 < 2x - (x - 3)/4 tengsizlikning eng kichik butun yechimini toping.",
    "variantlar": [3, 4, 5, 6],
    "javob": 4
  },
  {
    "savol": "(5/4)(x + 1) + (3/4)(x - 2) ≥ 3(x - 1) tengsizlikning eng kichik natural yechimini toping.",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "(3x - 2)/4 - (2x + 1)/3 ≤ 1 tengsizlikning eng katta natural yechimini toping.",
    "variantlar": [9, 10, 11, 12],
    "javob": 10
  },
  {
    "savol": "(2x - 3)² - (2x - 7)(2x + 7) > 0 tengsizlikning natural yechimlari nechta?",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "(3x - 5)² - (3x - 8)(3x + 8) > 0 tengsizlikning natural yechimlari nechta?",
    "variantlar": [1, 2, 3, 4],
    "javob": 2
  },
  {
    "savol": "(x - 3)² - (x - 4)(x + 4) - 3(x + 12) < 16 tengsizlikning eng kichik butun yechimini toping.",
    "variantlar": [-1, 0, 1, 2],
    "javob": 1
  },
  {
    "savol": "(x - 4)² - (x - 2)(x + 2) - 4(x - 3) < 8 tengsizlikning eng kichik butun yechimini toping.",
    "variantlar": [-1, 0, 1, 2],
    "javob": 1
  },
  {
    "savol": "(x + 3)³ - (x - 3)³ - 2(3x + 2)² + 2 > 0 tengsizlikni nechta natural son qanoatlantiradi?",
    "variantlar": [0, 1, 2, 3],
    "javob": 1
  },
  {
    "savol": "(x + 1)³ - x(x + 1)² - x² + 3 > 0 tengsizlikning eng kichik butun yechimini toping.",
    "variantlar": [-2, -1, 0, 1],
    "javob": -1
  },
  {
    "savol": "tengsizliklar sistemasining butun yechimlari yig'indisini toping: {2(x - 1) ≤ 6, 3(x - 2) ≥ -3}",
    "variantlar": [7, 8, 9, 10],
    "javob": 9
  },
  {
    "savol": "tengsizliklar sistemasining butun yechimlari yig'indisini toping: {5(x - 1) ≤ 10, 4(x - 2) ≥ -8}",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "-7 ≤ 1 - 4x ≤ 13 qo'sh tengsizlikning butun yechimlari yig'indisini toping.",
    "variantlar": [-6, -5, -4, -3],
    "javob": -4
  },
  {
    "savol": "-3 ≤ 7 - 2x ≤ 11 qo'sh tengsizlikning butun yechimlari yig'indisini toping.",
    "variantlar": [6, 7, 8, 9],
    "javob": 8
  },
  {
    "savol": "(4 - x)/12 ≥ (15 + x²)/9 tengsizlikni qanoatlantiruvchi eng katta butun sonni toping.",
    "variantlar": [-2, -1, 0, 1],
    "javob": -1
  },
  {
    "savol": "(x + 4)² - (x - 10)² ≤ 140 tengsizlikni qanoatlantiruvchi eng katta butun sonni toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 6
  },
  {
    "savol": "n natural sonining nechta qiymatida 5n + 2 soni 40 dan katta, lekin 90 dan kichik bo'ladi?",
    "variantlar": [8, 9, 10, 11],
    "javob": 9
  },
  {
    "savol": "n natural sonining nechta qiymatida 8n + 5 soni ikki xonali son bo'ladi?",
    "variantlar": [10, 11, 12, 13],
    "javob": 11
  },
  {
    "savol": "x ning qanday qiymatida 6x + 12 - 3(x + 2) ifoda manfiy qiymatlarni qabul qiladi?",
    "variantlar": ["x < -2", "x > -2", "x < 2", "x > 2"],
    "javob": "x < -2"
  },
  {
    "savol": "n natural sonining nechta qiymatida 7n + 3 soni ikki xonali son bo'ladi?",
    "variantlar": [11, 12, 13, 14],
    "javob": 12
  },
  {
    "savol": "x ning qanday qiymatlarida 3x - 8 ifodaning qiymati 4x + 7 ifodaning qiymatidan katta bo'ladi?",
    "variantlar": ["x < -15", "x > -15", "x < 15", "x > 15"],
    "javob": "x < -15"
  },
  {
    "savol": "Agar 3 < a < 7 va 4 < b < 7 bo'lsa, 2a + 3b ning qiymatlar sohasini toping.",
    "variantlar": ["18 < 2a+3b < 35", "6 < 2a+3b < 14", "8 < 2a+3b < 21", "10 < 2a+3b < 28"],
    "javob": "18 < 2a+3b < 35"
  },
  {
    "savol": "x ning qanday qiymatlarida 3x + 7 va 2(x + 3) ifodalarning yig'indisi 3 dan katta bo'ladi?",
    "variantlar": ["x > -2", "x < -2", "x > 2", "x < 2"],
    "javob": "x > -2"
  },
  {
    "savol": "Agar 1 < a < 9 va 3 < b < 7 bo'lsa, 3a + b ning qiymatlar sohasini toping.",
    "variantlar": ["6 < 3a+b < 34", "3 < 3a+b < 27", "9 < 3a+b < 21", "12 < 3a+b < 30"],
    "javob": "6 < 3a+b < 34"
  },
  {
    "savol": "Agar -3 < a < 3 va -1 ≤ b < 4 bo'lsa, 4a + 3b ning qiymatlar sohasini toping.",
    "variantlar": ["-15 < 4a+3b < 24", "-12 < 4a+3b < 21", "-9 < 4a+3b < 18", "-6 < 4a+3b < 15"],
    "javob": "-15 < 4a+3b < 24"
  },
  {
    "savol": "Agar 2 < a < 5 va 3 < b < 7 bo'lsa, 2a - b ning qiymatlar sohasini toping.",
    "variantlar": ["-3 < 2a-b < 7", "-2 < 2a-b < 6", "-1 < 2a-b < 5", "0 < 2a-b < 4"],
    "javob": "-3 < 2a-b < 7"
  },
  {
    "savol": "Agar 1 < a ≤ 4 va 2 ≤ b ≤ 8 bo'lsa, 6a - 2b ning qiymatlar sohasini toping.",
    "variantlar": ["-10 < 6a-2b ≤ 20", "-8 < 6a-2b ≤ 18", "-6 < 6a-2b ≤ 16", "-4 < 6a-2b ≤ 14"],
    "javob": "-10 < 6a-2b ≤ 20"
  },
  {
    "savol": "Agar 2 < x < 4 va y - 3x + 2 = 0 bo'lsa, y ning qiymatlar sohasini toping.",
    "variantlar": ["4 < y < 10", "2 < y < 8", "0 < y < 6", "-2 < y < 4"],
    "javob": "4 < y < 10"
  },
  {
    "savol": "Agar 1 < x ≤ 5 va y + 2x - 3 = 0 bo'lsa, y ning qiymatlar sohasini toping.",
    "variantlar": ["-7 ≤ y < -1", "-5 ≤ y < 1", "-3 ≤ y < 3", "-1 ≤ y < 5"],
    "javob": "-7 ≤ y < -1"
  },
  {
    "savol": "Agar -2 < x < 6 va 2y - 5x + 2 = 0 bo'lsa, y ning qiymatlar sohasini toping.",
    "variantlar": ["-6 < y < 14", "-4 < y < 12", "-2 < y < 10", "0 < y < 8"],
    "javob": "-6 < y < 14"
  },
  {
    "savol": "Agar 1 < x < 7 va 3y - x - 2 = 0 bo'lsa, y ning qiymatlar sohasini toping.",
    "variantlar": ["1 < y < 3", "2 < y < 4", "3 < y < 5", "4 < y < 6"],
    "javob": "1 < y < 3"
  },
  {
    "savol": "Agar -3 < x < 5 va 2y - 4x + 3 = 0 bo'lsa, y ning qiymatlar sohasini toping.",
    "variantlar": ["-7.5 < y < 9.5", "-5.5 < y < 7.5", "-3.5 < y < 5.5", "-1.5 < y < 3.5"],
    "javob": "-7.5 < y < 9.5"
  },
  {
    "savol": "a, b, c natural sonlar va c < 6; a + b = 4c - 2 bo'lsa, ab ning eng katta qiymatini toping.",
    "variantlar": [36, 42, 48, 54],
    "javob": 42
  },
  {
    "savol": "x, y natural sonlar va x < 20; 3x + 2y = 92 bo'lsa, y ning eng kichik qiymatini toping.",
    "variantlar": [12, 13, 14, 15],
    "javob": 14
  }
],





  theme18: [
  {
    "savol": "(5 - √13)(15 + 5√7 + 3√13 + √91) ifodani soddalashtiring.",
    "variantlar": ["5√7 + 15", "5√7 - 15", "15 - 5√7", "5√7 + 13"],
    "javob": "5√7 + 15"
  },
  {
    "savol": "(√5 - 1)(√15 + √5 + √3 + 1)/(√3 + 1) ifodani soddalashtiring.",
    "variantlar": ["√5 - 1", "√5 + 1", "2", "4"],
    "javob": "2"
  },
  {
    "savol": "(√7 + 1)(√21 + √7 - √3 - 1)/(√3 + 1) ifodani soddalashtiring.",
    "variantlar": ["√7 - 1", "√7 + 1", "2", "4"],
    "javob": "2"
  },
  {
    "savol": "(√5 + √3)(√35 - √21 - 2√5 + 2√3)/(√7 - 2) ifodani soddalashtiring.",
    "variantlar": ["2", "3", "4", "5"],
    "javob": "4"
  },
  {
    "savol": "(√11 + 3)(√22 - 3√2 + 5√11 - 15)/(√2 + 5) ifodani soddalashtiring.",
    "variantlar": ["√11 - 3", "√11 + 3", "2", "4"],
    "javob": "√11 - 3"
  },
  {
    "savol": "a = 2√3, b = 3√2, c = 4 sonlarini o'sish tartibida yozing.",
    "variantlar": ["a, c, b", "b, c, a", "c, a, b", "a, b, c"],
    "javob": "a, c, b"
  },
  {
    "savol": "a = 3√3, b = 5, c = 2√7 sonlarini o'sish tartibida yozing.",
    "variantlar": ["b, c, a", "c, b, a", "a, b, c", "a, c, b"],
    "javob": "b, c, a"
  },
  {
    "savol": "a = 4√2, b = 2√10, c = 6 sonlarini o'sish tartibida yozing.",
    "variantlar": ["b, a, c", "a, b, c", "c, a, b", "b, c, a"],
    "javob": "b, a, c"
  },
  {
    "savol": "a = 7, b = 4√3, c = 5√2 sonlarini o'sish tartibida yozing.",
    "variantlar": ["b, c, a", "c, b, a", "a, b, c", "a, c, b"],
    "javob": "b, c, a"
  },
  {
    "savol": "a = 8, b = 2√15, c = 3√7 sonlarini o'sish tartibida yozing.",
    "variantlar": ["b, c, a", "c, b, a", "a, b, c", "a, c, b"],
    "javob": "b, c, a"
  },
  {
    "savol": "√((2 - √3)²) ni hisoblang.",
    "variantlar": ["2 - √3", "√3 - 2", "2 + √3", "-(2 + √3)"],
    "javob": "2 - √3"
  },
  {
    "savol": "√((3 - 2√2)²) ni hisoblang.",
    "variantlar": ["3 - 2√2", "2√2 - 3", "3 + 2√2", "-(3 + 2√2)"],
    "javob": "3 - 2√2"
  },
  {
    "savol": "√((4 - 3√2)²) ni hisoblang.",
    "variantlar": ["4 - 3√2", "3√2 - 4", "4 + 3√2", "-(4 + 3√2)"],
    "javob": "3√2 - 4"
  },
  {
    "savol": "√((5√2 - 8)²) ni hisoblang.",
    "variantlar": ["5√2 - 8", "8 - 5√2", "5√2 + 8", "-(5√2 + 8)"],
    "javob": "8 - 5√2"
  },
  {
    "savol": "√((4√3 - 8)²) + 2√3 ni hisoblang.",
    "variantlar": ["8 - 2√3", "2√3 - 8", "8 + 2√3", "2√3"],
    "javob": "8 - 2√3"
  },
  {
    "savol": "√((7√2 - 10)²) + √((4 + √2)²) ni hisoblang.",
    "variantlar": ["14", "4√2", "6", "8"],
    "javob": "14"
  },
  {
    "savol": "√((5√2 - 8)²) + √((2 + 5√2)²) ni hisoblang.",
    "variantlar": ["10", "10√2", "8 + 5√2", "8 - 5√2"],
    "javob": "10"
  },
  {
    "savol": "√((15 - 10√2)²) + √((-2)²) ni hisoblang.",
    "variantlar": ["10√2 - 13", "17 - 10√2", "15 - 10√2 + 2", "15 - 10√2 - 2"],
    "javob": "17 - 10√2"
  },
  {
    "savol": "√((17 + √3)²) - √((√3 - 1)²) ni hisoblang.",
    "variantlar": ["18", "16", "17 + √3 - √3 + 1", "17 + √3 - (√3 - 1)"],
    "javob": "18"
  },
  {
    "savol": "√(4 + 2√3) - √3 ni hisoblang.",
    "variantlar": ["1", "2", "√3", "√3 - 1"],
    "javob": "1"
  },
  {
    "savol": "√(3 - 2√2) - √2 ni hisoblang.",
    "variantlar": ["-1", "1", "√2 - 1", "1 - √2"],
    "javob": "-1"
  },
  {
    "savol": "√(12 + 2√35) - √7 ni hisoblang.",
    "variantlar": ["√5", "√7", "√35", "2√5"],
    "javob": "√5"
  },
  {
    "savol": "√(5 + 2√6) - √(3 + 2√2) ni hisoblang.",
    "variantlar": ["√2", "√3", "1", "0"],
    "javob": "0"
  },
  {
    "savol": "√(9 + 4√5) + √(9 - 4√5) ni hisoblang.",
    "variantlar": ["2√5", "4", "6", "8"],
    "javob": "6"
  },
  {
    "savol": "√(17 + 12√2) + √(17 - 12√2) ni hisoblang.",
    "variantlar": ["6", "8", "10", "12"],
    "javob": "6"
  },
  {
    "savol": "√(19 - 8√3) + √(19 + 8√3) ni hisoblang.",
    "variantlar": ["6", "8", "10", "12"],
    "javob": "8"
  },
  {
    "savol": "√(8 + 7√2) + √(11 - 6√2) ni hisoblang.",
    "variantlar": ["3 + √2", "5", "7", "9"],
    "javob": "5"
  },
  {
    "savol": "√(32 + √(11√3) - √19 + 8√3) ifodani soddalashtiring.",
    "variantlar": ["√32 + √(11√3) - √19 + 8√3", "4√2 + √(11√3) - √19 + 8√3", "√32 + √(11√3) - √19 + 8√3", "O'zgarishsiz qoladi"],
    "javob": "4√2 + √(11√3) - √19 + 8√3"
  },
  {
    "savol": "4/(5 - √5) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(20 + 4√5)/20", "(20 - 4√5)/20", "(4(5 + √5))/20", "(4(5 - √5))/20"],
    "javob": "(4(5 + √5))/20"
  },
  {
    "savol": "3/(√5 - √3) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(3(√5 + √3))/2", "(3(√5 - √3))/2", "(3(√5 + √3))/8", "(3(√5 - √3))/8"],
    "javob": "(3(√5 + √3))/2"
  },
  {
    "savol": "2/√5 kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(2√5)/5", "√5/2", "2/5√5", "2√5"],
    "javob": "(2√5)/5"
  },
  {
    "savol": "32/(8 - 2√7) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(32(8 + 2√7))/36", "(32(8 - 2√7))/36", "(32(8 + 2√7))/64", "(32(8 - 2√7))/64"],
    "javob": "(32(8 + 2√7))/36"
  },
  {
    "savol": "5/(3√2) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(5√2)/6", "(5√2)/3", "5/(3√2)", "(5√2)/9"],
    "javob": "(5√2)/6"
  },
  {
    "savol": "7/(√10 - √3) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(7(√10 + √3))/7", "(7(√10 - √3))/7", "(7(√10 + √3))/13", "(7(√10 - √3))/13"],
    "javob": "(7(√10 + √3))/7"
  },
  {
    "savol": "5/(2√5) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["√5/2", "5√5/2", "5/(2√5)", "(5√5)/10"],
    "javob": "√5/2"
  },
  {
    "savol": "1/(3√2) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["√2/6", "√2/3", "1/(3√2)", "√2/9"],
    "javob": "√2/6"
  },
  {
    "savol": "1/(√3 - 1) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(√3 + 1)/2", "(√3 - 1)/2", "√3 + 1", "√3 - 1"],
    "javob": "(√3 + 1)/2"
  },
  {
    "savol": "1/(2 - √2) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(2 + √2)/2", "(2 - √2)/2", "2 + √2", "2 - √2"],
    "javob": "(2 + √2)/2"
  },
  {
    "savol": "(√(4 - √7))/(√(4 + √7)) + (√(4 + √7))/(√(4 - √7)) ni hisoblang.",
    "variantlar": ["14/3", "7/3", "21/3", "28/3"],
    "javob": "14/3"
  },
  {
    "savol": "(√(5 - 2√6))/(√(5 + 2√6)) + (√(5 + 2√6))/(√(5 - 2√6)) ni hisoblang.",
    "variantlar": ["10", "8", "6", "4"],
    "javob": "10"
  },
  {
    "savol": "(√8 - √15)/(√8 + √15) = (√8 - √15)/(√8 - √15) tenglikni tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "2/(√3 - 1) + 1/(√3 - 2) ni hisoblang.",
    "variantlar": ["-1", "0", "1", "2"],
    "javob": "-1"
  },
  {
    "savol": "6/(√7 - 2) + 2/(3 - √7) - 18/(√7 - 1) ni hisoblang.",
    "variantlar": ["-2", "0", "2", "4"],
    "javob": "0"
  },
  {
    "savol": "(3/(3 - √3) - 11/(5 - √3) + 1/(2 - √3)) · (2√3 - 1) ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "(3/(3 - √3) + 11/(5 + √3) + 1/(2 - √3)) · (6 - √3) ni hisoblang.",
    "variantlar": ["6", "12", "18", "24"],
    "javob": "12"
  },
  {
    "savol": "(2/(√3 - 1) + 3/(√3 - 2) + 15/(3 - √3)) · (√3 + 5)⁻¹ ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "(15/(√6 + 1) + 4/(√6 - 2) - 12/(3 - √6)) · (√6 + 11) ni hisoblang.",
    "variantlar": ["6", "12", "18", "24"],
    "javob": "12"
  },
  {
    "savol": "(2/(√19 + √17) + 2/(√17 + √15) + √15) · √19 ni hisoblang.",
    "variantlar": ["√19", "√17", "√15", "2"],
    "javob": "2"
  },
  {
    "savol": "(√32 + √72)/√50 ni hisoblang.",
    "variantlar": ["2", "3", "4", "5"],
    "javob": "2"
  },
  {
    "savol": "(√45 + √20)/√125 ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "(√8 + √2 + √18)/√32 ni hisoblang.",
    "variantlar": ["1.5", "2", "2.5", "3"],
    "javob": "2"
  },
  {
    "savol": "(√12 + √27 + √75)/(√108 + √48) ni hisoblang.",
    "variantlar": ["0.5", "0.75", "1", "1.25"],
    "javob": "0.75"
  },
  {
    "savol": "(√20 + √45 + √125)/√180 ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "√3(2√3 + 2√12) ni hisoblang.",
    "variantlar": ["6", "12", "18", "24"],
    "javob": "12"
  },
  {
    "savol": "√2(√8 + 3√2) ni hisoblang.",
    "variantlar": ["4", "6", "8", "10"],
    "javob": "8"
  },
  {
    "savol": "1/√32 + 1/4² ni hisoblang.",
    "variantlar": ["0.125", "0.25", "0.375", "0.5"],
    "javob": "0.375"
  },
  {
    "savol": "√(1/32 + 1/42) ni hisoblang.",
    "variantlar": ["0.125", "0.2", "0.25", "0.3"],
    "javob": "0.2"
  },
  {
    "savol": "√49 · (√4 + √16) ni hisoblang.",
    "variantlar": ["42", "49", "56", "63"],
    "javob": "42"
  },
  {
    "savol": "(√4 + √81) : √121 ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "(√169 + √121) : √64 ni hisoblang.",
    "variantlar": ["2", "3", "4", "5"],
    "javob": "3"
  },
  {
    "savol": "√(82 + 15²) ni hisoblang.",
    "variantlar": ["√307", "17", "18", "19"],
    "javob": "17"
  },
  {
    "savol": "√(32 + 52) ni hisoblang.",
    "variantlar": ["√84", "9", "10", "11"],
    "javob": "9"
  },
  {
    "savol": "√25 ni hisoblang.",
    "variantlar": ["5", "±5", "25", "√5"],
    "javob": "5"
  }
],





  theme19: [
  {
    "savol": "(5 - √13)(15 + 5√7 + 3√13 + √91) ifodani soddalashtiring.",
    "variantlar": ["5√7 + 15", "5√7 - 15", "15 - 5√7", "5√7 + 13"],
    "javob": "5√7 + 15"
  },
  {
    "savol": "(√5 - 1)(√15 + √5 + √3 + 1)/(√3 + 1) ifodani soddalashtiring.",
    "variantlar": ["√5 - 1", "√5 + 1", "2", "4"],
    "javob": "2"
  },
  {
    "savol": "(√7 + 1)(√21 + √7 - √3 - 1)/(√3 + 1) ifodani soddalashtiring.",
    "variantlar": ["√7 - 1", "√7 + 1", "2", "4"],
    "javob": "2"
  },
  {
    "savol": "(√5 + √3)(√35 - √21 - 2√5 + 2√3)/(√7 - 2) ifodani soddalashtiring.",
    "variantlar": ["2", "3", "4", "5"],
    "javob": "4"
  },
  {
    "savol": "(√11 + 3)(√22 - 3√2 + 5√11 - 15)/(√2 + 5) ifodani soddalashtiring.",
    "variantlar": ["√11 - 3", "√11 + 3", "2", "4"],
    "javob": "√11 - 3"
  },
  {
    "savol": "a = 2√3, b = 3√2, c = 4 sonlarini o'sish tartibida yozing.",
    "variantlar": ["a, c, b", "b, c, a", "c, a, b", "a, b, c"],
    "javob": "a, c, b"
  },
  {
    "savol": "a = 3√3, b = 5, c = 2√7 sonlarini o'sish tartibida yozing.",
    "variantlar": ["b, c, a", "c, b, a", "a, b, c", "a, c, b"],
    "javob": "b, c, a"
  },
  {
    "savol": "a = 4√2, b = 2√10, c = 6 sonlarini o'sish tartibida yozing.",
    "variantlar": ["b, a, c", "a, b, c", "c, a, b", "b, c, a"],
    "javob": "b, a, c"
  },
  {
    "savol": "a = 7, b = 4√3, c = 5√2 sonlarini o'sish tartibida yozing.",
    "variantlar": ["b, c, a", "c, b, a", "a, b, c", "a, c, b"],
    "javob": "b, c, a"
  },
  {
    "savol": "a = 8, b = 2√15, c = 3√7 sonlarini o'sish tartibida yozing.",
    "variantlar": ["b, c, a", "c, b, a", "a, b, c", "a, c, b"],
    "javob": "b, c, a"
  },
  {
    "savol": "√((2 - √3)²) ni hisoblang.",
    "variantlar": ["2 - √3", "√3 - 2", "2 + √3", "-(2 + √3)"],
    "javob": "2 - √3"
  },
  {
    "savol": "√((3 - 2√2)²) ni hisoblang.",
    "variantlar": ["3 - 2√2", "2√2 - 3", "3 + 2√2", "-(3 + 2√2)"],
    "javob": "3 - 2√2"
  },
  {
    "savol": "√((4 - 3√2)²) ni hisoblang.",
    "variantlar": ["4 - 3√2", "3√2 - 4", "4 + 3√2", "-(4 + 3√2)"],
    "javob": "3√2 - 4"
  },
  {
    "savol": "√((5√2 - 8)²) ni hisoblang.",
    "variantlar": ["5√2 - 8", "8 - 5√2", "5√2 + 8", "-(5√2 + 8)"],
    "javob": "8 - 5√2"
  },
  {
    "savol": "√((4√3 - 8)²) + 2√3 ni hisoblang.",
    "variantlar": ["8 - 2√3", "2√3 - 8", "8 + 2√3", "2√3"],
    "javob": "8 - 2√3"
  },
  {
    "savol": "√((7√2 - 10)²) + √((4 + √2)²) ni hisoblang.",
    "variantlar": ["14", "4√2", "6", "8"],
    "javob": "14"
  },
  {
    "savol": "√((5√2 - 8)²) + √((2 + 5√2)²) ni hisoblang.",
    "variantlar": ["10", "10√2", "8 + 5√2", "8 - 5√2"],
    "javob": "10"
  },
  {
    "savol": "√((15 - 10√2)²) + √((-2)²) ni hisoblang.",
    "variantlar": ["10√2 - 13", "17 - 10√2", "15 - 10√2 + 2", "15 - 10√2 - 2"],
    "javob": "17 - 10√2"
  },
  {
    "savol": "√((17 + √3)²) - √((√3 - 1)²) ni hisoblang.",
    "variantlar": ["18", "16", "17 + √3 - √3 + 1", "17 + √3 - (√3 - 1)"],
    "javob": "18"
  },
  {
    "savol": "√(4 + 2√3) - √3 ni hisoblang.",
    "variantlar": ["1", "2", "√3", "√3 - 1"],
    "javob": "1"
  },
  {
    "savol": "√(3 - 2√2) - √2 ni hisoblang.",
    "variantlar": ["-1", "1", "√2 - 1", "1 - √2"],
    "javob": "-1"
  },
  {
    "savol": "√(12 + 2√35) - √7 ni hisoblang.",
    "variantlar": ["√5", "√7", "√35", "2√5"],
    "javob": "√5"
  },
  {
    "savol": "√(5 + 2√6) - √(3 + 2√2) ni hisoblang.",
    "variantlar": ["√2", "√3", "1", "0"],
    "javob": "0"
  },
  {
    "savol": "√(9 + 4√5) + √(9 - 4√5) ni hisoblang.",
    "variantlar": ["2√5", "4", "6", "8"],
    "javob": "6"
  },
  {
    "savol": "√(17 + 12√2) + √(17 - 12√2) ni hisoblang.",
    "variantlar": ["6", "8", "10", "12"],
    "javob": "6"
  },
  {
    "savol": "√(19 - 8√3) + √(19 + 8√3) ni hisoblang.",
    "variantlar": ["6", "8", "10", "12"],
    "javob": "8"
  },
  {
    "savol": "√(8 + 7√2) + √(11 - 6√2) ni hisoblang.",
    "variantlar": ["3 + √2", "5", "7", "9"],
    "javob": "5"
  },
  {
    "savol": "√(32 + √(11√3) - √19 + 8√3) ifodani soddalashtiring.",
    "variantlar": ["√32 + √(11√3) - √19 + 8√3", "4√2 + √(11√3) - √19 + 8√3", "√32 + √(11√3) - √19 + 8√3", "O'zgarishsiz qoladi"],
    "javob": "4√2 + √(11√3) - √19 + 8√3"
  },
  {
    "savol": "4/(5 - √5) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(20 + 4√5)/20", "(20 - 4√5)/20", "(4(5 + √5))/20", "(4(5 - √5))/20"],
    "javob": "(4(5 + √5))/20"
  },
  {
    "savol": "3/(√5 - √3) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(3(√5 + √3))/2", "(3(√5 - √3))/2", "(3(√5 + √3))/8", "(3(√5 - √3))/8"],
    "javob": "(3(√5 + √3))/2"
  },
  {
    "savol": "2/√5 kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(2√5)/5", "√5/2", "2/5√5", "2√5"],
    "javob": "(2√5)/5"
  },
  {
    "savol": "32/(8 - 2√7) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(32(8 + 2√7))/36", "(32(8 - 2√7))/36", "(32(8 + 2√7))/64", "(32(8 - 2√7))/64"],
    "javob": "(32(8 + 2√7))/36"
  },
  {
    "savol": "5/(3√2) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(5√2)/6", "(5√2)/3", "5/(3√2)", "(5√2)/9"],
    "javob": "(5√2)/6"
  },
  {
    "savol": "7/(√10 - √3) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(7(√10 + √3))/7", "(7(√10 - √3))/7", "(7(√10 + √3))/13", "(7(√10 - √3))/13"],
    "javob": "(7(√10 + √3))/7"
  },
  {
    "savol": "5/(2√5) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["√5/2", "5√5/2", "5/(2√5)", "(5√5)/10"],
    "javob": "√5/2"
  },
  {
    "savol": "1/(3√2) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["√2/6", "√2/3", "1/(3√2)", "√2/9"],
    "javob": "√2/6"
  },
  {
    "savol": "1/(√3 - 1) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(√3 + 1)/2", "(√3 - 1)/2", "√3 + 1", "√3 - 1"],
    "javob": "(√3 + 1)/2"
  },
  {
    "savol": "1/(2 - √2) kasrni maxrajini irratsionallikdan qutqaring.",
    "variantlar": ["(2 + √2)/2", "(2 - √2)/2", "2 + √2", "2 - √2"],
    "javob": "(2 + √2)/2"
  },
  {
    "savol": "(√(4 - √7))/(√(4 + √7)) + (√(4 + √7))/(√(4 - √7)) ni hisoblang.",
    "variantlar": ["14/3", "7/3", "21/3", "28/3"],
    "javob": "14/3"
  },
  {
    "savol": "(√(5 - 2√6))/(√(5 + 2√6)) + (√(5 + 2√6))/(√(5 - 2√6)) ni hisoblang.",
    "variantlar": ["10", "8", "6", "4"],
    "javob": "10"
  },
  {
    "savol": "(√8 - √15)/(√8 + √15) = (√8 - √15)/(√8 - √15) tenglikni tekshiring.",
    "variantlar": ["To'g'ri", "Noto'g'ri", "Faqat musbat sonlar uchun", "Faqat manfiy sonlar uchun"],
    "javob": "Noto'g'ri"
  },
  {
    "savol": "2/(√3 - 1) + 1/(√3 - 2) ni hisoblang.",
    "variantlar": ["-1", "0", "1", "2"],
    "javob": "-1"
  },
  {
    "savol": "6/(√7 - 2) + 2/(3 - √7) - 18/(√7 - 1) ni hisoblang.",
    "variantlar": ["-2", "0", "2", "4"],
    "javob": "0"
  },
  {
    "savol": "(3/(3 - √3) - 11/(5 - √3) + 1/(2 - √3)) · (2√3 - 1) ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "(3/(3 - √3) + 11/(5 + √3) + 1/(2 - √3)) · (6 - √3) ni hisoblang.",
    "variantlar": ["6", "12", "18", "24"],
    "javob": "12"
  },
  {
    "savol": "(2/(√3 - 1) + 3/(√3 - 2) + 15/(3 - √3)) · (√3 + 5)⁻¹ ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "(15/(√6 + 1) + 4/(√6 - 2) - 12/(3 - √6)) · (√6 + 11) ni hisoblang.",
    "variantlar": ["6", "12", "18", "24"],
    "javob": "12"
  },
  {
    "savol": "(2/(√19 + √17) + 2/(√17 + √15) + √15) · √19 ni hisoblang.",
    "variantlar": ["√19", "√17", "√15", "2"],
    "javob": "2"
  },
  {
    "savol": "(√32 + √72)/√50 ni hisoblang.",
    "variantlar": ["2", "3", "4", "5"],
    "javob": "2"
  },
  {
    "savol": "(√45 + √20)/√125 ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "(√8 + √2 + √18)/√32 ni hisoblang.",
    "variantlar": ["1.5", "2", "2.5", "3"],
    "javob": "2"
  },
  {
    "savol": "(√12 + √27 + √75)/(√108 + √48) ni hisoblang.",
    "variantlar": ["0.5", "0.75", "1", "1.25"],
    "javob": "0.75"
  },
  {
    "savol": "(√20 + √45 + √125)/√180 ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "√3(2√3 + 2√12) ni hisoblang.",
    "variantlar": ["6", "12", "18", "24"],
    "javob": "12"
  },
  {
    "savol": "√2(√8 + 3√2) ni hisoblang.",
    "variantlar": ["4", "6", "8", "10"],
    "javob": "8"
  },
  {
    "savol": "1/√32 + 1/4² ni hisoblang.",
    "variantlar": ["0.125", "0.25", "0.375", "0.5"],
    "javob": "0.375"
  },
  {
    "savol": "√(1/32 + 1/42) ni hisoblang.",
    "variantlar": ["0.125", "0.2", "0.25", "0.3"],
    "javob": "0.2"
  },
  {
    "savol": "√49 · (√4 + √16) ni hisoblang.",
    "variantlar": ["42", "49", "56", "63"],
    "javob": "42"
  },
  {
    "savol": "(√4 + √81) : √121 ni hisoblang.",
    "variantlar": ["1", "2", "3", "4"],
    "javob": "1"
  },
  {
    "savol": "(√169 + √121) : √64 ni hisoblang.",
    "variantlar": ["2", "3", "4", "5"],
    "javob": "3"
  },
  {
    "savol": "√(82 + 15²) ni hisoblang.",
    "variantlar": ["√307", "17", "18", "19"],
    "javob": "17"
  },
  {
    "savol": "√(32 + 52) ni hisoblang.",
    "variantlar": ["√84", "9", "10", "11"],
    "javob": "9"
  },
  {
    "savol": "√25 ni hisoblang.",
    "variantlar": ["5", "±5", "25", "√5"],
    "javob": "5"
  }
],






  theme20: [
  {
    "savol": "x² = 16 tenglamani yeching.",
    "variantlar": ["x = ±4", "x = 4", "x = -4", "x = ±8"],
    "javob": "x = ±4"
  },
  {
    "savol": "x² = 49 tenglamani yeching.",
    "variantlar": ["x = ±7", "x = 7", "x = -7", "x = ±49"],
    "javob": "x = ±7"
  },
  {
    "savol": "9x² = 4 tenglamani yeching.",
    "variantlar": ["x = ±2/3", "x = 2/3", "x = -2/3", "x = ±3/2"],
    "javob": "x = ±2/3"
  },
  {
    "savol": "x² = 7/9 tenglamani yeching.",
    "variantlar": ["x = ±√7/3", "x = √7/3", "x = -√7/3", "x = ±7/3"],
    "javob": "x = ±√7/3"
  },
  {
    "savol": "16x² = 81 tenglamani yeching.",
    "variantlar": ["x = ±9/4", "x = 9/4", "x = -9/4", "x = ±4/9"],
    "javob": "x = ±9/4"
  },
  {
    "savol": "x² - 18 = 31 tenglamani yeching.",
    "variantlar": ["x = ±7", "x = 7", "x = -7", "x = ±49"],
    "javob": "x = ±7"
  },
  {
    "savol": "27 - x² = 31 tenglamani yeching.",
    "variantlar": ["x² = -4, haqiqiy ildiz yo'q", "x = ±2", "x = ±√4", "x = ±2i"],
    "javob": "x² = -4, haqiqiy ildiz yo'q"
  },
  {
    "savol": "49x² - 4 = 0 tenglamani yeching.",
    "variantlar": ["x = ±2/7", "x = 2/7", "x = -2/7", "x = ±7/2"],
    "javob": "x = ±2/7"
  },
  {
    "savol": "75 - 3x² = 0 tenglamani yeching.",
    "variantlar": ["x = ±5", "x = 5", "x = -5", "x = ±25"],
    "javob": "x = ±5"
  },
  {
    "savol": "x² = 25/9 tenglamani yeching.",
    "variantlar": ["x = ±5/3", "x = 5/3", "x = -5/3", "x = ±3/5"],
    "javob": "x = ±5/3"
  },
  {
    "savol": "x² - 6x = 0 tenglamani yeching.",
    "variantlar": ["x = 0, x = 6", "x = 0, x = -6", "x = 6", "x = 0"],
    "javob": "x = 0, x = 6"
  },
  {
    "savol": "4x + 3x² = 0 tenglamani yeching.",
    "variantlar": ["x = 0, x = -4/3", "x = 0, x = 4/3", "x = -4/3", "x = 0"],
    "javob": "x = 0, x = -4/3"
  },
  {
    "savol": "2x² - 9x = 0 tenglamani yeching.",
    "variantlar": ["x = 0, x = 9/2", "x = 0, x = -9/2", "x = 9/2", "x = 0"],
    "javob": "x = 0, x = 9/2"
  },
  {
    "savol": "5x² + x = 0 tenglamani yeching.",
    "variantlar": ["x = 0, x = -1/5", "x = 0, x = 1/5", "x = -1/5", "x = 0"],
    "javob": "x = 0, x = -1/5"
  },
  {
    "savol": "x² - 12x = 0 tenglamani yeching.",
    "variantlar": ["x = 0, x = 12", "x = 0, x = -12", "x = 12", "x = 0"],
    "javob": "x = 0, x = 12"
  },
  {
    "savol": "x² - 6x + 9 = 0 tenglamani yeching.",
    "variantlar": ["x = 3", "x = -3", "x = 3 (ikki karrali)", "x = ±3"],
    "javob": "x = 3"
  },
  {
    "savol": "x² + 5x = (9x + 20)/3 tenglamani yeching.",
    "variantlar": ["x = -5/3, x = 4", "x = 5/3, x = -4", "x = 5/3, x = 4", "x = -5/3, x = -4"],
    "javob": "x = -5/3, x = 4"
  },
  {
    "savol": "x² + x + 1 = (x² - x + 3)/6 tenglamani yeching.",
    "variantlar": ["x = -1, x = 3/5", "x = 1, x = -3/5", "x = -1, x = -3/5", "x = 1, x = 3/5"],
    "javob": "x = -1, x = 3/5"
  },
  {
    "savol": "(x - 4)² + (x - 2)² = 20 tenglamani yeching.",
    "variantlar": ["x = 1, x = 5", "x = -1, x = 5", "x = 1, x = -5", "x = -1, x = -5"],
    "javob": "x = 1, x = 5"
  },
  {
    "savol": "(2x - 1)² + (x - 5)² = 26 tenglamani yeching.",
    "variantlar": ["x = 2, x = 0", "x = -2, x = 0", "x = 2, x = -0", "x = -2, x = -0"],
    "javob": "x = 2, x = 0"
  },
  {
    "savol": "(x - 3)/(x - 2) = (2x + 3)/(x + 2) tenglamani yeching.",
    "variantlar": ["x = 0, x = 5", "x = 0, x = -5", "x = 0", "x = 5"],
    "javob": "x = 0, x = 5"
  },
  {
    "savol": "(x + 7)/(x - 7) = (2x + 5)/(x - 5) tenglamani yeching.",
    "variantlar": ["x = 0, x = 20", "x = 0, x = -20", "x = 0", "x = 20"],
    "javob": "x = 0, x = 20"
  },
  {
    "savol": "(x+6)/(x-3) + (x-9)/(x+3) = 45/(x² - 9) tenglamani yeching.",
    "variantlar": ["x = 6", "x = -6", "x = 6, x = -6", "x = 3, x = -3"],
    "javob": "x = 6"
  },
  {
    "savol": "x² - 4x + 3 = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = 3", "x = -1, x = -3", "x = 1, x = -3", "x = -1, x = 3"],
    "javob": "x = 1, x = 3"
  },
  {
    "savol": "x² + 6x + 8 = 0 tenglamani yeching.",
    "variantlar": ["x = -2, x = -4", "x = 2, x = 4", "x = -2, x = 4", "x = 2, x = -4"],
    "javob": "x = -2, x = -4"
  },
  {
    "savol": "x² - 5x + 4 = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = 4", "x = -1, x = -4", "x = 1, x = -4", "x = -1, x = 4"],
    "javob": "x = 1, x = 4"
  },
  {
    "savol": "x² + 8x + 15 = 0 tenglamani yeching.",
    "variantlar": ["x = -3, x = -5", "x = 3, x = 5", "x = -3, x = 5", "x = 3, x = -5"],
    "javob": "x = -3, x = -5"
  },
  {
    "savol": "2x² + 12x - 14 = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = -7", "x = -1, x = 7", "x = 1, x = 7", "x = -1, x = -7"],
    "javob": "x = 1, x = -7"
  },
  {
    "savol": "x² - x - 15/4 = 0 tenglamani yeching.",
    "variantlar": ["x = 5/2, x = -3/2", "x = -5/2, x = 3/2", "x = 5/2, x = 3/2", "x = -5/2, x = -3/2"],
    "javob": "x = 5/2, x = -3/2"
  },
  {
    "savol": "x² - 12x + 32 = 0 tenglamani yeching.",
    "variantlar": ["x = 4, x = 8", "x = -4, x = -8", "x = 4, x = -8", "x = -4, x = 8"],
    "javob": "x = 4, x = 8"
  },
  {
    "savol": "-x² + 7x - 12 = 0 tenglamani yeching.",
    "variantlar": ["x = 3, x = 4", "x = -3, x = -4", "x = 3, x = -4", "x = -3, x = 4"],
    "javob": "x = 3, x = 4"
  },
  {
    "savol": "5x² + 15x + 10 = 0 tenglamani yeching.",
    "variantlar": ["x = -1, x = -2", "x = 1, x = 2", "x = -1, x = 2", "x = 1, x = -2"],
    "javob": "x = -1, x = -2"
  },
  {
    "savol": "2x² + 12x + 18 = 0 tenglamani yeching.",
    "variantlar": ["x = -3", "x = 3", "x = -3 (ikki karrali)", "x = 3 (ikki karrali)"],
    "javob": "x = -3"
  },
  {
    "savol": "x² + 3,5x - 4,5 = 0 tenglamani yeching.",
    "variantlar": ["x = 1, x = -4,5", "x = -1, x = 4,5", "x = 1, x = 4,5", "x = -1, x = -4,5"],
    "javob": "x = 1, x = -4,5"
  },
  {
    "savol": "(x-6)/(x²+x-2) + x/(x-1) = 1 tenglamani yeching.",
    "variantlar": ["x = 4", "x = -4", "x = 4, x = -4", "x = 2, x = -1"],
    "javob": "x = 4"
  },
  {
    "savol": "3/(x+4) - 1/(x+3) = (x+9)/(x²+7x+12) tenglamani yeching.",
    "variantlar": ["x = -6", "x = 6", "x = -6, x = 6", "x = -4, x = -3"],
    "javob": "x = -6"
  },
  {
    "savol": "(4x+1)/(x+3) + (5x-3)/(x-1) = (8x²)/(x²+2x-3) tenglamani yeching.",
    "variantlar": ["x = 2", "x = -2", "x = 2, x = -2", "x = 3, x = -1"],
    "javob": "x = 2"
  },
  {
    "savol": "x/(x+5) - 2/(x-9) = (-11x+15)/(x²-4x-45) tenglamani yeching.",
    "variantlar": ["x = -3", "x = 3", "x = -3, x = 3", "x = -5, x = 9"],
    "javob": "x = -3"
  },
  {
    "savol": "(2x)/(x+1) - 3/(x+5) = (-8x²)/(x²+6x+5) tenglamani yeching.",
    "variantlar": ["x = -2", "x = 2", "x = -2, x = 2", "x = -1, x = -5"],
    "javob": "x = -2"
  }
],





theme21: [
  {
    "savol": "-x² + 12x - 11 = 0 tenglamani keltirilgan kvadrat tenglama shaklida tasvirlang.",
    "variantlar": ["x² - 12x + 11 = 0", "x² + 12x - 11 = 0", "-x² + 12x - 11 = 0", "x² - 12x - 11 = 0"],
    "javob": "x² - 12x + 11 = 0"
  },
  {
    "savol": "3x² - 5x + 1 = 0 tenglamani keltirilgan kvadrat tenglama shaklida tasvirlang.",
    "variantlar": ["x² - (5/3)x + (1/3) = 0", "x² - 5x + 1 = 0", "3x² - 5x + 1 = 0", "x² - (5/3)x + 1 = 0"],
    "javob": "x² - (5/3)x + (1/3) = 0"
  },
  {
    "savol": "-2x² - 10x + 8 = 0 tenglamani keltirilgan kvadrat tenglama shaklida tasvirlang.",
    "variantlar": ["x² + 5x - 4 = 0", "x² - 5x + 4 = 0", "-x² - 5x + 4 = 0", "x² + 5x + 4 = 0"],
    "javob": "x² + 5x - 4 = 0"
  },
  {
    "savol": "5x² - 10x + 12 = 0 tenglamani keltirilgan kvadrat tenglama shaklida tasvirlang.",
    "variantlar": ["x² - 2x + 12/5 = 0", "x² - 2x + 12 = 0", "5x² - 10x + 12 = 0", "x² - 10x + 12 = 0"],
    "javob": "x² - 2x + 12/5 = 0"
  },
  {
    "savol": "ax² + bx + c = 0 tenglamani keltirilgan kvadrat tenglama shaklida tasvirlang.",
    "variantlar": ["x² + (b/a)x + (c/a) = 0", "x² + bx + c = 0", "ax² + bx + c = 0", "x² + (a/b)x + (c/b) = 0"],
    "javob": "x² + (b/a)x + (c/a) = 0"
  },
  {
    "savol": "x² + 4x - 3 = 0 tenglamaning ildizlar yig'indisi va ko'paytmasini toping.",
    "variantlar": ["x₁+x₂ = -4, x₁·x₂ = -3", "x₁+x₂ = 4, x₁·x₂ = -3", "x₁+x₂ = -4, x₁·x₂ = 3", "x₁+x₂ = 4, x₁·x₂ = 3"],
    "javob": "x₁+x₂ = -4, x₁·x₂ = -3"
  },
  {
    "savol": "2x² - 7x + 4 = 0 tenglamaning ildizlar yig'indisi va ko'paytmasini toping.",
    "variantlar": ["x₁+x₂ = 7/2, x₁·x₂ = 2", "x₁+x₂ = -7/2, x₁·x₂ = 2", "x₁+x₂ = 7/2, x₁·x₂ = 4", "x₁+x₂ = -7/2, x₁·x₂ = 4"],
    "javob": "x₁+x₂ = 7/2, x₁·x₂ = 2"
  },
  {
    "savol": "x² - 5x + 4 = 0 tenglamaning ildizlar yig'indisi va ko'paytmasini toping.",
    "variantlar": ["x₁+x₂ = 5, x₁·x₂ = 4", "x₁+x₂ = -5, x₁·x₂ = 4", "x₁+x₂ = 5, x₁·x₂ = -4", "x₁+x₂ = -5, x₁·x₂ = -4"],
    "javob": "x₁+x₂ = 5, x₁·x₂ = 4"
  },
  {
    "savol": "x² + 11x + 24 = 0 tenglamaning ildizlar yig'indisi va ko'paytmasini toping.",
    "variantlar": ["x₁+x₂ = -11, x₁·x₂ = 24", "x₁+x₂ = 11, x₁·x₂ = 24", "x₁+x₂ = -11, x₁·x₂ = -24", "x₁+x₂ = 11, x₁·x₂ = -24"],
    "javob": "x₁+x₂ = -11, x₁·x₂ = 24"
  },
  {
    "savol": "x² - 3,5x + 1,5 = 0 tenglamaning ildizlar yig'indisi va ko'paytmasini toping.",
    "variantlar": ["x₁+x₂ = 3,5, x₁·x₂ = 1,5", "x₁+x₂ = -3,5, x₁·x₂ = 1,5", "x₁+x₂ = 3,5, x₁·x₂ = -1,5", "x₁+x₂ = -3,5, x₁·x₂ = -1,5"],
    "javob": "x₁+x₂ = 3,5, x₁·x₂ = 1,5"
  },
  {
    "savol": "x² - 7x + 6 = 0 tenglamani tanlash usuli bilan yeching.",
    "variantlar": ["x = 1, x = 6", "x = -1, x = -6", "x = 1, x = -6", "x = -1, x = 6"],
    "javob": "x = 1, x = 6"
  },
  {
    "savol": "x² - 12x + 35 = 0 tenglamani tanlash usuli bilan yeching.",
    "variantlar": ["x = 5, x = 7", "x = -5, x = -7", "x = 5, x = -7", "x = -5, x = 7"],
    "javob": "x = 5, x = 7"
  },
  {
    "savol": "x² + 6x + 8 = 0 tenglamani tanlash usuli bilan yeching.",
    "variantlar": ["x = -2, x = -4", "x = 2, x = 4", "x = -2, x = 4", "x = 2, x = -4"],
    "javob": "x = -2, x = -4"
  },
  {
    "savol": "x² - x - 20 = 0 tenglamani tanlash usuli bilan yeching.",
    "variantlar": ["x = 5, x = -4", "x = -5, x = 4", "x = 5, x = 4", "x = -5, x = -4"],
    "javob": "x = 5, x = -4"
  },
  {
    "savol": "x² - 2x - 35 = 0 tenglamani tanlash usuli bilan yeching.",
    "variantlar": ["x = 7, x = -5", "x = -7, x = 5", "x = 7, x = 5", "x = -7, x = -5"],
    "javob": "x = 7, x = -5"
  },
  {
    "savol": "x² - 5x - 50 = 0 tenglamani tanlash usuli bilan yeching.",
    "variantlar": ["x = 10, x = -5", "x = -10, x = 5", "x = 10, x = 5", "x = -10, x = -5"],
    "javob": "x = 10, x = -5"
  },
  {
    "savol": "x² - 10x + 16 = 0 tenglamani tanlash usuli bilan yeching.",
    "variantlar": ["x = 2, x = 8", "x = -2, x = -8", "x = 2, x = -8", "x = -2, x = 8"],
    "javob": "x = 2, x = 8"
  },
  {
    "savol": "x² - 4x + 2 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁²x₂ + x₂²x₁ ning qiymatini toping.",
    "variantlar": [4, 6, 8, 10],
    "javob": 8
  },
  {
    "savol": "x² - 8x + 10 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁² + x₂² ning qiymatini toping.",
    "variantlar": [44, 54, 64, 74],
    "javob": 44
  },
  {
    "savol": "x² + 5x - 1 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁²x₂ + x₂²x₁ ning qiymatini toping.",
    "variantlar": [5, -5, 1, -1],
    "javob": 5
  },
  {
    "savol": "2x² - 5x + 4 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁²x₂ + x₂²x₁ ning qiymatini toping.",
    "variantlar": [5, 4, 3, 2],
    "javob": 5
  },
  {
    "savol": "5x² + 8x - 25 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁²x₂ + x₂²x₁ ning qiymatini toping.",
    "variantlar": [8, -8, 5, -5],
    "javob": -8
  },
  {
    "savol": "2x² + 3x - 4 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁² + x₂² ning qiymatini toping.",
    "variantlar": ["41/4", "25/4", "17/4", "9/4"],
    "javob": "25/4"
  },
  {
    "savol": "x² + 3x + 1 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁/x₂ + x₂/x₁ ning qiymatini toping.",
    "variantlar": [7, 5, 3, 1],
    "javob": 7
  },
  {
    "savol": "x² - 2x - 1 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁² + x₂² ning qiymatini toping.",
    "variantlar": [2, 4, 6, 8],
    "javob": 6
  },
  {
    "savol": "x² - 3x + 1 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁² + x₂² ning qiymatini toping.",
    "variantlar": [5, 6, 7, 8],
    "javob": 7
  },
  {
    "savol": "x² + 5x - 4 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁³ + x₂³ ning qiymatini toping.",
    "variantlar": [-145, -125, -105, -85],
    "javob": -125
  },
  {
    "savol": "x² - 3x - 3 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁³ + x₂³ ning qiymatini toping.",
    "variantlar": [36, 48, 54, 72],
    "javob": 54
  },
  {
    "savol": "2x² + 3x - 6 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁³ + x₂³ ning qiymatini toping.",
    "variantlar": ["-135/8", "-117/8", "-99/8", "-81/8"],
    "javob": "-99/8"
  },
  {
    "savol": "x² + 2x - 1 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁(x₂ + 1) + x₂(x₁ + 1) ning qiymatini toping.",
    "variantlar": [1, 0, -1, -2],
    "javob": 0
  },
  {
    "savol": "x² - 3x + 1 = 0 tenglama ildizlari x₁ va x₂ bo'lsa, x₁³ + x₂³ ning qiymatini toping.",
    "variantlar": [12, 16, 18, 24],
    "javob": 18
  },
  {
    "savol": "Ildizlari 7 va 2 ga teng bo'lgan keltirilgan kvadrat tenglama tuzing.",
    "variantlar": ["x² - 9x + 14 = 0", "x² + 9x + 14 = 0", "x² - 9x - 14 = 0", "x² + 9x - 14 = 0"],
    "javob": "x² - 9x + 14 = 0"
  },
  {
    "savol": "Ildizlaridan biri 1 + √2 ga teng bo'lgan, ratsional koeffitsiyentli keltirilgan kvadrat tenglama tuzing.",
    "variantlar": ["x² - 2x - 1 = 0", "x² + 2x - 1 = 0", "x² - 2x + 1 = 0", "x² + 2x + 1 = 0"],
    "javob": "x² - 2x - 1 = 0"
  },
  {
    "savol": "Ildizlaridan biri 2 - √3 ga teng bo'lgan, ratsional koeffitsiyentli keltirilgan kvadrat tenglama tuzing.",
    "variantlar": ["x² - 4x + 1 = 0", "x² + 4x + 1 = 0", "x² - 4x - 1 = 0", "x² + 4x - 1 = 0"],
    "javob": "x² - 4x + 1 = 0"
  },
  {
    "savol": "Ildizlaridan biri -1 + √2 ga teng bo'lgan, ratsional koeffitsiyentli keltirilgan kvadrat tenglama tuzing.",
    "variantlar": ["x² + 2x - 1 = 0", "x² - 2x - 1 = 0", "x² + 2x + 1 = 0", "x² - 2x + 1 = 0"],
    "javob": "x² + 2x - 1 = 0"
  },
  {
    "savol": "Ildizlaridan biri -2 + 3√2 ga teng bo'lgan, ratsional koeffitsiyentli keltirilgan kvadrat tenglama tuzing.",
    "variantlar": ["x² + 4x - 14 = 0", "x² - 4x - 14 = 0", "x² + 4x + 14 = 0", "x² - 4x + 14 = 0"],
    "javob": "x² + 4x - 14 = 0"
  },
  {
    "savol": "Ildizlari x² + 6x + 5 = 0 tenglama ildizlariga teskari sonlar bo'lgan kvadrat tenglama tuzing.",
    "variantlar": ["5x² + 6x + 1 = 0", "5x² - 6x + 1 = 0", "x² + 6x + 5 = 0", "x² - 6x + 5 = 0"],
    "javob": "5x² + 6x + 1 = 0"
  },
  {
    "savol": "Ildizlari x² + 12x + 10 = 0 tenglama ildizlariga teskari sonlar bo'lgan kvadrat tenglama tuzing.",
    "variantlar": ["10x² + 12x + 1 = 0", "10x² - 12x + 1 = 0", "x² + 12x + 10 = 0", "x² - 12x + 10 = 0"],
    "javob": "10x² + 12x + 1 = 0"
  },
  {
    "savol": "Ildizlari x² - 15x + 50 = 0 tenglama ildizlariga qarama-qarshi sonlar bo'lgan kvadrat tenglama tuzing.",
    "variantlar": ["x² + 15x + 50 = 0", "x² - 15x + 50 = 0", "x² + 15x - 50 = 0", "x² - 15x - 50 = 0"],
    "javob": "x² + 15x + 50 = 0"
  },
  {
    "savol": "Ildizlari x² + 9x + 20 = 0 tenglama ildizlariga qarama-qarshi sonlar bo'lgan kvadrat tenglama tuzing.",
    "variantlar": ["x² - 9x + 20 = 0", "x² + 9x + 20 = 0", "x² - 9x - 20 = 0", "x² + 9x - 20 = 0"],
    "javob": "x² - 9x + 20 = 0"
  },
  {
    "savol": "Ildizlari 5x² - 7x - 6 = 0 tenglama ildizlariga qarama-qarshi sonlar bo'lgan kvadrat tenglama tuzing.",
    "variantlar": ["5x² + 7x - 6 = 0", "5x² - 7x + 6 = 0", "5x² + 7x + 6 = 0", "5x² - 7x - 6 = 0"],
    "javob": "5x² + 7x - 6 = 0"
  }
] 


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