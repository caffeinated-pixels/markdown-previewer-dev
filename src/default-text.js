// default text for the previewer
const defaultText = `# Welcome to my Markdown Previewer!

## I love h2 headings!

### h3 headings are okay, I guess

This is my first ever **React** app and I built it for a *freeCodeCamp* [Front End Libraries Project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer). The app uses ***state*** to automatically update the preview as you type.

Right, that's bold, italic and a link out of the way! Here's a list of random stuff followed by an image of a sweaty Swedish guitar legend:
* coffee
* cake
* types of nut:
  * brazil
  * hazelnut
  * cashew
    * salted
    * honey roasted (decadent!)
    * raw
* Amiga 1200
* Yngwie Malmsteen

![Yngwie Malmsteen](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yngwie_Malmsteen_1.jpg/220px-Yngwie_Malmsteen_1.jpg)

Here's an inspiring quote from **Avery Brooks**:
> Knowledge is going to make you stronger. Knowledge is going to let you control your life. Knowledge is going to give you the wisdom to teach their children. Knowledge is the thing that makes you smile in the face of disaster.

Of course, we can also format inline code, such as \`const meaningOfLife = 42;\`, as well as code blocks:

\`\`\`
// this is some of my React code
ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

Finally, a simple table:

Amiga Game | Developer | No. of floppies
---------- | --------- | ---------------
Monkey Island 2: LeChuck's Revenge  | LucasArts | 11
UFO: Enemy Unknown (AGA)  | Climax | 4
Cannon Fodder | Sensible Software | 3
Syndicate | Bullfrog | 4

Oh, I almost forgot that there's an optional user story for getting the previewer to render line
breaks like this one with a \`<br>\`!

This last part is to test the behaviour of the preview box with very long words:

blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah...
`

export default defaultText
