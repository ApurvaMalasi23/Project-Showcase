import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-tech-cyan to-tech-purple rounded-lg flex items-center justify-center animate-glow">
                <span className="text-black font-bold text-sm font-mono">AM</span>
              </div>
              <span className="font-bold text-xl">Apurva Malasi</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              A student at heart passionate about building intelligent applications.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:text-tech-cyan hover:bg-tech-cyan/10" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-tech-cyan hover:bg-tech-cyan/10" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-tech-cyan hover:bg-tech-cyan/10" asChild>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-tech-cyan hover:bg-tech-cyan/10" asChild>
                <Link href="mailto:alex@example.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-tech-cyan font-mono">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-tech-cyan transition-colors font-mono">
                Home
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-tech-cyan transition-colors font-mono"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-tech-cyan transition-colors font-mono"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-tech-purple font-mono">Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/projects?category=ml"
                className="text-sm text-muted-foreground hover:text-tech-purple transition-colors font-mono"
              >
                Machine Learning
              </Link>
              <Link
                href="/projects?category=web"
                className="text-sm text-muted-foreground hover:text-tech-purple transition-colors font-mono"
              >
                Web Development
              </Link>
              <Link
                href="/projects?category=data"
                className="text-sm text-muted-foreground hover:text-tech-purple transition-colors font-mono"
              >
                Data Science
              </Link>
              <Link
                href="/admin"
                className="text-sm text-muted-foreground hover:text-tech-purple transition-colors font-mono"
              >
                Admin
              </Link>
            </nav>
          </div>

          {/* Tech Status */}
          <div className="space-y-4">
            <h3 className="font-semibold text-tech-green font-mono">Status</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tech-green rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-mono">Available for work</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tech-cyan rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-mono">Open to collaborate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tech-purple rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-mono">Learning new tech</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Apurva Malasi. Built with Next.js & TypeScript
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-tech-cyan transition-colors font-mono"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-tech-cyan transition-colors font-mono"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
