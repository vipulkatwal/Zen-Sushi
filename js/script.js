// Import images as relative image paths won't work with Vite/Vercel
import check from "../assets/check.svg";
import star from "../assets/star.svg";
import sushi12 from "../assets/sushi-12.png";
import sushi11 from "../assets/sushi-11.png";
import sushi10 from "../assets/sushi-10.png";

import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS animation
AOS.init({
	duration: 1000, // Animation duration
	offset: 100, // Offset value for triggering animations
});

// List of trending sushi types
const trendingSushis = [
	"Make Sushi",
	"Nigiri Sushi",
	"Oshizushi",
	"Temaki Sushi",
	"Uramaki Sushi",
	"Inari Sushi",
];

// List of trending drinks
const trendingDrinks = [
	"Oruncha",
	"Ofukucha",
	"Sakura Tea",
	"Kombu-cha",
	"Aojiru",
	"Mugicha",
];

// Card data for displaying sushi items
const cards = [
	{
		imgSrc: sushi12,
		alt: "sushi-12",
		title: "Chezu Sushi",
		rating: "4.8",
		price: "$21.00",
	},
	{
		imgSrc: sushi11,
		alt: "sushi-11",
		title: "Originale Sushi",
		rating: "4.8",
		price: "$21.00",
		active: true, // Indicates the active card
	},
	{
		imgSrc: sushi10,
		alt: "sushi-10",
		title: "Ramen Legendo",
		rating: "4.8",
		price: "$21.00",
	},
];
