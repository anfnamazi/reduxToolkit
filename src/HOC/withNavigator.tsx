import { ComponentType } from "react";
import { NavLink } from "react-router-dom";

export function withNavigator<P>(WrappedComponent: ComponentType<P>) {
  const ComponentWithNavigator = (props: P) => {
    return (
      <div>
        <NavLink style={{ marginRight: 16 }} to="login">
          Login
        </NavLink>
        <NavLink style={{ marginRight: 16 }} to="/">
          Home
        </NavLink>
        <NavLink style={{ marginRight: 16 }} to="primary">
          Primary
        </NavLink>
        <NavLink style={{ marginRight: 16 }} to="secondary">
          Secondary
        </NavLink>
        <WrappedComponent {...props} />
      </div>
    );
  };
  return ComponentWithNavigator;
}
