import { Counter } from './counter';
import { Moon } from '../icons/fillableIcons';

export default {
  component: Counter,
  title: 'Counter',
};
// } as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = () => <Counter icon={<Moon />} />;
