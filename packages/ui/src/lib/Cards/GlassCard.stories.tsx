import {GlassCard} from "./GlassCard";
export default {
    /* 👇 The title prop is optional. */
    title: 'GlassCard',
    component: GlassCard,
  };

export const Card = () => (
    <GlassCard title="Antonio" subTitle="WEB 3 Proyect"/>
  );