/* eslint-disable @next/next/no-img-element */
/** Official DAEPL logo (vector, converted from the client's CorelDRAW master in /public). */
export function LogoMark({ className = "logo-mark" }: { id?: string; className?: string }) {
  return <img src="/daepl-mark.svg" alt="" aria-hidden="true" className={className} />;
}

export function Logo({ light = false }: { id?: string; light?: boolean }) {
  return (
    <a href="#top" className={`logo${light ? " logo-light" : ""}`} aria-label="Deep Auto Electricals — home">
      <img src={light ? "/daepl-logo-white.svg" : "/daepl-logo.svg"} alt="DAEPL — Trust On Quality" width={116} height={100} className="logo-img" />
    </a>
  );
}
