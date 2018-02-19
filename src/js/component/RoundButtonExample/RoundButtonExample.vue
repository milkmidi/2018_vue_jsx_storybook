<script>
import RoundButton from '@/component/RoundButton';
import Checkbox from '@/component/Checkbox';

export default {
  data: () => ({
    value: 0,
  }),
  render() {
    return (
      <div>
        <RoundButton onClick={() => this.value += 1}>Add</RoundButton>
        <RoundButton rounded color="#ff0000"
          onClick={() => this.value -= 1}>Sub</RoundButton>
        <p>{this.value}</p>
        <Checkbox label="Vue" />
        <Checkbox label="React" />
        <Checkbox label="Angular" />
      </div>
    );
  },
};
</script>


