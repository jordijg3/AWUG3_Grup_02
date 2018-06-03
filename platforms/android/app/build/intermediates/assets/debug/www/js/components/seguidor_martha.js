
const seguidor_marthaTemplate = {props: [], 
                          data: () => ({
        radio: false,
       
    }),
        methods: {
            
            goToPerfileMartha: function(){                
                    this.$router.push('perfil_Martha');
                },
        },
        template:`

<div style="background-color: #fafafa;">

  <div class="md-layout md-gutter" style="padding: 2%; border-bottom: 1px solid #f2f2f2;">
    <div class="md-layout-item md-size-15" style="text-align:center" @click="goToPerfileMartha()"><md-icon class="md-size-1x">keyboard_arrow_left</md-icon></div>
    <div class="md-layout-item"> <span class="md-title" style="text-transform: initial;">Seguidores</span><br></div>
    <div class="md-layout-item"></div>
  </div>


    <md-list class="md-triple-line" style="background-color: #fafafa;">
      <md-list-item>
        <md-avatar>
            <img src="img/user/fotoe5.jpg" alt="Dracma">
        </md-avatar>

        <div class="md-list-item-text">
          <span>Dracma 3D</span>
          <span>Empresa de 3D</span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>

        <md-button class="md-icon-button md-list-action">
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      <md-list-item>
        <md-avatar>
    		<img src="img/user/fotoe6.jpg" alt="Evalve">
		</md-avatar>

        <div class="md-list-item-text">
          <span>Evalve Games</span>
          <span>Empresa de 3D</span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>

        <md-button class="md-icon-button md-list-action">
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      

       
      </md-list-item>
    </md-list>
  </div>



`

                       
                       };