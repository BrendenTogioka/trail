import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-zinc-900 text-zinc-100">
      <div className="text-center py-10">
        <Link href="/" className="font-bold uppercase text-xl">
          Trail Ready
        </Link>
      </div>
    </footer>
  );
}
