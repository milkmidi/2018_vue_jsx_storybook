import Template from '@/component/Template';
import UserProfile from '@/component/UserProfile';
import UserProfileContainer from '@/container/UserProfileContainer';

export default {
  functional: true,
  render() {
    return (
      <Template
        standard={require('!raw-loader!docs-loader!@/component/UserProfile/UserProfile.vue')}
        jsx={require('!raw-loader!docs-loader!@/container/UserProfileContainer/UserProfileContainer.vue')}>
        <div slot="title">
          <h1>Component / Container</h1>
          <a class="btn btn-link"
            href="https://milkmidi.github.io/2018_vue_jsx_storybook/storybook/"
            target="_blank">https://milkmidi.github.io/2018_vue_jsx_storybook/storybook/</a>
        </div>
        <UserProfile slot="standard" />
        <UserProfileContainer slot="jsx" />
      </Template>
    );
  },
};

