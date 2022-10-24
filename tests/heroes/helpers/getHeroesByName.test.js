import { getHeroesByName } from '../../../src/heroes/helpers';

//Test realizado como práctica fuera del curso

describe('Pruebas en getHeroesByName.js', () => {

  test('debe retornar el héroe por su nombre', () => {

    const hero = getHeroesByName('Iron Man');
    expect(hero).toEqual([{
      'id': 'marvel-iron',
      'superhero':'Iron Man', 
      'publisher':'Marvel Comics', 
      'alter_ego':'Tony Stark',
      'first_appearance':'Tales of Suspense #39',
      'characters':'Tony Stark'
    }]);

  });

});