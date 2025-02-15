import Image from "next/image";

import { Button } from "@/components/common/Button/Button";
import { FilledLabel } from "@/components/common/Label/FilledLabel";
import { Label } from "@/components/common/Label/Label";
import { InteractiveComponent } from "@/components/InteractiveComponent";

export default function Home() {
  return (
    <div className="min-h-screen bg-background  ">
      <main className="max-w-container mx-auto">
        <h2 className="font-bold text-center">Main</h2>
        <div className="flex flex-col gap-2">
          <Button variant="outlined" className="h-[52px]" fullWidth>
            Primary Button
          </Button>
          <Label text="Label" />
          <FilledLabel label="Label" className="w-fit" />
          <InteractiveComponent />
        </div>
      </main>
      <footer className="max-w-container mx-auto fixed bottom-0 left-0 right-0 flex justify-center py-4 bg-background border-t border-divider">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://29cm.co.kr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to 29CM →
        </a>
      </footer>
    </div>
  );
}
