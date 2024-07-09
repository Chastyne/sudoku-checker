const isValidSudoku = (board) => {
    const isValidRow = (row) => {
      const set = new Set();
      for (const num of row) {
        if (num < 1 || num > 9 || set.has(num)) {
          return false;
        }
        set.add(num);
      }
      return true;
    };
  
    const isValidColumn = (board, colIndex) => {
      const set = new Set();
      for (const row of board) {
        const num = row[colIndex];
        if (num < 1 || num > 9 || set.has(num)) {
          return false;
        }
        set.add(num);
      }
      return true;
    };
  
    const isValidGrid = (board, startRow, startCol) => {
      const set = new Set();
      for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
          const num = board[row][col];
          if (num < 1 || num > 9 || set.has(num)) {
            return false;
          }
          set.add(num);
        }
      }
      return true;
    };
  
    for (let i = 0; i < 9; i++) {
      if (!isValidRow(board[i]) || !isValidColumn(board, i)) {
        return false;
      }
    }
  
    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
        if (!isValidGrid(board, row, col)) {
          return false;
        }
      }
    }
  
    return true;
  };
  
  module.exports = { isValidSudoku };
  
