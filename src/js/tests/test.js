import getSpecials from '../getSpecials';

test('test get specials fucnction', () => {
    const testCharacter = {
        name: 'name',
        type: 'type',
        health: 100,
        level: 1,
        attack: 100,
        defence: 100,
        special: [
          {
            id: 1,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон',
          },
          {
            id: 2,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
          },
        ],
    };
    const result = getSpecials(testCharacter);
    expect(result).toStrictEqual([{
        id: 1,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
    },
    {
        id: 2,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
    }]);
});
