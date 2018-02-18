## JSX v-model issus

- 預設 v-mdoel 會傳 props.value 給子元件
- 如果想保留 value 屬性，有個 model 參數能夠修改
- model[https://vuejs.org/v2/api/#model]
- 但 babel-plugin-jsx-v-model 不會幫你轉換