# NephSim

Clinical simulators for CRRT — filtration fraction, post-filter hematocrit, sodium correction, regional citrate anticoagulation, and modalities/SCUF.

Pure static site. No build step. Open `index.html` locally to run, or push to GitHub Pages to host.

## Local preview

Just open `index.html` in a browser. Everything is vanilla HTML/CSS/JS with no dependencies.

If you prefer a local server (some browsers are pickier about file paths):

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. **Create a new repo** on GitHub (e.g., `nephsim` or `crrt-tools`).
2. **Push this folder** to the repo's `main` branch:
   ```bash
   cd nephsim
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin git@github.com:<you>/<repo>.git
   git push -u origin main
   ```
3. **Enable Pages**: Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main` → Folder: `/ (root)` → Save.
4. After a minute, your site will be live at `https://<you>.github.io/<repo>/`.

## Custom domain

If you bought a domain (e.g., from Namecheap, Cloudflare, Google Domains):

1. **Edit the `CNAME` file** in this folder. Replace `your-domain.com` with the exact domain you want (no `https://`, no trailing slash).
2. **At your registrar**, add DNS records:
   - For an apex domain (e.g., `nephsim.com`), four A records pointing to:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For a subdomain (e.g., `www.nephsim.com`), a CNAME record pointing to `<you>.github.io`.
3. **In GitHub** → Settings → Pages → Custom domain → enter the domain, save, and tick "Enforce HTTPS" once the certificate is issued (5–60 min).

## Editing

- All styling lives in `assets/css/styles.css`. Change `--accent`, `--bg`, `--text` to retheme.
- Each simulator is a single HTML file under `tools/` with its math in an inline `<script>` at the bottom.
- Shared helpers: `assets/js/shared.js`.
- No frameworks. No package manager. Edit a file, refresh the page.

## Disclaimer

NephSim is for education. Always verify against your unit's protocol and your CRRT machine's documentation before clinical use.
