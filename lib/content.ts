/**
 * DAEPL content shared by the design samples.
 * PLACEHOLDER values (phone, emails, addresses, photos) must be confirmed by DAEPL before launch.
 */

const img = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero1: img("photo-1486262715619-67b85e0b08d3", 2200),
  hero2: img("photo-1581092160562-40aa08e78837", 2200),
  hero3: img("photo-1567789884554-0b844b597180", 2200),
  harness: img("photo-1581092160562-40aa08e78837"),
  factory: img("photo-1567789884554-0b844b597180"),
  production: img("photo-1581092580497-e0d23cbdf1dc"),
  engineering: img("photo-1581092162384-8987c1d64718"),
  component: img("photo-1581092795360-fd1ca04f0952"),
  assembly: img("photo-1581091226825-a6a2a5aee158"),
  lab: img("photo-1581092335878-2d9ff86ca2bf"),
  wiring: img("photo-1558346490-a72e53ae2d4f"),
  metal: img("photo-1504917595217-d4dc5ebe6122"),
  team: img("photo-1581091226033-d5c48150dbaa"),
};

export const company = {
  name: "Deep Auto Electricals Pvt. Ltd.",
  short: "DAEPL",
  tagline: "Trust On Quality",
  since: 1998,
  phone: "+91 XXXXX XXXXX", // PLACEHOLDER
  phoneHref: "tel:+910000000000", // PLACEHOLDER
  email: "info@deepautoelectricals.com",
  whatsapp: "https://wa.me/910000000000", // PLACEHOLDER
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#quality", label: "Quality" },
  { href: "#locations", label: "Locations" },
  { href: "#careers", label: "Careers" },
];

export const categories = [
  { name: "Wire Harnesses", short: "Lighting, instrumentation & ADAS", summary: "Purpose-built harness assemblies for head lamps, tail lamps, meters and ADAS modules — made to drawing and 100% electrically tested.", image: images.wiring, products: ["Head lamp harness", "Tail lamp harness", "Meter harness", "ADAS harness"] },
  { name: "Cable Manufacturing", short: "Automotive & custom cables", summary: "In-house automotive cables and cut, stripped and terminated assemblies in the length, colour and termination you need.", image: images.assembly, products: ["Automotive cables", "Custom cable assemblies"] },
  { name: "Automotive Terminals", short: "Precision stamped terminals", summary: "Connector and battery terminals stamped on tools built in our own tool room, for a secure fit and lasting conductivity.", image: images.production, products: ["Connector terminals", "Battery terminals"] },
  { name: "PVC Sleeves", short: "Insulation & protection", summary: "Extruded PVC sleeves that insulate and protect harness branches against abrasion, heat and moisture.", image: images.harness, products: ["Protective PVC sleeves", "Custom sleeves"] },
  { name: "Sheet Metal Components", short: "Pressed & formed parts", summary: "Brackets, clips and formed parts produced on power presses, with tools designed and maintained in-house.", image: images.metal, products: ["Precision sheet metal parts"] },
  { name: "Plastic Moulded Parts", short: "35 – 180 tonne moulding", summary: "Injection-moulded housings, covers and connector bodies on machines from 35 to 180 tonnes.", image: images.component, products: ["Custom plastic mouldings"] },
];

export const stats = [
  { value: "1998", label: "Manufacturing since" },
  { value: "44", label: "Crimping machines" },
  { value: "35–180T", label: "Injection moulding range" },
  { value: "03", label: "Plants in Delhi NCR" },
];

export const capabilities = [
  { title: "In-house tool room", text: "Press tools and moulds designed, built and maintained under one roof — faster changes, tighter control." },
  { title: "Automatic crimping", text: "44 cut-strip-crimp machines with crimp-height and pull-force monitoring on every batch." },
  { title: "Injection moulding", text: "Machines from 35 to 180 tonnes for housings, covers, grommets and connector bodies." },
  { title: "Internal quality lab", text: "Continuity, pull-force and dimensional checks at incoming, in-process and final stages." },
];

export const steps = [
  { title: "Drawing review", text: "Feasibility, material and cost check by our engineers." },
  { title: "Tooling", text: "Tools and fixtures built in our own tool room." },
  { title: "Production", text: "Controlled processes on automatic machines." },
  { title: "Testing", text: "100% electrical testing and lab inspection." },
  { title: "Dispatch", text: "Packed to your standard, delivered on schedule." },
];

export const certificates = [
  { code: "IATF 16949", title: "Automotive Quality Management System" },
  { code: "ISO 9001", title: "Quality Management System" },
];

export const customers = ["MARUTI SUZUKI", "FIEM INDUSTRIES"];

export const plants = [
  { city: "Samaypur", state: "Delhi", label: "Unit 1 · Head office & plant", status: "Operational" },
  { city: "Bawana", state: "Delhi", label: "Manufacturing plant", status: "Operational" },
  { city: "Kharkhoda", state: "Haryana", label: "Unit 2", status: "Coming soon" },
];
