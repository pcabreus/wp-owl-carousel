import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: "pcabreus-owl-carousel"
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content/>
		</div>
	);
}
