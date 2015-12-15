//Стандартный экспорт модуля в nodejs
module.exports = function(grunt) {

    var jsFiles =
        [
            "js/*.js"
        ];

    // Инициализация конфига GruntJS
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        concat: {
            js: {
                src: jsFiles,
                dest: 'js/main.js'
            }
        },

        uglify: {
            compile: {
                src: "js/main.js",
                dest: "js/main.min.js"
            }
        },

        watch: {
            options: {
                spawn: false
            },
            js: {
                files: jsFiles,
                tasks: ['concat:js']
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'watch']);
    grunt.registerTask('prod', ['concat', 'uglify']);
};