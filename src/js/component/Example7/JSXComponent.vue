<script>
import random from 'lodash/random';
import range from 'lodash/range';

export default {
  render() {
    const d = '3Q9527';
    return (
      <section>
        <h5>{random(0, 999)}</h5>
        <h5>{JSON.stringify(range(5))}</h5>
        <h5>{`${d}:milkmidi`}</h5>
      </section>
    );
  },
};
</script>

