#!/usr/bin/env bash
set -euo pipefail

# Copy images from one or more blog folders into a portfolio folder
# with randomized filenames. Preserves extensions. Skips meta.json and
# cover.* by default (enable with --include-cover).
#
# Usage:
#   bash scripts/copy-blogs-to-portfolio.sh --dest src/assets/portfolios/weddings \
#     src/assets/blogs/weddings/aparna-and-rahul \
#     src/assets/blogs/weddings/sneha-and-akshay
#
# Options:
#   --dest <dir>        Destination portfolio folder (required)
#   --include-cover     Include cover.* files (default: skip)

DEST=""
INCLUDE_COVER=0

usage() {
  echo "Usage: $0 --dest <dir> [--include-cover] <src_dir> [<src_dir> ...]" >&2
}

if [[ $# -lt 2 ]]; then usage; exit 1; fi

ARGS=()
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dest)
      DEST="${2:-}"; shift 2;;
    --include-cover)
      INCLUDE_COVER=1; shift;;
    -h|--help)
      usage; exit 0;;
    *)
      ARGS+=("$1"); shift;;
  esac
done

if [[ -z "$DEST" ]]; then
  echo "Error: --dest is required" >&2
  usage; exit 1
fi

if [[ ${#ARGS[@]} -eq 0 ]]; then
  echo "Error: at least one source directory is required" >&2
  usage; exit 1
fi

mkdir -p "$DEST"

rand_id() {
  if command -v uuidgen >/dev/null 2>&1; then
    uuidgen | tr '[:upper:]' '[:lower:]'
  elif command -v openssl >/dev/null 2>&1; then
    openssl rand -hex 12
  else
    date +%s$$
  fi
}

copied=0
skipped=0

for SRC in "${ARGS[@]}"; do
  if [[ ! -d "$SRC" ]]; then
    echo "Warning: source not found, skipping: $SRC" >&2
    continue
  fi

  echo "Scanning: $SRC"
  while IFS= read -r -d '' f; do
    bn="$(basename "$f")"
    bn_lc="$(printf "%s" "$bn" | tr '[:upper:]' '[:lower:]')"

    # Skip meta.json and optionally cover.*
    case "$bn_lc" in
      meta.json)
        ((skipped++)); continue;;
      cover.webp|cover.jpg|cover.jpeg|cover.png|cover.avif)
        if [[ $INCLUDE_COVER -eq 0 ]]; then ((skipped++)); continue; fi;;
    esac

    ext="${bn##*.}"
    ext_lc="$(printf "%s" "$ext" | tr '[:upper:]' '[:lower:]')"
    id="$(rand_id)"
    out="$DEST/wedding-$id.$ext_lc"
    while [[ -e "$out" ]]; do
      id="$(rand_id)"; out="$DEST/wedding-$id.$ext_lc"
    done

    cp -n "$f" "$out"
    echo "Copied: $f -> $out"
    ((copied++))
  done < <(find "$SRC" -type f \( \
      -iname "*.webp" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.avif" \
    \) -print0)
done

echo "Done. Copied: $copied  Skipped: $skipped  Destination: $DEST"

