const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType( 'jta/project-budget', {
    title: 'Project Budget',
    icon: 'chart-pie',
    category: 'project-blocks',
    attributes: {
        blockValue: {
            type: 'string',
            source: 'meta',
            meta: 'project_budget_field'
        }
    },

    edit( { setAttributes, attributes} ) {

        function updateBlockValue(blockValue) { {
            setAttributes( {blockValue} );
        }}
        return (
            <div className="inline underline">
                <h2>Project Budget</h2>
                <p>$
                <span><RichText
                    className="big grayed"
                    placeholder="ex.76k"
                    value={ attributes.blockValue }
                    onChange={ updateBlockValue }
                    inlineToolbar
                /></span>
                </p>
            </div>
        );
    },
    save() {
        return null
    },    
} );