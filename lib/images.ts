/** Tiny blur placeholder for next/image */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

export const imagePaths = {
  hero: "/images/hero-dubai.webp",
  tourismCard: "/images/tourism-desert.webp",
  adminCard: "/images/admin-visa.webp",
  ctaBanner: "/images/cta-dubai.webp",
  tourismHeroLeft: "/images/tourism-burj.webp",
  tourismHeroRight: "/images/tourism-desert.webp",
  adminHero: "/images/admin-office.webp",
  aboutTeam: "/images/about-team.webp",
  airTicketing: "/images/air-ticketing.webp",
  employmentVisa: "/images/employment-visa.webp",
  umrah: "/images/umrah.webp",
  desertSafari: "/images/desert-safari.webp",
  hotelBooking: "/images/hotel-booking.webp",
  documentTyping: "/images/document-typing.webp",
  tourPackages: "/images/tour-packages.webp",
  cruise: "/images/cruise.webp",
  visitVisa: "/images/employment-visa.webp",
  travelInsurance: "/images/air-ticketing.webp",
  airportPickup: "/images/air-ticketing.webp",
  horseRiding: "/images/desert-safari.webp",
  familyVisa: "/images/employment-visa.webp",
  touristVisa: "/images/admin-visa.webp",
  schengen: "/images/tour-packages.webp",
  tasheel: "/images/admin-office.webp",
  amer: "/images/admin-office.webp",
  emiratesId: "/images/employment-visa.webp",
  ded: "/images/admin-office.webp",
  translation: "/images/document-typing.webp",
  pro: "/images/pro.webp",
  businessSetup: "/images/admin-office.webp",
  ejari: "/images/admin-office.webp",
  drivingLicense: "/images/admin-office.webp",
  medicalInsurance: "/images/employment-visa.webp",
} as const;

export type ImageKey = keyof typeof imagePaths;
