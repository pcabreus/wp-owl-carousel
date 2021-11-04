import './editor.scss';
import {InnerBlocks, InspectorControls, useBlockProps} from "@wordpress/block-editor";
import {TextControl, SelectControl} from '@wordpress/components';

export default function Edit(props) {
	const blockProps = useBlockProps()

	const {animateOut, items, responsiveItems, center} = props.attributes

	return (
		<div {...blockProps}>
			<InspectorControls>
				<TextControl
					value={items}
					label={'Items (Mobile)'}
					onChange={(items) => props.setAttributes({items})
					}
				/>
				<TextControl
					value={responsiveItems}
					label={'Items (Desktop)'}
					onChange={(responsiveItems) => props.setAttributes({responsiveItems})
					}
				/>
				<SelectControl
					options={[
						{
							id: 0,
							label: "Select value",
							value: ""
						}, {
							id: 0,
							label: "fadeOut",
							value: "fadeOut"
						}]}
					value={animateOut}
					label={'Animate out'}
					onChange={(animateOut) => props.setAttributes({animateOut})
					}
				/>
				<SelectControl
					options={[
						{
							id: 0,
							label: "Yes",
							value: true
						}, {
							id: 1,
							label: "No",
							value: false
						}]}
					value={center}
					label={'Center'}
					onChange={(center) => props.setAttributes({center})
					}
				/>
			</InspectorControls>
			<InnerBlocks
				template={[['core/group']]}
			/>
		</div>
	);
}
