import { productImagesMain, productImagesSecondary } from './images/images';

const smallPlateDesc = '1 extra-small handmade ceramic plate that can be used to serve food. Perfect for serving tapas, antipasti, dessert, seasonal fruit.'
const plateDesc = '1 large handmade ceramic plate for serving food or decorative purpose. Perfect for serving main course and party meals.';
const bowlDesc = '1 large handmade ceramic bowl for serving food or decorative purpose. The size is perfect for Asian noodles.';
const extraLargeBowlDesc = '1 extra-large bowl that can be used for decorative purposes. Looks good in loft or vintage spaces.';

const productList = [
  {
    name: 'The Sight of Maple',
    price: 25,
    img1: productImagesMain[0],
    img2: productImagesSecondary[0],
    desc: plateDesc,
  },
  {
    name: 'Qualia',
    price: 35,
    img1: productImagesMain[1],
    img2: productImagesSecondary[1],
    desc: bowlDesc,
  },
  {
    name: 'Drop of Emerald',
    price: 25,
    img1: productImagesMain[2],
    img2: productImagesSecondary[2],
    desc: extraLargeBowlDesc,
  },
  {
    name: "Helen's Prayer",
    price: 25,
    img1: productImagesMain[3],
    img2: productImagesSecondary[3],
    desc: extraLargeBowlDesc,
  },
  {
    name: 'Ouroboro',
    price: 35,
    img1: productImagesMain[4],
    img2: productImagesSecondary[4],
    desc: plateDesc,
  },
  {
    name: 'Moon I',
    price: 45,
    img1: productImagesMain[5],
    img2: productImagesSecondary[5],
    desc: bowlDesc,
  },
  {
    name: 'Moon II',
    price: 45,
    img1: productImagesMain[6],
    img2: productImagesSecondary[6],
    desc: bowlDesc,
  },
  {
    name: 'Three Lakes',
    price: 32,
    img1: productImagesMain[7],
    img2: productImagesSecondary[7],
    desc: bowlDesc,
  },
  {
    name: 'Majorca Lines',
    price: 25,
    img1: productImagesMain[8],
    img2: productImagesSecondary[8],
    desc: bowlDesc,
  },
  {
    name: 'Luminous Gobi',
    price: 20,
    img1: productImagesMain[9],
    img2: productImagesSecondary[9],
    desc: smallPlateDesc,
  },
  {
    name: 'Taint',
    price: 25,
    img1: productImagesMain[10],
    img2: productImagesSecondary[10],
    desc: plateDesc,
  },
  {
    name: 'Moon III',
    price: 43,
    img1: productImagesMain[11],
    img2: productImagesSecondary[11],
    desc: plateDesc,
  },
  {
    name: 'Rust in the Air',
    price: 38,
    img1: productImagesMain[12],
    img2: productImagesSecondary[12],
    desc: plateDesc,
  },
  {
    name: 'Glacier',
    price: 25,
    img1: productImagesMain[13],
    img2: productImagesSecondary[13],
    desc: bowlDesc,
  },
  {
    name: "Snufkin's Present",
    price: 30,
    img1: productImagesMain[14],
    img2: productImagesSecondary[14],
    desc: plateDesc,
  },
]

export default productList;