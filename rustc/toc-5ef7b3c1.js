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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="what-is-rustc.html"><strong aria-hidden="true">1.</strong> What is rustc?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-line-arguments.html"><strong aria-hidden="true">2.</strong> Command-line Arguments</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-line-arguments/print-options.html"><strong aria-hidden="true">2.1.</strong> Print Options</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="codegen-options/index.html"><strong aria-hidden="true">2.2.</strong> Codegen Options</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="jobserver.html"><strong aria-hidden="true">3.</strong> Jobserver</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lints/index.html"><strong aria-hidden="true">4.</strong> Lints</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lints/levels.html"><strong aria-hidden="true">4.1.</strong> Lint Levels</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lints/groups.html"><strong aria-hidden="true">4.2.</strong> Lint Groups</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lints/listing/index.html"><strong aria-hidden="true">4.3.</strong> Lint Listing</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lints/listing/allowed-by-default.html"><strong aria-hidden="true">4.3.1.</strong> Allowed-by-default Lints</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lints/listing/warn-by-default.html"><strong aria-hidden="true">4.3.2.</strong> Warn-by-default Lints</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="lints/listing/deny-by-default.html"><strong aria-hidden="true">4.3.3.</strong> Deny-by-default Lints</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="json.html"><strong aria-hidden="true">5.</strong> JSON Output</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tests/index.html"><strong aria-hidden="true">6.</strong> Tests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="targets/index.html"><strong aria-hidden="true">7.</strong> Targets</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="targets/built-in.html"><strong aria-hidden="true">7.1.</strong> Built-in Targets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="targets/custom.html"><strong aria-hidden="true">7.2.</strong> Custom Targets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="targets/known-issues.html"><strong aria-hidden="true">7.3.</strong> Known Issues</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="profile-guided-optimization.html"><strong aria-hidden="true">8.</strong> Profile-guided Optimization</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="instrument-coverage.html"><strong aria-hidden="true">9.</strong> Instrumentation-based Code Coverage</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="linker-plugin-lto.html"><strong aria-hidden="true">10.</strong> Linker-plugin-based LTO</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="check-cfg.html"><strong aria-hidden="true">11.</strong> Checking Conditional Configurations</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="check-cfg/cargo-specifics.html"><strong aria-hidden="true">11.1.</strong> Cargo Specifics</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="remap-source-paths.html"><strong aria-hidden="true">12.</strong> Remap source paths</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="exploit-mitigations.html"><strong aria-hidden="true">13.</strong> Exploit Mitigations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="symbol-mangling/index.html"><strong aria-hidden="true">14.</strong> Symbol Mangling</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="symbol-mangling/v0.html"><strong aria-hidden="true">14.1.</strong> v0 Symbol Format</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="contributing.html"><strong aria-hidden="true">15.</strong> Contributing to rustc</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support.html"><strong aria-hidden="true">16.</strong> Platform Support</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="target-tier-policy.html"><strong aria-hidden="true">16.1.</strong> Target Tier Policy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/TEMPLATE.html"><strong aria-hidden="true">16.2.</strong> Template for Target-specific Documentation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/arm64ec-pc-windows-msvc.html"><strong aria-hidden="true">16.3.</strong> arm64ec-pc-windows-msvc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/apple-darwin.html"><strong aria-hidden="true">16.4.</strong> *-apple-darwin</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/i686-apple-darwin.html"><strong aria-hidden="true">16.4.1.</strong> i686-apple-darwin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/x86_64h-apple-darwin.html"><strong aria-hidden="true">16.4.2.</strong> x86_64h-apple-darwin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/arm64e-apple-darwin.html"><strong aria-hidden="true">16.4.3.</strong> arm64e-apple-darwin</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/apple-ios.html"><strong aria-hidden="true">16.5.</strong> *-apple-ios</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/apple-ios-macabi.html"><strong aria-hidden="true">16.5.1.</strong> *-apple-ios-macabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/arm64e-apple-ios.html"><strong aria-hidden="true">16.5.2.</strong> arm64e-apple-ios</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/apple-tvos.html"><strong aria-hidden="true">16.6.</strong> *-apple-tvos</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/arm64e-apple-tvos.html"><strong aria-hidden="true">16.6.1.</strong> arm64e-apple-tvos</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/apple-watchos.html"><strong aria-hidden="true">16.7.</strong> *-apple-watchos</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/apple-visionos.html"><strong aria-hidden="true">16.8.</strong> *-apple-visionos</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/aarch64-nintendo-switch-freestanding.html"><strong aria-hidden="true">16.9.</strong> aarch64-nintendo-switch-freestanding</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/aarch64-unknown-linux-gnu.html"><strong aria-hidden="true">16.10.</strong> aarch64-unknown-linux-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/aarch64-unknown-linux-musl.html"><strong aria-hidden="true">16.11.</strong> aarch64-unknown-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/aarch64-unknown-none.html"><strong aria-hidden="true">16.12.</strong> aarch64-unknown-none*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/aarch64v8r-unknown-none.html"><strong aria-hidden="true">16.13.</strong> aarch64v8r-unknown-none*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/aarch64_be-unknown-none-softfloat.html"><strong aria-hidden="true">16.14.</strong> aarch64_be-unknown-none-softfloat</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/aarch64_be-unknown-linux-musl.html"><strong aria-hidden="true">16.15.</strong> aarch64_be-unknown-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/amdgcn-amd-amdhsa.html"><strong aria-hidden="true">16.16.</strong> amdgcn-amd-amdhsa</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/arm-none-eabi.html"><strong aria-hidden="true">16.17.</strong> arm-none-eabi</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv4t-none-eabi.html"><strong aria-hidden="true">16.17.1.</strong> {arm,thumb}v4t-none-eabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv5te-none-eabi.html"><strong aria-hidden="true">16.17.2.</strong> {arm,thumb}v5te-none-eabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv6-none-eabi.html"><strong aria-hidden="true">16.17.3.</strong> {arm,thumb}v6-none-eabi{,hf}</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv7a-none-eabi.html"><strong aria-hidden="true">16.17.4.</strong> {arm,thumb}v7a-none-eabi{,hf}</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv7r-none-eabi.html"><strong aria-hidden="true">16.17.5.</strong> {arm,thumb}v7r-none-eabi{,hf}</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv8r-none-eabihf.html"><strong aria-hidden="true">16.17.6.</strong> {arm,thumb}v8r-none-eabihf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/thumbv6m-none-eabi.html"><strong aria-hidden="true">16.17.7.</strong> thumbv6m-none-eabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/thumbv7em-none-eabi.html"><strong aria-hidden="true">16.17.8.</strong> thumbv7em-none-eabi*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/thumbv7m-none-eabi.html"><strong aria-hidden="true">16.17.9.</strong> thumbv7m-none-eabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/thumbv8m.base-none-eabi.html"><strong aria-hidden="true">16.17.10.</strong> thumbv8m.base-none-eabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/thumbv8m.main-none-eabi.html"><strong aria-hidden="true">16.17.11.</strong> thumbv8m.main-none-eabi*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armebv7r-none-eabi.html"><strong aria-hidden="true">16.17.12.</strong> armebv7r-none-eabi{,hf}</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/arm-linux.html"><strong aria-hidden="true">16.18.</strong> arm*-unknown-linux-*</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armeb-unknown-linux-gnueabi.html"><strong aria-hidden="true">16.18.1.</strong> armeb-unknown-linux-gnueabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv5te-unknown-linux-gnueabi.html"><strong aria-hidden="true">16.18.2.</strong> armv5te-unknown-linux-gnueabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv7-unknown-linux-gnueabi.html"><strong aria-hidden="true">16.18.3.</strong> armv7-unknown-linux-gnueabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv7-unknown-linux-uclibceabi.html"><strong aria-hidden="true">16.18.4.</strong> armv7-unknown-linux-uclibceabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv7-unknown-linux-uclibceabihf.html"><strong aria-hidden="true">16.18.5.</strong> armv7-unknown-linux-uclibceabihf</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv6k-nintendo-3ds.html"><strong aria-hidden="true">16.19.</strong> armv6k-nintendo-3ds</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv7-rtems-eabihf.html"><strong aria-hidden="true">16.20.</strong> armv7-rtems-eabihf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv7-sony-vita-newlibeabihf.html"><strong aria-hidden="true">16.21.</strong> armv7-sony-vita-newlibeabihf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/armv7a-vex-v5.html"><strong aria-hidden="true">16.22.</strong> armv7a-vex-v5</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/android.html"><strong aria-hidden="true">16.23.</strong> *-android and *-androideabi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/openharmony.html"><strong aria-hidden="true">16.24.</strong> *-linux-ohos</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/hurd.html"><strong aria-hidden="true">16.25.</strong> *-hurd-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/aarch64-unknown-teeos.html"><strong aria-hidden="true">16.26.</strong> aarch64-unknown-teeos</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/avr-none.html"><strong aria-hidden="true">16.27.</strong> avr-none</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/esp-idf.html"><strong aria-hidden="true">16.28.</strong> *-espidf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/fuchsia.html"><strong aria-hidden="true">16.29.</strong> *-unknown-fuchsia</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/trusty.html"><strong aria-hidden="true">16.30.</strong> *-unknown-trusty</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/kmc-solid.html"><strong aria-hidden="true">16.31.</strong> *-kmc-solid_*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/csky-unknown-linux-gnuabiv2.html"><strong aria-hidden="true">16.32.</strong> csky-unknown-linux-gnuabiv2*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/hexagon-unknown-linux-musl.html"><strong aria-hidden="true">16.33.</strong> hexagon-unknown-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/hexagon-unknown-none-elf.html"><strong aria-hidden="true">16.34.</strong> hexagon-unknown-none-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/hexagon-unknown-qurt.html"><strong aria-hidden="true">16.35.</strong> hexagon-unknown-qurt</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/illumos.html"><strong aria-hidden="true">16.36.</strong> illumos</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/loongarch-linux.html"><strong aria-hidden="true">16.37.</strong> loongarch*-unknown-linux-*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/loongarch-none.html"><strong aria-hidden="true">16.38.</strong> loongarch*-unknown-none*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/lynxos178.html"><strong aria-hidden="true">16.39.</strong> *-lynxos178-*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/m68k-unknown-linux-gnu.html"><strong aria-hidden="true">16.40.</strong> m68k-unknown-linux-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/m68k-unknown-none-elf.html"><strong aria-hidden="true">16.41.</strong> m68k-unknown-none-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/mips64-openwrt-linux-musl.html"><strong aria-hidden="true">16.42.</strong> mips64-openwrt-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/mips64-unknown-linux-muslabi64.html"><strong aria-hidden="true">16.43.</strong> mips64-unknown-linux-muslabi64</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/mipsel-sony-psx.html"><strong aria-hidden="true">16.44.</strong> mipsel-sony-psx</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/mipsel-unknown-linux-gnu.html"><strong aria-hidden="true">16.45.</strong> mipsel-unknown-linux-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/mips-mti-none-elf.html"><strong aria-hidden="true">16.46.</strong> mips*-mti-none-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/mips-release-6.html"><strong aria-hidden="true">16.47.</strong> mipsisa*r6*-unknown-linux-gnu*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/nvptx64-nvidia-cuda.html"><strong aria-hidden="true">16.48.</strong> nvptx64-nvidia-cuda</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/powerpc-unknown-openbsd.html"><strong aria-hidden="true">16.49.</strong> powerpc-unknown-openbsd</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/powerpc-unknown-linux-gnuspe.html"><strong aria-hidden="true">16.50.</strong> powerpc-unknown-linux-gnuspe</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/powerpc-unknown-linux-muslspe.html"><strong aria-hidden="true">16.51.</strong> powerpc-unknown-linux-muslspe</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/aix.html"><strong aria-hidden="true">16.52.</strong> powerpc64-ibm-aix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/powerpc64-unknown-linux-musl.html"><strong aria-hidden="true">16.53.</strong> powerpc64-unknown-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/powerpc64le-unknown-linux-gnu.html"><strong aria-hidden="true">16.54.</strong> powerpc64le-unknown-linux-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/powerpc64le-unknown-linux-musl.html"><strong aria-hidden="true">16.55.</strong> powerpc64le-unknown-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/riscv32e-unknown-none-elf.html"><strong aria-hidden="true">16.56.</strong> riscv32e*-unknown-none-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/riscv32-unknown-none-elf.html"><strong aria-hidden="true">16.57.</strong> riscv32i*-unknown-none-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/riscv32im-risc0-zkvm-elf.html"><strong aria-hidden="true">16.58.</strong> riscv32im-risc0-zkvm-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/riscv32imac-unknown-xous-elf.html"><strong aria-hidden="true">16.59.</strong> riscv32imac-unknown-xous-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/riscv64im-unknown-none-elf.html"><strong aria-hidden="true">16.60.</strong> riscv64im-unknown-none-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/riscv64gc-unknown-linux-gnu.html"><strong aria-hidden="true">16.61.</strong> riscv64gc-unknown-linux-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/riscv64gc-unknown-linux-musl.html"><strong aria-hidden="true">16.62.</strong> riscv64gc-unknown-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/riscv64a23-unknown-linux-gnu.html"><strong aria-hidden="true">16.63.</strong> riscv64a23-unknown-linux-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/s390x-unknown-linux-gnu.html"><strong aria-hidden="true">16.64.</strong> s390x-unknown-linux-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/s390x-unknown-linux-musl.html"><strong aria-hidden="true">16.65.</strong> s390x-unknown-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/s390x-unknown-none-softfloat.html"><strong aria-hidden="true">16.66.</strong> s390x-unknown-none-softfloat</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/sparc-unknown-none-elf.html"><strong aria-hidden="true">16.67.</strong> sparc-unknown-none-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/solaris.html"><strong aria-hidden="true">16.68.</strong> solaris</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/nto-qnx.html"><strong aria-hidden="true">16.69.</strong> *-nto-qnx-*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/unikraft-linux-musl.html"><strong aria-hidden="true">16.70.</strong> *-unikraft-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/helenos.html"><strong aria-hidden="true">16.71.</strong> *-unknown-helenos</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/hermit.html"><strong aria-hidden="true">16.72.</strong> *-unknown-hermit</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/freebsd.html"><strong aria-hidden="true">16.73.</strong> *-unknown-freebsd</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/managarm.html"><strong aria-hidden="true">16.74.</strong> *-unknown-managarm-mlibc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/motor.html"><strong aria-hidden="true">16.75.</strong> *-unknown-motor</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/netbsd.html"><strong aria-hidden="true">16.76.</strong> *-unknown-netbsd*</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/openbsd.html"><strong aria-hidden="true">16.77.</strong> *-unknown-openbsd</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/redox.html"><strong aria-hidden="true">16.78.</strong> *-unknown-redox</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/unknown-uefi.html"><strong aria-hidden="true">16.79.</strong> *-unknown-uefi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/windows-msvc.html"><strong aria-hidden="true">16.80.</strong> *-pc-windows-msvc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/uwp-windows-msvc.html"><strong aria-hidden="true">16.81.</strong> *-uwp-windows-msvc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/vxworks.html"><strong aria-hidden="true">16.82.</strong> *-wrs-vxworks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/wasm32-wasip1.html"><strong aria-hidden="true">16.83.</strong> wasm32-wasip1</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/wasm32-wasip1-threads.html"><strong aria-hidden="true">16.84.</strong> wasm32-wasip1-threads</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/wasm32-wasip2.html"><strong aria-hidden="true">16.85.</strong> wasm32-wasip2</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/wasm32-wasip3.html"><strong aria-hidden="true">16.86.</strong> wasm32-wasip3</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/wasm32-wali-linux.html"><strong aria-hidden="true">16.87.</strong> wasm32-wali-linux-musl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/wasm32-unknown-emscripten.html"><strong aria-hidden="true">16.88.</strong> wasm32-unknown-emscripten</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/wasm32-unknown-unknown.html"><strong aria-hidden="true">16.89.</strong> wasm32-unknown-unknown</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/wasm32v1-none.html"><strong aria-hidden="true">16.90.</strong> wasm32v1-none</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/wasm64-unknown-unknown.html"><strong aria-hidden="true">16.91.</strong> wasm64-unknown-unknown</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/windows-gnu.html"><strong aria-hidden="true">16.92.</strong> windows-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/windows-gnullvm.html"><strong aria-hidden="true">16.93.</strong> windows-gnullvm</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/win7-windows-gnu.html"><strong aria-hidden="true">16.94.</strong> *-win7-windows-gnu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/win7-windows-msvc.html"><strong aria-hidden="true">16.95.</strong> *-win7-windows-msvc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/x86_64-fortanix-unknown-sgx.html"><strong aria-hidden="true">16.96.</strong> x86_64-fortanix-unknown-sgx</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/x86_64-pc-cygwin.html"><strong aria-hidden="true">16.97.</strong> x86_64-pc-cygwin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/x86_64-unknown-linux-none.html"><strong aria-hidden="true">16.98.</strong> x86_64-unknown-linux-none</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/x86_64-unknown-none.html"><strong aria-hidden="true">16.99.</strong> x86_64-unknown-none</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/x86_64-unknown-linux-gnuasan.html"><strong aria-hidden="true">16.100.</strong> x86_64-unknown-linux-gnuasan</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/xtensa.html"><strong aria-hidden="true">16.101.</strong> xtensa-*-none-elf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="platform-support/nuttx.html"><strong aria-hidden="true">16.102.</strong> *-nuttx-*</a></span></li></ol></li></ol>';
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

