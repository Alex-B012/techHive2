import hp_omen_16l from "./../../assets/images_pricing/pr02_pc/HP_OMEN_16L.webp"
import hp_omen_40l from "./../../assets/images_pricing/pr02_pc/HP_OMEN_40L.webp"
import asus_rog_g6700 from "./../../assets/images_pricing/pr02_pc/ASUS_ROG_ G700.webp"
import acer_nitro_60 from "./../../assets/images_pricing/pr02_pc/Acer_Nitro_60.webp"


export const pc_data = [
   {
      id: 20000001,
      category: "Computers",
      name: "OMEN 16L Gaming PC - White Metal",
      brand: "HP",
      model: "TG03-0009",
      rating: 4.5,
      price: {
         current: 169999,
         discount:
         {
            price: 179999,
            ends_days: 5,
         },
      },
      overview: [`The HP OMEN 16L gaming desktop PC delivers powerful performance in a compact design. Powered by an AMD Ryzen 7 8700F processor and 16GB DDR5 RAM, it ensures smooth gaming and multitasking. The NVIDIA GeForce RTX 5060 Ti graphics card with dedicated memory enhances immersion with seamless visuals. Multiple USB ports and Wi-Fi provide versatile connectivity options.`],
      about: [
         `AMD Ryzen 7 8700F processor and 16GB RAM deliver powerful, smooth performance for gaming, multitasking, and demanding applications`,
         `1TB solid state drive offers ample storage space for your files and media`,
         `Integrated NVIDIA GeForce RTX 5060 Ti graphics card with 16GB GDDR7 dedicated memory ensures fluid visuals`,
         `Realtek 10/100/1000/2500 GbE NIC, Wi-Fi 6, and Bluetooth 5.4 provide ultra-fast, reliable wired and wireless connectivity`,
         `Two USB Type-A 5Gbps, two USB Type-A 10Gbps, one USB Type-C 5Gbps, one USB Type-C 10Gbps, four USB 2.0 Type-A, HDMI, three DisplayPort, one headphone/microphone combo, and RJ-45 offer versatile connectivity options`,
         `OMEN light studio allows for customizable RGB lighting effects`,
         `OMEN AI provides personalized performance recommendations`,
         `Windows 11 Home offers a sleek, user-friendly interface with enhanced security, performance, and features`,
         `Includes HP USB white wired keyboard and mouse combo`,
      ],
      specifications: {
         os: {
            name: "Windows 11 Home",
            lang: "Bilingual (English, French)",
         },
         cpu: {
            brand: "AMD",
            type: "Ryzen 7 8700F",
            speed: "5.0 GHz",
            cores: 8,
            cache: "16 MB L3",
         },
         ram: {
            size: 16,
            type: "16 GB DDR5-5200 MT/s"
         },
         ssd: "1 TB",
         dedicated_gpu: "y",
         gpu: {
            brand: "NVIDIA",
            name: "GeForce RTX 5060 Ti 16GB",
            memory: 16
         },
         loaded_software: [
            "McAfee Online Protection 30-day trial",
            "1 month trial for new Microsoft 365 customers",
         ],
         cooling_system: "Air Cooling",
         power_supply: "500 W"

      },
      img: hp_omen_16l,
      warrenty: "1 year"
   },
   {
      id: 20000002,
      category: "Computers",
      name: "OMEN 40L GT21-0334",
      brand: "HP",
      model: "Omen 40L",
      rating: 4.7,
      price: {
         current: 149995,
         discount:
         {
            price: 0,
            ends_days: 0,
         },
      },
      overview: [`Equipped with an AMD RYZEN 7 5700G and NVIDIA GeForce RTX 3060, this powerhouse brings unrivalled performance and stunning graphics.`],
      about: [
         `AMD Ryzen 7 5700G (3.8 GHz base clock, up to 4.6 GHz max boost clock), 16 MB L3 cache, 8 cores, 16 threads`,
         `NVIDIA GeForce RTX 3060 with 12GB GDDR6 Graphics Card`,
         `32Gb DDR4 Corsair Vengeance LPX RAM 3600MHz (2 free slots)`,
         `1Tb SSD NVMe (Second M.2 slot is empty)`,
         `Realtek RTL8852AE Wifi 6 802.11`,
      ],
      specifications: {
         os: {
            name: "Windows 11",
            lang: "English",
         },
         cpu: {
            brand: "AMD",
            type: "Ryzen 7 5700G",
            speed: "3.80 GHz",
            cores: 8,
            cache: "",
         },
         ram: {
            size: 32,
            type: "",
         },
         ssd: "1024 GB",
         dedicated_gpu: "y",
         gpu: {
            brand: "NVIDIA",
            name: "RTX 3060",
            memory: 8
         },
         loaded_software: [
            "",
            "",
         ],
         cooling_system: "Air Cooling",
         power_supply: "",
      },
      img: hp_omen_40l,
      warrenty: "90 days"
   },
   {
      id: 20000003,
      category: "Computers",
      name: "ROG G700 Gaming PC",
      brand: "ASUS",
      model: "G700TF-BSU75070-CB",
      rating: 5,
      price: {
         current: 249999,
         discount:
         {
            price: 269999,
            ends_days: 5,
         },
      },
      overview: [`Enjoy top-tier gaming with the ASUS ROG G700 PC. It has an Intel Core Ultra 7 - 265F processor and a 32GB DDR5 RAM for smooth multitasking. The NVIDIA GeForce RTX 5070 PRIME treats you to stunning gameplay. Experience blazing-fast storage speeds with a 2TB solid state drive and seamless connectivity with Wi-Fi 6. Vibrant ROG RGB lighting elevates your setup.`],
      about: [
         `Intel Core Ultra 7 265F processor and 32GB DDR5 deliver exceptional gaming performance and are optimized for intensive multitasking`,
         `2TB M.2 2280 PCIe G4 solid state drive offers blazing-fast storage speeds and ample capacity`,
         `NVIDIA GeForce RTX 5070 PRIME graphics card with AI-powered optimization and 12GB video memory, offers impressive graphics performance and smooth gameplay`,
         `Wi-Fi 6 (802.11ax) dual band and Bluetooth 5.4 wireless card provide ultra-fast, stable connectivity and seamless device pairing`,
         `One USB 3.2 Gen 1 Type-C, two USB 3.2 Gen 1 Type-A, four USB 2.0 Type-A, one USB 3.2 Gen 2 Type-A, four USB 3.2 Gen 1 Type-A, and one USB 3.2 Gen 2 Type-C offer seamless data transfer and effortless peripheral integration`,
         `One headphone, one mic in, one RJ45 gigabit Ethernet, one DisplayPort 1.4, three audio jacks, three DP, and one HDMI provide versatile connectivity options`,
         `Quad-fan air cooling system with a clean path and included dust filters, offers optimized airflow for keeping your PC cool and reliable`,
         `Meticulously arranged RGB lighting creates a striking glow. It is complemented by full AURA Sync compatibility and distinctive ROG accents that enhance the chassis design`,
         `High definition 7.1 channel audio delivers immersive, crystal-clear sound, enhancing your gaming experience`,
         `Tool-free access to the side and front panels simplify cleaning, while standard-sized components make future upgrades a hassle-free process`,
         `Preloaded with Windows 11 Home operating system for an optimized and user-friendly interface with advanced gaming features`,
         `Includes gaming RGB keyboard and mouse`,
      ],
      specifications: {
         os: {
            name: "Windows 11",
            lang: "English",
         },
         cpu: {
            brand: "Intel",
            type: "Core Ultra 7 - 265F",
            speed: "2.4 GHz",
            cores: 20,
            cache: "30 MB",
         },
         ram: {
            size: 32,
            type: "DDR5",
         },
         ssd: "2 TB",
         dedicated_gpu: "y",
         gpu: {
            brand: "NVIDIA",
            name: "GeForce RTX 5070 PRIME 12GB GDDR7",
            memory: 12
         },
         loaded_software: [
            "",
            "",
         ],
         cooling_system: "Air Cooling",
         power_supply: "850W power supply (80+ Gold, peak 900W)",
      },
      img: asus_rog_g6700,
      warrenty: "1 year"
   },
   {
      id: 20000004,
      category: "Computers",
      name: "Nitro 60 Gaming PC",
      brand: "Acer",
      model: "N60-640-UR13",
      rating: 5,
      price: {
         current: 199999,
         discount:
         {
            price: 0,
            ends_days: 0,
         },
      },
      overview: [`Unlock your full gaming potential with the Acer Nitro 60 PC. Equipped with an Intel Core i7-14700F processor and 32GB RAM, it delivers powerful performance to effortlessly run advanced games. The 2TB solid state drive provides ample storage for all your files. The NVIDIA GeForce RTX 4060 graphics card ensures smooth, stunning visuals for an immersive gaming experience.`],
      about: [
         `Intel Core i7-14700F processor and 32GB RAM combine to deliver exceptionally powerful performance to enable smooth gaming`,
         `2TB solid state drive provides ultra-fast data access and ample storage space for large files, software, and games`,
         `NVIDIA GeForce RTX 4060 graphics card delivers powerful graphics performance for smooth gaming`,
         `Realtek 802.11ac and Bluetooth 4.2 provide fast, reliable wireless connectivity`,
         `One USB 3.2 Gen2 x 2 20Gbps, Type-C Port, one USB 3.2 Gen2 10Gbps Type A Port, two USB 3.2 Gen1 5Gbps Type A Ports, four USB 2.0 480Mbps ports, five audio jacks, PS/2 keyboard/mouse port, two SMA antenna connectors, and one HDMI 2.1a port, two audio ports (top), and one Ethernet RJ-45 Port offer a wide range of connectivity options`,
         `Realtek audio provides high-quality sound for an immersive gaming experience`,
         `Advanced air cooling system ensures optimal performance during intense tasks or gaming`,
         `Preinstalled with Windows 11 Home operating system that features easy user interface and provides enhanced performance and improved security`,
         `Includes USB keyboard and mouse`,
      ],
      specifications: {
         os: {
            name: "Windows 11",
            lang: "Bilingual (English, French)",
         },
         cpu: {
            brand: "Intel",
            type: "Core i7-14700F",
            speed: "5.4 GHz",
            cores: 20,
            cache: "33 MB Smart Cache",
         },
         ram: {
            size: 32,
            type: "DDR5",
         },
         ssd: "2 TB",
         dedicated_gpu: "y",
         gpu: {
            brand: "NVIDIA",
            name: "RTX 4060 8G",
            memory: 8,
         },
         loaded_software: [
            "",
            "",
         ],
         cooling_system: "Air Cooling",
         power_supply: "650W",
      },
      img: acer_nitro_60,
      warrenty: "1 year"
   },
]