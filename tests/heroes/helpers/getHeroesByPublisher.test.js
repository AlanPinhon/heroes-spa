import { getHeroesByPublisher } from '../../../src/heroes/helpers';

//Test realizado como práctica fuera del curso

describe('Pruebas en getHeroesByPublisher.js', () => {

  test('debe retornar los heroes por su publisher', () => {

    const heroes = getHeroesByPublisher('Marvel Comics');

    expect(heroes.length).toBeGreaterThan(0);
    
    expect(heroes[0]).toEqual({
      id : expect.any(String),
      superhero : expect.any(String), 
      publisher : expect.any(String), 
      alter_ego : expect.any(String),
      first_appearance : expect.any(String),
      characters : expect.any(String)
  });

  });

});