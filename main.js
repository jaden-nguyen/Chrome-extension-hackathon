// Figure out how to read input when you highlight text on a page
   // Test out the right click eventListener on a sentence in html
    // research the getSelection() window object



    
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const testText = document.querySelector('h3');
    console.log(testText.innerHTML.toString());
​
    testText.style.width = '100px';
    testText.style.height = '30px';
​
    testText.addEventListener('click', function () {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        console.log(text);
    })
​
    
​
​
​
    // https://www.youtube.com/results?search_query=building+a+chrome+extension
    // https://www.youtube.com/results?search_query=
        
    
    
​
    // testText.addEventListener('click', (c) => {
    //     console.log('clicked!')
​
    // });
​
});