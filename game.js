var game_board = document.getElementById("tic-tac-box");
var user_name = "";
var game_board = ticTacToe(game_board);

game_board.onSquareClicked(
    function(squareNum){  // Number of the box that was clicked
        if (!window.phone) return;
        var data = {square:squareNum, username:user_name};
        window.phone.sendData(data);
    }
)

function onDataReceived(msg){
    var sqr_num = msg.square;
    game_board.markBox(sqr_num);
}