looker.plugins.visualizations.add({
    create: function(element, config) {

        // Insert a <style> tag with some styles we'll use later.
        var css = element.innerHTML = `
    <style>
      .hello-world-vis {
        // Vertical centering
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
    </style>
  `;

        // Create a container element to let us center the text.
        var container = element.appendChild(document.createElement("div"));
        container.className = "hello-world-vis";

        // Create an element to contain the text.
        this._textElement = container.appendChild(document.createElement("div"));

    },
    updateAsync: function(data, element, config, queryResponse, details, done) {
        console.log(data);
    }
})
