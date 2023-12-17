function checkVoter(voterName: string, votesMap: Record<string, boolean>) {
  if (votesMap[voterName]) {
    return 'kick them out';
  }
  votesMap[voterName] = true;
  return 'let them vote';
}

const map = {};

console.log(checkVoter('hassan', map));
console.log(checkVoter('youssef', map));
console.log(checkVoter('youssef', map));
