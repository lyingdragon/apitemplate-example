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

  handlebars.registerHelper("addId", function(str) {
    return "{#" + str + "}";
  });

  handlebars.registerHelper("parseComponent", function(name, root) {
    result = findComponent(name, root);
    result.name = ref_path[ref_path.length - 1];
    root._ref_components.push(result);
  });

  handlebars.registerHelper("getComponent", function(name, root) {
    return findComponent(name, root);
  });

  handlebars.registerHelper("getComponentString", function(name, root) {
    return JSON.stringify(findComponent(name, root), null, 3);
  });

  handlebars.registerHelper("clearRefComponents", function(root) {
    root._ref_components = [];
  });

  handlebars.registerHelper("setCurrentPath", function(path, method, root) {
    root._current_path = path.replace(/[\/{}]/g, "-") + "-" + method;
  });

  handlebars.registerHelper("toJSON", function(obj) {
    return JSON.stringify(obj, null, 3);
  });
}

function setVariable(varName, varValue, options) {
  options.data.root[varName] = varValue;
}

function findComponent(str, root) {
  var result = root;
  if (str.indexOf("#/") == 0) {
    ref_path = str.replace("#/", "").split("/");

    for (var path of ref_path) {
      result = result[path];
    }
  } else result = {};
  return result;
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

  for (var filename of argv._) {
    var template = handlebars.compile(source);
    var doc = yaml.safeLoad(fs.readFileSync(filename, "utf8"));
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
  }
});
