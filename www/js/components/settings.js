const SettingsTemplate = {props: [], 
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
            <div>
                  <img style="width: 100%;" src="img/home.jpg">
            </div>   
    </div>
`
                     };
