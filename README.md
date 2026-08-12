# Al-Multaqa Al-Omani — GitHub Pages Ready

This is a standalone static prototype.

## Structure

```text
index.html
style.css
script.js
assets/
  placeholder.svg
```

## Run in VS Code

Open the folder and use **Live Server**, or open `index.html` directly.

## Publish on GitHub Pages

```bash
git init
git add .
git commit -m "Initial prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Then open:

**GitHub repository → Settings → Pages → Deploy from a branch → main → /(root) → Save**

Your public URL will normally be:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

## Important

The original Canva export populated some text and images through Canva-specific SDK scripts.
Those values were not stored directly in the supplied HTML source. This standalone version
therefore contains editable fallback content for those fields and local placeholder images.

The registration form is prototype-only. It shows a success state but does not save or send data.
