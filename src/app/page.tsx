import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  ChevronRight,
  Clock,
  ClipboardList,
  Crown,
  Gamepad2,
  Instagram,
  MapPin,
  Medal,
  MessageCircle,
  MonitorPlay,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Wifi
} from "lucide-react";
import { Countdown } from "./Countdown";

const tournament = {
  name: "OASE CUP #1",
  game: "Mini Turnamen Mobile Legends",
  tagline: "Siapkan squad terbaikmu!",
  dateLabel: "Sabtu, 01 Agustus 2026",
  timeLabel: "10.00 WIB",
  targetDate: "2026-08-01T10:00:00+07:00" as string | null,
  location: "Lapo Oase, depan Terminal Porsea",
  address: "Depan Terminal Porsea",
  maxTeams: 16,
  registeredTeams: [] as string[],
  entryFee: "Rp150.000 / team",
  entryFeeNote: "Makanan & minuman belum termasuk",
  whatsapp: "0895-3423-58377",
  registrationUrl:
    "https://wa.me/62895342358377?text=Halo%20admin%20OASE%2C%20saya%20mau%20daftar%20OASE%20CUP%20%231%20Mobile%20Legends.",
  mapsUrl: "https://maps.google.com/?q=Lapo%20Oase%20Terminal%20Porsea",
  instagramUrl: "https://www.instagram.com/oaseporsea",
  tiktokUrl: "https://www.tiktok.com/@lapo.oase"
};

const prizes = [
  { place: "Juara 1", amount: "Rp1.000.000", note: "+ piagam / penghargaan", accent: "from-gold to-[#f7d77d]" },
  { place: "Juara 2", amount: "Rp650.000", note: "+ piagam / penghargaan", accent: "from-cyan to-[#99f1ff]" },
  { place: "Juara 3", amount: "Rp450.000", note: "+ piagam / penghargaan", accent: "from-ember to-[#f08a56]" }
];

const tournamentFormat = [
  "Sistem gugur / single elimination",
  "Babak awal sampai semifinal: BO1",
  "Perebutan juara 3: BO1",
  "Grand final: BO3",
  "Mode: Custom Draft Pick",
  "Durasi pertandingan: +/- 20-30 menit"
];

const timeline = [
  { label: "Sekarang", title: "Registration Open", text: "Bentuk squad, kirim data tim, dan amankan slot sebelum penuh." },
  { label: "Saat bayar", title: "Slot resmi tercatat", text: "Pendaftaran dianggap resmi setelah pembayaran diterima panitia." },
  { label: "Sebelum TM", title: "Technical Meeting", text: "Semua peserta wajib hadir sebelum technical meeting dimulai." },
  { label: "01 Agu", title: "Tournament Day", text: "Turnamen dimulai pukul 10.00 WIB di Lapo Oase." },
  { label: "Final", title: "Champion Moment", text: "Juara, MVP, trophy, piagam, dan voucher diumumkan setelah final." }
];

const rules = [
  "Semua peserta wajib hadir sebelum technical meeting dimulai.",
  "Toleransi keterlambatan maksimal 10 menit.",
  "Tim yang tidak lengkap setelah batas waktu dapat dinyatakan kalah WO.",
  "Pemain tidak boleh berpindah tim setelah pendaftaran ditutup.",
  "Semua pemain wajib menggunakan akun sendiri.",
  "Semua peserta wajib update Mobile Legends sebelum datang.",
  "Dilarang menggunakan cheat, script, map hack, atau aplikasi pihak ketiga.",
  "Dilarang berkata kasar, toxic, atau membuat keributan.",
  "Keputusan panitia bersifat final."
];

const faqs = [
  { question: "Berapa biaya pendaftaran?", answer: "Biaya pendaftaran Rp150.000 per team. Makanan dan minuman belum termasuk." },
  { question: "Berapa jumlah pemain?", answer: "Setiap tim berisi 5 pemain utama dan maksimal 1 cadangan." },
  { question: "Bisa daftar lebih dari satu slot?", answer: "Bisa. Peserta boleh mendaftar lebih dari sekali dan bayar 2 kali agar bisa main 2 kali di babak gugur." },
  { question: "Apa saja yang wajib dibawa?", answer: "HP siap bermain, charger dan kabel, power bank jika ada, paket data pribadi cadangan, serta pastikan baterai penuh dan game sudah update." }
];

const socials = [
  { label: "Instagram", href: tournament.instagramUrl, icon: Instagram },
  { label: "TikTok", href: tournament.tiktokUrl, icon: MonitorPlay },
  { label: "WhatsApp", href: tournament.registrationUrl, icon: Phone },
  { label: "Maps", href: tournament.mapsUrl, icon: MapPin }
];

const registrationData = [
  "Nama tim",
  "Nama lengkap pemain",
  "Nickname & ID Mobile Legends",
  "Nomor WhatsApp kapten",
  "Nama pemain cadangan jika ada",
  "Bukti pembayaran"
];

const requiredGear = [
  "HP dalam kondisi siap bermain",
  "Charger & kabel",
  "Power bank jika ada",
  "Paket data pribadi sebagai cadangan",
  "Pastikan baterai penuh dan game sudah update"
];

const facilities = [
  "Wi-Fi Starlink di Lapo Oase",
  "Tempat nyaman untuk mabar dan latihan",
  "Live on TV untuk final dan 8 besar",
  "Temukan tim terbaikmu di Lapo Oase"
];

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-volt">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black text-rice sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-rice/68">{text}</p>
    </div>
  );
}

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <div className="stat-card">
      <Icon className="h-5 w-5 text-volt" aria-hidden="true" />
      <div>
        <p className="text-2xl font-black text-rice">{value}</p>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-rice/52">{label}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const registeredCount = tournament.registeredTeams.length;
  const remainingSlots = tournament.maxTeams - registeredCount;
  const progress = (registeredCount / tournament.maxTeams) * 100;

  return (
    <main className="min-h-screen bg-arena text-rice">
      <section className="hero-shell">
        <Image
          src="/images/oase-neon-storefront.png"
          alt="OASE an urban lapo storefront with warm neon signage"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,10,0.95)_0%,rgba(6,7,10,0.82)_44%,rgba(6,7,10,0.45)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-arena to-transparent" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
          <a href="#" className="text-sm font-black uppercase tracking-[0.24em] text-rice">
            OASE
            <span className="block text-[0.65rem] font-semibold normal-case tracking-[0.18em] text-volt">an urban lapo</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm font-bold text-rice/82 md:flex">
            <a href="#poster">Poster</a>
            <a href="#prize">Prize</a>
            <a href="#info">Info</a>
            <a href="#teams">Teams</a>
            <a href="#rules">Rules</a>
            <a href="#contact">Daftar</a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(92vh-84px)] max-w-7xl items-end gap-8 px-4 pb-10 sm:px-6 lg:grid-cols-[1.04fr_0.72fr] lg:pb-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-md border border-volt/35 bg-volt/12 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-volt">
              <Gamepad2 className="h-4 w-4" aria-hidden="true" />
              16 slot terbatas
            </p>
            <h1 className="mt-5 text-5xl font-black leading-none text-rice sm:text-7xl lg:text-8xl">{tournament.name}</h1>
            <p className="mt-3 text-xl font-black uppercase tracking-[0.12em] text-cyan">{tournament.game}</p>
            <p className="mt-3 max-w-2xl text-lg font-black text-rice/84">
              {tournament.tagline} Buktikan siapa penguasa Land of Dawn di Porsea.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-bold text-rice/82 sm:grid-cols-2">
              <p className="inline-flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-volt" aria-hidden="true" />
                {tournament.dateLabel}
              </p>
              <p className="inline-flex items-center gap-2">
                <Clock className="h-5 w-5 text-volt" aria-hidden="true" />
                Start {tournament.timeLabel}
              </p>
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-5 w-5 text-volt" aria-hidden="true" />
                {tournament.location}
              </p>
              <p className="inline-flex items-center gap-2">
                <Trophy className="h-5 w-5 text-volt" aria-hidden="true" />
                Total prize pool Rp2.100.000
              </p>
            </div>
            <div className="mt-8 max-w-2xl">
              <Countdown targetDate={tournament.targetDate} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={tournament.registrationUrl} className="cta-primary">
                Daftar Sekarang
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#bracket" className="cta-secondary">
                Lihat Bracket
              </a>
            </div>
          </div>

          <aside className="hero-scoreboard" aria-label="Tournament slot dashboard">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-rice/50">Slot Turnamen</p>
                <p className="mt-1 text-4xl font-black text-rice">
                  {registeredCount}/{tournament.maxTeams}
                </p>
              </div>
              <div className="rounded-md bg-cyan px-3 py-2 text-sm font-black text-arena">{remainingSlots} slot</div>
            </div>
            <div className="mt-6 h-3 overflow-hidden rounded bg-rice/12">
              <div className="h-full rounded bg-gradient-to-r from-volt via-cyan to-gold" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <StatCard icon={Users} label="Registered" value={`${registeredCount} Team`} />
              <StatCard icon={Trophy} label="Prize Pool" value="2.1JT" />
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <StatCard icon={ClipboardList} label="Entry Fee" value="150K" />
              <StatCard icon={Clock} label="Start" value="10.00" />
            </div>
          </aside>
        </div>
      </section>

      <section id="poster" className="section grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-volt">Poster resmi</p>
          <h2 className="mt-2 text-3xl font-black text-rice sm:text-4xl">Semua info event dalam satu poster</h2>
          <p className="mt-3 text-sm leading-6 text-rice/68">
            Poster ini ikut ditampilkan agar peserta bisa menyimpan, membagikan, atau mengecek ulang detail turnamen dari sumber
            visual yang sama.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="format-pill">
              <CalendarDays className="h-4 w-4 text-cyan" aria-hidden="true" />
              01 Agustus 2026
            </div>
            <div className="format-pill">
              <Clock className="h-4 w-4 text-cyan" aria-hidden="true" />
              Start 10.00 WIB
            </div>
            <div className="format-pill">
              <Users className="h-4 w-4 text-cyan" aria-hidden="true" />
              16 slot terbatas
            </div>
            <div className="format-pill">
              <MessageCircle className="h-4 w-4 text-cyan" aria-hidden="true" />
              {tournament.whatsapp}
            </div>
          </div>
        </div>
        <a href="/images/poster.png" className="poster-frame" aria-label="Buka poster OASE CUP #1 ukuran penuh">
          <Image
            src="/images/poster.png"
            alt="Poster resmi OASE CUP #1 Mini Turnamen Mobile Legends"
            width={1024}
            height={1536}
            className="w-full rounded-md object-cover"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
        </a>
      </section>

      <section id="prize" className="section">
        <SectionIntro
          eyebrow="Prize pool"
          title="Total hadiah Rp2.100.000"
          text="Juara utama, runner-up, juara tiga, dan MVP turnamen semuanya dapat penghargaan. Seru, kompetitif, hadiah mantap."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {prizes.map((prize, index) => (
            <article key={prize.place} className="prize-card">
              <div className={`mb-6 h-2 rounded bg-gradient-to-r ${prize.accent}`} />
              <Medal className="h-9 w-9 text-volt" aria-hidden="true" />
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-rice/52">{prize.place}</p>
              <h3 className="mt-2 text-3xl font-black text-rice">{prize.amount}</h3>
              <p className="mt-3 text-sm font-bold text-cyan">{prize.note}</p>
              {index === 0 ? <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-volt">Champion prize</p> : null}
            </article>
          ))}
        </div>
        <article className="prize-card mt-4 grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
          <Trophy className="h-12 w-12 text-volt" aria-hidden="true" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-rice/52">MVP Turnamen</p>
            <h3 className="mt-1 text-2xl font-black text-rice">Voucher makan & minum Rp100.000</h3>
            <p className="mt-2 text-sm font-bold text-cyan">+ piagam / penghargaan</p>
          </div>
          <div className="flex gap-1 text-volt" aria-label="MVP rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-current" aria-hidden="true" />
            ))}
          </div>
        </article>
      </section>

      <section id="info" className="bg-panel/70">
        <div className="section grid gap-4 lg:grid-cols-4">
          <article className="info-card">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-volt">Biaya pendaftaran</p>
            <h2 className="mt-3 text-3xl font-black text-rice">{tournament.entryFee}</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-rice/62">{tournament.entryFeeNote}</p>
          </article>
          <article className="info-card">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-volt">Jumlah pemain</p>
            <h2 className="mt-3 text-3xl font-black text-rice">5 + 1</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-rice/62">5 pemain utama dan maksimal 1 cadangan.</p>
          </article>
          <article className="info-card">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-volt">Maksimal slot</p>
            <h2 className="mt-3 text-3xl font-black text-rice">16 Team</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-rice/62">Slot terbatas. Jangan sampai kehabisan.</p>
          </article>
          <article className="info-card">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-volt">Boleh multi slot</p>
            <h2 className="mt-3 text-3xl font-black text-rice">x2</h2>
            <p className="mt-2 text-sm font-bold leading-6 text-rice/62">Bisa mendaftar lebih dari sekali dengan pembayaran terpisah.</p>
          </article>
        </div>
      </section>

      <section>
        <div className="section grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionIntro
              eyebrow="Format"
              title="Sistem gugur, custom draft pick"
              text="Format pertandingan mengikuti poster resmi: BO1 untuk babak awal sampai semifinal dan perebutan juara 3, lalu BO3 untuk grand final."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {tournamentFormat.map((item) => (
                <div key={item} className="format-pill">
                  <ShieldCheck className="h-4 w-4 text-cyan" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="teams" className="tournament-panel">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-volt">Team registered</p>
                <h2 className="mt-1 text-3xl font-black text-rice">Live list peserta</h2>
              </div>
              <p className="rounded-md bg-rice/8 px-3 py-2 text-sm font-black text-rice">{remainingSlots} slot tersisa</p>
            </div>

            <div className="mt-6 space-y-3">
              {tournament.registeredTeams.length > 0 ? (
                tournament.registeredTeams.map((team, index) => (
                  <div key={team} className="team-row">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{team}</strong>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <Users className="h-7 w-7 text-volt" aria-hidden="true" />
                  <p className="mt-3 text-lg font-black text-rice">Belum ada tim diumumkan</p>
                  <p className="mt-2 text-sm leading-6 text-rice/60">Daftar tim akan muncul di sini setelah admin verifikasi.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="section">
        <SectionIntro
          eyebrow="Timeline"
          title="Alur menuju match day"
          text="Homepage bisa terus berubah mengikuti fase event: registration, bracket release, live match, sampai champion announcement."
        />
        <div className="timeline-grid">
          {timeline.map((item) => (
            <article key={item.title} className="timeline-card">
              <p className="text-sm font-black text-volt">{item.label}</p>
              <h3 className="mt-3 text-xl font-black text-rice">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-rice/60">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="bracket" className="bg-panel/70">
        <div className="section grid gap-8 lg:grid-cols-[1fr_0.86fr]">
          <div className="bracket-board">
            <div className="bracket-line" />
            <div className="bracket-line short" />
            <div className="bracket-line" />
            <div className="bracket-coming">
              <Crown className="h-9 w-9 text-volt" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-black text-rice">Bracket Coming Soon</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-rice/64">
                Bracket akan diundi setelah pendaftaran ditutup. Nanti tinggal upload gambar bracket di section ini.
              </p>
            </div>
          </div>

          <div id="rules">
            <SectionIntro
              eyebrow="Rules & FAQ"
              title="Peraturan penting"
              text="Aturan dari poster dibuat ringkas agar mudah dibaca sebelum tim mendaftar dan sebelum technical meeting."
            />
            <div className="space-y-3">
              {rules.map((rule) => (
                <div key={rule} className="rule-row">
                  <Sparkles className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  <p>{rule}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stream" className="section grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-volt">Live phase ready</p>
          <h2 className="mt-2 text-3xl font-black text-rice sm:text-4xl">Live on TV untuk 8 besar dan final</h2>
          <p className="mt-3 text-sm leading-6 text-rice/68">
            Bagian ini siap berubah jadi match center saat jadwal sudah ada: LIVE NOW, match berikutnya, dan pengumuman champion.
          </p>
        </div>
        <div className="match-center">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-volt">Match center</p>
            <span className="rounded-md bg-rice/8 px-3 py-1 text-xs font-black text-rice/70">Standby</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="team-placeholder">Team A</div>
            <p className="text-center text-2xl font-black text-cyan">VS</p>
            <div className="team-placeholder">Team B</div>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm font-bold text-rice/60">
            <Clock className="h-4 w-4 text-volt" aria-hidden="true" />
            Jadwal match akan muncul setelah drawing bracket.
          </p>
        </div>
      </section>

      <section className="bg-panel/70">
        <div className="section grid gap-8 lg:grid-cols-3">
          <div>
            <SectionIntro
              eyebrow="Fasilitas"
              title="Mabar, latihan, sparring? Bisa."
              text="OASE disiapkan sebagai tempat kumpul tim sebelum turnamen dimulai."
            />
            <div className="space-y-3">
              {facilities.map((item) => (
                <div key={item} className="rule-row">
                  <Wifi className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Perlengkapan wajib"
              title="Datang siap main"
              text="Pastikan device, koneksi cadangan, dan game sudah aman sebelum masuk venue."
            />
            <div className="space-y-3">
              {requiredGear.map((item) => (
                <div key={item} className="rule-row">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionIntro
              eyebrow="Data pendaftaran"
              title="Kapten tim wajib kirim"
              text="Pendaftaran dianggap resmi setelah pembayaran diterima panitia."
            />
            <div className="space-y-3">
              {registrationData.map((item, index) => (
                <div key={item} className="team-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-rice text-coal">
        <div className="section grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">Daftar & lokasi</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Bentuk squad kalian & daftarkan sekarang</h2>
            <p className="mt-4 flex items-start gap-3 text-sm font-bold leading-6 text-coal/70">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
              {tournament.address}
            </p>
            <p className="mt-3 flex items-start gap-3 text-sm font-bold leading-6 text-coal/70">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
              {tournament.whatsapp}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={tournament.registrationUrl} className="rounded-md bg-coal px-5 py-3 text-sm font-black text-rice hover:bg-ember">
                <MessageCircle className="mr-2 inline h-4 w-4" aria-hidden="true" />
                WhatsApp Admin
              </a>
              <a href={tournament.mapsUrl} className="rounded-md border border-coal/18 px-5 py-3 text-sm font-black text-coal hover:bg-coal hover:text-rice">
                Google Maps
              </a>
            </div>
          </div>
          <Image
            src="/images/oase-nobar-banner.jpeg"
            alt="Lapo Oase watch party banner"
            width={1536}
            height={864}
            className="rounded-md border border-coal/10 object-cover shadow-soft"
          />
        </div>
      </section>

      <footer className="bg-arena px-4 py-8 text-center">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} className="footer-link">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {social.label}
              </a>
            );
          })}
        </div>
        <p className="mt-5 text-sm font-semibold text-rice/52">OASE an urban lapo · OASE CUP #1 · Porsea</p>
      </footer>
    </main>
  );
}
