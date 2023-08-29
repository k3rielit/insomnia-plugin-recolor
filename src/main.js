const recolor = {
    colormap: {
        GET: 'var(--color-surprise)',
        POST: 'var(--color-success)',
        PUT: 'var(--color-warning)',
        PTCH: 'var(--color-notice)',
        DEL: 'var(--color-danger)',
        OPT: 'var(--color-info)',
        HEAD: 'var(--color-info)',
        default: 'var(--color-font)'
    },
    namemap: {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        PTCH: 'PATCH',
        DEL: 'DELETE',
        OPT: 'OPTIONS',
        HEAD: 'HEAD',
    },
    selectors: {
        sidebar: '#wrapper > aside',
        httpMethod: '.w-10.flex-shrink-0.border'
    },
    classlists: {
        coloredHttpMethod: 'w-10 flex-shrink-0 flex items-center'
    },
}


const observer = new MutationObserver((mutationList, observer) => {
    // Search for bordered nodes
    document.querySelectorAll(recolor.selectors.httpMethod).forEach(node => {
        let httpMethod = node.innerText;
        node.setAttribute('class',recolor.classlists.coloredHttpMethod);
        node.setAttribute('style',`font-weight: bold; font-size: 0.85rem; color: ${recolor.colormap[httpMethod] ? recolor.colormap[httpMethod] : recolor.colormap.default};`);
    });
});
observer.observe(document.body, {attributes: true, childList: true, subtree: true});