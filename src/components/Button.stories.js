import Button from './Button.vue';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Button',
  component: Button,
};


const Template = (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  });

  export const FirstStory = Template.bind({});

  FirstStory.args = {
    text: 'primary',
  }