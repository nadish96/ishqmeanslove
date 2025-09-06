#!/usr/bin/env bash
set -euo pipefail

# Converts all JPG/JPEG/PNG (and AVIF if ImageMagick supports it) under src/assets to WebP.
# Keeps the same basename, deletes the original after successful conversion.
# Requires one of: cwebp (preferred) or ImageMagick's magick/convert.

QUALITY=82
BASE_DIR="src/assets"
DRY_RUN=0

usage() {
  cat <<EOF
Usage: $0 [--dir <path>] [--quality <1-100>] [--dry-run]

Options:
  --dir       Root folder to process (default: src/assets)
  --quality   WebP quality (default: 82)
  --dry-run   Show what would change without modifying files

Notes:
  - Requires 'cwebp' (libwebp) or 'magick' (ImageMagick).
  - Converts: .jpg, .jpeg, .png. AVIF only if ImageMagick supports it.
  - Existing .webp files are left untouched.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dir)
      BASE_DIR="$2"; shift 2;;
    --quality)
      QUALITY="$2"; shift 2;;
    --dry-run)
      DRY_RUN=1; shift;;
    -h|--help)
      usage; exit 0;;
    *)
      echo "Unknown arg: $1" >&2; usage; exit 1;;
  esac
done

if [[ ! -d "$BASE_DIR" ]]; then
  echo "Directory not found: $BASE_DIR" >&2
  exit 1
fi

has_cwebp=0
has_magick=0
if command -v cwebp >/dev/null 2>&1; then has_cwebp=1; fi
if command -v magick >/dev/null 2>&1; then has_magick=1; fi
if [[ $has_cwebp -eq 0 && $has_magick -eq 0 ]]; then
  echo "Error: Need 'cwebp' or 'magick' (ImageMagick) installed." >&2
  echo "Install on macOS: brew install webp  (or)  brew install imagemagick" >&2
  exit 1
fi

echo "Converting images under: $BASE_DIR"
echo "Quality: $QUALITY  Dry-run: $DRY_RUN"

convert_one() {
  local src="$1"
  local ext="${src##*.}"
  local out="${src%.*}.webp"

  # If output exists and is newer, skip
  if [[ -f "$out" && "$out" -nt "$src" ]]; then
    echo "Skipping up-to-date: $out"
    return 0
  fi

  if [[ $DRY_RUN -eq 1 ]]; then
    echo "Would convert: $src -> $out; then delete $src"
    return 0
  fi

  # Prefer cwebp for JPG/JPEG/PNG
  shopt -s nocasematch
  if [[ $has_cwebp -eq 1 && ( "$ext" == "jpg" || "$ext" == "jpeg" || "$ext" == "png" ) ]]; then
    # For PNG you may consider -lossless; keeping lossy by default for size
    cwebp -q "$QUALITY" "$src" -o "$out" >/dev/null
  else
    if [[ $has_magick -eq 1 ]]; then
      # ImageMagick path. AVIF support depends on build (libheif).
      magick "$src" -quality "$QUALITY" -define webp:method=6 "$out"
    else
      echo "No suitable converter for $src" >&2
      return 1
    fi
  fi

  # Remove original on success
  if [[ -s "$out" ]]; then
    rm -f -- "$src"
    echo "Converted and removed: $src -> $out"
  else
    echo "Failed to produce output: $out" >&2
    return 1
  fi
}

status=0
# Iterate candidates (compatible with macOS bash 3.x; avoids mapfile)
while IFS= read -r -d '' f; do
  # Skip if already .webp (find shouldn't match, but keep guard)
  case "$f" in *.webp|*.WEBP) continue ;; esac
  if ! convert_one "$f"; then status=1; fi
done < <(find "$BASE_DIR" -type f \( \
  -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.avif" \
\) -print0)

if [[ $DRY_RUN -eq 1 ]]; then
  echo "Dry run complete. No files changed."
fi

exit $status
