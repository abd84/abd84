# Deploy @abd84 premium profile

## 1. Create profile repo (one time)

1. Log in as **abd84**
2. https://github.com/new → name **`abd84`** (must match username)
3. Public → Create

## 2. Push

```bash
cd "/Users/abdullah/Desktop/Techinoid/Github Projects/abd84-profile"
git push -u origin main
```

If remote has README: `git pull origin main --rebase && git push -u origin main`

## 3. Enable GitHub Pages (interactive dashboard)

1. Repo **Settings → Pages**
2. Source: **Deploy from branch** → branch `main` → folder `/ (root)`
3. Save → live at **https://abd84.github.io/abd84/**

## 4. Run automation workflows (3D + snake)

1. **Actions** tab → enable workflows if prompted
2. Run **GitHub Profile 3D Contrib** → Run workflow
3. Run **Generate Snake** → Run workflow
4. Wait ~2 min → refresh profile README

## 5. Profile settings

**Bio:**
```
AI & Data Science Engineer | Multimodal Healthcare · CV · NLP · LLM Security | FAST | AquireIQ · StutterNet
```

**Pin:** AquireIQ, StutterNet-, ai-pdf-editor, Adversarial-ResNet-Resilience-Gradient-Perturbation-Fidelity-Analysis-

## What's included

| Asset | Description |
|-------|-------------|
| `README.md` | Animated hero, stats, trophies, mermaid chart, collapsible project matrix |
| `index.html` + `dashboard.*` | **3D Three.js** particle lab + interactive KPI dashboard |
| `assets/*.svg` | Animated neural net + ML pipeline |
| `.github/workflows/` | Auto 3D card + contribution snake |
