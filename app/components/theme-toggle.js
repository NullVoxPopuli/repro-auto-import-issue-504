import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class DemoComponent extends Component {
  @service themeManager;

  toggle = () => this.themeManager.toggleTheme();
}
