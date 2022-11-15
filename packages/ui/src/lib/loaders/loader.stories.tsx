import { Loader } from './simple_circle_spiner';
import { RingLoader } from './ring_loader';

export default {
  component: Loader,
  title: 'Loaders',
};
// } as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Simple_circle_spiner = () => <Loader />;

export const Ring_Loader = () => <RingLoader />;
