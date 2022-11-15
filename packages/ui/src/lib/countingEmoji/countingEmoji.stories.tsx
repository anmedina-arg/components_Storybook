import { CountingEmoji } from './countingEmoji';
import { LikeHand, UserGroupOutline, Moon } from '../icons/fillableIcons';

export default {
  component: CountingEmoji,
  title: 'CountingEmoji',
};
// } as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = () => <CountingEmoji icon={<LikeHand/>} />;
export const Secondary = () => <CountingEmoji icon={<UserGroupOutline/>} />;
export const TheOther = () => <CountingEmoji  icon={<Moon/>} />;
