
const seguidor_bernatTemplate = {props: [], 
                          data: () => ({
        radio: false,
       
    }),
        methods: {
            
            goToPerfileBernat: function(){                
                    this.$router.push('perfil_bernat');
                },
        },
        template:`

<div style="background-color: #fafafa;">

  <div class="md-layout md-gutter" style="padding: 2%; border-bottom: 1px solid #f2f2f2;">
    <div class="md-layout-item md-size-15" style="text-align:center" @click="goToPerfileBernat()"><md-icon class="md-size-1x">keyboard_arrow_left</md-icon></div>
    <div class="md-layout-item"> <span class="md-title" style="text-transform: initial;">Seguidores</span><br></div>
    <div class="md-layout-item"></div>
  </div>


    <md-list class="md-triple-line" style="background-color: #fafafa;">
      <md-list-item>
        <md-avatar>
            <img src="img/user/fotop1.jpg" alt="Arnau">
        </md-avatar>

        <div class="md-list-item-text">
          <span>Arnau Felip</span>
          <span>Diseñador</span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>

        <md-button class="md-icon-button md-list-action">
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      <md-list-item>
        <md-avatar>
    		<img src="img/user/fotoe2.jpg" alt="MK">
		</md-avatar>

        <div class="md-list-item-text">
          <span>MK Media</span>
          <span>Empresa de Video</span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>

        <md-button class="md-icon-button md-list-action">
        </md-button>
      </md-list-item>

	 <md-divider class="md-inset"></md-divider>

		  <md-list-item>
        <md-avatar>
    		<img src="img/user/fotoe7.jpg" alt="Woman">
		</md-avatar>

        <div class="md-list-item-text">
          <span>Woman VS Machine</span>
          <span>Empresa de Video</span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>

        <md-button class="md-icon-button md-list-action">
        </md-button>
      </md-list-item>

	 <md-divider class="md-inset"></md-divider>

		<md-list-item>
        <md-avatar>
    		<img src="img/user/fotop4.jpg" alt="Anne">
		</md-avatar>

        <div class="md-list-item-text">
          <span>Anne Sper</span>
          <span>Motion Graphics Designer</span>
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