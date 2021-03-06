import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import Centered from '@storybook/addon-centered';
import Styled from 'vue-styled-components';
import { withReadme, withDocs } from 'storybook-readme';
import { remove } from 'lodash';

import CheckBox from './';
import README from './README.md';
import READMEJSX from './README.jsx.md';
import README_ERROR_JSX from './README.error.jsx.md';

const CheckBoxRoot = Styled.div`
  font-size: 120%;
  padding: 30px;
`;

const SectionComponent = Styled.section`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fefefe;
`;

Vue.component('CheckBoxRoot', CheckBoxRoot);
Vue.component('CheckBox', CheckBox);
Vue.component('SectionComponent', SectionComponent);

storiesOf('CheckBox', module)
  .addDecorator(Centered)
  .add('basic', withReadme(README, () => ({
    data: () => ({
      nativeCB: [],
      type: [],
    }),
    watch: {
      nativeCB(val) {
        action('nativeCB')(val.toString());
      },
      type(val) {
        action('Checkbox')(val.toString());
      },
    },
    template: `
      <CheckBoxRoot>
        <SectionComponent>
          <label>
            <input type="checkbox" v-model="nativeCB" value="我是Native值0"/>
            Native Checkbox0
          </label>
          <label>
            <input type="checkbox" v-model="nativeCB" value="我是Native值1"/>
            Native Checkbox1
          </label>
          <p>nativeCB:{{nativeCB}}</p>
        </SectionComponent>
        <SectionComponent>
          <CheckBox label="我是奶綠伯" value='我是值1' v-model="type" />
          <CheckBox label="我是奶綠伯" value='我是值2' v-model="type" />
          <p>type:{{type}}</p>
        </SectionComponent>
      </CheckBoxRoot>
    `,
  })))
  .add('error jsx ', withDocs(README_ERROR_JSX, () => ({
    data: () => ({
      nativeCB: [],
      type: [],
    }),
    watch: {
      nativeCB(val) {
        action('nativeCB')(val.toString(), `isArray:${Array.isArray(val)}`);
      },
      type(val) {
        action('Checkbox')(val.toString());
      },
    },
    render() {
      return (
        <CheckBoxRoot>
          <SectionComponent>
            <label>
              <input type="checkbox" v-model={this.nativeCB} value="native0"/>
              Native Checkbox0
            </label>
            <label>
              <input type="checkbox" v-model={this.nativeCB} value="native1"/>
              Native Checkbox1
            </label>
            <p>{ JSON.stringify(this.nativeCB)}</p>
          </SectionComponent>

          <SectionComponent>
            <CheckBox label="我是奶綠伯0" value='我是值0' v-model={this.type} />
            <CheckBox label="我是奶綠伯1" value='我是值1' v-model={this.type} />
            <p>type:{this.type}</p>
          </SectionComponent>
        </CheckBoxRoot>
      );
    },
  })))
  .add('jsx ', withDocs(READMEJSX, () => ({
    data: () => ({
      type: [],
    }),
    watch: {
      type(val) {
        action('Checkbox')(val.toString());
      },
    },
    render() {
      const vm = this;
      const on = {
        on: {
          change(event) {
            const { target } = event;
            const { checked, value } = target;
            if (checked) {
              vm.type.push(value);
            } else {
              vm.type = remove(vm.type, t => t === value);
            }
          },
        },
      };
      return (
        <CheckBoxRoot>
          <SectionComponent>
            <CheckBox label="我是奶綠伯0" value='我是值0' {...on} />
            <CheckBox label="我是奶綠伯1" value='我是值1' {...on} />
            <p>type:{JSON.stringify(this.type)}</p>
          </SectionComponent>
        </CheckBoxRoot>
      );
    },
  })));

