
const BuscadorTemplate = {props: [], 
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
            <img style="width: 100%;" src="img/buscador.jpg">
            <div>
                 <md-tabs md-alignment="centered" class="md-transparent" style="background-color:#f2f2f2">
                  
                <md-tab id="tab-proyectos" md-label="Proyectos" style="padding: 0px; height: 591px;">
                            <div>
                                <img style="width: 100%;" src="img/buscador_2.jpg">
                            </div>
                </md-tab>

                  <md-tab id="tab-profesionales" md-label="Profesionales" style="padding: 0px;">
                             <div>
                               <img style="width: 100%;" src="img/buscador_3.jpg">
                            </div>
                    </md-tab>

                      <md-tab id="tab-empleo" md-label="Empleo" style="padding: 0px;">
                           <div>
                               <img style="width: 100%;" src="img/buscador_4.jpg">
                            </div>
                        </md-tab>
                </md-tabs>
            </div> 



`

                       
                       };
