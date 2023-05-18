import { MdFlight } from "react-icons/md";
import { FaHotel, FaCcVisa, FaBusAlt } from "react-icons/fa";
import { GiPalmTree, GiCruiser } from "react-icons/gi";
import { BsMoonFill } from "react-icons/bs";

// package images
import maldives from "./assets/maldives.jpg";
import dubai from "./assets/dubai.jpg";

export const menuData = [
  {
    id: 1,
    icon: <MdFlight />,
    name: "Flights",
    path: "/",
  },
  {
    id: 2,
    icon: <FaHotel />,
    name: "Hotel",
    path: "/hotel",
  },
  {
    id: 3,
    icon: <FaCcVisa />,
    name: "Visa",
    path: "/visa",
  },
  {
    id: 4,
    icon: <GiPalmTree />,
    name: "Holidays",
    path: "/holidays",
  },
  {
    id: 5,
    icon: <FaBusAlt />,
    name: "Bus",
    path: "/bus",
  },
  {
    id: 6,
    icon: <GiCruiser />,
    name: "Cruise",
    path: "/cruise",
  },
  {
    id: 7,
    icon: <BsMoonFill />,
    name: "Umrah",
    path: "/umrah",
  },
];

export const visaCountries = [
  "AFGHANISTAN",
  "ALBANIA",
  "ALGERIA",
  "AMERICAN SAMOA",
  "ANDORRA",
  "ANGOLA",
  "ANGUILLA",
  "ANTARCTICA",
  "ANTIGUA AND BARBUDA",
  "ARGENTINA",
  "ARMENIA",
  "ARUBA",
  "AUSTRALIA",
  "AUSTRIA",
  "AZERBAIJAN",
  "BAHAMAS",
  "BAHRAIN",
  "BANGLADESH",
  "BARBADOS",
  "BELARUS",
  "BELGIUM",
  "BELIZE",
  "BENIN",
  "BERMUDA",
  "BHUTAN",
  "BOLIVIA",
  "BOSNIA AND HERZEGOVINA",
  "BOTSWANA",
  "BRAZIL",
  "BRUNEI DARUSSALAM",
  "BULGARIA",
  "BURKINA FASO",
  "BURUNDI",
  "CAMBODIA",
  "CAMEROON",
  "CANADA",
  "CAPE VERDE",
  "CENTRAL AFRICAN REPUBLIC",
  "CHAD",
  "CHILE",
  "CHINA",
  "COLOMBIA",
  "COMOROS",
  "CONGO",
  "CONGO, THE DRC",
  "COSTA RICA",
  "COTE D'IVOIRE",
  "CROATIA (LOCAL NAME: HRVATSKA)",
  "CUBA",
  "CYPRUS",
  "CZECH REPUBLIC",
  "DENMARK",
  "DJIBOUTI",
  "DOMINICA",
  "DOMINICAN REPUBLIC",
  "EAST TIMOR",
  "ECUADOR",
  "EGYPT",
  "EL SALVADOR",
  "EQUATORIAL GUINEA",
  "ERITREA",
  "ESTONIA",
  "ETHIOPIA",
  "FIJI",
  "FINLAND",
  "FRANCE",
  "FRANCE, METROPOLITAN",
  "FRENCH GUIANA",
  "GABON",
  "GAMBIA",
  "GEORGIA",
  "GERMANY",
  "GHANA",
  "GREECE",
  "GREENLAND",
  "GRENADA",
  "GUADELOUPE",
  "GUATEMALA",
  "GUINEA-BISSAU",
  "GUYANA",
  "HAITI",
  "HOLY SEE (VATICAN CITY STATE)",
  "HONDURAS",
  "HONG KONG",
  "HUNGARY",
  "ICELAND",
  "INDONESIA",
  "IRAN (ISLAMIC REPUBLIC OF)",
  "IRAQ",
  "IRELAND",
  "ISRAEL",
  "ITALY",
  "JAMAICA",
  "JAPAN",
  "JORDAN",
  "KAZAKHSTAN",
  "KENYA",
  "KIRIBATI",
  "KOREA, D.P.R.O.",
  "KUWAIT",
  "KYRGYZSTAN",
  "LAOS",
  "LATVIA",
  "LEBANON",
  "LESOTHO",
  "LIBERIA",
  "LIECHTENSTEIN",
  "LITHUANIA",
  "LUXEMBOURG",
  "MACAU",
  "MACEDONIA",
  "MADAGASCAR",
  "MALAWI",
  "MALAYSIA",
  "MALDIVES",
  "MALI",
  "MALTA",
  "MARSHALL ISLANDS",
  "MAURITANIA",
  "MAURITIUS",
  "MEXICO",
  "MICRONESIA, FEDERATED STATES OF",
  "MOLDOVA, REPUBLIC OF",
  "MONACO",
  "MONGOLIA",
  "MONTENEGRO",
  "MOROCCO",
  "MOZAMBIQUE",
  "MYANMAR (BURMA)",
  "NAMIBIA",
  "NAURU",
  "NEPAL",
  "NEW ZEALAND",
  "NICARAGUA",
  "NIGER",
  "NIGERIA",
  "NORWAY",
  "OMAN",
  "PAKISTAN",
  "PALAU",
  "PANAMA",
  "PAPUA NEW GUINEA",
  "PARAGUAY",
  "PERU",
  "PHILIPPINES",
  "POLAND",
  "PORTUGAL",
  "PUERTO RICO",
  "QATAR",
  "ROMANIA",
  "RUSSIAN FEDERATION",
  "RWANDA",
  "SAINT KITTS AND NEVIS",
  "SAINT LUCIA",
  "SAINT VINCENT AND THE GRENADINES",
  "SAMOA",
  "SAN MARINO",
  "SAO TOME AND PRINCIPE",
  "SAUDI ARABIA",
  "SENEGAL",
  "SERBIA",
  "SEYCHELLES",
  "SIERRA LEONE",
  "SINGAPORE",
  "SLOVAKIA (SLOVAK REPUBLIC)",
  "SLOVENIA",
  "SOLOMON ISLANDS",
  "SOMALIA",
  "SOUTH AFRICA",
  "SOUTH GEORGIA AND SOUTH S.S.",
  "SOUTH KOREA",
  "SOUTH SUDAN",
  "SPAIN",
  "SRI LANKA",
  "SUDAN",
  "SURINAME",
  "SWEDEN",
  "SWITZERLAND",
  "SYRIAN ARAB REPUBLIC",
  "TAIWAN, PROVINCE OF CHINA",
  "TAJIKISTAN",
  "TANZANIA, UNITED REPUBLIC OF",
  "THAILAND",
  "TOGO",
  "TONGA",
  "TRINIDAD AND TOBAGO",
  "TUNISIA",
  "TURKEY",
  "TURKMENISTAN",
  "UGANDA",
  "UKRAINE",
  "UNITED ARAB EMIRATES",
  "UNITED KINGDOM",
  "UNITED STATES",
  "URUGUAY",
  "UZBEKISTAN",
  "VANUATU",
  "VENEZUELA",
  "VIETNAM",
  "YEMEN",
  "ZAMBIA",
  "ZIMBABWE",
  "SCHENGEN",
  "INDIA VISA (UK CITIZEN)",
  "INDIA VISA (USA CITIZEN)",
];

export const data = [
  {
    id: 1,
    category: "flight",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/say-yes.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 2,
    category: "flight",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/abudhabi-1302.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 3,
    category: "flight",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/say-yes.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 4,
    category: "flight",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/slide_43.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 5,
    category: "flight",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/slide_10.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 6,
    category: "flight",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/abudhabi-1302.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 7,
    category: "hotel",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/hotel32423.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 8,
    category: "hotel",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/abad-0211.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 9,
    category: "hotel",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/cgh-0211.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 10,
    category: "hotel",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/mahindra-0211.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
    option: "hotdeal",
  },
  {
    id: 11,
    category: "hotel",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/amritara%20hotel.jpg",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
    option: "hotdeal",
  },
  {
    id: 12,
    category: "hotel",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/MobiKwik-hotel.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
    option: "hotdeal",
  },
  {
    id: 13,
    category: "holidays",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/europe-0812.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
    option: "hotdeal",
  },
  {
    id: 14,
    category: "holidays",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/taj-1910.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
    option: "hotdeal",
  },
  {
    id: 15,
    category: "holidays",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/dubai-0812.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
    option: "hotdeal",
  },
  {
    id: 16,
    category: "holidays",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/europe-couch-0901.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 17,
    category: "holidays",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/Kashmir-1910.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 18,
    category: "holidays",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/nocost-1910.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 19,
    category: "cruise",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/slide_46.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
    option: "hotdeal",
  },
  {
    id: 20,
    category: "cruise",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/msc.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 21,
    category: "cruise",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/norwegian-cruise.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
    option: "hotdeal",
  },
  {
    id: 22,
    category: "cruise",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/costa-0501.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 23,
    category: "cruise",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/msc.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
  },
  {
    id: 24,
    category: "cruise",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/webp/slide_46.webp",
    title: "Zero Convenience Fee",
    detail:
      "Enjoy Zero Convenience Fee + Save up to Rs 4,000* on each flight booking.",
    option: "hotdeal",
  },
];

export const desination = [
  {
    id: 1,
    category: "all destinations",
    name: "Maldives",
    route: "maldives",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/maldives1222.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Himachal.webp",
  },
  {
    id: 2,
    category: "all destinations",
    name: "Dubai",
    route: "dubai",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/Dubai.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/mauritious-31.webp",
  },
  {
    id: 3,
    category: "all destinations",
    route: "Maldives",
    name: "Turkey",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/turkey1222.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/turkey-18102021.webp",
  },
  {
    id: 4,
    category: "all destinations",
    route: "Maldives",
    name: "Kashmir",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/kashmir70.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 5,
    category: "all destinations",
    route: "Maldives",
    name: "Ladakh",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/ladakh.webp",
  },
  {
    id: 6,
    category: "all destinations",
    name: "Mauritius",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/mauritious70.webp",
  },
  {
    id: 7,
    category: "all destinations",
    name: "Cordelia Cruises",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/Andaman.webp",
  },
  {
    id: 8,
    category: "all destinations",
    name: "Sri-Lanka",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/Srilanka.webp",
  },
  {
    id: 9,
    category: "all destinations",
    name: "Switzerland",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/switz1222.webp",
  },
  {
    id: 10,
    category: "all destinations",
    name: "Andaman",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/Andaman.webp",
  },
  {
    id: 11,
    category: "all destinations",
    name: "Himachal",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/himachal11-11-21.webp",
  },
  {
    id: 12,
    category: "international",
    name: "Europe",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/europe_small.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/Maldives122022.webp",
  },
  {
    id: 13,
    category: "international",
    name: "Turkey",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/turkey1222.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/turkey-18102021.webp",
  },
  {
    id: 14,
    category: "international",
    name: "Dubai",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/Dubai.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/egypt-big.webp",
  },
  {
    id: 15,
    category: "international",
    name: "Thailand",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/thailand70.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/big/webp/mauritious-31.webp",
  },
  {
    id: 16,
    category: "international",
    name: "Maldives",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/maldives1222.webp",
  },
  {
    id: 17,
    category: "international",
    name: "Switzerland",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/switz1222.webp",
  },
  {
    id: 18,
    category: "international",
    name: "Mauritius",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/mauritious70.webp",
  },
  {
    id: 19,
    category: "international",
    name: "Sri-Lanka",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/Srilanka.webp",
  },
  {
    id: 20,
    category: "international",
    name: "United Kingdom",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/udaipur.webp",
  },
  {
    id: 21,
    category: "international",
    name: "Italy",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/Maldives.webp",
  },
  {
    id: 22,
    category: "international",
    name: "Serbia",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/Canada.webp",
  },
  {
    id: 23,
    category: "domestic",
    name: "Ladakh",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/ladakh.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 24,
    category: "domestic",
    name: "Kashmir",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/kashmir70.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Himachal.webp",
  },
  {
    id: 25,
    category: "domestic",
    name: "Kerala",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/kerala-14122020.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/kerala3012022.webp",
  },
  {
    id: 26,
    category: "domestic",
    name: "Andaman",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/Andaman.webp",
    option:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/chardham.webp",
  },
  {
    id: 28,
    category: "domestic",
    name: "Chardham",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/chardham70.webp",
  },
  {
    id: 29,
    category: "domestic",
    name: "Goa",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/International/webp/maurious.webp",
  },
  {
    id: 30,
    category: "domestic",
    name: "Rajasthan",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/Rajasthan.webp",
  },
  {
    id: 31,
    category: "domestic",
    name: "Himachal",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/webp/kashmir.webp",
  },
];

export const story = [
  {
    id: "1",
    category: "Flights",
    title: "Flight got canceled or delayed? Here’s what you can do",
    about:
      "All set for your dream vacation? Got your travel visa issued and flight tickets ready?...",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/travelstories/webp/blog5.webp",
  },
  {
    id: "2",
    category: "Travel Toolkit",
    title: "The Dubai Shopping Festival 2022 and 2023 – All you need to know",
    about:
      "Your Gateway to paradise is opening soon! Finally, the biggest Shopping Festival of the year..",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/travelstories/webp/blog6.webp",
  },
  {
    id: "3",
    category: "Holidays",
    title:
      "SportWorld Holidays partners with SanKash to launch ‘travel now pay later’ Feature option",
    about:
      "SportWorld Holidays, the holiday division of India’s largest Travel Company – SportWorlds has...",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/travelstories/webp/blog7.webp",
  },
  {
    id: "4",
    category: "Visa",
    title:
      "Planning a US Trip? Looking for the earliest appointment date for a US Visa?",
    about:
      "Planning a US Trip? You will have to wait till 2024 for your American dream to come true,...",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/travelstories/webp/blog8.webp",
  },
  {
    id: "5",
    category: "Experiences",
    title: "Best places to celebrate Christmas & New Year 2023",
    about:
      "The “most lovely time of the year” is approaching, and locations throughout the world are getting...",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/travelstories/webp/blog1.webp",
  },
  {
    id: "6",
    category: "Travel Toolkit",
    title: "Go Cashless! Use UPI Payment in these 9 countries",
    about:
      "Since ancient times, India has given the world many things that have essentially...",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/travelstories/webp/blog2.webp",
  },
  {
    id: "7",
    category: "Experiences",
    title: "Visit these 9 iconic Wildlife Safaris in the world",
    about:
      "From camping under the stars to watching wildlife in their natural habitat, Safaris...",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/travelstories/webp/blog3.webp",
  },
  {
    id: "8",
    category: "Experiences",
    title: "Top 10 Destinations in Southeast Asia you shouldn’t miss",
    about:
      "The geographical south-eastern region of Asia (Southeastern Asia or SEA) is an impressive...",
    img: "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/travelstories/webp/blog4.webp",
  },
];

// tour packages data
// maldives
export const MaldivesPackages = [
  {
    id: 1,
    title: "Maldives Tour Packages",
    description:
      "The Maldives, a tropical paradise nestled in the heart of the Indian Ocean, is a breathtaking destination renowned for its pristine white-sand beaches, crystal-clear turquoise waters, and abundant marine life. This island nation consists of 26 atolls, each comprising numerous coral islands, offering visitors a picture-perfect setting for an unforgettable vacation. Maldives is known for its luxurious resorts, where guests can indulge in world-class amenities and immerse themselves in ultimate relaxation. These resorts often feature private villas perched over the water, allowing guests to enjoy direct access to the mesmerizing lagoons and coral reefs. The Maldives is a popular choice for honeymooners, couples seeking a romantic getaway, and those who simply wish to unwind amidst stunning natural beauty.",
    img: maldives,
    
  },
];


// maldives popular places
export const PopularMaldives = [
  {
    id: 1,
    title: "Male City",
    img: maldives,
    
  },
];

// dubai

export const DubaiPackages = [
  {
    id: 1,
    title: "Dubai Tour Packages",
    description:
      "Dubai, the jewel of the United Arab Emirates (UAE), is a city that seamlessly blends modern extravagance with rich cultural heritage. Renowned as a global hub for business, tourism, and luxury, Dubai has become an iconic destination known for its stunning architecture, world-class shopping, and captivating experiences.One of the most striking features of Dubai is its awe-inspiring skyline dominated by architectural marvels. The Burj Khalifa, the tallest building in the world, stands proudly in the city center, offering panoramic views of the city from its observation decks. The Burj Al Arab, a sail-shaped luxury hotel, is another iconic landmark that symbolizes Dubai's opulence.",
    img: dubai,
  },
];
