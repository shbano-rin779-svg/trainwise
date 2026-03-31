import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/records", label: "Records" },
  { href: "/analysis/muscles", label: "Muscle Analysis" },
];

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          TrainWise
        </Link>

        <nav className="flex gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}