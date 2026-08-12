import type { Dictionary } from "@/lib/dictionaries";

const WHATSAPP_NUMBER = "212606501059";

export default function WhatsAppButton({ whatsappButton }: { whatsappButton: Dictionary["whatsappButton"] }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappButton.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappButton.ariaLabel}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lift transition-transform duration-200 hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" aria-hidden="true">
        <path d="M16.004 4C9.377 4 4 9.373 4 16c0 2.32.658 4.487 1.797 6.328L4 28l5.828-1.766A11.93 11.93 0 0 0 16.004 28C22.63 28 28 22.627 28 16S22.63 4 16.004 4Zm0 21.867a9.83 9.83 0 0 1-5.017-1.374l-.36-.213-3.457 1.047 1.062-3.37-.234-.347A9.834 9.834 0 0 1 6.133 16c0-5.446 4.428-9.867 9.871-9.867 5.443 0 9.87 4.421 9.87 9.867 0 5.446-4.427 9.867-9.87 9.867Zm5.406-7.393c-.297-.148-1.755-.867-2.027-.965-.272-.099-.47-.148-.668.148-.198.297-.767.965-.94 1.163-.173.198-.347.223-.644.074-.297-.148-1.253-.462-2.386-1.472-.882-.787-1.478-1.76-1.651-2.057-.173-.297-.018-.457.13-.605.134-.133.297-.347.446-.52.148-.174.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.148-.668-1.61-.916-2.204-.241-.579-.486-.5-.668-.51l-.569-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.874 1.213 3.072.148.198 2.096 3.2 5.078 4.489.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.755-.717 2.002-1.41.247-.692.247-1.286.173-1.41-.074-.123-.272-.198-.569-.347Z" />
      </svg>
    </a>
  );
}
