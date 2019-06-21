import { getPublicUrl } from "../../utils";

export const basketMock = [
  {
    id: 1,
    title: "Стакан YPSILON BRIO CAPPUCCINO 220 мл",
    isCombo: false,
    priceInfo: {
      fullPrice: 3580,
      priceFromAccount: 2000,
      minPriceFromAccount: 2000
    },
    count: 2,
    images: [getPublicUrl("/assets/images/img-product-cart-01@2x.jpg")],
    options: {
      isColor: true,
      isSize: false,
      title: "Цвет",
      color: "#e1eb31"
    }
  },
  {
    id: 2,
    title: "Одеяло Woolfield Sunrise",
    isCombo: false,
    priceInfo: {
      fullPrice: 2000,
      priceFromAccount: 1000,
      minPriceFromAccount: null
    },
    options: {
      isColor: false,
      isSize: true,
      title: "Размер",
      size: "170x200"
    },
    count: 1,
    images: [getPublicUrl("/assets/images/img-product-cart-02@2x.jpg")]
  },
  {
    id: 3,
    title: "Комбо набор Сумка с удлиненными ручками + Зонт-трость SwissOak",
    isCombo: true,
    priceInfo: {
      fullPrice: 2300,
      priceFromAccount: 1199,
      minPriceFromAccount: null
    },
    options: null,
    count: 1,
    images: [
      getPublicUrl("/assets/images/img-product-cart-03@2x.jpg"),
      getPublicUrl("/assets/images/img-product-cart-04@2x.jpg")
    ]
  },
  {
    id: 4,
    title: "Беспроводная колонка Goodyear Bluetooth Speaker",
    isCombo: false,
    priceInfo: {
      fullPrice: "5000",
      priceFromAccount: "2500",
      minPriceFromAccount: null
    },
    options: null,
    count: 1,
    images: [getPublicUrl("/assets/images/img-product-cart-05@2x.jpg")]
  }
];

export const basketGold = [
  {
    id: 1,
    title: "Очки солнцезащитные спортивные антибликовые с поляризацией",
    images: [getPublicUrl("/assets/images/img-product-cart-06@2x.jpg")]
  }
];

export const basketSlider = [
  {
    id: 1,
    image: getPublicUrl("/assets/images/img-product-cart-06@2x.jpg"),
    price: 744,
    disc: 300,
    title: "Многофункциональный штопор Richardson Sheffield",
    colors: null
  },
  {
    id: 2,
    image: getPublicUrl("/assets/images/img-product-cart-05@2x.jpg"),
    price: 7444,
    disc: 3202,
    title: "Многофункциональный штопор Richardson Sheffield111!!",
    colors: null
  },
  {
    id: 3,
    image: getPublicUrl("/assets/images/img-product-cart-05@2x.jpg"),
    price: 7444,
    disc: 3002,
    title: "Многофункциональный штопор Richardson Sheffield11",
    colors: ["#a396c4", "#c3a37f", "#e1eb31"]
  },
  {
    id: 4,
    image: getPublicUrl("/assets/images/ima-product-01@2x.jpg"),
    price: 7414,
    disc: 3020,
    title: "Многофункциональный штопор Richardson Sheffield111",
    colors: null
  },
  {
    id: 5,
    image: getPublicUrl("/assets/images/ima-product-02@2x.jpg"),
    price: 7344,
    disc: 0,
    title: "Многофункциональный штопор Richardson Sheffield1111",
    colors: null
  },
  {
    id: 6,
    image: getPublicUrl("/assets/images/ima-product-03@2x.jpg"),
    price: 7440,
    disc: 20,
    title: "Многофункциональный штопор Richardson Sheffield111111",
    colors: null
  }
];
