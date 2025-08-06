import laptop_img from "../../assets/images_product_categories/laptop.webp"
import pc_img from "../../assets/images_product_categories/pc.webp"
import gamepads_img from "../../assets/images_product_categories/gamepads.webp"
import vr_img from "../../assets/images_product_categories/vr.webp"
import cgu2_img from "../../assets/images_product_categories/gpu2.webp"
import cpu_img from "../../assets/images_product_categories/cpu.webp"
import keyboard_img from "../../assets/images_product_categories/keyboard.webp"
import screen_img from "../../assets/images_product_categories/screen.webp"

import cat_cpu_img from "../../assets/images_pricing/pr00_cat_imgs/cat_cpu_img.webp"
import cat_gamepad_img from "../../assets/images_pricing/pr00_cat_imgs/cat_gamepad_img.webp"
import cat_gpu_img from "../../assets/images_pricing/pr00_cat_imgs/cat_gpu_img.webp"
import cat_keyboard_img from "../../assets/images_pricing/pr00_cat_imgs/cat_keyboard_img.webp"
import cat_monitor_img from "../../assets/images_pricing/pr00_cat_imgs/cat_monitor_img.webp"
import cat_vr_img from "../../assets/images_pricing/pr00_cat_imgs/cat_vr_img.webp"
import lenovo_p16v from "../../assets/images_pricing/pr01_laptops/Lenovo_P16v.webp"
import asus_tog_g700 from "../../assets/images_pricing/pr02_pc/ASUS_ROG_ G700.webp"



export const navigationLinksArr = [
   { name: "All", url: "pricing", section: "Pricing" },
   { name: "Laptops", url: "laptops", section: "Pricing" },
   { name: "Computers", url: "computers", section: "Pricing" },
   { name: "Gaming Controller", url: "gamingcontroller", section: "Pricing" },
   { name: "VR", url: "vr", section: "Pricing" },
   { name: "Graphics Cards", url: "graphicscards", section: "Pricing" },
   { name: "Processors", url: "processors", section: "Pricing" },
   { name: "Input Devices", url: "inputdevices", section: "Pricing" },
   { name: "Displays", url: "displays", section: "Pricing" },
]

export const productCategories_data = [{
   id: 1,
   name: "Laptops",
   promo: {
      home: {
         text: `A wide selection of laptops to suit every need - whether for work, study, gaming, or entertainment. Discover powerful, stylish, and reliable models from top brands, all at great prices.`,
         img: laptop_img,
      },
      pricing_cat: {
         text: "Save up to $300 on select laptops.",
         img: lenovo_p16v,
      },
   },
   desc: "",
}, {
   id: 2,
   name: `Computers`,
   promo: {
      home: {
         text: `High-performance gaming PCs designed for immersive gameplay. Featuring powerful processors, top-tier graphics, and customizable options, these systems deliver smooth, responsive gaming experiences at competitive prices.`,
         img: pc_img,
      },
      pricing_cat: {
         text: "Upgrade your workspace and save up to $450 on desktops.",
         img: asus_tog_g700,
      },
   },
   desc: "",
}, {
   id: 3,
   name: `Gaming Controller`,
   promo: {
      home: {
         text: `Top-rated gamepads and controllers for all your gaming adventures. Experience precise control, comfort, and reliability for an enhanced gaming experience across all platforms.`,
         img: gamepads_img,
      },
      pricing_cat: {
         text: "Level up your gameplay and save up to $40 on gamepads.",
         img: cat_gamepad_img,
      },
   },
   desc: "",
}, {
   id: 4,
   name: "VR",
   promo: {
      home: {
         text: `Advanced VR gear for a truly immersive experience. Offering headsets, controllers, and accessories, all designed for high-quality gaming, entertainment, and professional use.`,
         img: vr_img,
      },
      pricing_cat: {
         text: "Experience next-gen VR and save up to $300 on select devices.",
         img: cat_vr_img,
      },
   },
   desc: "",
}, {
   id: 5,
   name: "Graphics Cards",
   promo: {
      home: {
         text: `Top-tier GPUs that elevate your gaming and creative work. Designed for high-quality rendering, exceptional speed, and flawless performance, ideal for both casual and professional use.`,
         img: cgu2_img,
      },
      pricing_cat: {
         text: "Save up to $350 on high-performance graphics cards.",
         img: cat_gpu_img,
      },
   },
   desc: "",
}, {
   id: 6,
   name: "Processors",
   promo: {
      home: {
         text: `Powerful CPUs engineered for performance and efficiency. From gaming to creative workflows, these processors provide the speed and reliability needed for every task.`,
         img: cpu_img,
      },
      pricing_cat: {
         text: "Save up to $450 on top-tier CPUs",
         img: cat_cpu_img,
      },
   },
   desc: "",
}, {
   id: 7,
   name: "Input Devices",
   promo: {
      home: {
         text: `Keyboards designed for precision, speed, and comfort. From mechanical to wireless options, perfect for gaming, productivity, and professional tasks that require responsive and reliable input`,
         img: keyboard_img,
      },
      pricing_cat: {
         text: "Save up to $150 on customizable RGB keyboards",
         img: cat_keyboard_img,
      },
   },
   desc: "",
}, {
   id: 8,
   name: "Displays",
   promo: {
      home: {
         text: `Cutting-edge monitors with ultra-sharp resolution, perfect for gaming, design, and productivity. Experience smooth, vibrant displays with high refresh rates for a top-tier visual experience`,
         img: screen_img,
      },
      pricing_cat: {
         text: "Upgrade to ultra-clear resolution and save up to $300 on monitors.",
         img: cat_monitor_img,
      },
   },
   desc: "",
},]
