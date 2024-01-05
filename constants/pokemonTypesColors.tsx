export const pokemonTypesColors = (type?: string) => {
    switch (type) {
      case 'Grass':
        return { backgroundColor: '#49d0b0' };
      case 'Fire':
        return { backgroundColor: '#fc6c6d' };
      case 'Water':
        return { backgroundColor: '#6890f0' };
      case 'Bug':
        return { backgroundColor: '#d4de4e' };
      case 'Normal':
        return { backgroundColor: '#c9c99f' };
      case 'Fighting':
        return { backgroundColor: '#de5e57' };
      case 'Flying':
        return { backgroundColor: '#b8a3f7' };
      case 'Poison':
        return { backgroundColor: '#cf63cf' };
      case 'Electric':
        return { backgroundColor: '#fcdc5b' };
      case 'Ground':
        return { backgroundColor: '#ebcd7a' };
      case 'Psychic':
        return { backgroundColor: '#fc779f' };
      case 'Rock':
        return { backgroundColor: '#e3c959' };
      case 'Ice':
        return { backgroundColor: '#a9e8e8' };
      case 'Dragon':
        return { backgroundColor: '#9065f7' };
      case 'Ghost':
        return { backgroundColor: '#8d6fbf' };
      case 'Dark':
        return { backgroundColor: '#ad876d' };
      case 'Steel':
        return { backgroundColor: '#b8b8d0' };
      case 'Fairy':
        return { backgroundColor: '#e492a5' };
      default:
        return { backgroundColor: '#FFFFFF' }; // Default color if type is not matched
    }
  };
