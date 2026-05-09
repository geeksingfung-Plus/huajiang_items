const products = [
  {
    name: "毛绒玩偶",
    image: "assets/products/毛绒玩偶.png",
    tagline: "将桥塔拟人化，形成亲和可爱的项目记忆点。",
    highlights: [
      "以花江峡谷大桥桥塔为原型，转化为可爱的毛绒角色。",
      "柔软亲肤面料搭配淡雅青绿色，适合抱枕、摆件或礼物场景。",
      "治愈表情强化亲和力，让工程地标变得更容易被游客记住。",
      "适合亲子游客、年轻客群和景区纪念品陈列。"
    ]
  },
  {
    name: "瓶装水挂绳",
    image: "assets/products/瓶装水挂绳.png",
    tagline: "面向户外游览场景，让补水与打卡更方便。",
    highlights: [
      "采用耐用 TPU 材质，轻便柔韧，适合长时间佩戴。",
      "挂绳印有大桥全景、桥塔图形和品牌文字，增强文创识别。",
      "硅胶弹性卡扣，便于固定和取下瓶装水。",
      "适合景区徒步、研学参观、户外旅行等高频使用场景。"
    ]
  },
  {
    name: "冰袖",
    image: "assets/products/冰袖.png",
    tagline: "把桥梁图形穿在身上，服务夏季户外游览需求。",
    highlights: [
      "冰丝面料触感清爽，可用于夏季防晒与运动出行。",
      "图案融入桥塔、桥面与峡谷背景，佩戴后有明显视觉记忆点。",
      "青白渐变配色轻盈干净，贴合山地峡谷与云雾气质。",
      "兼具实用属性和拍照传播属性，适合景区零售。"
    ]
  },
  {
    name: "临停电话号码牌",
    image: "assets/products/临停电话号码牌.png",
    tagline: "把车内刚需用品做成可长期曝光的桥梁文创。",
    highlights: [
      "外形融入桥塔、桥面、峡谷山形等元素，识别度强。",
      "数字可自由组合，便于替换电话号码。",
      "底部防滑，适合放置于车内中控台。",
      "实用性强，能够让花江峡谷大桥形象进入日常车载场景。"
    ]
  },
  {
    name: "签字笔",
    image: "assets/products/签字笔.png",
    tagline: "自然木质与金属笔帽结合，适合办公和礼赠。",
    highlights: [
      "笔身选用木质纹理，手感温润，整体质感稳重。",
      "激光雕刻花江峡谷大桥 Logo、桥塔和 625 米记忆点。",
      "金属笔帽搭配木质笔身，提升商务礼赠属性。",
      "适合办公书写、会议伴手礼和项目纪念收藏。"
    ]
  },
  {
    name: "勺子",
    image: "assets/products/勺子.png",
    tagline: "将桥梁风景嵌入餐饮小物，拓展生活化使用场景。",
    highlights: [
      "食品级不锈钢勺头，圆润安全，适合儿童日常用餐使用。",
      "勺柄以软胶或立体装饰呈现桥塔、峡谷和大桥景观。",
      "多种造型和配色可形成系列化售卖。",
      "小巧轻便，适合亲子餐具套装、儿童礼品和研学纪念组合。"
    ]
  },
  {
    name: "手机支架",
    image: "assets/products/手机支架.png",
    tagline: "连接山海与日常桌面，体现“跨越、连接、创新”。",
    highlights: [
      "可折叠调节，兼容多种手机尺寸和观看角度。",
      "表面印制大桥全景与峡谷插画，色彩清爽丰富。",
      "底座稳固，防滑设计提升桌面使用体验。",
      "折叠后体积较小，适合旅行携带和办公桌面陈列。"
    ]
  },
  {
    name: "书签",
    image: "assets/products/书签.png",
    tagline: "以金属工艺呈现桥梁、山水和贵州地域风韵。",
    highlights: [
      "金属材质结合珐琅彩绘，质感精致，适合收藏。",
      "多款造型包含桥塔、山峰、花草、竹叶、飞鸟等元素。",
      "吊坠与流苏增强礼品感和东方审美气质。",
      "适合阅读、手账、文具礼盒和研学活动纪念。"
    ]
  },
  {
    name: "贴纸",
    image: "assets/products/贴纸.png",
    tagline: "轻量高频传播品类，适合打卡分享和组合销售。",
    highlights: [
      "包含多张不同图案，覆盖桥塔、峡谷、标语、花草与角色元素。",
      "画面风格明亮亲和，适合年轻游客和亲子客群。",
      "可贴于手账、手机壳、电脑、水杯等物品。",
      "防水耐用，成本可控，适合作为引流单品。"
    ]
  },
  {
    name: "行李牌",
    image: "assets/products/行李牌.png",
    tagline: "把花江峡谷大桥作为旅行身份标识，强化出行纪念。",
    highlights: [
      "硅胶材质柔软耐磨，抗压抗摔，适合旅行使用。",
      "正面呈现桥塔、桥面、峡谷风光和 625 米标识。",
      "背面可填写个人信息，兼顾识别与隐私保护。",
      "多款图案适配不同年龄层游客，适合机场、高铁和景区零售。"
    ]
  },
  {
    name: "亚克力钥匙扣",
    image: "assets/products/亚克力钥匙扣.png",
    tagline: "透明材质叠加桥梁景观，形成随身携带的小纪念。",
    highlights: [
      "透明亚克力材质通透轻巧，适合批量开发。",
      "内嵌大桥全景、桥塔角色、625 数字和峡谷风光。",
      "搭配铃铛、金属圈和多色挂绳，增强可爱度与实用性。",
      "适合作为景区高频购买的轻量纪念品。"
    ]
  },
  {
    name: "折叠伞",
    image: "assets/products/折叠伞.png",
    tagline: "以大桥全景覆盖伞面，兼具防晒、防雨和形象展示。",
    highlights: [
      "高密度伞布适合遮阳防雨，满足旅游户外刚需。",
      "伞面环绕呈现花江峡谷大桥全景与山体线稿。",
      "深蓝与青绿配色沉稳大气，适合男女游客使用。",
      "配收纳伞套，方便携带，也适合礼赠组合。"
    ]
  },
  {
    name: "折扇",
    image: "assets/products/折扇.png",
    tagline: "以水墨长卷表达峡谷大桥的东方审美。",
    highlights: [
      "纸面搭配木质扇骨，材质轻盈且具有传统气质。",
      "扇面绘制大桥与峡谷山水长卷，意境悠远。",
      "搭配礼盒和流苏挂件，提升收藏与赠礼属性。",
      "既可日常使用，也可作为陈列型艺术文创。"
    ]
  },
  {
    name: "杯垫",
    image: "assets/products/杯垫.png",
    tagline: "以桌面小物承载桥梁风景，适合成套开发。",
    highlights: [
      "木质或复合材质呈现温润触感，适合日常桌面使用。",
      "画面印刻大桥全景、桥塔、峡谷、花草等主题图案。",
      "底部可增加防滑设计，兼顾美观和实用性。",
      "适合与咖啡、茶礼、办公套装形成组合销售。"
    ]
  },
  {
    name: "冰箱贴",
    image: "assets/products/冰箱贴.png",
    tagline: "高收藏属性的景区标志性纪念品。",
    highlights: [
      "采用金属珐琅或立体浮雕工艺，色彩饱满，质感突出。",
      "多款造型涵盖桥塔、全景、625 数字、峡谷和角色形象。",
      "金边轮廓强化精致感和礼品感。",
      "强磁吸附，适合居家装饰和旅行收藏。"
    ]
  },
  {
    name: "尺子",
    image: "assets/products/尺子.png",
    tagline: "把 625 米高度记忆转化为学习办公用品。",
    highlights: [
      "透明 PC 或亚克力材质，结实耐用，视觉轻盈。",
      "尺身印有大桥全景、山体层次和高度标识。",
      "刻度清晰，兼具度量功能与观赏价值。",
      "适合学生研学、办公文具和纪念套装。"
    ]
  },
  {
    name: "环保袋",
    image: "assets/products/环保袋.png",
    tagline: "大面积展示桥梁主视觉，适合移动传播。",
    highlights: [
      "选用厚实棉帆布，环保耐用，适合通勤与购物。",
      "正面印制桥塔、桥面和峡谷画面，视觉识别度高。",
      "大容量设计，满足景区购物、旅行随身携带需求。",
      "米白底色搭配青绿色线稿，简洁清爽。"
    ]
  },
  {
    name: "回形针",
    image: "assets/products/回形针.png",
    tagline: "把桥塔线条转化为办公桌上的小巧文创。",
    highlights: [
      "采用金属电镀工艺制作，造型轻巧精致。",
      "以桥塔轮廓作为回形针结构，识别度高。",
      "实用且具收藏价值，适合办公、书签和文件整理。",
      "体积小、成本低，适合作为文具套装中的点睛单品。"
    ]
  }
];

const deck = document.querySelector(".deck");
const productSlides = document.querySelector("#productSlides");
const productOverview = document.querySelector("#productOverview");
const indicator = document.querySelector(".page-indicator");
const dotsWrap = document.querySelector(".dots");

function renderProducts() {
  productOverview.innerHTML = products
    .map(
      (product, index) => `
        <a class="overview-card" href="#product-${index + 1}">
          <img src="${product.image}" alt="${product.name}" />
          <span>${index + 1}. ${product.name}</span>
        </a>
      `,
    )
    .join("");

  productSlides.innerHTML = products
    .map(
      (product, index) => `
        <section class="slide product-slide" id="product-${index + 1}">
          <div class="slide-content product-layout">
            <div class="visual-frame">
              <img src="${product.image}" alt="${product.name}产品效果图" />
            </div>
            <div class="product-copy">
              <span class="product-number">${String(index + 1).padStart(2, "0")} / 18</span>
              <h2>${product.name}</h2>
              <p class="tagline">${product.tagline}</p>
              <ul class="highlights">
                ${product.highlights.map((item) => `<li>${item}</li>`).join("")}
              </ul>
              <div class="product-actions">
                <a class="back-to-overview" href="#slide-overview">返回目录</a>
              </div>
            </div>
          </div>
        </section>
      `,
    )
    .join("");
}

renderProducts();

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest("img")) {
    event.preventDefault();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target.closest("img")) {
    event.preventDefault();
  }
});

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
  <button type="button" aria-label="关闭大图">×</button>
  <img alt="" />
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");
const lightboxClose = lightbox.querySelector("button");

document.querySelectorAll(".visual-frame img").forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("is-open");
  });
});

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightboxImage.removeAttribute("src");
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

const slides = Array.from(document.querySelectorAll(".slide"));
let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `跳转到第 ${index + 1} 页`);
  dot.addEventListener("click", () => goToSlide(index));
  dotsWrap.appendChild(dot);
});

const dots = Array.from(document.querySelectorAll(".dot"));

function updateIndicator(index) {
  currentIndex = index;
  indicator.textContent = `${index + 1} / ${slides.length}`;
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
}

function goToSlide(index) {
  const safeIndex = Math.max(0, Math.min(slides.length - 1, index));
  slides[safeIndex].scrollIntoView({ behavior: "smooth", block: "start" });
  updateIndicator(safeIndex);
}

document.querySelector('[data-action="prev"]').addEventListener("click", () => {
  goToSlide(currentIndex - 1);
});

document.querySelector('[data-action="next"]').addEventListener("click", () => {
  goToSlide(currentIndex + 1);
});

document.addEventListener("keydown", (event) => {
  if (lightbox.classList.contains("is-open")) {
    if (event.key === "Escape") {
      closeLightbox();
    }
    return;
  }

  if (["ArrowDown", "PageDown", "ArrowRight", " "].includes(event.key)) {
    event.preventDefault();
    goToSlide(currentIndex + 1);
  }

  if (["ArrowUp", "PageUp", "ArrowLeft"].includes(event.key)) {
    event.preventDefault();
    goToSlide(currentIndex - 1);
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      updateIndicator(slides.indexOf(visible.target));
    }
  },
  {
    root: deck,
    threshold: [0.55],
  },
);

slides.forEach((slide) => observer.observe(slide));
updateIndicator(0);
