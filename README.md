# Team Project #

<!-- This file uses Markdown and is best viewed in a Markdown file viewer. An alternative is to simply view the file online at https://github.com/cafitzp1/TeamProject (scroll down a bit once on the page) -->

## B11-JCMR - Team Members ##

- `J`ared Mole
- `C`onnor Fitzpatrick
- `M`eg Myers
- `R`achel Busch

## Starting the Web Page ##

Our page can be launched using the standard `node <rel-file-path>` command, however a better way is to use `npm start`. This will run a script which runs the correct `node` command by default. This command will work as long as you are anywhere within the project directory in your CLI. The page is then viewed by navigating to `localhost:3000` or `127.0.0.1:3000` in the browser of your choosing (Express web servers use port 3000 by default). HTTP requests will appear in the CLI as requests are made to the server.

## Port Forwarding ##

As demonstrated in our group presentation, aquiring a public URL for our local server is quite simple when using a port forwarding service such as Serveo. In a separate terminal/cmd.exe window, use `ssh -R jcmr:80:localhost:3000 serveo.net` and the website becomes publically available at https://jcmr.serveo.net/ (the server must still be running in the other CLI window). No additional installations are required for this to work on any operating system. More can be read on this service at https://serveo.net/. An additional service is https://ngrok.com/ but you can not use reserved domain names for free with theirs.

## Solution File Structure ##

    .
    ├── bin
    │   └── www
    ├── node_modules
    ├── public
    │   ├── images
    │   ├── scripts
    │   ├── styles
    │   ├── about-page.html
    │   ├── contact.html
    │   ├── index.html
    │   └── products.html
    ├── routes
    │   ├── index.js
    │   └── users.js
    ├── app.js
    ├── package-lock.json
    ├── package.json
    └── README.md

### Explanation ###

- __bin/__ - contains the app entry point file - `www`
- __node_modules/__ - contains node modules required for certain functionalities (mostly for the Express server)
- __public/__ - contains all the static files which get served to clients (js, css, html, images, etc)
- __routes/__ - a place for defining route definitions used in `app.js`
- __app.js__ - initializes the app and glues everything together
- __package-lock.json__ - describes the exact tree that was generated for `node_modules/` modifications (for subsequent installs)
- __package.json__ - lists all the packages our solution depends on

More can be read about the file structure in a typical Express app at https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website