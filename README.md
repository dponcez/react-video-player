# React Video Player

We use React to create a simple Video Player, this allows us to interact with the player using its own controls or you can create your own.

NOTE: **The copyright of the video stored in this project is under the license of its owner and/or owners and is used for the purpose of this player and not for commercial use.**

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

3. Create the :page_facing_up: App.js file and import it into our :page_facing_up: index.js file, like the example above.

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

4. We will create the :page_facing_up: VideoPlayer.js file that will be included in the :file_folder: folder that will have the same name as the file and this, at the same time, will be in the :file_folder: components folder, then we will import it in the :page_facing_up: file App.js, as in the previous example.

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
                        {/* <!-- controls --> */}
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
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

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
                        {/* <!-- controls --> */}
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
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

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
            videoRef.current.pause() :
            videoRef.current.play()
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
                        {/* <!-- controls --> */}
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

9. Now we will create a progress bar to visualize the movement of the current task.

```js
import React from 'react'

const ProgressBar = ({value, onChange, className}) => {
  return (
    <div className="progress" data-progress="progress" role="progressbar">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className={className} 
        data-progress-bar="progress--bar"/>
    </div>
  )
}

export { ProgressBar }
```

10. We will import our ProgressBar component into our VideoPlayer and use it in our structure, in the section tag with the class name 'panel--controls'.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

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
            videoRef.current.pause() :
            videoRef.current.play()
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
                        <ProgressBar
                            className="progress--bar"
                            onChange={}
                            value={}
                        />
                        {/* <!-- controls --> */}
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

11. Now we will create a function that handle our current progress, like the example below.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)

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
            videoRef.current.pause() :
            videoRef.current.play()
    }

    const handleProgress = (e) => {}

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
                        <ProgressBar
                            className="progress--bar"
                            onChange={}
                            value={}
                        />
                        {/* <!-- controls --> */}
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

12. Now it´s time to work with our handleProgress function like so.

```js
const handleProgress = (e) => {
    const value = Number(e.target.value);
    const {duration} = videoRef.current;
    videoRef.current.currentTime = (duration / 100) * value;
    setProgress(value)
}
```

This is how it looks like our example.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)

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
    },[videoRef.current, progress])

    const handleClick = () => {
        if(!videoRef.current) return
        isPlaying ? 
            videoRef.current.pause() :
            videoRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = videoRef.current;
        videoRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
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
                        <ProgressBar
                            className="progress--bar"
                            onChange={handleProgress}
                            value={progress}
                        />
                        {/* <!-- controls --> */}
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

13. Now we'll create a handleTimeUpdate function to fire the event when the currentTime attribute has been updated.

Information about this attribute, go to [HTMLMediaElement: timeupdate event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdated_event) in Mozilla Developer Network (MDN).

```js
function handleTimeUpdate = () => {
    const {currentTime, duration} = videoRef.current;
    const progress = parsetInt(Number(currentTime / duration) * 100);
    setMediaTime(currentTime)
    setProgress(progress)
}
```

This is how our example looks like.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)

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
    },[videoRef.current, progress])

    const handleClick = () => {
        if(!videoRef.current) return
        isPlaying ? 
            videoRef.current.pause() :
            videoRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = videoRef.current;
        videoRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = videoRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
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
                        onTimeUpdate={handleTimeUpdate}
                    ></video>
                    <section className='panel--controls'>
                        <ProgressBar
                            className="progress--bar"
                            onChange={handleProgress}
                            value={progress}
                        />
                        {/* <!-- controls --> */}
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

14. Our example looks good, now we'll create another component called Volume like so and import it in our VideoPlayer component.

```js
import React from 'react'

const Volume = ({max, value, mode, onClick, onChange}) => {
  return (
    <div className="volume--container" role="volume and slider container">
      <button
        className="mute--btn btn btn--medium"
        data-mute="mute"
        title="Mute Sound"
        aria-describedby="mute button"
        onClick={onClick}
      >
        {mode}
      </button>
      <input
        type="range"
        className="slider"
        min="0"
        max={max}
        value={value}
        step="1"
        onChange={onChange}
      />
    </div>
  );
}

export { Volume }
```

15. Now we import our Volume component to *VideoPlayer* component.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)

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
    },[videoRef.current, progress])

    const handleClick = () => {
        if(!videoRef.current) return
        isPlaying ? 
            videoRef.current.pause() :
            videoRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = videoRef.current;
        videoRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = videoRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
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
                        onTimeUpdate={handleTimeUpdate}
                    ></video>
                    <section className='panel--controls'>
                        <ProgressBar
                            className="progress--bar"
                            onChange={handleProgress}
                            value={progress}
                        />
                        <Volume
                            max='100'
                            mode={}
                            value={}
                            onChange={}
                            onClick={}
                        />
                        {/* <!-- controls --> */}
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

16. Now we create some functions to help us to handle our Volume component like so, and into our *useEffect* method we create *onMute* and *onUnMute* functions respectively and we'll fire an event as we did with our play button.

```js
const [volume, setVolume] = useState(0)
const [isMuted, setIsMuted] = useState(false)

useEffect(() => {
    const onMute = () => setIsMuted(true)
    const onUnMute = () => setIsMuted(false)

    element.addEventListener('mute', onMute)
    element.addEventListener('unmute', onUnMute)

    return () => {
        element.removeEventListener('mute', onMute)
        element.removeEventLIstener('unmute', onUnMute)
    }
} [])

const handleVolumeChange = (e) => {
    const value = Number(e.target.value);
    const volRange = value / 100;
    videoRef.current.volume = volRange;
    setVolume(value)
}

const handleVolumeMute = () => {
    if(!videoRef.current) return;

    isMuted ? 
        videoRef.current.muted = false :
        videoRef.current.muted = true
    
    setIsMute(!isMuted)
}
```

17. Now we put the example above into our VideoPlayer component like so.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)

    useEffect(()=> {
        const element = videoRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[videoRef.current, progress])

    const handleClick = () => {
        if(!videoRef.current) return
        isPlaying ? 
            videoRef.current.pause() :
            videoRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = videoRef.current;
        videoRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = videoRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        videoRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!videoRef.current) return;
        volumeMute ?
            videoRef.current.muted = false :
            videoRef.current.muted = true
        setIsMuted(!isMuted)
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
                        onTimeUpdate={handleTimeUpdate}
                    ></video>
                    <section className='panel--controls'>
                        <ProgressBar
                            className="progress--bar"
                            onChange={handleProgress}
                            value={progress}
                        />
                        <Volume
                            max='100'
                            mode={isMuted ? 'Unmute' : 'Mute'}
                            value={volume}
                            onChange={handleVolumeChange}
                            onClick={handleVolumeMute}
                        />
                        {/* <!-- controls --> */}
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

18. Now we change the text into our Volume and Controls components like so.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)

    useEffect(()=> {
        const element = videoRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[videoRef.current, progress])

    const handleClick = () => {
        if(!videoRef.current) return
        isPlaying ? 
            videoRef.current.pause() :
            videoRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = videoRef.current;
        videoRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = videoRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        videoRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!videoRef.current) return;
        volumeMute ?
            videoRef.current.muted = false :
            videoRef.current.muted = true
        setIsMuted(!isMuted)
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
                        onTimeUpdate={handleTimeUpdate}
                    ></video>
                    <section className='panel--controls'>
                        <ProgressBar
                            className="progress--bar"
                            onChange={handleProgress}
                            value={progress}
                        />
                        <Volume
                            max='100'
                            mode={isMuted ? '🔉' : '🔈'}
                            value={volume}
                            onChange={handleVolumeChange}
                            onClick={handleVolumeMute}
                        />
                        {/* <!-- controls --> */}
                        <div className='controls'>
                            <Controls
                                state={
                                    isPlaying ?
                                        '⏸' :
                                        '▶'
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

19. The next part is to define a function that allows us to go back a few seconds from our current video.

Let´s get started.

```js
// https://github.com/lkopacz/egghead-react-a11y-audio-player
const handleSkipBackward = () => {
    const {currentTime} = videoRef.current;
    const newTme = Math.max(currentTime - 10, 0);
    videoRef.current.currentTime = newTime;
    setMediaTime(newTime)
}
```

20. In this section we'll create a function that allows us to jump forward a few seconds from our current video.

```js
    const handleSkipForward = () => {
        const {currentTime} = videoRef.current;
        const newTime = Math.min(currentTime + 30, duration);
        videoRef.current.currentTime = newTime;
        setMediaTime(newTime)
    }
```

As you can see in the *handleSkipForward()* function, we call out a duration variable from our *useState hook* like so. 

```js
    const [duration, setDuration] = useState(0)
```

21. Let´s make some changes to our code.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(()=> {
        const element = videoRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[videoRef.current, progress])

    const handleClick = () => {
        if(!videoRef.current) return
        isPlaying ? 
            videoRef.current.pause() :
            videoRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = videoRef.current;
        videoRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = videoRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
        setDuration(duration)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        videoRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!videoRef.current) return;
        volumeMute ?
            videoRef.current.muted = false :
            videoRef.current.muted = true
        setIsMuted(!isMuted)
    }

    // https://github.com/lkopacz/egghead-react-a11y-audio-player
    const handleSkipBackward = () => {
        const {currentTime} = videoRef.current;
        const newTime = Math.max(currentTime - 10, 0);
        videoRef.current.currentTime = newTime;
        setMediaTime(newTime)
    }

    const handleSkipForward = () => {
        const {currentTime} = videoRef.current;
        const newTime = Math.min(currentTime + 30, duration);
        videoRef.current.currentTime = newTime;
        setMediaTime(newTime)
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
                        onTimeUpdate={handleTimeUpdate}
                    ></video>
                    <section className='panel--controls'>
                        <ProgressBar
                            className="progress--bar"
                            onChange={handleProgress}
                            value={progress}
                        />
                        <Volume
                            max='100'
                            mode={isMuted ? '🔉' : '🔈'}
                            value={volume}
                            onChange={handleVolumeChange}
                            onClick={handleVolumeMute}
                        />
                        {/* <!-- controls --> */}
                        <div className='controls'>
                            <div className="skip--container" role="skip buttons">
                                <button onClick={handleSkipBackward}>
                                ⏮
                                </button>
                            </div>
                            <Controls
                                state={
                                    isPlaying ?
                                        '⏸' :
                                        '▶'
                                }
                                onClick={handleClick}
                            />
                            <div className="skip--container" role="skip buttons">
                                <button onClick={handleSkipForward}>
                                ⏭
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </figure>
    )
}

export default VideoPlayer
```

22. Now, we'll work on our current length of the video. In this section we won't create any functions, we will just call our variables *duration* and *mediaTime* and add them in our tags with class name *duration* and *current--time* respectively, like so. 

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(()=> {
        const element = videoRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[videoRef.current, progress])

    const handleClick = () => {
        if(!videoRef.current) return
        isPlaying ? 
            videoRef.current.pause() :
            videoRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = videoRef.current;
        videoRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = videoRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
        setDuration(duration)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        videoRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!videoRef.current) return;
        volumeMute ?
            videoRef.current.muted = false :
            videoRef.current.muted = true
        setIsMuted(!isMuted)
    }

    // https://github.com/lkopacz/egghead-react-a11y-audio-player
    const handleSkipBackward = () => {
        const {currentTime} = videoRef.current;
        const newTime = Math.max(currentTime - 10, 0);
        videoRef.current.currentTime = newTime;
        setMediaTime(newTime)
    }

    const handleSkipForward = () => {
        const {currentTime} = videoRef.current;
        const newTime = Math.min(currentTime + 30, duration);
        videoRef.current.currentTime = newTime;
        setMediaTime(newTime)
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
                        onTimeUpdate={handleTimeUpdate}
                    ></video>
                    <section className='panel--controls'>
                        <ProgressBar
                            className="progress--bar"
                            onChange={handleProgress}
                            value={progress}
                        />
                        <Volume
                            max='100'
                            mode={isMuted ? '🔉' : '🔈'}
                            value={volume}
                            onChange={handleVolumeChange}
                            onClick={handleVolumeMute}
                        />
                        {/* <!-- counter / duration --> */}
                        <div className="timer--container duration" role="timer container">
                            <span className="timer" data-timer="timer" role="timer">
                                {formatTime(duration)}
                            </span>
                        </div>
                        {/* <!-- controls --> */}
                        <div className='controls'>
                            <div className="skip--container" role="skip buttons">
                                <button onClick={handleSkipBackward}>
                                ⏮
                                </button>
                            </div>
                            <Controls
                                state={
                                    isPlaying ?
                                        '⏸' :
                                        '▶'
                                }
                                onClick={handleClick}
                            />
                            <div className="skip--container" role="skip buttons">
                                <button onClick={handleSkipForward}>
                                ⏭
                                </button>
                            </div>
                        </div>
                        {/* <!-- counter / current time --> */}
                        <div
                        className="timer--container current--time"
                        role="timer container"
                        >
                            <span className="timer" data-timer="timer" role="timer">
                                {formatTime(mediaTime)}
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </figure>
    )
}

export default VideoPlayer
```

23. In this section, we'll work on the *formatTime()* function to make the video timer change according to the current progress.

Let's go there.

```js
    // https://github.com/lkopacz/egghead-react-a11y-audio-player
    // 1. Switch to branch section
    // 2. Choose the branch 09-mute-states
    function formatTime(time){
        const hours = Math.floor(~~(time / 3600));
        const minutes = Math.floor(~~(time % 3600) / 60);
        const seconds = Math.floor(time % 60);

        let output = '';
        if(hours > 0) output += `${hours}:${minutes < 10 ? '0' : ''}`

        output += `${minutes}:${seconds < 10 ? '0' : ''}`
        output += `${seconds}`

        return output
    }
```

24. Now, let's put the above code in our *videoPlayer* component.

```js
//VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import Controls from '../components/Controls/Controls'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Volume from '../components/Volume/Volume'
import video from '../assets/video/video-prueba.mp4'

// https://github.com/lkopacz/egghead-react-a11y-audio-player
// 1. Switch to branch section
// 2. Choose the branch 09-mute-states
function formatTime(time){
    const hours = Math.floor(~~(time / 3600));
    const minutes = Math.floor(~~(time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    let output = '';

    if(hours > 0) output += `${hours}:${minutes < 10 ? '0' : ''}`

    output += `${minutes}:${seconds < 10 ? '0' : ''}`
    output += `${seconds}`

    return output
}

const VideoPlayer = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volume, setVolume] = useState(0)
    const [progress, setProgress] = useState(0)
    const [mediaTime, setMediaTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(()=> {
        const element = videoRef.current

        // The piece of code shown below was taken from the following YouTube link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

        const onPlay = () => isPlaying(true)
        const onPause = () => isPlaying(false)
        const onMute = () => setIsMuted(true)
        const onUnMute = () => setIsMuted(false)

        element.addEventListener('play', onPlay)
        element.addEventListener('playing', onPlay)
        element.addEventListener('pause', onPause)
        element.addEventListener('mute', onMute)
        element.addEventListener('unmute', onUnMute)

        return () => {
            element.removeEventListener('play', onPlay)
            element.removeEventListener('playing', onPlay)
            element.removeEventListener('pause', onPause)
            element.removeEventListener('mute', onMute)
            element.removeEventListener('unmute', onUnMute)
        }
    },[videoRef.current, progress])

    const handleClick = () => {
        if(!videoRef.current) return
        isPlaying ? 
            videoRef.current.pause() :
            videoRef.current.play()
    }

    const handleProgress = (e) => {
        const value = Number(e.target.value);
        const {duration} = videoRef.current;
        videoRef.current.currentTime = (duration / 100) * value;
        setProgress(value)
    }

    const handleTimeUpdate = () => {
        const {currentTime, duration} = videoRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress)
        setDuration(duration)
    }

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);
        const volRange = value / 100;
        videoRef.current.volume = volRange;
        setVolume(value)
    }

    const handleVolumeMute = () => {
        if(!videoRef.current) return;
        volumeMute ?
            videoRef.current.muted = false :
            videoRef.current.muted = true
        setIsMuted(!isMuted)
    }

    // https://github.com/lkopacz/egghead-react-a11y-audio-player
    const handleSkipBackward = () => {
        const {currentTime} = videoRef.current;
        const newTime = Math.max(currentTime - 10, 0);
        videoRef.current.currentTime = newTime;
        setMediaTime(newTime)
    }

    const handleSkipForward = () => {
        const {currentTime} = videoRef.current;
        const newTime = Math.min(currentTime + 30, duration);
        videoRef.current.currentTime = newTime;
        setMediaTime(newTime)
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
                        onTimeUpdate={handleTimeUpdate}
                    ></video>
                    <section className='panel--controls'>
                        <ProgressBar
                            className="progress--bar"
                            onChange={handleProgress}
                            value={progress}
                        />
                        <Volume
                            max='100'
                            mode={isMuted ? '🔉' : '🔈'}
                            value={volume}
                            onChange={handleVolumeChange}
                            onClick={handleVolumeMute}
                        />
                        {/* <!-- counter / duration --> */}
                        <div className="timer--container duration" role="timer container">
                            <span className="timer" data-timer="timer" role="timer">
                                {formatTime(duration)}
                            </span>
                        </div>
                        {/* <!-- controls --> */}
                        <div className='controls'>
                            <div className="skip--container" role="skip buttons">
                                <button onClick={handleSkipBackward}>
                                ⏮
                                </button>
                            </div>
                            <Controls
                                state={
                                    isPlaying ?
                                        '⏸' :
                                        '▶'
                                }
                                onClick={handleClick}
                            />
                            <div className="skip--container" role="skip buttons">
                                <button onClick={handleSkipForward}>
                                ⏭
                                </button>
                            </div>
                        </div>
                        {/* <!-- counter / current time --> */}
                        <div
                        className="timer--container current--time"
                        role="timer container"
                        >
                            <span className="timer" data-timer="timer" role="timer">
                                {formatTime(mediaTime)}
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </figure>
    )
}

export default VideoPlayer
```

25. In this part we separate the *formatTime.js* file to make our *VideoPlayer* component more clear.

```js
// https://github.com/lkopacz/egghead-react-a11y-audio-player
// 1. Switch to branch section
// 2. Choose the branch 09-mute-states
function formatTime(time){
    const hours = Math.floor(~~(time / 3600));
    const minutes = Math.floor(~~(time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    let output = '';

    if(hours > 0) output += `${hours}:${minutes < 10 ? '0' : ''}`

    output += `${minutes}:${seconds < 10 ? '0' : ''}`
    output += `${seconds}`

    return output
}
```

Now we will create three *css* files to style our *VideoPlayer* component differently, but in this situation we will not use pure *css*, instead we will use a preprocessor like *sass*.

26. The first file will be called *_variables.scss* and will be in change of storing the custom properties, which when importing the file, in our *VideoControls.scss* will be invoked.

```scss
//_variables.scss
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Play&display=swap');

:root {
  // Primary colors
  --dark-color : #0B0505;
  --light-color: #ffffff;
}

// ========== VIEWPORT
$width  : 100vw;
$height : 100vh;
// ========== SIZES
$size   : 100%;
$padding: 1.5rem;
$radius : .5rem;
// ========== FONTS
$font-play: 'Play', sans-serif;
$font-inter: 'Inter', sans-serif;
$fnt-wgt   : .85;
$fnt-sz    : calc(($padding * $fnt-wgt) + 1vmin);
// ========== COLORS
// Secondary colors
$dark-blue: #11748A;
$light-gray: #ecf0f1;
```

27. The second file will be called *VideoControls.scss* and will be in charge of giving styles to our *Controls* component.

```scss
// VideoControls.scss

@import '_variables';

.control--panel,
.controls,
.player--controls,
.volume--container,
.timer--container,
.expand--container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.control--panel {
  gap: .25rem;
  width: $size;
  height: 4rem;
  position: absolute;
  bottom: -3.8rem;
  background-color: hsl(180 10% 6%);
  transition: bottom .7s ease-out;

  .progress {
    width: inherit;
    height: .35rem;
    position: absolute;
    top: 0;
    background-color: #677380;
    &:hover { cursor: e-resize; }
    &--bar {
      width: 101%;
      height: $size;
      transition: width 650ms cubic-bezier(0.165, 0.84, 0.44, 1);
      position: absolute;
      top: -.125rem;
      left: 0;
      transform: translate(-.3rem, 0);
      border-radius: 0;
      z-index: 2;
      &:focus { outline: none; }
      &:hover::-webkit-slider-thumb {
        appearance: none;
        width: .65rem;
        height: .65rem;
        border-radius: $size;
        box-shadow: 0 0 0 .1rem #fff;
        cursor: pointer;
        transition: .5s
      }
    }
  }

  .volume--container {
    width: auto;
    justify-content: space-evenly;
    .mute--btn { width: 2.0125rem; }
    .slider {
      appearance: none;
      width: 5rem;
      height: .25rem;
      border-radius: $padding;
      &:focus { outline: none; }
      &::-webkit-slider-thumb {
        appearance: none;
        width: .75rem;
        height: .75rem;
        border-radius: $size;
        background-color: $dark-blue;
        box-shadow: 0 0 0 .1rem #fff;
        cursor: pointer
      }
    }
  }

  .timer--container {
    justify-content: center;
    &.duration { margin-inline-start: 2rem; }
    &.current--time { margin-inline-end: 2rem; }
    .timer {
      font-size: .75rem;
      color: #fff;
      font-family: $font-play;
    }
  }

  .controls {
    width: 12.375rem;
    .skip--container {
      .btn--small { width: 1.875rem; }
    }
    .controllers {
      width: 8.0635rem;
      .btn--medium { width: 1.35625rem; }
      .btn--large { width: 2.75rem; }
    }
  }

  .expand--container {
    justify-content: center;
    .pic-in-pic__btn,
    .expand--btn { width: 2.125rem; }
  }
}
```

28. The third file will be called *VideoPlayer.scss* and will store feature-focused code to hide the control panel of our *VideoPlayer* component.

```scss
//VideoPlayer.scss

@import '_variables';

.figure {
  width: $size;
  max-width: 42rem;
  margin: 0;
  padding-inline: 1rem;

  .hidden {
    position: relative;
    overflow: hidden;
    &:hover .control--panel {
      bottom: 0;
      transition: bottom .5s ease-in
    }
  }

  .figcaption {
    width: $size;
    height: 4rem;
    .status,
    .artist {
      padding-inline-start: .35rem;
      text-transform: capitalize;
      font-family: $font-inter;
    }

    .status { 
      font-size: 2rem;
      font-weight: 800;
    }

    .artist { font-size: 1.25rem; }
  }
}
```

39. Now we import the *scss* file to our *VideoPlayer* component like so.

```js
// VideoPlayer.js

import React, {useState, useEffect, useRef} from 'react'
import { formatTime } from '../../utils/formatTime'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { Volume } from '../Volume/Volume'
import { Controls } from '../Controls/Controls'
import video from '../assets/video/video-prueba.mp4'
import '../../styles/VideoControls.scss'
import '../../styles/VideoPlayer.scss'

const VideoPlayer = () => {
    //...
}

export default VideoPlayer
```

30. If you want to separate the logic from the code in a new file, it's up to you to do so, like so.

```js
// updateVideoPlayer
import React, {useState, useEffect} from 'react'

export const updateVideoPlayer = (videoRef) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(10);
    const [mediaTime, setMediaTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // How to create a React Video Player
    // Go to the following YouTube video link: https://www.youtube.com/watch?v=Y9TL_43X3Lc&t=1444s by FullStack Mastery

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);
        const onMute = () => setIsMuted(true);
        const onUnMute = () => setIsMuted(false);

        videoElement.addEventListener("play", onPlay);
        videoElement.addEventListener("playing", onPlay);
        videoElement.addEventListener("pause", onPause);
        videoElement.addEventListener("mute", onMute);
        videoElement.addEventListener("unmute", onUnMute);

        return () => {
            videoElement.removeEventListener("play", onPlay);
            videoElement.removeEventListener("playing", onPlay);
            videoElement.removeEventListener("pause", onPause);
            videoElement.removeEventListener("mute", onMute);
            videoElement.removeEventListener("unmute", onUnMute);
        };
    }, [videoRef.current, progress]);

    const handleClick = () => {
        if (!videoRef.current) return;
        isPlaying ? videoRef.current.pause() : videoRef.current.play();
    };

    const handleTimeUpdate = () => {
        const { currentTime, duration } = videoRef.current;
        const progress = parseInt(Number(currentTime / duration) * 100);
        setMediaTime(currentTime);
        setProgress(progress);
        setDuration(duration);
    };

    const handleProgress = (e) => {
        const value = e.target.valueAsNumber;
        const { duration } = videoRef.current;
        videoRef.current.currentTime = (duration / 100) * value;
        setProgress(value);
    };

    const handleVolumeChange = (e) => {
        const newRange = e.target.valueAsNumber;
        const volumeRange = newRange / 100;
        videoRef.current.volume = volumeRange;
        setVolume(newRange);
    };

    const handleVolumeMute = () => {
        if (!videoRef.current) return;
        isMuted
            ? (videoRef.current.muted = false)
            : (videoRef.current.muted = true);
        setIsMuted(!isMuted);
    };

    // https://github.com/lkopacz/egghead-react-a11y-audio-player
    const handleSkipBackward = () => {
        const { currentTime } = videoRef.current;
        const newTime = Math.max(currentTime - 10, 0);
        videoRef.current.currentTime = newTime;
        setMediaTime(newTime);
    };

    const handleSkipForward = () => {
        const { currentTime } = videoRef.current;
        const newTime = Math.min(currentTime + 30, duration);
        videoRef.current.currentTime = newTime;
        setMediaTime(newTime);
    };

    return {
        isPlaying,
        isMuted,
        progress,
        duration,
        volume,
        mediaTime,
        handleClick,
        handleTimeUpdate,
        handleProgress,
        handleVolumeMute,
        handleVolumeChange,
        handleSkipBackward,
        handleSkipForward
    }
}
```

31. Once separated the code in a new file, we will import this file in our *VideoPlayer* component like so.

```js
// VideoPlayer.js

import {updateVideoPlayer} from '../../updateVideoPlayer/updateVideoPlayer'
```

32. Now we will update our *VideoPlayer*, adding new code.

```js
// VideoPlayer.js
import React, {useRef} from 'react'
import {updateVideoPlayer} from '../../updateVideoPlayer/updateVideoPlayer'
import video from '../assets/video/video-prueba.mp4'

const VideoPlayer = () => {
    const videoElement = useRef(null)

    const {
        isPlaying,
        isMuted,
        progress,
        duration,
        volume,
        mediaTime,
        handleClick,
        handleTimeUpdate,
        handleProgress,
        handleVolumeMute,
        handleVolumeChange,
        handleSkipBackward,
        handleSkipForward
    } = updateVideoPlayer(videoElement)

    return (
        <figure className='figure'>
            <div className='player--container'>
                <div className='hidden'>
                    <video
                        src={video}
                        ref={videoElement}
                        onClick={handleClick}
                        onTimeUpdate={handleTimeUpdate}
                    ></video>
                </div>
            </div>
        </figure>
    )
}
```

As soon as posible, we will update the *VideoPlayer* component.

**NOTE:** *the code above is an excerpt from my React Video Player repository, you can see the full code there.*