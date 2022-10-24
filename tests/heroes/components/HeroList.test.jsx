import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeroList } from '../../../src/heroes/components';

//Test realizado como práctica fuera del curso

describe('Pruebas en <HeroList/>', () => {

  test('debe de mostrar la lista de personajes de Marvel y hacer match con el snapshot', () => {

    const {container} = render(
      <MemoryRouter>
        <HeroList publisher={'Marvel Comics'}/>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();

  })

})