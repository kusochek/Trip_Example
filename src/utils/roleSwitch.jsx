import React from 'react';

const switchRoles = (components) => {
  console.log(components);
  const SwitchRolesComponents = (props) => {
    const { roles } = props.user;
    const roleComponent = components.find(([role]) => roles.includes(role));
    const [, Component] = roleComponent;
    return <Component {...props} />;
  };

  return SwitchRolesComponents;
};

export const RoleSwitchComponent = (BasicUserComponent, AdminUserComponent) => (switchRoles([
  ['admin', AdminUserComponent],
  ['user', BasicUserComponent],
]));
