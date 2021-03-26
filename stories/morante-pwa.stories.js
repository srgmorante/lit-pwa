import { html } from 'lit-html';
import '../src/morante-pwa.js';

export default {
  title: 'MorantePwa',
  component: 'morante-pwa',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <morante-pwa
      style="--morante-pwa-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </morante-pwa>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
