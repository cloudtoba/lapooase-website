import Image from "next/image";
import { Clock, Flame, MapPin, Sparkles } from "lucide-react";
import { beverageMenu, foodMenu, kidsMenu, snackMenu, type MenuGroup } from "@/data/menu";

const aksaraBatak = "ᯞᯇᯬ ᯀᯬᯀᯘᯩ";
const aksaraOase = "ᯀᯬᯀᯘᯩ";

function MenuSection({
  eyebrow,
  title,
  id,
  groups,
  itemCards = false
}: {
  eyebrow: string;
  title: string;
  id: string;
  groups: MenuGroup[];
  itemCards?: boolean;
}) {
  const cards = itemCards
    ? groups.flatMap((group) =>
        group.items.map((item) => ({
          title: item.name,
          note: item.note ?? group.note,
          items: [item]
        }))
      )
    : groups;

  return (
    <section className="section" id={id}>
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">{title}</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-coal/65">
          Built for easy sharing at the table, from warm bowls to smoky wok dishes and late-night snacks.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((group) => (
          <article key={group.title} className="rounded-lg border border-coal/10 bg-white p-5 text-coal shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-black">{group.title}</h3>
                {group.note ? <p className="mt-1 text-sm font-semibold text-clay">{group.note}</p> : null}
              </div>
              <span className="rounded-md bg-rice px-2 py-1 text-xs font-black text-ember">Lapo</span>
            </div>

            <div className="mt-5 space-y-4">
              {group.items.map((item) => (
                <div key={item.name} className="border-t border-coal/10 pt-4">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.name} at Lapo Oase`}
                      width={900}
                      height={600}
                      className="menu-card-image mb-4 rounded-md"
                    />
                  ) : null}
                  <p className="font-black">{item.name}</p>
                  {item.options ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.options.map((option) => (
                        <span key={option} className="rounded-md bg-coal px-2.5 py-1 text-xs font-bold text-rice">
                          {option}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {item.note ? <p className="mt-2 text-sm text-coal/60">{item.note}</p> : null}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[92vh] overflow-hidden bg-coal text-rice">
        <Image
          src="/images/lapo-oase-storefront-real.png"
          alt="Roadside Lapo Oase storefront with black facade, brick walls, motorbike, and neighborhood street"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coal/15 via-coal/30 to-coal/88" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a href="#" className="rounded-md text-lg font-black tracking-wide">
            Lapo Oase
            <span className="batak-script block text-sm font-semibold text-gold">{aksaraBatak}</span>
          </a>
          <nav className="hidden gap-6 text-sm font-bold text-rice/85 md:flex">
            <a href="#food">Food</a>
            <a href="#beverage">Beverage</a>
            <a href="#snacks-bites">Snacks</a>
            <a href="#kids">Kids</a>
          </nav>
        </header>

        <div className="pointer-events-none absolute inset-x-0 top-[18vh] z-10 flex justify-center px-4 sm:top-[17vh] lg:top-[18vh] xl:top-[19vh]">
          <div className="relative text-center text-gold drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]">
            <div className="sopo-logo-word brushed-gold" aria-label="LAPO">
              <span className="outer">L</span>
              <span className="inner">A</span>
              <span className="inner">P</span>
              <span className="outer">O</span>
            </div>
            <p className="oase-word brushed-gold mt-2">OASE</p>
            <p className="batak-script brushed-gold mt-2 text-2xl font-semibold leading-tight sm:text-3xl">{aksaraOase}</p>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-96px)] max-w-7xl items-end px-4 pb-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-md bg-gold px-3 py-2 text-sm font-black text-coal">
              <Flame className="h-4 w-4" aria-hidden="true" />
              Batak food, warm drinks, late-night bites
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-rice/85 sm:text-lg">
              Kari, Sup, Ngarok Siak Tolu, wok-fried noodles, tuak, bandrek, and snacks made for long tables and
              hungry friends.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#promo" className="rounded-md bg-rice px-5 py-3 text-sm font-black text-coal hover:bg-gold">
                See today promo
              </a>
              <a href="#food" className="rounded-md border border-rice/35 px-5 py-3 text-sm font-black text-rice hover:bg-rice hover:text-coal">
                Explore menu
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="promo" className="bg-coal text-rice">
        <div className="section py-10">
          <div className="grid gap-5 rounded-lg border border-gold/30 bg-rice text-coal shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-6 sm:p-8">
              <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-ember">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Promo hari ini
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Paket Oase Berdua</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-coal/70">
                Pilih satu Kari atau Sup, tambah satu gorengan, dan nikmati Bandrek hangat untuk berdua. Simple,
                comforting, and ready for the table.
              </p>
            </div>
            <div className="grid gap-3 border-t border-coal/10 p-6 sm:grid-cols-3 lg:border-l lg:border-t-0 lg:p-8">
              <div>
                <p className="text-2xl font-black">2</p>
                <p className="text-xs font-bold uppercase text-coal/55">Main bowls</p>
              </div>
              <div>
                <p className="text-2xl font-black">1</p>
                <p className="text-xs font-bold uppercase text-coal/55">Snack plate</p>
              </div>
              <div>
                <p className="text-2xl font-black">Bandrek</p>
                <p className="text-xs font-bold uppercase text-coal/55">On the house</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MenuSection eyebrow="From the kitchen" title="Food" id="food" groups={foodMenu} itemCards />
      <div className="bg-coal/5">
        <MenuSection eyebrow="Warm and cold" title="Beverage" id="beverage" groups={beverageMenu} />
      </div>
      <MenuSection eyebrow="For sharing" title="Snacks/Bites" id="snacks-bites" groups={snackMenu} />
      <div className="bg-coal text-rice">
        <MenuSection eyebrow="Small plates" title="Kids" id="kids" groups={kidsMenu} />
      </div>

      <section className="bg-rice">
        <div className="section grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-5 shadow-soft">
            <Clock className="h-6 w-6 text-ember" aria-hidden="true" />
            <h2 className="mt-3 font-black">Open daily</h2>
            <p className="mt-2 text-sm text-coal/65">Lunch to late dinner. Best with friends, better with sambal.</p>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-soft">
            <MapPin className="h-6 w-6 text-ember" aria-hidden="true" />
            <h2 className="mt-3 font-black">Find us</h2>
            <p className="mt-2 text-sm text-coal/65">A warm black-timber lapo on the neighborhood street.</p>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-soft">
            <Flame className="h-6 w-6 text-ember" aria-hidden="true" />
            <h2 className="mt-3 font-black">Andaliman forward</h2>
            <p className="mt-2 text-sm text-coal/65">Bright Batak spice, smoky wok aroma, and comfort bowls.</p>
          </div>
        </div>
      </section>

      <footer className="bg-coal px-4 py-8 text-center text-sm font-semibold text-rice/70">
        <p>Lapo Oase · {aksaraBatak} · Batak food and beverages</p>
      </footer>
    </main>
  );
}
