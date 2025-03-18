// https://www.codewars.com/kata/52449b062fb80683ec000024/solutions/javascript
function generateHashtag(str) {
    if (!str.trim()) return false;
  
    const result = '#' + str
      .split(' ')
      .filter((word) => word)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('');
  
      return result.length <= 140
        ? result
        : false;
  }