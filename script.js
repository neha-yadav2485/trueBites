const MENU = [
  {
    id: 1,
    name: "Belgian Chocolate Truffle",
    price: 650,
    cat: "cakes",
    desc: "Rich dark chocolate sponge layered with Belgian truffle ganache.",
    emoji: "🎂",
    badge: "Chef's Special",
  },
  {
    id: 2,
    name: "Red Velvet Dream",
    price: 590,
    cat: "cakes",
    desc: "Velvety red sponge with classic cream cheese frosting.",
    emoji: "🎂",
    badge: "Most Ordered",
  },
  {
    id: 3,
    name: "Pineapple Fresh Cream",
    price: 450,
    cat: "cakes",
    desc: "Light vanilla sponge with juicy pineapple and whipped cream.",
    emoji: "🎂",
  },
  {
    id: 4,
    name: "Black Forest Classic",
    price: 550,
    cat: "cakes",
    desc: "Chocolate sponge, cherries, and fresh cream — a timeless favorite.",
    emoji: "🎂",
  },
  {
    id: 5,
    name: "Butterscotch Delight",
    price: 480,
    cat: "cakes",
    desc: "Caramel-swirled sponge topped with crunchy butterscotch chips.",
    emoji: "🎂",
  },
  {
    id: 6,
    name: "Mango Cream Cake",
    price: 520,
    cat: "cakes",
    desc: "Fresh mango pulp layered between light vanilla sponge.",
    emoji: "🎂",
    badge: "Seasonal",
  },
  {
    id: 7,
    name: "Croissant",
    price: 65,
    cat: "pastries",
    desc: "Flaky, buttery golden croissant baked fresh every morning.",
    emoji: "🥐",
  },
  {
    id: 8,
    name: "Veg Puff",
    price: 35,
    cat: "pastries",
    desc: "Crispy pastry filled with spiced mixed vegetables.",
    emoji: "🥐",
    badge: "Most Ordered",
  },
  {
    id: 9,
    name: "Cinnamon Roll",
    price: 80,
    cat: "pastries",
    desc: "Soft spiral bun glazed with cream cheese frosting.",
    emoji: "🥐",
  },
  {
    id: 10,
    name: "Choco Lava Cupcake",
    price: 95,
    cat: "cupcakes",
    desc: "Molten chocolate center with fudge frosting.",
    emoji: "🧁",
    badge: "Chef's Special",
  },
  {
    id: 11,
    name: "Red Velvet Cupcake",
    price: 90,
    cat: "cupcakes",
    desc: "Mini red velvet with cream cheese clouds.",
    emoji: "🧁",
  },
  {
    id: 12,
    name: "Vanilla Dream Cupcake",
    price: 80,
    cat: "cupcakes",
    desc: "Fluffy vanilla sponge topped with swirled buttercream.",
    emoji: "🧁",
  },
  {
    id: 13,
    name: "Choco Chip Cookies",
    price: 40,
    cat: "cookies",
    desc: "Buttery cookies loaded with gooey chocolate chips.",
    emoji: "🍪",
    badge: "Student Fav",
  },
  {
    id: 14,
    name: "Oatmeal Raisin",
    price: 45,
    cat: "cookies",
    desc: "Wholesome oats with sweet raisins and a hint of cinnamon.",
    emoji: "🍪",
  },
  {
    id: 15,
    name: "Almond Biscotti",
    price: 55,
    cat: "cookies",
    desc: "Crisp twice-baked Italian-style cookies with almonds.",
    emoji: "🍪",
  },
  {
    id: 16,
    name: "Fudgy Walnut Brownie",
    price: 90,
    cat: "brownies",
    desc: "Dense, fudgy brownie packed with crunchy walnuts.",
    emoji: "🍫",
    badge: "Most Ordered",
  },
  {
    id: 17,
    name: "Choco Overload Brownie",
    price: 110,
    cat: "brownies",
    desc: "Triple-chocolate brownie with a molten center.",
    emoji: "🍫",
    badge: "Chef's Special",
  },
  {
    id: 18,
    name: "Nutella Swirl Brownie",
    price: 120,
    cat: "brownies",
    desc: "Rich brownie swirled with hazelnut Nutella.",
    emoji: "🍫",
  },
  {
    id: 19,
    name: "Veg Sandwich",
    price: 60,
    cat: "snacks",
    desc: "Fresh veggies and herb mayo in toasted bread.",
    emoji: "🥪",
  },
  {
    id: 20,
    name: "Cheese Toast",
    price: 70,
    cat: "snacks",
    desc: "Golden toasted bread loaded with melted cheese.",
    emoji: "🥪",
    badge: "Student Fav",
  },
  {
    id: 21,
    name: "Veg Puff (Snack)",
    price: 35,
    cat: "snacks",
    desc: "Crispy pastry with spiced vegetable filling.",
    emoji: "🥐",
  },
  {
    id: 22,
    name: "Cold Coffee",
    price: 80,
    cat: "beverages",
    desc: "Creamy chilled coffee blended to perfection.",
    emoji: "☕",
    badge: "Best Seller",
  },
  {
    id: 23,
    name: "Hot Chocolate",
    price: 70,
    cat: "beverages",
    desc: "Rich, velvety hot chocolate topped with cream.",
    emoji: "☕",
  },
  {
    id: 24,
    name: "Oreo Shake",
    price: 100,
    cat: "beverages",
    desc: "Thick Oreo milkshake — indulgent and ice cold.",
    emoji: "🥤",
  },
  {
    id: 25,
    name: "Mango Lassi",
    price: 75,
    cat: "beverages",
    desc: "Fresh mango blended with thick yogurt.",
    emoji: "🥛",
  },
];
let cart = {};
function addToCart(id, btn) {
  const item = MENU.find((m) => m.id === id);
  if (!item) return;
  cart[id] = cart[id]
    ? { ...cart[id], qty: cart[id].qty + 1 }
    : { ...item, qty: 1 };
  updateCartUI();
  btn.textContent = "✓ Added!";
  btn.classList.add("added");
  setTimeout(() => {
    btn.textContent = "＋ Add to Cart";
    btn.classList.remove("added");
  }, 1500);
  showToast(item.emoji + " " + item.name + " added!");
}
function updateCartUI() {
  const items = Object.values(cart);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  document.getElementById("cartTotal").textContent = "₹" + total;
  const cc = document.getElementById("cartCount");
  cc.textContent = count;
  cc.classList.toggle("visible", count > 0);
  const el = document.getElementById("cartItems");
  if (!items.length) {
    el.innerHTML =
      '<div class="cart-empty"><div class="cart-empty-icon">🧁</div><div>Your cart is empty</div><div style="font-size:.8rem;color:var(--text-light)">Add some treats!</div></div>';
    return;
  }
  el.innerHTML = items
    .map(
      (i) =>
        `<div class="cart-item"><div class="cart-item-emoji">${i.emoji}</div><div style="flex:1"><div class="cart-item-name">${i.name}</div><div class="cart-item-price">₹${i.price} each</div><div class="cart-item-controls"><button class="qty-btn" onclick="changeQty(${i.id},-1)">−</button><span class="qty-display">${i.qty}</span><button class="qty-btn" onclick="changeQty(${i.id},1)">+</button><button class="remove-item" onclick="removeItem(${i.id})">🗑</button></div></div></div>`,
    )
    .join("");
}
function changeQty(id, d) {
  if (!cart[id]) return;
  cart[id].qty += d;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
}
function removeItem(id) {
  delete cart[id];
  updateCartUI();
}
function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("open");
  document.getElementById("cartOverlay").classList.toggle("open");
}
function checkoutWhatsApp() {
  const items = Object.values(cart);
  if (!items.length) {
    showToast("🛒 Your cart is empty!");
    return;
  }
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  let msg = "Hello True Bites! 🎂 I'd like to place an order:%0A%0A";
  items.forEach((i) => {
    msg += "• " + i.name + " x" + i.qty + " = ₹" + i.price * i.qty + "%0A";
  });
  msg +=
    "%0A*Total: ₹" + total + "*%0A%0APlease confirm availability. Thank you!";
  window.open("https://wa.me/919557880031?text=" + msg, "_blank");
}
function renderMenu(filter = "all") {
  const grid = document.getElementById("menuGrid");
  const filtered =
    filter === "all" ? MENU : MENU.filter((m) => m.cat === filter);
  grid.innerHTML = filtered
    .map(
      (item) =>
        `<div class="menu-card" data-cat="${item.cat}"><div class="menu-card-img">${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ""}<span style="font-size:3rem">${item.emoji}</span></div><div class="menu-card-body"><div class="menu-card-top"><div class="menu-card-name">${item.name}</div><div class="menu-card-price">₹${item.price}</div></div><div class="menu-card-desc">${item.desc}</div><button class="add-to-cart" onclick="addToCart(${item.id},this)">＋ Add to Cart</button></div></div>`,
    )
    .join("");
}
function filterMenu(btn, cat) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderMenu(cat);
}
function handleImageUpload(input) {
  const preview = document.getElementById("uploadPreview");
  if (input.files[0]) {
    const url = URL.createObjectURL(input.files[0]);
    preview.innerHTML = `<img src="${url}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;margin-top:8px">`;
    showToast("📸 Image uploaded!");
  }
}
function submitCakeOrder() {
  const name = document.getElementById("cakeName").value.trim();
  const phone = document.getElementById("cakePhone").value.trim();
  const flavor = document.getElementById("cakeFlavor").value;
  const weight = document.getElementById("cakeWeight").value;
  const occasion = document.getElementById("cakeOccasion").value;
  const date = document.getElementById("cakeDate").value;
  const message = document.getElementById("cakeMessage").value.trim();
  if (!name || !phone || !flavor || !weight || !occasion || !date) {
    showToast("⚠️ Please fill all required fields");
    return;
  }
  let msg = "Hello True Bites! 🎂 Custom Cake Order:%0A%0A";
  msg +=
    "Name: " +
    name +
    "%0APhone: " +
    phone +
    "%0AFlavor: " +
    flavor +
    "%0AWeight: " +
    weight +
    "%0AOccasion: " +
    occasion +
    "%0ARequired By: " +
    date;
  if (message) msg += "%0AMessage on Cake: " + encodeURIComponent(message);
  msg += "%0A%0APlease confirm availability and pricing. Thank you!";
  window.open("https://wa.me/919557880031?text=" + msg, "_blank");
}
function sendContactMessage() {
  const name = document.getElementById("contactName").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const msg = document.getElementById("contactMessage").value.trim();
  if (!name || !msg) {
    showToast("⚠️ Name and message are required");
    return;
  }
  let waMsg = "Hello True Bites! 📩 Enquiry:%0A%0AName: " + name;
  if (phone) waMsg += "%0APhone: " + phone;
  if (email) waMsg += "%0AEmail: " + email;
  waMsg += "%0A%0AMessage: " + encodeURIComponent(msg);
  window.open("https://wa.me/919557880031?text=" + waMsg, "_blank");
  showToast("✅ Opening WhatsApp...");
}
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}
window.addEventListener("scroll", () =>
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 20),
);
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
renderMenu();
