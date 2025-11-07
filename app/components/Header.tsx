import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 p-4 w-full text-zinc-100">
      <nav className="flex justify-between">
        <Link href="/" className="font-bold uppercase text-xl">
          Trail Ready
        </Link>
        <ul>
          <li>
            <Link href="/trail-reports">Trail Reports</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
