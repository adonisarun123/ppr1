export const dayPicnicPricing = {
  '4hr': 1500,
  '6hr': 2000,
  '8hr': 2500,
} as const

export type DayPackage = keyof typeof dayPicnicPricing

export const accommodationPricing = {
  standard: 3000,
  premium: 4500,
  luxury: 6000,
  group: 5000,
} as const

export type AccommodationType = keyof typeof accommodationPricing

export const amenityPricing = {
  horseRiding: { price: 500, perDay: false },
  training: { price: 800, perDay: true },
  grooming: { price: 1000, perDay: false },
  photos: { price: 1500, perDay: false },
  specialMeal: { price: 300, perDay: true },
} as const

export type AmenityKey = keyof typeof amenityPricing

export function calculateDayPicnicPrice(pkg: DayPackage, numPets: number, addOns: AmenityKey[]) {
  const base = dayPicnicPricing[pkg] * Math.max(1, numPets)
  const addOnTotal = addOns.reduce((sum, key) => sum + amenityPricing[key].price, 0)
  return base + addOnTotal
}

export function calculateNights(checkIn: Date, checkOut: Date) {
  const diff = checkOut.getTime() - checkIn.getTime()
  const nights = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
  return nights
}

export function calculateBoardingPrice(
  accommodation: AccommodationType,
  nights: number,
  numPets: number,
  amenities: AmenityKey[]
) {
  const base = accommodationPricing[accommodation] * Math.max(1, nights)
  const amenityTotal = amenities.reduce((sum, key) => {
    const a = amenityPricing[key]
    return sum + (a.perDay ? a.price * Math.max(1, nights) : a.price)
  }, 0)
  const subtotal = base + amenityTotal
  const multiPetDiscount = numPets > 1 ? 0.1 : 0
  return Math.round(subtotal * (1 - multiPetDiscount))
}

export const offers = {
  dayPicnic: {
    bestValue: '8hr',
  },
  boarding: {
    weeklyDiscountPercent: 10,
    monthlyDiscountPercent: 20,
  },
}


