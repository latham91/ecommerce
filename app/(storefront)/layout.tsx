import { Navbar } from "@/components/storefront/navbar";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="h-[500px] w-[800px] bg-primary absolute rounded-full blur-3xl opacity-15 top-[10vh] left-0 -z-10"></div>
        <div className="h-[500px] w-[800px] bg-emerald-500 absolute rounded-full blur-3xl opacity-15 top-[25vh] right-0 -z-10"></div> */}
        {children}
      </main>
    </>
  );
}
