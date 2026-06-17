import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string | number | undefined | null): string {
  if (price === undefined || price === null || price === "") {
    return "";
  }
  
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  if (isNaN(numericPrice)) return "";
  
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

export function isProductionEnv(): boolean {
  return process.env.NODE_ENV === "production";
}

export function hasWooCommerceConfig(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_WOOCOMMERCE_URL &&
    process.env.WOOCOMMERCE_CONSUMER_KEY &&
    process.env.WOOCOMMERCE_CONSUMER_SECRET
  );
}
