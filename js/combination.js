function generateSittingCombinations(people, tables) {
    const tableNames = ['A', 'B', 'C', 'D', 'E'];
    const tableSizes = [10, 10, 10, 10, 10];
  
    function generateCombinations(index, remainingPeople) {
      if (index === tables.length) {
        // All tables are filled
        return;
      }
  
      const tableSize = tableSizes[index];
      const combinations = [];
  
      for (let i = 0; i < remainingPeople.length; i++) {
        const person = remainingPeople[i];
        const newRemainingPeople = remainingPeople.slice(0, i).concat(remainingPeople.slice(i + 1));
        const combination = {
          table: tableNames[index],
          people: [person].concat(generateCombinations(index + 1, newRemainingPeople))
        };
        combinations.push(combination);
      }
  
      return combinations;
    }
  
    const combinations = generateCombinations(0, people);
    return combinations;
  }
  
  // Example usage:
  const people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
  const tables = 5;
  
  const allCombinations = generateSittingCombinations(people, tables);
  console.log(allCombinations);