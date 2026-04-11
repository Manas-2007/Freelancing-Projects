import { Homenav } from "./navbar";
import { Hero, Bottom } from "./homehero";
import { Footer } from "./footer";

export function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Homenav />
      <Hero />
      <Bottom />
      <Footer />
    </div>
  );
}