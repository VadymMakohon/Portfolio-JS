const phoneData = {
  bestOverall: [
    {
      name: "Samsung Galaxy S24 Ultra",
      image: "Samsung-Galaxy-S24-Ultra.jpg",
      price: "$1,299",
      rating: "9.6",
      keyFeatures: [ "S Pen functionality",
        "Versatile camera system",
        "Large bright display",
        "Long battery life"],
      specs: {
        display: "6.8\" Dynamic AMOLED",
        processor: "Snapdragon 8 Gen 3",
        camera: "200MP Main",
        battery: "5000 mAh",
      },
    },
    {
      name: "iPhone 16 Pro Max",
      image: "Iphone-16-Pro-Max.jpg",
      price: "$1,199",
      rating: "9.5",
      keyFeatures: ["Titanium design",
      "Exceptional cameras",
      "Best-in-class performance",
      "Premium build quality"],
      specs: {
        display: "6.9\" Super Retina XDR",
        processor: "A18 Pro",
        camera: "48MP Main",
        battery: "4685 mAh",
      },
    },
    {
      name: "Google Pixel 9 Pro XL",
      image: "Pixel-9-Pro.jpg",
      price: "$1099",
      rating: "9.4",
      keyFeatures: ["Outstanding camera",
      "Clean Android experience",
      "AI features",
      "Great display"],
      specs: {
        display: "6.8\" LTPO OLED",
        processor: "Google Tensor G4",
        camera: "50MP Main",
        battery: "5060 mAh",
      },
    },
    {
      name: "OnePlus 12",
      image: "Oneplus12.jpg",
      price: "$799",
      rating: "9.3",
      keyFeatures: ["Smooth and fast user experience",
        "Sleek and modern design",
        "Dependable battery for extended use",
        "Excellent value for premium features",
       ],
      specs: {
        display: "6.82\" LTPO AMOLED",
        processor: "Snapdragon 8 Gen 3",
        camera: "50MP Main",
        battery: "5400 mAh",
      },
    },
    {
      name: "Nothing Phone 2",
      image: "Nothing-Phone-2-Back-Panel.jpg",
      price: "$599",
      rating: "8.9",
      keyFeatures: ["Stylish and unique design with innovative features",
      "Solid performance for daily use",
      "Long battery life with fast charging",
      "Affordable flagship experience"],
      specs: {
        display: "6.7\" OLED",
        processor: "Snapdragon 8+ Gen 1",
        camera: "50MP Main",
        battery: "4700 mAh",
      },
    }
  ],
  bestBudget: [
    {
      name: "Google Pixel 8a",
      image: "Pixel-8-A.jpg",
      price: "$499",
      rating: "8.7",
      keyFeatures: ["Affordable", "same Tensor G3 as flagship models", "compact design", "AI features"],
      specs: {
        display: "6.1\" OLED",
        processor: "Google Tensor G3",
        camera: "64MP Main",
        battery: "4492 mAh",
      },
    },
    {
      name: "Samsung Galaxy A55",
      image: "A55.jpg",
      price: "$299",
      rating: "8.5",
      keyFeatures: ["Vibrant display", "solid build", "all-day battery", "reliable performance"],
      specs: {
        display: "6.6\" Super AMOLED",
        processor: "Exynos 1480",
        camera: "50MP Main",
        battery: "5000 mAh",
      },
    },
    {
      name: "One-Plus Nord 3",
      image: "Nord-3.jpg",
      price: "$299",
      rating: "8.4",
      keyFeatures: ["Clean software","great performance","decent camera","fast charging"],
      specs: {
        display: "6.74\" Fluid AMOLED",
        processor: "Mediatek Dimensity 9000",
        camera: "50MP Main",
        battery: "5000 mAh",
      },
    },
    {
      name: "Xiaomi Redmi Note 13 Pro",
      image: "Note13pro.jpg",
      price: "$275",
      rating: "8.3",
      keyFeatures: ["Affordable","120Hz OLED display", "impressive cameras", "good battery life."],
      specs: {
        display: "6.67\" AMOLED",
        processor: "Qualcomm SM7435-AB Snapdragon 7s ",
        camera: "200MP Triple Camera",
        battery: "5100 mAh",
      },
    },
    {
      name: "Iphone SE (2022)",
      image: "SE.jpg",
      price: "$479",
      rating: "7.8",
      keyFeatures: ["For people who prefer IOS","reliable performance","compact size","long software support"],
      specs: {
        display: "4.7\" LCD",
        processor: "A15 Bionic",
        camera: "12MP Main Camera",
        battery: "2018 mAh",
      },
    }
  ],
  bestAndroid: [
    {
      name: "Samsung Galaxy S24 Ultra",
      image: "Samsung-Galaxy-S24-Ultra.jpg",
      price: "$1,299",
      rating: "9.6",
      keyFeatures: [ "S Pen functionality",
        "Versatile camera system",
        "Large bright display",
        "Long battery life"],
      specs: {
        display: "6.8\" Dynamic AMOLED",
        processor: "Snapdragon 8 Gen 3",
        camera: "200MP Main",
        battery: "5000 mAh",
      },
    },
    {
      name: "Google Pixel 9 Pro XL",
      image: "Pixel-9-Pro.jpg",
      price: "$1099",
      rating: "9.4",
      keyFeatures: ["Outstanding camera",
      "Clean Android experience",
      "AI features",
      "Great display"],
      specs: {
        display: "6.8\" LTPO OLED",
        processor: "Google Tensor G4",
        camera: "50MP Main",
        battery: "5060 mAh",
      },
    },
    {
      name: "OnePlus 12",
      image: "Oneplus12.jpg",
      price: "$799",
      rating: "9.3",
      keyFeatures: ["Smooth and fast user experience",
        "Sleek and modern design",
        "Dependable battery for extended use",
        "Excellent value for premium features",
       ],
      specs: {
        display: "6.82\" LTPO AMOLED",
        processor: "Snapdragon 8 Gen 3",
        camera: "50MP Main",
        battery: "5400 mAh",
      },
    },
    {
      name: "Google Pixel 9 ",
      image: "Pixel-9.jpg",
      price: "$799",
      rating: "9.0",
      keyFeatures: ["Exceptional AI Features",
                    "Outstanding Cameras",
                    "Long Software Support",
                    "Compact Design"],
      specs: {
        display: "6.3\" OLED",
        processor: "Google Tensor G4",
        camera: "50MP Main",
        battery: "4700 mAh",
      },
    },
    {
      name: "Nothing Phone 2",
      image: "Nothing-Phone-2-Back-Panel.jpg",
      price: "$599",
      rating: "8.9",
      keyFeatures: ["Stylish and unique design with innovative features",
      "Solid performance for daily use",
      "Long battery life with fast charging",
      "Affordable flagship experience"],
      specs: {
        display: "6.7\" OLED",
        processor: "Snapdragon 8+ Gen 1",
        camera: "50MP Main",
        battery: "4700 mAh",
      },
    },
  ],
  bestIOS: [
    {
      name: "iPhone 16 Pro Max",
      image: "Iphone-16-Pro-Max.jpg",
      price: "$1,199",
      rating: "9.5",
      keyFeatures: ["Titanium design",
      "Exceptional cameras",
      "Best-in-class performance",
      "Premium build quality"],
      specs: {
        display: "6.9\" Super Retina XDR OLED",
        processor: "A18 Pro",
        camera: "48MP Main",
        battery: "4685 mAh",
      },
    },
    {
      name: "iPhone 16 Pro",
      image: "Iphone-16-pro.jpg",
      price: "$999",
      rating: "9.3",
      keyFeatures: ["Titanium design",
      "Exceptional cameras",
      "Better Value than Max",
      "Premium build quality"],
      specs: {
        display: "6.3\" Super Retina XDR OLED",
        processor: "A18 Pro",
        camera: "48MP Main",
        battery: "3582 mAh",
      },
    },
    {
      name: "iPhone 16",
      image: "Iphone-16.jpg",
      price: "$799",
      rating: "9.0",
      keyFeatures: ["Large display, solid battery life", "improved ultrawide camera", "great value"],
      specs: {
        display: "6.1\" Super Retina XDR OLED",
        processor: "A18",
        camera: "48MP Main",
        battery: "3561 mAh",
      },
    },
    {
      name: "iPhone 15",
      image: "Iphone-15.jpg",
      price: "$699",
      rating: "8.9",
      keyFeatures: ["Solid performance",
        "Excellent Durability",
        "Good Camera Quality",
        "lighter titanium build",
      ],
      specs: {
        display: "6.1\" Super Retina XDR OLED",
        processor: "A16 Bionic",
        camera: "48MP Main",
        battery: "3348 mAh",
      },
    },
    {
      name: "Iphone SE (2022)",
      image: "SE.jpg",
      price: "$479",
      rating: "7.8",
      keyFeatures: ["Budget IOS","reliable performance","compact size","long software support"],
      specs: {
        display: "4.7\" LCD",
        processor: "A15 Bionic",
        camera: "12MP Main Camera",
        battery: "2018 mAh",
      },
    }
  ],
  bestCamera: [
    {
      name: "Samsung Galaxy S24 Ultra",
      image: "Samsung-Galaxy-S24-Ultra.jpg",
      price: "$1,299",
      rating: "9.6",
      keyFeatures: [ "S Pen functionality",
        "Versatile camera system",
        "Large bright display",
        "Long battery life"],
      specs: {
        display: "6.8\" Dynamic AMOLED",
        processor: "Snapdragon 8 Gen 3",
        camera: "200MP Main",
        battery: "5000 mAh",
      },
    },
    {
      name: "Google Pixel 9 Pro XL",
      image: "Pixel-9-Pro.jpg",
      price: "$1099",
      rating: "9.4",
      keyFeatures: ["Outstanding camera",
      "Clean Android experience",
      "AI features",
      "Great display"],
      specs: {
        display: "6.8\" LTPO OLED",
        processor: "Google Tensor G4",
        camera: "50MP Main",
        battery: "5060 mAh",
      },
    },
    {
      name: "iPhone 16 Pro Max",
      image: "Iphone-16-Pro-Max.jpg",
      price: "$1,199",
      rating: "9.5",
      keyFeatures: ["Titanium design",
      "Exceptional cameras",
      "Best-in-class performance",
      "Premium build quality"],
      specs: {
        display: "6.9\" Super Retina XDR",
        processor: "A18 Pro",
        camera: "48MP Main",
        battery: "4685 mAh",
      },
    },
    {
      name: "Oppo Find X7 ULTRA",
      image: "Oppo.jpg",
      price: "~$850",
      rating: "8.8",
      keyFeatures: ["Stunning 50MP sensors"," superior telephoto", "great exposure control", "stylish build"],
      specs: {
        display: "6.82\" LTPO AMOLED",
        processor: "Qualcomm SM8650-AB Snapdragon 8 Gen 3",
        camera: "50MP Main",
        battery: "5000 mAh",
      },
    },
    {
      name: "Sony Xperia 1 VI",
      image: "Sony.jpg",
      price: "$950",
      rating: "8.7",
      keyFeatures: ["Pro-level controls", "sharp zoom", "high-quality 4K video","great for creators."],
      specs: {
        display: "6.65\" LTPO AMOLED",
        processor: "Qualcomm SM8650-AB Snapdragon 8 Gen 3",
        camera: "48MP Main",
        battery: "5000 mAh",
      },
    }
  ],
};
function createPhoneCard(phone) {
  const keyFeaturesList = phone.keyFeatures.map(feature => `<li>${feature}</li>`).join('');
  return `
    <div class="phone-card">
      <img src="${phone.image}" alt="${phone.name}" class="phone-image">
      <div class="phone-rating">${phone.rating}/10</div>
      <div class="phone-content">
        <h3 class="phone-title">${phone.name}</h3>
        <p class="phone-price">${phone.price}</p>
        <div class="phone-specs">
          <p>📱 Display: ${phone.specs.display}</p>
          <p>⚡ Processor: ${phone.specs.processor}</p>
          <p>📸 Camera: ${phone.specs.camera}</p>
          <p>🔋 Battery: ${phone.specs.battery}</p>
        </div>
          <div class="key-features">
          <h4>Key Features:</h4>
          <ul>${keyFeaturesList}</ul>
        </div>
      </div>
    </div>
  `;
}
function createCategorySection(title, phones) {
  return `
    <section class="category-section" id="${title.toLowerCase().replace(/\s+/g, '-')}">
      <h2 class="category-title">${title}</h2>
      <div class="phones-grid">
        ${phones.map(phone => createPhoneCard(phone)).join('')}
      </div>
    </section>
  `;
}
function initializeApp() {
  const mainContent = document.getElementById('main-content');
  const categories = Object.entries(phoneData).map(([key, phones]) => {
    const title = key.replace(/([A-Z])/g, ' $1').trim();
    return createCategorySection(title, phones);
  });
  mainContent.innerHTML = categories.join('');
}
document.addEventListener('DOMContentLoaded', initializeApp);