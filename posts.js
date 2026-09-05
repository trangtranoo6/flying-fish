// ─────────────────────────────────────────────────────────────
// EDIT ME: this is the only file you need to touch to add posts.
// ─────────────────────────────────────────────────────────────

const SITE = {
  name: "Flying Fish on the Cloud",
  headline: "I write random stuff as a third person in this world",
  tagline: "No particular order, no particular rules.",

  about: `
    <p>Hi from the sky. This is where I keep things that
    don't fit anywhere else — random stories, half-formed thoughts I
    wanted to write down before they disappeared, and the occasional visit
    from characters who exist only in my head.</p>
    <p>There's no theme here on purpose. Some stories are true, some are
    invented, and I usually won't tell you which is which, because I don't like to =))) </p>
    <p>Say hello — <a href="mailto:paigetran0605@gmail.com">paigetran0605@gmail.com</a></p>
  `
};

// The site's sub-branches. Add more anytime — just give it an id and a label,
// then use that id as a post's "category" below.
const CATEGORIES = [
  { id: "random", label: "Fish Wander" },
  { id: "study", label: "Fish Brain" },
  { id: "review", label: "Random Review" }
];

// Each post: id (used in the URL), date, category (must match a CATEGORIES id),
// title, and body. tags and excerpt are optional — leave them out if you don't
// want them.
// Body supports basic HTML: <p>, <h2>, <blockquote>, <figure>/<img>/<figcaption>,
// and <span class="spark"> or <span class="spark spark--alt"> to make a word or
// phrase pop with a playful, handwritten-style color.
const POSTS = [
 /* {
    id: "the-day-the-elevator-agreed-with-me",
    date: "2026-09-02",
    category: "random",
    title: "The day the elevator agreed with me",
    body: `
      <p>I was the only one in the elevator, or so I thought, muttering about
      how Mondays should legally be optional, when a voice — flat, a little
      bored — said "agreed." I have decided not to investigate this further.</p>
      <p>Some days you get an answer you didn't ask for and you just take it.</p>
      <em class="aside">— filed under: things I'm choosing not to explain</em>
    `
  },
  */
  {
    id: "hong-kong-through-her-kaleidoscope",
    date: "2024-09-30",
    category: "random",
    title: "Hong Kong through her kaleidoscope",
    body: `
      <figure>
        <img src="images/hongkong-cloud-doodles.jpg" alt="A bridge over the water at sunset, with two clouds doodled into cartoon animal faces">
        <figcaption>the sky was clearly in a mood that day</figcaption>
      </figure>
      <p>These days, she has been <span class="spark">blasting music</span> while cycling around her neighborhood: Pak Shek Kok, Ma On Shan, and occasionally, when feeling adventurous, all the way to Sha Tin Wai. A <span class="spark spark--alt">whole new horizon</span> has opened up. It's nothing like sitting on the MTR, a bus, or a tram and watching the city go by, and not quite the same as cycling to her highschool back in Nam Dinh either.
      How to describe, it feels like <span class="spark">freedom</span>. Just her, her bike, and the road stretching along the coast. The music turns into a ribbon of sound with <span class="spark spark--alt">Doppler effect</span> =)). Her brain switches into full <span class="spark">NPC silly mode</span>, just breathing in the scents of the plants and grass, mixed with the salty, fishy smell of the sea.
      Now she finally understands why they call this place 香港（<span class="spark spark--alt">Fragrant Harbour</span>）.</p>
      <p>Her friends always say Hong Kong is boring, but somehow she feels the opposite. Perhaps it suits someone as <span class="spark">bland</span> as her. Bland people find each other, she guesses =)).</p>
      There's something about Hong Kong that is modern yet traditional, artificial yet natural. There's the <span class="spark spark--alt">hustle of Central</span>, but also the slow, unhurried weekends spent hiking and staring at the sky. Skyscrapers stand right next to mountains, and bays sit right alongside highways.
      It's contradictory, yet somehow it all makes sense, much like the way her <span class="spark">fish brain</span> works.</p>
      <p>There are plenty of things she doesn't like about this place, too. But her brain is all muddled now. That's just how it is. What can she say? Maybe she's already grown attached to Hong Kong.
      A foreign land that, apart from the place where she was born, has somehow become special to her.
      She'll wait for the day she starts hating this place.
      Probably won't take too long, though, because her moods are as <span class="spark spark--alt">unpredictable as Hong Kong weather</span> (Just kidding =))). But Hong Kong weather is unpredictable for real :3 </p>
    `
  }
  /*,
  {
    id: "a-list-of-things-i-noticed-today",
    date: "2026-08-11",
    category: "random",
    title: "A list of things I noticed today",
    body: `
      <p>The bakery downstairs changes its smell by the hour — bread in the
      morning, something like caramel by four.</p>
      <p>A stranger held the door and we did that thing where you both say
      thank you at the same time and then laugh about it.</p>
      <h2>Small thought</h2>
      <p>Maybe a good day is just several unremarkable things arranged
      nicely.</p>
    `
  },
  {
    id: "sample-study-entry",
    date: "2026-01-01",
    category: "study",
    title: "(placeholder) delete me — this shows how Study posts look",
    body: `
      <p>This is a placeholder so you can see how a Study entry appears on the
      site. Delete this whole object from posts.js once you've written your
      first real one — just copy this structure and swap in your own
      title, date, and body.</p>
    `
  },
  {
    id: "sample-review-entry",
    date: "2026-01-01",
    category: "review",
    title: "(placeholder) delete me — this shows how Review posts look",
    body: `
      <p>Same idea — this is just here so the Review branch isn't empty.
      Swap this out for an actual review whenever you're ready.</p>
    `
  }
  */
];
