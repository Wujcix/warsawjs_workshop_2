/**
 * Created by Użytkownik on 2017-01-15.
 */

(function(root){
    'use strict';
    class AddPostFromView {
        constructor(){
            console.log('new views');
            this.template = $('#template-add-post').html();
            /*console.log(this.template);*/
            this.render();
            this.$form=$('#add-post-form');
            this.setupListeners();
        }

        render(){
            let $container = $('#view-container');
            let templateCompiled = root.Handlebars.compile(this.template);
            /*console.log($container);*/
            $container.append(templateCompiled);
        }

        setupListeners(){
            this.$form.submit((event) => this.submitFormHandler(event))
        }

        submitFormHandler(event){
            event.preventDefault();
            console.log('click');
        }
    }
    root.Blog.AddPostFromView = AddPostFromView;

}(window));