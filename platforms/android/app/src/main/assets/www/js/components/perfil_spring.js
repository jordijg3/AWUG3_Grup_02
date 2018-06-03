var listaJson8 = [
       
    {idproyecto: "2", nombre: " Café La Nacional", descripcion: " Aenean vulputate eleifend tellus. Aenean leo ligul", img1:"img/projects/2design01.jpg", img2:"img/projects/2design02.jpg", img3:"img/projects/2design03.jpg"},
    {idproyecto: "7", nombre: " Delicia", descripcion: " Aenean vulputate eleifend tellus. Aenean leo ligul", img1:"img/projects/7design01.jpg", img2:"img/projects/7design02.jpg", img3:"img/projects/7design03.jpg"},
    {idproyecto: "9", nombre: " PersonalBrand", descripcion: " Aenean vulputate eleifend tellus. Aenean leo ligul", img1:"img/projects/9design01.jpg", img2:"img/projects/9design02.jpg", img3:"img/projects/9design03.jpg"},

	
];

const SpringTemplate = {props: [], 
                        
        created: function(){
            this.proyectosperfiles = listaJson8;
            
        },  
                        
        data: () => ({
                showNavigation: false,
                proyectosperfiles: [{idproyecto: "", nombre: "", descripcion: "", img1:"", img2:"", img3:"",}]
                            }),
                        
                        
        methods: {
            
            goToSeguidor: function(){                
                    this.$router.push('seguidor');
                },
            
            goToSeguido: function(){                
                    this.$router.push('seguido');
                },
            
           goToDetalleProyecto: function(){                
                    this.$router.push('detalleProyecto');
                },
            
               goToCafe: function(){                
                    this.$router.push('detalle_cafe');
                },
            
            
        },
        template:`

        <div style="background-color: #fafafa;">

              <div class="md-layout md-gutter" style="padding: 5%;">

                    <div class="md-layout-item md-size-25">
                        <md-avatar class="md-large" style="width: 100%;height: 100%;">
                                <img src="img/user/fotoe4.jpg" alt="People">
                        </md-avatar>
                    </div>

                    <div class="md-layout-item" style="margin-top:3%"> 
                    <span class="md-title" style="text-transform: initial;">Spring Professional</span><br>
                     <md-button class="md-raised md-primary" style="width:100%; margin: 0px; height: 25px; margin-top: 8px; font-size: 10px; text-align:center; box-shadow: none;">Seguir</md-button>
                    </div>
              </div>

              <div class="md-layout md-gutter" style="padding: 0% 10% 5%;">
                 <span class="md-caption" style="text-transform: initial;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce. Eu imperdiet velit.</span>
              </div>

              <div class="md-layout md-gutter" style="padding: 0% 5% 5% 5%;">

                    <div class="md-layout-item" style="text-align:center;">
                        <span class="md-body-1"><b>109</b></span><br>
                        <span class="md-caption"">Seguidos</span>
                    </div>

                     <div class="md-layout-item" style="text-align:center;">
                        <span class="md-body-1"><b>29K</b></span><br>
                        <span class="md-caption"">Seguidores</span>
                    </div>

                     <div class="md-layout-item" style="text-align:center;">
                        <span class="md-body-1"><b>12</b></span><br>
                        <span class="md-caption">Colaboraciones</span>
                    </div>
              </div>


                 <md-tabs md-alignment="centered" class="md-transparent" style="border-top: 1px solid #efefef;height: 100%; background-color: rgb(250, 250, 250);">

                      <md-tab id="tab-proyectos" md-label="Proyectos" style="border-bottom: 1px solid #f2f2f2; background-color:#fafafa; height: 658px;">



                                  <div class="card-expansion"  @click="goToCafe()" style="padding-bottom: 16px;" v-for="proyectoperfiles in proyectosperfiles">
                                    <md-card style="background-color: #fafafa;">

                                      <md-card-header>
                                        <div class="md-body-1">{{proyectoperfiles.nombre}}</div>
                                        <div class="md-subhead"></div>
                                      </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img :src="proyectoperfiles.img1" alt="People"></div>
                                            <div class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img :src="proyectoperfiles.img2" alt="People"></div>
                                            <div class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img :src="proyectoperfiles.img3" alt="People"></div>
                                          </div> 
                                      </md-card-media>
									</md-card>
                                    </div>

                    
                    </md-tab>


                      <md-tab id="tab-soy" md-label="Sobre mí" style="padding: 0px; border-bottom: 1px solid #f2f2f2; background-color:#fafafa">

                                  <div class="card-expansion">
                                    <md-card style="background-color: #fafafa;box-shadow: none;">

                                      <md-card-header>
                                        <div class="md-body-1">¿Quién Soy?</div>
                                      </md-card-header>

                                      <md-card-media style="padding: 0px 16px 16px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                        <div class="md-subhead" style="text-align:justify; text-transform: capitalize;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada vestibulum viverra. Suspendisse varius, urna sed consequat vulputate, ex odio auctor leo, commodo pellentesque risus nisl non justo. Curabitur id neque ac purus facilisis tincidunt in nec nisl. Aenean id justo vel lacus accumsan mollis eget vel lectus.</div>
                                          </div> 
                                      </md-card-media>
									</md-card>
                                 </div>


                                  <div class="card-expansion">
                                    <md-card style="background-color: #fafafa;box-shadow: none;">

                                      <md-card-header>
                                        <div class="md-body-1">Habilidades</div>
                                      </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div class="md-subhead">   
                                                <md-list>
                                                  <md-list-item>Plain Text</md-list-item>
                                                  <md-list-item>Button</md-list-item>
                                                  <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
                                                  <md-list-item to="/components/list/router">Link Router</md-list-item>
                                                  <md-list-item to="/components/list">Link Router Active Color</md-list-item>
                                                </md-list>
                                            </div>
                                          </div> 
                                      </md-card-media>
									</md-card>
                                 </div> 


                                  <div class="card-expansion">
                                    <md-card style="background-color: #fafafa;box-shadow: none;">

                                      <md-card-header>
                                        <div class="md-body-1">Software</div>
                                      </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                        <div class="md-subhead">
                                            <md-list>
                                                  <md-list-item>Plain Text</md-list-item>
                                                  <md-list-item>Button</md-list-item>
                                                  <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
                                                  <md-list-item to="/components/list/router">Link Router</md-list-item>
                                                  <md-list-item to="/components/list">Link Router Active Color</md-list-item>
                                                </md-list>
                                            </div>
                                          </div> 
                                      </md-card-media>
										</md-card>
                                 </div> 





                    </md-tab>

                      <md-tab id="tab-colecciones" md-label="Colecciones" style="padding: 0px;">

                                  <div class="card-expansion">
                                    <md-card style="background-color: #fafafa;box-shadow: none;">

                                      <md-card-header>
                                        <div class="md-body-1">Space World</div>
                                        <div class="md-subhead"></div>
                                      </md-card-header>

                                      <md-card-media style="padding: 0px 0px 16px 0px; border-bottom: 1px solid rgb(239, 239, 239)">
                                         <div class="md-layout md-gutter">
                                            <div class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/project_spaceworld_1.jpg" alt="People"></div>
                                            <div class="md-layout-item" style="padding-right: 1px;padding-left: 1px;" ><img src="img/project_spaceworld_2.jpg" alt="People"></div>
                                            <div class="md-layout-item" style="padding-right: 1px;padding-left: 1px;"><img src="img/project_spaceworld_3.jpg" alt="People"></div>
                                          </div> 
                                      </md-card-media>
										</md-card>
                                    </div>

                        </md-tab>
                </md-tabs>
         </div>     
  
     
`
                     };

