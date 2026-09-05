const contentFor = (block: number): string => {
  switch (block) {
    case 1: return 'X';
    case 2: return 'O';
    default: return '';
  }
};