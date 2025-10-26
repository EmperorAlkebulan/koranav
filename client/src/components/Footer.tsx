import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">KN</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                KoraNav
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              Navigating the future of supply chain intelligence through innovative, secure,
              and intelligent software solutions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover-elevate text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-footer-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Severus-WMS
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  KoraNav Analytics
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  KoraNav Connect
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KoraNav. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
