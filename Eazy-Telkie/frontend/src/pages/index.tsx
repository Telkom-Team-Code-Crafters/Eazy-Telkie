import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Telkom Chatbot</h1>
      <div className="mt-6 flex gap-4">
        <Link href="/chatbot" className="px-4 py-2 bg-blue-500 text-white rounded">
          Chatbot
        </Link>
        <Link href="/coverage" className="px-4 py-2 bg-green-500 text-white rounded">
          Coverage
        </Link>
        <Link href="/deals" className="px-4 py-2 bg-purple-500 text-white rounded">
          Deals
        </Link>
      </div>
    </main>
  );
}
