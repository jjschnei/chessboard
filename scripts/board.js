function PCEINDEX(pce, pceNUM) {
	return (pce * 10 + pceNUM);
}

var GameBoard = {}

GameBoard.pieces = new Array(BRD_SQ_NUM);
GameBoard.side = COLORS.WHITE;
GameBoard.fiftyMove = 0;
GameBoard.hisPly = 0;
GameBoard.ply = 0;
GameBoard.castlePerm = 0;
GameBoard.material = new Array(2); //WHITE,BLACK material of pieces
GameBoard.pceNum = new Array(13); //indexed by piece
GameBoard.pList = new Array(14 * 10);
