import ms_copilot_11 from "../assets/images_news/11_ms_copilot.webp";
import ms_win11_10 from "../assets/images_news/10_win11.webp";
import nintendo_9 from "../assets/images_news/9_nintendo.webp";
import printer_8 from "../assets/images_news/8_printer.webp";
import samsung_memory_8 from "../assets/images_news/8_samsung-memory.webp";
import msi_cpu_cooler1 from "../assets/images_news/7_MSI_cpu_cooler1.webp";
import msi_cpu_cooler2 from "../assets/images_news/7_MSI_cpu_cooler2.webp";
import blur_keyboard1 from "../assets/images_news/6_blur_keyboard1.webp";
import blur_keyboard2 from "../assets/images_news/6_blur_keyboard2.webp";
import blur_keyboard3 from "../assets/images_news/6_blur_keyboard3.webp";

import mark_hachman_img from "../assets/images_news/authors/person_8.webp";
import hans_christian_dirscherl_img from "../assets/images_news/authors/person_5.webp";
import mark_tyson_img from "../assets/images_news/authors/person_13.webp";
import marlon_medau_img from "../assets/images_news/authors/person_16.webp";
import laura_pippig_img from "../assets/images_news/authors/person_14.webp";
import julie_morales_img from "../assets/images_news/authors/person_17.webp";

export const newsPage_intro = {
   categoryBtnTitle: "SEE LATEST NEWS BY CATEGORY",
   title: "Latest News",
   // text: [""]
}

export const newsCategories_info = {
   all: { name: "All", url: "news" },
   digital: { name: "Digital", url: "digital" },
   gaming: { name: "Gaming", url: "gaming" },
   tech_hardware: { name: "Tech Hardware", url: "tech-hardware" },
   pc_peripherals: { name: "PC Peripherals", url: "pc-periherals" },
}

export const news_data = [
   {
      id: 11,
      category: String(newsCategories_info.digital.name),
      title: "Microsoft Copilot now has a face",
      subtitle: "We don't get it either.",
      promoTitle: "Microsoft Copilot now offers a friendlier, more engaging face for consumers, bringing a fresh, approachable feel to assistance.",
      article_imgObj: {
         img_author: "Windows",
         name: "MS Copilot Image",
         source: "https://unsplash.com/photos/female-on-her-microsoft-laptop-at-work-drinking-coffee-KXIWqtmvfxg",
         img: ms_copilot_11,
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: "Mark Hachman",
         img: mark_hachman_img,
      },
      date: "July 25, 2025",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            "First there was Clippy. Now Microsoft Copilot has a face, with reactions to what you tell it.",
            `Microsoft is showing off how Copilot could “look”: as an anthropomorphic teardrop of sorts, with expressions that react to your interactions in real time. The discovery was reported Friday by The Verge.`,
            `Right now, the new look of Copilot is being presented to a limited number of users. Microsoft’s web page shows how to discover if you have it: by opening Copilot, clicking the “mic” icon to launch verbal interactions with Copilot, then clicking the “gear,” or settings, icon. That will open up the options to toggle the “appearance” off or on.`,
            `“What if you could see Copilot react and speak as you chat?” Microsoft says. “With this experiment, we are bringing more non-verbal communication to Copilot, enhancing voice conversations with real-time visual expression. This early prototype allows you to chat, brainstorm, seek advice, or just mess around with Copilot, in a more engaging and expressive way.”`,
            `Right now, the new Copilot appearance option is just being offered to consumers, and not people who subscribe to a Microsoft 365 business plan.`,
            `Microsoft has tended to try and give its assistants a friendlier face, from the Office Assistant (which included Clippit/Clippy) as well as Microsoft Bob and its coterie of animated assistants. That didn’t go so well, however, when Microsoft launched and cancelled Microsoft Tay, its assistant who was quickly corrupted by internet trolls. Anthropomorphic mascots have also become a staple in some cultures, such as Japan.`,
            `Copilot already leans pretty heavily on emojis to communicate how it “feels.” Ironically, when Bing Search / Copilot was launched, it was pretty personable — probably too much. Now, it’s much more bland.`,
            `Will users clamor for a Clippy option? Why not? If you have opinions, let us know on our Facebook page or on Bluesky. We can promise that our PCWorld logo will remain just the static image it is.`,
            ``,
         ]
      }],
      source: {
         name: "PCWorld",
         url: "https://www.pcworld.com/article/2859508/microsoft-copilot-now-has-a-face.html"
      }
   }, {
      id: 10,
      category: newsCategories_info.digital.name,
      title: `Microsoft claims Windows 11 24H2 is the ‘most reliable’ Windows version ever`,
      subtitle: `But given the source and Windows 11 24H2's track record, it's hard not to be skeptical of the claim.`,
      promoTitle: "Windows 11 24H2 offers unprecedented reliability, making your system more stable with fewer unexpected restarts and improved performance.",
      article_imgObj: {
         img_author: "Philip Oroni",
         name: "Unsplash",
         source: "https://unsplash.com/photos/icon-NBQH9hYvCwY",
         img: ms_win11_10,
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: `Hans-Christian Dirscherl`,
         img: hans_christian_dirscherl_img,
      },
      date: "July 25, 2025",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            `In a recent Windows IT Pro blog post, Microsoft commented on the latest innovations in Windows 11, sparked by the optional July update (KB5062660) that brought several new features to Windows 11 24H2.`,
            `Some of the biggest improvements in update KB5062660 include Windows Recall for EU users, replacing the Blue Screen of Death, and a new feature called Quick Machine Recovery that helps repair Windows PCs that can’t boot in case of a widespread issue.`,
            `However, according to Microsoft, Windows 11 24H2 is much more than all of this, claiming that Windows 11 24H2 is “[the] most reliable version of Windows yet” while taking a subtle jab at Windows 10, surely hoping to convince Windows 10 holdouts to make the upgrade. Here’s what Microsoft has to say about it: "We’re also proud to share that Windows 11 24H2 is our most reliable version of Windows yet. Compared to Windows 10 22H2, failure rates for unexpected restarts have dropped by 24%."`,
            `The above statement cites “reliability telemetry collected by Microsoft,” which calls its veracity into question. Microsoft collects a lot of telemetry data, but it doesn’t know everything—especially when it comes to older versions of Windows prior to aggressive telemetry. For example, a comparison of Windows 11 to Windows 2000, NT, or XP isn’t possible.`,
            `It’s easy to see why Microsoft is only comparing Windows 11 with Windows 10. Microsoft has been pushing Windows 11 for a while now, and even though Windows 11 market share is increasing, Windows 10 users are either reluctant to make the switch or simply can’t upgrade due to Windows 11’s strict requirements.`,
            `So, sure, maybe Windows 11 24H2 actually is the “most reliable” Windows version of all time. Or maybe it isn’t. Who can really say? Given that Windows 11 24H2 has broken all kinds of stuff—including USB printers, audio output, Bluetooth connections, Windows Update, and Windows Firewall as recently as this month — we can’t fault anyone for being skeptical of Microsoft’s claim here.`,
         ]
      },],
      source: {
         name: "PCWorld",
         url: "https://www.pcworld.com/article/2859173/microsoft-claims-windows-11-24h2-is-the-most-reliable-version-ever.html"
      }
   }, {
      id: 9,
      category: newsCategories_info.gaming.name,
      title: "LEGO’s delightful Nintendo Game Boy tribute doesn’t need batteries",
      subtitle: "The perfectly-proportioned set includes swappable cartridges and lenticular screens. It'll release in October for $60.",
      promoTitle: "LEGO’s Nintendo Game Boy tribute set features swappable cartridges and lenticular screens, offering a nostalgic, battery-free experience for $60.",
      article_imgObj: {
         img_author: "Marlon Medau",
         name: "Unsplash",
         source: "https://unsplash.com/photos/a-nintendo-game-boy-with-a-card-and-a-case-I9D0KESaDR8",
         img: nintendo_9,
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: `Michael Crider`,
         img: marlon_medau_img,
      },
      date: "July 24, 2025",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            `If you’re old enough to remember the original, brick-like Game Boy, you’ll want to check out LEGO’s newest play for adult brickheads. The officially licensed Game Boy building set comes with 421 pieces, including two cartridges for Zelda and Mario games. While you can’t actually play them, you can swap out the simulated screens to match.`,
            `At 5.5 x 3.5 inches (14 x 9 centimeters, for those who live in civilized countries), the set is a near-perfect match for the original handheld from 1989, though the real thing is ever-so-slightly taller. The set includes a display stand for both the main body itself and the Legend of Zelda: Link’s Awakening and Super Mario Land cartridges. You get a choice of three swappable screens with lenticular black-and-white screenshots of the games or the boot screen, which simulate a bit of screen motion based on how you look at them.`,
            `Check out the serial number on the back of the battery bay. The Game Boy was first released in Japan on April 21st, 1989.`,
            `Considering that it’s a relatively small set, it’s impressive how faithfully the original hardware has been reproduced — even the slanted Start and Select buttons are accounted for with some clever use of ramped pieces. And at $60, it’s surprisingly cheap for a licensed Nintendo set. The far larger and more complex LEGO Nintendo Entertainment System, over 2500 pieces, cost $230 when it debuted in 2020.`,
            `LEGO is currently making a big play for nostalgia sets for adult builders. In addition to the Game Boy and NES, there’s an officially licensed Atari 2600, a Pac-Man arcade cabinet, and 80s cartoon staples like Transformers and Voltron. The new Game Boy set is up for pre-order now, shipping in October.`
         ]
      },],
      source: {
         name: "PCWorld",
         url: "https://www.pcworld.com/article/2858078/legos-delightful-nintendo-game-boy-tribute-doesnt-need-batteries.html"
      }
   }, {
      id: 8,
      category: newsCategories_info.tech_hardware.name,
      title: "Update your printer! Over 700 models actively being attacked by hackers",
      subtitle: "Printers by Brother, Toshiba, Fujifilm, Konica Minolta, and Ricoh are susceptible to attacks, thanks to dangerous security flaws.",
      promoTitle: "Over 700 printer models from Brother, Toshiba, Fujifilm, Konica Minolta, and Ricoh are vulnerable to hacker attacks. Update now!",
      article_imgObj: {
         img_author: "Jakub Żerdzicki",
         name: "Unsplash",
         source: "https://unsplash.com/photos/a-close-up-of-a-printer-on-a-table-Da9qsu-0a00",
         img: printer_8,
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: `Laura Pippig`,
         img: laura_pippig_img,
      },
      date: "July 24, 2025",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            `Back in June, security researchers from Rapid7 discovered several security vulnerabilities in over 700 different printer models that pose a risk to users. Printers from well-known brands — mostly Brother but also Fujifilm, Ricoh, Toshiba, and Konica Minolta — were named as affected.`,
            `Now things are getting serious as hackers are exploiting these security vulnerabilities to carry out real-world attacks. Among other things, they can find out the default password of a printer by reading out the serial number and thus gain admin access. This makes it possible to, for example, integrate printers into botnets, which are then exploited and used for further attacks.`,
            `The attacks appear to be both random and widespread. Any printer that’s affected by security vulnerabilities CVE-2024-51977 and CVE-2024-51978 is a perfect target for hackers.`
         ]
      }, {
         id_par: 2,
         heading: "Be sure to update your printers!",
         heading_imgObj: {
            img_author: "Samsung Memory",
            name: "Unsplash",
            source: "https://unsplash.com/photos/a-person-holding-a-device-bvxXJZnx24o",
            img: samsung_memory_8,
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            `As it stands right now, this is a serious wave of attacks that’s only going to gather its pace as more printers are taken over and exploited for further attacks. You may not even realize it’s happening to your printer.`,
            `If you want to protect yourself, the most important thing you can do is update your printer’s firmware to the latest version ASAP. The relevant manufacturers have already provided patches to resolve these vulnerabilities. You can find a list of all affected models here.`,
            `You should also change the admin password of your printer so that it can no longer be deduced from its serial number.`,
         ]
      },],
      source: {
         name: "PCWorld",
         url: "https://www.pcworld.com/article/2857923/update-your-printer-over-700-models-actively-being-attacked-by-hackers.html"
      }
   }, {
      id: 7,
      category: newsCategories_info.tech_hardware.name,
      title: "Amazon sells a legacy MSI CPU air cooler for $5,340",
      subtitle: "Are you willing to spend a fortune on old PC hardware?",
      promoTitle: "The mythical MSI Core Frozr L, an iconic piece of history, priced at $5,340.25 for PC nostalgia enthusiasts.",
      article_imgObj: {
         img_author: "Andrey Matveev",
         name: "Unsplash",
         source: "https://unsplash.com/photos/a-couple-of-coolers-sitting-on-top-of-a-table-e3w0E3od6xQ",
         img: msi_cpu_cooler1,
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "Matt's Paddock",
         name: "",
         source: "https://youtu.be/74G7ZxTmIIc?si=VPJda6WcU7GWouiU",
         video: "https://www.youtube.com/embed/74G7ZxTmIIc?si=Tucj0iMtcOBQvJY9",
      },
      article_authorObj: {
         name: `Julie Morales`,
         img: julie_morales_img,
      },
      date: "July 26, 2025",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            `MSI is returning to the air-cooling space with the MAG Core Frozr AA13, after a nearly 10-year break from its last release. However, it doesn’t mean that its old air cooler lineup has already disappeared — in fact, Amazon is still selling the MSI Core Frozr L for $5,340.25.`,
            `The Core Frozr L launched in 2016. Not only is it available, but you also have to pay a premium to get your hands on it. It’s currently priced at $5,340.25 on the online marketplace, a far cry from its $49.99 MSRP at launch. Even if you account for inflation, the cooler should only be priced at just $66.71.`,
            `The latest chips compatible with this air cooler are the 6th to 9th generation Intel Core processors and the AMD Ryzen 5000-series CPUs. While the newest Intel CPUs may no longer be compatible with this cooler, you can still make it work with AMD processors, such as the Ryzen 5 5500X3D, which was launched just last month.`,
         ]
      }, {
         id_par: 2,
         heading: "",
         heading_imgObj: {
            img_author: "Nassim Allia",
            name: "Unsplash",
            source: "https://unsplash.com/photos/black-and-red-speaker-with-blue-light-YZmbiNkvpBM",
            img: msi_cpu_cooler2,
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            `We wouldn’t recommend that, though, as we’re unsure how capable it is when it comes to the latest from Team Red, although the listing says it can dissipate up to 200W of heat from the CPU. At more than $5,000, that makes it more expensive than a decent gaming rig capable of playing games at 4K.`,
            `We’re not exactly sure why this listing is still available, especially at the price it’s advertised for. It’s also unlikely to be from a scammer, as it’s sold by and ships directly from Amazon. Perhaps Amazon has forgotten to revise the CPU cooler's pricing. Maybe it costs so much because it’s expected to be displayed in a collector's house. The Core Frozr L is far from being a piece of computer history, though.`,
            `Still, it would be interesting to see how a nearly 10-year-old cooler design performs compared to a modern gaming CPU, such as the Ryzen 7 9800X3D. If you have the cash, this is your chance to find out and acquire an antique PC component at the same time. We’ve already seen plenty of PC parts going for a crazy sum, like the Asus ROG Astral RTX 5090 Gold Edition, which costs nearly half a million dollars — let’s not give MSI any ideas.`,
         ]
      },],
      source: {
         name: "Tom's Hardware",
         url: "https://www.tomshardware.com/pc-components/air-cooling/amazon-sells-a-legacy-msi-cpu-air-cooler-for-usd5-340-the-core-frozr-l-launched-in-2016-with-a-usd50-msrp"
      }
   }, {
      id: 6,
      category: newsCategories_info.pc_peripherals.name,
      title: "BLUR Basecamp 75+ keyboard with potato-mode façade announced",
      subtitle: "The greasy-lens aesthetic is designed as ‘tribute to PS1-era motion and texture,’ explains maker Higround.",
      promoTitle: `Higround’s BLUR Basecamp 75+ keyboard combines retro gaming aesthetics with premium features: hot-swappable switches, dampening tech, RGB lighting.`,
      article_imgObj: {
         img_author: "Adrien",
         name: "Unsplash",
         source: "https://unsplash.com/photos/a-close-up-of-a-computer-keyboard-with-colorful-lights-D5kDcF1JvEM",
         img: blur_keyboard1,
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: `Mark Tyson`,
         img: mark_tyson_img,
      },
      date: " July 26, 2025",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            `Lifestyle computer peripheral brand, Higround, has launched what it describes as its “most unconventional design” yet. The new BLUR Basecamp 75+ keyboard seeks to recreate a highly stylized retro video game artifact, made real, for your desk (h/t PC Gamer). Don’t be fooled by the potato-mode graphics, though; underneath the hazy and distorted keycap legends, this is a hot-swappable, pre-lubed, dampened, thocky, enthusiast keyboard with customizable RGB.`,
            `Coming from a brand which was set up by enthusiasts “unsatisfied with the plain keyboards marketed to us,” Higround is no stranger to strange. The majority of the firm’s prior keyboard designs feature undulating or other abstract etchings atop the keycaps, with the meaningful legends visible on the front face. It looks like there is no such luxury on the BLUR Basecamp 75+, but the character blurring seems to be at the precise level where the glyphs remain distinguishable without too much squinting.`,
            `Of course, touch typists and even seasoned hunt-and-peckers only need the occasional glance at their hands, assuming there are finger nubs on the usual F and J home row keys. The keycaps are made from 1.5mm thick PBT with 5-sided dye-sub printing, making them relatively durable.`
         ]
      }, {
         id_par: 2,
         heading: "",
         heading_imgObj: {
            img_author: "Evgeniy Bezkorovayniy",
            name: "Unsplash",
            source: "https://unsplash.com/photos/a-glowing-keyboard-lights-up-the-dark-nChUss0P6oE",
            img: blur_keyboard2,
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            `While the makers mention that the look of this product is inspired by the graphics rendered by Sony’s revolutionary PS1 console, I can also vividly imagine one of the white-coated scientists in Golden Eye on N64 typing on something like this. PC Gamer thought the BLUR Basecamp 75+ looks like something out of Half-Life 1, naturally.`,
            `Enough about this input device’s appearance. What do you get under the blurriness? As we mentioned in the introduction, the BLUR Basecamp 75+ build appears to have significant appeal to keyboard aficionados.`,
         ]
      }, {
         id_par: 3,
         heading: "",
         heading_imgObj: {
            img_author: "Clovis Kurower",
            name: "Unsplash",
            source: "https://unsplash.com/photos/a-black-keyboard-on-a-desk-NDmlviPUOIw",
            img: blur_keyboard3,
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            `This is a 75% design, reportedly the first of its kind in this form factor from Higround – featuring a full complement of F-Row keys. The keyswitches chosen to drive this design are TTC’s HG Blitz models. We’ve never heard of these, but they are said to be “the ultimate gaming switch” with linear rail-guided travel for smooth actuation at 1.4mm and a bottom-out distance of 3.5mm. If you don’t like these pre-lubed 45g actuation force switches, at least you can quite easily swap them out.`,
            `Elsewhere in the specs, we see that the BLUR Basecamp 75+ is built on an aluminum plate, with five layers of ‘Dampening Plus’ materials like poly foam, silicone, and others. This is a wired (USB Type-C) keyboard with a US layout that features customizable RGB lighting, macro programming, and compatibility with macOS.`,
         ]
      },],
      source: {
         name: "Tom's Hardware",
         url: "https://www.tomshardware.com/peripherals/mechanical-keyboards/blur-basecamp-75-keyboard-with-potato-mode-facade-announced-the-appeal-is-literally-difficult-to-see"
      }
   }, {
      id: 5,
      category: "",
      title: "",
      subtitle: "",
      promoTitle: "",
      article_imgObj: {
         img_author: "",
         name: "",
         source: "",
         img: "",
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: ``,
         img: "",
      },
      date: "",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 2,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 3,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      },],
      source: {
         name: "",
         url: ""
      }
   }, {
      id: 4,
      category: "",
      title: "",
      subtitle: "",
      promoTitle: "",
      article_imgObj: {
         img_author: "",
         name: "",
         source: "",
         img: "",
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: ``,
         img: "",
      },
      date: "",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 2,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 3,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      },],
      source: {
         name: "",
         url: ""
      }
   }, {
      id: 3,

      category: "",
      title: "",
      subtitle: "",
      promoTitle: "",
      article_imgObj: {
         img_author: "",
         name: "",
         source: "",
         img: "",
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: ``,
         img: "",
      },
      date: "",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 2,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 3,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      },],
      source: {
         name: "",
         url: ""
      }
   }, {
      id: 2,
      category: "",
      title: "",
      subtitle: "",
      promoTitle: "",
      article_imgObj: {
         img_author: "",
         name: "",
         source: "",
         img: "",
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: ``,
         img: "",
      },
      date: "",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 2,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 3,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      },],
      source: {
         name: "",
         url: ""
      }
   }, {
      id: 1,
      category: "",
      title: "",
      subtitle: "",
      promoTitle: "",
      article_imgObj: {
         img_author: "",
         name: "",
         source: "",
         img: "",
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: ``,
         img: "",
      },
      date: "",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 2,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 3,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      },],
      source: {
         name: "",
         url: ""
      }
   }, {
      id: 0,
      category: "",
      title: "",
      subtitle: "",
      promoTitle: "",
      article_imgObj: {
         img_author: "",
         name: "",
         source: "",
         img: "",
      },
      article_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: ""
      },
      article_yt_videoObj: {
         video_author: "",
         name: "",
         source: "",
         video: "",
      },
      article_authorObj: {
         name: ``,
         img: "",
      },
      date: "",
      text: [{
         id_par: 1,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 2,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      }, {
         id_par: 3,
         heading: "",
         heading_imgObj: {
            img_author: "",
            name: "",
            source: "",
            img: "",
         },
         heading_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         heading_yt_videoObj: {
            video_author: "",
            name: "",
            source: "",
            video: ""
         },
         paragraphs: [
            ``,
            ``,
            ``
         ]
      },],
      source: {
         name: "",
         url: ""
      }
   },
]