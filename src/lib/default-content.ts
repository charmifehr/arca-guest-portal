import type { PortalContent } from "./types";
import { ARCA_IMAGES } from "./images";

const item = (
  name: string,
  description: string,
  price: number,
  id?: string,
) => ({
  id: id ?? name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
  name,
  description,
  price,
});

export const defaultContent: PortalContent = {
  welcome: {
    message: `Welcome to Arca.

You made it. The island is outside your window, the water is warm, and everything you need is right here.

This is your guide to making the most of your time with us — from what's on the menu tonight to what's happening on the reef tomorrow. Flip through at your own pace. We're here whenever you need us.`,
    backgroundImage: ARCA_IMAGES.hero,
  },
  media: {
    diningBanner: ARCA_IMAGES.dining,
    eventsBanner: ARCA_IMAGES.pool,
    islandBanner: ARCA_IMAGES.beach,
    islandInline: ARCA_IMAGES.beach,
    toursBanner: ARCA_IMAGES.experiences,
  },
  dining: {
    hours: {
      breakfast: "7:00 AM – 10:00 AM",
      lunchDinner: "11:00 AM – 9:00 PM",
    },
    categories: [
      {
        id: "breakfast",
        title: "Breakfast",
        sections: [
          {
            id: "coffee",
            title: "Coffee",
            items: [
              item("Espresso", "Single origin, locally roasted", 4),
              item("Americano", "Espresso with hot water", 5),
              item("Cappuccino", "Espresso, steamed milk, foam", 6),
              item("Pour Over", "Chef's daily selection", 6),
            ],
          },
          {
            id: "cold-press",
            title: "Cold Press Juice",
            items: [
              item("Green Glow", "Cucumber, celery, apple, ginger, lime", 9),
              item("Tropical Sunrise", "Pineapple, mango, orange, turmeric", 9),
              item("Beet Root Revival", "Beet, carrot, apple, lemon", 9),
            ],
          },
          {
            id: "fresh-essentials",
            title: "Fresh Essentials",
            items: [
              item("Pineapple Agua Fresca", "House-made, lightly sweetened", 6),
              item("Watermelon Mint", "Seasonal when available", 6),
              item("Hibiscus Cooler", "Tart and refreshing", 6),
            ],
          },
          {
            id: "tea",
            title: "Tea",
            items: [
              item("English Breakfast", "Classic black tea", 5),
              item("Chamomile", "Organic herbal blend", 5),
              item("Island Ginger Turmeric", "Warming and restorative", 6),
            ],
          },
          {
            id: "vacation-mode",
            title: "Vacation Mode",
            items: [
              item("Mimosa", "Prosecco and fresh orange juice", 12),
              item("Island Bellini", "Prosecco and passion fruit purée", 13),
              item("Bloody Mary", "House mix, celery, lime", 14),
            ],
          },
          {
            id: "signature-breakfast",
            title: "Signature Dishes",
            items: [
              item(
                "Ahari Breakfast Bowl",
                "Quinoa, avocado, poached egg, pickled onion, tropical salsa",
                18,
              ),
              item(
                "Catch of the Morning",
                "Grilled local fish, plantains, black beans, cilantro lime",
                22,
              ),
              item(
                "Tropical French Toast",
                "Brioche, coconut cream, caramelized banana, rum syrup",
                16,
              ),
            ],
          },
          {
            id: "build-your-own",
            title: "Build Your Own Breakfast",
            items: [
              item("Two Eggs Any Style", "Served with toast and fruit", 12),
              item("Add Avocado", "", 4),
              item("Add Bacon or Sausage", "", 5),
              item("Add Fresh Fruit Plate", "", 6),
            ],
          },
        ],
      },
      {
        id: "lunch-dinner",
        title: "Lunch & Dinner",
        sections: [
          {
            id: "casual-corner",
            title: "Casual Corner",
            items: [
              item(
                "Fish Tacos",
                "Grilled catch, cabbage slaw, chipotle crema, flour tortillas",
                18,
              ),
              item(
                "Ahari Burger",
                "Angus beef, aged cheddar, pickled onion, fries",
                22,
              ),
              item(
                "Caesar Salad",
                "Romaine, parmesan, house croutons, lemon anchovy dressing",
                14,
              ),
            ],
          },
          {
            id: "from-the-land",
            title: "From the Land",
            items: [
              item(
                "Grilled Ribeye",
                "8 oz, herb butter, roasted vegetables, chimichurri",
                38,
              ),
              item(
                "Chicken Mole",
                "Free-range chicken, Honduran chocolate mole, rice, plantains",
                26,
              ),
              item(
                "Vegetable Curry",
                "Coconut curry, seasonal vegetables, jasmine rice",
                22,
              ),
            ],
          },
          {
            id: "from-the-sea",
            title: "Signature From the Sea",
            items: [
              item(
                "Whole Grilled Snapper",
                "Local catch, garlic butter, lime, coconut rice",
                34,
              ),
              item(
                "Lobster Tail",
                "Broiled, drawn butter, seasonal sides",
                48,
              ),
              item(
                "Ceviche Ahari",
                "Fresh fish, lime, red onion, cilantro, plantain chips",
                19,
              ),
            ],
          },
          {
            id: "sides",
            title: "Sides",
            items: [
              item("Coconut Rice", "", 6),
              item("Grilled Vegetables", "", 7),
              item("Plantain Chips", "Garlic aioli", 8),
              item("Black Beans", "Slow-cooked with spices", 5),
            ],
          },
          {
            id: "dessert",
            title: "Dessert",
            items: [
              item("Key Lime Pie", "Graham cracker crust, whipped cream", 10),
              item("Chocolate Lava Cake", "Vanilla bean ice cream", 12),
              item("Tropical Sorbet", "Chef's selection of island fruits", 8),
            ],
          },
        ],
      },
      {
        id: "drinks",
        title: "Drinks",
        sections: [
          {
            id: "house-cocktails",
            title: "House Cocktails",
            items: [
              item(
                "West Bay Sunset",
                "Rum, passion fruit, lime, bitters",
                14,
              ),
              item(
                "Reef Runner",
                "Tequila, grapefruit, agave, sea salt",
                15,
              ),
              item(
                "Garifuna Gold",
                "Rum, coconut, pineapple, cinnamon",
                14,
              ),
            ],
          },
          {
            id: "classic-cocktails",
            title: "Classic Cocktails",
            items: [
              item("Margarita", "Silver tequila, lime, triple sec", 13),
              item("Old Fashioned", "Bourbon, bitters, orange", 14),
              item("Mojito", "White rum, mint, lime, soda", 13),
            ],
          },
          {
            id: "non-alcoholic",
            title: "Non-Alcoholic",
            items: [
              item("Virgin Piña Colada", "Coconut cream, pineapple", 8),
              item("Sparkling Water", "San Pellegrino", 5),
              item("Fresh Coconut Water", "Served in shell when available", 7),
            ],
          },
          {
            id: "craft-beer",
            title: "Craft Beer",
            items: [
              item("Roatan Island Brewing Co.", "Rotating local draft", 8),
              item("Seasonal IPA", "Ask your server for today's tap", 9),
            ],
          },
          {
            id: "beer",
            title: "Beer",
            items: [
              item("Salva Vida", "Honduran lager", 6),
              item("Imperial", "Light lager", 6),
              item("Corona", "Imported", 7),
            ],
          },
          {
            id: "house-wines",
            title: "House Wines",
            items: [
              item("House White", "Glass / Bottle", 10),
              item("House Red", "Glass / Bottle", 10),
              item("Rosé", "Glass / Bottle", 11),
            ],
          },
          {
            id: "ahari-select-wines",
            title: "Ahari Select Wines",
            items: [
              item("Sauvignon Blanc", "New Zealand — Glass / Bottle", 14),
              item("Malbec", "Argentina — Glass / Bottle", 14),
              item("Prosecco", "Italy — Glass / Bottle", 13),
            ],
          },
        ],
      },
    ],
  },
  events: [
    {
      id: "live-music-1",
      name: "Live Music at Ahari Beach Bar",
      day: "Wednesday",
      date: "May 21",
      time: "7:00 PM",
      description: "Acoustic sets overlooking the bay. Grab a cocktail and settle in.",
      location: "Ahari Beach Bar",
    },
    {
      id: "yoga",
      name: "Morning Yoga",
      day: "Thursday",
      date: "May 22",
      time: "8:00 AM",
      description: "Gentle flow for all levels. Mats provided.",
      location: "Pool Deck",
    },
    {
      id: "happy-hour",
      name: "Happy Hour — 2×1 Cocktails",
      day: "Friday",
      date: "May 23",
      time: "5:00 PM – 7:00 PM",
      description: "House cocktails and select wines. Twice the island, half the price.",
      location: "Ahari Beach Bar",
    },
    {
      id: "italian-night",
      name: "Italian Night",
      day: "Saturday",
      date: "May 24",
      time: "6:30 PM",
      description: "A themed evening menu inspired by the Mediterranean — reservations recommended.",
      location: "Ahari Restaurant",
    },
  ],
  island: {
    subsections: [
      {
        id: "getting-around",
        title: "Getting Around",
        items: [
          "Water taxis: West End ↔ West Bay, ~$5 per person",
          "Colectivo (shared) taxis: available from the main road",
          "Private driver: available through the front desk",
          "Car rental: $55–$85/day",
          "Airport/ferry transfer: $60/reservation (arrange through Arca)",
        ],
      },
      {
        id: "money-payments",
        title: "Money & Payments",
        items: [
          "USD and Honduran Lempiras (HNL) both accepted",
          "Exchange rate: ~24.5 HNL per $1 USD",
          "Not all places accept credit cards — carry cash",
          "USD bills must be in pristine condition (no rips, tears, stains)",
          "Government taxes: 15% sales tax, 18% alcohol tax, 4% tourism tax",
        ],
      },
      {
        id: "staying-connected",
        title: "Staying Connected",
        items: [
          "Wi-Fi: complimentary throughout property (password at front desk)",
          "WhatsApp is the primary communication method on the island",
          "Local SIM cards available at pulperías (small local stores)",
        ],
      },
      {
        id: "water-sustainability",
        title: "Water & Sustainability",
        items: [
          "No individual plastic water bottles sold at Arca",
          "Free purified water refill stations available to all guests",
          "Bring a reusable water bottle",
          "Protect the reef: do not touch, stand on, or take anything from the reef",
        ],
      },
      {
        id: "health-comfort",
        title: "Health & Comfort",
        items: [
          "Strong UV rays — reef-safe sunscreen recommended",
          "No-see-ums (tiny biting insects) — natural, oil-based bug repellent recommended",
          "Purchase both before arriving on the island",
        ],
      },
      {
        id: "hotel-essentials",
        title: "Hotel Essentials",
        items: [
          "Check-in: 3:00 PM | Check-out: 11:00 AM",
          "Early check-in / late check-out: subject to availability — leave luggage at reception",
          "Lost room key fee: $40",
          "Lost beach towel fee: $30",
          "Snorkel gear rental: $15/day | $70/week (at front desk)",
        ],
      },
      {
        id: "house-rules",
        title: "House Rules",
        items: [
          "Smoking permitted in the open-air bar only — not in rooms or on terraces",
          "Outside massages, hair braiding, and beach vendors are not permitted on property — Arca can arrange private services",
          "Pool and facilities for registered guests only",
          "Respectful behavior expected at all times",
          "Please use the trash bins provided in the bathroom (local plumbing)",
        ],
      },
    ],
  },
  tours: {
    snorkelingNote:
      "Gear rental available at Arca front desk ($15/day, $70/week). Guided snorkel tours also available. Arca sits along the world's second largest barrier reef.",
    partners: [
      {
        id: "west-bay-divers",
        name: "West Bay Divers",
        category: "Scuba Diving",
        description:
          "Next-door neighbors. Discover diving, certification, or fun dives. Boutique service.",
        details: "Book in advance via their website.",
        bookingNote: "Ask the front desk for the latest contact details.",
        recommendation:
          "Our closest dive shop — walk over in your flip-flops.",
      },
      {
        id: "anthonys-key",
        name: "Anthony's Key Resort",
        category: "Dolphin Experience",
        description:
          "30-min meet & greet, 1-hr snorkel & swim, or trainer for a day.",
        details: "Reservations required.",
        bookingNote: "Arca can help arrange transport and reservations.",
      },
      {
        id: "wahoo-slayer",
        name: "Wahoo Slayer",
        category: "Deep Sea Fishing",
        description: "Local, traditional experience with local fishermen.",
        details: "Pricing varies by season and group size.",
        bookingNote: "Contact through the front desk.",
      },
      {
        id: "ruthless-charters",
        name: "Ruthless Charters",
        category: "Deep Sea Fishing",
        description: "Premium, upscale fishing excursion.",
        details: "Half-day and full-day charters available.",
        bookingNote: "Book in advance — popular in high season.",
      },
      {
        id: "mangrove-tours",
        name: "Mangrove Tours (Jonesville)",
        category: "Nature / Eco",
        description: '"Venice of Roatan." Kayak through winding mangrove channels.',
        details: "Departs from Jonesville via water taxi.",
        bookingNote: "Arca can arrange transport.",
        recommendation: "A peaceful half-day away from the beach crowds.",
      },
      {
        id: "gumbalimba",
        name: "Gumbalimba Park",
        category: "Eco-Park / Wildlife",
        description: "Monkeys, parrots, botanical gardens. Guided tours available.",
        details: "Allow a half day for the full experience.",
        bookingNote: "Tickets available at the park or through Arca.",
      },
      {
        id: "chocolate-factory",
        name: "Chocolate Factory",
        category: "Cultural Experience",
        description:
          "2-hour chocolate-making class using Honduran-grown cacao.",
        details: "Classes run on select days — reserve ahead.",
        bookingNote: "Ask reception for the current schedule.",
      },
      {
        id: "kao-kamasa",
        name: "Kao Kamasa Spa",
        category: "Wellness / Spa",
        description: "Full spa treatments nearby.",
        details: "Massages, facials, and body treatments.",
        bookingNote: "Book in advance.",
      },
      {
        id: "spa-baan-suerte",
        name: "Spa Baan Suerte",
        category: "Wellness / Spa",
        description: "Rustic spa experience in a jungle setting.",
        details: "In-room massage also available through Arca.",
        bookingNote: "Book in advance.",
      },
      {
        id: "sundowners",
        name: "Sundowners (West End)",
        category: "Yoga",
        description: "Daily classes at 9:00 AM on the top floor.",
        details: "Private sessions available.",
        bookingNote: "Contact Arca to arrange private sessions.",
      },
      {
        id: "roatan-brewing",
        name: "Roatan Island Brewing Co.",
        category: "Food & Drink",
        description:
          "Jungle brewery. Craft beers, kombucha, artisanal food.",
        details: "Open Wed–Sun. Family friendly.",
        bookingNote: "Taxi from West Bay ~15 minutes.",
        recommendation: "Worth the trip for the IPA alone.",
      },
    ],
  },
};
