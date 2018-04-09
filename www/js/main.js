    Vue.use(VueMaterial.default);
    Vue.use(VueRouter);

//    Vue.material.registerTheme('about', {
//          primary: {
//            color: 'indigo',
//            hue: 'A200'
//          },
//          accent: {
//            color: 'grey',
//            hue: 300
//          }
//        });

//Vue.material.setCurrentTheme('about');


function init(){
    
    
    const routes = [
            {path: '/perfil', name: 'perfil', component: PerfilTemplate}
            ,{path: '/settings', name: 'settings',  component: SettingsTemplate}
            ,{path: '/buscador', name: 'buscador', component: BuscadorTemplate}
            ,{path: '/cerrarsesion', name: 'cerrarsesion', component: CerrarTemplate}

            ];

        const router = new VueRouter({
                routes // short for `routes: routes`
            });

    const app = new Vue({
        el: '#app',
        router,
        data: { showNavigation: false,
                showSidepanel: false,
              message: 'Hola!'},
        methods: {
            goToPerfil: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('perfil');
                },
            goToSettings: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push({ name: 'settings'})
                },
            goToBuscador: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('buscador');
                },
            
            goToCerrarsesion: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('cerrarsesion');
                }, 
            
 

        }
            
      }).$mount('#app');
    
    //router.push('settings');
    router.push({ name: 'settings'})
}

        

