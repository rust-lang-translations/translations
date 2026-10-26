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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-started/index.html"><strong aria-hidden="true">1.</strong> Getting Started</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-started/installation.html"><strong aria-hidden="true">1.1.</strong> Installation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-started/first-steps.html"><strong aria-hidden="true">1.2.</strong> First Steps with Cargo</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/index.html"><strong aria-hidden="true">2.</strong> Cargo Guide</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/why-cargo-exists.html"><strong aria-hidden="true">2.1.</strong> Why Cargo Exists</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/creating-a-new-project.html"><strong aria-hidden="true">2.2.</strong> Creating a New Package</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/working-on-an-existing-project.html"><strong aria-hidden="true">2.3.</strong> Working on an Existing Package</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/dependencies.html"><strong aria-hidden="true">2.4.</strong> Dependencies</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/project-layout.html"><strong aria-hidden="true">2.5.</strong> Package Layout</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/cargo-toml-vs-cargo-lock.html"><strong aria-hidden="true">2.6.</strong> Cargo.toml vs Cargo.lock</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/tests.html"><strong aria-hidden="true">2.7.</strong> Tests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/continuous-integration.html"><strong aria-hidden="true">2.8.</strong> Continuous Integration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/publishing.html"><strong aria-hidden="true">2.9.</strong> Publishing on crates.io</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/cargo-home.html"><strong aria-hidden="true">2.10.</strong> Cargo Home</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="guide/build-performance.html"><strong aria-hidden="true">2.11.</strong> Optimizing Build Performance</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/index.html"><strong aria-hidden="true">3.</strong> Cargo Reference</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/manifest.html"><strong aria-hidden="true">3.1.</strong> The Manifest Format</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/cargo-targets.html"><strong aria-hidden="true">3.1.1.</strong> Cargo Targets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/rust-version.html"><strong aria-hidden="true">3.1.2.</strong> Rust version</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/workspaces.html"><strong aria-hidden="true">3.2.</strong> Workspaces</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/specifying-dependencies.html"><strong aria-hidden="true">3.3.</strong> Specifying Dependencies</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/overriding-dependencies.html"><strong aria-hidden="true">3.3.1.</strong> Overriding Dependencies</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/source-replacement.html"><strong aria-hidden="true">3.3.2.</strong> Source Replacement</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/resolver.html"><strong aria-hidden="true">3.3.3.</strong> Dependency Resolution</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/features.html"><strong aria-hidden="true">3.4.</strong> Features</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/features-examples.html"><strong aria-hidden="true">3.4.1.</strong> Features Examples</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/profiles.html"><strong aria-hidden="true">3.5.</strong> Profiles</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/config.html"><strong aria-hidden="true">3.6.</strong> Configuration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/environment-variables.html"><strong aria-hidden="true">3.7.</strong> Environment Variables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/build-scripts.html"><strong aria-hidden="true">3.8.</strong> Build Scripts</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/build-script-examples.html"><strong aria-hidden="true">3.8.1.</strong> Build Script Examples</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/build-cache.html"><strong aria-hidden="true">3.9.</strong> Build Cache</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/pkgid-spec.html"><strong aria-hidden="true">3.10.</strong> Package ID Specifications</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/external-tools.html"><strong aria-hidden="true">3.11.</strong> External Tools</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/registries.html"><strong aria-hidden="true">3.12.</strong> Registries</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/registry-authentication.html"><strong aria-hidden="true">3.12.1.</strong> Registry Authentication</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/credential-provider-protocol.html"><strong aria-hidden="true">3.12.1.1.</strong> Credential Provider Protocol</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/running-a-registry.html"><strong aria-hidden="true">3.12.2.</strong> Running a Registry</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/registry-index.html"><strong aria-hidden="true">3.12.2.1.</strong> Registry Index</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/registry-web-api.html"><strong aria-hidden="true">3.12.2.2.</strong> Registry Web API</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/semver.html"><strong aria-hidden="true">3.13.</strong> SemVer Compatibility</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/future-incompat-report.html"><strong aria-hidden="true">3.14.</strong> Future incompat report</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/timings.html"><strong aria-hidden="true">3.15.</strong> Reporting build timings</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/lints.html"><strong aria-hidden="true">3.16.</strong> Lints</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/unstable.html"><strong aria-hidden="true">3.17.</strong> Unstable Features</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/index.html"><strong aria-hidden="true">4.</strong> Cargo Commands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/general-commands.html"><strong aria-hidden="true">4.1.</strong> General Commands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo.html"><strong aria-hidden="true">4.1.1.</strong> cargo</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-help.html"><strong aria-hidden="true">4.1.2.</strong> cargo help</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-version.html"><strong aria-hidden="true">4.1.3.</strong> cargo version</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/build-commands.html"><strong aria-hidden="true">4.2.</strong> Build Commands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-bench.html"><strong aria-hidden="true">4.2.1.</strong> cargo bench</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-build.html"><strong aria-hidden="true">4.2.2.</strong> cargo build</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-check.html"><strong aria-hidden="true">4.2.3.</strong> cargo check</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-clean.html"><strong aria-hidden="true">4.2.4.</strong> cargo clean</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-clippy.html"><strong aria-hidden="true">4.2.5.</strong> cargo clippy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-doc.html"><strong aria-hidden="true">4.2.6.</strong> cargo doc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-fetch.html"><strong aria-hidden="true">4.2.7.</strong> cargo fetch</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-fix.html"><strong aria-hidden="true">4.2.8.</strong> cargo fix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-fmt.html"><strong aria-hidden="true">4.2.9.</strong> cargo fmt</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-miri.html"><strong aria-hidden="true">4.2.10.</strong> cargo miri</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-run.html"><strong aria-hidden="true">4.2.11.</strong> cargo run</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-rustc.html"><strong aria-hidden="true">4.2.12.</strong> cargo rustc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-rustdoc.html"><strong aria-hidden="true">4.2.13.</strong> cargo rustdoc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-test.html"><strong aria-hidden="true">4.2.14.</strong> cargo test</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/manifest-commands.html"><strong aria-hidden="true">4.3.</strong> Manifest Commands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-add.html"><strong aria-hidden="true">4.3.1.</strong> cargo add</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-generate-lockfile.html"><strong aria-hidden="true">4.3.2.</strong> cargo generate-lockfile</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-info.html"><strong aria-hidden="true">4.3.3.</strong> cargo info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-locate-project.html"><strong aria-hidden="true">4.3.4.</strong> cargo locate-project</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-metadata.html"><strong aria-hidden="true">4.3.5.</strong> cargo metadata</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-pkgid.html"><strong aria-hidden="true">4.3.6.</strong> cargo pkgid</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-remove.html"><strong aria-hidden="true">4.3.7.</strong> cargo remove</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-tree.html"><strong aria-hidden="true">4.3.8.</strong> cargo tree</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-update.html"><strong aria-hidden="true">4.3.9.</strong> cargo update</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-vendor.html"><strong aria-hidden="true">4.3.10.</strong> cargo vendor</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/package-commands.html"><strong aria-hidden="true">4.4.</strong> Package Commands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-init.html"><strong aria-hidden="true">4.4.1.</strong> cargo init</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-install.html"><strong aria-hidden="true">4.4.2.</strong> cargo install</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-new.html"><strong aria-hidden="true">4.4.3.</strong> cargo new</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-search.html"><strong aria-hidden="true">4.4.4.</strong> cargo search</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-uninstall.html"><strong aria-hidden="true">4.4.5.</strong> cargo uninstall</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/publishing-commands.html"><strong aria-hidden="true">4.5.</strong> Publishing Commands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-login.html"><strong aria-hidden="true">4.5.1.</strong> cargo login</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-logout.html"><strong aria-hidden="true">4.5.2.</strong> cargo logout</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-owner.html"><strong aria-hidden="true">4.5.3.</strong> cargo owner</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-package.html"><strong aria-hidden="true">4.5.4.</strong> cargo package</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-publish.html"><strong aria-hidden="true">4.5.5.</strong> cargo publish</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-yank.html"><strong aria-hidden="true">4.5.6.</strong> cargo yank</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/report-commands.html"><strong aria-hidden="true">4.6.</strong> Report Commands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-report.html"><strong aria-hidden="true">4.6.1.</strong> cargo report</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/cargo-report-future-incompatibilities.html"><strong aria-hidden="true">4.6.2.</strong> cargo report future-incompatibilities</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="commands/deprecated-and-removed.html"><strong aria-hidden="true">4.7.</strong> Deprecated and Removed</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="faq.html"><strong aria-hidden="true">5.</strong> FAQ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CHANGELOG.html"><strong aria-hidden="true">6.</strong> Changelog</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/glossary.html"><strong aria-hidden="true">7.</strong> Appendix: Glossary</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/git-authentication.html"><strong aria-hidden="true">8.</strong> Appendix: Git Authentication</a></span></li></ol>';
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

