const printPlay = () => {
  $('#play').html(
    `<div id="playContainer" class="container play-container">
        <h2 id="playName" class="header play-header">Play</h2>
        <div id="funNumber" class="number-value"></div>
        <div id="playButtonContainer">
            <button type="button" id="skydiveButton" class="button play-button">Go Skydiving!</button>
            <button type="button" id="walkButton" class="button play-button">Go for a Walk</button>
        </div>
    </div>`
  );
};

export default { printPlay };
