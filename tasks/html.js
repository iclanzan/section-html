/*
 * grunt-section
 * https://github.com/iclanzan/grunt-section
 *
 * Copyright (c) 2013 Sorin Iclanzan
 * Licensed under the MIT license.
 */

'use strict';

var cheerio = require('cheerio');

module.exports = function (grunt) {

  // Aliases
  var evt = grunt.event;
  var readFile = grunt.file.read;
  var processTemplate = grunt.template.process;

  var template;
  evt.on(['section', 'init'], function (opts) {
    if (!opts.template) {
      return;
    }

    template = readFile(opts.template);
    opts.pagePrototype.include = readFile;
  });

  evt.on(['section', 'render'], function process(page) {
    var $ = cheerio.load(processTemplate(template, {data: page}), {ignoreWhitespace: true});
    evt.emit(['section', 'render', 'html'], $, page);
    page.body = $.html();
  });
};
