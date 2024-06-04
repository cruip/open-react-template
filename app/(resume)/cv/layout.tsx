import Footer from "@/components/ui/footer";

export default function ResumeLayout({
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
