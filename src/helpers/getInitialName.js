// @flow

export default function getInitial(name: string) {
  let splitted = name.split(' ');
  return splitted
    .reduce((initial, word) => {
      if (initial.length === 3) {
        return initial;
      }
      return initial.concat(word[0]);
    }, '')
    .toUpperCase();
}
