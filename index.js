// The Web Components polyfill introduces a custom event we can use to determine when the custom elements are ready to be used.
document.addEventListener("WebComponentsReady", function() {

    // Reference to the grid element.
    var grid = document.querySelector("vaadin-grid");

    // Add some example data as an array.
    grid.items = [
        {
            "firstName": "Oscar",
            "lastName": "the Grouch",
            "email": "grouchy@example.com"
        }, {
            "firstName": "Cookie",
            "lastName": "Monster",
            "email": "hungry@example.com"
        }, {
            "firstName": "Big",
            "lastName": "Bird",
            "email": "feathers@example.com"
        }, {
            "firstName": "Kermit",
            "lastName": "the Frog",
            "email": "Kermit@example.com"
        }
    ];

    var combobox = document.querySelector('vaadin-combo-box');
    combobox.items = ["broccoli", "carrots", "peas", "eggplant","potatoes"];
    combobox.addEventListener('value-changed', function(event) {
      console.log(event.detail.value);
    });

    combobox.addEventListener('selected-item-changed', function(event) {
      console.log(event.detail.value);
    });
});
