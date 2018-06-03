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
            ,{path: '/perfil_spring', name: 'perfil_spring', component: SpringTemplate}
            ,{path: '/perfil_Anne', name: 'perfil_Anne', component: AnneTemplate}
            ,{path: '/perfil_Dracma', name: 'perfil_Dracma', component: DracmaTemplate}
            ,{path: '/perfil_Evolve', name: 'perfil_Evolve', component: EvolveTemplate}
            ,{path: '/perfil_Bernat', name: 'perfil_Bernat', component: BernatTemplate}
            ,{path: '/perfil_Mark', name: 'perfil_Mark', component: MarkTemplate}
            ,{path: '/perfil_Mkmedia', name: 'perfil_Mkmedia', component: MkmediaTemplate}
            ,{path: '/perfil_Martha', name: 'perfil_Martha', component: MarthaTemplate}
            ,{path: '/perfil_Woman', name: 'perfil_Woman', component: WomanTemplate}
        
            ,{path: '/detalle_cafe', name: 'detalle_cafe', component: CafeTemplate}
            ,{path: '/detalle_dungeon', name: 'detalle_dungeon', component: DungeonTemplate}
            ,{path: '/detalle_lonely', name: 'detalle_lonely', component: LonelyTemplate}
            ,{path: '/detalle_show', name: 'detalle_show', component: ShowTemplate}
            ,{path: '/detalle_thanos', name: 'detalle_thanos', component: ThanosTemplate}
        
            ,{path: '/detalle_Animated', name: 'detalle_Animated', component: AnimatedTemplate}
            ,{path: '/detalle_Cook', name: 'detalle_Cook', component: CookTemplate}
            ,{path: '/detalle_Creation', name: 'detalle_Creation', component: CreationTemplate}
            ,{path: '/detalle_Ice', name: 'detalle_Ice', component: IceTemplate}
            ,{path: '/detalle_Starbucks', name: 'detalle_Starbucks', component: StarbucksTemplate}
        
            ,{path: '/detalle_proyecto_Du', name: 'detalle_proyecto_Du', component: DuTemplate}
            ,{path: '/detalle_proyecto_pink', name: 'detalle_proyecto_pink', component: PinkTemplate}
            ,{path: '/detalle_proyecto_Renegades', name: 'detalle_proyecto_Renegades', component: RenegadesTemplate}
        
    
            ,{path: '/settings', name: 'settings',  component: SettingsTemplate}
            ,{path: '/buscador', name: 'buscador', component: BuscadorTemplate}
            ,{path: '/cerrarsesion', name: 'cerrarsesion', component: CerrarTemplate}
            ,{path: '/seguidor', name: 'seguidor', component: seguidorTemplate}
            ,{path: '/seguido', name: 'seguido', component: seguidoTemplate}
            ,{path: '/detalleProyecto', name: 'detalleProyecto', component: detalleProyectoTemplate}
        
        
        
        
        ,{path: '/seguidor_anne', name: 'seguidor_anne', component: seguidor_anneTemplate}
		,{path: '/seguidor_arnau', name: 'seguidor_arnau', component: seguidor_arnauTemplate}
		,{path: '/seguidor_bernat', name: 'seguidor_bernat', component: seguidor_bernatTemplate}
		,{path: '/seguidor_mark', name: 'seguidor_mark', component: seguidor_markTemplate}
		,{path: '/seguidor_martha', name: 'seguidor_martha', component: seguidor_marthaTemplate}
		
		
           
		,{path: '/seguido_anne', name: 'seguido_anne', component: seguido_anneTemplate}
		,{path: '/seguido_arnau', name: 'seguido_arnau', component: seguido_arnauTemplate}
		,{path: '/seguido_bernat', name: 'seguido_bernat', component: seguido_bernatTemplate}
		,{path: '/seguido_mark', name: 'seguido_mark', component: seguido_markTemplate}
		,{path: '/seguido_martha', name: 'seguido_martha', component: seguido_marthaTemplate}

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

        

