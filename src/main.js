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
    observerSettings: {
        base: { childList: true, subtree: true },
        span: { childList: true, characterData: true, subtree: true }
    },
    // Not implemented yet
    settings: {
        recolor: true,
        longtext: false
    }
}

function recolorNode(node) {
    // Recolor the node based on the new text content
    if(!node.setAttribute) return;
    let httpMethod = node.textContent;
    node.setAttribute('style', `font-weight: bold; font-size: 0.85rem; color: ${recolor.colormap[httpMethod] ? recolor.colormap[httpMethod] : recolor.colormap.default};`);
}

const spanObserver = new MutationObserver((mutationList) => {
    // look for text node with the characterData mutation type, then recolor its parent node (span)
    mutationList.forEach(mutation => {
        if(mutation && mutation.type == 'characterData') recolorNode(mutation.target.parentNode);
    });
});

const baseObserver = new MutationObserver((mutationList) => {
    // Search for new nodes, modify their classlist, then observe their text content changes
    document.querySelectorAll(recolor.selectors.httpMethod).forEach(node => {
        node.setAttribute('class', recolor.classlists.coloredHttpMethod);
        recolorNode(node);
        spanObserver.observe(node, recolor.observerSettings.span);
    });
});
baseObserver.observe(document.body, recolor.observerSettings.base);