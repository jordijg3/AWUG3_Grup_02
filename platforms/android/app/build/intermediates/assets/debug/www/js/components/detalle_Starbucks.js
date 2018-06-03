
const StarbucksTemplate = {props: [], 
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
    <div class="md-layout-item"> <span class="md-title" style="text-transform: initial;">Starbucks: PlayWithUs</span><br></div>
    <div class="md-layout-item"></div>

<md-card-media style="padding: 0px 16px 16px;">
                  <div class="md-layout md-gutter">
                  <div class="md-subhead" style="text-align:justify; text-transform: capitalize;">The final result is a short advertising which uses the hashtag #playwithus in order to invite all the people to feel a little easy and have fun with Starbucks's world.</div></div>
  </div>

   <div class="card-expansion">
      <md-card style="background-color: #fafafa;box-shadow: none;">
            <md-card-header>
             <div class="md-body-1" style="border-bottom: 1px solid rgb(242, 242, 242);">Videos</div>
              </md-card-header>
	   </md-card>
   </div>

  <div class="md-layout">
  <div class="md-layout-item" style="padding-bottom: 16px;height:auto;">


<iframe src="https://player.vimeo.com/video/206538815?autoplay=1&loop=0&autopause=0" width="auto" height="auto" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="min-width:415px; min-height:250px;"></iframe>

</div>
  </div>








   <div class="card-expansion" style="padding-top: 20px;">
      <md-card style="background-color: #fafafa;box-shadow: none;">
            <md-card-header>
             <div class="md-body-1" style="border-bottom: 1px solid rgb(242, 242, 242);">Photos</div>
	   </md-card>
   </div>
  
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/projects/15video02.jpg" alt="People"></div>
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/projects/15video03.jpg" alt="People"></div>
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/projects/15video04.jpg" alt="People"></div>


  </div>



`

                       
                       };
