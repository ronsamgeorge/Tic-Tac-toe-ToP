//Creates player Objects and assignes name and sign for the same
const Player = (name, playerSign) => {
    const getName = () => name;
    const getPlayerSign = () => playerSign;
    return {getName, getPlayerSign};
};


//Gameboard will have the array and will check if the input is at a valid position
const gameBoard = (() => {

    const gameBoardArray = new Array(9);

    //checkInputPosition will check if the slot is preFilled; 
    const checkInputPosition = (gridIndex) => {
        if(gameBoardArray[gridIndex] === undefined){   
            return true;                                                              // if the index value has undefined as the value it suggest that the input div is valid
        }
        return false;
    }; 


    const updateGameBoardArray = (gridIndex, player) =>{
        
        if(!checkInputPosition(gridIndex)){ 
            alert("Position already occupied, Select a new position for the move");
            return;
        }
        
        gameBoardArray[gridIndex] = player.getPlayerSign();                         //updates array index with the player sign;
        boardDisplayController.updateIndex(gridIndex,player);
        gameFlow.gameLogic(gameBoardArray);


    };

    return {updateGameBoardArray};
})();


//Modules Accept the valid grid index and update the grid UI with the player entry
const boardDisplayController = (() => {
    const updateIndex = (grindIndex,player) => {
        let divDisplay = document.querySelector(`div[data-key="${grindIndex}"]`);  //uses the data-key custom data attribute select the div in the UI
        divDisplay.textContent = player.getPlayerSign();
    };

    return {updateIndex};

})();


const gameFlow = ((gameBoardArray) => {

    //Keeps track of the player turn/rotation;
    const playerTurns = () => {
        if (currentPlayer.getPlayerSign === player1.getPlayerSign){                //compares the playerSign with the currentPlayerSign, since X always goes first
            currentPlayer = player2;
            return;
        }
        currentPlayer = player1;    
    };

    const checkResult = (gameBoardArray) => {
        if(checkVertical){} 
    };

    const gameLogic = (gameboardArray) => {
        playerTurns();
        console.log(currentPlayer);
    };

    return {gameLogic}; 
})();


const testFunc = (index) =>{
    console.log(index);
}


const player1 = Player("P1", "X");
const player2 = Player("P2", "O");
let currentPlayer = player1;

const divClicked = document.querySelectorAll(".game-board-divs");
divClicked.forEach(div => div.addEventListener('click', function(){

    gameBoard.updateGameBoardArray(this.dataset.key,currentPlayer);
}));

