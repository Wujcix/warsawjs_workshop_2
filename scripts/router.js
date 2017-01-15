/**
 * Created by Użytkownik on 2017-01-15.
 */

(function(root){
    'use strict';
    class Router {
        constructor(){
            console.log('BOOMrooout');
            this.router = new root.Routy.Router();
            this.setupRoutes();
            this.router.run();


            console.log(this.router);

        }

        setupRoutes (){
            this.router
                .add('/posts', function(){
                    $(document).trigger('router:home');
                })
                .add('/posts/:id', function(){
                    $(document).trigger('router:post');
                })

                .otherwise('/posts')
        }

    }
    root.Blog.Router=Router;


}(window));