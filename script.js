// =========================================================================
// BẠN TỰ GHI TÊN NGƯỜI GỬI VÀ LỜI CHÚC 20/10 CHO TỪNG CÔ TẠI ĐÂY
// =========================================================================

const SENDER_NAME = "Tập Thể Lớp 12A5"; // Sửa tên bạn hoặc tên tập thể lớp tại đây

const subjectWishes = {
  toan: {
    label: "Giáo viên Môn Toán",
    // Tự ghi lời chúc cho Cô dạy Toán:
    wish: "Nhân ngày Phụ nữ Việt Nam 20/10, em kính chúc Cô luôn xinh đẹp, rạng rỡ và ngập tràn niềm vui. Chúc hạnh phúc của Cô luôn tiến tới dương vô cùng (+∞) và mọi muộn phiền đều triệt tiêu về 0 ạ!"
  },
  li: {
    label: "Giáo viên Môn Vật Lí",
    // Tự ghi lời chúc cho Cô dạy Vật Lí:
    wish: "Chúc mừng ngày 20/10 Cô ạ! Em kính chúc Cô luôn tỏa sáng rực rỡ, giữ mãi nguồn năng lượng tích cực theo định luật bảo toàn và luôn có lực hấp dẫn niềm vui, may mắn đạt cực đại!"
  },
  sinh: {
    label: "Giáo viên Môn Sinh Học",
    // Tự ghi lời chúc cho Cô dạy Sinh Học:
    wish: "Nhân ngày Phụ nữ Việt Nam 20/10, em kính chúc Cô luôn tươi trẻ như mầm xanh mùa xuân, mỗi ngày trôi qua đều nhân đôi niềm vui, dồi dào sức khỏe và luôn ngập tràn tiếng cười bên gia đình, học trò!"
  },
  anh: {
    label: "Giáo viên Môn Tiếng Anh",
    // Tự ghi lời chúc cho Cô dạy Tiếng Anh:
    wish: "Happy Vietnamese Women's Day 20/10! Em kính chúc Cô luôn trẻ trung, xinh đẹp, hạnh phúc trọn vẹn ở mọi 'thì' từ Hiện tại đến Tương lai và luôn truyền cảm hứng tuyệt vời cho chúng em ạ!"
  },
  van_gvcn: {
    label: "Giáo viên Môn Văn",
    // Tự ghi lời chúc cho Cô GVCN cũ dạy Văn:
    wish: "Dù không còn được Cô trực tiếp chủ nhiệm và lắng nghe từng trang văn của Cô mỗi ngày, em vẫn luôn nhớ sự dịu dàng, tận tụy của Cô. Nhân ngày 20/10, em kính chúc Cô luôn bình an, trẻ đẹp và hạnh phúc vẹn tròn ạ!"
  }
};

// =========================================================================
// XỬ LÝ MỞ THIỆP KIỂU THIỆP CƯỚI 2 CÁNH 3D
// =========================================================================

const teacherNameInput = document.getElementById("teacherName");
const subjectSelect = document.getElementById("subject");
const toCardBtn = document.getElementById("toCardBtn");
const waxSeal = document.getElementById("waxSeal");
const toggleDoorBtn = document.getElementById("toggleDoorBtn");
const backBtn = document.getElementById("backBtn");

const welcomeBox = document.getElementById("welcomeBox");
const weddingScene = document.getElementById("weddingScene");
const weddingCard = document.getElementById("weddingCard");

const cardTitle = document.getElementById("cardTitle");
const cardSubject = document.getElementById("cardSubject");
const cardMessage = document.getElementById("cardMessage");
const cardSender = document.getElementById("cardSender");

// Khi Cô bấm "Nhận Thiệp 20/10"
toCardBtn.addEventListener("click", () => {
  const rawName = teacherNameInput.value.trim();
  const formattedName = rawName
    ? (rawName.toLowerCase().startsWith("cô") ? rawName : `Cô ${rawName}`)
    : "Cô kính mến";

  const selectedKey = subjectSelect.value;
  const data = subjectWishes[selectedKey];

  cardTitle.textContent = formattedName;
  cardSubject.textContent = data.label;
  cardMessage.textContent = data.wish;
  cardSender.textContent = SENDER_NAME;

  // Đảm bảo thiệp ở trạng thái đóng 2 cánh lúc mới hiện ra
  weddingCard.classList.remove("open");

  welcomeBox.classList.add("hidden");
  weddingScene.classList.remove("hidden");

  // Tự động mở nhẹ 2 cánh thiệp sau 0.8 giây hoặc để Cô bấm vào con dấu sáp
  // setTimeout(() => {
  //   weddingCard.classList.add("open");
  // }, 800);
});

// Bấm vào con dấu sáp để mở thiệp
waxSeal.addEventListener("click", () => {
  weddingCard.classList.add("open");
});

// Nút đóng / mở lại 2 cánh thiệp cưới
toggleDoorBtn.addEventListener("click", () => {
  weddingCard.classList.toggle("open");
});

// Nút quay lại màn hình chọn môn
backBtn.addEventListener("click", () => {
  weddingCard.classList.remove("open");
  weddingScene.classList.add("hidden");
  welcomeBox.classList.remove("hidden");
});

// =========================================================================
// HIỆU ỨNG HOA RƠI & ÁNH KIM (CANVAS)
// =========================================================================

const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const petals = [];
const icons = ["🌸", "🌷", "💮", "✨"];

for (let i = 0; i < 30; i++) {
  petals.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 12 + 13,
    speedY: Math.random() * 1 + 0.5,
    speedX: Math.random() * 0.8 - 0.4,
    angle: Math.random() * 360,
    spin: (Math.random() - 0.5) * 0.02,
    icon: icons[Math.floor(Math.random() * icons.length)]
  });
}

function animatePetals() {
  ctx.clearRect(0, 0, width, height);

  petals.forEach((p) => {
    p.y += p.speedY;
    p.x += Math.sin(p.y * 0.015) * 0.5 + p.speedX;
    p.angle += p.spin;

    if (p.y > height + 30) {
      p.y = -30;
      p.x = Math.random() * width;
    }

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.font = `${p.size}px serif`;
    ctx.fillText(p.icon, 0, 0);
    ctx.restore();
  });

  requestAnimationFrame(animatePetals);
}

animatePetals();