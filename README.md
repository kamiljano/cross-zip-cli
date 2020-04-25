# About

A small cross-platform CLI tool allowing to zip a file or directory.
The tool is based on the module [cross-zip](https://www.npmjs.com/package/cross-zip).

# Usage

For quick info you can quickly type `zip-all-cli --help`. This will print out all the parameters that you
might be interested in.

```
Usage: index [options]

Options:
  -V, --version                                    output the version number
  -p, --path <path to input file or directory>     Input file or directory path
  -o, --output <path to zip that will be created>  Path to the output directory
  -h, --help                                       display help for command
```

Note that if the output path specifies a directory that does not exist, it will be automatically created.