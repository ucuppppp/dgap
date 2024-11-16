import Image from "next/image";
import Link from "next/link";


export default function Header() {
    return (
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logo.jpg"
            alt="Logo Rumah Sakit"
            width={500}
            height={500}
            className="h-12 w-auto"
          />
        </div>
        <nav className="mt-6">
          <ul className="flex flex-wrap gap-1 rounded-sm text-sm font-medium">
            {["PROFIL", "POLIKLINIK", "FASILITAS", "LOKASI", "KONTAK"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${
                    item.toLowerCase() === "profil" ? "" : item.toLowerCase()
                  }`}
                  className="bg-[#517D36] px-6 py-2 text-white transition-colors hover:bg-[#3E5E29]"
                >
                  {item}
                </Link>
              )
            )}
          </ul>
        </nav>
      </header>
    );
}