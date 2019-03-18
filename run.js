var handlebars = require("handlebars");
var yaml = require("js-yaml");
var fs = require("fs");
var partialsDir = __dirname + "/template/partials";
var filenames = fs.readdirSync(partialsDir);

function init() {
  filenames.forEach(function(filename) {
    var matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
      return;
    }
    var name = matches[1];
    var template = fs.readFileSync(partialsDir + "/" + filename, "utf8");
    handlebars.registerPartial(name, template);
  });

  handlebars.registerPartial("myPartial", "{{name}}");

  handlebars.registerHelper("toUpperCase", function(str) {
    return str.toUpperCase();
  });

  handlebars.registerHelper("escapeBraces", function(str) {
    return str.replace(/([\{\}])/g, '\\$1')
  });

  handlebars.registerHelper("toId", function(str1, str2, str3) {
    str1 = toLowercaseWithAscii(str1);
    if( typeof str2 === "string") {
      str1 = str1 + "-" + toLowercaseWithAscii(str2);
    }
    if( typeof str3 === "string" ) {
      str1 = str1 + "-" + toLowercaseWithAscii(str3);
    }
    return str1;
  });

  handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
}

function toLowercaseWithAscii(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
var argv = require("minimist")(process.argv.slice(2));

if (argv.t === undefined) {
  console.log("No template specified");
  console.log(
    "Usage: node " +
      process.argv[1] +
      " -t {handlebars template} -d {output dir} {data files}"
  );
  process.exit(1);
}

if (argv._.length == 0) {
  console.log("No target data files");
  console.log(
    "Usage: node " +
      process.argv[1] +
      " -t {handlebars template} -d {output dir} {data files}"
  );
  process.exit(1);
}

if (argv.d === undefined) {
  argv.d = ".";
}

init();

var source = "";
fs.readFile(argv.t, function(err, data) {
  if (err) throw err;
  source = data.toString();

  var doc = {};
  var apis = [];
  for (var filename of argv._) {
    var template = handlebars.compile(source);
    var one = yaml.safeLoad(fs.readFileSync(filename, "utf8"));
    if (filename.indexOf("index") >= 0)
      doc = one;
    else
      apis.push(one);
  }
  doc = Object.assign({"apis": apis}, doc);

  var result = template(doc);

  output = filename.split('/');
  output = argv.d + "/" +output[output.length-1].replace(/yaml$/, "") + "md"
  fs.writeFile(
     output,
      result,
      function(err) {
        if (err) {
          return console.log(err);
        }
        console.log(
          output + " was saved!"
        );
      }
    );
});
