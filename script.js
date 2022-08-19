//Creates player Objects and assignes name and sign for the same
const Player = (name, playerSign) => {
    const getName = () => name;
    const getPlayerSign = () => playerSign;
    return {getName, getPlayerSign};
};


// Gameboard will have the array and will check if the input is at a valid position
const gameBoard = (() => {

    const gameBoardArray = new Array(9);

    //checkInputPosition will check if the slot is preFilled or not;
    const checkInputPosition = (gridIndex) => {
        if(gameBoardArray[gridIndex] === undefined){
            return true;
        }
        return false;
    }; 


    const updateGameBoardArray = (gridIndex, player) =>{
        
        if(!checkInputPosition(gridIndex)){
            alert("Position already occupied, Select a new position for the move");
            return;
        }
        
        gameBoardArray[gridIndex] = player.getPlayerSign();
        console.log(gameBoardArray);
        //DisplayController(gameBoardArray);
    };

    return {updateGameBoardArray};


})();


// Modules Accept the gameboardArray and display the updates on the UI
const DisplayController = (gridIndex) => ({

})();


const gameFlow = ((gameBoardArray) => {


    const playerTurns = () => {
        if (currentPlayer === "player1"){
            currentPlayer = player2
        }
    };

    const checkResult = (gameBoardArray) => {
        if(checkVertical){} 
    };

    return {}; 
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

