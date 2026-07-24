export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Mouad El Bahraoui. All rights reserved.</p>
        <p className="font-mono text-xs">
          Built with <span className="text-foreground">React</span> &middot;{' '}
          <span className="text-foreground">Next.js</span> &middot;{' '}
          <span className="text-foreground">TailwindCSS</span>
        </p>
      </div>
    </footer>
  )
}
