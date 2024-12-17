import ProductDescription from './ProductDescription.vue';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'ProductDescription',
  component: ProductDescription,
};


const Template = (args) => ({
    components: { ProductDescription },
    setup() {
      return { args };
    },
    template: '<ProductDescription v-bind="args" />',
  });

  export const FirstStory = Template.bind({});

  FirstStory.args = {
    title: 'primary',
    price: 'price',
    imgSrc: 'image source',
    loaction: 'location + zip',
  }
