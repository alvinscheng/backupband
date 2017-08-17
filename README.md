# backupband
A web app for songwriters to easily add a simple backing drummer to their songs in real time.

![readme](https://user-images.githubusercontent.com/26287153/29395285-9e02bea2-82c4-11e7-8943-68fdb604f74a.gif)

## Setup
Install [Git](https://git-scm.com/) and [Node](https://nodejs.org/en/).

    $ git clone https://github.com/johnhaup/backupband.git
    $ cd backupband
    $ npm run start

Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.

## Usage
Start and stop the drums using the spacebar.  You can increase the tempo with the up / down arrows and increase the drum intensity with the left / right arrows.  Changes take effect on the next first beat.  The top row is the current bar, the bottom row is the upcoming bar.  Each box represents a beat in that bar and shows which drums will be played on that beat.  Free play is available at any time.
Click the Show / Hide Keyboard link to view controls.

## Technologies Used
 * [React](https://facebook.github.io/react/)
 * [Redux](http://redux.js.org/)
 * [React-Redux](https://github.com/reactjs/react-redux)
 * [React-Scroll](https://github.com/fisshy/react-scroll)
 * [Howler](https://howlerjs.com/)
 * [Web-Audio-Scheduler](https://github.com/mohayonao/web-audio-scheduler)
