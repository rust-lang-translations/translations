// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="introduction.html">Introduction</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="notation.html"><strong aria-hidden="true">1.</strong> Notation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lexical-structure.html"><strong aria-hidden="true">2.</strong> Lexical structure</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="input-format.html"><strong aria-hidden="true">2.1.</strong> Input format</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="keywords.html"><strong aria-hidden="true">2.2.</strong> Keywords</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="identifiers.html"><strong aria-hidden="true">2.3.</strong> Identifiers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="comments.html"><strong aria-hidden="true">2.4.</strong> Comments</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="whitespace.html"><strong aria-hidden="true">2.5.</strong> Whitespace</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="tokens.html"><strong aria-hidden="true">2.6.</strong> Tokens</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="macros.html"><strong aria-hidden="true">3.</strong> Macros</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="macros-by-example.html"><strong aria-hidden="true">3.1.</strong> Macros by example</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="procedural-macros.html"><strong aria-hidden="true">3.2.</strong> Procedural macros</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="crates-and-source-files.html"><strong aria-hidden="true">4.</strong> Crates and source files</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="conditional-compilation.html"><strong aria-hidden="true">5.</strong> Conditional compilation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items.html"><strong aria-hidden="true">6.</strong> Items</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/modules.html"><strong aria-hidden="true">6.1.</strong> Modules</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/extern-crates.html"><strong aria-hidden="true">6.2.</strong> Extern crates</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/use-declarations.html"><strong aria-hidden="true">6.3.</strong> Use declarations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/functions.html"><strong aria-hidden="true">6.4.</strong> Functions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/type-aliases.html"><strong aria-hidden="true">6.5.</strong> Type aliases</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/structs.html"><strong aria-hidden="true">6.6.</strong> Structs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/enumerations.html"><strong aria-hidden="true">6.7.</strong> Enumerations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/unions.html"><strong aria-hidden="true">6.8.</strong> Unions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/constant-items.html"><strong aria-hidden="true">6.9.</strong> Constant items</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/static-items.html"><strong aria-hidden="true">6.10.</strong> Static items</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/traits.html"><strong aria-hidden="true">6.11.</strong> Traits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/implementations.html"><strong aria-hidden="true">6.12.</strong> Implementations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/external-blocks.html"><strong aria-hidden="true">6.13.</strong> External blocks</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/generics.html"><strong aria-hidden="true">6.14.</strong> Generic parameters</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="items/associated-items.html"><strong aria-hidden="true">6.15.</strong> Associated items</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes.html"><strong aria-hidden="true">7.</strong> Attributes</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/testing.html"><strong aria-hidden="true">7.1.</strong> Testing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/derive.html"><strong aria-hidden="true">7.2.</strong> Derive</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/diagnostics.html"><strong aria-hidden="true">7.3.</strong> Diagnostics</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/codegen.html"><strong aria-hidden="true">7.4.</strong> Code generation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/limits.html"><strong aria-hidden="true">7.5.</strong> Limits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/type_system.html"><strong aria-hidden="true">7.6.</strong> Type system</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="attributes/debugger.html"><strong aria-hidden="true">7.7.</strong> Debugger</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="statements-and-expressions.html"><strong aria-hidden="true">8.</strong> Statements and expressions</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="statements.html"><strong aria-hidden="true">8.1.</strong> Statements</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions.html"><strong aria-hidden="true">8.2.</strong> Expressions</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/literal-expr.html"><strong aria-hidden="true">8.2.1.</strong> Literal expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/path-expr.html"><strong aria-hidden="true">8.2.2.</strong> Path expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/block-expr.html"><strong aria-hidden="true">8.2.3.</strong> Block expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/operator-expr.html"><strong aria-hidden="true">8.2.4.</strong> Operator expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/grouped-expr.html"><strong aria-hidden="true">8.2.5.</strong> Grouped expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/array-expr.html"><strong aria-hidden="true">8.2.6.</strong> Array and index expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/tuple-expr.html"><strong aria-hidden="true">8.2.7.</strong> Tuple and index expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/struct-expr.html"><strong aria-hidden="true">8.2.8.</strong> Struct expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/call-expr.html"><strong aria-hidden="true">8.2.9.</strong> Call expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/method-call-expr.html"><strong aria-hidden="true">8.2.10.</strong> Method call expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/field-expr.html"><strong aria-hidden="true">8.2.11.</strong> Field access expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/closure-expr.html"><strong aria-hidden="true">8.2.12.</strong> Closure expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/loop-expr.html"><strong aria-hidden="true">8.2.13.</strong> Loop expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/range-expr.html"><strong aria-hidden="true">8.2.14.</strong> Range expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/if-expr.html"><strong aria-hidden="true">8.2.15.</strong> If expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/match-expr.html"><strong aria-hidden="true">8.2.16.</strong> Match expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/return-expr.html"><strong aria-hidden="true">8.2.17.</strong> Return expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/await-expr.html"><strong aria-hidden="true">8.2.18.</strong> Await expressions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="expressions/underscore-expr.html"><strong aria-hidden="true">8.2.19.</strong> Underscore expressions</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="patterns.html"><strong aria-hidden="true">9.</strong> Patterns</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="type-system.html"><strong aria-hidden="true">10.</strong> Type system</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types.html"><strong aria-hidden="true">10.1.</strong> Types</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/boolean.html"><strong aria-hidden="true">10.1.1.</strong> Boolean type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/numeric.html"><strong aria-hidden="true">10.1.2.</strong> Numeric types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/char.html"><strong aria-hidden="true">10.1.3.</strong> Character type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/str.html"><strong aria-hidden="true">10.1.4.</strong> String slice type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/never.html"><strong aria-hidden="true">10.1.5.</strong> Never type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/tuple.html"><strong aria-hidden="true">10.1.6.</strong> Tuple types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/array.html"><strong aria-hidden="true">10.1.7.</strong> Array types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/slice.html"><strong aria-hidden="true">10.1.8.</strong> Slice types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/struct.html"><strong aria-hidden="true">10.1.9.</strong> Struct types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/enum.html"><strong aria-hidden="true">10.1.10.</strong> Enumerated types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/union.html"><strong aria-hidden="true">10.1.11.</strong> Union types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/function-item.html"><strong aria-hidden="true">10.1.12.</strong> Function item types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/closure.html"><strong aria-hidden="true">10.1.13.</strong> Closure types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/pointer.html"><strong aria-hidden="true">10.1.14.</strong> Pointer types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/function-pointer.html"><strong aria-hidden="true">10.1.15.</strong> Function pointer types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/trait-object.html"><strong aria-hidden="true">10.1.16.</strong> Trait object types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/impl-trait.html"><strong aria-hidden="true">10.1.17.</strong> Impl trait type</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/parameters.html"><strong aria-hidden="true">10.1.18.</strong> Type parameters</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="types/inferred.html"><strong aria-hidden="true">10.1.19.</strong> Inferred type</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dynamically-sized-types.html"><strong aria-hidden="true">10.2.</strong> Dynamically sized types</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="type-layout.html"><strong aria-hidden="true">10.3.</strong> Type layout</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="interior-mutability.html"><strong aria-hidden="true">10.4.</strong> Interior mutability</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="subtyping.html"><strong aria-hidden="true">10.5.</strong> Subtyping and variance</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trait-bounds.html"><strong aria-hidden="true">10.6.</strong> Trait and lifetime bounds</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="type-coercions.html"><strong aria-hidden="true">10.7.</strong> Type coercions</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="divergence.html"><strong aria-hidden="true">10.8.</strong> Divergence</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="destructors.html"><strong aria-hidden="true">10.9.</strong> Destructors</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="lifetime-elision.html"><strong aria-hidden="true">10.10.</strong> Lifetime elision</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="special-types-and-traits.html"><strong aria-hidden="true">11.</strong> Special types and traits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names.html"><strong aria-hidden="true">12.</strong> Names</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names/namespaces.html"><strong aria-hidden="true">12.1.</strong> Namespaces</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names/scopes.html"><strong aria-hidden="true">12.2.</strong> Scopes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names/preludes.html"><strong aria-hidden="true">12.3.</strong> Preludes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="paths.html"><strong aria-hidden="true">12.4.</strong> Paths</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="names/name-resolution.html"><strong aria-hidden="true">12.5.</strong> Name resolution</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="visibility-and-privacy.html"><strong aria-hidden="true">12.6.</strong> Visibility and privacy</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-model.html"><strong aria-hidden="true">13.</strong> Memory model</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="memory-allocation-and-lifetime.html"><strong aria-hidden="true">13.1.</strong> Memory allocation and lifetime</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="variables.html"><strong aria-hidden="true">13.2.</strong> Variables</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="panic.html"><strong aria-hidden="true">14.</strong> Panic</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linkage.html"><strong aria-hidden="true">15.</strong> Linkage</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="inline-assembly.html"><strong aria-hidden="true">16.</strong> Inline assembly</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafety.html"><strong aria-hidden="true">17.</strong> Unsafety</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unsafe-keyword.html"><strong aria-hidden="true">17.1.</strong> The unsafe keyword</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="behavior-considered-undefined.html"><strong aria-hidden="true">17.2.</strong> Behavior considered undefined</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="behavior-not-considered-unsafe.html"><strong aria-hidden="true">17.3.</strong> Behavior not considered unsafe</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="const_eval.html"><strong aria-hidden="true">18.</strong> Constant evaluation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="abi.html"><strong aria-hidden="true">19.</strong> Application binary interface</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="runtime.html"><strong aria-hidden="true">20.</strong> The Rust runtime</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendices.html"><strong aria-hidden="true">21.</strong> Appendices</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="grammar.html"><strong aria-hidden="true">21.1.</strong> Grammar summary</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="syntax-index.html"><strong aria-hidden="true">21.2.</strong> Syntax index</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="macro-ambiguity.html"><strong aria-hidden="true">21.3.</strong> Macro follow-set ambiguity formal specification</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="influences.html"><strong aria-hidden="true">21.4.</strong> Influences</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="test-summary.html"><strong aria-hidden="true">21.5.</strong> Test summary</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="glossary.html"><strong aria-hidden="true">21.6.</strong> Glossary</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

