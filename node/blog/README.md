This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Optional Configuration:

## VSCode Tasks

Using zshrc

Add a new file under `/usr/local/bin/zsh-with-rc`

```zshrc
#!/usr/bin/env zsh

source ~/.zshrc

/bin/zsh $@
```

Then run `chmod +x /usr/local/bin/zsh-with-rc`

In `settings.json` add

```
"terminal.integrated.automationProfile.osx": {
        "path": "/usr/local/bin/zsh-with-rc",
}
```

---

Using bash

Add a new file under `/usr/local/bin/bash-with-profile`

```
#!/usr/bin/env bash

source ~/.bash_profile
source ~/.bashrc

/bin/bash $@
```

Then run `chmod +x /usr/local/bin/bash-with-profile`

In `settings.json` add

```
"terminal.integrated.automationProfile.linux": {
        "path": "/usr/local/bin/bash-with-profile",
}
```
