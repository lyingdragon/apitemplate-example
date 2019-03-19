# What is this?
This is an example of API document templates to merge source code or text files into a single output file.

The example includes two types of API documents: one is C++ library API description written in source files, the other is a REST API specification. The goal is to merge them into a single document to acheive seamless user experience on referring APIs.

To generate an integrated document from two different sources, I extracted the API description data from each source, and then put them into [handlebars](https://handlebarsjs.com/) templates to make the identical style of outputs. In this example, I chose Markdown as a intermediate output format because it’s widely used and able to be converted into various file formats such as HTML or MS Word.

For C++ souce code extraction, I used [Doxygen](http://www.doxygen.org/) and [Moxygen](https://github.com/sourcey/moxygen). The source code will be converted into Doxygen XML first and then printed in Markdown by using Moxygen. See Moxygen's README if you wanna test.

For REST APIs, I defined an [OAS](https://www.openapis.org/)-like YAML format to describe APIs, and wrote a simple code to convert it into Markdown.

The following table shows what kinds of source files included and how to convert them into the intermediate files.

Source | Description | Conversion tools
---|---|---
[source/MyFantasticClass.h](source/MyFantasticClass.h) | C++ source code with API descriptions written in Javadoc | Doxygen, [Moxygen](moxygen)
[source/index.yaml](source/index.yaml), [source/restapi-1.yaml](source/restapi-1.yaml), [source/restapi-2.yaml](source/restapi-2.yaml) | REST API descriptions | [run.js](run.js)

## C++ API description to markdown conversion

Let's assume that we have Doxygen installed, run the following commands:

```bash
# run MyFantasticClass.h on doxygen to generate XMLs

# download Moxygen
cd moxygen
git pull origin master
npm install

# convert
node bin/moxygen.js --anchors --classes --output api-%s.md {your Doxygen xml directory}
```

Then, you can get a file such as [api-mine::MyFantasticClass.md](output/api-mine::MyFantasticClass.m).

## YAML API specs to Markdown conversion
To convert the YAML files into Markdown, run the following commands:

```bash
node run.js source/index.yaml source/restapi.yaml source/restapi-2.yaml -t template/yaml-markdown.hbs.md
```

`index.yaml` includes an overview and commonly used objects of the example APIs. Data in this file will be handled as root object, those in other YAMLs will be appended into `paths` property under the root.

After running the above code, you can get a file like [restapi-2.md](output/restapi-2.md) that includes all data of three files.

For your better understand, I wrote an OAS 3.0 YAML-to-Markdown conversion script and a template. You can run the following commands:

```bash
node oas3.02markdown.js source/petstore.yaml -t template/oas3.0/oas-3.hbs
```

`petstore.yaml` is an OAS 3.0 example, there's no relations to my own REST API example here.

## Integrated API doc generation

There're plenty of tools and method to merge multiple Markdown files into a single HTML. It's up to your preferation. I used [Pandoc](https://pandoc.org/) and [an opened HTML template](https://github.com/tonyblundell/pandoc-bootstrap-template) with minor modifications.

To make a single HTML file from those Markdown files we created before, run as follows:

```bash
pandoc -f markdown -t html -o output/example.html output/api-mine::MyFantasticClass.md output/restapi-2.md --template {your HTML template} --css template/template.css --self-contained --toc --toc-depth 2
```

See [output/example.html](output/example.html).

Also, Pandoc enables us to generate a qualified PDF file. Run as follows:

```bash
pandoc -f markdown -t latex -o output/example.pdf --pdf-engine=xelatex output/api-mine::MyFantasticClass.md output/restapi-2.md --template {your LaTeX template} --self-contained --toc --toc-depth 2
```

[Output/example.pdf](output/example.pdf) is the result output.

> Note that this repository only have an example to show my API reference template solution that are introduced in my blog. Here is no details for the solution.
