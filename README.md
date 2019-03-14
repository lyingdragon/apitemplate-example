It’s an example of API document templates to merge source code or text files into a single output file.

This example assumes that there are two types of API documents: one is C++ library API description written in source files, the other is REST API specification.

To generate an integrated document from two different source, I extracted the descriptions from each source, and then put them into [handlebars](https://handlebarsjs.com/) templates to make a similar view. In this case, I chose Markdown as it's widely used and able to be converted into various file formats such as HTML or MS Word.

For C++ souce code extraction, I used [Doxygen](http://www.doxygen.org/) and [Moxygen](https://github.com/sourcey/moxygen). See README of Moxygen when you wanna test it.

For REST APIs, I defined an [OAS](https://www.openapis.org/)-simiar YAML format to describe and wrote a simple code to convert it into Markdown.

To test the YAML-based format, do:
```
node run.js source/index.yaml source/restapi.yaml source/restapi-2.yaml -t template/yaml-markdown.hbs.md
```

`index.yaml` includes an overview of the example APIs. Data in this file will be handled as root object, those in other YAMLs will be appended into `paths` property.

In addition, I wrote a code and template for OAS 3.0 YAML-to-Markdown conversion for better understanding it. To test it do:
```
node oas3.02markdown.js source/petstore.yaml -t template/oas3.0/oas-3.hbs
```

Note that this repository is only for an example to show my API template solution that are introduced in the other website. Here is no details for the solution.
