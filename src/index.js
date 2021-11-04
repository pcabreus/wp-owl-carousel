import {registerBlockType} from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('pcabreus/owl-carousel', {
	attributes: {
		animateOut: {
			selector: "",
			attribute: "data-animate_out",
			type: 'string',
			default: ""
		},
		items: {
			selector: "",
			attribute: "data-items",
			type: 'string',
			default: 2
		},
		responsiveItems: {
			selector: "",
			attribute: "data-responsive_items",
			type: 'string',
			default: 2
		},
		center: {
			selector: "",
			attribute: "data-center",
			type: 'string',
			default: true
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	getEditWrapperProps( attributes ) {
		return {
			'data-animate_out': attributes.animateOut,
			'data-items': attributes.items,
			'data-responsive_items': attributes.responsiveItems,
		};
	},
});
