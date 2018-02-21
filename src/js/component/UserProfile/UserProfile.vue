<script>
export default {
  props: {
    name: String,
    img: String,
    followers: Number,
    following: Number,
    description: String,
  },
  render() {
    const userImgStyle = {};
    if (this.img) {
      userImgStyle['background-image'] = `url(${this.img})`;
    }
    return (
      <div class="user-profile card text-center">
        <div class="user-img" style={userImgStyle}></div>
        <div class="card-header">
          <h2>{this.name}</h2>
        </div>
        <div class="description">{this.description}</div>
        <div class="card-footer">
          <div class="followers">{this.followers}</div>
          <div class="following">{this.following}</div>
        </div>
      </div>
    );
  },
};
</script>
<style lang="stylus" src="./style.styl">
</style>