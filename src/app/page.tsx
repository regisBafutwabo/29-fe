import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background  ">
      <main className="max-w-container mx-auto">
        <h2 className="font-bold text-center">Main</h2>
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
