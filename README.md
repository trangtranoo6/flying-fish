# Flying Fish on the Cloud


## Files
- `index.html` — page shell, loads the other files
- `style.css` — all the design (colors, fonts, layout)
- `posts.js` — Site name, tagline, about text, and every post live here as plain JavaScript objects.
- `script.js` — the router that turns posts.js into pages.

## Add a new post
Open `posts.js` and copy one of the objects inside `POSTS`, then edit it:

```js
{
  id: "a-short-url-slug",       // becomes yoursite.com/#/post/a-short-url-slug
  date: "2026-08-30",           // YYYY-MM-DD
  title: "Your title here",
  tags: ["random"],             // any words you like
  excerpt: "One line that shows up in the list view.",
  body: `
    <p>Your first paragraph.</p>
    <p>Another paragraph. You can use <h2>subheadings</h2>,
    <blockquote>quotes</blockquote>, and
    <em class="aside">handwritten-style asides</em> like this.</p>
  `
}
```
Save the file — no build step needed. New posts sort by date automatically.

## Try it locally
Just open `index.html` in a browser, or run a tiny local server from this folder:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Publish it for free
**Easiest: GitHub Pages**
1. Create a new GitHub repo and upload these 4 files.
2. Go to Settings → Pages → set source to the `main` branch, root folder.
3. Your site is live at `https://yourusername.github.io/reponame`.

**Also easy: Netlify or Vercel**
Drag the folder onto netlify.com/drop, or connect the repo on vercel.com — either gives you a live URL in under a minute, plus the option to add a custom domain later.

## Customize
- Colors, fonts, spacing: `style.css`, top `:root` block.
- Site name/tagline/about: `SITE` object at the top of `posts.js`.
- The mascot's speech bubble lines: `CRITTER_LINES` in `script.js`.
