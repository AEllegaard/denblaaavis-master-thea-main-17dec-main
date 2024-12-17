import PlaceAndTime from './PlaceAndTime.vue';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'PlaceAndTime',
  component: PlaceAndTime,
};


const Template = (args) => ({
    components: { PlaceAndTime },
    setup() {
      return { args };
    },
    template: '<PlaceAndTime v-bind="args" />',
  });

  export const FirstStory = Template.bind({});

  FirstStory.args = {
    loaction: 'location + zip',
    time: 'time',
  }
