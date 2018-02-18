import Template from '@/component/Template';


import UserProfile from '@/component/UserProfile';
import UserProfileContainer from '@/container/UserProfileContainer';


export default {
  data: () => ({
    standard: require('!raw-loader!docs-loader!../UserProfile/UserProfile.vue'),
    jsx: require('!raw-loader!docs-loader!../../container/UserProfileContainer/UserProfileContainer.vue'),
  }),
  render() {
    return (
      <Template
        standard={this.standard}
        jsx={this.jsx}>
        <div slot="title">
          <h1>Component / Container</h1>
        </div>
        <UserProfile slot="standard" />
        <UserProfileContainer slot="jsx" />
      </Template>
    );
  },
};

