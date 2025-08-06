import banner_connect from "../../assets/images_pricing/banner_connect.webp"
import banner_together from "../../assets/images_pricing/banner_together.webp"
import banner_evening from "../../assets/images_pricing/banner_evening.webp"

import { laptops_data } from "./pr01_laptops"
import { pc_data } from "./pr02_pc"

export const banner_info = [
   {
      id: 1, title: "Bring People Together!",
      subtitle: { line1: "Bring joy to every moment ", line2: " with those who matter" },
      img: {
         name: "Friends together",
         url: banner_connect,
      }
   },
   {
      id: 2, title: "Ignite Joy Inside!",
      subtitle: { line1: "Together we create joy and", line2: " unforgettable memories" },
      img: {
         name: "Watching TV",
         url: banner_together,
      }
   },
   {
      id: 3, title: "Bond Beyond Words!",
      subtitle: { line1: "Foster a deeper connection with ", line2: " moments of shared serenity" },
      img: {
         name: "Evening together",
         url: banner_evening,
      }
   },]

export const products_data = {
   laptops: laptops_data,
   computers: pc_data,
}

// Our hottest offers
// Popular picks for Back to School
// Shop by category