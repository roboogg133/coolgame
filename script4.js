let clickCount = 0;
let clickTimer;




    main.addEventListener("click", (event) => {
        clickCount++;

        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 800); 
        } else if (clickCount === 2) {
            clearTimeout(clickTimer);
            clickCount = 0

            
            alert("Like enviado")

            fetch('http://31.97.20.160:9834/api/like', {
                method: ['POST'],
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({message_id: msg1})
            })
            .then(res => res.json())
            .then(data => console.log(data));
        }
    });

    two.addEventListener("click", (event) => {
        clickCount++;

        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 800); 
        } else if (clickCount === 2) {
            clearTimeout(clickTimer);
            clickCount = 0

            
            alert("Like enviado")

            fetch('http://31.97.20.160:9834/api/like', {
                method: ['POST'],
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({message_id: msg2})
            })
            .then(res => res.json())
            .then(data => console.log(data));
        }
    });

    three.addEventListener("click", (event) => {
        clickCount++;

        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 800); 
        } else if (clickCount === 2) {
            clearTimeout(clickTimer);
            clickCount = 0

            
            alert("Like enviado")

            fetch('http://31.97.20.160:9834/api/like', {
                headers: {
                    method: ['POST'],
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({message_id: msg3})
            })
            .then(res => res.json())
            .then(data => console.log(data));
        }
    });

    four.addEventListener("click", (event) => {
        clickCount++;

        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 800); 
        } else if (clickCount === 2) {
            clearTimeout(clickTimer);
            clickCount = 0

            
            alert("Like enviado")

            fetch('http://31.97.20.160:9834/api/like', {
                headers: {
                    method: ['POST'],
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({message_id: msg4})
            })
            .then(res => res.json())
            .then(data => console.log(data));
        }
    });

    five.addEventListener("click", (event) => {
        clickCount++;

        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 800); 
        } else if (clickCount === 2) {
            clearTimeout(clickTimer);
            clickCount = 0

            
            alert("Like enviado")

            fetch('http://31.97.20.160:9834/api/like', {
                method: ['POST'],
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({message_id: msg5})
            })
            .then(res => res.json())
            .then(data => console.log(data));
        }
    });