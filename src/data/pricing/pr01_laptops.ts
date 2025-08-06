import lenovo_p16v from "../../assets/images_pricing/pr01_laptops/Lenovo_P16v.webp"
import lg_gram_business from "../../assets/images_pricing/pr01_laptops/LG_Gram_Business.webp"
import Panasonic_ToughBook_FZ_55 from "../../assets/images_pricing/pr01_laptops/Panasonic_ToughBook_FZ-55.webp"
import dell_alienware_x14 from "../../assets/images_pricing/pr01_laptops/dell_alienware_x14.webp"

export const laptops_data = [
   {
      id: 1,
      name: `ThinkPad P16v Gen 2 16"`,
      brand: "Lenovo",
      model: "21KX0021US",
      rating: 0,
      price: {
         current: 295999,
         discount:
         {
            price: 344399,
            ends_days: 12,
         },
      },
      overview: [`Designed for innovators and professionals, the 16″ ThinkPad P16v Gen 2 mobile workstation packs the power of Intel Core Ultra processors with Intel vPro and AI-ready integrated Neuro Processing Unit (NPU) for anything you want to do. Even better — it boasts OS alternatives, embracing performance, versatility, mobility, and affordability.`],
      about: [
         {
            id: 1,
            heading: "Versatile Workstation for Smart Work",
            text: `Designed for innovators and professionals, the 16″ ThinkPad P16v Gen 2 mobile workstation packs the power of Intel Core Ultra processors with Intel vPro and AI-ready integrated Neuro Processing Unit (NPU) for anything you want to do. Even better — it boasts OS alternatives, embracing performance, versatility, mobility, and affordability.`
         },
         {
            id: 2,
            heading: `Execute Workloads Like a Boss`,
            text: `Now, multitask and execute complex workflows in AI effortlessly with up to NVIDIA RTX 3000 Ada laptop GPUs. Produce high-quality images and animations, and create high-end 3D visualizations, thanks to vast memory and storage options. Also, this mobile workstation runs software optimally as it is Independent Software Vendor (ISV)* certified.`
         },
         {
            id: 3,
            heading: `Embark on a Stunning Visual Journey`,
            text: `With entry-level to premium display options, narrow bezels for an unobstructed gaze, and a range of brightness and color gamut options, this 16″ ThinkPad mobile workstation is a visual powerhouse. Choose a 5MP + infrared webcam to enjoy stunning clarity during video calls with HDR400 and Dolby Vision and elevate online meetings.`
         },
         {
            id: 4,
            heading: `User Experience Functionality Reimagined`,
            text: `With a spill-resistant, full-sized backlit keyboard containing a numeric pad, LED on some keys, and a large TrackPad (115mm / 4.53″), the 16″ ThinkPad P16v Gen 2 workstation is engineered for accessibility, functionality, and usability. Add a Thunderbolt 4 Docking station to expand your useable visual real estate with one or two external displays.`
         },
         {
            id: 5,
            heading: `Your Connectivity Playground`,
            text: `Access designs and move large files at lightning-fast data transfer speed (up to 40Gbps) of Thunderbolt 4. Delve into seamless online interactions on WiFi, Ethernet, or 4G. Instantly transfer photos from your phone to the device with Magic Move, and sync data to your workstation with just a tap or swipe via Near Field Communication (NFC)*.`
         },
         {
            id: 6,
            heading: `Fearless in Security, Durability, & Form`,
            text: `Protected by ThinkShield, the ThinkPad P16v Gen 2 mobile workstation includes a fingerprint reader for easy log in and self-healing BIOS to restore earlier system settings. It is MIL-SPEC tested for ultimate durability, energy efficient with several certifications including EPEAT Gold, and comprises recycled components and plastic-free packaging.`
         },
      ],
      specifications: {
         os: {
            name: "Windows 11 Pro",
            lang: "English",
         },
         display: {
            size: 1600,
            resolution: "1920 x 1200",
            touchscreen: "n",
            hybrid_display: "n",
            display_features: [
               "IPS 400nits Anti-glare",
               "100% sRGB",
               "TÜV Low Blue Light"
            ]
         },
         cpu: {
            brand: "Intel",
            type: "Core Ultra 7 155H",
            speed: "",
            cores: 16,
            cache: "24 MB",
         },
         ram: {
            size: 16,
            type: "",
         },
         ssd: "512 GB",
         dedicated_gpu: "y",
         gpu: {
            brand: "NVIDIA",
            name: "RTX 1000 Ada Generation",
            memory: 0,
         },
         loaded_software: [
            "Lenovo Commercial Vantage",
            "Lenovo Performance Tuner",
            "Lenovo View, Office 365(trial)",
         ],
         cooling_system: "",
         power_supply: "",
         frame_color: "Black",
         demensions: {
            cm: {
               w: 3650,
               h: 246,
               d: 2620
            },
            in: {
               w: 1437,
               h: 97,
               d: 1031
            }
         },
         keyboard: {
            lang: "English",
            backlit: "y"
         },
         webcam: "y",
         weight: {
            kg: 222,
            lbs: 489
         },

      },
      img: lenovo_p16v,
      warrenty: "1 year"
   },
   {
      id: 2,
      name: `Gram Business Laptop, 17"`,
      brand: "LG",
      model: "Gram 17Zxxx019",
      rating: 0,
      price: {
         current: 247973,
         discount:
         {
            price: 217973,
            ends_days: 7,
         },
      },
      overview: [`LG Gram Windows 11 Pro Business Intel i7-1260P 4TB 16GB 17IN 350 nit Thunderbolt 4 Fullsize Backlit Keyboard with Numpad Numeric Keypad DDR5 SDRAM.`],
      about: [
         {
            id: 1,
            heading: "LG Gram Business Laptop",
            text: `The LG Gram Business Laptop offers powerful performance with a 17" WQXGA display (2560 x 1600) and Intel i7-1260P 12-core processor (up to 4.7 GHz). It features 16GB DDR5 RAM, 4TB NVMe SSD, and Intel Iris Xe Graphics. Running Windows 11 Pro, it provides up to 12 hours of battery life and includes Thunderbolt 4 ports, Bluetooth 5.1, and a backlit keyboard. Weighing just 1.35 kg, it's designed for professionals on the go.`
         },
      ],
      specifications: {
         os: {
            name: "Windows 11 Pro",
            lang: "English",
         },
         display: {
            size: 1700,
            resolution: "2560 x 1600",
            touchscreen: "n",
            hybrid_display: "n",
            display_features: [
               "",
            ]
         },
         cpu: {
            brand: "Intel",
            type: "i7-1260P 12 Cores",
            speed: "",
            cores: 12,
            cache: "",
         },
         ram: {
            size: 16,
            type: "",
         },
         ssd: "4096 GB",
         dedicated_gpu: "y",
         gpu: {
            brand: "",
            name: "",
            memory: 0,
         },
         loaded_software: [
            "",
         ],
         cooling_system: "",
         power_supply: "",
         frame_color: "Grey",
         demensions: {
            cm: {
               w: 0,
               h: 0,
               d: 0,
            },
            in: {
               w: 0,
               h: 0,
               d: 0
            }
         },
         keyboard: {
            lang: "",
            backlit: ""
         },
         webcam: "y",
         weight: {
            kg: 0,
            lbs: 0,
         },

      },
      img: lg_gram_business,
      warrenty: "1 year"
   },
   {
      id: 3,
      name: `ToughBook FZ-55 MK1 14"`,
      brand: "Panasonic",
      model: "ToughBook FZ-55 MK1",
      rating: 3,
      price: {
         current: 139900,
         discount:
         {
            price: 199900,
            ends_days: 2,
         },
      },
      overview: [`PANASONIC ToughBook FZ-55 MK1 Rugged Laptop 14" Non-Touch Screen i5 i5-8365U 4-Core Processor 1.6GHz (4.1GHz With Turbo Boost) 1TB (1TB (1000GB)) SSD & 32GB RAM Memory HD 1366x768 resolution Non-Touch with an integrated Webcam. The graphics chip is integrated on the computer's processor. Win 10 Pro comes preinstalled`],
      about: [
         {
            id: 1,
            heading: "",
            text: `PANASONIC ToughBook FZ-55 MK1 Rugged Laptop 14" Non-Touch Screen`
         }, {
            id: 2,
            heading: "",
            text: `i5 i5-8365U 4-Core Processor 1.6GHz (4.1GHz With Turbo Boost)`
         }, {
            id: 3,
            heading: "",
            text: `1TB (1TB (1000GB)) SSD & 32GB RAM Memory`
         }, {
            id: 4,
            heading: "",
            text: `HD 1366x768 resolution Non-Touch with an integrated Webcam. The graphics chip is integrated on the computer's processor`
         }, {
            id: 5,
            heading: "",
            text: `Win 10 Pro comes preinstalled`
         },
      ],
      specifications: {
         os: {
            name: "Windows 10 Pro",
            lang: "",
         },
         display: {
            size: 1400,
            resolution: "1366 x 768",
            touchscreen: "n",
            hybrid_display: "n",
            display_features: [
               "",
            ]
         },
         cpu: {
            brand: "Intel",
            type: "i5-8365U",
            speed: "1.6 GHz",
            cores: 4,
            cache: "",
         },
         ram: {
            size: 32,
            type: "",
         },
         ssd: "1000 GB",
         dedicated_gpu: "",
         gpu: {
            brand: "",
            name: "",
            memory: 0,
         },
         loaded_software: [
            "",
         ],
         cooling_system: "",
         power_supply: "",
         frame_color: "",
         demensions: {
            cm: {
               w: 0,
               h: 0,
               d: 0,
            },
            in: {
               w: 0,
               h: 0,
               d: 0
            }
         },
         keyboard: {
            lang: "",
            backlit: ""
         },
         webcam: "y",
         weight: {
            kg: 900,
            lbs: 1984,
         },
      },
      img: Panasonic_ToughBook_FZ_55,
      warrenty: "1 year"
   }, {
      id: 4,
      name: `Alienware X14 R1 14"`,
      brand: "Dell",
      model: "MNAOX14_H1200M2E",
      rating: 4.3,
      price: {
         current: 250000,
         discount:
         {
            price: 189900,
            ends_days: 34,
         },
      },
      overview: [`The Alienware x14 Gaming Laptop features a powerful 12th Gen Intel® Core™ i7-12700H processor with 14 cores, up to 4.7 GHz. It boasts a 14" FHD 144Hz display with NVIDIA G-SYNC, 32GB LPDDR5 RAM, and a 1TB PCIe NVMe SSD. Powered by NVIDIA GeForce RTX 3060 (6GB), it runs Windows 11 Home and supports Wi-Fi 6E and Bluetooth for seamless connectivity.`],
      about: [
         {
            id: 1,
            heading: "",
            text: `12th Gen Intel® Core™ i7-12700H (24 MB cache, 14 cores, 20 threads, up to 4.70 GHz Turbo)`
         }, {
            id: 2,
            heading: "",
            text: `14", FHD 1920x1080, 144Hz, Non-Touch, 3ms, Advanced Optimus, ComfortView Plus, NVIDIA G-SYNC`
         }, {
            id: 3,
            heading: "",
            text: `32 GB, LPDDR5, 5200 MHz, integrated, dual-channel`
         }, {
            id: 4,
            heading: "",
            text: `1 TB, M.2, PCIe NVMe, SSD`
         }, {
            id: 5,
            heading: "",
            text: `NVIDIA® GeForce RTX™ 3060, 6 GB GDDR6`
         }, {
            id: 6,
            heading: "",
            text: `Windows 11 Home, English`
         }, {
            id: 7,
            heading: "",
            text: `Intel® Wi-Fi 6E AX211, 2x2, 802.11ax, MU-MIMO, Bluetooth® wireless card`
         },
      ],
      specifications: {
         os: {
            name: "Windows 11 Home",
            lang: "English",
         },
         display: {
            size: 1400,
            resolution: "1920x1080",
            touchscreen: "n",
            hybrid_display: "n",
            display_features: [
               "144Hz, Non-Touch, 3ms, Advanced Optimus, ComfortView Plus, NVIDIA G-SYNC",
            ]
         },
         cpu: {
            brand: "Intel",
            type: "Core™ i7-12700H",
            speed: "up to 4.70 GHz Turbo",
            cores: 14,
            cache: "24 MB cache",
         },
         ram: {
            size: 32,
            type: "LPDDR5, 5200 MHz, integrated, dual-channel",
         },
         ssd: "1000 GB",
         dedicated_gpu: "",
         gpu: {
            brand: "NVIDIA",
            name: "GeForce RTX™ 3060, 6 GB GDDR6",
            memory: 6,
         },
         loaded_software: [
            "",
         ],
         cooling_system: "",
         power_supply: "",
         frame_color: "Lunar Light",
         demensions: {
            cm: {
               w: 0,
               h: 0,
               d: 0,
            },
            in: {
               w: 0,
               h: 0,
               d: 0
            }
         },
         keyboard: {
            lang: "",
            backlit: ""
         },
         webcam: "n",
         weight: {
            kg: 0,
            lbs: 0,
         },
      },
      img: dell_alienware_x14,
      warrenty: "1 year"
   },
]