const userSelection = (clicked_id) => {
        let getRandom = Math.floor(Math.random() * 3);
        const gameOptions = ["ROCK", "PAPER", "SCISSORS"];
        const finalChoice = gameOptions[getRandom];
        console.log(w);
        console.log(l);

        switch (clicked_id) {
            case "ROCK": 
                if (finalChoice === "ROCK"){
                document.getElementById('pc').textContent = finalChoice;
                document.getElementById('result').textContent = 'TIE GAME';
                document.getElementById('result').style.color = 'black';
                } 
                    else if (finalChoice === "PAPER") {
                    document.getElementById('pc').textContent = finalChoice;
                    document.getElementById('result').textContent = 'YOU LOSE';
                    document.getElementById('result').style.color = 'red';
                    l++;
                    }
                        else {
                        document.getElementById('pc').textContent = finalChoice;
                        document.getElementById('result').textContent = 'YOU WIN';
                        document.getElementById('result').style.color = 'green';
                        w++;
                        }
            break;
            case "PAPER":
                if (finalChoice === "ROCK"){
                    document.getElementById('pc').textContent = finalChoice;
                    document.getElementById('result').textContent = 'YOU WIN';
                    document.getElementById('result').style.color = 'green';
                    w++;
                    }
                        else if (finalChoice === "PAPER") {
                        document.getElementById('pc').textContent = finalChoice;
                        document.getElementById('result').textContent = 'TIE GAME';
                        document.getElementById('result').style.color = 'black';
                        }
                            else {
                            document.getElementById('pc').textContent = finalChoice;
                            document.getElementById('result').textContent = 'YOU LOSE';
                            document.getElementById('result').style.color = 'red';
                            l++;
                            }
            break;
            case "SCISSORS":
                if (finalChoice === "ROCK"){
                    document.getElementById('pc').textContent = finalChoice;
                    document.getElementById('result').textContent = 'YOU LOSE';
                    document.getElementById('result').style.color = 'red';
                    l++;
                    }
                        else if (finalChoice === "PAPER") {
                        document.getElementById('pc').textContent = finalChoice;
                        document.getElementById('result').textContent = 'YOU WIN';
                        document.getElementById('result').style.color = 'green';
                        w++;
                        }
                            else {
                            document.getElementById('pc').textContent = finalChoice;
                            document.getElementById('result').textContent = 'TIE GAME';
                            document.getElementById('result').style.color = 'black';
                            }
            break;
            }

            if(l === 5){
                document.getElementById('result').textContent = 'STOP! YOU NEED PRACTICE!';
                document.getElementById('result').style.color = 'red';
                l = 0;
                w = 0;
                }
                else if(w === 5){
                            document.getElementById('result').textContent = 'You are really good!';
                            document.getElementById('result').style.color = 'green';
                            l = 0;
                            w = 0;
                }

        };

let l = 0;
let w = 0;
        

 
