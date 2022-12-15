// Figure out how to read input when you highlight text on a page
   // Test out the right click eventListener on a sentence in html
    // research the getSelection() window object
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const testText = document.querySelector('h3');

    testText.style.width = '100px';
    testText.style.height = '30px';

    let selection = document.getSelection();
    let selRange = selection.getRangeAt(0);
    let selectedText = selection.toString();

        
    
    

    // testText.addEventListener('click', (c) => {
    //     console.log('clicked!')

    // });

});
    