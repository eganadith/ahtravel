/** Tiny blur placeholder for next/image */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

export const imagePaths = {
  hero: "/images/hero-dubai.webp",
  tourismCard: "/images/tourism-desert.webp",
  adminCard: "/images/admin-visa.webp",
  ctaBanner: "/images/cta-dubai.webp",
  tourismHero: "/images/tourism-hero.webp",
  adminHero: "/images/admin-hero.webp",
  contactHero: "/images/about/gallery-02.webp",
  airTicketing: "/images/air-ticketing.webp",
  employmentVisa: "/images/employment-visa.webp",
  umrah: "/images/umrah.webp",
  desertSafari: "/images/desert-safari.webp",
  hotelBooking: "/images/hotel-booking.webp",
  documentTyping: "/images/document-typing.webp",
  tourPackages: "/images/tour-packages.webp",
  cruise: "/images/cruise.webp",
  visitVisa: "/images/tourist-visa.webp",
  travelInsurance: "/images/travel-insurance.webp",
  airportPickup: "/images/airport-pickup.webp",
  horseRiding: "/images/horse-riding.webp",
  familyVisa: "/images/family-visa.webp",
  touristVisa: "/images/tourist-visa.webp",
  schengen: "/images/schengen-visa.webp",
  tasheel: "/images/tasheel.webp",
  amer: "/images/amer.webp",
  emiratesId: "/images/emirates-id.webp",
  ded: "/images/business-setup.webp",
  translation: "/images/translation.webp",
  pro: "/images/pro.webp",
  businessSetup: "/images/business-setup-dubai.webp",
  ejari: "/images/ejari.webp",
  drivingLicense: "/images/admin-office.webp",
  medicalInsurance: "/images/medical-insurance.webp",
} as const;

export type ImageKey = keyof typeof imagePaths;
