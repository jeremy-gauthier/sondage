
let app = {
    
    counterYes: 0,
    counterNo: 0,
    elements: {},
    
    init: function() {

        console.log('app.init');

        
        app.elements.buttonYes = document.getElementById('yes');
        app.elements.buttonNo = document.getElementById('no');
        app.elements.counterYes = document.getElementById('counter-yes');
        app.elements.counterNo = document.getElementById('counter-no');

        
        app.startListener();
    },
    startListener: function() {

        
        app.elements.buttonYes.addEventListener('click', app.handleClickButton);
        app.elements.buttonNo.addEventListener('click', app.handleClickButton);
    },
    
    handleClickButton: function(event) {

        console.log(event);

        console.log(event.currentTarget); 
        console.log(event.target); 

        
        if (event.currentTarget.id === 'yes') {

            
            app.counterYes++;

            
            app.elements.counterYes.textContent = app.counterYes;

        } else {

            
            app.counterNo++;

            
            app.elements.counterNo.textContent = app.counterNo;
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);