export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Bienvenue sur LocaFlow
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10">
            Simplifiez la gestion locative : dépôt de bien, recherche de logement, automatisation des démarches.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-white font-semibold hover:bg-indigo-600 transition"
              href="/auth/login?role=owner"
            >
              🏠 Propriétaire
            </a>

            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-6 py-3 text-white font-semibold hover:bg-slate-700 transition"
              href="/auth/login?role=tenant"
            >
              🔑 Locataire
            </a>

            <a
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-slate-800 font-semibold hover:bg-slate-100 transition"
              href="/annonces"
            >
              📢 Nos annonces
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
