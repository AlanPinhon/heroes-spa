import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/';
import { HeroCard } from '../../../src/heroes/components/HeroCard';

//Test realizado como práctica fuera del curso

describe('Pruebas en <HeroCard/>', () => {

  test('debe mostrar la información del héroe y su respectiva imagen', () => {

    const hero = {
      'id': 'dc-batman',
      'superhero':'Batman',
      'alter_ego':'Bruce Wayne',
      'first_appearance':'Detective Comics #27',
      'characters':'Bruce Wayne'
    };

    render(
      <MemoryRouter>
        <HeroCard
          id={hero.id}
          superhero={hero.superhero}
          alter_ego={hero.alter_ego}
          characters={hero.characters}
          first_appearance={hero.first_appearance}
        />
      </MemoryRouter>
    );

    const img = screen.getByRole('img');

    expect(hero.superhero).toBe('Batman');
    expect(hero.alter_ego).toBe('Bruce Wayne');
    expect(hero.first_appearance).toBe('Detective Comics #27');
    expect(img.src).toContain(`/assets/heroes/${hero.id}.jpg`);
    // screen.debug();

  })

})