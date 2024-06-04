import Footer from "@/components/ui/footer";

export default function CodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
