var listaJson = [
    
    {id_proyecto:"31", goTo:"goToDetalleSpringProf()", nombre_usuario: "Arnau Felip", imagen_usuario: "img/user/fotop1.jpg", nombre_proyecto: "Cook & Nelson", img1:"img/projects/12design01.jpg", img2:"img/projects/12design02.jpg", img3:"img/projects/12design03.jpg"},
    {id_proyecto:"2", goTo:"goToDetalleSpringProf2()", nombre_usuario: "Spring Professional", imagen_usuario: "img/user/fotoe4.jpg", nombre_proyecto: " Café La Nacional ", img1:"img/projects/2design01.jpg", img2:"img/projects/2design02.jpg", img3:"img/projects/2design03.jpg"},
    {id_proyecto:"40", goTo:"goToDetalleSpringProf3()", nombre_usuario: "Anne Sper", imagen_usuario: "img/user/fotop4.jpg", nombre_proyecto: "Lenovo Yoga 920", img1:"img/projects/10video02.jpg", img2:"img/projects/10video03.jpg", img3:"img/projects/10video04.jpg"},
    {id_proyecto:"10", goTo:"goToDetalleSpringProf4()", nombre_usuario: "Dracma 3D", imagen_usuario: "img/user/fotoe5.jpg", nombre_proyecto: "Lonely Watcher", img1:"img/projects/13d02.jpg", img2:"img/projects/13d03.jpg", img3:"img/projects/13d04.jpg"},
    {id_proyecto:"11", goTo:"goToDetalleSpringProf5()", nombre_usuario: "Evolve Games", imagen_usuario: "img/user/fotoe6.jpg", nombre_proyecto: "Thanos", img1:"img/projects/23d02.jpg", img2:"img/projects/23d03.jpg", img3:"img/projects/23d04.jpg"},
    {id_proyecto:"44", goTo:"goToDetalleSpringProf6()", nombre_usuario: "Bernat Valls", imagen_usuario: "img/user/fotop5.jpg", nombre_proyecto: "Pink", img1:"img/projects/14video01.jpg", img2:"img/projects/14video02.jpg", img3:"img/projects/14video03.jpg"},
    {id_proyecto:"51", goTo:"goToDetalleSpringProf7()", nombre_usuario: "Mark Case", imagen_usuario: "img/user/fotop7.jpg", nombre_proyecto: "Renegades 3", img1:"img/projects/163d01.jpg", img2:"img/projects/163d02.jpg", img3:"img/projects/163d03.jpg"},
    {id_proyecto:"22", goTo:"goToDetalleSpringProf8()", nombre_usuario: "MK Media", imagen_usuario: "img/user/fotoe2.jpg", nombre_proyecto: " ShowReel ", img1:"img/projects/1video02.jpg", img2:"img/projects/1video03.jpg", img3:"img/projects/1video04.jpg"},
    {id_proyecto:"58", goTo:"goToDetalleSpringProf9()", nombre_usuario: "Martha Flat", imagen_usuario: "img/user/fotop10.jpg", nombre_proyecto: "Du Squad", img1:"img/projects/233d01.jpg", img2:"img/projects/233d02.jpg", img3:"img/projects/233d03.jpg"},
    {id_proyecto:"25", goTo:"goToDetalleSpringProf10()", nombre_usuario: "Woman vs. Machine", imagen_usuario: "img/user/fotoe7.jpg", nombre_proyecto: " Dungeon Hunter ", img1:"img/projects/4video02.jpg", img2:"img/projects/4video03.jpg", img3:"img/projects/4video04.jpg"},
   
];

const SettingsTemplate = {props: [], 
                          
     created: function(){
            this.proyectos = listaJson;
            
        },
        data: () => ({
                showNavigation: false,
                proyectos: [{id_proyecto:"", goTo:"", nombre_usuario: "", imagen_usuario: "", nombre_proyecto: "", img1:"", img2:"", img3:""}]
                            }),                
                        
                        
        methods: {
            
            
           goToPerfil: function(){                
                    this.$router.push('perfil');
                },
            
             goToPerfilSpring: function(){                
                    this.$router.push('perfil_spring');
                },
            
             goToPerfilAnne: function(){                
                    this.$router.push('perfil_Anne');
                },
            
             goToPerfilDracma: function(){                
                    this.$router.push('perfil_Dracma');
                },
            
              goToPerfilEvolve: function(){                
                    this.$router.push('perfil_Evolve');
                },
            
               goToPerfilBernat: function(){                
                    this.$router.push('perfil_Bernat');
                },
            
               goToPerfilMark: function(){                
                    this.$router.push('perfil_Mark');
                },
            
               goToPerfilMkmedia: function(){                
                    this.$router.push('perfil_Mkmedia');
                },
            
                goToPerfilMartha: function(){                
                    this.$router.push('perfil_Martha');
                },
            
               goToPerfilWoman: function(){                
                    this.$router.push('perfil_Woman');
                },
            
                goToCafe: function(){                
                    this.$router.push('detalle_cafe');
                },
            
                goToDungeon: function(){                
                    this.$router.push('detalle_dungeon');
                },
            
                goToLonely: function(){                
                    this.$router.push('detalle_lonely');
                },
            
                goToShow: function(){                
                    this.$router.push('detalle_show');
                },
            
                goToThanos: function(){                
                    this.$router.push('detalle_thanos');
                },
            
            
            
                goToAni: function(){                
                    this.$router.push('detalle_Animated');
                },
            
                goToCook: function(){                
                    this.$router.push('detalle_Cook');
                },
            
                goToCreation: function(){                
                    this.$router.push('detalle_Creation');
                },
            
                goToIce: function(){                
                    this.$router.push('detalle_Ice');
                },
            
                goToStarbucks: function(){                
                    this.$router.push('detalle_Starbucks');
                },
            
                goToDu: function(){                
                    this.$router.push('detalle_proyecto_Du');
                },
            
                goToPink: function(){                
                    this.$router.push('detalle_proyecto_pink');
                },
            
                goToRenegades: function(){                
                    this.$router.push('detalle_proyecto_Renegades');
                },
         
        },
        template:`


                 <div style="border-top: 1px solid #efefef;height: 100%; background-color: rgb(250, 250, 250); padding: 8px;">

                      <div style="border-bottom: 1px solid #f2f2f2; background-color:#fafafa;">

                                
                             <md-card style="margin-bottom: 12px;">
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotop1.jpg" alt="People" @click="goToPerfil()">
                                    </md-avatar>

                                    <div @click="goToCook()" class="md-title">Cook & Nelson</div>
                                    <div class="md-subhead">Arnau Felip</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)" >
                                         <div class="md-layout md-gutter">
                                            <div @click="goToCook()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/12design01.jpg" alt="People"></div>
                                            <div @click="goToCook()"  class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/12design02.jpg" alt="People"></div>
                                            <div @click="goToCook()"  class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/12design03.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>
     

                                
                             <md-card style="margin-bottom: 12px;">
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotoe4.jpg" alt="People" @click="goToPerfilSpring()">
                                    </md-avatar>

                                    <div class="md-title" @click="goToCafe()">Café La Nacional</div>
                                    <div class="md-subhead">Spring Professional</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div @click="goToCafe()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/2design01.jpg" alt="People"></div>
                                            <div @click="goToCafe()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/2design02.jpg" alt="People"></div>
                                            <div @click="goToCafe()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/2design03.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>


                             <md-card style="margin-bottom: 12px;">
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotop4.jpg" alt="People" @click="goToPerfilAnne()">
                                    </md-avatar>

                                    <div class="md-title" alt="People" @click="goToCreation()">Lenovo Yoga 920</div>
                                    <div class="md-subhead">Anne Sper</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div  @click="goToCreation()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/10video02.jpg" alt="People"></div>
                                            <div   @click="goToCreation()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/10video03.jpg" alt="People"></div>
                                            <div   @click="goToCreation()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/10video04.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>


                             <md-card style="margin-bottom: 12px;"> 
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotoe5.jpg" alt="People" @click="goToPerfilDracma()">
                                    </md-avatar>

                                    <div class="md-title" @click="goToLonely()">Lonely Watcher</div>
                                    <div class="md-subhead">Dracma 3D</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div @click="goToLonely()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/13d02.jpg" alt="People"></div>
                                            <div @click="goToLonely()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/13d03.jpg" alt="People"></div>
                                            <div @click="goToLonely()"  class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/13d04.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>


                             <md-card style="margin-bottom: 12px;"> 
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotoe6.jpg" alt="People" @click="goToPerfilEvolve()">
                                    </md-avatar>

                                    <div class="md-title" @click="goToThanos()">Thanos</div>
                                    <div class="md-subhead">Evolve Games</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div @click="goToThanos()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/23d02.jpg" alt="People"></div>
                                            <div @click="goToThanos()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/23d03.jpg" alt="People"></div>
                                            <div @click="goToThanos()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/23d04.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>


                           <md-card style="margin-bottom: 12px;"> 
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotop5.jpg" alt="People" @click="goToPerfilBernat()">
                                    </md-avatar>

                                    <div class="md-title" @click="goToPink()">Pink</div>
                                    <div class="md-subhead">Bernat Valls</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div @click="goToPink()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/14video01.jpg" alt="People"></div>
                                            <div @click="goToPink()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/14video02.jpg" alt="People"></div>
                                            <div @click="goToPink()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/14video03.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>


                            <md-card style="margin-bottom: 12px;"> 
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotop7.jpg" alt="People" @click="goToPerfilMark()">
                                    </md-avatar>

                                    <div class="md-title" @click="goToRenegades()">Renegades 3</div>
                                    <div class="md-subhead">Mark Case</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div @click="goToRenegades()"  class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/163d01.jpg" alt="People"></div>
                                            <div @click="goToRenegades()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/163d02.jpg" alt="People"></div>
                                            <div  @click="goToRenegades()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/163d03.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>


						<md-card style="margin-bottom: 12px;"> 
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotoe2.jpg" alt="People" @click="goToPerfilMkmedia()">
                                    </md-avatar>

                                    <div class="md-title" @click="goToShow()">Show Reel</div>
                                    <div class="md-subhead">Mk Media</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter" >
                                            <div @click="goToShow()"  class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/1video02.jpg" alt="People"></div>
                                            <div @click="goToShow()"  class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/1video03.jpg" alt="People"></div>
                                            <div @click="goToShow()"  class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/1video04.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>





                            <md-card style="margin-bottom: 12px;"> 
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotop10.jpg" alt="People" @click="goToPerfilMartha()">
                                    </md-avatar>

                                    <div class="md-title"  @click="goToDu()">Du Squad</div>
                                    <div class="md-subhead">Martha Flat</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div  @click="goToDu()"  class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/233d01.jpg" alt="People"></div>
                                            <div  @click="goToDu()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/233d02.jpg" alt="People"></div>
                                            <div  @click="goToDu()"  class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/233d03.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>



                            <md-card style="margin-bottom: 12px;"> 
                                  <md-card-header>
                                    <md-avatar>
                                        <img src="img/user/fotoe7.jpg" alt="People" @click="goToPerfilWoman()">
                                    </md-avatar>

                                    <div class="md-title" @click="goToDungeon()">Dungeon Hunter</div>
                                    <div class="md-subhead">Woman vs. Machine</div>
                                  </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div @click="goToDungeon()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/4video02.jpg" alt="People"></div>
                                            <div @click="goToDungeon()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/projects/4video03.jpg" alt="People"></div>
                                            <div @click="goToDungeon()" class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/projects/4video04.jpg" alt="People"></div>
                                          </div> 
                                    </md-card-media>
                            </md-card>




                    </div>
                </div>

               
     
`
                     };
