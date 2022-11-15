import { MixButtonCounter } from './mixButtonCounter';
import { LikeHand, UserGroupOutline, Moon } from '../icons/fillableIcons';

export default {
  component: MixButtonCounter,
  title: 'MixButonCounter',
};
// } as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Counter = () => <MixButtonCounter icon={<LikeHand />} />;
