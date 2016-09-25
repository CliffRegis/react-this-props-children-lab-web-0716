const React = require('react');
const ReactDOM = require('react-dom');

const Invitation = require('./components/Invitation');
const ThemedParty = require('./components/ThemedDecorations');

ReactDOM.render(
  <div>
    <Invitation>Hey, you should totally come to this awesome party I'm throwing!</Invitation>
    <ThemedParty theme="heaven">
      <ThemedDecorations>      
      </ThemedDecorations>

    </ThemedParty>
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
