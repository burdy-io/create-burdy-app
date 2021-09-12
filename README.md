# Create Burdy App

The easiest way to create a [Burdy](https://burdy.io) application.

- [Getting Started](#getting-started) — How to create an app
- [User Guide](https://burdy.io/docs) — How to develop apps started with Create Burdy App

## Overview

```sh
npm install -g create-burdy-app

create-burdy-app my-app
cd my-app/
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) to view your running app.
When you're ready for production, run `npm run build` then `npm run start`.

### Start Coding Now

You **don't** need to install or setup Webpack or Babel.
They come packaged with `burdy`, so you can just start coding.

After running `create-burdy-app`, you're good to go!

## Getting Started

### Installation

Install it once globally:

```sh
npm install -g create-burdy-app
```

### Creating an App

To create a new app, run:

```
create-burdy-app my-app
cd my-app
```

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install necessary dependencies:

```
.
├── node_modules
├── project
│   ├── admin
│      ├── index.tsx 
│   ├── types
│      ├── types.d.ts 
│   ├── index.ts
├── docker-compose.yml
├── Dockerfile
├── package.json
├── tsconfig.json
└── [...]
```

Entry points in Burdy are based on the two files:
- `project/admin/index.tsx` (Admin) is used for adding functionality on UI (React) side of the application.
- `project/index.ts` (Server) index.ts is used for adding functionality to server side of application.

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Production building script

Once the installation finishes, you can run some commands in your project:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:4000/admin](http://localhost:4000/admin) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `.burdy/build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start` or `yarn start`

Starts the application in production mode.
The application should be compiled with \`npm run build\` first.

Now you're ready to code & deploy your app!

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas as inspiration:

- [Create Next App](https://github.com/vercel/create-next-app/)
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Next.js](https://github.com/zeit/next.js)
- [@eanplatter](https://github.com/eanplatter)
- [@insin](https://github.com/insin)
- [@mxstbr](https://github.com/mxstbr)
