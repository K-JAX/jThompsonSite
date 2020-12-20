const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
 
const blockStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px',
};
 
registerBlockType( 'jta/project-summary', {
    title: 'Project Summary',
    icon: 'media-text',
    category: 'project-blocks',
    attributes: {
        blockValue: {
            type: 'string',
            source: 'meta',
            meta: 'project_summary_block_field'
        }
    },
    edit( { setAttributes, attributes} ) {

        function updateBlockValue(blockValue) { {
            setAttributes( {blockValue} );
        }}
        return (
            <div>
                <h2>Project Summary</h2>
                <RichText
                    className=""
                    placeholder="Write project summary (appears at beginnning)"
                    value={ attributes.blockValue }
                    onChange={ updateBlockValue }
                    inlineToolbar
                />
            </div>
        );
    },
    save() {
        return null
    },
} );