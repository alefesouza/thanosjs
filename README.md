# Thanos JS

> Thanos JS reduces the file size of your project down to 50%, by randomly deleting half of the files.

This project is a Node.js implementation of [Thanos JS](https://thanosjs.org/) website, I've created it after realize that the idea is just a parody with Ruby Gems packages and not a real project, and maybe the project can be useful for someone.

To use it just install it globally with the Infinity Gems NPM packages.

    $ npm install -g reality
    $ npm install -g mind
    $ npm install -g space
    $ npm install -g time
    $ npm install -g soul
    $ npm install -g thanos-glove

After it, you can run:

    thanos snap-fingers --with-glove

To randomly delete 50% of the files on the current directory and its subdirectories.

    $ thanos --help

    Thanos JS reduces the file size of your project down to 50%, by randomly deleting half of the files.

    Usage
    After install globally the reality, mind, space, time and soul packages from npm, just run:

        $ thanos snap-fingers

    Options

        --with-glove You need the glove to delete the files.
        --path, -p The path to randomly delete including its subdirectories, otherwise will run on current directory.
        --force, -f Skip the process and remove the files without installing the Infinity Gems packages.
        --no-ask, -y Run it without confirmation (use it with caution, I'm responsible for anything).

    Examples

        $ thanos snap-fingers --with-glove
        $ thanos snap-fingers --with-glove -f --path "/path/to/delete"

## Credits

- [Thanos JS website](https://thanosjs.org/) - for the idea but with a Ruby implementation.
- [Alefe Souza](https://alefesouza.com) - creator of this package.

## FAQ

### Why no need to install the power package?

I got an error when I installed the power package globally, since it's not possible to install it globally with this error, I preferred to remove it from this package.

### Why the name of the package is not thanos or thanosjs?

When I developed this package I didn't notice that there was another package names "thanos-js", so npm didn't allow me to upload as "thanosjs".
