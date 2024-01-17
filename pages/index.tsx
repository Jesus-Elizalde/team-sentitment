import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <h1>Welcome! Let's see how the world feels about your team.</h1>
        <form>
          <label>Enter a full team name</label>
          <div>
            <input type="text" placeholder="San Diego Padres" />
          </div>
          <div>
            <button type="submit">Check on Team</button>
          </div>
        </form>
      </div>
    </main>
  );
}
