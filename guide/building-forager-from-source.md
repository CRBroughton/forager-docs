# Building Forager from source

## Requirements

To build Forager from source, you will require the following:

- node 18.16.0
- npm 9.5.1
- pnpm 8.10.0
- go 1.20
- [taskfile](https://taskfile.dev/) - Automates the build process

With the above installed, you are now ready to build Forager.

## Building Forager


```bash
# Clone the Forager repository
git clone https://github.com/CRBroughton/Forager forager
# Move into the Forager folder, install front-end dependencies
cd forager && pnpm i
# Move temporarily into the back-end folder, install dependencies
cd db && go mod download && cd ..
```
WIth the above complete, you should now have all of the
dependencies required to build from source.

Forager can be built using [taskfile](https://taskfile.dev/);
The Forager repository includes a convienient taskfile, which
automates the process:

```bash
# Builds the Forager binary for various OS architectures
task build
# Build the Forager binary only for linux 64 bit
task linux64
```

The support architectures are `linux32`, `linux64`, `windows64`,
 `apple`, and `applesilicon`.

Once a binary is built, you can find it in the `build` folder,
zipped up with the version number and architecture as part of the
filename.