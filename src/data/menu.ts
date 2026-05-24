export type MenuGroup = {
  title: string;
  note?: string;
  items: {
    name: string;
    image?: string;
    options?: string[];
    note?: string;
  }[];
};

export const foodMenu: MenuGroup[] = [
  {
    title: "Kari",
    note: "Choose one base or ask for all.",
    items: [{ name: "Kari", image: "/images/menu/kari.png", options: ["Nasi", "Bubur", "Mie Gomak", "Bihun"] }]
  },
  {
    title: "Sup",
    note: "Choose one base or ask for all.",
    items: [{ name: "Sup", image: "/images/menu/sup.png", options: ["Nasi", "Bubur", "Mie Gomak", "Bihun"] }]
  },
  {
    title: "Ngarok Siak Tolu",
    note: "Pick one meat or fish main.",
    items: [
      {
        name: "Ngarok Siak Tolu",
        image: "/images/menu/ngarok-siak-tolu.png",
        options: ["Babi", "Ikan Mujahir", "Ayam"],
        note: "Served with Sambal Matah, Sambal Andaliman, and Sambal Tempong."
      }
    ]
  },
  {
    title: "Goreng",
    items: [
      { name: "Goreng XO", image: "/images/menu/goreng-xo.png", options: ["Nasi", "Mie Gomak Lidi", "Bihun", "Ifumie", "Kwetiaw"] },
      {
        name: "Goreng Kampung",
        image: "/images/menu/goreng-kampung.png",
        options: ["Nasi", "Mie Gomak Lidi", "Bihun", "Ifumie", "Kwetiaw"]
      },
      {
        name: "Goreng Andaliman",
        image: "/images/menu/goreng-andaliman.png",
        options: ["Nasi", "Mie Gomak Lidi", "Bihun", "Ifumie", "Kwetiaw"]
      }
    ]
  }
];

export const beverageMenu: MenuGroup[] = [
  {
    title: "Signature Drinks",
    items: [{ name: "Tuak" }, { name: "Bandrek" }]
  },
  {
    title: "Teh",
    note: "Panas or dingin. Dingin +2K.",
    items: [{ name: "Teh", options: ["Camomile", "Melati", "Oolong"] }]
  },
  {
    title: "Kopi",
    note: "Panas or dingin. Dingin +2K.",
    items: [{ name: "Kopi", options: ["Cappucino", "Moccacino", "Gula Aren", "Matcha Latte", "Affogato"] }]
  }
];

export const snackMenu: MenuGroup[] = [
  {
    title: "Bites",
    items: [
      { name: "Dimsum" },
      { name: "Oreo Goreng dengan Gelato", options: ["Vanila", "Caramel Hazelnut"] },
      { name: "Pisang Goreng Gula Aren" }
    ]
  },
  {
    title: "Gorengan",
    items: [
      {
        name: "Kentang Goreng",
        options: ["Cheese", "Sambal teri kacang", "Bacon + Cheese", "Bacon + Sambal andaliman"]
      },
      {
        name: "Ubi Goreng",
        options: ["Cheese", "Sambal teri kacang", "Bacon + Cheese", "Bacon + Sambal andaliman"]
      }
    ]
  }
];

export const kidsMenu: MenuGroup[] = [
  {
    title: "Kids",
    items: [{ name: "Banana Split" }, { name: "Nuggets" }, { name: "Gelato" }]
  }
];
