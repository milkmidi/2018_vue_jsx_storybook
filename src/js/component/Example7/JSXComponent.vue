<script>
import random from 'lodash/random';

export default {
  render() {
    const n = 10;
    return (
      <section>
        <h2>{random(0, 999)}</h2>
        <p>{`${n}:milkmidi`}</p>
      </section>
    );
  },
};
</script>

