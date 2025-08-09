export interface Computer {
   id: number;
   category: string;
   name: string;
   brand: string;
   model: string;
   rating: number;
   price: PriceComputer;
   overview: string[];
   about: AboutFeature[];
   specifications: SpecificationsComputer;
   img: string;
}

export interface PriceComputer {
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

export interface AboutFeature {
   id: number;
   heading: string;
   text: string;
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

export interface SpecificationsComputer {
   os: OS;
   cpu: CPU;
   ram: RAM;
   ssd: string;
   dedicated_gpu: string;
   gpu: GPU;
   loaded_software: string[];
   cooling_system: string;
   power_supply: string;
   warrenty: string;
}

