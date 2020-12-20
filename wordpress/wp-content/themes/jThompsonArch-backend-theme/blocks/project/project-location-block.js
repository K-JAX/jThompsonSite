const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
 
const blockStyle = {
    backgroundColor: '#900',
    color: '#fff',
    padding: '20px',
};
 
registerBlockType( 'jta/project-location', {
    title: 'Project Location',
    icon: 'admin-site',
    category: 'project-blocks',
    attributes: {
        blockValue: {
            type: 'string',
            source: 'meta',
            meta: 'project_location_block_field'
        }
    },
    edit( { setAttributes, attributes} ) {

        function updateBlockValue(blockValue) { {
            setAttributes( {blockValue} );
        }}
        return (
            <div>
                <h2>Project Location</h2>
                <RichText
                    className=""
                    placeholder="Where the project was built (or intended to be built)."
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