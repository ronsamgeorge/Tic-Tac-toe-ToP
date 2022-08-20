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


const gameFlow = (() => {


    let gameTurnCount = 0;

    //Keeps track of the player turn/rotation;
    const playerTurns = () => {
        if (currentPlayer.getPlayerSign === player1.getPlayerSign){                //compares the playerSign with the currentPlayerSign, since X always goes first
            currentPlayer = player2;
            return;
        }
        currentPlayer = player1;    
    };

    const checkHorizontal = (gameBoardArray) => {
        if((gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2] && gameBoardArray[1] !== undefined)  ||
            (gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5] && gameBoardArray[4] !== undefined) ||
            (gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8] && gameBoardArray[7] !== undefined) ) {
                return true;
            }

        return false;
    };


    const checkVertical = (gameBoardArray) => {
        if((gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6] && gameBoardArray[3] !== undefined) ||
            (gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7] && gameBoardArray[4] !== undefined ) ||
            (gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8] && gameBoardArray[5] !== undefined)) {
                return true;
            }

        return false;
    };


    const checkDiagonal = (gameBoardArray) => {
        if((gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]  && gameBoardArray[4] !== undefined) ||
            (gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6] && gameBoardArray[4] !== undefined)) {
                return true;
            }

        return false;
    };


    const checkWinCon = (gameBoardArray) => {
        if(checkVertical(gameBoardArray) || checkHorizontal(gameBoardArray) || checkDiagonal(gameBoardArray)){
            
            return true;
        } 

        return false;
    };


    const checkTieCon = () => {
        if (gameTurnCount === 9){
            return true;
        }
        return false;
    };
    

    const gameLogic = (gameBoardArray) => {

        gameTurnCount++;
        if(checkWinCon(gameBoardArray)){
            console.log(`${currentPlayer.getName()} won!!`);
            return;
        };

        if(checkTieCon()){
            console.log("Tie Game");
        };

        playerTurns(); 
    };

    return {gameLogic, gameTurnCount}; 
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

