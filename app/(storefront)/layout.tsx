import { Footer } from "@/components/storefront/footer";
import { Navbar } from "@/components/storefront/navbar";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-pattern">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>

      <Footer />
    </div>
  );
}
