/** DAEPL logo — vector redraw of the official mark (flame, red & blue swooshes, green arc). */
export function LogoMark({ id = "lg", className = "logo-mark" }: { id?: string; className?: string }) {
  return (
    <svg viewBox="0 0 96 142" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-f`} cx=".45" cy=".55" r=".6"><stop offset="0" stopColor="#FBB034" /><stop offset="1" stopColor="#F37A30" /></radialGradient>
        <radialGradient id={`${id}-r`} cx=".7" cy=".45" r=".7"><stop offset="0" stopColor="#F7883A" /><stop offset=".45" stopColor="#E9323A" /><stop offset="1" stopColor="#E52E36" /></radialGradient>
        <radialGradient id={`${id}-b`} cx=".55" cy=".55" r=".6"><stop offset="0" stopColor="#00E4FF" /><stop offset="1" stopColor="#0A6CF1" /></radialGradient>
      </defs>
      <path fill="#00A651" d="M10 69C1 82 1 100 6 110c8 18 24 31 41 31 19 0 35-12 42-29 5-12 4-30-2-42 3 14 3 28-2 39-7 15-22 25-38 25s-30-10-37-24c-5-11-6-28 0-41Z" />
      <path fill={`url(#${id}-r)`} d="M34 53C20 66 12 82 13 97c2 19 19 31 37 30 12 0 20-4 25-10-11 4-25 4-35-4-10-7-14-19-14-29 0-12 3-22 8-31Z" />
      <path fill={`url(#${id}-b)`} d="M64 55c14 11 22 25 21 39-1 14-15 24-37 22 12-3 22-10 24-22 1-12-2-26-8-39Z" />
      <path fill={`url(#${id}-f)`} d="M46 0c10 10 16 22 15 38-1 14-11 22-17 32-6 10-8 22-5 40-8-10-11-20-10-32 1-14 9-24 15-34S52 20 46 0Z" />
    </svg>
  );
}

export function Logo({ id, light = false }: { id?: string; light?: boolean }) {
  return (
    <a href="#top" className={`logo${light ? " logo-light" : ""}`} aria-label="Deep Auto Electricals — home">
      <LogoMark id={id} />
      <span className="logo-text">
        <b>DAEPL<sup>®</sup></b>
        <small>Trust On Quality</small>
      </span>
    </a>
  );
}
