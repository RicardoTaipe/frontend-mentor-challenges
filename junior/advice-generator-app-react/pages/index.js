import { Manrope } from "next/font/google";
import dynamic from "next/dynamic";
const AdviceGenerator = dynamic(() => import("@/components/AdviceGenerator"));

const manrope = Manrope({ weight: "800", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center ${manrope.className} bg-dark-blue w-full`}
    >
      <AdviceGenerator />
    </main>
  );
}
