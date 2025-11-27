import { z } from 'zod'
import { accommodationPricing, dayPicnicPricing } from './pricing'

export const DayPicnicBookingSchema = z.object({
  package: z.enum(['4hr', '6hr', '8hr']),
  date: z.string().min(1),
  timeSlot: z.enum(['morning', 'afternoon', 'full']),
  pets: z
    .array(
      z.object({
        name: z.string().min(1),
      })
    )
    .min(1),
  owner: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(6),
  }),
  addOns: z.array(
    z.enum(['horseRiding', 'training', 'grooming', 'photos', 'specialMeal'])
  ).optional().default([]),
  acceptTerms: z.boolean().refine((v) => v, 'You must accept terms'),
})
export type DayPicnicBookingInput = z.infer<typeof DayPicnicBookingSchema>

export const BoardingBookingSchema = z.object({
  accommodationType: z.enum(['standard', 'premium', 'luxury', 'group']),
  checkInDate: z.string().min(1),
  checkOutDate: z.string().min(1),
  pets: z
    .array(
      z.object({
        name: z.string().min(1),
      })
    )
    .min(1),
  owner: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(6),
  }),
  amenities: z.array(
    z.enum(['horseRiding', 'training', 'grooming', 'photos', 'specialMeal'])
  ).optional().default([]),
  preBoardingVisit: z.boolean().optional().default(false),
  acceptTerms: z.boolean().refine((v) => v, 'You must accept terms'),
})
export type BoardingBookingInput = z.infer<typeof BoardingBookingSchema>

export const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6),
  service: z.enum(['day-picnic', 'boarding', 'general']).default('general'),
  preferredDate: z.string().optional(),
  message: z.string().min(1),
})
export type ContactInput = z.infer<typeof ContactSchema>


