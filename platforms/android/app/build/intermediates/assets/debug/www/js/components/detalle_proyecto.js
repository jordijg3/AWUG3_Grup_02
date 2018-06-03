


const detalleProyectoTemplate = {props: [], 
    data: () => ({
                radio: false,   
                }),
    methods: {
            
            goToPerfile: function(){                
                    this.$router.push('perfil');
                },
        },
    mounted: function(){
                 // The iframe
                  var iframe = document.getElementById( 'api-frame' );
                  // API version
                  var version = '1.0.0';
                  // Model to load
                  var urlid = 'ba8389b72ffc4d52a5ce7b95aa73b79d';
                  // Sketchfab API client object
                  var client = new Sketchfab( version, iframe );

                // Alternatively, you can request last version.
                // var client = new Sketchfab( iframe );

                client.init( urlid, {
                    success: function onSuccess( api ){
                        api.start();
                        api.addEventListener( 'viewerready', function() {

                            // API is ready to use
                            // Insert your code here
                            console.log( 'Viewer is ready' );

                        } );
                    },
                    error: function onError() {
                        console.log( 'Viewer error' );
                    }
                } );
            },
     template:`

<div style="background-color: #fafafa;">

  <div class="md-layout md-gutter" style="padding: 2%; border-bottom: 1px solid #f2f2f2;">
    <div class="md-layout-item md-size-15" style="text-align:center" @click="goToPerfile()"><md-icon class="md-size-1x">keyboard_arrow_left</md-icon></div>
    <div class="md-layout-item"> <span class="md-title" style="text-transform: initial;">Nombre Proyecto</span><br></div>
    <div class="md-layout-item"></div>
  </div>

   <div class="card-expansion">
      <md-card style="background-color: #fafafa;box-shadow: none;">
            <md-card-header>
             <div class="md-body-1" style="border-bottom: 1px solid rgb(242, 242, 242);">3D View</div>
              </md-card-header>

                  <md-card-media style="padding: 0px 16px 16px; border-bottom: 1px solid rgb(239, 239, 239)">
                  <div class="md-layout md-gutter">
                  <div class="md-subhead" style="text-align:justify; text-transform: capitalize;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada vestibulum viverra. Suspendisse varius, urna sed consequat vulputate, ex odio auctor leo, commodo pellentesque risus nisl non justo. Curabitur id neque ac purus facilisis tincidunt in nec nisl. Aenean id justo vel lacus accumsan mollis eget vel lectus.</div>
              </div> 
              </md-card-media>
	   </md-card>
   </div>

  <div class="md-layout">
    <div class="md-layout-item">
            <iframe src="" id="api-frame"allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" width="100%" height="600px" style="height: 300px;"></iframe>
    </div>
  </div>

   <div class="card-expansion" style="padding-top: 20px;">
      <md-card style="background-color: #fafafa;box-shadow: none;">
            <md-card-header>
             <div class="md-body-1" style="border-bottom: 1px solid rgb(242, 242, 242);">Photos</div>
              </md-card-header>

                  <md-card-media style="padding: 0px 16px 16px; border-bottom: 1px solid rgb(239, 239, 239);">
                  <div class="md-layout md-gutter">
                  <div class="md-subhead" style="text-align:justify; text-transform: capitalize;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada vestibulum viverra. Suspendisse varius, urna sed consequat vulputate.</div>
              </div> 
              </md-card-media>
	   </md-card>
   </div>
  
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/project_spaceworld_1.jpg" alt="People"></div>
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/project_spaceworld_2.jpg" alt="People"></div>
     <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/project_spaceworld_3.jpg" alt="People"></div>


  </div>



`

                       
                       };
