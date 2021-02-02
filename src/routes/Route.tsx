import React from 'react';
import { Route } from 'react-router-dom';
import GeneralLayout from '../layouts/GeneralLayout';
import { IProps } from '../modules/types';

export default function RouteWrapper({ component: Component, ...rest }: IProps) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <GeneralLayout>
          <Component {...props} />
        </GeneralLayout>
      )}
    />
  );
}
