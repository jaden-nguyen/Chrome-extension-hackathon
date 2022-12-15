// Figure out how to read input when you highlight text on a page
   // Test out the right click eventListener on a sentence in html
    // research the getSelection() window object
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const testText = document.querySelector('h3');
    testText.focus();
    testText.setSelectionRange(3,3);
    testText.style.width = '100px';
    testText.style.height = '30px';
    // this.value = testText.value;
    // let selection = document.getSelection();
    // let selRange = selection.getRangeAt(0);
    // let selectedText = selection.toString();

    

    testText.addEventListener('click', function () {
        testText.setSelectionRange(0, testText.value.lastIndexOf('.'));
        console.log(test);
    })

    // https://www.youtube.com/results?search_query=building+a+chrome+extension
    // https://www.youtube.com/results?search_query=
        
    
    

    // testText.addEventListener('click', (c) => {
    //     console.log('clicked!')

    // });

});
    