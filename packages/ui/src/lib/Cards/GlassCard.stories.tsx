import { GlassCard } from './GlassCard';
export default {
  /* 👇 The title prop is optional. */
  title: 'GlassCard',
  component: GlassCard,
};

export const Card = () => (
  <GlassCard title="GlassCard" subTitle="This is a glassCard" />
);
