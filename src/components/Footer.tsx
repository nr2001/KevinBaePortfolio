export default function Footer() {
    return (
      <footer className="py-25 text-center text-sm text-gray-500">
        <p className="mb-4 uppercase tracking-widest">
          © {new Date().getFullYear()} Kevin Bae
        </p>
  
        <div className="flex justify-center gap-10 uppercase tracking-wider text-sm">
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-gray-900 transition"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@kevinbae17"
            target="_blank"
            className="hover:text-gray-900 transition"
          >
            Youtube
          </a>
          <a
            href="mailto:email@example.com"
            className="hover:text-gray-900 transition"
          >
            Email
          </a>
          
        </div>
      </footer>
    );
  }
  