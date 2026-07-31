export type FAQ = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  image: string;
  imageAlt: string;
  /** true = gerçek uygulama fotoğrafı bu hizmete birebir ait değil, kategoriyi temsil eden bir görsel */
  imageRepresentative?: boolean;
  /** true = render/konsept görsel, gerçek uygulama fotoğrafı değil */
  imageConcept?: boolean;
  description: string;
  scope: string;
  uses: string[];
  faqs: FAQ[];
};

export const serviceCategories = [
  "Çatı Uygulamaları",
  "Cephe ve Kaplama",
  "Çelik ve Endüstriyel Yapılar",
  "Konut ve Yaşam Alanları",
] as const;

export const services: Service[] = [
  // ---------- ÇATI UYGULAMALARI ----------
  {
    slug: "kenet-cati-uygulamalari",
    title: "Kenet Çatı Uygulamaları",
    shortTitle: "Kenet Çatı",
    category: "Çatı Uygulamaları",
    image: "/images/kenet-roof.webp",
    imageAlt: "Kenet birleşimli metal çatı kaplamasının yakından görünümü",
    description:
      "Modern, uzun ömürlü ve detay çözümü güçlü metal çatı uygulamalarını yapının ölçüsüne ve mimari ihtiyacına göre planlıyoruz.",
    scope:
      "Kenet çatı sisteminde metal paneller, çatı yüzeyinde dikey kenet birleşimleriyle su geçirmez şekilde birleştirilir. Eğim, açıklık ve rüzgâr yükü gibi etkenler panel genişliği ve sabitleme aralığını belirler; dere, mahya ve saçak detayları çatı geometrisine göre ayrıca çözülür.",
    uses: ["Endüstriyel yapılar", "Ticari yapılar", "Konut ve villa çatıları"],
    faqs: [
      {
        q: "Kenet çatı hangi yapı tiplerinde tercih edilir?",
        a: "Geniş açıklıklı endüstriyel yapılardan konut ve villa çatılarına kadar farklı ölçekte uygulanabilir; asıl belirleyici çatı eğimi ve mimari tercihtir.",
      },
      {
        q: "Mevcut bir çatı üzerine kenet sistem uygulanabilir mi?",
        a: "Mevcut taşıyıcı sistem ve çatı eğimi uygunsa yenileme kapsamında uygulanabilir; bu durum yerinde keşifle netleştirilir.",
      },
      {
        q: "Kenet birleşim neden tercih edilir?",
        a: "Vida deliği olmadan yapılan gizli sabitleme sayesinde su geçirmezlik ve görsel bütünlük açısından güçlü bir çatı yüzeyi sağlar.",
      },
    ],
  },
  {
    slug: "panel-cati-uygulamalari",
    title: "Panel Çatı Uygulamaları",
    shortTitle: "Panel Çatı",
    category: "Çatı Uygulamaları",
    image: "/images/panel-building.webp",
    imageAlt: "Sandviç panel cephe ve çatı ile tamamlanmış endüstriyel yapı",
    description:
      "Isı yalıtımlı sandviç panel çatı sistemlerini taşıyıcı yapı, eğim ve kullanım koşullarına uygun detaylarla uyguluyoruz.",
    scope:
      "Sandviç panel çatı, iki metal yüzey arasında yalıtım köpüğü bulunan panellerin çatı taşıyıcısına sabitlenmesiyle oluşur. Panel kalınlığı ve montaj aralığı açıklık ve yalıtım ihtiyacına göre belirlenir; mahya, saçak ve aydınlatma bandı gibi detaylar sistemle uyumlu şekilde tamamlanır.",
    uses: ["Fabrika ve depo", "Atölye ve üretim tesisi", "Ticari yapılar"],
    faqs: [
      {
        q: "Panel çatı ile kenet çatı arasındaki fark nedir?",
        a: "Panel çatıda ısı yalıtımı panelin içinde hazır gelir; kenet çatıda yalıtım çoğunlukla ayrı bir katman olarak çözülür. Seçim, yapının kullanım amacına göre yapılır.",
      },
      {
        q: "Panel çatı hangi yapılarda daha uygundur?",
        a: "Isı yalıtımının öncelikli olduğu fabrika, depo ve atölye gibi endüstriyel yapılarda sıkça tercih edilir.",
      },
      {
        q: "Aydınlatma ihtiyacı panel çatıyla birlikte çözülebilir mi?",
        a: "Evet, polikarbonat ışık bantları panel çatı sistemine uyumlu şekilde belirli aralıklarla eklenebilir.",
      },
    ],
  },
  {
    slug: "polikarbonat-uygulamalari",
    title: "Çatı ve Cephe Polikarbonat Uygulamaları",
    shortTitle: "Polikarbonat",
    category: "Çatı Uygulamaları",
    image: "/images/kenet-roof.webp",
    imageAlt: "Metal çatı sistemi - polikarbonat uygulamaları için temsili görsel",
    imageRepresentative: true,
    description:
      "Doğal ışık ihtiyacını destekleyen polikarbonat çatı ve cephe uygulamalarını mevcut sistemle uyumlu biçimde çözüyoruz.",
    scope:
      "Polikarbonat levhalar, çatı veya cephenin belirli bölümlerinde doğal ışık geçişi sağlamak amacıyla mevcut kaplama sistemiyle uyumlu profil ve contalarla monte edilir. Uygulama noktası ve levha ölçüsü, ışık ihtiyacına ve yapının kullanım amacına göre belirlenir.",
    uses: ["Çatı ışıklıkları", "Cephe ışık bantları", "Kanopi ve geçiş alanları"],
    faqs: [
      {
        q: "Polikarbonat uygulaması hangi noktalarda kullanılır?",
        a: "Genellikle çatı ışıklıklarında, cephe ışık bantlarında ve kanopi gibi geçiş alanlarında doğal ışık sağlamak için kullanılır.",
      },
      {
        q: "Polikarbonat mevcut panel çatıyla birlikte uygulanabilir mi?",
        a: "Evet, mevcut panel veya trapez sac sistemiyle uyumlu profillerle belirli aralıklarla entegre edilebilir.",
      },
      {
        q: "Hangi yapı tiplerinde tercih edilir?",
        a: "Doğal ışığın önemli olduğu üretim tesisleri, depolar ve geçiş/kanopi alanlarında sıklıkla tercih edilir.",
      },
    ],
  },
  {
    slug: "membran-cati-pvc-tpo",
    title: "Membran Çatı Uygulamaları (PVC/TPO)",
    shortTitle: "Membran Çatı",
    category: "Çatı Uygulamaları",
    image: "/images/membrane-roof.webp",
    imageAlt: "Düşük eğimli çatı üzerinde uygulanmış PVC/TPO membran yüzeyi",
    description:
      "PVC ve TPO membran sistemlerini çatı geometrisi, su tahliyesi ve detay noktalarını dikkate alarak uyguluyoruz.",
    scope:
      "Membran çatı sisteminde tek katmanlı PVC veya TPO membran, mevcut çatı yüzeyine mekanik sabitleme veya yapıştırma yöntemiyle uygulanır. Su tahliye noktaları, birleşim dikişleri ve parapet detayları geçirimsizliği sağlayacak şekilde ayrıca ele alınır.",
    uses: ["Düşük eğimli çatılar", "Endüstriyel çatılar", "Teras ve geniş yüzeyler"],
    faqs: [
      {
        q: "Membran çatı hangi eğim aralığında uygulanır?",
        a: "Öncelikli olarak düşük eğimli ve düz çatılarda tercih edilir; eğim düzeyi su tahliye detaylarını doğrudan etkiler.",
      },
      {
        q: "PVC ve TPO arasındaki fark nedir?",
        a: "İkisi de tek katmanlı membran sistemidir; malzeme seçimi projenin ihtiyacına ve mevcut yüzeyin durumuna göre değerlendirilir.",
      },
      {
        q: "Mevcut bir çatı üzerine membran uygulanabilir mi?",
        a: "Zemin yüzeyin durumu uygunsa mevcut çatı üzerine de uygulanabilir; bu, keşif sonrasında netleşir.",
      },
    ],
  },
  {
    slug: "trapez-sac-kaplama",
    title: "Trapez Sac Kaplama",
    shortTitle: "Trapez Sac",
    category: "Çatı Uygulamaları",
    image: "/images/panel-building.webp",
    imageAlt: "Metal cephe ve çatı kaplamalı endüstriyel yapı - trapez sac için temsili görsel",
    imageRepresentative: true,
    description:
      "Çatı ve cephelerde ekonomik, dayanıklı ve hızlı uygulanabilir trapez sac kaplama çözümleri sunuyoruz.",
    scope:
      "Trapez sac, oluklu profil yapısıyla hem çatı hem cephe yüzeylerinde taşıyıcı sisteme doğrudan vidalı sabitleme ile uygulanır. Profil yüksekliği ve sac kalınlığı açıklık ile yük koşullarına göre belirlenir; ek yerleri ve saçak detayları su akışına uygun planlanır.",
    uses: ["Çatı kaplamaları", "Cephe kaplamaları", "Tarımsal ve endüstriyel yapılar"],
    faqs: [
      {
        q: "Trapez sac hangi yapılarda tercih edilir?",
        a: "Ekonomik ve hızlı uygulama gereken tarımsal ve endüstriyel yapılarda sıkça tercih edilir.",
      },
      {
        q: "Trapez sac ile panel çatı arasındaki fark nedir?",
        a: "Trapez sac tek katmanlı bir kaplamadır; ısı yalıtımı gerekiyorsa panel sistemler veya ayrı bir yalıtım katmanı tercih edilir.",
      },
      {
        q: "Cephede de kullanılabilir mi?",
        a: "Evet, trapez sac profili hem çatı hem cephe kaplamasında kullanılabilir.",
      },
    ],
  },
  {
    slug: "kiremit-cati-kaplama",
    title: "Kiremit Çatı Kaplama",
    shortTitle: "Kiremit Çatı",
    category: "Çatı Uygulamaları",
    image: "/images/kenet-roof.webp",
    imageAlt: "Eğimli metal çatı yüzeyi - kiremit çatı kaplaması için temsili görsel",
    imageRepresentative: true,
    description:
      "Konut ve yaşam alanlarında çatı altı detaylarıyla birlikte düzenli, işlevsel ve yapıya uygun kiremit kaplama uygulamaları yapıyoruz.",
    scope:
      "Kiremit kaplama, çatı konstrüksiyonu üzerine tirizler ve çatı altı örtüsü kurulduktan sonra kiremitlerin sıralar hâlinde döşenmesiyle tamamlanır. Mahya, dere ve saçak detayları su tahliyesini sağlayacak şekilde ayrıca çözülür.",
    uses: ["Konut çatısı", "Villa çatısı", "Tadilat ve yenileme"],
    faqs: [
      {
        q: "Kiremit çatı hangi yapı tiplerinde uygulanır?",
        a: "Öncelikli olarak konut ve villa gibi yaşam alanlarında, eğimli çatı geometrisine sahip yapılarda uygulanır.",
      },
      {
        q: "Mevcut kiremit çatı yenilenebilir mi?",
        a: "Evet, mevcut çatı altı ve taşıyıcı durumu değerlendirilerek tadilat kapsamında yenileme yapılabilir.",
      },
      {
        q: "Çatı altı yalıtımı bu hizmete dahil mi?",
        a: "Isı ve su yalıtımı ihtiyacı ayrı bir başlık olarak İzolasyon Uygulamaları kapsamında birlikte planlanabilir.",
      },
    ],
  },
  {
    slug: "galvaniz-dere-uygulamalari",
    title: "Galvaniz Dere Uygulamaları",
    shortTitle: "Galvaniz Dere",
    category: "Çatı Uygulamaları",
    image: "/images/kenet-roof.webp",
    imageAlt: "Metal çatı yüzeyinde birleşim ve dere detayı - temsili görsel",
    imageRepresentative: true,
    description:
      "Yağmur suyunun kontrollü tahliyesi için çatı tipine ve ölçüsüne uygun galvaniz dere ve tamamlayıcı detayları uyguluyoruz.",
    scope:
      "Galvaniz dere, çatı düzlemlerinin birleştiği veya su toplama ihtiyacı olan noktalarda yağmur suyunu kontrollü biçimde yönlendirmek için uygulanır. Dere genişliği ve eğimi, çatı alanına ve beklenen su debisine göre planlanır; iniş boruları ile bağlantı detayları ayrıca çözülür.",
    uses: ["Endüstriyel çatılar", "Panel çatılar", "Çatı yenilemeleri"],
    faqs: [
      {
        q: "Galvaniz dere hangi durumlarda gereklidir?",
        a: "Çatı düzlemlerinin birleştiği vadi noktalarında veya geniş çatı yüzeylerinde su birikmesini önlemek için uygulanır.",
      },
      {
        q: "Mevcut çatıda dere yenilemesi yapılabilir mi?",
        a: "Evet, mevcut çatı tipi ve eğimi değerlendirilerek dere ve iniş detayları yenilenebilir.",
      },
      {
        q: "Dere ölçüsü nasıl belirlenir?",
        a: "Çatı alanı ve beklenen yağış yükü dikkate alınarak dere genişliği ve eğimi projeye özel planlanır.",
      },
    ],
  },
  {
    slug: "izolasyon-uygulamalari",
    title: "İzolasyon Uygulamaları",
    shortTitle: "İzolasyon",
    category: "Çatı Uygulamaları",
    image: "/images/membrane-roof.webp",
    imageAlt: "Yalıtım membranı uygulanmış düz çatı yüzeyi",
    imageRepresentative: true,
    description:
      "Yapının ihtiyacına göre su ve ısı yalıtımı detaylarını, uygulama yüzeyi ve çevresel koşullarla birlikte değerlendiriyoruz.",
    scope:
      "İzolasyon uygulaması, yüzeyin su veya ısı kaybına karşı korunması amacıyla çatı, teras veya birleşim noktalarında uygun yalıtım malzemesinin katman hâlinde uygulanmasıyla yapılır. Yüzey hazırlığı ve detay noktaları (parapet, geçiş, birleşim) yalıtımın sürekliliği açısından ayrıca ele alınır.",
    uses: ["Çatı yalıtımı", "Teras yalıtımı", "Detay ve birleşim noktaları"],
    faqs: [
      {
        q: "Hangi yüzeylerde izolasyon uygulanır?",
        a: "Çatı, teras ve birleşim noktaları gibi su veya ısı kaybının en çok yaşandığı yüzeylerde uygulanır.",
      },
      {
        q: "İzolasyon membran çatıyla birlikte mi yapılır?",
        a: "Membran çatı sistemleri genellikle su yalıtımını da içerir; ayrıca ısı yalıtımı gerekiyorsa ek katman planlanır.",
      },
      {
        q: "Mevcut bir yapıda yalıtım yenilenebilir mi?",
        a: "Evet, mevcut yüzeyin durumu değerlendirilerek yalıtım katmanı yenileme kapsamında uygulanabilir.",
      },
    ],
  },
  {
    slug: "yasam-hatti-sistemleri",
    title: "Yaşam Hattı Sistemleri",
    shortTitle: "Yaşam Hattı",
    category: "Çatı Uygulamaları",
    image: "/images/lifeline.webp",
    imageAlt: "Çatı üzerine monte edilmiş yaşam hattı güvenlik direği",
    description:
      "Çatı üzerinde bakım ve çalışma alanları için yaşam hattı sistemlerini saha düzeni ve erişim rotasına göre konumlandırıyoruz.",
    scope:
      "Yaşam hattı sistemi, çatı üzerinde bakım amacıyla çalışan personelin güvenli hareket edebilmesi için sabit ankraj noktaları ve halat hattından oluşur. Direk konumları çatı taşıyıcısına uygun sabitlenir; hat güzergâhı bakım noktalarına erişimi sağlayacak şekilde planlanır.",
    uses: ["Endüstriyel çatılar", "Bakım güzergâhları", "Çatı erişim alanları"],
    faqs: [
      {
        q: "Yaşam hattı sistemi neden gereklidir?",
        a: "Çatı üzerinde bakım veya kontrol amacıyla çalışan personelin güvenli hareket etmesini sağlamak için uygulanır.",
      },
      {
        q: "Hat güzergâhı nasıl belirlenir?",
        a: "Çatı üzerindeki bakım noktaları ve erişim ihtiyacı dikkate alınarak güzergâh ve ankraj konumları planlanır.",
      },
      {
        q: "Mevcut çatıya sonradan yaşam hattı eklenebilir mi?",
        a: "Çatı taşıyıcısının uygunluğu değerlendirilerek mevcut yapılara da sonradan uygulanabilir.",
      },
    ],
  },
  {
    slug: "havalandirma-duman-kapagi",
    title: "Havalandırma ve Duman Tahliye Kapağı Uygulamaları",
    shortTitle: "Havalandırma & Duman Kapağı",
    category: "Çatı Uygulamaları",
    image: "/images/ventilation.webp",
    imageAlt: "Çatı üstüne monte edilmiş havalandırma ve duman tahliye kapağı ünitesi",
    description:
      "Çatı üstü havalandırma ve duman tahliye kapağı uygulamalarını çatı sistemi ve açıklık detaylarıyla uyumlu biçimde çözüyoruz.",
    scope:
      "Havalandırma ve duman tahliye kapakları, çatı örtüsü üzerinde açılan kesim noktalarına yapı fiziği ve yangın güvenliği ihtiyacına uygun kasa ve conta detaylarıyla monte edilir. Ünite sayısı ve konumu, iç hacmin havalandırma ve duman tahliye ihtiyacına göre belirlenir.",
    uses: ["Üretim tesisleri", "Depolar", "Endüstriyel çatılar"],
    faqs: [
      {
        q: "Bu sistemler hangi yapılarda kullanılır?",
        a: "Geniş kapalı hacme sahip üretim tesisi ve depo gibi endüstriyel yapılarda havalandırma ve duman tahliyesi amacıyla kullanılır.",
      },
      {
        q: "Kapak sayısı nasıl belirlenir?",
        a: "İç hacmin büyüklüğü ve havalandırma/duman tahliye ihtiyacı doğrultusunda proje bazında belirlenir.",
      },
      {
        q: "Mevcut çatıya sonradan eklenebilir mi?",
        a: "Çatı sistemine uygun kesim ve detaylandırma yapılarak mevcut yapılara da uygulanabilir.",
      },
    ],
  },
  {
    slug: "kar-tutucu-sistemleri",
    title: "Kar Tutucu Sistemleri",
    shortTitle: "Kar Tutucu",
    category: "Çatı Uygulamaları",
    image: "/images/kenet-roof.webp",
    imageAlt: "Eğimli metal çatı yüzeyi - kar tutucu sistemleri için temsili görsel",
    imageRepresentative: true,
    description:
      "Eğimli metal çatılarda karın kontrolsüz kaymasını azaltmaya yardımcı kar tutucu sistemleri çatı kaplamasıyla uyumlu şekilde uyguluyoruz.",
    scope:
      "Kar tutucu sistemleri, eğimli metal çatı yüzeylerinde kar kütlesinin aniden kaymasını azaltmak amacıyla çatı kaplamasına uygun kelepçe veya profillerle sabitlenir. Konumlandırma sıklığı çatı eğimine, uzunluğuna ve bölgesel kar yüküne göre planlanır.",
    uses: ["Kenet çatılar", "Panel çatılar", "Giriş ve yaya aksları üzeri"],
    faqs: [
      {
        q: "Kar tutucu hangi çatı tiplerinde uygulanır?",
        a: "Kenet ve panel gibi eğimli metal çatı sistemlerinde, özellikle giriş ve yaya güzergâhı üzerinde uygulanır.",
      },
      {
        q: "Kar tutucu sayısı neye göre belirlenir?",
        a: "Çatı eğimi, uzunluğu ve bölgenin kar yükü dikkate alınarak sıra ve aralık planlanır.",
      },
      {
        q: "Mevcut çatıya sonradan monte edilebilir mi?",
        a: "Mevcut çatı kaplamasının tipine uygun sabitleme detayı belirlenerek sonradan da monte edilebilir.",
      },
    ],
  },
  {
    slug: "ges-ayak-enjobar",
    title: "GES Ayak Uygulamaları – Enjobar",
    shortTitle: "GES Ayak – Enjobar",
    category: "Çatı Uygulamaları",
    image: "/images/panel-building.webp",
    imageAlt: "Panel çatılı endüstriyel yapı - GES ayak uygulamaları için temsili görsel",
    imageRepresentative: true,
    description:
      "Güneş enerjisi sistemlerinin çatıya bağlantısında kullanılan GES ayak ve Enjobar uygulamalarını çatı tipine göre detaylandırıyoruz.",
    scope:
      "GES ayak ve Enjobar sistemleri, güneş enerjisi panellerinin çatı üzerine sabitlenmesi için kullanılan taşıyıcı ayak ve bağlantı elemanlarıdır. Sabitleme noktaları ve ayak tipi, çatı kaplamasına (trapez, panel, kenet) ve panel dizilim planına göre belirlenir; su geçirmezlik detayları ayrıca çözülür.",
    uses: ["Metal çatılar", "Panel çatılar", "Çatı üstü GES projeleri"],
    faqs: [
      {
        q: "GES ayak sistemi hangi çatı tiplerine uygulanabilir?",
        a: "Trapez sac, panel ve kenet gibi farklı metal çatı sistemlerine, o sisteme uygun ayak ve sabitleme detayıyla uygulanabilir.",
      },
      {
        q: "Enjobar uygulaması su geçirmezliği etkiler mi?",
        a: "Doğru conta ve sabitleme detayı uygulandığında çatı sisteminin su geçirmezliğini koruyacak şekilde çözülür.",
      },
      {
        q: "Panel dizilimi ayak yerleşimini nasıl etkiler?",
        a: "GES proje planındaki panel sayısı ve dizilimi, ayak noktalarının sayısını ve yerleşimini doğrudan belirler.",
      },
    ],
  },

  // ---------- CEPHE VE KAPLAMA ----------
  {
    slug: "panel-cephe-uygulamalari",
    title: "Panel Cephe Uygulamaları",
    shortTitle: "Panel Cephe",
    category: "Cephe ve Kaplama",
    image: "/images/panel-building.webp",
    imageAlt: "Sandviç panel cephe kaplamalı endüstriyel yapı",
    description:
      "Endüstriyel ve ticari yapılarda hızlı uygulama, düzenli görünüm ve yalıtım sağlayan panel cephe çözümleri sunuyoruz.",
    scope:
      "Panel cephe uygulamasında yalıtımlı sandviç paneller, alt konstrüksiyona yatay veya dikey doğrultuda sabitlenerek yapının dış kabuğunu oluşturur. Köşe, açıklık ve birleşim detayları su geçirmezlik ve görsel bütünlük gözetilerek planlanır.",
    uses: ["Endüstriyel tesisler", "Depolar", "Ticari yapılar"],
    faqs: [
      {
        q: "Panel cephe hangi yapılarda tercih edilir?",
        a: "Hızlı uygulama ve yalıtım ihtiyacının öncelikli olduğu endüstriyel tesis, depo ve ticari yapılarda tercih edilir.",
      },
      {
        q: "Panel cephe renk ve doku seçeneği sunuyor mu?",
        a: "Panel yüzey seçenekleri tedarikçiye göre değişir; proje kapsamında uygun seçenekler birlikte değerlendirilir.",
      },
      {
        q: "Mevcut bir cephe panel sistemle yenilenebilir mi?",
        a: "Alt konstrüksiyonun durumu uygunsa mevcut cephe yenileme kapsamında panel sisteme dönüştürülebilir.",
      },
    ],
  },
  {
    slug: "corten-kaplama",
    title: "Corten Kaplama",
    shortTitle: "Corten Kaplama",
    category: "Cephe ve Kaplama",
    image: "/images/corten.webp",
    imageAlt: "Doğal oksitli Corten çelik cephe kaplaması",
    description:
      "Doğal oksitli görünümüyle güçlü bir mimari karakter oluşturan Corten cephe ve yüzey kaplamalarını projeye özel detaylandırıyoruz.",
    scope:
      "Corten kaplamada özel çelik alaşımı paneller, zamanla kendiliğinden oksitlenerek koruyucu bir yüzey oluşturur. Panel ölçüsü ve sabitleme detayı, cephenin mimari tasarımına ve alt konstrüksiyona göre projeye özel planlanır.",
    uses: ["Mimari cepheler", "Giriş ve vurgu yüzeyleri", "Ticari yapılar"],
    faqs: [
      {
        q: "Corten kaplamanın oksitli görünümü zamanla nasıl değişir?",
        a: "Yüzey zamanla doğal bir patina oluşturarak karakteristik kahverengi/turuncu tonuna ulaşır; bu süreç malzemenin doğal özelliğidir.",
      },
      {
        q: "Corten hangi yapı bölümlerinde kullanılır?",
        a: "Genellikle giriş cepheleri, vurgu yüzeyleri ve mimari karakter istenen ticari yapı cephelerinde tercih edilir.",
      },
      {
        q: "Corten kaplama bakım gerektirir mi?",
        a: "Malzemenin oksitlenme süreci doğaldır; uygulama detayları doğru planlandığında ek bir yüzey bakımına ihtiyaç duymaz.",
      },
    ],
  },
  {
    slug: "aluminyum-dograma",
    title: "Alüminyum Doğrama",
    shortTitle: "Alüminyum Doğrama",
    category: "Cephe ve Kaplama",
    image: "/images/industrial-facade.webp",
    imageAlt: "Alüminyum doğrama pencere ve cephe açıklıkları bulunan modern yapı cephesi",
    imageRepresentative: true,
    description:
      "Cephe, kapı ve pencere ihtiyaçlarında alüminyum doğrama sistemlerini ölçü ve kullanım gereksinimlerine göre uyguluyoruz.",
    scope:
      "Alüminyum doğrama; cephe açıklıklarında kapı, pencere ve camlı bölme ihtiyaçlarını karşılamak için profil sistemlerinin ölçüye göre imal edilip montajıyla tamamlanır. Profil tipi ve conta detayları, açıklık ölçüsüne ve kullanım yoğunluğuna göre belirlenir.",
    uses: ["Kapı ve pencere", "Cephe açıklıkları", "Ticari alanlar"],
    faqs: [
      {
        q: "Alüminyum doğrama hangi alanlarda kullanılır?",
        a: "Cephe açıklıklarındaki kapı, pencere ve camlı bölme ihtiyaçlarında, özellikle ticari alanlarda yaygın olarak kullanılır.",
      },
      {
        q: "Mevcut doğrama yenilenebilir mi?",
        a: "Açıklık ölçüleri ve mevcut duvar detayı değerlendirilerek yenileme kapsamında uygulanabilir.",
      },
      {
        q: "Isı yalıtımlı profil seçeneği var mı?",
        a: "Profil tipi projenin yalıtım ihtiyacına göre değerlendirilir ve buna uygun seçenek belirlenir.",
      },
    ],
  },
  {
    slug: "giydirme-cephe",
    title: "Giydirme Cephe",
    shortTitle: "Giydirme Cephe",
    category: "Cephe ve Kaplama",
    image: "/images/industrial-facade.webp",
    imageAlt: "Modern kompozit ve camlı giydirme cephe sistemi ile kaplanmış yapı",
    description:
      "Yapının mimari çizgisini güçlendiren giydirme cephe sistemlerini alt konstrüksiyon ve birleşim detaylarıyla birlikte ele alıyoruz.",
    scope:
      "Giydirme cephe, taşıyıcı yapıdan bağımsız bir alt konstrüksiyon üzerine kaplama panellerinin monte edilmesiyle oluşan bir dış kabuk sistemidir. Alt konstrüksiyon aralığı ve panel birleşim detayları, cephenin mimari tasarımına ve rüzgâr yüküne göre planlanır.",
    uses: ["Ticari yapılar", "Ofis yapıları", "Mimari cephe yenilemeleri"],
    faqs: [
      {
        q: "Giydirme cephe ile panel cephe arasındaki fark nedir?",
        a: "Giydirme cephede ayrı bir alt konstrüksiyon kullanılır ve mimari tasarıma daha fazla esneklik tanır; panel cephe daha çok endüstriyel hızlı çözümlerde tercih edilir.",
      },
      {
        q: "Hangi yapı tiplerinde uygulanır?",
        a: "Mimari görünümün öne çıktığı ofis ve ticari yapılarda, ayrıca cephe yenileme projelerinde uygulanır.",
      },
      {
        q: "Alt konstrüksiyon malzemesi neye göre seçilir?",
        a: "Cephe yüksekliği, rüzgâr yükü ve kaplama malzemesinin ağırlığı alt konstrüksiyon seçimini belirler.",
      },
    ],
  },
  {
    slug: "kompozit-kaplama",
    title: "Kompozit Kaplama",
    shortTitle: "Kompozit Kaplama",
    category: "Cephe ve Kaplama",
    image: "/images/industrial-facade.webp",
    imageAlt: "Kompozit panel ile kaplanmış modern cephe yüzeyi - temsili görsel",
    imageRepresentative: true,
    description:
      "Düzgün ve çağdaş bir cephe görünümü için kompozit panel kaplamaları alt konstrüksiyon ve dönüş detaylarıyla uyguluyoruz.",
    scope:
      "Kompozit kaplamada alüminyum kompozit paneller (ACP), alt konstrüksiyona kaset veya kayma sistemleriyle sabitlenerek düzgün bir cephe yüzeyi oluşturur. Panel dönüş ve köşe detayları, cephenin mimari çizgisine uygun olarak imal edilir.",
    uses: ["Mağaza ve ticari cephe", "Bina girişleri", "Kurumsal cephe yenileme"],
    faqs: [
      {
        q: "Kompozit kaplama hangi yapılarda tercih edilir?",
        a: "Düzgün ve çağdaş bir görünüm istenen mağaza, ticari cephe ve kurumsal bina girişlerinde tercih edilir.",
      },
      {
        q: "Kompozit panel köşe ve dönüşlerde nasıl uygulanır?",
        a: "Paneller kaset sistemiyle kıvrılarak veya özel köşe profilleriyle birleştirilerek kesintisiz bir görünüm sağlanır.",
      },
      {
        q: "Mevcut cephe kompozit panelle yenilenebilir mi?",
        a: "Alt yüzeyin durumu değerlendirilerek cephe yenileme kapsamında kompozit kaplamaya dönüştürülebilir.",
      },
    ],
  },
  {
    slug: "mesh-uygulamalari",
    title: "Mesh Uygulamaları",
    shortTitle: "Mesh Uygulamaları",
    category: "Cephe ve Kaplama",
    image: "/images/mesh.webp",
    imageAlt: "Perfore metal mesh cephe kaplaması yakından görünüm",
    description:
      "Metal mesh sistemleriyle cephelerde gölgeleme, havalandırma ve mimari yüzey etkisini bir arada sağlayan çözümler uyguluyoruz.",
    scope:
      "Mesh cephe, perfore veya örgülü metal panellerin alt konstrüksiyona monte edilmesiyle oluşan yarı geçirgen bir yüzey sistemidir. Göz aralığı ve panel ölçüsü, gölgeleme ve havalandırma ihtiyacına göre; sabitleme detayları rüzgâr yüküne göre belirlenir.",
    uses: ["Otopark cepheleri", "Mimari güneş kırıcı", "Teknik hacim kaplamaları"],
    faqs: [
      {
        q: "Mesh cephe hangi amaçla kullanılır?",
        a: "Doğal havalandırmayı keserek gölgeleme sağlamak ve teknik hacimleri görsel olarak kapatmak amacıyla kullanılır.",
      },
      {
        q: "Otopark cephelerinde neden tercih edilir?",
        a: "Yarı geçirgen yapısı sayesinde doğal havalandırmayı sürdürürken cepheye düzenli bir görünüm kazandırır.",
      },
      {
        q: "Mesh panel farklı göz aralıklarında üretilebilir mi?",
        a: "Göz aralığı, istenen gölgeleme oranına ve mimari etkiye göre projeye özel belirlenir.",
      },
    ],
  },
  {
    slug: "tas-tugla-uygulamalari",
    title: "Taş ve Tuğla Uygulamaları",
    shortTitle: "Taş & Tuğla",
    category: "Cephe ve Kaplama",
    image: "/images/mesh.webp",
    imageAlt: "Tuğla dokulu cephe yüzeyi - taş ve tuğla uygulamaları için temsili görsel",
    imageRepresentative: true,
    description:
      "Doğal ve karakterli yüzeyler için taş ve tuğla uygulamalarını yapı detayına ve tasarım diline uygun biçimde gerçekleştiriyoruz.",
    scope:
      "Taş ve tuğla kaplama, doğal veya yapay taş/tuğla birimlerinin harç veya mekanik sabitleme yöntemiyle cephe yüzeyine uygulanmasıyla tamamlanır. Derz aralığı ve örgü deseni, cephenin tasarım diline göre belirlenir.",
    uses: ["Dış cephe", "Bahçe ve çevre düzeni", "Mimari vurgu yüzeyleri"],
    faqs: [
      {
        q: "Taş ve tuğla kaplama hangi yüzeylerde kullanılır?",
        a: "Dış cephelerde, bahçe ve çevre düzenlemesinde, ayrıca mimari vurgu istenen yüzeylerde kullanılır.",
      },
      {
        q: "Mevcut bir cepheye taş/tuğla kaplama eklenebilir mi?",
        a: "Alt yüzeyin taşıma kapasitesi değerlendirilerek mevcut cepheye ek kaplama olarak uygulanabilir.",
      },
      {
        q: "Doğal taş ile yapay taş arasındaki fark nedir?",
        a: "Doğal taş kendine özgü doku ve renk varyasyonu sunar; yapay taş daha standart bir görünüm ve uygulama kolaylığı sağlar. Seçim tasarım tercihine göre yapılır.",
      },
    ],
  },

  // ---------- ÇELİK VE ENDÜSTRİYEL YAPILAR ----------
  {
    slug: "agir-celik-sistemler",
    title: "Ağır Çelik Sistemler",
    shortTitle: "Ağır Çelik",
    category: "Çelik ve Endüstriyel Yapılar",
    image: "/images/steel-system.webp",
    imageAlt: "Geniş açıklıklı ağır çelik taşıyıcı sistem montajı",
    description:
      "Geniş açıklık ve yüksek taşıma ihtiyacı bulunan yapılar için ağır çelik imalat ve montaj süreçlerini proje esaslarına göre yürütüyoruz.",
    scope:
      "Ağır çelik sistemlerde I ve H profilli taşıyıcı elemanlar, statik projeye göre imal edilip sahada birleştirilerek yapının ana iskeletini oluşturur. Açıklık, kat yüksekliği ve yük durumu profil kesitini ve bağlantı detaylarını doğrudan belirler.",
    uses: ["Fabrika ve depo", "Hangar", "Endüstriyel yapılar"],
    faqs: [
      {
        q: "Ağır çelik sistem hangi yapılarda tercih edilir?",
        a: "Geniş açıklık ve yüksek taşıma kapasitesi gereken fabrika, depo ve hangar gibi endüstriyel yapılarda tercih edilir.",
      },
      {
        q: "Çelik imalat sahada mı yoksa atölyede mi yapılır?",
        a: "Profil kesim ve montajı genellikle atölyede hazırlanır, sahada ise birleştirme ve montaj süreci yürütülür.",
      },
      {
        q: "Statik proje bu hizmete dahil mi?",
        a: "Uygulama, ilgili statik proje ve mühendislik hesaplarına uygun olarak yürütülür.",
      },
    ],
  },
  {
    slug: "kutu-profil-celik-sistemler",
    title: "Kutu Profil Çelik Sistemler",
    shortTitle: "Kutu Profil Çelik",
    category: "Çelik ve Endüstriyel Yapılar",
    image: "/images/steel-system.webp",
    imageAlt: "Çelik taşıyıcı profil sistemi - kutu profil uygulamaları için temsili görsel",
    imageRepresentative: true,
    description:
      "Daha hafif ve esnek uygulamalarda kutu profil çelik taşıyıcıları ölçü, açıklık ve kaplama sistemiyle birlikte planlıyoruz.",
    scope:
      "Kutu profil çelik sistemler, kapalı kesitli profillerin kaynak veya cıvata bağlantılarıyla birleştirilmesiyle daha hafif taşıyıcı strüktürler oluşturur. Profil ölçüsü, açıklık ve üzerine gelecek kaplama sisteminin ağırlığına göre belirlenir.",
    uses: ["Kanopi ve sundurma", "Hafif çelik yapılar", "Tadilat ve güçlendirme"],
    faqs: [
      {
        q: "Kutu profil sistem ağır çelikten farkı nedir?",
        a: "Kutu profil, daha hafif açıklık ve yük koşullarında tercih edilen daha ekonomik bir çözümdür; ağır çelik ise geniş açıklık ve yüksek yük kapasitesi gerektiren yapılarda kullanılır.",
      },
      {
        q: "Kanopi ve sundurma projelerinde neden tercih edilir?",
        a: "Hafifliği ve şekillendirme kolaylığı sayesinde kanopi, sundurma gibi daha küçük ölçekli taşıyıcı sistemlerde pratik bir çözüm sunar.",
      },
      {
        q: "Mevcut bir yapıya güçlendirme amacıyla eklenebilir mi?",
        a: "Mevcut taşıyıcı sistem değerlendirilerek tadilat ve güçlendirme kapsamında kutu profil ekleme yapılabilir.",
      },
    ],
  },
  {
    slug: "saha-zemin-betonu",
    title: "Saha ve Zemin Betonu Uygulamaları",
    shortTitle: "Saha & Zemin Betonu",
    category: "Çelik ve Endüstriyel Yapılar",
    image: "/images/foundation.webp",
    imageAlt: "Endüstriyel yapı için hazırlanan zemin ve temel betonu şantiye görünümü",
    description:
      "Endüstriyel ve açık alanlarda zemin hazırlığıyla uyumlu saha betonu uygulamalarını kullanım yüküne göre planlıyoruz.",
    scope:
      "Saha ve zemin betonu uygulamasında zemin sıkıştırması ve donatı işlemlerinin ardından beton dökümü yapılır; derz aralıkları ve yüzey işlemi kullanım yüküne göre belirlenir. Açık saha, depo zemini veya çalışma alanı gibi farklı kullanım koşulları beton kalınlığını ve donatı detayını etkiler.",
    uses: ["Fabrika zemini", "Açık saha", "Depo ve çalışma alanları"],
    faqs: [
      {
        q: "Saha betonu kalınlığı neye göre belirlenir?",
        a: "Zemin üzerinde çalışacak araç ve ekipmanın yükü ile kullanım yoğunluğu beton kalınlığı ve donatı detayını belirler.",
      },
      {
        q: "Mevcut bir zemin yenilenebilir mi?",
        a: "Mevcut zeminin durumu değerlendirilerek gerekli hazırlık sonrası yenileme kapsamında uygulanabilir.",
      },
      {
        q: "Derzler neden önemlidir?",
        a: "Derzler, betonun sıcaklık ve yük değişimleriyle oluşabilecek çatlamaları kontrollü noktalara yönlendirmek için planlanır.",
      },
    ],
  },
  {
    slug: "seksiyonel-kapi",
    title: "Seksiyonel Kapı Uygulamaları",
    shortTitle: "Seksiyonel Kapı",
    category: "Çelik ve Endüstriyel Yapılar",
    image: "/images/sectional-door.webp",
    imageAlt: "Endüstriyel bina girişine monte edilmiş seksiyonel kapı",
    description:
      "Endüstriyel girişlerde alan kullanımını kolaylaştıran seksiyonel kapı sistemlerini açıklık ve kullanım sıklığına göre uyguluyoruz.",
    scope:
      "Seksiyonel kapı, panelli kapı kanadının yan raylar üzerinde tavana doğru katlanarak açılmasıyla çalışır ve önünde araç/insan geçiş alanı bırakmaz. Açıklık ölçüsü, kullanım sıklığı ve otomasyon ihtiyacı sistem seçimini belirler.",
    uses: ["Fabrika girişleri", "Depo ve lojistik alanlar", "Atölyeler"],
    faqs: [
      {
        q: "Seksiyonel kapı hangi yapılarda tercih edilir?",
        a: "Önünde geçiş alanına ihtiyaç duyulan fabrika, depo ve lojistik alanı girişlerinde tercih edilir.",
      },
      {
        q: "Kapı otomatik açılır şekilde uygulanabilir mi?",
        a: "Kullanım sıklığına göre motorlu otomasyon sistemiyle birlikte planlanabilir.",
      },
      {
        q: "Kapı ölçüsü neye göre belirlenir?",
        a: "Geçiş yapacak araç veya ekipmanın ölçüsü açıklık genişliğini ve yüksekliğini belirler.",
      },
    ],
  },

  // ---------- KONUT VE YAŞAM ALANLARI ----------
  {
    slug: "bungalov-evler",
    title: "Bungalov Evler",
    shortTitle: "Bungalov Evler",
    category: "Konut ve Yaşam Alanları",
    image: "/images/bungalow.webp",
    imageAlt: "Bungalov ev konsept tasarım görseli",
    imageConcept: true,
    description:
      "Kompakt ve işlevsel yaşam alanları için bungalov projelerini taşıyıcı sistemden dış kabuğa kadar bütüncül biçimde planlıyoruz.",
    scope:
      "Bungalov projelerinde hafif çelik veya ahşap taşıyıcı sistem üzerine çatı, cephe ve iç mekân tamamlama işleri tek plan dahilinde koordine edilir. Ölçü ve düzen, arazi koşullarına ve kullanım amacına göre projeye özel belirlenir.",
    uses: ["Turizm alanları", "Bahçe ve arazi projeleri", "Kompakt yaşam alanları"],
    faqs: [
      {
        q: "Bungalov projeleri hangi arazi tiplerine uygundur?",
        a: "Bahçe, tatil bölgesi veya turizm alanı gibi kompakt yaşam alanı ihtiyacı olan farklı arazi tiplerinde değerlendirilebilir.",
      },
      {
        q: "Taşıyıcı sistem seçimi neye göre yapılır?",
        a: "Arazi koşulları, proje ölçüsü ve kullanım amacına göre hafif çelik veya ahşap taşıyıcı seçenekleri değerlendirilir.",
      },
      {
        q: "Görseldeki bungalov birebir uygulanan bir proje mi?",
        a: "Hayır, bu görsel bir konsept tasarımdır; gerçek uygulama ölçüleri ve detayları proje bazında ayrıca planlanır.",
      },
    ],
  },
  {
    slug: "konut-projeleri",
    title: "Konut Projeleri",
    shortTitle: "Konut Projeleri",
    category: "Konut ve Yaşam Alanları",
    image: "/images/hero.webp",
    imageAlt: "Modern mimari yapı - konut projeleri için temsili görsel",
    imageRepresentative: true,
    description:
      "Konut projelerinde çatı, cephe, taşıyıcı ve tamamlayıcı uygulamaları projenin ihtiyaçları doğrultusunda koordine ediyoruz.",
    scope:
      "Konut projelerinde çatı sistemi, cephe kaplaması ve tamamlayıcı uygulamalar (yalıtım, dere, doğrama gibi) birbiriyle uyumlu tek bir plan dahilinde ele alınır. Yeni yapım veya yenileme olmasına göre iş sırası ve kapsam farklılaşır.",
    uses: ["Yeni konut yapımı", "Yapı yenileme", "Çatı ve cephe dönüşümü"],
    faqs: [
      {
        q: "Konut projelerinde hangi uygulamalar birlikte planlanır?",
        a: "Çatı, cephe, yalıtım ve doğrama gibi birbiriyle ilişkili uygulamalar aynı plan dahilinde koordine edilir.",
      },
      {
        q: "Yeni yapım ve yenileme projeleri arasında süreç farkı var mı?",
        a: "Yenileme projelerinde mevcut yapının durumu keşifle değerlendirilir; yeni yapımda ise proje esaslarına göre baştan planlama yapılır.",
      },
      {
        q: "Tek bir hizmet başlığı seçmek zorunda mıyım?",
        a: "Hayır, konut projesi kapsamında birden fazla uygulama (çatı, cephe, yalıtım vb.) birlikte değerlendirilebilir.",
      },
    ],
  },
  {
    slug: "villa-projeleri",
    title: "Villa Projeleri",
    shortTitle: "Villa Projeleri",
    category: "Konut ve Yaşam Alanları",
    image: "/images/hero.webp",
    imageAlt: "Modern mimari yapı - villa projeleri için temsili görsel",
    imageRepresentative: true,
    description:
      "Villa projelerinde mimari beklenti ile teknik uygulamayı bir arada ele alarak çatı ve cephe çözümleri geliştiriyoruz.",
    scope:
      "Villa projelerinde çatı ve cephe uygulamaları, mimari tasarımın görsel beklentisiyle teknik gereklilikleri (yalıtım, su tahliyesi, doğrama) birlikte gözetilerek planlanır. Malzeme ve detay seçimi projenin mimari diline göre şekillenir.",
    uses: ["Müstakil konut", "Villa yenileme", "Çatı ve dış cephe uygulamaları"],
    faqs: [
      {
        q: "Villa projelerinde malzeme seçimi nasıl yapılır?",
        a: "Projenin mimari tasarımı ve kullanım beklentisi dikkate alınarak çatı ve cephe malzemesi birlikte değerlendirilir.",
      },
      {
        q: "Mevcut bir villa yenilenebilir mi?",
        a: "Mevcut çatı ve cephe durumu keşifle değerlendirilerek yenileme kapsamında uygulama planlanabilir.",
      },
      {
        q: "Villa projelerinde hangi uygulamalar bir arada planlanır?",
        a: "Çatı kaplaması, cephe sistemi, yalıtım ve doğrama gibi uygulamalar genellikle tek bir plan dahilinde koordine edilir.",
      },
    ],
  },
];

export type Project = {
  image: string;
  title: string;
  category: string;
  isConcept?: boolean;
};

export const projectCategories = [
  "Çatı",
  "Cephe",
  "Çelik Sistemler",
  "Mimari Kaplamalar",
  "Teknik Uygulamalar",
  "Yaşam Alanları",
] as const;

export const projects: Project[] = [
  { image: "/images/hero.webp", title: "Modern Çatı ve Cephe Uygulaması", category: "Çatı" },
  { image: "/images/kenet-roof.webp", title: "Kenet Çatı Uygulaması", category: "Çatı" },
  { image: "/images/membrane-roof.webp", title: "Membran Çatı Uygulaması", category: "Çatı" },
  { image: "/images/panel-building.webp", title: "Panel Çatı ve Cephe Uygulaması", category: "Çatı" },
  { image: "/images/industrial-facade.webp", title: "Endüstriyel Cephe Uygulaması", category: "Cephe" },
  { image: "/images/corten.webp", title: "Corten Cephe Kaplaması", category: "Mimari Kaplamalar" },
  { image: "/images/mesh.webp", title: "Mesh Cephe Uygulaması", category: "Mimari Kaplamalar" },
  { image: "/images/steel-system.webp", title: "Çelik Taşıyıcı Sistem Montajı", category: "Çelik Sistemler" },
  { image: "/images/foundation.webp", title: "Saha ve Zemin Betonu Uygulaması", category: "Çelik Sistemler" },
  { image: "/images/sectional-door.webp", title: "Seksiyonel Kapı Uygulaması", category: "Çelik Sistemler" },
  { image: "/images/lifeline.webp", title: "Çatı Yaşam Hattı Uygulaması", category: "Teknik Uygulamalar" },
  { image: "/images/ventilation.webp", title: "Havalandırma ve Duman Tahliye Kapağı", category: "Teknik Uygulamalar" },
  { image: "/images/bungalow.webp", title: "Bungalov Konsept Tasarım", category: "Yaşam Alanları", isConcept: true },
];
