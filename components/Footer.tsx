export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-gray-500 sm:flex-row lg:px-10">
        <p>© {new Date().getFullYear()} Mikko Socorro. All rights reserved.</p>
        <p>BSIT 2nd Year Student</p>
      </div>
    </footer>
  );
}
