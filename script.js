/* ============================================================
   Blue Tide Seafood — behaviour
   Plain JavaScript, no libraries.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- image helper (Unsplash CDN) ---------- */
  function img(id, w) {
    return "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=" + (w || 800) + "&q=70";
  }

  var IMG = {
    hero: "1758448786233-2051ecd150c8",
    about: "1657485990998-4b6fca3ca696",
    map: "1569623803819-2db1d5cf8f16"
  };

  /* ---------- content ---------- */
  var CATS = ["starters", "mains", "grilled", "desserts"];

 var MENU = [
  { id: 1, cat: "starters", price: "EGP 220", photo: "1414235077428-338989a2e8c0",
    en: { name: "Crispy Calamari", desc: "Golden calamari rings served with lemon garlic aioli." },
    ar: { name: "كاليماري مقرمش", desc: "حلقات كاليماري دهبية بتتقدم مع صوص الأيولي بالليمون والتوم." } },
  { id: 2, cat: "starters", price: "EGP 190", photo: "1571167366136-b57e07761625",
    en: { name: "Seafood Soup", desc: "A rich tomato broth with shrimp, calamari, mussels, and fresh herbs." },
    ar: { name: "شوربة سي فود", desc: "شوربة طماطم غنية بالجمبري والكاليماري وبلح البحر وأعشاب فريش." } },
  { id: 3, cat: "starters", price: "EGP 240", photo: "1727522793234-2e108fc0460b",
    en: { name: "Shrimp Dynamite", desc: "Crispy shrimp coated in our creamy spicy sauce." },
    ar: { name: "شريمب ديناميت", desc: "جمبري مقرمش وعليه الصوص الكريمي الحار بتاعنا." } },
  { id: 4, cat: "mains", price: "EGP 480", photo: "1467003909585-2f8a72700288",
    en: { name: "Mediterranean Salmon", desc: "Grilled salmon served with roasted vegetables and lemon herb sauce." },
    ar: { name: "سلمون على طريقة البحر المتوسط", desc: "سلمون مشوي بيتقدم مع خضار محمّر وصوص الليمون والأعشاب." } },
  { id: 5, cat: "mains", price: "EGP 390", photo: "1672636402078-4b957a572e4e",
    en: { name: "Seafood Pasta", desc: "Linguine with shrimp, calamari, and mussels in a creamy garlic sauce." },
    ar: { name: "باستا سي فود", desc: "لينجويني بالجمبري والكاليماري وبلح البحر في صوص كريمي بالتوم." } },
  { id: 6, cat: "mains", price: "EGP 720", photo: "1651323018466-b36b7df1d2b1",
    en: { name: "Blue Tide Platter", desc: "Grilled fish, shrimp, calamari, and rice served with signature sauces." },
    ar: { name: "طبق بلو تايد", desc: "سمك مشوي وجمبري وكاليماري ورز، ومعاهم صوصات المطعم المميزة." } },
  { id: 7, cat: "grilled", price: "EGP 450", photo: "1519708227418-c8fd9a32b7a2",
    en: { name: "Grilled Sea Bass", desc: "Whole sea bass seasoned with herbs and grilled over charcoal." },
    ar: { name: "قاروص مشوي", desc: "سمكة قاروص كاملة متبّلة بالأعشاب ومشوية على الفحم." } },
  { id: 8, cat: "grilled", price: "EGP 520", photo: "1559737558-2f5a35f4523b",
    en: { name: "Garlic Butter Prawns", desc: "Jumbo prawns grilled and finished with garlic butter and fresh lemon." },
    ar: { name: "جمبري بزبدة التوم", desc: "جمبري جامبو مشوي مع زبدة التوم وليمون فريش." } },
  { id: 9, cat: "desserts", price: "EGP 160", photo: "1588195538326-c5b1e9f80a1b",
    en: { name: "Lemon Cheesecake", desc: "Creamy cheesecake with a refreshing lemon glaze." },
    ar: { name: "تشيز كيك بالليمون", desc: "تشيز كيك كريمي وعليه طبقة ليمون منعشة." } },
  { id: 10, cat: "desserts", price: "EGP 175", photo: "1517427294546-5aa121f68e8a",
    en: { name: "Chocolate Sea-Salt Cake", desc: "Rich chocolate cake finished with caramel and sea salt." },
    ar: { name: "كيكة شوكولاتة بملح البحر", desc: "كيكة شوكولاتة بطعم غني، وعليها كراميل وملح بحر." } }
];

var GALLERY = [
  { photo: "1519708227418-c8fd9a32b7a2", en: "Grilled fish with roasted vegetables", ar: "سمك مشوي مع خضار محمّر" },
  { photo: "1559737558-2f5a35f4523b", en: "A platter of grilled prawns", ar: "طبق جمبري مشوي" },
  { photo: "1563379926898-05f4575a45d8", en: "Seafood pasta with shrimp", ar: "باستا سي فود بالجمبري" },
  { photo: "1569623803819-2db1d5cf8f16", en: "The dining room, set for service", ar: "صالة المطعم جاهزة تستقبل الضيوف" },
  { photo: "1703849103523-e89b24b70ef0", en: "Outdoor table set with a glass of wine", ar: "ترابيزة برّه عليها كاس نبيذ" },
  { photo: "1651323018466-b36b7df1d2b1", en: "A shared seafood platter on the table", ar: "طبق سي فود تتقاسموه مع بعض" },
  { photo: "1657485990998-4b6fca3ca696", en: "A chef preparing fresh shellfish", ar: "الشيف بيجهّز المحار الفريش" },
  { photo: "1719750488901-076ffef0403c", en: "Guests sharing a meal together", ar: "ضيوف بياكلوا مع بعض" },
  { photo: "1576330383200-2bf325cfec52", en: "The morning catch resting on ice", ar: "صيد الصبح على التلج" }
];

var TESTIMONIALS = [
  { avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    en: { name: "Mariam Hassan", quote: "The seafood was incredibly fresh, and the atmosphere made us feel like we were dining beside the Mediterranean. I will definitely visit again." },
    ar: { name: "مريم حسن", quote: "السي فود كان فريش جدًا، والجو حسّسنا إننا بناكل على شط البحر المتوسط. أكيد هاجي تاني." } },
  { avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    en: { name: "Omar Khaled", quote: "The Blue Tide Platter was perfect for sharing. The service was friendly, the portions were generous, and everything tasted amazing." },
    ar: { name: "عمر خالد", quote: "طبق بلو تايد كان مناسب جدًا نتقاسمه مع بعض. الخدمة كانت لطيفة، والكميات كبيرة، وكل الأكل كان طعمه تحفة." } },
  { avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    en: { name: "Nour Ahmed", quote: "One of the best seafood restaurants in Cairo. The grilled salmon and shrimp dynamite were outstanding." },
    ar: { name: "نور أحمد", quote: "من أحسن مطاعم السي فود في القاهرة. السلمون المشوي والشريمب ديناميت كانوا تحفة." } }
];

/* ---------- translations ---------- */
var T = {
  en: {
    dir: "ltr", langBtn: "AR", langLabel: "حوّل للعربي",
    pageTitle: "Blue Tide Seafood — Fresh From the Sea, Served With Passion",
    brand: "Blue Tide Seafood",
    nav: { home: "Home", about: "About", menu: "Menu", gallery: "Gallery", testimonials: "Testimonials", reserve: "Reserve a Table" },
    menuOpen: "Open menu", menuClose: "Close menu",
    hero: {
      badge: "Fresh Seafood Delivered Daily",
      title: "Fresh From the Sea, Served With Passion",
      lead: "Experience the finest seafood in Cairo, prepared daily with fresh ingredients, bold flavors, and a touch of Mediterranean inspiration.",
      menuBtn: "View Our Menu", reserveBtn: "Reserve a Table",
      chip1t: "Daily Catch", chip1s: "Sourced every morning",
      chip2t: "Expert Chefs", chip2s: "Mediterranean craft",
      alt: "Grilled seafood served on a table beside the sea"
    },
    about: {
      kicker: "Our Story", title: "A Taste of the Mediterranean",
      body: "At Blue Tide Seafood, we believe great food begins with fresh ingredients. Our chefs carefully select high-quality seafood every morning and transform it into flavorful dishes inspired by the Mediterranean coast. Whether you are enjoying a family dinner, celebrating a special occasion, or meeting friends, we are here to make every visit memorable.",
      alt: "A chef preparing fresh shellfish in the Blue Tide kitchen",
      stampNum: "12", stampTxt: "years on the Corniche",
      h1t: "Fresh Daily Catch", h1s: "Selected each morning from trusted local waters.",
      h2t: "Experienced Chefs", h2s: "Mediterranean technique meets local flavor.",
      h3t: "Warm Coastal Atmosphere", h3s: "A relaxed setting overlooking the Nile Corniche."
    },
    menu: {
      kicker: "Our Menu", title: "Dishes Worth The Tide",
      sub: "Every plate is built around what came in fresh this morning.",
      all: "All", starters: "Starters", mains: "Main Courses", grilled: "Grilled", desserts: "Desserts",
      full: "View Full Menu"
    },
    gallery: {
      kicker: "Gallery", title: "A Look Inside Blue Tide",
      sub: "From the grill to the table — moments from the restaurant.",
      open: "Open larger image:", close: "Close", prev: "Previous image", next: "Next image"
    },
    tst: { kicker: "Testimonials", title: "What Our Guests Say", sub: "Real words from real visits to Blue Tide Seafood.", role: "Verified guest", stars: "5 out of 5 stars" },
    res: {
      kicker: "Reservation", title: "Reserve Your Table",
      sub: "Tell us when you're coming and we'll have your table ready by the water.",
      name: "Full name", phone: "Phone number", email: "Email address", guests: "Number of guests",
      date: "Date", time: "Time", notes: "Special requests",
      notesPh: "Allergies, celebrations, seating preference…",
      submit: "Confirm Reservation",
      okTitle: "Reservation received",
      okBody: function (f) {
        return "A table for " + f.guests + " on " + f.date + " at " + f.time + ", under " + f.name + ". We'll call to confirm.";
      },
      errName: "Please enter your full name.", errPhone: "Enter a valid phone number.",
      errEmail: "Enter a valid email address.", errGuests: "Enter a party size between 1 and 20.",
      errDate: "Please choose a date.", errPast: "Date cannot be in the past.", errTime: "Please choose a time.",
      hours: "Opening Hours", satThu: "Saturday – Thursday", fri: "Friday",
      satThuH: "12:00 PM – 12:00 AM", friH: "1:00 PM – 1:00 AM",
      contact: "Contact Information", address: "25 Nile Corniche, Zamalek, Cairo, Egypt",
      mapAlt: "Restaurant terrace overlooking the water"
    },
    foot: {
      about: "Fresh, Mediterranean-inspired seafood on the Nile Corniche in Zamalek, Cairo.",
      navigate: "Navigate", hours: "Hours", contact: "Contact", news: "Stay In The Loop",
      newsSub: "Get news on new dishes and events.", emailPh: "Your email", subscribe: "Subscribe",
      subscribed: "Thanks — you're subscribed!",
      rights: "© 2026 Blue Tide Seafood. All rights reserved.",
      hoursShort1: "Sat – Thu: 12 PM – 12 AM", hoursShort2: "Friday: 1 PM – 1 AM"
    }
  },
  ar: {
    dir: "rtl", langBtn: "EN", langLabel: "Switch to English",
    pageTitle: "بلو تايد سي فود — فريش من البحر، وبنقدمه بحب",
    brand: "بلو تايد سي فود",
    nav: { home: "الرئيسية", about: "عن المطعم", menu: "المنيو", gallery: "الصور", testimonials: "آراء ضيوفنا", reserve: "احجز ترابيزتك" },
    menuOpen: "افتح القائمة", menuClose: "اقفل القائمة",
    hero: {
      badge: "سي فود فريش كل يوم",
      title: "فريش من البحر، وبنقدمه بحب",
      lead: "استمتع بأحلى سي فود في القاهرة، بنحضّره كل يوم بمكونات فريش ونكهات مميزة ولمسة من أكل البحر المتوسط.",
      menuBtn: "شوف المنيو", reserveBtn: "احجز ترابيزتك",
      chip1t: "صيد اليوم", chip1s: "بيوصلنا كل يوم الصبح",
      chip2t: "شيفات محترفين", chip2s: "خبرة في أكل البحر المتوسط",
      alt: "سي فود مشوي بيتقدم على ترابيزة جنب البحر"
    },
    about: {
      kicker: "حكايتنا", title: "طعم البحر المتوسط",
      body: "في بلو تايد سي فود، عارفين إن الأكل الحلو بيبدأ بمكونات فريش. الشيفات عندنا بيختاروا أحسن سي فود بعناية كل يوم الصبح، وبيحضّروا منه أطباق بطعم مميز مستوحى من أكل سواحل البحر المتوسط. سواء جاي تتعشى مع العيلة، أو تحتفل بمناسبة خاصة، أو تتقابل مع صحابك، إحنا هنا علشان كل زيارة تفضل في بالك.",
      alt: "الشيف بيجهّز المحار الفريش في مطبخ بلو تايد",
      stampNum: "١٢", stampTxt: "سنة على الكورنيش",
      h1t: "صيد فريش كل يوم", h1s: "بنختاره كل يوم الصبح من مصادر محلية بنثق فيها.",
      h2t: "شيفات عندهم خبرة", h2s: "طريقة طبخ البحر المتوسط بلمسة من أكلنا.",
      h3t: "قعدة مريحة بروح البحر", h3s: "مكان هادي بيطل على كورنيش النيل."
    },
    menu: {
      kicker: "المنيو", title: "أطباق تستاهل تستناها",
      sub: "كل طبق بنحضّره من الصيد الفريش اللي وصلنا النهارده الصبح.",
      all: "الكل", starters: "المقبلات", mains: "الأطباق الرئيسية", grilled: "المشويات", desserts: "الحلويات",
      full: "شوف المنيو كامل"
    },
    gallery: {
      kicker: "صورنا", title: "خد لفة جوه بلو تايد",
      sub: "من الشواية للترابيزة — لقطات من المطعم.",
      open: "كبّر الصورة:", close: "اقفل", prev: "الصورة اللي فاتت", next: "الصورة اللي جاية"
    },
    tst: { kicker: "آراء ضيوفنا", title: "ضيوفنا بيقولوا إيه؟", sub: "كلام حقيقي من ناس جرّبت بلو تايد.", role: "ضيف اتأكدنا من زيارته", stars: "٥ من ٥ نجوم" },
    res: {
      kicker: "الحجز", title: "احجز ترابيزتك",
      sub: "قولنا جاي إمتى، وهنجهّزلك ترابيزتك اللي بتطل على الميّه.",
      name: "اسمك بالكامل", phone: "رقم تليفونك", email: "الإيميل", guests: "عدد الأفراد",
      date: "التاريخ", time: "الوقت", notes: "طلبات خاصة",
      notesPh: "حساسية من أكل معين، مناسبة خاصة، تحب تقعد فين…",
      submit: "أكّد الحجز",
      okTitle: "طلب الحجز وصلنا",
      okBody: function (f) {
        return "ترابيزة لـ " + f.guests + " فرد يوم " + f.date + " الساعة " + f.time + " باسم " + f.name + ". هنكلمك علشان نأكد الحجز.";
      },
      errName: "اكتب اسمك بالكامل لو سمحت.", errPhone: "اكتب رقم تليفون صحيح.",
      errEmail: "اكتب إيميل صحيح.", errGuests: "اكتب عدد الأفراد من ١ لـ ٢٠.",
      errDate: "اختار تاريخ الحجز لو سمحت.", errPast: "مينفعش تختار تاريخ فات.", errTime: "اختار المعاد لو سمحت.",
      hours: "مواعيدنا", satThu: "السبت – الخميس", fri: "الجمعة",
      satThuH: "١٢:٠٠ الظهر – ١٢:٠٠ بالليل", friH: "١:٠٠ الظهر – ١:٠٠ بعد نص الليل",
      contact: "تواصل معانا", address: "٢٥ كورنيش النيل، الزمالك، القاهرة، مصر",
      mapAlt: "تراس المطعم اللي بيطل على الميّه"
    },
    foot: {
      about: "سي فود فريش على طريقة البحر المتوسط، على كورنيش النيل في الزمالك، القاهرة.",
      navigate: "روابط سريعة", hours: "المواعيد", contact: "كلمنا", news: "خليك متابعنا",
      newsSub: "اعرف أخبار الأطباق الجديدة والمناسبات عندنا.", emailPh: "إيميلك", subscribe: "اشترك",
      subscribed: "شكرًا ليك — اشتركت معانا!",
      rights: "© ٢٠٢٦ بلو تايد سي فود. كل الحقوق محفوظة.",
      hoursShort1: "السبت – الخميس: ١٢ الظهر – ١٢ بالليل", hoursShort2: "الجمعة: ١ الظهر – ١ بعد نص الليل"
    }
  }
};

  /* ---------- state ---------- */
  var lang = "en";
  var activeCat = "all";
  var lbIndex = null;
  var lastFocused = null;

  function t(path) {
    return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, T[lang]);
  }

  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  /* ---------- render: menu ---------- */
  function renderFilters() {
    var box = $("#filters");
    box.innerHTML = "";
    var keys = ["all"].concat(CATS);
    keys.forEach(function (key) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "filter-btn" + (activeCat === key ? " active" : "");
      b.textContent = t("menu." + key);
      b.setAttribute("aria-pressed", activeCat === key ? "true" : "false");
      b.addEventListener("click", function () {
        activeCat = key;
        renderFilters();
        renderMenu();
      });
      box.appendChild(b);
    });
  }

  function renderMenu() {
    var grid = $("#menuGrid");
    grid.innerHTML = "";
    MENU.filter(function (m) { return activeCat === "all" || m.cat === activeCat; })
      .forEach(function (item) {
        var card = document.createElement("article");
        card.className = "menu-card";
        card.innerHTML =
          '<div class="menu-photo">' +
            '<img src="' + img(item.photo, 600) + '" alt="" loading="lazy">' +
            '<span class="cat-label"></span>' +
          '</div>' +
          '<div class="menu-body">' +
            '<div class="menu-top"><h3></h3><span class="menu-price"></span></div>' +
            '<p></p>' +
          '</div>';
        card.querySelector("img").alt = item[lang].name;
        card.querySelector(".cat-label").textContent = t("menu." + item.cat);
        card.querySelector("h3").textContent = item[lang].name;
        card.querySelector(".menu-price").textContent = item.price;
        card.querySelector(".menu-body p").textContent = item[lang].desc;
        grid.appendChild(card);
      });
  }

  /* ---------- render: gallery ---------- */
  function renderGallery() {
    var box = $("#masonry");
    box.innerHTML = "";
    GALLERY.forEach(function (g, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "g-item";
      b.innerHTML = '<img src="' + img(g.photo, 600) + '" alt="" loading="lazy"><span class="g-caption"></span>';
      b.querySelector("img").alt = g[lang];
      b.querySelector(".g-caption").textContent = g[lang];
      b.setAttribute("aria-label", t("gallery.open") + " " + g[lang]);
      b.addEventListener("click", function () { openLightbox(i); });
      box.appendChild(b);
    });
  }

  /* ---------- render: testimonials ---------- */
  function renderTestimonials() {
    var box = $("#tGrid");
    box.innerHTML = "";
    TESTIMONIALS.forEach(function (item) {
      var fig = document.createElement("figure");
      fig.className = "t-card";
      fig.innerHTML =
        '<div class="t-stars">★★★★★</div>' +
        '<blockquote class="t-quote"></blockquote>' +
        '<figcaption class="t-person">' +
          '<img src="' + item.avatar + '" alt="" loading="lazy">' +
          '<div><div class="t-name"></div><div class="t-role"></div></div>' +
        '</figcaption>';
      fig.querySelector(".t-stars").setAttribute("aria-label", t("tst.stars"));
      fig.querySelector(".t-quote").textContent = item[lang].quote;
      fig.querySelector("img").alt = item[lang].name;
      fig.querySelector(".t-name").textContent = item[lang].name;
      fig.querySelector(".t-role").textContent = t("tst.role");
      box.appendChild(fig);
    });
  }

  /* ---------- lightbox ---------- */
  function openLightbox(i) {
    lbIndex = i;
    lastFocused = document.activeElement;
    var lb = $("#lightbox");
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    paintLightbox();
    $("#lbClose").focus();
  }
  function paintLightbox() {
    var g = GALLERY[lbIndex];
    $("#lbImg").src = img(g.photo, 1400);
    $("#lbImg").alt = g[lang];
    $("#lbCap").textContent = g[lang];
  }
  function closeLightbox() {
    $("#lightbox").hidden = true;
    document.body.style.overflow = "";
    lbIndex = null;
    if (lastFocused) lastFocused.focus();
  }
  function step(n) {
    lbIndex = (lbIndex + n + GALLERY.length) % GALLERY.length;
    paintLightbox();
  }

  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", function () { step(-1); });
  $("#lbNext").addEventListener("click", function () { step(1); });
  $("#lightbox").addEventListener("click", function (e) {
    if (e.target === this) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (lbIndex === null) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  /* ---------- navigation ---------- */
  var nav = $("#nav");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 40 || menuIsOpen);
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  var menuIsOpen = false;
  var hamburger = $("#hamburger");
  var mobileMenu = $("#mobileMenu");

  function setMobileMenu(open) {
    menuIsOpen = open;
    mobileMenu.classList.toggle("open", open);
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
    onScroll();
  }
  hamburger.addEventListener("click", function () { setMobileMenu(!menuIsOpen); });
  $$("#mobileMenu a").forEach(function (a) {
    a.addEventListener("click", function () { setMobileMenu(false); });
  });

  /* ---------- reservation form ---------- */
  var form = $("#resForm");
  var FIELDS = ["name", "phone", "email", "guests", "date", "time"];

  function setError(id, msg) {
    var input = document.getElementById(id);
    input.closest(".field").classList.toggle("error", !!msg);
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    document.getElementById(id + "-err").textContent = msg || "";
  }

  function validate() {
    var v = {};
    FIELDS.concat(["notes"]).forEach(function (id) {
      v[id] = document.getElementById(id).value.trim();
    });
    var errs = {};

    if (v.name.length < 2) errs.name = t("res.errName");
    if (!/^[+0-9\s()-]{7,20}$/.test(v.phone)) errs.phone = t("res.errPhone");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = t("res.errEmail");

    var g = parseInt(v.guests, 10);
    if (!g || g < 1 || g > 20) errs.guests = t("res.errGuests");

    if (!v.date) {
      errs.date = t("res.errDate");
    } else {
      var chosen = new Date(v.date + "T00:00:00");
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      if (chosen < today) errs.date = t("res.errPast");
    }
    if (!v.time) errs.time = t("res.errTime");

    return { values: v, errors: errs };
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var res = validate();
    FIELDS.forEach(function (id) { setError(id, res.errors[id]); });

    var bad = Object.keys(res.errors);
    if (bad.length) {
      $("#resSuccess").hidden = true;
      document.getElementById(bad[0]).focus();
      return;
    }

    $("#resSummary").textContent = t("res.okBody")(res.values);
    $("#resSuccess").hidden = false;
    form.reset();
  });

  // clear a field's error as soon as the visitor edits it
  FIELDS.forEach(function (id) {
    document.getElementById(id).addEventListener("input", function () {
      setError(id, "");
      $("#resSuccess").hidden = true;
    });
  });

  /* ---------- newsletter ---------- */
  $("#newsForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!$("#newsEmail").value.trim()) return;
    $("#newsDone").hidden = false;
    this.reset();
  });

  /* ---------- scroll reveal ---------- */
  function setupReveal() {
    var targets = $$(".section-head, .about-art, .about-copy, .r-form, .r-side");
    targets.forEach(function (el) { el.classList.add("reveal"); });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---------- language ---------- */
  function applyLanguage() {
    var conf = T[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = conf.dir;
    document.title = conf.pageTitle;

    // every element flagged with data-i18n
    $$("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"));
      if (typeof val === "string" && el.tagName !== "TITLE") el.textContent = val;
    });

    // images + their alt text
    var hero = $("#heroImg");
    hero.src = img(IMG.hero, 1800);
    hero.alt = t("hero.alt");

    var about = $("#aboutImg");
    about.src = img(IMG.about, 900);
    about.alt = t("about.alt");

    var map = $("#mapImg");
    map.src = img(IMG.map, 700);
    map.alt = t("res.mapAlt");

    // attributes that aren't text nodes
    $("#langBtnText").textContent = conf.langBtn;
    $("#langBtn").setAttribute("aria-label", conf.langLabel);
    $("#langBtn").setAttribute("title", conf.langLabel);
    hamburger.setAttribute("aria-label", menuIsOpen ? conf.menuClose : conf.menuOpen);
    $("#notes").placeholder = t("res.notesPh");
    $("#newsEmail").placeholder = t("foot.emailPh");
    $("#newsEmail").setAttribute("aria-label", t("foot.emailPh"));
    $("#lbClose").setAttribute("aria-label", t("gallery.close"));
    $("#lbPrev").setAttribute("aria-label", t("gallery.prev"));
    $("#lbNext").setAttribute("aria-label", t("gallery.next"));

    // re-render the data-driven sections
    renderFilters();
    renderMenu();
    renderGallery();
    renderTestimonials();
    if (lbIndex !== null) paintLightbox();

    // any error messages already on screen switch language too
    var res = validate();
    FIELDS.forEach(function (id) {
      if (document.getElementById(id).closest(".field").classList.contains("error")) {
        setError(id, res.errors[id]);
      }
    });
  }

  $("#langBtn").addEventListener("click", function () {
    lang = lang === "en" ? "ar" : "en";
    applyLanguage();
  });

  /* ---------- boot ---------- */
  // no reservations in the past
  $("#date").min = new Date().toISOString().slice(0, 10);
  applyLanguage();
  setupReveal();
  onScroll();
})();
