export interface Computer {
   id: number;
   name: string;
   brand: string;
   model: string;
   rating: number;
   price: Price;
   overview: string[];
   about: string[];
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

export interface Specifications {
   os: OS;
   cpu: CPU;
   ram: RAM;
   ssd: string;
   dedicated_gpu: string;
   gpu: GPU;
   loaded_software: string[];
   cooling_system: string;
   power_supply: string;
}

