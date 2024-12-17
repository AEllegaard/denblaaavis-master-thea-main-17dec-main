import ProfileDescription from './ProfileDescription.vue';

export default {
  title: 'ProfileDescription',
  component: ProfileDescription,
};

const Template = (args) => ({
  components: { ProfileDescription },
  setup() {
    return { args };
  },
  template: '<ProfileDescription v-bind="args" />',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  name: 'name',
  location: 'location + zip',
};
