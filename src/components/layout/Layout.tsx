import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutPrors {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutPrors) => {
  return(
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  )
};
