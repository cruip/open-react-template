import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
          {/* Bloc 1 : Logo et baseline */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">LocaFlow</h2>
            <p>Simplifiez votre gestion locative grâce à l'automatisation.</p>
          </div>

          {/* Bloc 2 : Propriétaires */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-2">Propriétaires</h3>
            <ul className="space-y-1">
              <li><Link href="/ajouter-bien" className="hover:underline">Déposer un bien</Link></li>
              <li><Link href="/dashboard" className="hover:underline">Tableau de bord</Link></li>
              <li><Link href="/inscription" className="hover:underline">Créer un compte</Link></li>
            </ul>
          </div>

          {/* Bloc 3 : Locataires */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-2">Locataires</h3>
            <ul className="space-y-1">
              <li><Link href="/recherche" className="hover:underline">Rechercher un logement</Link></li>
              <li><Link href="/visites" className="hover:underline">Organiser une visite</Link></li>
              <li><Link href="/support" className="hover:underline">Support</Link></li>
            </ul>
          </div>

          {/* Bloc 4 : Légal */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-2">Informations</h3>
            <ul className="space-y-1">
              <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="hover:underline">Confidentialité</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} LocaFlow. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
