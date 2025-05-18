const word= document.getElementById('title');
const timetext = document.getElementById('timeleft')

    fetch('http://31.97.20.160:9834/api/theword')
      .then(res => res.json())
      .then(data => {
          word.textContent = data.response;
        });


        function update() {
            const timenow = new Date();
            const targettime = new Date();
          
            targettime.setHours(20, 0, 0, 0);
          
            if (timenow > targettime) {
              targettime.setDate(targettime.getDate() + 1);
            }
          
            const diff = targettime - timenow;
          
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          
            const text = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          
            timetext.textContent = text;
          }
          

          setInterval(update, 1000);
          update();