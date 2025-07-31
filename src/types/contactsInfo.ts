export interface BusinessHours {
   id: number;
   days: string;
   hours: string;
}

export interface ContactsInfo {
   company_name: string,
   phone: string,
   address: {
      street: string,
      city: string,
      state: string,
      zipcode: string,
      country: string
   },
   email: string,
   business_hours: BusinessHours[]
}