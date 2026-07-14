#!/usr/bin/env python3
"""
Build professional DOCX manuals for Hangeul Korean Language & Visa.
Concatenates the numbered Bangla markdown chapters in each manual folder,
strips LaTeX-only markup, inserts DOCX page breaks between chapters, adds the
company logo + title block, and renders to output/ with a Table of Contents.

Usage:  python3 build_docx.py
Requires: pandoc
"""
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
LOGO = os.path.join(ROOT, "assets", "logos", "hangeul_logo.png")
OUT = os.path.join(ROOT, "output")

MANUALS = [
    {
        "dir": "consultancy_manual",
        "out": "Consultancy_Manual.docx",
        "title": "কনসালটেন্সি অপারেশনস ম্যানুয়াল",
        "subtitle": "Consultancy Operations Manual — Hangeul Korean Language & Visa",
    },
    {
        "dir": "document_manual",
        "out": "Document_Audit_Manual.docx",
        "title": "ডকুমেন্ট অডিট ম্যানুয়াল",
        "subtitle": "Document Audit Manual — Hangeul Korean Language & Visa",
    },
]

PAGE_BREAK = '\n\n```{=openxml}\n<w:p><w:r><w:br w:type="page"/></w:r></w:p>\n```\n\n'


def strip_frontmatter(text):
    """Remove a leading YAML block delimited by --- ... ---."""
    if text.lstrip().startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            return parts[2]
    return text


def strip_latex(text):
    """Drop LaTeX-only lines that DOCX cannot render and neutralise
    stand-alone `---` rules (pandoc would otherwise parse them as extra
    YAML metadata blocks mid-document). `* * *` is the same thematic break."""
    out = []
    for line in text.splitlines():
        s = line.strip()
        if s in ("\\begin{center}", "\\end{center}", "\\newpage"):
            continue
        if "\\includegraphics" in s:
            continue
        if s == "---":
            out.append("* * *")
            continue
        out.append(line)
    return "\n".join(out)


def build(manual):
    src_dir = os.path.join(ROOT, manual["dir"])
    files = sorted(f for f in os.listdir(src_dir) if f.endswith(".md"))
    chapters = []
    for f in files:
        with open(os.path.join(src_dir, f), encoding="utf-8") as fh:
            body = strip_latex(strip_frontmatter(fh.read())).strip()
        chapters.append(body)

    logo_rel = os.path.relpath(LOGO, src_dir)
    header = (
        "---\n"
        f'title: "{manual["title"]}"\n'
        f'subtitle: "{manual["subtitle"]}"\n'
        'author: "প্রস্তুতকারী: Rahman Saem — ম্যানেজার (The Manager)"\n'
        'date: "সংস্করণ ১.০ — ২০২৬"\n'
        'lang: bn\n'
        "---\n\n"
        f"![]({logo_rel})\n\n"
    )
    combined = header + PAGE_BREAK.join(chapters)

    tmp_md = os.path.join(src_dir, "_combined.tmp.md")
    with open(tmp_md, "w", encoding="utf-8") as fh:
        fh.write(combined)

    out_path = os.path.join(OUT, manual["out"])
    cmd = [
        "pandoc", tmp_md,
        "-f", "markdown+raw_attribute",
        "-o", out_path,
        "--toc", "--toc-depth=2",
        "--number-sections",
        "-V", "lang=bn",
    ]
    try:
        subprocess.run(cmd, check=True, cwd=src_dir)
        print(f"[OK] {manual['out']}  ({len(chapters)} chapters)")
    finally:
        if os.path.exists(tmp_md):
            os.remove(tmp_md)


def main():
    os.makedirs(OUT, exist_ok=True)
    if subprocess.call(["which", "pandoc"], stdout=subprocess.DEVNULL) != 0:
        sys.exit("pandoc not found. Please install pandoc.")
    for m in MANUALS:
        build(m)
    print("Done. DOCX files are in:", OUT)


if __name__ == "__main__":
    main()
