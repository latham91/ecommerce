import { Navbar } from "@/components/storefront/navbar";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
}
