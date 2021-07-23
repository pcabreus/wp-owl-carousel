import './editor.scss';
import {InnerBlocks, InspectorControls, useBlockProps} from "@wordpress/block-editor";

export default function Edit() {
	const blockProps = useBlockProps({
		className: "pcabreus-owl-carousel"
	})

	return (
		<div {...blockProps}>
			<InnerBlocks
				template={[['core/group']]}
			/>
		</div>
	);
}
