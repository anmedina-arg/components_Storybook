import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph, Magic, Subtitle, Title } from './';

const Text = () => (
  <div>
    <Title>underline gradient animation</Title>
    <Paragraph>
      and then, once a connection had been established, you suddenly had access
      to a completely new world. A world of seemingly infinite yet unknown
      possibilities. A world full of ideas, resources and thoughts from people
      all around the globe. A world waiting for you to be explored. It was mind
      blowing. <Magic>a magical moment.</Magic> sadsa
    </Paragraph>
    <Subtitle>This is a Subtitle</Subtitle>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate
      sequi provident obcaecati, natus repellat doloribus quos modi. Cumque
      perferendis adipisci dicta deserunt alias cum facilis at illo ex
      reprehenderit?
    </Paragraph>
  </div>
);

export default {
  component: Text,
  title: 'Text',
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text />;

export const Primary = Template.bind({});
Primary.args = {};
