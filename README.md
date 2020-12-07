# React mediainfo.js 🎬

Simple solution for using [MediaInfoLib](https://mediaarea.net/en/MediaInfo) in React or JS applications. It's using web worker to load everything flawlessly. 
MediaInfoLib web assembly is encoded inside the app so there are no web requests to the file.

## Demo 👀

Try mediainfo.js in your browser which provides the same results: [https://mediainfo.js.org](https://mediainfo.js.org)

## Usage 💻

Very simple 

#### Installation

```js
npm install react-mediainfo

//or

yarn add react-mediainfo
```

#### Usage

```js
import { getInfo } from 'react-mediainfo'

getInfo(file)
```

## Roadmap 📈

- Cut size in half. 
- Create Hooks.
- Create Wrapper Components.
