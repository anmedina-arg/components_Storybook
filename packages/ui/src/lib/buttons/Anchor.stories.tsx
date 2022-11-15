import { Anchor } from './Anchor';
import { Moon, UserGroupOutline } from '../icons/index';

export default {
  /* 👇 The title prop is optional. */
  title: 'Anchor',
  component: Anchor,
};

export const Primary = () => (
  <Anchor label="Primary" to="https://www.google.com" />
);

export const PrimaryBlock = () => (
  <Anchor block label="Primary" to="https://www.google.com" />
);

export const WithIcon = () => (
  <Anchor block icon={<Moon />} label="With Icon" to="https://www.google.com" />
);

export const WithAnotherIcon = () => (
  <Anchor
    block
    icon={<UserGroupOutline />}
    label="With Icon"
    to="https://www.google.com"
  />
);
