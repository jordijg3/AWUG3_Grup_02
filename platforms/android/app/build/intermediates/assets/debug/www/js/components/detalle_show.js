
const ShowTemplate = {props: [], 
    data: () => ({
                radio: false,   
                }),
    methods: {
            
               goToPerfilMkmedia: function(){                
                    this.$router.push('perfil_Mkmedia');
                },
            
        },
    
     template:`

<div style="background-color: #fafafa;">

  <div class="md-layout md-gutter" style="padding: 2%; border-bottom: 1px solid #f2f2f2;">
    <div class="md-layout-item md-size-15" style="text-align:center" @click="goToPerfilMkmedia()"><md-icon class="md-size-1x">keyboard_arrow_left</md-icon></div>
    <div class="md-layout-item"> <span class="md-title" style="text-transform: initial;">Show Reel</span><br></div>
    <div class="md-layout-item"></div>

<md-card-media style="padding: 0px 16px 16px;">
                  <div class="md-layout md-gutter">
                  <div class="md-subhead" style="text-align:justify; text-transform: capitalize;">Sed eget eros sit amet elit euismod bibendum eu et</div></div>
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


<iframe src="https://player.vimeo.com/video/268305625?autoplay=1&loop=0&autopause=0" width="auto" height="auto" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="min-width:415px; min-height:235px;"></iframe>

</div>
  </div>



   <div class="card-expansion" style="padding-top: 20px;">
      <md-card style="background-color: #fafafa;box-shadow: none;">
            <md-card-header>
             <div class="md-body-1" style="border-bottom: 1px solid rgb(242, 242, 242);">Photos</div>
            </md-card-header>
	   </md-card>
   </div>
  
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/projects/1video02.jpg" alt="People"></div>
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/projects/1video03.jpg" alt="People"></div>
    <div class="md-layout-item" style="padding-bottom: 16px;"><img src="img/projects/1video04.jpg" alt="People"></div>


  </div>



`

                       
                       };

