<script>
import random from 'lodash/random';

export default {
  render() {
    return (
      <div>
        <h2>{random(0, 999)}</h2>
      </div>
    );
  },
};
</script>

