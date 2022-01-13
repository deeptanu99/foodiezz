//Import the images for the background of tge items
import ChickenRools from "../assets/ChickenRools.jpg";
import Margherita from "../assets/Margherita.jpg";
import Grilled from "../assets/Grilled.jpg";
import vegan from "../assets/vegan.jpg";
import KFC from "../assets/KFC.jpg";
import barbeque from '../assets/barbeque.jpg'


//array of objects which will be exported for the menulist of different items
export const MenuList = [
    {
      name: "Grilled Chichen",
      image: ChickenRools,
      price: 99,
    },
    {
      name: "Margherita Pizza",
      image: Margherita,
      price: 399,
    },
    {
      name: "KFC",
      image: KFC,
      price: 899,
    },
    {
      name: "Vegan Pizza",
      image: vegan,
      price: 399,
    },
    {
      name: "Grilled Sandwitch",
      image: Grilled,
      price: 80,
    },
    {
      name: "Barbeque Chicken",
      image: barbeque,
      price: 399,
    }
   //and so on
  ];