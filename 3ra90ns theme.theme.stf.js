// Metadata
let customtheme_meta = {
    id: 'net.3ra90n.theme.test', // ID's should be a unique string
    name: '3ra90n test',
    path: 'customtheme',
    repo: 'disabled',
    author: '3ra90n#0559',
    version: '1.0',
    link: 'disabled',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + customtheme_meta.id] = function(){
    // Import Theme
    theme.import('https://api.starfiles.co/direct/574c3bd8509d');
    // Remove Plugin
    // theme.unset();
}
// Installation
window['install_' + customtheme_meta.id] = function(){
    alert('Plugin installed');
}
// Run Plugin
init_plugin(customtheme_meta);
