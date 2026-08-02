import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-32 text-center">
      <h1 className="text-4xl font-bold text-ink">404</h1>
      <p className="mt-3 text-neutral-500">Cette page n&apos;existe pas ou n&apos;est plus disponible.</p>
      <Link href="/" className="btn-primary mt-8">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
