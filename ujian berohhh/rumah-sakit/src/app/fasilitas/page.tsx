import {Card, CardContent} from "@/components/ui/card";
import {Bed, Building2, Stethoscope} from "lucide-react";
import Image from "next/image";

export default function Fasilitas() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-2xl font-semibold">
        Fasilitas Rumah Sakit Sehat Sejahtera
      </h1>

      <div className="space-y-8">
        {/* Facilities Section */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-medium text-green-700">
            <Building2 className="h-5 w-5" />
            Fasilitas
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              Unit Gawat Darurat 24 jam dengan penanganan kasus darurat jantung
              dan stroke.
            </li>
            <li>Ruang operasi modern dengan standar internasional.</li>
            <li>Laboratorium diagnostik lengkap.</li>
            <li>Fasilitas rawat inap nyaman dengan berbagai kelas.</li>
            <li>Klinik rawat jalan dengan layanan konsultasi spesialis.</li>
          </ul>
        </section>

        {/* Excellence Section */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-medium text-green-700">
            <Stethoscope className="h-5 w-5" />
            Keunggulan
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>
              Mengutamakan teknologi medis terkini seperti MRI, CT Scan, dan EKG
              untuk diagnosa cepat dan akurat.
            </li>
            <li>
              Tim dokter spesialis jantung dan saraf berpengalaman lebih dari 10
              tahun.
            </li>
            <li>
              Program edukasi kesehatan untuk masyarakat seputar pencegahan
              penyakit jantung dan stroke.
            </li>
          </ul>
        </section>

        {/* Rooms Section */}
        <section>
          <h2 className="mb-6 flex items-center gap-2 text-lg font-medium text-green-700">
            <Bed className="h-5 w-5" />
            Kamar
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Class 1 Room */}
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-4 text-center font-medium border-b">
                  Kelas 1
                </h3>
                <Image
                  src="/assets/kelas1.jpg"
                  alt="Kamar Kelas 1"
                  width={300}
                  height={200}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                  <li>1 tempat tidur pasien dengan pengamanan premium</li>
                  <li>Ruangan ber-AC</li>
                  <li>Kamar mandi dengan pemanas air</li>
                  <li>TV LED 32 inci</li>
                  <li>Lemari pakaian kecil</li>
                  <li>Makanan sehat 3 kali sehari</li>
                </ul>
              </CardContent>
            </Card>

            {/* Executive Room */}
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-4 text-center font-medium border-b">
                  Executive
                </h3>
                <Image
                  src="/assets/exe.jpeg"
                  alt="Kamar Executive"
                  width={300}
                  height={200}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                  <li>1 tempat tidur pasien elektrik</li>
                  <li>Ruangan ber-AC</li>
                  <li>Kamar mandi dengan pemanas air</li>
                  <li>TV LED 42 inci dengan saluran kabel</li>
                  <li>Sofa untuk pengunjung</li>
                  <li>WiFi gratis</li>
                  <li>Makanan bisa disesuaikan dengan preferensi</li>
                </ul>
              </CardContent>
            </Card>

            {/* VIP Room */}
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-4 text-center font-medium border-b">VIP</h3>
                <Image
                  src="/assets/vip.jpg"
                  alt="Kamar VIP"
                  width={300}
                  height={200}
                  className="mb-4 h-48 w-full rounded-lg object-cover"
                />
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                  <li>Kamar luas dengan desain mewah</li>
                  <li>1 tempat tidur pasien elektrik</li>
                  <li>Ruangan ber-AC dengan sata interior modern</li>
                  <li>Kamar mandi dengan pemanas air</li>
                  <li>TV LED 55 inci dengan saluran premium</li>
                  <li>Sofa bed dan kursi tambahan untuk keluarga/pengunjung</li>
                  <li>Lemari pakaian besar dan meja kerja eksklusif</li>
                  <li>Mini kulkas, pantry, dan fasilitas pembuat kopi/teh</li>
                  <li>Makanan premium dengan pilihan menu harian</li>
                  <li>Parkir khusus untuk pasien VIP</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
