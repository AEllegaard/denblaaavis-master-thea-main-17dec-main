import ProductImage from './ProductImage.vue';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'ProductImage',
  component: ProductImage,
};


const Template = (args) => ({
    components: { ProductImage },
    setup() {
      return { args };
    },
    template: '<ProductImage v-bind="args" />',
  });

  export const FirstStory = Template.bind({});

  FirstStory.args = {
    imgSrc: 'image source',
  }
