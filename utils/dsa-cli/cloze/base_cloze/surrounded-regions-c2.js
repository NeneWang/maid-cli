class SurroundedRegions {
    /**
     * https://leetcode.com/problems/surrounded-regions/
     * Time O(ROWS * COLS) | Space O(ROWS * COLS)
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve = function solve(board) {


        var searchRows = (board) => {
            const [rows, cols] = [board.length, board[0].length];

            for (let row = 0; row < rows; row++) {      /* Time O(ROWS) */
                dfs(board, row, rows, 0, cols);         /* Space O(ROWS) */
                dfs(board, row, rows, (cols - 1), cols);/* Space O(ROWS) */
            }
        }

        var searchCols = (board) => {
            const [rows, cols] = [board.length, board[0].length];

            for (let col = 1; col < (cols - 1); col++) {/* Time O(COLS) */
                dfs(board, 0, rows, col, cols);         /* Space O(COLS) */
                dfs(board, (rows - 1), rows, col, cols);/* Space O(COLS) */
            }
        }

        var searchGrid = (board) => {
            const [rows, cols] = [board.length, board[0].length];

            for (let row = 0; row < rows; row++) {/* Time O(ROWS) */
                for (let col = 0; col < cols; col++) {/* Time O(COLS) */
                    const isO = board[row][col] === 'O';
                    if (isO) board[row][col] = 'X';

                    const isStar = board[row][col] === '*';
                    if (isStar) board[row][col] = 'O';
                }
            }
        }

        const dfs = (board, row, rows, col, cols) => {
            // TODO If is not 0 then dfs search the neighbors.
            
        }

        var getNeighbors = (row, rows, col, cols) => [[0, 1], [0, -1], [1, 0], [-1, 0]]
            .map(([_row, _col]) => [(row + _row), (col + _col)])
            .filter(([_row, _col]) => (0 <= _row) && (_row < rows) && (0 <= _col) && (_col < cols))


        searchRows(board);/* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
        searchCols(board);/* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
        searchGrid(board);/* Time O(ROWS * COLS) | Space O(ROWS * COLS) */
    }
}


module.exports = { Problem: SurroundedRegions };