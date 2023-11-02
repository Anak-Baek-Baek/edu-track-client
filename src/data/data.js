const Course = [
  {
    name: "Belajar React",
    category: "development",
    lecturer: "Sandhi",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50000,
    section: [
      {
        title: "Pengenalan React",
        description: "Mengenalkan apa itu React JS",
        videoUrl: "https://youtu.be/kcnwI_5nKyA?si=4cy__3_VzgLxiGBw",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Instalasi React",
        description: "Cara instalasi React yang benar",
        videoUrl: "https://youtu.be/RVH_5L5Lsp0?si=3nW5JMtPYesChYya",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Belajar HTML",
    category: "development",
    lecturer: "Gibrant",
    totalSections: 3,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 45000,
    section: [
      {
        title: "Pendahuluan",
        description: "Mengenalkan apa itu HTML",
        videoUrl: "https://youtu.be/NBZ9Ro6UKV8?si=pUE1YhKQj6iFf48D",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Dasar-dasar HTML",
        description: "Membuat website sederhana",
        videoUrl: "https://youtu.be/1NicaVOCXHA?si=c16ahZ2akKPJ-ErG",
        position: 2,
        isPublished: true,
        isFree: false,
      },
      {
        title: "Code Editor",
        description: "Membuat website sederhana",
        videoUrl: "https://youtu.be/3sLSi9L5nWE?si=uKDbLN7Bb-MMTCeF",
        position: 3,
        isPublished: false,
        isFree: false,
      },
    ],
  },
  {
    name: "Belajar CSS3",
    category: "development",
    lecturer: "Pogh",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1610986603166-f78428624e76?auto=format&fit=crop&q=80&w=2058&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 40000,
    section: [
      {
        title: "Pengenalan CSS3",
        description: "Mengenalkan apa itu CSS3",
        videoUrl: "https://youtu.be/J0a6YUUAsd4?si=Ct0xWeovOC3lTQoy",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Border Radius",
        description: "Penjelasan Properti CSS3 Border Radius ",
        videoUrl: "https://youtu.be/3xbW5YHln78?si=-YSMyMt6pn12M5C2",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Belajar Webpack",
    category: "development",
    lecturer: "Yumiko",
    totalSections: 2,
    bacgkroundUrl: "",
    price: 60000,
    section: [
      {
        title: "Pengenalan Webpack",
        description: "Memahami apa itu Module System pada Javascript.",
        videoUrl: "https://youtu.be/YwClq14cvX0?si=KPD9wfW8ZZZTMHA4",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Belajar Webpack",
        description: "Membahas mengenai Webpack dan juga Module Bundlers.",
        videoUrl: "https://youtu.be/zwzzn8-fCJ8?si=QiS0nBTw-Dlshiwv",
        position: 2,
        isPublished: false,
        isFree: false,
      },
    ],
  },
  {
    name: "Belajar HTML5",
    category: "development",
    lecturer: "Huro",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50000,
    section: [
      {
        title: "Apa itu HTML5",
        description: "Mari kita mulai belajar mengenai HTML5",
        videoUrl: "https://youtu.be/Q2VqCG13ejA?si=nFwCjnkYa88hGk4i",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Semantic HTML5?",
        description: "Penjelasan mengenai Semantic HTML5",
        videoUrl: "https://youtu.be/o3m15BWi2HM?si=UW9vNEXh-KREMDSe",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Belajar BOOTSTRAP 5",
    category: "development",
    lecturer: "Nipse",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 70000,
    section: [
      {
        title: "Membuat Website Portfolio dengan BOOTSTRAP 5",
        description: "Tutorial membuat website dengan BOOTSTRAP 5",
        videoUrl: "https://youtu.be/LkR-9Z1sle8?si=klpBEdphvNrK2Na3",
        position: 1,
        isPublished: true,
        isFree: false,
      },
      {
        title: "Cara Mengupload Website & Hosting",
        description:
          "Mengupload Website Ke Internet Menggunakan GitHub Pages & Web Hosting",
        videoUrl: "https://youtu.be/65Jv9Y13eVo?si=50yu5CwxTlInhN5E",
        position: 2,
        isPublished: true,
        isFree: false,
      },
    ],
  },
  {
    name: "Belajar Tailwind CSS",
    category: "development",
    lecturer: "Qeps",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 80000,
    section: [
      {
        title: "Apa itu Tailwind CSS?",
        description: "Mengenalkan apa itu React JS",
        videoUrl: "https://youtu.be/z3slaXqmkT0?si=3oT3oa2sYd0lUu0h",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Kenapa Tailwind CSS?",
        description: "Cari tau alasan kenapa dibuatnya framework TailwindCSS",
        videoUrl: "https://youtu.be/ELCr9MyRTH8?si=pf01zpWdvUagmgvn",
        position: 2,
        isPublished: false,
        isFree: false,
      },
    ],
  },
  {
    name: "Belajar Laravel 8",
    category: "development",
    lecturer: "Naele",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1607970669494-309137683be5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 65000,
    section: [
      {
        title: "Pengenalan Laravel 8",
        description:
          "Kali ini kita akan memulai seri baru untuk belajar Laravel 8.",
        videoUrl: "https://youtu.be/HqAMb6kqlLs?si=iyTxWpM2qRJfCECa",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Instalasi Laravel 8",
        description:
          "Menginstall laravel 8 pada sistem operasi MacOS dan Windows",
        videoUrl: "https://youtu.be/pZqk57Xvujssi=CLkLS1iQumDCm8XI",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Belajar JavaScript & DOM",
    category: "development",
    lecturer: "Hyunda",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1592609931095-54a2168ae893?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50000,
    section: [
      {
        title: "Pendahuluan",
        description:
          "Di seri ini kita akan mempelajari mengenai DOM atau Document Object Model pada HTML dan bagaiman cara bekerja dengan DOM menggunakan Javascript",
        videoUrl: "https://youtu.be/aT60R1cySLMsi=oFj3tAAQX0a2Du-x",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "DOM Tree",
        description:
          "Di video kali ini kita akan membahas lebih detil mengenai konsep DOM Tree.. tipe2 apa saja yang ada pada sebuah node, perbedaan antara nodeList dan HTMLCollection serta konsep Hirarki pada DOM. ",
        videoUrl: "https://youtu.be/zY5RlT5q5EMsi=qmVGVxRc1GddryeF",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Belajar Javascript",
    category: "development",
    lecturer: "Hyrt",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 55000,
    section: [
      {
        title: "Dasar Pemrograman dengan Javascript",
        description:
          "Di seri ini kita akan mempelajari mengenai konsep dasar pemrograman, istilah2 yang ada dalam dunia pemrograman, cara menulis dan mengeksekusi program, dll.",
        videoUrl: "https://youtu.be/RUTV_5m4VeIsi=n1Lp28eC8aoQwhdQ",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Apa itu Pemrograman?",
        description:
          "Sebelum mulai ngoding, ada baiknya kita tau dulu apa itu pemrograman dan program itu sendiri.",
        videoUrl: "https://youtu.be/Ncrlg9kTC6Usi=8dgLZKC6riLawpjr",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Belajar membuat aplikasi menggunakan PHP",
    category: "development",
    lecturer: "Jusi",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.unsplash.com/photo-1599507593362-50fa53ed1b40?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 47000,
    section: [
      {
        title: "Membuat Aplikasi MVC dengan PHP | Pendahuluan",
        description:
          "MVC adalah sebuah konsep dalam pembuatan perangkat lunak berorientasi object. Konsep MVC ini sangat penting untuk kita pelajari agar kita dapat membuat aplikasi yang baik, terutama ketika nantinya kita akan membuat aplikasi menggunakan Web Application Framework seperti CodeIgniter, Laravel atau yang lainnya",
        videoUrl: "https://youtu.be/tBKOb8Ib5nI?si=RsKTNNV8jw5qGJlP",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Membuat Aplikasi MVC dengan PHP | Persiapan",
        description:
          "Di video kali ini kita akan melakukan persiapan pembuatan folder dan file2 yang dibutuhkan untuk membuat aplikasi MVC kita",
        videoUrl: "https://youtu.be/t3A4ZtOONRs?si=2zXpBRu1as-3n3IO",
        position: 2,
        isPublished: false,
        isFree: true,
      },
    ],
  },
  {
    name: "Belajar HTML Dari Nol Sampai Mahir",
    category: "development",
    lecturer: "Elon",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 26000,
    section: [
      {
        title: "Pendahuluan HTML",
        description:
          "Hypertext Markup Language atau HTML adalah bahasa markup standar yang digunakan untuk membuat halaman website. Jadi, HTML dapat dianalogikan sebagai pondasi awal dalam menyusun kerangka halaman web secara terstruktur dan langkah awal sebelum membuat website adalah belajar HTML. di Playlist Belajar HTML ini kita akan bahas tentang Tag yang ada pada HTML beserta fungsinya.",
        videoUrl: "https://youtu.be/0oA1Z6UKM5M?si=o37Y_52OLpI2LfJ7",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Membuat Paragraf menggunakan HTML",
        description:
          "Tag P pada HTML digunakan untuk menandai  elemen sebagai Paragraf",
        videoUrl: "https://youtu.be/qwKm_7GmgBU?si=sBBdyChEuNZ2pAWq",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "CSS Dasar",
    category: "development",
    lecturer: "Rulfi",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 30000,
    section: [
      {
        title: "Pendahuluan CSS",
        description:
          "di video pertama ini kita akan belajar mengenai pendahuluan CSS, apa itu CSS, definisinya dan manfaatnya apa.",
        videoUrl: "https://youtu.be/CleFk3BZB3g?si=-vpAGloORac_Lr-k",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Anatomi CSS",
        description:
          "Sama seperti HTML, CSS juga memiliki anatomi / struktur dari tiap-tiap deklarasinya. Anatomi tersebut terdiri dari Selector, Property, Value",
        videoUrl: "https://youtu.be/8lXDi2Mxp9c?si=nePgZAJdPD5NXoB5",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Belajar PHP untuk PEMULA",
    category: "development",
    lecturer: "Jack",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 43000,
    section: [
      {
        title: "Intro belejar PHP untuk Pemula",
        description:
          "Seri baru di Channel WebProgrammingUNPAS!! setelah banyak banget temen2 yang minta dibuatkan seri ini, maka kali ini kita mulai pembelajaran untuk PHP dasar khusus untuk pemula.",
        videoUrl: "https://youtu.be/l1W2OwV5rgY?si=-WbKVGX2exCjs8j-",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Sejarah dan Karakteristik PHP",
        description:
          "Sebelum masuk belajar mengenai sintaks PHP, yuk kita ketahui dulu sejarahnya kenapa sampai ada bahasa PHP dan perkembangannya sampai saat ini.",
        videoUrl: "https://youtu.be/q3NVC5JxgVI?si=dTLuTujfs7w6ZZpo",
        position: 2,
        isPublished: true,
        isFree: false,
      },
    ],
  },
  {
    name: "Belajar Python",
    category: "development",
    lecturer: "Poo",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 52000,
    section: [
      {
        title: "Apa itu Python",
        description: "Mengenalkan apa itu Python",
        videoUrl: "https://youtu.be/iA8lLwmtKQM?si=4v65gk4XddSs3oB7",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Instalasi Python",
        description: "Cara instalasi Python",
        videoUrl: "https://youtu.be/xETkm9H6aaY?si=oPPQBJsHAXY4h9fx",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Belajar Javascript untuk Pemula",
    category: "development",
    lecturer: "Raymond",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 67000,
    section: [
      {
        title: "Perkenalan Dan Persiapan",
        description:
          "Belajar javascript pemula dimana pembahasannya dimulai dari belajar javascript dari nol sampai belajar javascript lanjutan atau biasa kita kenal dengan belajar javascript dom.",
        videoUrl: "https://youtu.be/bi0pkZmB5J4?si=-B8-zFYCd8mPHC9c",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "Debugging Tools Menggunakan Console",
        description:
          "Belajar javascript pemula dimana pembahasannya dimulai dari belajar javascript dari nol sampai belajar javascript lanjutan atau biasa kita kenal dengan belajar javascript dom.",
        videoUrl: "https://youtu.be/BheHgHeU1U0?si=KUn8CBB7w77SVfyj",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Photoshop Tutorial",
    category: "design",
    lecturer: "Pexer",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/826114/pexels-photo-826114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 66000,
    section: [
      {
        title: "Photo Manipulation In photoshop",
        description:
          "Design is a craft where professionals create visual content to communicate messages.",
        videoUrl: "https://youtu.be/4Cl9kw9K-kk?si=kX8avJVJQuYmxLBL",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "RF Logo Design Illustrator",
        description:
          "By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience",
        videoUrl: "https://youtu.be/xqQztpskD_Q?si=1SAOi0_ZB-4GIoti",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Adobe Illustrator Tutorial",
    category: "design",
    lecturer: "Jilk",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 87000,
    section: [
      {
        title: "New Tips Adobe Illustrator",
        description:
          "Welcome to my channel Graphics Creation. On this channel I create 2D graphics related tutorials like Vector Art, Logo Design, Banner/Poster Design, UI/UX Designs and much more.",
        videoUrl: "https://youtu.be/wJOvHoI-xvQ?si=6y29yRI4SPfaIqI9",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "How to Create Simple Mandala Design in Illustrator",
        description:
          "Are you interested in Graphic Designing, UI/UX Designing, Editing, Motion Graphics and much and really eager to learn all about creative art then you are on the right place.",
        videoUrl: "https://youtu.be/jJpT_GXym50?si=Hf0GPCyfv5suGVUo",
        position: 2,
        isPublished: true,
        isFree: false,
      },
    ],
  },
  {
    name: "Strategi Bisnis",
    category: "marketing",
    lecturer: "Raymond Chin",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 73000,
    section: [
      {
        title: "Strategi Bisnis Pemula ke 100 JUTA/Bulan di 2023",
        description:
          "So, kira2 itu (sneakpeek) dari The Sevenpreneur Business Blueprint Program (Part 1). Tujuh hal yang bakal kalian pelajarin untuk bangun bisnis dari nol sampe omzet 100 juta per bulan.",
        videoUrl: "https://youtu.be/J0zyxsDd1bA?si=RGIKXHNm7yshtuJz",
        position: 1,
        isPublished: true,
        isFree: false,
      },
      {
        title: "Trik Marketing",
        description:
          "Gw yakin banyak pebisnis yang ga sadar kalo mereka udah ngelewatin beberapa step dari marketing funnel. Tapi di video ini gw lebih jelasin hal practical apa yang bisa dilakuin biar sales kalian lebih maksimal lagi. Salah satu cara yang kalian bisa lakuin itu adalah dengan improve customer service di bisnis kalian, dan kebetulan gw lagi collab sama Meta, kalian bisa klik link ini kalo tertarik buat coba layanan Whatsapp Business",
        videoUrl: "https://youtu.be/icg9b6itW6I?si=RBDxZJdADbVhefS1",
        position: 2,
        isPublished: true,
        isFree: false,
      },
    ],
  },
  {
    name: "Belajar Digital Marketing",
    category: "marketing",
    lecturer: "Agusleo Halim",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 60000,
    section: [
      {
        title:
          "Belajar Digital Marketing dari 0 | Bukan Soal Jualan, tapi Mahamin Orang!",
        description:
          "Belajar Digital Marketing dari 0 | Bukan Soal Jualan, tapi Mahamin Orang!",
        videoUrl: "https://youtu.be/aQbZdee5PXI?si=Yv574moCLf8qrPdu",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title:
          "Belajar Digital Marketing dari 0 | Banyak Ngiklan tapi Malah Rugi? Tonton Video Ini",
        description:
          "Kata siapa masarin produk itu gampang? Salah! Aslinya, susah-susah gampang. Bisa aja, lu udah pasang iklan di sana-sini, ngeluarin duit buat spot yang paling keliatan sama calon pembeli, tapi bisnis lu… tetep sepi. Bukan cuma itu. Mungkin lu juga udah punya tim andalan buat bikin iklan, tapi entah kenapa rasanya kayak gak ada yang tertarik.",
        videoUrl: "https://youtu.be/tWgKVC80_zs?si=ifEm-f8wcR-RkdJ0",
        position: 2,
        isPublished: true,
        isFree: false,
      },
    ],
  },
  {
    name: "Simple Self Improvement",
    category: "self development",
    lecturer: "Michael",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/6648560/pexels-photo-6648560.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    price: 40000,
    section: [
      {
        title: "8 Simple Self Improvement Principles",
        description:
          "When it comes to self improvement, what principles have you found to be the most influential to your growth? Check out Practical Growth Academy (Free $20 Giftcard)",
        videoUrl: "https://youtu.be/0foQiAJ3uHg?si=YTp51qStWCApm6WL",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "How To Master Self-Control",
        description:
          "Master the art of self-discipline and moderation in a world filled with instant gratification and distractions.",
        videoUrl: "https://youtu.be/MnSj-y01KDg?si=uuecXAxppzRvGpjr",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Satu Insight",
    category: "self development",
    lecturer: "Lionel",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/3576284/pexels-photo-3576284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 50000,
    section: [
      {
        title: "SOSMED TOXIC TAPI CANDU! (Pengaruh Media Sosial)",
        description:
          "Seberapa besar sih pengaruh socmed di hidup kita? Apakah socmed sekarang cenderung lebih toxic dari sebelumnya? Nah, di video kali ini Evan bakal ngebahas serba-serbi socmed masa kini dan gimana cara mengantisipasi efek negatifnya. So, tonton videonya sampai akhir, ya!",
        videoUrl: "https://youtu.be/4zaxye5uqug?si=6cqjSbO1WIBNHeyx",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "CANCEL CULTURE: Alasan Sosmed Jadi TOXIC ",
        description:
          "Sebenernya Cancel Culture itu apaan sih? Seberapa besar efeknya? Nah, di video kali ini Evan bakal ngebahas serba-serbi fenomena Cancel Culture. So, tonton videonya sampai akhir, ya!",
        videoUrl: "https://youtu.be/HUXtcE-NQDQ?si=7ydmIt2D-JPvMVZw",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Starting your Own Business",
    category: "business",
    lecturer: "Guspa",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 67000,
    section: [
      {
        title: "10 Tips for Starting your Own Business [ Must Watch ]",
        description:
          "Do you want to start your own business? Then, watch 10 Business tips for starting your own business. Every Young Entrepreneurs must need to aware with these 10 business.",
        videoUrl: "https://youtu.be/wxyGeUkPYFM?si=gjnd9pJcHqJ9Ij3G",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "How to Build Financial Projections for Your Business",
        description:
          "Build financial projections for startup business.Forecast your business future income & expenses.",
        videoUrl: "https://youtu.be/Oqw1Rj0MVJo?si=Vl2pf_tVoUN6L0TY",
        position: 2,
        isPublished: false,
        isFree: flase,
      },
    ],
  },
  {
    name: "Grow Your Business",
    category: "business",
    lecturer: "Brian",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/926390/pexels-photo-926390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 80000,
    section: [
      {
        title: "7 Strategies to Grow Your Business | Brian Tracy",
        description:
          "One of the best strategies to growing a business is to have a business plan, which is why I've included a FREE one with this video. Click the link above to get access! ",
        videoUrl: "https://youtu.be/dJQn4DqzMVQ?si=d8XC4S5T8UFVWhNC",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "8 Undeniable Tips To Keep Customers For Life | Brian Tracy",
        description:
          "Customer loyalty is KEY. Here are some tips to help you keep customers for life, since repeat customers are the most valuable of all.",
        videoUrl: "https://youtu.be/lJUzh7INCZg?si=TPFNY4RJpb7tWe8U",
        position: 2,
        isPublished: false,
        isFree: true,
      },
    ],
  },
  {
    name: "Music Production",
    category: "music",
    lecturer: "Nathan",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 82000,
    section: [
      {
        title: "30 Music Production Tips in Under 16 Minutes",
        description: "i love making music",
        videoUrl: "https://youtu.be/VpiTlS0TYxI?si=4peQU-ZtPQ7E8tlt",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "5 Tricks for HUGE Bass",
        description: "What do you use to make music?",
        videoUrl: "https://youtu.be/MSFcVNTs-G4?si=RK4AOXwAfGvZUDvz",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Growth your next beat",
    category: "music",
    lecturer: "Servida",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=300",
    price: 87000,
    section: [
      {
        title:
          "20 Music Production Tips/Tricks You NEED To Try In Your Next Beat!",
        description:
          "ALRIGHTY! Here's 20 tips that you need to try out in your next beat. These are random tips that cover a bunch of aspects of music production like music theory, mixing, creative stuff, I am showing you the tips in the new FL Studio 20.8 but it can easily be applied to other DAWS like Ableton and Logic! Thanks to everyone who contributed to the video, I personally learned a lot of cool tricks. Let me know if you wanna see another video like this!",
        videoUrl: "https://youtu.be/WB5j2hg7wsE?si=u86dt2vz2cjwXwjz",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "I Made A Song In 10 Minutes, 1 Hour, 100 Hours!",
        description: "Hallo.. Do you Remember me?",
        videoUrl: "https://youtu.be/hZtDHcXb0Pw?si=8IZAn0QN4J2W5iyU",
        position: 2,
        isPublished: true,
        isFree: false,
      },
    ],
  },
  {
    name: "Accounting Basics",
    category: "accounting",
    lecturer: "Stuff",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 87000,
    section: [
      {
        title: "ACCOUNTING BASICS: a Guide to (Almost) Everything",
        description:
          "Would you like to know what Accounting REALLY MEANS? In this short tutorial we'll take 1 simple example and follow it through all 8 Steps of the Accounting Cycle - from start to finish - you'll build a solid understanding of all the Accounting Basics we encounter along the way. Stuff like the Accounting Equation, Debits & Credits, Double-Entry Accounting, T-Accounts, the Trial Balance etc.",
        videoUrl: "https://youtu.be/yYX4bvQSqbo?si=syXdWRQSwrvTobOm",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "BOOKKEEPING BASICS: 7 Steps to Get You Started",
        description:
          "I'll show you how to get started and maintain an effective bookkeeping system. Plus, you'll discover my two bonus tips that will set you up for success!",
        videoUrl: "https://youtu.be/a3GqDaIw8pA?si=Sm8Ox80TioqmmFdE",
        position: 2,
        isPublished: true,
        isFree: true,
      },
    ],
  },
  {
    name: "Personal Finance",
    category: "finance",
    lecturer: "Matt",
    totalSections: 2,
    bacgkroundUrl:
      "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 53000,
    section: [
      {
        title: "10 pelajaran keuangan pribadi yang mengubah hidup saya",
        description:
          "Di tengah ranjau saran keuangan online yang dipertanyakan, saya telah menemukan beberapa strategi yang benar-benar berhasil. Dalam video ini, saya membagikan 10 pelajaran keuangan pribadi terbesar yang mengubah hidup saya, membawa saya dari seorang mahasiswa yang bangkrut menjadi seorang berusia 34 tahun yang bebas finansial dengan prostat yang sehat.",
        videoUrl: "https://youtu.be/bMXTGGxrQ3A?si=JLqRvs4rG6znzXCj",
        position: 1,
        isPublished: true,
        isFree: true,
      },
      {
        title: "10 Greatest Personal Finance Lessons That Changed My Life",
        description:
          "In this video, you will learn the 10 personal finance lessons that have made the biggest impact on my life. These are lessons that my wife and I learned the hard way, and they have helped us achieve a level of financial success.  I hope you can take away at least one or two things to apply to your own life.",
        videoUrl: "https://youtu.be/DnK_dJo6es8?si=HoYd5xYemsprsNnK",
        position: 2,
        isPublished: false,
        isFree: true,
      },
    ],
  },
];
