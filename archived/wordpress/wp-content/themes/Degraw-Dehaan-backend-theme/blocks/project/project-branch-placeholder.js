const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


registerBlockType( 'dd/project-branch-placeholder', {
    title: 'Project Branch Placeholder',
    icon: 'analytics',
    category: 'project-blocks',
    
    edit() {
        return (
          <div className="branch">(Branch HTML)</div>
        );
    },
    save() {
        return (
            <div className="branch"></div>
        );
    },
} );