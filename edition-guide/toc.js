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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded "><a href="editions/index.html"><strong aria-hidden="true">1.</strong> What are editions?</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="editions/creating-a-new-project.html"><strong aria-hidden="true">1.1.</strong> Creating a new project</a></li><li class="chapter-item expanded "><a href="editions/transitioning-an-existing-project-to-a-new-edition.html"><strong aria-hidden="true">1.2.</strong> Transitioning an existing project to a new edition</a></li><li class="chapter-item expanded "><a href="editions/advanced-migrations.html"><strong aria-hidden="true">1.3.</strong> Advanced migrations</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2015/index.html"><strong aria-hidden="true">2.</strong> Rust 2015</a></li><li class="chapter-item expanded "><a href="rust-2018/index.html"><strong aria-hidden="true">3.</strong> Rust 2018</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2018/path-changes.html"><strong aria-hidden="true">3.1.</strong> Path and module system changes</a></li><li class="chapter-item expanded "><a href="rust-2018/trait-fn-parameters.html"><strong aria-hidden="true">3.2.</strong> Anonymous trait function parameters deprecated</a></li><li class="chapter-item expanded "><a href="rust-2018/new-keywords.html"><strong aria-hidden="true">3.3.</strong> New keywords</a></li><li class="chapter-item expanded "><a href="rust-2018/tyvar-behind-raw-pointer.html"><strong aria-hidden="true">3.4.</strong> Method dispatch for raw pointers to inference variables</a></li><li class="chapter-item expanded "><a href="rust-2018/cargo.html"><strong aria-hidden="true">3.5.</strong> Cargo changes</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2021/index.html"><strong aria-hidden="true">4.</strong> Rust 2021</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2021/prelude.html"><strong aria-hidden="true">4.1.</strong> Additions to the prelude</a></li><li class="chapter-item expanded "><a href="rust-2021/default-cargo-resolver.html"><strong aria-hidden="true">4.2.</strong> Default Cargo feature resolver</a></li><li class="chapter-item expanded "><a href="rust-2021/IntoIterator-for-arrays.html"><strong aria-hidden="true">4.3.</strong> IntoIterator for arrays</a></li><li class="chapter-item expanded "><a href="rust-2021/disjoint-capture-in-closures.html"><strong aria-hidden="true">4.4.</strong> Disjoint capture in closures</a></li><li class="chapter-item expanded "><a href="rust-2021/panic-macro-consistency.html"><strong aria-hidden="true">4.5.</strong> Panic macro consistency</a></li><li class="chapter-item expanded "><a href="rust-2021/reserved-syntax.html"><strong aria-hidden="true">4.6.</strong> Reserved syntax</a></li><li class="chapter-item expanded "><a href="rust-2021/raw-lifetimes.html"><strong aria-hidden="true">4.7.</strong> Raw lifetimes</a></li><li class="chapter-item expanded "><a href="rust-2021/warnings-promoted-to-error.html"><strong aria-hidden="true">4.8.</strong> Warnings promoted to errors</a></li><li class="chapter-item expanded "><a href="rust-2021/or-patterns-macro-rules.html"><strong aria-hidden="true">4.9.</strong> Or patterns in macro-rules</a></li><li class="chapter-item expanded "><a href="rust-2021/c-string-literals.html"><strong aria-hidden="true">4.10.</strong> C-string literals</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/index.html"><strong aria-hidden="true">5.</strong> Rust 2024</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/language.html"><strong aria-hidden="true">5.1.</strong> Language</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/rpit-lifetime-capture.html"><strong aria-hidden="true">5.1.1.</strong> RPIT lifetime capture rules</a></li><li class="chapter-item expanded "><a href="rust-2024/temporary-if-let-scope.html"><strong aria-hidden="true">5.1.2.</strong> if let temporary scope</a></li><li class="chapter-item expanded "><a href="rust-2024/temporary-tail-expr-scope.html"><strong aria-hidden="true">5.1.3.</strong> Tail expression temporary scope</a></li><li class="chapter-item expanded "><a href="rust-2024/match-ergonomics.html"><strong aria-hidden="true">5.1.4.</strong> Match ergonomics reservations</a></li><li class="chapter-item expanded "><a href="rust-2024/unsafe-extern.html"><strong aria-hidden="true">5.1.5.</strong> Unsafe extern blocks</a></li><li class="chapter-item expanded "><a href="rust-2024/unsafe-attributes.html"><strong aria-hidden="true">5.1.6.</strong> Unsafe attributes</a></li><li class="chapter-item expanded "><a href="rust-2024/unsafe-op-in-unsafe-fn.html"><strong aria-hidden="true">5.1.7.</strong> unsafe_op_in_unsafe_fn warning</a></li><li class="chapter-item expanded "><a href="rust-2024/static-mut-references.html"><strong aria-hidden="true">5.1.8.</strong> Disallow references to static mut</a></li><li class="chapter-item expanded "><a href="rust-2024/never-type-fallback.html"><strong aria-hidden="true">5.1.9.</strong> Never type fallback change</a></li><li class="chapter-item expanded "><a href="rust-2024/macro-fragment-specifiers.html"><strong aria-hidden="true">5.1.10.</strong> Macro fragment specifiers</a></li><li class="chapter-item expanded "><a href="rust-2024/missing-macro-fragment-specifiers.html"><strong aria-hidden="true">5.1.11.</strong> Missing macro fragment specifiers</a></li><li class="chapter-item expanded "><a href="rust-2024/gen-keyword.html"><strong aria-hidden="true">5.1.12.</strong> gen keyword</a></li><li class="chapter-item expanded "><a href="rust-2024/reserved-syntax.html"><strong aria-hidden="true">5.1.13.</strong> Reserved syntax</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/standard-library.html"><strong aria-hidden="true">5.2.</strong> Standard library</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/prelude.html"><strong aria-hidden="true">5.2.1.</strong> Changes to the prelude</a></li><li class="chapter-item expanded "><a href="rust-2024/intoiterator-box-slice.html"><strong aria-hidden="true">5.2.2.</strong> Add IntoIterator for Box&lt;[T]&gt;</a></li><li class="chapter-item expanded "><a href="rust-2024/newly-unsafe-functions.html"><strong aria-hidden="true">5.2.3.</strong> Newly unsafe functions</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/cargo.html"><strong aria-hidden="true">5.3.</strong> Cargo</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/cargo-resolver.html"><strong aria-hidden="true">5.3.1.</strong> Cargo: Rust-version aware resolver</a></li><li class="chapter-item expanded "><a href="rust-2024/cargo-table-key-names.html"><strong aria-hidden="true">5.3.2.</strong> Cargo: Table and key name consistency</a></li><li class="chapter-item expanded "><a href="rust-2024/cargo-inherited-default-features.html"><strong aria-hidden="true">5.3.3.</strong> Cargo: Reject unused inherited default-features</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/rustdoc.html"><strong aria-hidden="true">5.4.</strong> Rustdoc</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/rustdoc-doctests.html"><strong aria-hidden="true">5.4.1.</strong> Rustdoc combined tests</a></li><li class="chapter-item expanded "><a href="rust-2024/rustdoc-nested-includes.html"><strong aria-hidden="true">5.4.2.</strong> Rustdoc nested include! change</a></li></ol></li><li class="chapter-item expanded "><a href="rust-2024/rustfmt.html"><strong aria-hidden="true">5.5.</strong> Rustfmt</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust-2024/rustfmt-style-edition.html"><strong aria-hidden="true">5.5.1.</strong> Rustfmt: Style edition</a></li><li class="chapter-item expanded "><a href="rust-2024/rustfmt-formatting-fixes.html"><strong aria-hidden="true">5.5.2.</strong> Rustfmt: Formatting fixes</a></li><li class="chapter-item expanded "><a href="rust-2024/rustfmt-raw-identifier-sorting.html"><strong aria-hidden="true">5.5.3.</strong> Rustfmt: Raw identifier sorting</a></li><li class="chapter-item expanded "><a href="rust-2024/rustfmt-version-sorting.html"><strong aria-hidden="true">5.5.4.</strong> Rustfmt: Version sorting</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
