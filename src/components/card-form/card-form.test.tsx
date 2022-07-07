import type { ReactElement } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { SigninForm } from 'pages/signin/components/signin-form';
import { SignupForm } from 'pages/signup/components/signup-form';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { instanceApi } from 'services/instance-api';
import { rootReducer } from 'store/root-reducer';
import { CardFormComponent } from './card-form';

describe('Card form render', () => {
  const mockStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(instanceApi.middleware),
  });

  const getComponent = (
    Component: ReactElement,
  ): ReactTestRendererJSON | ReactTestRendererJSON[] | null =>
    renderer
      .create(
        <BrowserRouter>
          <Provider store={mockStore}>
            <CardFormComponent>{Component}</CardFormComponent>
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();

  it(' Card form with SigninForm renders correctly', () => {
    expect(getComponent(<SigninForm />)).toMatchSnapshot();
  });

  it(' Card form with SigninForm renders correctly', () => {
    expect(getComponent(<SignupForm />)).toMatchSnapshot();
  });
});
