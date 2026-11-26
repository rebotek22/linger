import type { ReactNode } from "react";

import { AuthIllustration } from "./auth-illustration";

export function AuthShell({
  children,
  subtitle,
  title,
}: {
  children: ReactNode;
  subtitle: string;
  title: string;
}) {
  return (
    <main className="auth-page min-h-dvh text-foreground">
      <header className="auth-brand">
        <img
          alt="Zerospace"
          className="auth-brand-wordmark"
          draggable={false}
          height={256}
          src="/zerospace-wordmark.svg"
          width={1298}
        />
      </header>

      <div className="auth-stage">
        <div aria-hidden="true" className="auth-illustration">
          <AuthIllustration />
        </div>

        <section aria-labelledby="auth-title" className="auth-panel">
          <div className="auth-heading">
            <h1 className="auth-title" id="auth-title">
              {title}
            </h1>
            <p className="auth-subtitle">{subtitle}</p>
          </div>
          {children}
        </section>
      </div>

      <footer className="auth-footer">&copy; 2026 Zerospace</footer>
    </main>
  );
}
