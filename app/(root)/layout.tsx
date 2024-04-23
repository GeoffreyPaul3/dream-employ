import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 min-w[350px]">{children}</main>
      <Footer />
    </div>
  )
}
