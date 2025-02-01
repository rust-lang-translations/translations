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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">Introduction</a></li><li class="chapter-item expanded "><a href="meet-safe-and-unsafe.html"><strong aria-hidden="true">1.</strong> Meet Safe and Unsafe</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="safe-unsafe-meaning.html"><strong aria-hidden="true">1.1.</strong> How Safe and Unsafe Interact</a></li><li class="chapter-item expanded "><a href="what-unsafe-does.html"><strong aria-hidden="true">1.2.</strong> What Unsafe Can Do</a></li><li class="chapter-item expanded "><a href="working-with-unsafe.html"><strong aria-hidden="true">1.3.</strong> Working with Unsafe</a></li></ol></li><li class="chapter-item expanded "><a href="data.html"><strong aria-hidden="true">2.</strong> Data Layout</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="repr-rust.html"><strong aria-hidden="true">2.1.</strong> repr(Rust)</a></li><li class="chapter-item expanded "><a href="exotic-sizes.html"><strong aria-hidden="true">2.2.</strong> Exotically Sized Types</a></li><li class="chapter-item expanded "><a href="other-reprs.html"><strong aria-hidden="true">2.3.</strong> Other reprs</a></li></ol></li><li class="chapter-item expanded "><a href="ownership.html"><strong aria-hidden="true">3.</strong> Ownership</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="references.html"><strong aria-hidden="true">3.1.</strong> References</a></li><li class="chapter-item expanded "><a href="aliasing.html"><strong aria-hidden="true">3.2.</strong> Aliasing</a></li><li class="chapter-item expanded "><a href="lifetimes.html"><strong aria-hidden="true">3.3.</strong> Lifetimes</a></li><li class="chapter-item expanded "><a href="lifetime-mismatch.html"><strong aria-hidden="true">3.4.</strong> Limits of Lifetimes</a></li><li class="chapter-item expanded "><a href="lifetime-elision.html"><strong aria-hidden="true">3.5.</strong> Lifetime Elision</a></li><li class="chapter-item expanded "><a href="unbounded-lifetimes.html"><strong aria-hidden="true">3.6.</strong> Unbounded Lifetimes</a></li><li class="chapter-item expanded "><a href="hrtb.html"><strong aria-hidden="true">3.7.</strong> Higher-Rank Trait Bounds</a></li><li class="chapter-item expanded "><a href="subtyping.html"><strong aria-hidden="true">3.8.</strong> Subtyping and Variance</a></li><li class="chapter-item expanded "><a href="dropck.html"><strong aria-hidden="true">3.9.</strong> Drop Check</a></li><li class="chapter-item expanded "><a href="phantom-data.html"><strong aria-hidden="true">3.10.</strong> PhantomData</a></li><li class="chapter-item expanded "><a href="borrow-splitting.html"><strong aria-hidden="true">3.11.</strong> Splitting Borrows</a></li></ol></li><li class="chapter-item expanded "><a href="conversions.html"><strong aria-hidden="true">4.</strong> Type Conversions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="coercions.html"><strong aria-hidden="true">4.1.</strong> Coercions</a></li><li class="chapter-item expanded "><a href="dot-operator.html"><strong aria-hidden="true">4.2.</strong> The Dot Operator</a></li><li class="chapter-item expanded "><a href="casts.html"><strong aria-hidden="true">4.3.</strong> Casts</a></li><li class="chapter-item expanded "><a href="transmutes.html"><strong aria-hidden="true">4.4.</strong> Transmutes</a></li></ol></li><li class="chapter-item expanded "><a href="uninitialized.html"><strong aria-hidden="true">5.</strong> Uninitialized Memory</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="checked-uninit.html"><strong aria-hidden="true">5.1.</strong> Checked</a></li><li class="chapter-item expanded "><a href="drop-flags.html"><strong aria-hidden="true">5.2.</strong> Drop Flags</a></li><li class="chapter-item expanded "><a href="unchecked-uninit.html"><strong aria-hidden="true">5.3.</strong> Unchecked</a></li></ol></li><li class="chapter-item expanded "><a href="obrm.html"><strong aria-hidden="true">6.</strong> Ownership Based Resource Management</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="constructors.html"><strong aria-hidden="true">6.1.</strong> Constructors</a></li><li class="chapter-item expanded "><a href="destructors.html"><strong aria-hidden="true">6.2.</strong> Destructors</a></li><li class="chapter-item expanded "><a href="leaking.html"><strong aria-hidden="true">6.3.</strong> Leaking</a></li></ol></li><li class="chapter-item expanded "><a href="unwinding.html"><strong aria-hidden="true">7.</strong> Unwinding</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="exception-safety.html"><strong aria-hidden="true">7.1.</strong> Exception Safety</a></li><li class="chapter-item expanded "><a href="poisoning.html"><strong aria-hidden="true">7.2.</strong> Poisoning</a></li></ol></li><li class="chapter-item expanded "><a href="concurrency.html"><strong aria-hidden="true">8.</strong> Concurrency</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="races.html"><strong aria-hidden="true">8.1.</strong> Races</a></li><li class="chapter-item expanded "><a href="send-and-sync.html"><strong aria-hidden="true">8.2.</strong> Send and Sync</a></li><li class="chapter-item expanded "><a href="atomics.html"><strong aria-hidden="true">8.3.</strong> Atomics</a></li></ol></li><li class="chapter-item expanded "><a href="vec/vec.html"><strong aria-hidden="true">9.</strong> Implementing Vec</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="vec/vec-layout.html"><strong aria-hidden="true">9.1.</strong> Layout</a></li><li class="chapter-item expanded "><a href="vec/vec-alloc.html"><strong aria-hidden="true">9.2.</strong> Allocating</a></li><li class="chapter-item expanded "><a href="vec/vec-push-pop.html"><strong aria-hidden="true">9.3.</strong> Push and Pop</a></li><li class="chapter-item expanded "><a href="vec/vec-dealloc.html"><strong aria-hidden="true">9.4.</strong> Deallocating</a></li><li class="chapter-item expanded "><a href="vec/vec-deref.html"><strong aria-hidden="true">9.5.</strong> Deref</a></li><li class="chapter-item expanded "><a href="vec/vec-insert-remove.html"><strong aria-hidden="true">9.6.</strong> Insert and Remove</a></li><li class="chapter-item expanded "><a href="vec/vec-into-iter.html"><strong aria-hidden="true">9.7.</strong> IntoIter</a></li><li class="chapter-item expanded "><a href="vec/vec-raw.html"><strong aria-hidden="true">9.8.</strong> RawVec</a></li><li class="chapter-item expanded "><a href="vec/vec-drain.html"><strong aria-hidden="true">9.9.</strong> Drain</a></li><li class="chapter-item expanded "><a href="vec/vec-zsts.html"><strong aria-hidden="true">9.10.</strong> Handling Zero-Sized Types</a></li><li class="chapter-item expanded "><a href="vec/vec-final.html"><strong aria-hidden="true">9.11.</strong> Final Code</a></li></ol></li><li class="chapter-item expanded "><a href="arc-mutex/arc-and-mutex.html"><strong aria-hidden="true">10.</strong> Implementing Arc and Mutex</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="arc-mutex/arc.html"><strong aria-hidden="true">10.1.</strong> Arc</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="arc-mutex/arc-layout.html"><strong aria-hidden="true">10.1.1.</strong> Layout</a></li><li class="chapter-item expanded "><a href="arc-mutex/arc-base.html"><strong aria-hidden="true">10.1.2.</strong> Base Code</a></li><li class="chapter-item expanded "><a href="arc-mutex/arc-clone.html"><strong aria-hidden="true">10.1.3.</strong> Cloning</a></li><li class="chapter-item expanded "><a href="arc-mutex/arc-drop.html"><strong aria-hidden="true">10.1.4.</strong> Dropping</a></li><li class="chapter-item expanded "><a href="arc-mutex/arc-final.html"><strong aria-hidden="true">10.1.5.</strong> Final Code</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="ffi.html"><strong aria-hidden="true">11.</strong> FFI</a></li><li class="chapter-item expanded "><a href="beneath-std.html"><strong aria-hidden="true">12.</strong> Beneath std</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="panic-handler.html"><strong aria-hidden="true">12.1.</strong> #[panic_handler]</a></li></ol></li></ol>';
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
