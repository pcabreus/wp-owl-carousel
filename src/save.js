import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

export default function save(props) {
	const blockProps = useBlockProps.save();
	const {animateOut, items, responsiveItems, center} = props.attributes
	return (
		<div {...blockProps} data-items={items} data-animate_out={animateOut} data-responsive_items={responsiveItems} data-center={center}>
			<InnerBlocks.Content/>
		</div>
	);
}
