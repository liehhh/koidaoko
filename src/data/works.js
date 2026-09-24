// image: path under /public (e.g. '/art/moth-saint.jpg'). null → striped placeholder.
// hue: accent hue (oklch) used for frames, markers and placeholders.

export const PORTRAIT = null;
export const EMAIL = 'hello@lika.art';
export const SOCIALS = [
  { label: 'instagram', href: 'http://instagram.com/koidaoko?stkn=MWkxa3hhaXdleXdpZQ==' },
  { label: 'artstation', href: '#' },
  { label: 'behance', href: '#' },
];

export const CATEGORIES = [
  { name: 'Painting', line: 'oil, acrylic, watercolour and gold.', hue: 295 },
  { name: 'Drawing', line: 'graphite, ink and silverpoint.', hue: 60 },
  { name: 'Digital', line: 'characters, covers and moving stills.', hue: 350 },
  { name: 'Photography', line: 'fog, coastlines and blue hours.', hue: 230 },
  { name: 'Interior', line: 'rooms that feel like old stories.', hue: 170 },
];

export const WORKS = [
  { slug: 'nocturne-sleeping-forest', title: 'Nocturne for a Sleeping Forest', cat: 'Painting', year: '2026', medium: 'oil on linen', size: '120 × 90 cm', ratio: '4/5', hue: 295, image: '/art/794027315_18008909213987331_5898431721369241825_n.jpeg',
    desc: 'A pine forest at the exact moment the last light leaves it. Built up in thin violet glazes over a raw umber ground, so the darks glow instead of going flat.',
    note: 'Painted over one winter while listening to the same forty-minute ambient record on repeat.' },
  { slug: 'girl-iron-wings', title: 'Girl with Iron Wings', cat: 'Digital', year: '2025', medium: 'digital painting', size: '6000 × 8000 px', ratio: '3/4', hue: 350, image: null,
    desc: 'A knight-apprentice with wings forged rather than grown. The palette is borrowed from stained glass: cold pewter armour against warm rose light.',
    note: 'Part of an ongoing series of character portraits for an unwritten story.' },
  { slug: 'lavender-hour', title: 'The Lavender Hour', cat: 'Photography', year: '2025', medium: 'archival pigment print', size: '60 × 40 cm', ratio: '3/2', hue: 230, image: null,
    desc: 'Fields at blue hour, shot handheld on the one evening the fog came in low enough to swallow the tree line.',
    note: 'Edition of 10, signed and numbered.' },
  { slug: 'elfwood-chapel', title: 'Elfwood Chapel', cat: 'Interior', year: '2024', medium: 'residential interior', size: 'reading room, 28 m²', ratio: '4/5', hue: 170, image: null,
    desc: 'A reading room designed like a small forest chapel: arched oak shelving, moss-green plaster, and a single window treated as an altar of light.',
    note: 'Furniture, lighting and textiles specified with local makers.' },
  { slug: 'moth-saint', title: 'Moth Saint', cat: 'Drawing', year: '2025', medium: 'graphite & silverpoint', size: '42 × 59 cm', ratio: '1/1', hue: 60, image: null,
    desc: 'A portrait in the manner of an old devotional icon — except the halo is made of moth wings, drawn one scale at a time in silverpoint.',
    note: 'Silverpoint slowly tarnishes; the drawing will keep warming in tone for years.' },
  { slug: 'blue-static', title: 'Blue Static', cat: 'Digital', year: '2026', medium: 'digital painting, animated loop', size: '3840 × 2160 px', ratio: '16/10', hue: 230, image: null,
    desc: 'A girl on a rooftop at 3am, headphones on, city dissolving into signal noise. Painted as a still, then animated into a slow eight-second loop.',
    note: 'Made as cover art for an ambient EP.' },
  { slug: 'knight-who-stayed', title: 'The Knight Who Stayed', cat: 'Painting', year: '2024', medium: 'acrylic & gold leaf on panel', size: '80 × 100 cm', ratio: '4/5', hue: 60, image: null,
    desc: 'An armoured figure asleep beneath a flowering tree, long after the war is over. Gold leaf is used only where the light would actually fall.',
    note: 'Private collection.' },
  { slug: 'low-tide-fog', title: 'Low Tide, Fog', cat: 'Photography', year: '2024', medium: 'medium format film', size: '50 × 50 cm', ratio: '1/1', hue: 170, image: null,
    desc: 'A flat grey coastline where the sea and sky share the same tone. One figure, one dog, and a lot of nothing.',
    note: 'Shot on expired film; the colour shift is left untouched.' },
  { slug: 'hollow-crown', title: 'Hollow Crown', cat: 'Drawing', year: '2023', medium: 'ink on bristol', size: '30 × 40 cm', ratio: '3/4', hue: 295, image: null,
    desc: 'An elven queen rendered almost entirely in cross-hatching, her crown made of antlers and thorns, her expression somewhere between grief and relief.',
    note: 'Originally drawn as a manga chapter title page.' },
  { slug: 'glasshouse-requiem', title: 'Glasshouse Requiem', cat: 'Interior', year: '2025', medium: 'boutique hotel lounge', size: 'lounge, 140 m²', ratio: '3/2', hue: 350, image: null,
    desc: 'A hotel lounge inside a restored Victorian glasshouse: velvet in dusk tones, black iron, and lighting tuned to feel like permanent twilight.',
    note: 'Concept, material palette and bespoke lighting design.' },
  { slug: 'afterimage-3', title: 'Afterimage No. 3', cat: 'Digital', year: '2023', medium: 'digital painting', size: '5000 × 5000 px', ratio: '1/1', hue: 295, image: null,
    desc: 'What stays behind your eyelids after looking too long at a bright window. Abstract, soft, and deliberately unfinished at the edges.',
    note: 'Third in a series of five.' },
  { slug: 'cathedral-of-reeds', title: 'Cathedral of Reeds', cat: 'Painting', year: '2023', medium: 'watercolour & gouache', size: '56 × 76 cm', ratio: '3/4', hue: 170, image: null,
    desc: 'Marsh reeds rising like the columns of a nave, painted wet-in-wet with gouache pulled back in for the fine stems.',
    note: 'Exhibited in the group show “Small Holy Places”.' },
];

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii', 'xiii', 'xiv', 'xv', 'xvi', 'xvii', 'xviii', 'xix', 'xx'];
export const roman = (i) => (ROMAN[i] || String(i + 1)) + '.';

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
export const numberWord = (n) => WORDS[n] || String(n);

export const accent = (hue) => `oklch(0.8 0.09 ${hue})`;
export const soft = (hue) => `oklch(0.93 0.035 ${hue})`;
export const tint = (hue) => `oklch(0.94 0.035 ${hue})`;
