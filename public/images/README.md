# UPNS Website Images (`/public/images/`)

Place all school photographs in this directory. Once uploaded, they will automatically replace the Kootingal-inspired paper-tape photo placeholders across the site.

## How to Upload Your Photos from Your Local Computer (`downloads/upns`)

Since this assistant runs on a remote workspace, you can upload the photos from your local computer's `downloads/upns` folder into this project by:

1. **IDE Drag-and-Drop / File Upload:**
   - In your editor's file explorer on the left, navigate to `public/images/`.
   - Right-click on the `public/images/` folder and select **Upload Files...** (or drag and drop your image files from your local computer's `downloads/upns` folder directly into `public/images/`).
2. **Terminal (`scp` / `gcloud compute scp`):**
   - From your local computer's terminal, you can copy files directly into this workstation:
     ```bash
     # Example using scp from your local machine:
     scp ~/Downloads/upns/*.jpg lishuang.c.googlers.com:/usr/local/google/home/lishuang/Documents/antigravity/vibrant-faraday/public/images/
     ```

## Required Image Filenames

To automatically link with the content definitions in `src/content/`, please name your photo files as follows (from [ASSET-CHECKLIST.md](../../ASSET-CHECKLIST.md)):

### Core Site & Page Photography
- `hero-playground.jpg` — Home (`/`) Hero Section (16:9)
- `teachers-all.jpg` — About (`/about/`) & Home (`/`) (16:9)
- `about-school-building.jpg` — About (`/about/`) History (4:3)
- `coop-family-workday.jpg` — Co-op Life (`/co-op-life/`) (4:3)
- `enrollment-tour.jpg` — Enrollment (`/enrollment/`) (3:2)
- `visit-campus.jpg` — Visit Us (`/visit/`) (16:9)

### Classroom Photography
- `kitten-classroom-01.jpg` & `kitten-classroom-02.jpg`
- `kangaroo-classroom-01.jpg` & `kangaroo-classroom-02.jpg`
- `dolphin-classroom-01.jpg` & `dolphin-classroom-02.jpg`

### Teacher Portraits (1:1 Square)
- `teacher-director.jpg`
- `teacher-veronica-martell.jpg`
- `teacher-nahomi-romero.jpg`
- `teacher-rebekah-taylor.jpg`
- `teacher-brigitte-peistrup.jpg`
- `teacher-maria-maldonado.jpg`
- `teacher-regina-gutierrez.jpg`
- `teacher-kareem-smith.jpg`
- `teacher-sulamithe-ello.jpg`
- `teacher-yadira-montes.jpg`

### School Traditions (16:9)
- `tradition-carnival.jpg`
- `tradition-winter-fair.jpg`
- `tradition-camping.jpg`
- `tradition-underwood-farm.jpg`
