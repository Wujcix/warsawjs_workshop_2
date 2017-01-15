/**
 * Created by Użytkownik on 2017-01-15.
 */
(function(root){
    'use strict';
    let Router = root.Blog.Router;
    let AddPostFromView = root.Blog.AddPostFromView;
    class Application{
        constructor(){

            this.setupListeners();
            new Router();
            console.log('BOOM');

        }
        setupListeners(){
            $(document).on('router:home', (event) => this.onRouterHomeHandler());
            $(document).on('router:post', (event) => this.onRouterPostHandler());
        }


        clearDOMContainer(){
            $('#view-container').empty();
        }

        onRouterHomeHandler(){
            this.clearDOMContainer();
            new AddPostFromView();

        }

        onRouterPostHandler(){
            this.clearDOMContainer();
            $('#view-container').html('<h1>post</h1>');
        }


    }
    new Application();

}(window));