import Link from "next/link";

export default function MainNav() {
  return (
    <div className="w-full">
      <nav className="p-2 px-6 text-primary max-w-4xl mx-auto border">
        <Link href="/" className="flex uppercase items-center gap-2 font-bold">
          Booknext.com
        </Link>
      </nav>
    </div>
  );
}
