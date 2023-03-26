export default function getSpecials(character) {
    const specialsArr = [];
    for (const s of character.special) {
        const {
            id, name, icon, description = 'Описание недоступно',
        } = s;
        specialsArr.push({
            id,
            name,
            icon,
            description,
        });
    }
    return specialsArr;
}
