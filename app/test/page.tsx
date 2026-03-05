import Image from 'next/image';

export default function TestPage() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/test-bg.jpg"
        alt="Neon-lit server room"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Server Room</h1>
      </div>
    </div>
  );
}
