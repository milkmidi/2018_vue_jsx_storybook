<script>
import Vuex from 'vuex';
import UserProfile from '@/component/UserProfile';

export default {
  data: () => ({
    userData: null,
  }),
  methods: {
    ...Vuex.mapActions(['fakeAPIGetUserProfile']),
  },
  mounted() {
    this.fakeAPIGetUserProfile()
      .then(userData => this.userData = userData);
  },
  render() {
    const user = {
      props: this.userData,
      class: this.userData ? '' : 'loading',
    };
    return (
      <div class="user-profile-container">
        <UserProfile {...user} />
      </div>
    );
  },
};
</script>

