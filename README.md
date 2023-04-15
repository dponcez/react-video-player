# React Video Player

We use React to create a simple Video Player, this allows us to interact with the player using its own controls or you can create your owns.

## First steps

1. Open a **CLI** (*Command Line Interface*) window.
2. Type *cd*.
3. Choose your path: *cd desktop*.
4. Type mkdir to create a folder on your desktop.
5. Choose your folder name of your project.
6. Type *cd* + your project folder.
7. Type **npx create-next-app** and follow the steps.
8. In your **CLI** window type (*code .*) without parenthesis to open your *VSCode*.
9. Open your *Github account* and create a new empty repository.
10. In your **CLI** type *git init* to initialize a new repository.
11. Into your **CLI** type the following command: *npm init* if you want to craete your own React files.
12. Follow the setup steps.
13. Create a .gitignore file.
You must add ignoring files that your project doesn't include into your repository:

>
    > - #dependencies
    > - #production
    > - #testing
    > - #misc
>

14. Create *.babelrc* file.
15. Create a *webpack.config.js* file, if you want to work with webpack. More information about webpack visit the following site: [getting started with webpack](https://webpack.js.org/guides/getting-started/).
16. Create a *README* file.

17. Install dependencies using **npm** or **yarn**:
>
    > - react
    > - react-dom
    > - @babel/
        - core
        - preset-react 
        - preset-env
        - plugin-transform-runtime
    > - babel-loader
    > - compress
    > - eslint-config-react-app
    > - express
    > - html-loader
    > - sass-loader
    > - file-loader
    > - html-webpack-plugin
    > - webpack-dev-server
>

18. Install development dependencies (devDependencies):
>
    > - css-loader
    > - mini-css-extract-plugin
    > - style-loader
    > - sass
    > - webpack
    > - webpack-cli
>

19. type *npm start* to run your project.

## React folder structure

We know when we install React using the *npm init*, we initialize our own empty project, but if you type the following command *npx create-react-app* + name of your project in  your *CLI*, automatecally React create their own file structure like so.

<figure>
    <img src='https://miro.medium.com/max/608/1*KnQegZWQurLlsLbVSjTzGQ.png' alt='React files'/>
    <figcaption>
        <p>Image was taken from <a href='https://medium.com/swlh/demystifying-the-folder-structure-of-a-react-app-c60b29d90836'>Sayand Das</a> in medium.com
        </p>
    </figcaption>
</figure>

If you need more information about how to start with React for the first time, you should visit the following site [getting stared with react](https://react.dev/learn) or if you want to install ReactJS, go to the following site [create a react app](https://react.dev/learn/start-a-new-react-project).

## Your own folder structure

> **REACTJS-CUSTOM-VIDEO-PLAYER**
> :file_folder: node_modules
> :file_folder: public
    > * :page_facing_up: index.html

> :file_folder: src
    > * :file_folder: assets
    > * :file_folder: components
    > * :file_folder: styles
    > * :page_facing_up: App.css
    > * :page_facing_up: App.js
    > * :page_facing_up: index.css
    > * :page_facing_up: index.js

> :page_facing_up: .babelrc
> :page_facing_up: .gitignore
> :page_facing_up: package-lock.json
> :page_facing_up: package.json
> :page_facing_up: webpack.config.js
> :page_facing_up: README.md
