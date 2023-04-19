# React Video Player

We use React to create a simple Video Player, this allows us to interact with the player using its own controls or you can create your own.

NOTE: **The copyright of the video stored in this project is under the license of its owner and/or owner and is used for the purpose of this player.**

## First steps

1. Open a Command Window or one (*Command Line Interfaces*) or by its acronym in English **CLI** (*Command Line Interface*).
2. In the **CLI** type *cd*.
3. Choose the path, in this case, we write: *cd desktop*.
4. Type *mkdir* to create a file on the desktop.
5. Choose a name for your project folder.
6. Type *cd* + the name of your project folder.
7. Type **npx create-next-app** and follow the steps.
8. In your Command Prompt or *Command Line Interfaces* **CLI**, type (*code .*) without parentheses, to open your *VSCode* or *Visual Studio Code*.
9. Open your *Github Account* and create a new repository.
10. In your **CLI** type *git init* to initialize a new *.git* file.
11. In your **CLI** type the following command: *npm init* to create your own React files.
12. Follow the setup steps.
13. Create a *.gitignore* file.
You must include files that your project will not include in your repository:

>
    > - #dependencies
    > - #production
    > - #testing
    > - #misc
>

14. Create a *.babelrc* file, if you will compile your files with babel.
15. Create a *webpack.config.js* file, if you want to work with webpack. For more information about webpack visit the following website: [getting started with webpack](https://webpack.js.org/guides/getting-started/).
16. Create a *README*.

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

19. Type *npm start* to start or run your project.

## React file structure

We know that when we install React using *npm init*, we initialize our own empty project, but if we type the following command *npx create-react-app* plus the name of the project in the Command Prompt or *CLI*, React will automatically create its own file structure.

NOTE: ***npx create-react-app* is deprecated or deprecated, which means it should no longer be used, now the new syntax should be used to create a new project, like so: *npx create-next-app* .**

<figure>
    <img src='https://miro.medium.com/max/608/1*KnQegZWQurLlsLbVSjTzGQ.png' alt='React files'/>
    <figcaption>
        <p>Image was taken from <a href='https://medium.com/swlh/demystifying-the-folder-structure-of-a-react-app-c60b29d90836'>Sayand Das</a> in medium.com
        </p>
    </figcaption>
</figure>

If you need more information about getting started with React for the first time, visit the following website: [getting stared with react](https://react.dev/learn) or if you want to install React, visit the following website: [ create a react app](https://react.dev/learn/start-a-new-react-project).

## Create your own file structure

You can create your own React file structure, as shown in the image below, or create a different structure.

<figure>
    <img src='https://i.postimg.cc/9fhGTGYx/react-folder-structure.png' alt='react folder structure'/>
    <figcaption>
        <p>React folder structure</p>
    </figcaption>
</figure>

The image above was uploaded and stored at <a href='https://postimages.org/'>postimage.org</a> for use in this project.

Go to [postimages.org](https://postimages.org) and upload your images for free and get free hosting to share your photos on websites or forums.

## Initializing our project

1. Create a file :page_facing_up: *index.html* and put it in the :file_folder: public folder.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React Video Player</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

2. We will create a folder :file_folder: src and inside this, we will include our files :page_facing_up: index.js, :page_facing_up: index.css, :page_facing_up: App.js, :page_facing_up: App.css, in addition to the folders our project, for example, the folder :file_folder: components.

The :page_facing_up: index.js or main.js file contains the code that will be rendered.

```js
//index.js

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from 'App'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)
```

3. Create the :page_facing_up: App.js file and import it into our :page_facing_up index.js file, like the example above.

```js
//App.js

import React from 'react'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'

const App () => {
    return (
        <div className='App'>
            {/*Poner el archivo que se mostrará en el navegador*/}
            <VideoPlayer/>
        </div>
    )
}

export default App
```

4. We will create the :page_facing_up: VideoPlayer.js file that will be included in the :file_folder: folder that will have the same name as the file and this, at the same time, will be in the :file_folder: components folder, then we will import it in the :page_facing_up file : App.js, as in the previous example.

Note: *All :file_folder: folders that will be used in the project must go in the :file_folder: components folder*.

```js
//VideoPlayer.js

import React from 'react'

const VideoPlayer = () => {
    return (
        <div className='video--player'>
        </div>
    )
}

export default VideoPlayer
```

Once we have prepared our file, we will begin to include our structure, in this case, we will add the video tag and include the attributes that it has, to create our Video Player.

For now, we'll use the *controls* attribute to display the video's controls in the browser, then we'll delete this attribute as we'll put our control panel we're creating.

```js
//VideoPlayer.js

import React from 'react'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    return (
        <figure className="figure">
            <div className="player--container">
                <div className="hidden">
                    <video
                        src={video}
                        width='645px'
                        height='375px'
                        loop={false}
                        autoPlay={false}
                        controls
                    ></video>
                </div>
            </div>
        </figure>
    )
}

export default VideoPlayer
```

5. Now we will create a :file_folder: called Controls and we will put it in our Components folder and inside the Controls folder, we will include a :page_facing_up: file with the same name as the folder, in this case Controls.js, then we will import it in our VideoPlayer.js file.

```js
import React from 'react'

const Controls = ({state, onClick}) => {
    <>
        <div className="controllers" role="control player container">
            <div className="player--controls">
            <button
                className="play btn"
                data-prev="play"
                title="Play/Pause"
                aria-describedby="play button"
                onClick={onClick}
            >{state}</button>
            </div>
        </div>
    </>
}

export default Controls
```

6. We will now update our VideoPlayer.js file with our component.

At this point, the controls attribute is removed from the video tag.

```js
//VideoPlayer.js

import React from 'react'
import Controls from '../components/Controls/Controls'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    return (
        <figure className="figure">
            <div className="player--container">
                <div className="hidden">
                    <video
                        src={video}
                        width='645px'
                        height='375px'
                        loop={false}
                        autoPlay={false}
                    ></video>
                    <section className='panel--controls'>
                        <div className='controls'>
                            <Controls
                                state={}
                                onClick={}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </figure>
    )
}

export default VideoPlayer
```

7. Now we will create a function called handleClick inside our VideoPlayer.js file and link it to our Controls component, so that there is interaction with our player, we will also use React *hooks*, in this case we will use *useState*, *useEffect* and *useRef*.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    useEffect(()=> {

    },[videoRef.current])

    const handleClick = () => {

    }

    return (
        <figure className="figure">
            <div className="player--container">
                <div className="hidden">
                    <video
                        src={video}
                        width='645px'
                        height='375px'
                        loop={false}
                        autoPlay={false}
                    ></video>
                    <section className='panel--controls'>
                        <div className='controls'>
                            <Controls
                                state={}
                                onClick={handleClick}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </figure>
    )
}

export default VideoPlayer
```

8. Now we will start to implement code in our handleClick function, using the React *hooks*, in this case we will have *useState* and *useEffect*, as for the video element, we will use *useRef*, to reference the video.

We'll also create other functions inside useEffect and use *addEventListener* to make a call to a specific element. More information about *addEventListener* go to [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    useEffect(()=> {
        const element = videoRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
        }
    },[videoRef.current])

    const handleClick = () => {
        if(!videoRef.current) return
        isPlaying ? 
            videoRef.current.play() :
            videoRef.current.pause()
    }

    return (
        <figure className="figure">
            <div className="player--container">
                <div className="hidden">
                    <video
                        src={video}
                        ref={videoElement}
                        width='645px'
                        height='375px'
                        loop={false}
                        autoPlay={false}
                    ></video>
                    <section className='panel--controls'>
                        <div className='controls'>
                            <Controls
                                state={
                                    isPlaying ?
                                        'Pause' :
                                        'Play'
                                }
                                onClick={handleClick}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </figure>
    )
}

export default VideoPlayer
```

The code above is an excerpt from my React Video Player repository, you can see the full code there.