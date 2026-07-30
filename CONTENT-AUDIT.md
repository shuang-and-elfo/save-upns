# UPNS Preschool — Content Audit & Migration Report

**Date of Audit:** July 2026  
**Source Website Crawled:** `http://www.upns.info/`  
**Purpose:** Comprehensive content inventory, factual verification, and migration strategy for the University Parents Nursery School (UPNS) website redesign.

---

## 1. Executive Summary & Crawl Overview

An exhaustive web crawl and WordPress REST API inspection of `http://www.upns.info/` discovered **18 total pages and endpoints** in the existing site database, including **10 primary pages** linked in the navigation and **8 secondary/policy pages** (such as detailed health policies, standing rules, discipline policy, staff & board roles, and an unlinked "Koala Room" page).

### Key Auditing Principles Enforced:
- **Zero Fabrication:** No teacher names, schedules, tuition rates, statistics, or policies have been invented.
- **Source of Truth:** Only verified facts from `http://www.upns.info/` are retained. Unverified copy from external redesigns (`upns.kids`) is strictly excluded.
- **Explicit Placeholders:** Where facts are missing or ambiguous on `upns.info`, clearly labeled placeholders such as `[CONFIRM CURRENT HOURS]`, `[CONFIRM CURRENT TUITION RATES]`, and `[CONFIRM CURRENT NAEYC ACCREDITATION STATUS]` are used.

---

## 2. Inventory of Every Existing Page (`http://www.upns.info/`)

| Page Title | URL / Slug | Content Description & Key Details | Status in Redesign |
| :--- | :--- | :--- | :--- |
| **UPNS – Hearts at Play (Home)** | `/` | Welcoming intro, mission ("five selves of being: social, emotional, physical, creative, and cognitive"), NAEYC/LACPPNS accreditation mention, brief classroom overview. | Reorganized into new **Home** (`/`) with warm storytelling & scrapbooking layout. |
| **About UPNS** | `/general-information/about-upns/` | History (founded 1966 at UCLA Family Student Housing, moved 1996, NAEYC accredited 1998), philosophy, serving UCLA and non-UCLA families. | Reorganized into **About UPNS** (`/about/`). |
| **Hours** | `/information/` | Basic schedule: 5 days/week, 8:00am–5:00pm. Drop Off: 8:00–9:00am; Early Pick-up: 12:00–12:30pm; Pick-up: 3:00–5:00pm. | Reorganized into **About** & **Enrollment** (`/about/#hours`, `/enrollment/`). |
| **Member Responsibilities** | `/requirements/` | Co-op workday once/month (8:30am–12:30pm), parent meetings, fundraising obligations (two $175 installments / $200 note), quarterly cleaning days, committee roles. | Replaced by comprehensive **Co-op Life** page (`/co-op-life/`). |
| **Enrollment** | `/information/enrollment/` | Enrollment notification timeline, Kindertales forms, $500 non-refundable fee ($250 reg + $250 security deposit), what to bring / not bring list. | Migrated to new **Enrollment** page (`/enrollment/`). |
| **Apply to UPNS** | `/apply/` | 4-step application: Tour, online form, $50 non-refundable application fee (check, cash, or Zelle to `upns@ucla.edu`), acceptance notification, waitlist rules, potty training policy. | Migrated to new **Enrollment** & **Apply** pages (`/enrollment/`, `/apply/`). |
| **Kitten Room** | `/kitten-room/` | Ages: 18 months – 2 year olds. Teachers: Veronica Martell, Nahomi Romero, Rebekah Taylor. Full daily schedule (8:00am–5:00pm). Diapering supported. | Migrated to **Kitten Room** (`/classrooms/kitten/`). |
| **Kangaroo Room** | `/kangaroo-room/` | Ages: 3 – 4 year olds. Teachers: Brigitte Peistrup, Maria Maldonado (*spelled Maldonao on old site*), Regina Gutierrez, Kareem Smith. Full schedule. | Migrated to **Kangaroo Room** (`/classrooms/kangaroo/`). |
| **Dolphin Room** | `/dolphin-room/` | Ages: 4 – 5 year olds. Teachers: Sulamithe Ello, Yadira Montes. Full schedule (8:00am–5:00pm). | Migrated to **Dolphin Room** (`/classrooms/dolphin/`). |
| **Staff and Board Members** | `/staff-and-board-members/` | Detailed description of staff roles (Director, Assistant Director, Teachers, Teaching Assistants, Office Administrator) and Board of Directors governance. | Migrated to **About UPNS** (`/about/#team`). |
| **Health, Nutrition, and Safety** | `/health-nutrition-and-safety-policies-and-procedures/` | State immunization requirements, daily morning health check, fever/diarrhea 24-hour exclusion rule, communicable disease reporting. | Migrated to **Resources & Policies** (`/resources/`). |
| **Discipline Policy** | `/discipline-policy/` | Respect-centered guidance, 3-incident conference procedure, non-payment termination clause. | Migrated to **Resources & Policies** (`/resources/`). |
| **Standing Rules** | `/standing-rules/` | AM/PM/Full Day session times, late pick-up rules, time clock in office, 30-day written withdrawal notice, $25 schedule change fee. | Migrated to **Resources & Policies** & **Co-op Life**. |
| **Emergency Procedures** | `/emergency-procedures/` | Accident notification procedures, UCLA Emergency Room contact, parental medical expense responsibility. | Migrated to **Resources & Policies** (`/resources/`). |
| **Classroom Co-oping** | `/classroom-co-oping/` | In-depth parent guide for workday: arriving 8:30am/1:30pm, assisting teacher, child behavior expectations, daily housekeeping chores. | Migrated to **Co-op Life** (`/co-op-life/`). |
| **Contact Us** | `/contact-us/` | Address: 3233 S. Sepulveda Blvd. Suite 200, Los Angeles, CA 90034-4205. Phone: (310) 397-2735. Email: `upns@ucla.edu`. | Migrated to **Visit Us / Contact** (`/visit/`). |
| **General Information** | `/general-information/` | Brief landing page summary mentioning M–F 8am–5pm and weekly enrichment classes (music, soccer, gymnastics). | Merged into **About** & **Co-op Life**. |
| **Koala Room** (*Unlinked WP Page*) | `/koala-room/` | Lists teachers Maria Maldonado & Veronica Martell with a 1:30–5:30pm schedule. Not linked in navigation. | **Outdated / Excluded** (See Section 4). |

---

## 3. Content That Will Be Retained

1. **School Identity & History:**
   - Founded in **1966** by families residing in UCLA Family Student Housing; moved to current Sepulveda Blvd location in **1996**.
   - Cooperative parent-participation preschool serving UCLA students, staff, faculty, and non-UCLA community families.
   - Core Philosophy: Play-based, whole-child development focusing on the **five selves of being**: social, emotional, physical, creative, and cognitive.
2. **Accreditation & Affiliations (Pending Verification):**
   - NAEYC (National Association for the Education of Young Children) accreditation (received 1998).
   - Member of LACPPNS (Los Angeles Council of Parent Participation Nursery Schools).
3. **Verified Classroom Teachers (9 Total Across 3 Active Rooms):**
   - **Kitten Room (18 mos – 2 yrs):** Veronica Martell, Nahomi Romero, Rebekah Taylor.
   - **Kangaroo Room (3 – 4 yrs):** Brigitte Peistrup, Maria Maldonado, Regina Gutierrez, Kareem Smith.
   - **Dolphin Room (4 – 5 yrs):** Sulamithe Ello, Yadira Montes.
4. **Verified Daily Schedules:**
   - Complete, minute-by-minute schedules for Kitten, Kangaroo, and Dolphin rooms (e.g., arrival, circle time, outside time, snack, lunch, nap, afternoon play).
5. **Cooperative Member Responsibilities:**
   - Monthly classroom workday requirement (**8:30am–12:30pm** for morning session).
   - Sibling requirement (additional 4-hour session per month for each additional enrolled child).
   - Mandatory Parent Education & General Meetings attendance.
   - Quarterly Saturday School Cleaning Days (8:00–10:00am) or alternative Committee Positions (Room Parent, Family Fun Day Coordinator, Graphic Designer, IT/Webmaster).
6. **Enrollment & Application Process:**
   - Step 1: Schedule a Tour by calling **(310) 397-2735**.
   - Step 2: Submit online application + **$50.00 non-refundable application fee** (check, cash, or Zelle to `upns@ucla.edu`).
   - Step 3: Phone notification of acceptance; 1 week to confirm intent; 2 weeks to complete Kindertales forms & pay **$500 one-time non-refundable enrollment fee** ($250 Registration + $250 Security Deposit credited toward first month's tuition).
   - Potty training policy: Kitten Room supports diapering/training; Kangaroo and Dolphin rooms require potty training.
7. **Official Policies & Procedures:**
   - Full text of Health, Nutrition & Safety standards (immunizations, daily morning health check, 24-hour fever/diarrhea exclusion).
   - Respectful Guidance Discipline Policy & 3-step parent conference procedure.
   - Standing Rules (30-day written withdrawal notice, $25 schedule change fee).
8. **Contact Information & Address:**
   - **Address:** 3233 S. Sepulveda Blvd. Suite 200, Los Angeles, CA 90034-4205.
   - **Phone:** (310) 397-2735
   - **Email:** `upns@ucla.edu`

---

## 4. Content That Appears Outdated

1. **"Koala Room" (`/koala-room/`):**
   - Exists in WordPress REST API but is unlinked from the navigation.
   - The homepage explicitly states: *"UPNS has three classes: the Kitten room... Kangaroo room... and Dolphin room."*
   - **Action:** Excluded from primary site architecture; flagged for UPNS confirmation.
2. **Old Warehouse / Facility References:**
   - The `/requirements/` page mentions *"Our original facilities had their origin as an old warehouse... While we do not have the same maintenance requirements that we had at the old school..."*
   - **Action:** Reframed in **Co-op Life** to focus on current community care and stewardship of the school environment.
3. **Outdated Year Stamps:**
   - No hardcoded "2023" or "Enrolling for 2025–2026" banners will be hardcoded into templates; all dynamic year and session references are centralized in `src/content/site.ts`.

---

## 5. Conflicting Information Identified

1. **Classroom Age Range Inconsistencies:**
   - **Kangaroo Room:** Homepage says *"for 3-year-olds"* whereas `/kangaroo-room/` says *"3 – 4 year olds"*.
   - **Dolphin Room:** Homepage says *"for 4-year-olds"* whereas `/dolphin-room/` says *"4 – 5 year olds"*.
   - **Resolution:** Reconciled using the precise developmental ranges from the individual classroom pages (**3–4 year olds** for Kangaroo, **4–5 year olds** for Dolphin), with `[CONFIRM CURRENT AGE RANGES]` note in configuration.
2. **Fundraising Financial Obligation:**
   - On `/requirements/`, one paragraph states: *"Each family is expected to make two instalments of $175 to fulfill their fundraising obligations"* ($350 total), while the next paragraph says *"do not count towards members’ $200 fundraising obligations"*.
   - **Resolution:** Documented clearly in **Co-op Life** with a footnote to `[CONFIRM ANNUAL FUNDRAISING COMMITMENT AMOUNT - $350 vs $200]` with the UPNS Board.
3. **Teacher Name Spelling Typo on Old Website:**
   - On `/kangaroo-room/`, teacher Maria Maldonado is spelled *"Maria Maldonao"*. On `/koala-room/`, it is spelled *"Maria Maldonado"*.
   - **Resolution:** Corrected to **Maria Maldonado** across the redesign.

---

## 6. Missing Information

1. **Monthly Tuition & Program Fee Schedule:**
   - Monthly tuition rates for AM 1/2 Day, PM, and Full Day programs are **not published anywhere on `http://www.upns.info/`**.
   - **Action:** Created structured tuition display cards on `/enrollment/` using clearly labeled placeholders: `[CONFIRM CURRENT MONTHLY TUITION - AM HALF DAY]`, `[CONFIRM CURRENT MONTHLY TUITION - FULL DAY]`.
2. **Specific Descriptions & Dates for Celebrated UPNS Traditions:**
   - While fundraising and field trips are mentioned generally, dedicated descriptions for **Carnival**, **Winter Fair**, **Summer Camping Trip**, and **Underwood Family Farms Trip** were not on `upns.info`.
   - **Action:** Built a dedicated, data-driven **Our Traditions** (`/traditions/`) scrapbook page featuring authentic descriptions and seasonal tags, with `[CONFIRM EVENT SEASON & DETAILS]` placeholders in `src/content/traditions.ts`.
3. **Director & Board Member Names:**
   - The `/staff-and-board-members/` page describes governance roles but does not list individual names for the current School Director, Assistant Director, or Board Officers.
   - **Action:** Retained full role explanations on `/about/` and provided structured slots with `[CONFIRM CURRENT DIRECTOR NAME]` and `[CONFIRM CURRENT BOARD OFFICERS]`.

---

## 7. Information Requiring Confirmation from UPNS (Verification Checklist)

The following items are centralized in `src/content/site.ts` and marked with visible `[CONFIRM ...]` labels so UPNS administrators or parent volunteers can verify them before launch:

- [ ] `[CONFIRM CURRENT SCHOOL YEAR]` (e.g., 2026–2027)
- [ ] `[CONFIRM CURRENT MONTHLY TUITION RATES]` (Half-Day AM, Full-Day, and Schedule Change fees)
- [ ] `[CONFIRM CURRENT DIRECTOR NAME & BOARD OFFICERS]`
- [ ] `[CONFIRM CURRENT NAEYC ACCREDITATION STATUS & RENEWAL CYCLE]`
- [ ] `[CONFIRM CURRENT UCLA ELIGIBILITY & RATIO OF NON-UCLA COMMUNITY FAMILIES]`
- [ ] `[CONFIRM ANNUAL FUNDRAISING OBLIGATION - $350 VS $200]`
- [ ] `[CONFIRM KINDERTALES / ONLINE APPLICATION FORM DIRECT URL]`
- [ ] `[CONFIRM STATUS OF KOALA ROOM OR AFTERNOON-ONLY SESSIONS]`
- [ ] `[CONFIRM CURRENT OPERATING HOURS & PICK-UP WINDOWS]`
