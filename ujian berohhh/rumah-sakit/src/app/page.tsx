import { Card, CardContent } from "@/components/ui/card"
import { Activity, Heart } from "lucide-react"

export default function Component() {
  return (
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8 border-none">
          <CardContent className="p-6">
            <h2 className="mb-6 text-xl font-semibold text-center">Profil Rumah Sakit Sehat Sejahtera</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="mb-2 font-medium text-green-700">Visi</h3>
                <p className="text-sm text-gray-600">
                  Menjadi rumah sakit terkemuka dalam layanan kesehatan spesialis jantung dan saraf yang terpercaya dengan
                  berbasis teknologi modern.
                </p>
              </section>

              <section>
                <h3 className="mb-2 font-medium text-green-700">Misi</h3>
                <ul className="list-inside list-decimal space-y-2 text-sm text-gray-600">
                  <li>Memberikan pelayanan kesehatan berkualitas tinggi yang berpusat pada kebutuhan pasien.</li>
                  <li>Mengembangkan teknologi medis terkini untuk mendukung diagnosa dan perawatan.</li>
                  <li>Menyediakan tenaga medis dan paramedis profesional serta berpengalaman.</li>
                  <li>Membangun lingkungan yang nyaman dan aman bagi pasien dan keluarga.</li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 font-medium text-green-700">Layanan Unggulan</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <Heart className="h-4 w-4" />
                      Spesialis Jantung
                    </h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                      <li>Layanan kateterisasi jantung (Cath Lab).</li>
                      <li>Pemeriksaan dan perawatan penyakit jantung koroner.</li>
                      <li>Rehabilitasi jantung pascaoperasi.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-medium">
                      <Activity className="h-4 w-4" />
                      Spesialis Saraf
                    </h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                      <li>Diagnosa dan pengobatan stroke.</li>
                      <li>Layanan neurologi komprehensif, termasuk rehabilitasi saraf.</li>
                      <li>Penanganan penyakit neurodegeneratif seperti Parkinson dan Alzheimer.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            <p className="mt-8 text-center text-sm font-medium text-green-700">&quot;Kesehatan Anda, Prioritas Kami.&quot;</p>
            
            <p className="mt-4 text-center text-sm text-gray-600">
              Dengan dedikasi selama 10 tahun dalam memberikan layanan kesehatan, Rumah Sakit Sejahtera terus berkomitmen untuk
              menjadi pilihan utama dalam layanan spesialis jantung dan saraf.
            </p>
          </CardContent>
        </Card>
      </main>
  )
}