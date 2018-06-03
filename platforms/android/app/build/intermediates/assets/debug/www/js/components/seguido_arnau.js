
const seguido_arnauTemplate = {props: [], 
                          data: () => ({
        radio: false,
       
    }),
        methods: {
            
           goToPerfile: function(){                
                    this.$router.push('perfil');
                },
        },
        template:`

<div style="background-color: #fafafa;">

  <div class="md-layout md-gutter" style="padding: 2%; border-bottom: 1px solid #f2f2f2;">
    <div class="md-layout-item md-size-15" style="text-align:center" @click="goToPerfile()"><md-icon class="md-size-1x">keyboard_arrow_left</md-icon></div>
    <div class="md-layout-item"> <span class="md-title" style="text-transform: initial;">Siguiendo</span><br></div>
    <div class="md-layout-item"></div>
  </div>


    <md-list class="md-triple-line" style="background-color: #fafafa;">
     <md-list-item>
        <md-avatar>
            <img src="img/user/fotop5.jpg" alt="Bernat">
        </md-avatar>

        <div class="md-list-item-text">
          <span>Bernat Valls</span>
          <span>Motion Graphics Artist</span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>

        <md-button class="md-icon-button md-list-action">
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      <md-list-item>
        <md-avatar>
    		<img src="img/user/fotop7.jpg" alt="Mark">
		</md-avatar>

        <div class="md-list-item-text">
          <span>Mark Case</span>
          <span>3D Artist</span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>

        <md-button class="md-icon-button md-list-action">
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

		<md-list-item>
        <md-avatar>
    		<img src="img/user/fotoe4.jpg" alt="Spring">
		</md-avatar>

        <div class="md-list-item-text">
          <span>Spring Professional</span>
          <span>Empresa de Diseño</span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>

        <md-button class="md-icon-button md-list-action">
        </md-button>
      </md-list-item>
      

       
      </md-list-item>
    </md-list>
  </div>



`

                       
                       };