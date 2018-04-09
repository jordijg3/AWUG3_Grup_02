const PerfilTemplate = {props: [], 
                          data: () => ({
        radio: false,
        active: false,
        value: null,
        primary: [
                  'Orange',
                  'Apple',
                  'Pineapple'
                ],
        accent: [
                  'Cat',
                  'Dog',
                  'Rabbit'
                ]
    }),
        methods: {
              onConfirm () {
                this.value = 'Agreed'
              },
              onCancel () {
                this.value = 'Disagreed'
              }
        },
        template:`

        <div>
            <img style="width: 100%;" src="img/perfil_1.jpg">
            <div>
                 <md-tabs md-alignment="centered" class="md-transparent" style="background-color:#f2f2f2">

                      <md-tab id="tab-proyectos" md-label="Proyectos" style="padding: 0px; height: 591px;">
                            <div>
                                <img style="width: 100%;" src="img/perfil_2.jpg">
                            </div>
                    </md-tab>

                  <md-tab id="tab-soy" md-label="Quien soy" style="padding: 0px;">
                             <div>
                                <img style="width: 100%;" src="img/perfil_4.jpg">
                            </div>
                    </md-tab>

                      <md-tab id="tab-colecciones" md-label="Colecciones" style="padding: 0px;">
                           <div>
                                <img style="width: 100%;" src="img/perfil_3.jpg">
                            </div>
                        </md-tab>
                </md-tabs>
            </div>     

		              





		     

                

                

                
        </div>
`
                     };

