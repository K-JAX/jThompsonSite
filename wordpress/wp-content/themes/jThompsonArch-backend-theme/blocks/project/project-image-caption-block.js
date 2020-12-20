const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const BLOCKS_TEMPLATE = [
    [ 'core/columns', { className: "project-feature tree-trunk" }, [
        ['core/column', { className: "trunk left" }, [
            ['jta/project-branch-placeholder', {}, []],
            ['core/group', { className: "box" }, []]
        ]],
        ['core/column', { className: "trunk right" }, [
            ['jta/project-branch-placeholder', {}, []],
            ['core/group', { className: "box" }, []]
        ]]
    ] ]
];

registerBlockType( 'jta/project-image-caption', {
    title: 'Project Image & Caption',
    icon: 'analytics',
    category: 'project-blocks',
    
    edit() {
        return (
          <InnerBlocks className="project-feature tree-trunk" template={BLOCKS_TEMPLATE} />
        );
    },
    save() {
        return <InnerBlocks.Content />
    },
} );