# shanzheng-tan.github.io

Personal site: about, publications, career, projects and life beyond work.
Live at **https://shanzheng-tan.github.io**.

Built with plain Jekyll (no theme). GitHub Pages builds it automatically on every push to `main`.

## Updating content

Almost everything is edited in `_data/` — no HTML needed.

| What | File |
|---|---|
| Name, role, tagline, photo, links, résumé PDF | `_data/profile.yml` |
| Bio paragraphs (Markdown) | `index.md` |
| Publications | `_data/publications.yml` |
| Career timeline | `_data/career.yml` |
| Projects | `_data/projects.yml` |
| Hobbies / water sports cards | `_data/activities.yml` |
| 360° photos | `_data/panoramas.yml` |
| Race results | `_data/races.yml` |
| Menu order and names | `_data/navigation.yml` |

Each data file has a comment at the top explaining its fields.

### Images and files

Suggested locations (create the folders as needed):

```
assets/img/profile.jpg          profile photo (square)
assets/img/projects/            project thumbnails (16:9)
assets/img/beyond-work/         activity photos (4:3)
assets/img/360/                 equirectangular 360° photos (2:1, < ~10 MB)
assets/files/resume.pdf         résumé
```

Then reference them with a leading slash, e.g. `photo: /assets/img/profile.jpg`.

## Previewing locally (optional)

Requires Ruby ([RubyInstaller](https://rubyinstaller.org/) on Windows).

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Notes

- "Beyond Work" could be renamed to "Off the Clock" in future — see the comment in
  `_data/navigation.yml` and `beyond-work.html`.
- 360° photos use [Pannellum](https://pannellum.org/), loaded only on the Beyond Work page.
