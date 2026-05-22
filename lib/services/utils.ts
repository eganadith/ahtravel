import type { AdminService } from "@/lib/services/admin";
import { adminServices } from "@/lib/services/admin";
import type { TourismService } from "@/lib/services/tourism";
import { tourismServices } from "@/lib/services/tourism";

export type ServiceNamespace = "tourism" | "admin";

export type ServiceRecord = TourismService | AdminService;

export function tourismServicePath(id: string) {
  return `/tourism/${id}` as const;
}

export function adminServicePath(id: string) {
  return `/admin-services/${id}` as const;
}

export function servicePath(namespace: ServiceNamespace, id: string) {
  return namespace === "tourism" ? tourismServicePath(id) : adminServicePath(id);
}

export function getTourismService(slug: string): TourismService | undefined {
  return tourismServices.find((s) => s.id === slug);
}

export function getAdminService(slug: string): AdminService | undefined {
  return adminServices.find((s) => s.id === slug);
}

export function getService(
  namespace: ServiceNamespace,
  slug: string
): ServiceRecord | undefined {
  return namespace === "tourism" ? getTourismService(slug) : getAdminService(slug);
}
