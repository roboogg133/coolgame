const input = document.getElementById('input');

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    fetch('http://31.97.20.160:9834/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: input.value})
      })
      .then(res => {
        if (res.status == 429) {
            alert("Espere 8 segundos pra enviar outra mensagem.");
        }
        return res.json();
        })
      .then(data => {
          console.log(data.response);
           
        });
        console.log(input.value);
        
        
        input.value = ""

  }

});