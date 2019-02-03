import getInitialName from '../getInitialName';

describe('getInitialName Test', () => {
  it('should get initial name', () => {
    let initialName = getInitialName('Budi');
    expect(initialName).toEqual('B');
    let initialNameTwoWord = getInitialName('Budi Raharjo');
    expect(initialNameTwoWord).toEqual('BR');
  });
});
