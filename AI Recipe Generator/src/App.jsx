import { Homenav } from "./Components/navbar";
import { Hero, Bottom } from "./Components/homehero";
import { Footer } from "./Components/footer";

function App() {
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
      <Footer/>

    </div>
  );
}

export default App;