export type MenuItem = {
  name: string;
  price: string;
  note?: string;
  options?: string[];
};

export type MenuGroup = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const foodMenu: MenuGroup[] = [
  {
    title: "Indomie",
    note: "Goreng atau kuah",
    items: [
      {
        name: "Indomie Goreng / Kuah",
        price: "15K",
        options: ["Telur +5K", "Kornet +7K", "Sosis +7K"]
      }
    ]
  },
  {
    title: "Nasi",
    note: "Simple, hangat, cocok buat nongkrong",
    items: [
      {
        name: "Nasi Goreng",
        price: "15K",
        options: ["Telur +5K", "Kornet +7K", "Sosis +7K"]
      }
    ]
  }
];

export const snackMenu: MenuGroup[] = [
  {
    title: "Snacks",
    note: "Gorengan dan camilan meja",
    items: [
      { name: "Kentang Goreng", price: "20K" },
      { name: "Ubi Goreng", price: "20K" },
      { name: "Pisang Goreng Gula Aren", price: "20K", note: "4 pcs" },
      { name: "Tahu / Tempe Goreng", price: "15K", note: "4 pcs" }
    ]
  }
];

export const beverageMenu: MenuGroup[] = [
  {
    title: "Minuman Hangat",
    items: [
      { name: "Tuak", price: "5K" },
      { name: "Bandrek", price: "12K", options: ["Susu +3K"] },
      { name: "Teh Telur", price: "15K" },
      { name: "STMJ", price: "20K" }
    ]
  },
  {
    title: "Teh",
    items: [
      { name: "Teh Manis Panas", price: "7K" },
      { name: "Teh Manis Dingin", price: "10K" }
    ]
  },
  {
    title: "Kopi",
    items: [
      { name: "Kopi Tubruk", price: "12K" },
      { name: "Cappuccino", price: "18K" },
      { name: "Gula Aren", price: "25K" },
      { name: "Affogato", price: "18K" },
      { name: "Moccacino", price: "18K" },
      { name: "Matcha Latte", price: "25K" },
      { name: "Vanilla Latte", price: "25K" }
    ]
  }
];

export const packageMenu: MenuGroup[] = [
  {
    title: "Paket Nobar",
    note: "Nonton seru, ngemil asyik, ngopi nikmat",
    items: [
      { name: "Paket 1", price: "28K", note: "Indomie + telur + es teh" },
      { name: "Paket 2", price: "30K", note: "Pisang + kopi tubruk" },
      { name: "Paket 3", price: "33K", note: "Indomie + telur + bandrek + susu" }
    ]
  }
];
