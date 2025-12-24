import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="grow overflow-hidden h-full flex flex-col items-center justify-center text-center">
              <h1 className="text-7xl font-bold text-gray-700 dark:text-white mb-4 select-none">404</h1>
              <p className="text-xl text-gray-400 dark:text-gray-300 mb-8">
                {`Oops! Cette page n’existe pas.`}
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-2 rounded bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium transition hover:bg-gray-700 hover:dark:bg-gray-200"
              >
                Retour à l’accueil
              </Link>
            </div>
  )
}