import ProductText from './ProductText.vue';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'ProductText',
  component: ProductText,
};


const Template = (args) => ({
    components: { ProductText },
    setup() {
      return { args };
    },
    template: '<ProductText v-bind="args" />',
  });

  export const FirstStory = Template.bind({});

  FirstStory.args = {
    product: 'producttext',
    material: 'material',
    stand: 'condition',
  }
