// Основной интерфейс для ноутбука
export interface Laptop {
   id: number;
   name: string;
   brand: string;
   model: string;
   rating: number;
   price: Price;
   overview: string[];
   about: Feature[];
   specifications: Specifications;
   img: string;
   warrenty: string;
}

export interface Price {
   current: number;
   discount?: Discount;
}

export interface Discount {
   price: number;
   ends_days: number;
}

export interface OS {
   name: string;
   lang: string;
}

export interface Feature {
   id: number;
   heading: string;
   text: string;
}

export interface Display {
   size: number;
   resolution: string;
   touchscreen: string;
   hybrid_display: string;
   display_features: string[];
}

export interface CPU {
   brand: string;
   type: string;
   speed: string;
   cores: number;
   cache: string;
}

export interface RAM {
   size: number;
   type: string;
}

export interface GPU {
   brand: string;
   name: string;
   memory: number;
}

export interface Dimensions {
   cm: {
      w: number;
      h: number;
      d: number;
   };
   in: {
      w: number;
      h: number;
      d: number;
   };
}

export interface Keyboard {
   lang: string;
   backlit: string;
}

export interface Weight {
   kg: number;
   lbs: number;
}

export interface Specifications {
   os: OS;
   display: Display;
   cpu: CPU;
   ram: RAM;
   ssd: string;
   dedicated_gpu: string;
   gpu: GPU;
   loaded_software: string[];
   cooling_system: string;
   power_supply: string;
   frame_color: string;
   demensions: Dimensions;
   keyboard: Keyboard;
   webcam: string;
   weight: Weight;
}


