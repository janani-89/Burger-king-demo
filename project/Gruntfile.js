module.exports = function(grunt){
grunt.initConfig({
	cssmin:{
		css:{
			src:['css/styles.css'],
			dest:'css/styles.min.css',
		},
	},
	
});
grunt.loadNpmTasks('grunt-contrib-cssmin');


};