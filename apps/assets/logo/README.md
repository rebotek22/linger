# Zerospace product logo

The mark is a zero drawn as an orbit, open at the upper right where a small
satellite sits, around a rounded Z, in white on a flat black (`#111111`)
rounded tile. The idea: a personal agent
that runs in your own space, with nothing leaving it.

`source/zerospace.svg` is the 1024 × 1024 master. Its elements carry ids
(`tile`, `orbit`, `satellite`, `zed`) so the exporter can derive the
monochrome tray template. `source/wordmark.svg` and `source/wordmark-dark.svg`
are the horizontal lockups for light and dark backgrounds; the lettering is
Inter Display SemiBold converted to outlines, so no font is needed to render it.

## Assets and consumers

- `logo-mark.*` and `app-icon.png`: the tile.
- `logo-horizontal.*`, `logo-wordmark.*`: the primary lockup (dark lettering).
- `logo-horizontal-dark.*`: light lettering for dark headers.
- `windows/zerospace.ico`: 16, 24, 32, 48, 64, 128 and 256 pixel images.
- `macos/zerospace.icns` and `macos/zerospace.iconset`: a padded app tile up to 1024 pixels.
- `linux/<size>x<size>/zerospace.png`: square icons from 16 through 1024 pixels.
- `web/`: SVG, PNG and ICO favicons, Apple touch icon, ordinary and maskable web app icons.
- `tray/`: black orbit-and-Z template shapes on transparency and full-color tiles, at 16 and 32 pixels.
- `preview.jpg`, `preview-dark.jpg`: lockup and small-size previews.

`apps/web/public` holds the four favicon/touch-icon copies and
`zerospace-wordmark.svg`. `BrandMark` uses the favicon SVG on the login screen,
navigation and error surfaces. Connector logos and agent avatars are separate
identities and stay unchanged.

`apps/desktop/resources` holds the app icon, native icon bundles, header lockup
and tray copies. macOS uses only the template alpha; Windows and Linux use the
color tile. `apps/desktop/packaging/mac/background.tiff` is the DMG window
background.

## Regeneration

Install Pillow and CairoSVG, with the Cairo shared library available, then run:

```sh
python3 apps/assets/logo/export.py
```

The exporter derives every size from the checked-in sources and synchronizes
the Web and desktop copies. Copy `logo-horizontal.svg` to
`assets/logo-horizontal.svg` and `apps/web/public/zerospace-wordmark.svg` when
the lockup changes.

`web/site.webmanifest` contains icon entries only. Merge them into the app's
manifest rather than treating this fragment as an installable application.
