# Installation

### Prebuilt Binary Installation

You can install Forager with the provided binaries available on the [releases](https://github.com/CRBroughton/Forager/releases) page on [Github](https://github.com/CRBroughton/Forager/).

This binary file provides both the back-end and front-end of the application.

To run Forager, simply unzip and execute the included binary as per usual for your
operating system. For example, with Linux:

`./forager-2.0.0-linux`

Ideally, you should move this binary to your $PATH location,
so your operating system picks up the binary by default.

### Docker

The Forager repository includes a `docker-compose.yml` file, enabling quick deployment of Forager. Simply install Docker, clone the repository and then run `docker compose up -d`. Forager will
now be running at http://0.0.0.0:8090.

Forager will attempt to mount a local volume to `./forager`;
If this is not desirable, feel free to change the volumes
mounting point in the `docker-compose.yml` file to somewhere else.


