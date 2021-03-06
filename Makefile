.PHONY: check
check:
	RUSTFLAGS="-Dwarnings" cargo check --all-features --all-targets --benches --bins --examples --tests --workspace

.PHONY: clean
clean:
	cargo clean

.PHONY: clippy
clippy:
	cargo clippy --all-features --all-targets --benches --bins --examples --tests --workspace -- -D warnings

.PHONY: doc
doc:
	cargo +nightly doc --all-features --no-deps --package wasm-language-server

.PHONY: fmt
format:
	cargo +nightly fmt --all

.PHONY: install
install:
	cargo install --path . --offline

.PHONY: test
test:
	RUSTFLAGS="-Dwarnings" cargo test --all-features --all-targets --benches --bins --examples --tests --workspace
