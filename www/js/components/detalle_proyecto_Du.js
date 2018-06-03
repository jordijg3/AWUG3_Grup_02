
const DuTemplate = {props: [], 
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
    <div class="md-layout-item"> <span class="md-title" style="text-transform: initial;">Du Squad</span><br></div>
    <div class="md-layout-item"></div>

<md-card-media style="padding: 0px 16px 16px;">
                  <div class="md-layout md-gutter">
                  <div class="md-subhead" style="text-align:justify; text-transform: capitalize;">New commercial for Peppermelon.</div></div>
  </div>


   <div class="card-expansion" style="padding-top: 20px;">
      <md-card style="background-color: #fafafa;box-shadow: none;">
            <md-card-header>
             <div class="md-body-1" style="border-bottom: 1px solid rgb(242, 242, 242);">Photos</div>
	   </md-card>
   </div>
  
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/projects/1233d01.jpg" alt="People"></div>
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/projects/233d02.jpg" alt="People"></div>
     <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/projects/233d03.jpg" alt="People"></div>


  </div>



`

                       
                       };
