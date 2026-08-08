export default function Footer() {
  return (
    <footer className="border-t border-[#E8D8D2] bg-[#FFF9F4] px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

          {/* Brand */}
          <div>
            <h2
              className="text-2xl font-bold text-[#3A2E2E]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Nurtured Knots 🧶
            </h2>

            <p className="mt-2 text-sm text-[#7A6865]">
              Handmade with love, one knot at a time.
            </p>
          </div>

          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#C97B84] px-6 py-2.5 text-sm font-medium text-[#C97B84] transition-all duration-300 hover:bg-[#C97B84] hover:text-white"
          >
            Follow us on Instagram
          </a>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-[#E8D8D2] pt-6 text-center">
          <p className="text-xs text-[#9A8985]">
            © {new Date().getFullYear()} Nurtured Knots · Handmade with love 🤍
          </p>
        </div>

      </div>
    </footer>
  );
}