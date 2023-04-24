import React from 'react';
import withAuth from './Hoc';
import withAuthAA from './hoc1';

const withAuthCombined = (Component) => {
  const WrappedComponent = withAuth(Component);
  const CombinedComponent = withAuthAA(WrappedComponent);

  return CombinedComponent;
};

export default withAuthCombined;
