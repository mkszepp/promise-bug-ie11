import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
	@tracked showInput = true;
	
	@action
	toggleInput() {
		this.showInput = !this.showInput;
	}
}
