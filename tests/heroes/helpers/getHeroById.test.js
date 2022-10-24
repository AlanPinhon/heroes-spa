import { getHeroById } from '../../../src/heroes/helpers';

//Test realizado como práctica fuera del curso

describe('Pruebas en getHeroById.js', () => {

  test('debe retornar el héroe por medio de su id', () => {
    
    const hero = getHeroById('marvel-thor');
    expect(hero).toEqual({
      'id': 'marvel-thor',
      'superhero':'Thor', 
      'publisher':'Marvel Comics', 
      'alter_ego':'Thor Odinson',
      'first_appearance':'Journey into Myster #83',
      'characters':'Thor Odinson'
    });

  });

});