
    // generate random number between 1-21 
    // get user input for all black jack actions, stand and hit
    // create logic for dealer to know when to hit and when to stand
    // game is auto over if one of them get 21
    // need to give a random number from the dealer aswell

var dealerHand = 0;
var playerHand = 0;
var cardMap = new Map();
var cardMapDealer = new Map();

cardMap.set('A', 1);
cardMap.set('2', 2);
cardMap.set('3', 3);
cardMap.set('4', 4);
cardMap.set('5', 5);
cardMap.set('6', 6);
cardMap.set('7', 7);
cardMap.set('8', 8);
cardMap.set('9', 9);
cardMap.set('10', 10);
cardMap.set('J', 10);
cardMap.set('Q', 10);
cardMap.set('K', 10);

cardMapDealer.set('A', 1);
cardMapDealer.set('2', 2);
cardMapDealer.set('3', 3);
cardMapDealer.set('4', 4);
cardMapDealer.set('5', 5);
cardMapDealer.set('6', 6);
cardMapDealer.set('7', 7);
cardMapDealer.set('8', 8);
cardMapDealer.set('9', 9);
cardMapDealer.set('10', 10);
cardMapDealer.set('J', 10);
cardMapDealer.set('Q', 10);
cardMapDealer.set('K', 10);

// returns random key from Set or Map
function getRandomKey(collection) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

function getRandomKeyDealer(collection) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

function userHit(){
    
    var x = getRandomKey(cardMap);
    //console.log("              Player Key: " + x);
    var y = cardMap.get(x);
    //console.log("Player Value: " + y);

    playerHand += y;
    console.log("Player Hand: " + playerHand);
    document.getElementById("ph").innerHTML = "Player Hand: " + playerHand;
}

function dealerHit(){

    while(dealerHand < 17){
        var dealerRandomKey = getRandomKeyDealer(cardMapDealer);
        //console.log("Dealer key: " + dealerRandomKey);
        var dealerValue = cardMapDealer.get(dealerRandomKey);
        //console.log("              Dealer Value: " + dealerValue);
    
        dealerHand += dealerValue;
        console.log("Dealer Hand: " + dealerHand);
    }

    document.getElementById("dh").innerHTML = "Dealer Hand: " + dealerHand;
}

function userStand(){

    //alert("You stand at: " + playerHand);
    dealerHit();
    var winningNum = 21;

    if(playerHand <= winningNum){
        if(playerHand == dealerHand){
            document.getElementById("status").innerHTML = "You tie!";
            console.log("Con1");
        }else if(playerHand > dealerHand){
            document.getElementById("status").innerHTML = "You won!";
            console.log("Con2");
        }else if(playerHand > dealerHand || (playerHand < dealerHand && dealerHand > winningNum)){
            document.getElementById("status").innerHTML = "You win!";
            console.log("Con3");
        }else{
            document.getElementById("status").innerHTML = "You lose!";
            console.log("Con4");
        }
    }else if(playerHand > winningNum){
        document.getElementById("status").innerHTML = "You lose!";
        console.log("Con5");
    }else{
        document.getElementById("status").innerHTML = "You won!";
        console.log("Con6");
    }
}

function newGame(){
    location.reload();
}