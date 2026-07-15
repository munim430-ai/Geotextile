# Hangeul Korean Language & Visa — Operations Manuals

**হাংগুল কোরিয়ান ল্যাংগুয়েজ অ্যান্ড ভিসা — অপারেশনস ম্যানুয়াল প্রকল্প**

এই প্রকল্পে Hangeul Korean Language & Visa (Bangladesh)-এর জন্য দুটি সম্পূর্ণ এন্টারপ্রাইজ-গ্রেড বাংলা অপারেশনস ম্যানুয়াল রয়েছে। উদ্দেশ্য — একজন সম্পূর্ণ নতুন কর্মীকে সুপারভিশন ছাড়াই প্রশিক্ষিত করা।

> **প্রস্তুতকারী:** Rahman Saem — ম্যানেজার (The Manager)

---

## 📚 ম্যানুয়ালসমূহ

| # | ম্যানুয়াল | ফোল্ডার | অধ্যায় | DOCX |
|---|---|---|---|---|
| 1 | কনসালটেন্সি অপারেশনস ম্যানুয়াল | `consultancy_manual/` | ৩০ | `output/Consultancy_Manual.docx` |
| 2 | ডকুমেন্ট অডিট ম্যানুয়াল | `document_manual/` | ৩৫ | `output/Document_Audit_Manual.docx` |

---

## 📁 প্রকল্প কাঠামো

```
project/
├── README.md
├── consultancy_manual/        # Manual 1 — 30টি অধ্যায় (Bangla)
│   ├── 01-cover.md ... 30-appendix.md
├── document_manual/           # Manual 2 — 35টি অধ্যায় (Bangla)
│   ├── 01-cover.md ... 35-appendix.md
├── assets/
│   ├── logos/                 # Hangeul লোগো (PNG)
│   ├── screenshots/           # স্ক্রিনশট প্লেসহোল্ডার
│   ├── templates/             # WhatsApp/কল/ফোল্ডার টেমপ্লেট
│   └── checklists/            # চেকলিস্ট
├── build_docx.py              # Markdown → DOCX বিল্ড স্ক্রিপ্ট (pandoc)
└── output/
    ├── Consultancy_Manual.docx
    └── Document_Audit_Manual.docx
```

---

## 🏢 প্রতিষ্ঠান তথ্য (সারসংক্ষেপ)

| বিষয় | তথ্য |
|---|---|
| প্রতিষ্ঠান | Hangeul Korean Language & Visa |
| দেশ | বাংলাদেশ |
| অফিস সময় | সকাল ৯টা – সন্ধ্যা ৬টা |
| প্রোগ্রাম | KLP, EAP, Bachelor, Master, PhD |
| Application Fee | ২০,০০০ BDT (নন-রিফান্ডেবল) |
| প্রথম কল | নতুন লিডে < ১ ঘণ্টা |
| সর্বোচ্চ কল | ২ বার; প্রতি কলের পর WhatsApp |
| পেমেন্ট নিশ্চিত | অ্যাকাউন্ট্যান্ট |
| ইনসেন্টিভ | ৫০০ BDT / সফল কনভার্সন |

### কনসালটেন্ট বরাদ্দ
- Consultant 1 & 2 → BBA & MBA
- Consultant 3 & 4 → KLP
- Consultant 5 → EAP

---

## 🔧 DOCX পুনরায় তৈরি করা (Build)

প্রয়োজন: `pandoc` (ইনস্টলড)।

```bash
cd project
python3 build_docx.py
```

স্ক্রিপ্টটি প্রতিটি ম্যানুয়ালের সব markdown অধ্যায় একত্র করে, লোগো ও Table of Contents সহ পেশাদার DOCX তৈরি করে `output/` ফোল্ডারে।

> **নোট:** DOCX-এ বাংলা লেখা সঠিকভাবে দেখতে Word/LibreOffice-এ একটি বাংলা ফন্ট (যেমন Nirmala UI / Noto Sans Bengali) থাকা প্রয়োজন।

---

## 🖼️ স্ক্রিনশট প্লেসহোল্ডার

ম্যানুয়ালে `[PLACEHOLDER - ...]` চিহ্নিত স্থানে প্রকৃত স্ক্রিনশট (Google Sheet, Portal, WhatsApp, Payment ইত্যাদি) পরবর্তীতে যুক্ত করতে হবে। সম্পূর্ণ তালিকা প্রতিটি ম্যানুয়ালের পরিশিষ্ট অধ্যায়ে।

---

## ✅ প্রতিটি অধ্যায়ে যা আছে
Purpose · Responsibilities · Step-by-step workflow · Checklist · Common mistakes · Best practices · Escalation · FAQ · Training exercise · Manager checklist — প্রাসঙ্গিক অনুযায়ী।

---

*© Hangeul Korean Language & Visa — অভ্যন্তরীণ ব্যবহারের জন্য (Confidential). প্রস্তুতকারী: Rahman Saem, ম্যানেজার।*
