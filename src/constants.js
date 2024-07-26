import {
  accesories,
  accesoriesMobile,
  modelS,
  modelSMobile,
  modelX,
  modelXMobile,
  modelY,
  modelYMobile,
  model3,
  model3Mobile,
  cyberTruck,
  cyberTruckMobile,
  powerWall,
  powerWallMobile,
  solarPanel,
  solarPanelMobile,
  solarRoof,
  solarRoofMobile,
  model3Png,
  modelSPng,
  modelXPng,
  modelYPng,
  redBluePng,
  cyberTruckPng,
  solarPanelsPng,
  solarRoofPng,
  powerwallPng,
  megapackrPng,
  chargingPng,
  homeChargingPng,
  superChargingPng,
  vehicleAccesories,
  lifestyleMerch,
  apparelMerch,
  supportApp,
  supportOrder,
} from "./assets";

export const sectionsInfo = [
  {
    image: model3,
    image2: model3Mobile,
    title: "Model 3",
    description: `$7,500 Federal Tax Credit Available<sup>1</sup>`,
    price: "From $29,990 After Est. Savings<sup>2</sup>",
    button1Text: "Order Now",
    button2Text: "Demo Drive",
    white: false,
  },
  {
    image: modelY,
    image2: modelYMobile,
    title: "Model Y",
    description: "From $31,490<sup>3</sup>",
    price: "After $13,500 Est. Savings",
    button1Text: "Order Now",
    button2Text: "Demo Drive",
    white: false,
  },
  {
    image: modelX,
    image2: modelXMobile,
    title: "Model X",
    description: "From $63,990<sup>4</sup>",
    price: "After Est. Savings",
    button1Text: "Order Now",
    button2Text: "Demo Drive",
    white: false,
  },
  {
    image: modelS,
    image2: modelSMobile,
    title: "Model S",
    description: "From $66,490<sup>5</sup>",
    price: "After Est. Savings",
    button1Text: "Order Now",
    button2Text: "Demo Drive",
    white: true,
  },
  {
    image: cyberTruck,
    image2: cyberTruckMobile,
    title: "CybertruckSVG",
    description: "",
    price: "",
    button1Text: "Order Now",
    button2Text: "Learn More",
    white: false,
  },
  {
    image: solarPanel,
    image2: solarPanelMobile,
    title: "Solar Panels",
    description: "",
    price: "Schedule a Virtual Consultation",
    button1Text: "Order Now",
    button2Text: "Learn More",
    white: true,
  },
  {
    image: solarRoof,
    image2: solarRoofMobile,
    title: "Solar Roof",
    description: "",
    price: "Produce Clean Energy From Your Roof",
    button1Text: "Order Now",
    button2Text: "Learn More",
    white: false,
  },
  {
    image: powerWall,
    image2: powerWallMobile,
    title: "Power Wall",
    description: "",
    price: "",
    button1Text: "Order Now",
    button2Text: "Learn More",
    white: false,
  },
  {
    image: accesories,
    image2: accesoriesMobile,
    title: "Accesories",
    description: "",
    price: "",
    button1Text: "Shop Now",
    button2Text: "",
    white: false,
  },
];

export const items = [
  {
    category: "Vehicles",
    arrow: true,
    options: [
      "Inventory",
      "Used Cars",
      "Demo Drive",
      "Trade-in",
      "Compare",
      "Help Me Charge",
      "Fleet",
      "Semi",
      "Roadster",
    ],
    dialog: [
      {
        image: modelSPng,
        productName: "Model S",
        text1: "Learn",
        text2: "Order",
      },
      {
        image: model3Png,
        productName: "Model 3",
        text1: "Learn",
        text2: "Order",
      },
      {
        image: modelXPng,
        productName: "Model X",
        text1: "Learn",
        text2: "Order",
      },
      {
        image: modelYPng,
        productName: "Model Y",
        text1: "Learn",
        text2: "Order",
      },
      {
        image: cyberTruckPng,
        productName: "Cybertruck",
        text1: "Learn",
        text2: "Order",
      },
      {
        image: redBluePng,
        productName: "Help Me Choose",
        text1: "Get Started",
      },
    ],
  },
  {
    category: "Energy",
    arrow: true,
    options: [
      "Schedule a Consultation",
      "Why Solar",
      "Incentives",
      "Support",
      "Partner with Tesla",
      "Commercial",
      "Utilities",
    ],
    dialog: [
      {
        image: solarPanelsPng,
        productName: "Solar Panels",
        text1: "Learn",
        text2: "Order",
      },
      {
        image: solarRoofPng,
        productName: "Solar Roof",
        text1: "Learn",
        text2: "Order",
      },
      {
        image: powerwallPng,
        productName: "Powerwall",
        text1: "Learn",
        text2: "Order",
      },
      {
        image: megapackrPng,
        productName: "Megapack",
        text1: "Learn",
      },
    ],
  },
  {
    category: "Charging",
    arrow: true,
    options: [
      "Help Me Charge",
      "Charging Calculator",
      "Charging With NACS",
      "Supercharger Voting",
      "Host a Supercharger",
      "Commercial Charging",
      "Host Wall Connectors",
    ],
    dialog: [
      {
        image: chargingPng,
        productName: "Charging",
        text1: "Learn",
      },
      {
        image: homeChargingPng,
        productName: "Home Charging",
        text1: "Learn",
        text2: "Shop",
      },
      {
        image: superChargingPng,
        productName: "Supercharging",
        text1: "Learn",
        text2: "Find",
      },
    ],
  },
  {
    category: "Discover",
    arrow: true,
    options: [
      "Demo Drive",
      "Insurance",
      "Military Purchase Program",
      "Video Guides",
      "Customer Stories",
      "Events",
    ],
    extraOptions: {
      options2: ["Find Us", "Find a Collision Center", "Find a Certified Installer"],
      options3: ["About", "Careers", "Investor Relations"],
    },
    dialog: false,
  },
  {
    category: "Shop",
    arrow: true,
    options: false,
    dialog: [
      {
        image: vehicleAccesories,
        productName: "Vehicle Accesories",
      },
      {
        image: apparelMerch,
        productName: "Apparel",
      },
      {
        image: lifestyleMerch,
        productName: "Lifestyle",
      },
      {
        image: chargingPng,
        productName: "Charging Accesories",
      },
    ],
  },
];

export const actionsList = [
  { action: "Questions", arrow: false, path: "/support" },
  { action: "Languages", arrow: true },
  { action: "Login", arrow: false },
];

export const footerTexts = [
  "<p key=1><sup>1 </sup>$7,500 Federal Tax Credit available for eligible buyers and subject to MSRP caps. Model 3 Rear-Wheel Drive not eligible.</p>",

  `<p key=2><sup>2 </sup>Price before estimated savings is $42,490, excluding taxes and fees. Subject to change. 
    Estimated savings includes $5,000 in <a href="#" classname="cursor-pointer underline underline-offset-4 font-bold hover:decoration-2">gas savings</a> estimated over five years, the $7,500 Federal Tax Credit and state incentives, 
    available to eligible buyers and subject to MSRP caps. <a href="#" classname="cursor-pointer font-bold underline underline-offset-4 hover:decoration-2">Terms apply</a>.</p>`,

  `<p key=3><sup>3 </sup>Price before estimated savings is $44,990, excluding taxes and fees. Subject to change. 
  Estimated savings includes $6,000 in <a href="#" classname="cursor-pointer underline underline-offset-4 font-bold hover:decoration-2">gas savings</a> estimated over five years, the $7,500 Federal Tax Credit and state incentives, 
  available to eligible buyers and subject to MSRP caps. <a href="#" classname="cursor-pointer font-bold underline underline-offset-4 hover:decoration-2">Terms apply</a>.</p>`,

  `<p key=4><sup>4 </sup>Price before estimated savings is $77,990, excluding taxes and fees. Subject to change. 
  Estimated savings includes $6,500 in <a href="#" classname="cursor-pointer underline underline-offset-4 font-bold hover:decoration-2">gas savings</a> estimated over five years, the $7,500 Federal Tax Credit and state incentives, 
  available to eligible buyers and subject to MSRP caps. <a href="#" classname="cursor-pointer font-bold underline underline-offset-4 hover:decoration-2">Terms apply</a>.</p>`,

  `<p key=5><sup>5 </sup>Price before estimated savings is $72,990, excluding taxes and fees. Subject to change. 
  Estimated savings includes $6,500 in <a href="#" classname="cursor-pointer underline underline-offset-4 font-bold hover:decoration-2">gas savings</a> estimated over five years and state incentives, 
  available to eligible buyers and subject to MSRP caps. <a href="#" classname="cursor-pointer font-bold underline underline-offset-4 hover:decoration-2">Terms apply</a>.</p>`,
];

export const footerList = [
  "Tesla © 2024",
  "Privacy & Legal",
  "Vehicle Recalls",
  "Contact",
  "News",
  "Get Updates",
  "Locations",
];

export const supportNavItems = [
  "Model S",
  "Model 3",
  "Model X",
  "Model Y",
  "Solar Roof",
  "Solar Panels",
  "Cybertruck",
  "Powerwall",
];

export const supportNavSideItems = ["Shop", "Account", "Menu"];

export const trendingTopics = [
  "Add a Vehicle",
  "Supercharging Credits",
  "Leasing",
  "IRA Clean Vehicle Report",
  "Cost of Solar",
  "Troubleshoot Solar",
];

export const topicCategories = [
  {
    id: 1,
    category: "Vehicles",
    topics: [
      {
        title: "Features and Charging",
        descriptions: [
          "Autopilot",
          "Software Updates",
          "Upgrades",
          "Supercharging",
          "Home Charging",
          "Security Features",
        ],
      },
      {
        title: "Service and Collision Repair",
        descriptions: [
          "Do it Yourself Guides",
          "Schedule a Service Visit",
          "Find a Collision Center",
          "Roadside Assistance",
          "Vehicle Warranty",
          "Tire Care and Repair",
          "Service Portal",
        ],
      },
      {
        title: "Tesla Account",
        descriptions: [
          "Add a Vehicle",
          "Account Support",
          "Tesla App",
          "Refer and Earn",
          "Financing & Leasing",
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Energy",
    topics: [
      {
        title: "Powerwall",
        descriptions: [
          "How Powerwall Works",
          "System Design",
          "Prepare for Installation",
          "Tesla App for Energy",
          "Get Help and Schedule Service",
          "Documents",
        ],
      },
      {
        title: "Solar Roof",
        descriptions: [
          "Why Solar Roof",
          "Installation Overview",
          "Installation Process",
          "Troubleshooting Your System",
          "Frequently Asked Questions",
          "Tire Care and Repair",
          "Monitoring",
        ],
      },
      {
        title: "Solar Panels",
        descriptions: [
          "Why Tesla Solar",
          "Solar Panel Sizing and Design",
          "Turn On Your System",
          "Billing",
          "Troubleshooting Your System",
          "Transferring Ownership of Your Solar System",
        ],
      },
    ],
  },
];

export const tutorialsAndOrdering = [
  {
    image: supportApp,
    title: "Video Guides",
    text1:
      "View tutorials and videos designed to educate you on the basics of your vehicle and energy products.",
    text2:
      "Explore interactive videos designed to give you a more in-depth look at your vehicle and its features.",
    link1: ["View Video Guides"],
    link2: "Explore Interactive Videos",
  },
  {
    image: supportOrder,
    title: "Getting Started",
    text1:
      "Learn about your Tesla ownership experience. Including designing and taking delivery of your vehicle.",
    text2: false,
    link1: [
      "Ordering a New Vehicle",
      "Ordering a Used Vehicle",
      "Prepare for Delivery Day",
      "Taking Delivery",
      "After Taking Delivery",
      "Find Us",
    ],
    link2: false,
  },
];


export const supportFooterLists = [
  ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck", "Energy", "Roadster", "Semi"],
  ["About", "Careers", "Get Newsletter", "Contact", "Tesla Account" ],
  ["Order a Tesla", "Incentives", "Test Drive Events", "Accesories & Apparel", "Vehicle Recalls",],
  ["Investors", "Suppliers"]
]